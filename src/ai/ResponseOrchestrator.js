// By: ONNX IA
// Powered by Orbital Code

import searchService from '../websearch/SearchService.js';
import nvidiaService from './NvidiaService.js';
import logger from '../utils/logger.js';

class ResponseOrchestrator {
  
  /**
   * Heurística para decidir se a pergunta precisa de busca web.
   * Analisa palavras-chave que indicam necessidade de dados atuais.
   */
  _needsSearch(prompt) {
    const triggerWords = [
      // Temporalidade
      'última', 'hoje', 'recente', 'agora', 'ontem', 'semana', 'mês',
      'atualmente', 'atual', 'novo', 'nova', 'últimas', 'últimos',
      // Notícias e eventos
      'notícia', 'notícias', 'aconteceu', 'acontecendo', 'lançamento',
      'lançou', 'morreu', 'nasceu', 'ganhou', 'venceu', 'perdeu',
      // Dados em tempo real
      'preço', 'cotação', 'dólar', 'euro', 'bitcoin', 'crypto',
      'clima', 'tempo', 'temperatura', 'previsão',
      // Pesquisa explícita
      'pesquise', 'pesquisa', 'busque', 'procure', 'google',
      'quem é', 'o que é', 'quando foi', 'onde fica',
      // Esportes
      'jogo', 'campeonato', 'placar', 'resultado', 'classificação',
      'libertadores', 'brasileirão', 'copa', 'mundial'
    ];
    
    const p = prompt.toLowerCase();
    return triggerWords.some(w => p.includes(w));
  }

  /**
   * Processa uma resposta completa com possível enriquecimento web.
   */
  async processResponse(prompt, pushName = "Usuário", groupName = "WhatsApp") {
    let contextSnippet = null;

    // Tenta busca web se parecer necessário
    if (this._needsSearch(prompt)) {
      try {
        contextSnippet = await searchService.quickSearch(prompt);
      } catch (e) {
        logger.warn('Busca web falhou no orchestrator:', e.message);
      }
    }

    // Injeção de contexto social
    const identitySnippet = [
      `[CONTEXTO DA CONVERSA]`,
      `- Falando com: ${pushName}`,
      `- Local: ${groupName}`,
      `- Horário: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`,
      `- Interaja de forma social e personalizada se apropriado.`
    ].join('\n');

    try {
      if (contextSnippet) {
        const instruction = [
          identitySnippet,
          '',
          `[DADOS DE PESQUISA WEB — Use essas informações para enriquecer sua resposta com dados atuais e precisos. SEMPRE cite as fontes quando usar dados específicos.]`,
          '',
          contextSnippet
        ].join('\n');
        return await nvidiaService.invokeCompletion(prompt, instruction);
      } else {
        return await nvidiaService.invokeCompletion(prompt, identitySnippet);
      }
    } catch (err) {
      logger.error('ResponseOrchestrator error:', err.message);
      return "Tive um problema na minha rede neural 😥 Pode tentar de novo em instantes?";
    }
  }

  /**
   * Processa uma resposta para imagem (vision).
   */
  async processVision(imageBase64, prompt, pushName = "Usuário") {
    const contextPrompt = prompt || "Descreva detalhadamente o que você vê nesta imagem.";
    const fullPrompt = `${pushName} enviou esta imagem e perguntou: "${contextPrompt}"`;
    
    return await nvidiaService.invokeVision(imageBase64, fullPrompt);
  }
}

export const responseOrchestrator = new ResponseOrchestrator();
export default responseOrchestrator;
