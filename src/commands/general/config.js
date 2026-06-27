import configManager from '../../config/index.js';
import messageQueue from '../../core/MessageQueue.js';

export default {
  name: 'config',
  aliases: ['cfg'],
  category: 'general',
  description: 'Mostra informações gerais de configuração da bot',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, jid } = context;
    const config = configManager.get();
    
    await messageQueue.enqueue(sock, jid, { 
      text: `⚙️ ONNX IA Configs:\nDono: ${config.owner}\nModo Teste: ${config.isTestMode}\nModelo IA: ${config.apis?.nvidiaModel || "Desconhecido"}`
    }, { quoted: msg });
  }
};
