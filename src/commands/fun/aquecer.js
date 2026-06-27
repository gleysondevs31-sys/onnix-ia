import messageQueue from '../../core/MessageQueue.js';
import { getRandomWarmUpChallenge } from '../../utils/warmup.js';

export default {
  name: 'aquecer',
  aliases: ['warmup', 'antiban'],
  category: 'fun',
  description: 'Receba missões anti-ban para aquecer sua conta',
  cooldown: 10000,
  
  execute: async (context) => {
    const { sock, msg, jid, isGroup, pushName } = context;
    
    const challenge = getRandomWarmUpChallenge(isGroup);
    const contextualHint = isGroup
      ? "Aproveite para interagir com a galera e melhorar sua pontuação no algoritmo!"
      : "Atenda as solicitações aqui pra treinarmos seu fluxo de uso real.";

    await messageQueue.enqueue(sock, jid, { 
      text: `🔥 *Operação Aquecimento Misto*\n\n📌 *Missão:* ${challenge}\n\n💡 _${contextualHint}_`
    }, { quoted: msg });
  }
};
