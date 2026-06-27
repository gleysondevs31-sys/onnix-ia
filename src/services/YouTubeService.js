/**
 * YouTubeService.js — Busca e Download de áudio/vídeo do YouTube
 * 
 * Baseado nos scrapers y2mate.js e ytdl.js do Nezuko V5.
 * Usa API cobalt.tools (gratuita/pública) para conversão.
 */

import axios from 'axios';
import logger from '../utils/logger.js';

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const YT_REGEX = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v=)|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;

/**
 * Busca vídeos do YouTube via scraping da página de resultados
 * @param {string} query — Termo de busca
 * @returns {Promise<Array<{ title: string, videoId: string, url: string, duration: string }>>}
 */
async function searchYT(query) {
  try {
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    const res = await axios.get(searchUrl, {
      headers: { 
        'User-Agent': USER_AGENT,
        'Accept-Language': 'pt-BR,pt;q=0.9'
      },
      timeout: 10000
    });

    const html = res.data;
    // Extrai ytInitialData do HTML
    const dataMatch = /var ytInitialData = (.+?);<\/script>/.exec(html);
    if (!dataMatch) throw new Error('Formato do YouTube mudou');

    const data = JSON.parse(dataMatch[1]);
    const contents = data?.contents?.twoColumnSearchResultsRenderer?.primaryContents
      ?.sectionListRenderer?.contents?.[0]?.itemSectionRenderer?.contents || [];

    const results = [];
    for (const item of contents) {
      const video = item.videoRenderer;
      if (!video) continue;
      
      results.push({
        title: video.title?.runs?.[0]?.text || 'Sem título',
        videoId: video.videoId,
        url: `https://youtu.be/${video.videoId}`,
        duration: video.lengthText?.simpleText || 'N/A',
        views: video.viewCountText?.simpleText || '',
        thumbnail: video.thumbnail?.thumbnails?.pop()?.url || '',
        channel: video.ownerText?.runs?.[0]?.text || 'Desconhecido'
      });

      if (results.length >= 5) break;
    }

    return results;
  } catch (e) {
    logger.error('YouTube search error:', e.message);
    return [];
  }
}

/**
 * Baixa áudio MP3 de um vídeo do YouTube
 * @param {string} url — URL do YouTube
 * @returns {Promise<{ buffer: Buffer, title: string, duration: string }>}
 */
async function downloadAudio(url) {
  const videoId = YT_REGEX.exec(url)?.[1];
  if (!videoId) throw new Error('URL do YouTube inválida');

  // Cobalt API — serviço público de conversão
  try {
    const res = await axios.post('https://api.cobalt.tools/api/json', {
      url: `https://youtu.be/${videoId}`,
      vCodec: 'h264',
      vQuality: '360',
      aFormat: 'mp3',
      isAudioOnly: true
    }, {
      headers: {
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 15000
    });

    if (res.data?.url) {
      const audioRes = await axios.get(res.data.url, {
        responseType: 'arraybuffer',
        timeout: 60000,
        maxContentLength: 50 * 1024 * 1024,
        headers: { 'User-Agent': USER_AGENT }
      });
      
      return {
        buffer: Buffer.from(audioRes.data),
        title: 'YouTube Audio',
        videoId
      };
    }
  } catch (e) {
    logger.warn('Cobalt audio download falhou:', e.message);
  }

  throw new Error('Não foi possível baixar o áudio. Tente novamente.');
}

/**
 * Verifica se uma string é uma URL válida do YouTube
 * @param {string} str
 * @returns {boolean}
 */
function isYouTubeUrl(str) {
  return YT_REGEX.test(str);
}

export default {
  searchYT,
  downloadAudio,
  isYouTubeUrl,
  YT_REGEX
};
