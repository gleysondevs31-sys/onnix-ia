// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import nvidiaService from '../../ai/NvidiaService.js';
import logger from '../../utils/logger.js';

export default {
  name: 'imagine',
  aliases: ['gerar', 'imagem', 'draw', 'criar'],
  category: 'ai',
  description: 'Gera uma imagem a partir de uma descrição com IA',
  cooldown: 15000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, pushName } = context;
    
    if (args.length === 0) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `🎨 *Gerador de Imagens IA*\n\nDescreva o que deseja gerar!\n\n*Uso:* /imagine [descrição]\n\n*Exemplos:*\n▸ /imagine um gato samurai cyberpunk\n▸ /imagine paisagem de montanha ao pôr do sol\n▸ /imagine logo futurista minimalista azul\n\n_Dica: Quanto mais detalhada a descrição, melhor o resultado!_`
      }, { quoted: msg });
    }

    const prompt = args.join(' ');

    try {
      await sock.sendMessage(jid, { react: { text: '🎨', key: msg.key } });
      await messageQueue.enqueue(sock, jid, { 
        text: `🎨 *Gerando imagem...*\n\n_"${prompt.length > 100 ? prompt.substring(0, 97) + '...' : prompt}"_\n\n⏳ Isso pode levar alguns segundos...` 
      }, { quoted: msg });

      const imageBuffer = await nvidiaService.invokeImageGen(prompt);

      await messageQueue.enqueue(sock, jid, { 
        image: imageBuffer,
        caption: `🎨 *Imagem Gerada por IA*\n\n📝 _"${prompt.length > 150 ? prompt.substring(0, 147) + '...' : prompt}"_\n\n👤 Solicitado por *${pushName}*\n_By: ONNX IA — Powered by NVIDIA_`
      }, { quoted: msg });

      await sock.sendMessage(jid, { react: { text: '✅', key: msg.key } });

    } catch (error) {
      logger.error('Erro no comando /imagine:', error.message);
      await sock.sendMessage(jid, { react: { text: '❌', key: msg.key } }).catch(() => {});
      await messageQueue.enqueue(sock, jid, { 
        text: `❌ *Erro ao gerar imagem:* ${error.message}\n\n_Tente novamente com uma descrição diferente._`
      }, { quoted: msg });
    }
  }
};
