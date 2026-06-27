import messageQueue from '../../core/MessageQueue.js';
import nvidiaService from '../../ai/NvidiaService.js';

export default {
  name: 'cantada',
  aliases: ['paquera', 'flerte', 'cantadas'],
  category: 'fun',
  description: 'Gera uma cantada engraçada usando IA',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, pushName } = context;
    
    const tipo = args[0]?.toLowerCase();
    
    let prompt;
    let emoji;
    
    if (tipo === 'nerd' || tipo === 'geek') {
      prompt = "Crie uma cantada nerd/geek engraçada e criativa envolvendo tecnologia, games ou ciência. Apenas a cantada, sem introdução. Máximo 2 linhas.";
      emoji = "🤓";
    } else if (tipo === 'ruim' || tipo === 'cringe') {
      prompt = "Crie uma cantada ruim (cringe) tão ruim que é engraçada. O tipo de cantada que faz a pessoa rir de vergonha alheia. Apenas a cantada. Máximo 2 linhas.";
      emoji = "😬";
    } else if (tipo === 'poetica' || tipo === 'romantica') {
      prompt = "Crie uma cantada poética e romântica, elegante e bonita. Apenas a cantada. Máximo 2 linhas.";
      emoji = "🌹";
    } else {
      prompt = "Crie uma cantada engraçada e criativa para mandar em um grupo de WhatsApp. Deve ser divertida e respeitosa. Apenas a cantada, sem introdução. Máximo 2 linhas.";
      emoji = "😏";
    }

    try {
      const response = await nvidiaService.invokeCompletion(prompt);
      
      await messageQueue.enqueue(sock, jid, { 
        text: `${emoji} *CANTADA DO DIA*\n\n${response}\n\n_Use: /cantada [nerd|ruim|poetica]_`
      }, { quoted: msg });
    } catch (error) {
      const fallbacks = [
        "Se beleza fosse tempo, você seria a eternidade.",
        "Tá faltando algo no meu WhatsApp... seu número nos meus favoritos.",
        "Você é WiFi? Porque estou sentindo uma conexão aqui.",
        "Se você fosse um bug, seria do tipo que ninguém quer corrigir.",
        "Você acredita em amor à primeira mensagem ou preciso te mandar outra?",
        "Meu coração tem 8GB de RAM e você está usando tudo.",
        "Você é um exception? Porque fez meu coração parar de funcionar.",
        "Se amor fosse código, o nosso seria open source — transparente e sem limites."
      ];
      
      const random = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      
      await messageQueue.enqueue(sock, jid, { 
        text: `${emoji} *CANTADA DO DIA*\n\n${random}`
      }, { quoted: msg });
    }
  }
};
