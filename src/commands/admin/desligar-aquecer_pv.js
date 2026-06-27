// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import configManager from '../../config/index.js';
import fs from 'fs';
import path from 'path';

export default {
  name: 'desligar-aquecer_pv',
  aliases: [],
  category: 'admin',
  description: 'Desativa a resposta automática da IA no privado (PV)',
  cooldown: 0,
  
  execute: async (context) => {
    const { sock, msg, jid, isOwner, isAdmin } = context;
    if (!isOwner && !isAdmin) {
      return await messageQueue.enqueue(sock, jid, { text: `⛔ Acesso negado. Apenas donos e administradores do bot podem usar este comando.` }, { quoted: msg });
    }

    const config = configManager.get();
    
    // Ensure behavior object exists
    if (!config.behavior) config.behavior = {};
    
    if (!config.behavior.pvAiEnabled) {
      return await messageQueue.enqueue(sock, jid, { text: `⚠️ A IA no PV já está *desligada*.` }, { quoted: msg });
    }

    config.behavior.pvAiEnabled = false;
    
    const configPath = path.join(process.cwd(), 'config', 'config.json');
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    
    configManager.reload();
    
    await messageQueue.enqueue(sock, jid, { text: `✅ *Sucesso!* A IA parou de responder automaticamente no PV.\n\nPara ativar novamente, use: /ligar-aquecer_pv` }, { quoted: msg });
  }
};
