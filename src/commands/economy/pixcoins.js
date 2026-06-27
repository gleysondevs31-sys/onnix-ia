import messageQueue from '../../core/MessageQueue.js';
import profilesRepository from '../../database/profiles.js';

export default {
  name: 'pixcoins',
  aliases: ['pix', 'transferir', 'pixcoin', 'pay'],
  category: 'economy',
  description: 'Transfere coins para outro usuário.',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, sender, mentionedJid, pushName } = context;
    
    let targetJid = mentionedJid?.[0];
    if (!targetJid && msg.message?.extendedTextMessage?.contextInfo?.participant) {
      targetJid = msg.message.extendedTextMessage.contextInfo.participant;
    }
    
    if (!targetJid) {
       return await messageQueue.enqueue(sock, jid, { 
         text: `❓ *Marque* ou *responda a mensagem* de quem você quer transferir coins.\n\nEx: /pix @usuario 100` 
       }, { quoted: msg });
    }

    if (targetJid === sender) {
       return await messageQueue.enqueue(sock, jid, { 
         text: `❌ Você não pode transferir coins para si mesmo.` 
       }, { quoted: msg });
    }

    const amountStr = args.find(a => !a.startsWith('@') && !isNaN(parseInt(a)));
    const amount = parseInt(amountStr);

    if (isNaN(amount) || amount <= 0) {
       return await messageQueue.enqueue(sock, jid, { 
         text: `❓ Especifique uma quantidade válida de coins a ser enviada.\n\nEx: /pix @usuario 100` 
       }, { quoted: msg });
    }

    const senderProfile = profilesRepository.getProfile(sender);

    if (senderProfile.coins < amount) {
       return await messageQueue.enqueue(sock, jid, { 
         text: `❌ Saldo insuficiente! Você tem apenas *${senderProfile.coins} coins*.\nVocê tentou enviar *${amount} coins*.` 
       }, { quoted: msg });
    }

    // Processar transferência
    profilesRepository.removeCoins(sender, amount);
    profilesRepository.addCoins(targetJid, amount);

    const newSenderProfile = profilesRepository.getProfile(sender);

    await messageQueue.enqueue(sock, jid, { 
       text: `🏦 *TRANSFERÊNCIA PIX REALIZADA!*\n\n💸 *Remetente:* ${pushName}\n📥 *Destinatário:* @${targetJid.split('@')[0]}\n💰 *Valor:* ${amount} coins\n\n_Seu novo saldo é de ${newSenderProfile.coins} coins._`,
       mentions: [targetJid]
    }, { quoted: msg });
  }
};
