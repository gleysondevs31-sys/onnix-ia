import messageQueue from '../../core/MessageQueue.js';
import { 
  getSchedulerSettings, 
  setTaskEnabled, 
  setTaskSchedule, 
  restartScheduler 
} from '../../schedulers/scheduler.js';

// Presets de horário para facilitar o uso
const PRESETS = {
  // Horários fixos
  '6h': { cron: '0 6 * * *', label: '06:00' },
  '7h': { cron: '0 7 * * *', label: '07:00' },
  '8h': { cron: '0 8 * * *', label: '08:00' },
  '9h': { cron: '0 9 * * *', label: '09:00' },
  '10h': { cron: '0 10 * * *', label: '10:00' },
  '12h': { cron: '0 12 * * *', label: '12:00' },
  '14h': { cron: '0 14 * * *', label: '14:00' },
  '16h': { cron: '0 16 * * *', label: '16:00' },
  '18h': { cron: '0 18 * * *', label: '18:00' },
  '20h': { cron: '0 20 * * *', label: '20:00' },
  '22h': { cron: '0 22 * * *', label: '22:00' },
  // Intervalos
  '30min': { cron: '*/30 * * * *', label: 'A cada 30min' },
  '1h': { cron: '0 */1 * * *', label: 'A cada 1h' },
  '1h30': { cron: '*/90 * * * *', label: 'A cada 1h30m' },
  '2h': { cron: '0 */2 * * *', label: 'A cada 2h' },
  '3h': { cron: '0 */3 * * *', label: 'A cada 3h' },
  '4h': { cron: '0 */4 * * *', label: 'A cada 4h' },
  '6h-intervalo': { cron: '0 */6 * * *', label: 'A cada 6h' },
};

export default {
  name: 'schedule',
  aliases: ['agenda', 'cron', 'automatico', 'scheduler'],
  category: 'admin',
  description: 'Gerencia os sistemas automáticos (bom dia, frase, desafios)',
  cooldown: 3000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, isOwner, isAdmin } = context;
    
    if (!isOwner && !isAdmin) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `❌ Apenas administradores do bot podem gerenciar agendamentos.`
      }, { quoted: msg });
    }

    const settings = getSchedulerSettings();
    const sub = args[0]?.toLowerCase();

    // ── Sem argumentos ou "status" → Painel ──
    if (!sub || sub === 'status') {
      const statusIcon = (v) => v ? '🟢 Ativo' : '🔴 Desligado';
      
      let text = `⏰ *PAINEL DE AGENDAMENTOS*\n`;
      text += `━━━━━━━━━━━━━━━━━━━━\n\n`;
      
      text += `☀️ *Bom Dia*\n`;
      text += `┃ Status: ${statusIcon(settings.bomdia.enabled)}\n`;
      text += `┃ Horário: ${settings.bomdia.label}\n\n`;
      
      text += `🌙 *Frase do Dia*\n`;
      text += `┃ Status: ${statusIcon(settings.frase.enabled)}\n`;
      text += `┃ Horário: ${settings.frase.label}\n\n`;
      
      text += `🎲 *Desafios Dinâmicos*\n`;
      text += `┃ Status: ${statusIcon(settings.desafio.enabled)}\n`;
      text += `┃ Frequência: ${settings.desafio.label}\n`;
      text += `┃ Formatos: Texto → Áudio → Enquete → Foto\n\n`;
      
      text += `━━━━━━━━━━━━━━━━━━━━\n`;
      text += `📌 *Comandos:*\n\n`;
      text += `▸ /schedule on [task] — Ligar\n`;
      text += `▸ /schedule off [task] — Desligar\n`;
      text += `▸ /schedule horario [task] [hora]\n`;
      text += `▸ /schedule desligar — Desliga tudo\n`;
      text += `▸ /schedule ligar — Liga tudo\n\n`;
      text += `📋 *Tasks:* bomdia, frase, desafio\n`;
      text += `🕐 *Horários:* 6h, 7h, 8h...22h\n`;
      text += `⏱️ *Intervalos:* 30min, 1h, 1h30, 2h, 3h, 4h`;

      return await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
    }

    // ── Ligar task individual ──
    if (sub === 'on' || sub === 'ligar' || sub === 'ativar') {
      const task = args[1]?.toLowerCase();
      
      // Liga tudo
      if (!task || task === 'tudo' || task === 'all') {
        setTaskEnabled('bomdia', true);
        setTaskEnabled('frase', true);
        setTaskEnabled('desafio', true);
        restartScheduler(sock);
        return await messageQueue.enqueue(sock, jid, { 
          text: `✅ *Todos os agendamentos foram LIGADOS!*\n\n☀️ Bom Dia: 🟢\n🌙 Frase: 🟢\n🎲 Desafios: 🟢`
        }, { quoted: msg });
      }
      
      if (!settings[task]) {
        return await messageQueue.enqueue(sock, jid, { 
          text: `❌ Task "${task}" não existe.\n\nTasks disponíveis: bomdia, frase, desafio`
        }, { quoted: msg });
      }
      
      setTaskEnabled(task, true);
      restartScheduler(sock);
      return await messageQueue.enqueue(sock, jid, { 
        text: `✅ *${task.toUpperCase()}* foi LIGADO! 🟢\nHorário: ${settings[task].label}`
      }, { quoted: msg });
    }

    // ── Desligar task individual ──
    if (sub === 'off' || sub === 'desligar' || sub === 'desativar') {
      const task = args[1]?.toLowerCase();
      
      // Desliga tudo
      if (!task || task === 'tudo' || task === 'all') {
        setTaskEnabled('bomdia', false);
        setTaskEnabled('frase', false);
        setTaskEnabled('desafio', false);
        restartScheduler(sock);
        return await messageQueue.enqueue(sock, jid, { 
          text: `🔴 *Todos os agendamentos foram DESLIGADOS!*\n\n☀️ Bom Dia: 🔴\n🌙 Frase: 🔴\n🎲 Desafios: 🔴`
        }, { quoted: msg });
      }
      
      if (!settings[task]) {
        return await messageQueue.enqueue(sock, jid, { 
          text: `❌ Task "${task}" não existe.\n\nTasks disponíveis: bomdia, frase, desafio`
        }, { quoted: msg });
      }
      
      setTaskEnabled(task, false);
      restartScheduler(sock);
      return await messageQueue.enqueue(sock, jid, { 
        text: `🔴 *${task.toUpperCase()}* foi DESLIGADO!`
      }, { quoted: msg });
    }

    // ── Alterar horário ──
    if (sub === 'horario' || sub === 'hora' || sub === 'tempo' || sub === 'intervalo') {
      const task = args[1]?.toLowerCase();
      const timeArg = args[2]?.toLowerCase();

      if (!task || !timeArg) {
        return await messageQueue.enqueue(sock, jid, { 
          text: `❓ *Como usar:*\n\n` +
                `/schedule horario [task] [hora]\n\n` +
                `*Exemplos:*\n` +
                `▸ /schedule horario bomdia 7h\n` +
                `▸ /schedule horario frase 20h\n` +
                `▸ /schedule horario desafio 2h\n` +
                `▸ /schedule horario desafio 30min\n\n` +
                `*Tasks:* bomdia, frase, desafio\n` +
                `*Horários fixos:* 6h, 7h, 8h...22h\n` +
                `*Intervalos:* 30min, 1h, 1h30, 2h, 3h, 4h`
        }, { quoted: msg });
      }

      if (!settings[task]) {
        return await messageQueue.enqueue(sock, jid, { 
          text: `❌ Task "${task}" não existe.\n\nTasks disponíveis: bomdia, frase, desafio`
        }, { quoted: msg });
      }

      const preset = PRESETS[timeArg];
      if (!preset) {
        const available = Object.keys(PRESETS).join(', ');
        return await messageQueue.enqueue(sock, jid, { 
          text: `❌ Horário "${timeArg}" não reconhecido.\n\n*Opções disponíveis:*\n${available}`
        }, { quoted: msg });
      }

      const success = setTaskSchedule(task, preset.cron, preset.label);
      if (!success) {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Erro ao definir horário.` }, { quoted: msg });
      }

      restartScheduler(sock);
      return await messageQueue.enqueue(sock, jid, { 
        text: `✅ *${task.toUpperCase()}* agora roda às *${preset.label}*!\n\n_Os crons foram reiniciados._`
      }, { quoted: msg });
    }

    // ── Comando não reconhecido ──
    return await messageQueue.enqueue(sock, jid, { 
      text: `❓ Subcomando desconhecido.\n\nUse /schedule para ver o painel completo.`
    }, { quoted: msg });
  }
};
