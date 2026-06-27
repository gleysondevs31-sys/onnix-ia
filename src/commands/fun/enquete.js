import messageQueue from '../../core/MessageQueue.js';

export default {
  name: 'enquete',
  aliases: ['poll'],
  category: 'fun',
  description: 'Cria uma Enquete Oficial do WhatsApp',
  cooldown: 20000, // Cooldown alto p n floodar enquete
  
  execute: async (context) => {
    const { sock, msg, jid, args, Sender, pushName } = context;
    
    const combined = args.join(' ');
    const parts = combined.split('|').map(s => s.trim());

    if (parts.length < 3) {
       return await messageQueue.enqueue(sock, jid, { 
         text: `📝 Crie uma enquete!\nUso: /enquete Pergunta | Opc1 | Opc2\nExemplo: /enquete Quem sai? | Joao | Maria` 
       }, { quoted: msg });
    }

    const title = parts[0];
    const options = parts.slice(1);

    await sock.sendMessage(jid, {
        poll: {
            name: title,
            values: options,
            selectableCount: 1 // Voto único
        }
    });
  }
};
