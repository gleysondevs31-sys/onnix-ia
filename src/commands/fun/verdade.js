import messageQueue from '../../core/MessageQueue.js';
import nvidiaService from '../../ai/NvidiaService.js';

export default {
  name: 'verdade',
  aliases: ['eununca', 'vd', 'desafiovd'],
  category: 'fun',
  description: 'Verdade ou Desafio — perguntas geradas por IA',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, pushName } = context;
    
    const mode = args[0]?.toLowerCase();
    
    let prompt;
    let emoji;
    let title;
    
    if (mode === 'desafio' || mode === 'd') {
      prompt = "Crie um desafio divertido e seguro para o jogo de Verdade ou Desafio em um grupo de WhatsApp. Deve ser engraçado mas respeitoso. Apenas o desafio, sem introdução. Máximo 2 linhas.";
      emoji = "🔥";
      title = "DESAFIO";
    } else if (mode === 'eununca' || mode === 'eu') {
      prompt = "Crie uma frase para o jogo 'Eu Nunca' que seja engraçada e gere risadas em um grupo de amigos. Comece com 'Eu nunca...'. Apenas a frase. Máximo 1 linha.";
      emoji = "🙈";
      title = "EU NUNCA";
    } else {
      // Padrão: Verdade
      prompt = "Crie uma pergunta curiosa e divertida para o jogo de Verdade ou Desafio. Deve ser interessante mas não invasiva demais. Apenas a pergunta, sem introdução. Máximo 2 linhas.";
      emoji = "🤔";
      title = "VERDADE";
    }

    try {
      const response = await nvidiaService.invokeCompletion(prompt);
      
      if (title === "EU NUNCA") {
        const pollName = `🙈 EU NUNCA...\n\n${response}\n\nPedido por: ${pushName}`;
        await sock.sendMessage(jid, {
          poll: {
            name: pollName,
            values: ['✅ Já fiz', '❌ Nunca fiz'],
            selectableCount: 1
          }
        });
      } else {
        await messageQueue.enqueue(sock, jid, { 
          text: `${emoji} *${title}*\n\n${response}\n\n_Use: /verdade [verdade|desafio|eununca]_\n_Pedido por: ${pushName}_`
        }, { quoted: msg });
      }
    } catch (error) {
      // Fallback estático se a IA falhar
      const fallbacks = {
        VERDADE: [
          "Qual foi a mentira mais elaborada que você já contou?",
          "Se pudesse trocar de vida com alguém do grupo por 1 dia, quem seria?",
          "Qual foi o momento mais constrangedor da sua vida?",
          "Qual é o seu maior medo que ninguém sabe?"
        ],
        DESAFIO: [
          "Mande um áudio aqui cantando seu hit favorito!",
          "Mude sua foto de perfil para a foto mais feia que você tem por 1 hora.",
          "Mande 'Te amo' para o último contato que te mandou mensagem.",
          "Grave um áudio fazendo a imitação do membro mais ativo do grupo."
        ],
        'EU NUNCA': [
          "Eu nunca fui expulso de um grupo de WhatsApp.",
          "Eu nunca stalkei o perfil de alguém às 3 da manhã.",
          "Eu nunca mandei mensagem para a pessoa errada.",
          "Eu nunca fingi estar ocupado para não responder mensagem."
        ]
      };
      
      const list = fallbacks[title] || fallbacks.VERDADE;
      const random = list[Math.floor(Math.random() * list.length)];
      
      if (title === "EU NUNCA") {
        const pollName = `🙈 EU NUNCA...\n\n${random}\n\nPedido por: ${pushName}`;
        await sock.sendMessage(jid, {
          poll: {
            name: pollName,
            values: ['✅ Já fiz', '❌ Nunca fiz'],
            selectableCount: 1
          }
        });
      } else {
        await messageQueue.enqueue(sock, jid, { 
          text: `${emoji} *${title}*\n\n${random}\n\n_Pedido por: ${pushName}_`
        }, { quoted: msg });
      }
    }
  }
};
