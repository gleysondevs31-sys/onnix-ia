import messageQueue from '../../core/MessageQueue.js';
import { claimDaily } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

export default {
  name: 'diario',
  aliases: ['daily', 'bonus'],
  category: 'fun',
  description: 'Coleta sua recompensa diária de moedas',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, jid, sender, pushName } = context;
    
    const result = claimDaily(sender);
    
    if (result.success) {
      await messageQueue.enqueue(sock, jid, { 
        text: `🎁 *RECOMPENSA DIÁRIA*\n\nSejo bem-vindo *${pushName}*! Você ganhou *+${formatCoins(result.reward)} Moedas* 💰\n\n💼 Saldo total: *${formatCoins(result.total)}* moedas\n\n_Volte amanhã para coletar novamente!_`
      }, { quoted: msg });
    } else {
      await messageQueue.enqueue(sock, jid, { 
        text: `⏰ *Calma ${pushName}!*\n\nVocê já coletou seu bônus diário.\nVolte em *${result.waitHours}h ${result.waitMins}m* ⏳`
      }, { quoted: msg });
    }
  }
};
