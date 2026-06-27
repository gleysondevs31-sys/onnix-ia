import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const delay = ms => new Promise(r => setTimeout(r, ms));

// Sessões ativas por sender
const sessions = new Map();

/**
 * Gera o multiplicador de crash baseado em distribuição exponencial.
 * ~50% das vezes cai antes de 2x, ~10% chega a 10x+
 */
function gerarCrashPoint() {
  const r = Math.random();
  // Fórmula clássica do Aviator: crash = 0.99 / (1 - r)  com teto de 100x
  const crash = Math.min(100, 0.99 / (1 - r));
  return Math.floor(crash * 100) / 100; // 2 casas decimais
}

function renderPlane(mult) {
  if (mult < 1.5)  return '✈️';
  if (mult < 3)    return '🚀';
  if (mult < 6)    return '🛸';
  if (mult < 15)   return '🌕';
  return '🌌';
}

function renderBar(mult, crashAt) {
  const pct = Math.min(1, (mult - 1) / (crashAt - 1 || 1));
  const filled = Math.round(pct * 10);
  const icon = renderPlane(mult);
  return `${icon} ${'▓'.repeat(filled)}${'░'.repeat(10 - filled)} ${mult.toFixed(2)}x`;
}

export default {
  name: 'aviator',
  aliases: ['aviao', 'voo', 'fly'],
  category: 'fun',
  description: 'Aposte e retire antes do avião cair! ✈️',
  cooldown: 8000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    // ─── Retirada durante voo ───
    if (sessions.has(sender)) {
      const s = sessions.get(sender);
      if (s.status !== 'flying') {
        return await messageQueue.enqueue(sock, jid, {
          text: `✈️ Aguarde o avião decolar!`
        }, { quoted: msg });
      }

      // Jogador retirou!
      s.status = 'cashed';
      const prize = Math.floor(s.bet * s.currentMult);
      addCoins(sender, prize);
      const profit = prize - s.bet;
      const newBal = getProfile(sender).coins;

      sessions.delete(sender);

      return await messageQueue.enqueue(sock, jid, {
        text: `✈️ *AVIATOR — RETIRADA!* 💸\n\n` +
              `Você saiu em *${s.currentMult.toFixed(2)}x*!\n` +
              `💰 Prêmio: *+${formatCoins(prize)} coins*\n` +
              `📈 Lucro: *+${formatCoins(profit)} coins*\n` +
              `💳 Saldo: *${formatCoins(newBal)} coins*`
      }, { quoted: msg });
    }

    // ─── Novo jogo ───
    const bet = parseInt(args[0]);

    if (isNaN(bet) || bet <= 0) {
      const p = getProfile(sender);
      return await messageQueue.enqueue(sock, jid, {
        text: `✈️ *AVIATOR*\n\n` +
              `Aposte e retire antes do avião cair!\n` +
              `O multiplicador cresce em tempo real.\n\n` +
              `• *Uso:* /aviator [valor]\n` +
              `• *Retirar:* envie /aviator novamente durante o voo\n\n` +
              `💳 Saldo: *${formatCoins(p.coins)} coins*`
      }, { quoted: msg });
    }

    if (bet < 10) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Aposta mínima: *10 coins*`
      }, { quoted: msg });
    }

    if (!removeCoins(sender, bet)) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Saldo insuficiente! Você tem *${formatCoins(getProfile(sender).coins)} coins*.`
      }, { quoted: msg });
    }

    const crashAt = gerarCrashPoint();
    const session = { bet, crashAt, currentMult: 1.00, status: 'launching' };
    sessions.set(sender, session);

    // Decolagem
    const flyMsg = await messageQueue.enqueue(sock, jid, {
      text: `✈️ *AVIATOR — DECOLANDO!*\n\n🕐 Preparando o voo...\n\n_(Envie /aviator para retirar quando quiser!)_`
    }, { quoted: msg });

    await delay(1500);
    session.status = 'flying';

    // Animação do voo em etapas
    const steps = [1.25, 1.50, 2.00, 2.50, 3.00, 4.00, 5.00, 7.50, 10.0, 15.0, 20.0, 30.0, 50.0, 100.0];

    for (const step of steps) {
      if (step > crashAt) break;
      if (session.status !== 'flying') return; // jogador retirou

      session.currentMult = step;
      try {
        await sock.sendMessage(jid, {
          text: `✈️ *AVIATOR — EM VOO!*\n\n` +
                `${renderBar(step, crashAt)}\n\n` +
                `💸 Se retirar agora: *${formatCoins(Math.floor(bet * step))} coins*\n` +
                `_(Envie /aviator para retirar!)_`,
          edit: flyMsg.key
        });
      } catch (e) {}
      await delay(1400);
    }

    // Avião caiu!
    if (session.status === 'flying') {
      sessions.delete(sender);
      try {
        await sock.sendMessage(jid, {
          text: `💥 *AVIATOR — CRASH!*\n\n` +
                `O avião caiu em *${crashAt.toFixed(2)}x*! 🔴\n\n` +
                `💸 Você perdeu *${formatCoins(bet)} coins*!\n` +
                `💳 Saldo: *${formatCoins(getProfile(sender).coins)} coins*\n\n` +
                `_Mais sorte na próxima vez!_`,
          edit: flyMsg.key
        });
      } catch (e) {
        await messageQueue.enqueue(sock, jid, {
          text: `💥 *CRASH em ${crashAt.toFixed(2)}x!* Você perdeu *${formatCoins(bet)} coins*!`
        });
      }
    }
  }
};
