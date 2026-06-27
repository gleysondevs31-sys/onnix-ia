// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import axios from 'axios';
import logger from '../../utils/logger.js';

const API_BASE = 'https://zero-two-apis.com.br/api/instagram';
const API_KEY = 'onnx-ia-key';
// A CDN da API (rapidcdn.app) requer este User-Agent no token JWT
const CDN_UA = 'TelegramBot (like TwitterBot)';

/**
 * Baixa mídia do Instagram usando a API zero-two-apis.com.br
 * Resposta esperada:
 * {
 *   status: true,
 *   resultados: [{ thumbnail: string, url: string }]
 * }
 */
async function downloadInstagram(url) {
  const res = await axios.get(API_BASE, {
    params: { url, apikey: API_KEY },
    timeout: 30000,
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0'
    }
  });

  const data = res.data;

  if (!data?.status || !Array.isArray(data?.resultados) || data.resultados.length === 0) {
    throw new Error('A API não retornou nenhuma mídia para este link.');
  }

  // resultados[].url = link de download (vídeo/imagem)
  // resultados[].thumbnail = capa do conteúdo (imagem preview)
  return data.resultados.map(item => ({
    url: item.url,         // URL principal para download
    thumbnail: item.thumbnail || null,
    type: 'video'          // A API retorna sempre vídeo (Reels/Posts com vídeo)
  }));
}

export default {
  name: 'instagram',
  aliases: ['ig', 'insta', 'reels'],
  category: 'media',
  description: 'Baixa vídeos e imagens do Instagram (Reels, Posts)',
  cooldown: 10000,

  execute: async (context) => {
    const { sock, msg, args, jid } = context;

    const url = args[0];

    if (!url || !url.includes('instagram.com')) {
      return await messageQueue.enqueue(sock, jid, {
        text: `📥 *Instagram Downloader*\n\nUso: */instagram [link]*\n\nExemplos:\n/ig https://www.instagram.com/reel/xxx\n/ig https://www.instagram.com/p/xxx`
      }, { quoted: msg });
    }

    await messageQueue.enqueue(sock, jid, { text: `⏳ *Baixando do Instagram...*` }, { quoted: msg });

    try {
      const results = await downloadInstagram(url);

      let sentCount = 0;

      for (let i = 0; i < results.length; i++) {
        const media = results[i];

        try {
          const caption = i === 0
            ? `🎬 *Instagram Download*\n\n_Baixado por ONNX IA_`
            : `🎬 Mídia ${i + 1}/${results.length}`;

          // Baixa o buffer — a CDN da rapidcdn.app exige o User-Agent do TelegramBot
          const response = await axios.get(media.url, {
            responseType: 'arraybuffer',
            timeout: 60000,
            headers: { 'User-Agent': CDN_UA },
            maxContentLength: 100 * 1024 * 1024 // 100MB
          });

          const buffer = Buffer.from(response.data);
          const contentType = response.headers['content-type'] || '';
          const isVideo = contentType.includes('video') || media.type === 'video';

          if (isVideo) {
            await messageQueue.enqueue(sock, jid, {
              video: buffer,
              mimetype: 'video/mp4',
              caption
            }, { quoted: msg });
          } else {
            await messageQueue.enqueue(sock, jid, {
              image: buffer,
              mimetype: 'image/jpeg',
              caption
            }, { quoted: msg });
          }

          sentCount++;
        } catch (dlErr) {
          logger.warn(`Falha ao enviar mídia ${i + 1} do Instagram:`, dlErr.message);
        }
      }

      if (sentCount === 0) {
        await messageQueue.enqueue(sock, jid, {
          text: `❌ Não foi possível baixar a mídia. Verifique se o link está correto e o post é público.`
        }, { quoted: msg });
      }

    } catch (error) {
      logger.error('Erro no comando Instagram:', error.message);

      const msg_text = error.response?.status === 403
        ? `❌ *Link inválido ou post privado.*\n\nVerifique se o post é público e tente novamente.`
        : `❌ *Erro ao baixar:* ${error.message}\n\n_Verifique o link e tente novamente._`;

      await messageQueue.enqueue(sock, jid, { text: msg_text }, { quoted: msg });
    }
  }
};
