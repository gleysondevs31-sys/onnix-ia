// By: ONNX IA
// Powered by Orbital Code

import { scrapePinterest } from '../../services/pinterest.js';
import messageQueue from '../../core/MessageQueue.js';
import logger from '../../utils/logger.js';

export default {
  name: 'pinterest',
  aliases: ['pin', 'pint'],
  category: 'media',
  description: 'Busca imagens no Pinterest',
  cooldown: 8000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, pushName } = context;
    if (args.length === 0) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `Olá ${pushName}! Você precisa digitar o que deseja buscar.\n\nExemplo: */pinterest anime aesthetic*` 
      }, { quoted: msg });
    }
    const query = args.join(' ');
    try {
      await sock.sendMessage(jid, { react: { text: '🔍', key: msg.key } });
      const imageUrl = await scrapePinterest(query);
      if (!imageUrl) {
        return await messageQueue.enqueue(sock, jid, { 
          text: `❌ Não encontrei nenhuma imagem para: "${query}"` 
        }, { quoted: msg });
      }
      await messageQueue.enqueue(sock, jid, { 
        image: { url: imageUrl },
        caption: `📌 *Pinterest:* ${query}\n\n_By: ONNX IA_`
      }, { quoted: msg });
      await sock.sendMessage(jid, { react: { text: '✅', key: msg.key } });
    } catch (error) {
      logger.error(`Erro no comando pinterest para "${query}":`, error);
      await messageQueue.enqueue(sock, jid, { 
        text: `❌ Ocorreu um erro ao buscar no Pinterest. Tente novamente mais tarde.` 
      }, { quoted: msg });
    }
  }
};
