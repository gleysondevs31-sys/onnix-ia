// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import TikTokService from '../../services/TikTokService.js';
import logger from '../../utils/logger.js';

export default {
  name: 'tiktok',
  aliases: ['tt', 'tik'],
  category: 'media',
  description: 'Baixa vídeo do TikTok sem marca d\'água',
  cooldown: 10000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, pushName } = context;
    
    const url = args[0];
    
    if (!url || !url.includes('tiktok.com')) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `📥 *TikTok Downloader*\n\nUso: /tiktok [link do vídeo]\n\nExemplo:\n/tiktok https://vm.tiktok.com/xxx`
      }, { quoted: msg });
    }

    await messageQueue.enqueue(sock, jid, { text: `⏳ *Baixando vídeo do TikTok...*` }, { quoted: msg });

    try {
      // Usa o TikTokService com múltiplas APIs de fallback
      const result = await TikTokService.downloadTikTok(url);

      if (!result?.videoUrl) {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Nenhum vídeo encontrado neste link.` });
      }

      // Faz download do buffer do vídeo
      const buffer = await TikTokService.downloadBuffer(result.videoUrl);

      const caption = [
        `🎬 *${result.title?.trim() || 'Sem título'}*`,
        `👤 ${result.author || 'Desconhecido'}`,
        result.duration ? `⏱ ${result.duration}s` : '',
        '',
        `_Baixado por ONNX IA_`
      ].filter(Boolean).join('\n');

      await messageQueue.enqueue(sock, jid, { 
        video: buffer,
        mimetype: 'video/mp4',
        caption
      }, { quoted: msg });

    } catch (error) {
      logger.error('Erro no comando TikTok:', error.message);
      await messageQueue.enqueue(sock, jid, { 
        text: `❌ *Erro ao baixar:* ${error.message}\n\n_Verifique se o link está correto e tente novamente._`
      }, { quoted: msg });
    }
  }
};
