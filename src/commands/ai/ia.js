// By: ONNX IA
// Powered by Orbital Code

import responseOrchestrator from '../../ai/ResponseOrchestrator.js';
import messageQueue from '../../core/MessageQueue.js';

export default {
  name: 'ia',
  aliases: ['bot', 'onnx', 'ask'],
  category: 'ai',
  description: 'Faça qualquer pergunta para a ONNX IA',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, pushName } = context;
    
    if (args.length === 0) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `Olá *${pushName}*! Você precisa me perguntar algo.\n\nExemplo: */ia Qual a capital do Brasil?*` 
      }, { quoted: msg });
    }

    const prompt = args.join(' ');
    
    try {
      await sock.sendMessage(jid, { react: { text: '🧠', key: msg.key } });

      let groupName = "Chat";
      if (context.isGroup && context.groupMetadata) groupName = context.groupMetadata.subject;
      
      const response = await responseOrchestrator.processResponse(prompt, pushName, groupName);
      
      await messageQueue.enqueue(sock, jid, { 
        text: `${response}\n\n_By: ONNX IA_` 
      }, { quoted: msg });
      await sock.sendMessage(jid, { react: { text: '✅', key: msg.key } });

    } catch (error) {
      await messageQueue.enqueue(sock, jid, { 
        text: `❌ *Erro:* Tive um problema ao processar sua pergunta. Tente novamente em instantes.` 
      }, { quoted: msg });
    }
  }
};
