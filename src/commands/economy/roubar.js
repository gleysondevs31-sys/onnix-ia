import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins, getCooldown, setCooldown } from '../../database/profiles.js';
import { extractUser } from '../../utils/lidUtils.js';
import { formatCoins } from '../../utils/formatCoins.js';

const COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 horas

export default {
  name: 'roubar',
  aliases: ['roubo', 'rob', 'assaltar'],
  category: 'economy',
  description: 'Tente roubar coins de alguém! (cuidado, pode dar errado)',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, jid, sender, pushName, mentionedJid } = context;

    // Cooldown do ladrão
    const lastRob = getCooldown(sender, 'lastRob');
    const elapsed = Date.now() - lastRob;
    if (elapsed < COOLDOWN_MS) {
      const left = COOLDOWN_MS - elapsed;
      const min = Math.ceil(left / 60000);
      return await messageQueue.enqueue(sock, jid, {
        text: `🚔 Você está sendo vigiado pela polícia!\n\n⏳ Aguarde *${min} minuto(s)* para tentar de novo.`
      }, { quoted: msg });
    }

    let targetJid = mentionedJid?.[0] || msg.message?.extendedTextMessage?.contextInfo?.participant;
    if (!targetJid) {
      return await messageQueue.enqueue(sock, jid, {
        text: `🔫 *ROUBO*\n\nUso: */roubar @usuario*\n\n⚠️ _Cuidado! Pode dar errado e você paga multa!_`
      }, { quoted: msg });
    }

    const targetNum = extractUser(targetJid);
    const normalizedTarget = targetNum + '@s.whatsapp.net';

    if (extractUser(sender) === targetNum) {
      return await messageQueue.enqueue(sock, jid, { text: `❌ Você não pode roubar de si mesmo!` }, { quoted: msg });
    }

    const senderProfile = getProfile(sender);
    const victimProfile = getProfile(normalizedTarget);

    if (victimProfile.coins < 50) {
      return await messageQueue.enqueue(sock, jid, {
        text: `💸 @${targetNum} está tão pobre que não vale a pena roubar! (menos de 50 coins)`,
        mentions: [targetJid]
      }, { quoted: msg });
    }

    setCooldown(sender, 'lastRob');

    const roll = Math.random();

    if (roll < 0.45) {
      // ✅ Sucesso — rouba entre 10% e 30% do saldo da vítima
      const pct = 0.10 + Math.random() * 0.50;
      const roubado = Math.max(10, Math.floor(victimProfile.coins * pct));
      removeCoins(normalizedTarget, roubado);
      const novoSaldo = addCoins(sender, roubado);

      await messageQueue.enqueue(sock, jid, {
        text: `🔫 *ASSALTO BEM-SUCEDIDO!*\n\n🦹 *${pushName}* roubou de @${targetNum}!\n💰 Valor roubado: *${formatCoins(roubado)} coins*\n\n💳 Seu novo saldo: *${formatCoins(novoSaldo)} coins*\n⏳ Próximo roubo em *2 horas*`,
        mentions: [targetJid]
      }, { quoted: msg });

    } else if (roll < 0.75) {
      // ❌ Falhou — paga multa ao alvo
      const multa = Math.min(senderProfile.coins, Math.floor(victimProfile.coins * 0.10) + 50);
      removeCoins(sender, multa);
      addCoins(normalizedTarget, multa);
      const novoSaldo = getProfile(sender).coins;

      await messageQueue.enqueue(sock, jid, {
        text: `🚨 *ASSALTO FRACASSADO!*\n\n👮 Polícia chegou! *${pushName}* foi pego tentando roubar @${targetNum} e pagou *${formatCoins(multa)} coins* de multa!\n\n💳 Seu saldo: *${formatCoins(novoSaldo)} coins*`,
        mentions: [targetJid]
      }, { quoted: msg });

    } else {
      // 💀 Desastre — perde muito mais
      const perda = Math.min(senderProfile.coins, Math.floor(senderProfile.coins * 0.20) + 100);
      removeCoins(sender, perda);
      const novoSaldo = getProfile(sender).coins;

      await messageQueue.enqueue(sock, jid, {
        text: `🚓 *FLAGRADO E PRESO!*\n\n👮 ${pushName} foi detido e levado para a delegacia!\n💸 Perdeu *${formatCoins(perda)} coins* de fiança!\n\n💳 Seu saldo: *${formatCoins(novoSaldo)} coins*`,
        mentions: [targetJid]
      }, { quoted: msg });
    }
  }
};
