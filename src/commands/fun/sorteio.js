import messageQueue from '../../core/MessageQueue.js';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  name: 'sorteio',
  aliases: ['sortear'],
  category: 'fun',
  description: 'Sorteia aleatoriamente um membro do grupo',
  cooldown: 15000,
  
  execute: async (context) => {
    const { sock, jid, isGroup, groupMetadata, isGroupAdmin, pushName } = context;
    
    if (!isGroup) return;
    if (!isGroupAdmin) {
       return await messageQueue.enqueue(sock, jid, { text: `Apenas admins podem jogar um sorteio, ${pushName}.` });
    }

    const members = groupMetadata?.participants;
    if (!members || members.length === 0) return;

    const botId = sock.user.id.split(':')[0] + '@s.whatsapp.net';
    const validMembers = members.filter(p => p.id !== botId); // Nao sortear o proprio bot

    if (validMembers.length === 0) {
      return await messageQueue.enqueue(sock, jid, { text: 'Não há membros suficientes para sortear!' });
    }

    const sorteado = validMembers[Math.floor(Math.random() * validMembers.length)];

    // Enviar mensagem inicial
    const sentMsg = await messageQueue.enqueue(sock, jid, { text: '🎰 *Iniciando sorteio...*' });
    if (!sentMsg) return;

    await delay(1200);
    await sock.sendMessage(jid, { text: '🎰 *Embaralhando os nomes... 🎲*', edit: sentMsg.key });

    await delay(1200);
    await sock.sendMessage(jid, { text: '🎰 *Quase lá... ⏳*', edit: sentMsg.key });

    await delay(1500);
    await sock.sendMessage(jid, { 
       text: `🎉 *SORTEIO OFICIAL!*\n\nE o grande sorteado(a) da vez foi... @${sorteado.id.split('@')[0]}! Parabéns! 🎈`,
       mentions: [sorteado.id],
       edit: sentMsg.key 
    });
  }
};
