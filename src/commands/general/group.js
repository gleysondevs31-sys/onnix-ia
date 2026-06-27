import messageQueue from '../../core/MessageQueue.js';

export default {
  name: 'group',
  aliases: ['regras', 'idgp', 'totais'],
  category: 'general',
  description: 'Utilitários informacionais sobre o grupo atual',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, jid, isGroup, groupMetadata, pushName } = context;
    if (!isGroup) return;

    const cmd = msg.message.conversation?.split(' ')[0]?.slice(1) || 
                msg.message.extendedTextMessage?.text?.split(' ')[0]?.slice(1);
    
    if (cmd === 'regras') {
      const desc = groupMetadata?.desc || "Este grupo não possui regras explícitas na descrição.";
      return await messageQueue.enqueue(sock, jid, { text: `📜 *Regras do Grupo*\n\n${desc}` }, { quoted: msg });
    }

    if (cmd === 'idgp') {
      return await messageQueue.enqueue(sock, jid, { text: `🆔 O ID de desenvolvedor deste grupo é:\n${jid}` });
    }

    if (cmd === 'totais') {
      const total = groupMetadata?.participants?.length || 0;
      return await messageQueue.enqueue(sock, jid, { text: `👥 *População*\nAtualmente temos ${total} membros participando interagindo conosco, ${pushName}!` });
    }
  }
};
