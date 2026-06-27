import messageQueue from '../../core/MessageQueue.js';
import { getProfile, removeCoins, setCoins } from '../../database/profiles.js';
import { extractUser } from '../../utils/lidUtils.js';
import { formatCoins } from '../../utils/formatCoins.js';

export default {
  name: 'rmcoins',
  aliases: ['rmcoin', 'removercoins', 'removecoins'],
  category: 'economy',
  description: 'Remove/Define coins de um usuário (Dono)',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, args, jid, isOwner, mentionedJid } = context;

    if (!isOwner) {
      return await messageQueue.enqueue(sock, jid, { text: `⛔ Apenas o dono pode usar este comando.` }, { quoted: msg });
    }

    let targetJid = mentionedJid?.[0] || msg.message?.extendedTextMessage?.contextInfo?.participant;

    if (!targetJid) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❓ *Uso:* /rmcoins @usuario 100\n/rmcoins @usuario set 500 _(define o saldo exato)_`
      }, { quoted: msg });
    }

    const targetNum = extractUser(targetJid);
    const normalizedJid = targetNum + '@s.whatsapp.net';

    // Detectar modo "set" para definir saldo exato
    const isSet = args.some(a => a.toLowerCase() === 'set');
    const amountStr = args.find(a => !a.startsWith('@') && a.toLowerCase() !== 'set' && /^\d+$/.test(a));
    const amount = parseInt(amountStr);

    if (isNaN(amount) || amount < 0) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❓ Informe um valor válido.\n\nEx: */rmcoins @usuario 100*`
      }, { quoted: msg });
    }

    if (isSet) {
      const newTotal = setCoins(normalizedJid, amount);
      return await messageQueue.enqueue(sock, jid, {
        text: `⚙️ Saldo de @${targetNum} definido para *${formatCoins(newTotal)} coins*.`,
        mentions: [targetJid]
      }, { quoted: msg });
    }

    const success = removeCoins(normalizedJid, amount);
    const profile = getProfile(normalizedJid);

    if (!success) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Saldo insuficiente! @${targetNum} tem apenas *${formatCoins(profile.coins)} coins*.`,
        mentions: [targetJid]
      }, { quoted: msg });
    }

    await messageQueue.enqueue(sock, jid, {
      text: `💸 *-${formatCoins(amount)} coins* removidos de @${targetNum}!\n\n💳 Novo saldo: *${formatCoins(profile.coins)} coins*`,
      mentions: [targetJid]
    }, { quoted: msg });
  }
};
