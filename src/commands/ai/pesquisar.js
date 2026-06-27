// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import searchService from '../../websearch/SearchService.js';
import nvidiaService from '../../ai/NvidiaService.js';

export default {
  name: 'pesquisar',
  aliases: ['search', 'buscar', 'web', 'google'],
  category: 'ai',
  description: 'Pesquisa na internet e resume os resultados com IA',
  cooldown: 8000,
  
  execute: async (context) => {
    const { sock, msg, jid, args, pushName } = context;

    if (args.length === 0) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `🔍 *Pesquisa Web + IA*\n\nUso: /pesquisar [tema]\n\n*Exemplos:*\n▸ /pesquisar preço do Bitcoin hoje\n▸ /pesquisar últimas notícias do Brasil\n▸ /pesquisar como fazer bolo de chocolate\n\n_Eu busco na internet e resumo tudo pra você!_` 
      }, { quoted: msg });
    }

    const query = args.join(' ');
    
    try {
      await sock.sendMessage(jid, { react: { text: '🔍', key: msg.key } });
      await messageQueue.enqueue(sock, jid, { 
        text: `🔍 *Pesquisando:* _"${query}"_\n\n⏳ Buscando e analisando resultados...` 
      }, { quoted: msg });

      const searchContext = await searchService.performSearch(query);
      
      if (!searchContext) {
        await sock.sendMessage(jid, { react: { text: '❌', key: msg.key } }).catch(() => {});
        return await messageQueue.enqueue(sock, jid, { 
          text: `😕 Não encontrei resultados relevantes para _"${query}"_.\n\nTente reformular sua pesquisa!`
        }, { quoted: msg });
      }

      const systemInstruction = [
        `Você está fazendo uma pesquisa web para ${pushName}.`,
        `Analise os dados retornados e crie um resumo claro, organizado e informativo.`,
        `REGRAS:`,
        `- Responda em formato de resumo, não copie textos na íntegra.`,
        `- Cite as fontes quando usar dados específicos.`,
        `- Destaque informações importantes com *negrito*.`,
        `- Seja objetivo (máx 250 palavras).`,
        `- Se os dados parecerem desatualizados, avise.`,
        ``,
        searchContext
      ].join('\n');

      const resp = await nvidiaService.invokeCompletion(
        `Pesquisa do usuário: "${query}"\n\nResuma os dados encontrados de forma clara e útil.`,
        systemInstruction
      );

      await messageQueue.enqueue(sock, jid, { 
        text: `🌐 *Resultados da Pesquisa*\n━━━━━━━━━━━━━━━━━━━\n\n${resp}\n\n━━━━━━━━━━━━━━━━━━━\n🔎 _Pesquisa: "${query}"_\n_By: ONNX IA_`
      }, { quoted: msg });

      await sock.sendMessage(jid, { react: { text: '✅', key: msg.key } });

    } catch (e) {
      await sock.sendMessage(jid, { react: { text: '❌', key: msg.key } }).catch(() => {});
      await messageQueue.enqueue(sock, jid, { 
        text: `❌ Erro na pesquisa: ${e.message}\n\n_Tente novamente em instantes._`
      }, { quoted: msg });
    }
  }
};
