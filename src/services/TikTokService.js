/**
 * TikTokService.js — Scraper de download de vídeos do TikTok
 * 
 * Baseado no padrão do Nezuko V5 (funções/tiktok.js).
 * Usa API pública gratuita para download sem marca d'água.
 */

import axios from 'axios';
import logger from '../utils/logger.js';

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

/**
 * Baixa vídeo do TikTok usando API tikwm.com (pública/gratuita)
 * @param {string} url — URL do vídeo TikTok
 * @returns {Promise<{ videoUrl: string, audioUrl: string, title: string, author: string }>}
 */
async function downloadTikTok(url) {
  // Tentativa 1: tikwm.com (API mais estável em 2026)
  try {
    const res = await axios.post('https://www.tikwm.com/api/', 
      new URLSearchParams({ url, hd: 1 }),
      {
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'application/json'
        },
        timeout: 15000
      }
    );

    if (res.data?.code === 0 && res.data?.data) {
      const data = res.data.data;
      return {
        videoUrl: data.hdplay || data.play,
        audioUrl: data.music,
        title: data.title || 'TikTok Video',
        author: data.author?.nickname || 'Desconhecido',
        duration: data.duration || 0,
        cover: data.cover
      };
    }
  } catch (e) {
    logger.warn('TikTok tikwm falhou, tentando fallback...', e.message);
  }

  // Tentativa 2: API alternativa (cobalt)
  try {
    const res = await axios.post('https://api.cobalt.tools/api/json', 
      { url },
      {
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        timeout: 15000
      }
    );

    if (res.data?.url) {
      return {
        videoUrl: res.data.url,
        audioUrl: res.data.audio || null,
        title: 'TikTok Video',
        author: 'Desconhecido',
        duration: 0,
        cover: null
      };
    }
  } catch (e) {
    logger.warn('TikTok cobalt falhou:', e.message);
  }

  throw new Error('Não foi possível baixar o vídeo do TikTok. Tente novamente mais tarde.');
}

/**
 * Baixa buffer de um URL de mídia
 * @param {string} url 
 * @returns {Promise<Buffer>}
 */
async function downloadBuffer(url) {
  const res = await axios.get(url, {
    responseType: 'arraybuffer',
    timeout: 30000,
    headers: { 'User-Agent': USER_AGENT },
    maxContentLength: 50 * 1024 * 1024 // 50MB limit
  });
  return Buffer.from(res.data);
}

export default {
  downloadTikTok,
  downloadBuffer
};
