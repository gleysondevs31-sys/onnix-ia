import logger from '../utils/logger.js';

// ── Configuração ─────────────────────────────────────────────────────────────
const SEND_DELAY_MS   = 1000;   // atraso de 1 segundo (rápido e orgânico, não entope a fila)
const SEND_TIMEOUT_MS = 15000;  // timeout por mensagem
const MAX_QUEUE_SIZE  = 60;     // descarta se saturar

class MessageQueue {
  constructor() {
    this.queue      = [];
    this.processing = false;
    this._stuckTimer = null;
  }

  async enqueue(sock, targetJid, payload, options = {}) {
    // Descarta mensagens se a fila estiver saturada
    if (this.queue.length >= MAX_QUEUE_SIZE) {
      logger.warn(`[MQ] Fila saturada (${this.queue.length}), descartando.`);
      return null;
    }

    return new Promise((resolve) => {
      // NUNCA rejecta — sempre resolve (null em caso de erro)
      // Isso impede que erros de envio bloqueiem o pipeline inteiro
      this.queue.push({ sock, targetJid, payload, options, resolve });
      this._processQueue();
    });
  }

  async _processQueue() {
    if (this.processing || this.queue.length === 0) return;
    this.processing = true;

    while (this.queue.length > 0) {
      // Renova watchdog a cada iteração (limite de travamento por mensagem: 45s)
      clearTimeout(this._stuckTimer);
      this._stuckTimer = setTimeout(() => {
        if (this.processing) {
          logger.warn(`[MQ] Fila travada severamente — Watchdog resetando.`);
          this.processing = false;
          this.queue.splice(0).forEach(t => t.resolve(null));
        }
      }, 45_000);

      const task = this.queue.shift();

      try {
        // --- SISTEMA ANTI-BAN (Simulação Humanoide) ---
        if (task.targetJid && !task.targetJid.includes('@broadcast')) {
          const isAudio = task.payload?.audio || task.payload?.ptt;
          const presence = isAudio ? 'recording' : 'composing';
          
          try { 
            await task.sock.sendPresenceUpdate(presence, task.targetJid);
            // Simula tempo de processamento humano (1s a 3s) escrevendo/gravando
            const typeDelay = Math.floor(Math.random() * 2000) + 1000;
            await new Promise(r => setTimeout(r, typeDelay));
          } catch {}
        }

        let resultPromise;
        if (task.options && task.options.isRelay) {
          resultPromise = task.sock.relayMessage(task.targetJid, task.payload, task.options).then(res => {
            // Em caso de envio, às vezes a Baileys de relay não resolve id ou não avisa
            return res;
          });
        } else {
          resultPromise = task.sock.sendMessage(task.targetJid, task.payload, task.options);
        }

        const result = await Promise.race([
          resultPromise,
          new Promise((_, rej) =>
            setTimeout(() => rej(new Error('send_timeout')), SEND_TIMEOUT_MS)
          ),
        ]);
        
        // Pausa simulação de digitação
        try { await task.sock.sendPresenceUpdate('paused', task.targetJid); } catch {}
        
        task.resolve(result);
      } catch (error) {
        // Log discreto, nunca trava o fluxo
        if (error.message === 'send_timeout') {
          logger.warn(`[MQ] Timeout → ${task.targetJid}`);
        } else {
          logger.warn(`[MQ] Erro envio → ${task.targetJid}: ${error.message?.slice(0, 80)}`);
        }
        task.resolve(null); // Resolve com null em vez de reject
      }

      // Pausa mínima entre envios (Anti-Spam/Anti-Ban WhatsApp)
      if (this.queue.length > 0) {
        // Jitter (aleatoriedade) para burlar detecção de comportamento de máquina (± 1500ms)
        const jitter = Math.floor(Math.random() * 3000) - 1500;
        await new Promise(r => setTimeout(r, SEND_DELAY_MS + jitter));
      }
    }

    clearTimeout(this._stuckTimer);
    this.processing = false;
  }

  getStatus() {
    return {
      queueSize:  this.queue.length,
      processing: this.processing,
      maxSize:    MAX_QUEUE_SIZE,
    };
  }

  clear() {
    const rejected = this.queue.splice(0);
    rejected.forEach(t => t.resolve(null));
    this.processing = false;
    clearTimeout(this._stuckTimer);
    logger.warn(`[MQ] Fila limpa — ${rejected.length} msgs descartadas.`);
  }
}

export const messageQueue = new MessageQueue();
export default messageQueue;
