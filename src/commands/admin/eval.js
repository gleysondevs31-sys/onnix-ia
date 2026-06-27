import messageQueue from '../../core/MessageQueue.js';
import util from 'util';

export default {
  name: 'eval',
  aliases: ['ev', 'execute'],
  category: 'admin',
  description: 'Executa código JavaScript (apenas donos)',
  cooldown: 0,
  
  execute: async (context) => {
    const { sock, msg, args, jid, isOwner } = context;
    
    if (!isOwner) {
      return; // Silenciosamente ignora — segurança máxima
    }

    const code = args.join(' ');
    if (!code) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `⚙️ *Eval Engine*\n\nUso: */eval [código JS]*\nExemplo: */eval 2 + 2*`
      }, { quoted: msg });
    }

    try {
      let evalResult = await eval(`(async () => { return ${code} })()`);
      if (typeof evalResult !== 'string') evalResult = util.inspect(evalResult);
      
      // Limita output para evitar flood
      if (evalResult.length > 2000) evalResult = evalResult.substring(0, 2000) + '\n... (truncado)';
      
      await messageQueue.enqueue(sock, jid, { 
        text: `*✅ Resultado:*\n\n${evalResult}`
      }, { quoted: msg });
    } catch (e) {
      await messageQueue.enqueue(sock, jid, { 
        text: `*❌ Erro:*\n\n${e.stack || e.message}`
      }, { quoted: msg });
    }
  }
};
