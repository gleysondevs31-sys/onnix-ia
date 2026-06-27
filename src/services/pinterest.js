// By: ONNX IA
// Powered by Orbital Code

import axios from 'axios';
import logger from '../utils/logger.js';

/**
 * Realiza um scraper da página de buscas do Pinterest em busca de uma imagem
 * Utiliza engenharia reversa para extrair URLs de alta resolução via Regex e Mobile UA.
 * 
 * Reativado e Otimizado por: ONNX IA
 * 
 * @param {string} query O termo procurado
 * @returns {Promise<string|null>} Retorna a URL da imagem no Pinterest ou null
 */
export async function scrapePinterest(query) {
  return new Promise(async (resolve) => {
    try {
      const searchUrl = `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}&rs=typed`;
      const { data } = await axios.get(searchUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
          "Referer": "https://www.pinterest.com/"
        },
        timeout: 10000
      });
      const imgRegex = /https:\/\/i\.pinimg\.com\/(736x|originals)\/[a-zA-Z0-9/._-]+\.(jpg|png|webp)/g;
      const matches = data.match(imgRegex) || [];
      const uniqueImages = [...new Set(matches)].filter(img => 
        !img.includes('user_main') && 
        !img.includes('avatar') && 
        !img.includes('book_covers')
      );
      if (uniqueImages.length > 0) {
        const poolSize = Math.min(uniqueImages.length, 15);
        const randomItem = uniqueImages[Math.floor(Math.random() * poolSize)];
        logger.info(`Pinterest Scraper: Encontradas ${uniqueImages.length} imagens para "${query}". Selecionada: ${randomItem}`);
        resolve(randomItem);
      } else {
        logger.warn(`Pinterest Scraper: Nenhuma imagem encontrada para "${query}"`);
        resolve(null);
      }
    } catch (error) {
      logger.error('Erro na extração do Pinterest (ONNX IA Engine)', error.message);
      resolve(null);
    }
  });
}

export default { scrapePinterest };