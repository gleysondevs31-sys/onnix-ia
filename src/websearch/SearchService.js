/**
 * SearchService.js — Busca web segura via DuckDuckGo (Scraper direto HTML)
 *
 * Removemos duck-duck-scrape por causa de erros "DDG detected an anomaly".
 * A solução é buscar diretamente o HTML lite do DDG e parsear usando cheerio.
 */
import axios from 'axios';
import * as cheerio from 'cheerio';
import logger from '../utils/logger.js';

class SearchService {
  /**
   * Busca na web com retry automático.
   * @param {string} query - Termo de busca
   * @param {number} maxResults - Quantidade máxima de resultados (default: 5)
   * @returns {Promise<string|null>} - Contexto formatado ou null se falhar
   */
  async performSearch(query, maxResults = 5) {
    const maxRetries = 2;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        logger.info(`Buscando na Web (tentativa ${attempt}): "${query}"`);
        
        const url = `https://br.search.yahoo.com/search?p=${encodeURIComponent(query)}&fp=1`;
        const response = await axios.get(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
          },
          timeout: 15000
        });

        const $ = cheerio.load(response.data);
        const results = [];

        $('.algo, .algo-sr, #web > ol > li').each((i, el) => {
          if (results.length >= maxResults) return;
          
          const aNode = $(el).find('h3 a, .compTitle h3 a').first();
          const title = aNode.text().trim();
          let rawUrl = aNode.attr('href');
          
          // Cleanup Yahoo redirect URL if necessary
          let realUrl = rawUrl;
          if (rawUrl && rawUrl.includes('/RU=')) {
            try {
              const start = rawUrl.indexOf('/RU=') + 4;
              const end = rawUrl.indexOf('/R', start);
              if (end !== -1) {
                realUrl = decodeURIComponent(rawUrl.substring(start, end));
              } else {
                realUrl = decodeURIComponent(rawUrl.substring(start).split('/')[0]);
              }
            } catch(e) {}
          }

          const description = $(el).find('.compText, .fz-ms, p').text().replace(/\s+/g, ' ').trim();

          if (title && realUrl && !realUrl.includes('yahoo.com/search')) {
            results.push({ title, url: realUrl, description });
          }
        });

        if (results.length === 0) {
          if (attempt < maxRetries) {
            await new Promise(r => setTimeout(r, 1500));
            continue;
          }
          return null;
        }

        let contextString = "### Dados da Pesquisa Web (fontes reais e atualizadas):\n\n";
        results.forEach((res, index) => {
          contextString += `**Fonte ${index + 1}: ${res.title}**\n`;
          contextString += `URL: ${res.url}\n`;
          contextString += `Resumo: ${res.description || 'Sem descrição'}\n\n`;
        });

        contextString += `_Total de resultados extraídos: ${results.length}._`;

        return contextString;
      } catch (error) {
        logger.error(`Busca DDG falhou (tentativa ${attempt}):`, error.message);
        if (attempt < maxRetries) {
          await new Promise(r => setTimeout(r, 2000 * attempt));
        }
      }
    }

    return null;
  }

  /**
   * Pesquisa rápida (1-3 resultados) para enriquecer respostas da IA.
   */
  async quickSearch(query) {
    return this.performSearch(query, 3);
  }
}

export const searchService = new SearchService();
export default searchService;
