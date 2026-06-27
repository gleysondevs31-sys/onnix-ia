import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

export default {
  name: 'addcoins',
  aliases: ['addcoin', 'darcoins'],
  category: 'economy',
  description: 'Adiciona coins a um usuário (Dono)',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, args, jid, isOwner, mentionedJid } = context;

    if (!isOwner) {
      return await messageQueue.enqueue(sock, jid, {
        text: `⛔ Apenas o dono pode usar este comando.`
      }, { quoted: msg });
    }

    // Suporte a mencao e a resposta de mensagem
    const targetJid = mentionedJid?.[0]
      || msg.message?.extendedTextMessage?.contextInfo?.participant;

    if (!targetJid) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❓ *Uso:* /addcoins @usuario 100\n\nMarque alguém ou responda à mensagem deles.`
      }, { quoted: msg });
    }

    // profiles.js normalizeKey() resolve LID→JID automaticamente
    const amountStr = args.find(a => !a.startsWith('@') && /^\d+$/.test(a));
    const amount = parseInt(amountStr);

    if (isNaN(amount) || amount <= 0) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❓ Informe um valor válido.\n\nEx: */addcoins @usuario 100*`
      }, { quoted: msg });
    }

    // addCoins chama normalizeKey internamente — resolve LID corretamente
    const newTotal = addCoins(targetJid, amount);
    const profile = getProfile(targetJid);

    await messageQueue.enqueue(sock, jid, {
      text: `💰 *+${formatCoins(amount)} coins* adicionados!\n\n👤 Usuário: @${targetJid.split('@')[0]}\n💳 Novo saldo: *${formatCoins(newTotal)} coins*`,
      mentions: [targetJid]
    }, { quoted: msg });
  }
};
