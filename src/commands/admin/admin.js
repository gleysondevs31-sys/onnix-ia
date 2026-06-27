// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import configManager from '../../config/index.js';
import groupRepository from '../../repositories/GroupRepository.js';
import fs from 'fs';
import path from 'path';

export default {
  name: 'admin',
  aliases: ['adm'],
  category: 'admin',
  description: 'Área restrita de administração do bot',
  cooldown: 0,
  
  execute: async (context) => {
    const { sock, msg, args, jid, isGroup, isOwner, isAdmin } = context;
    if (!isOwner && !isAdmin) {
      return await messageQueue.enqueue(sock, jid, { text: `⛔ Acesso negado. Apenas donos e administradores do bot podem usar este comando.` }, { quoted: msg });
    }

    const config = configManager.get();
    if (args.length === 0) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `👑 *Área Admin — ONNX IA*\n\n• */admin status* - Estatísticas gerais\n• */admin addgroup* - Autoriza o grupo atual\n• */admin removegroup* - Remove autorização\n• */admin broadcast [msg]* - Envia para todos os grupos\n\n_By: ONNX IA_` 
      }, { quoted: msg });
    } 

    const sub = args[0].toLowerCase();
    
    if (sub === 'status') {
      const stats = groupRepository.getStats();
      const totalGroups = config.behavior?.allowedGroups?.length || 0;
      
      await messageQueue.enqueue(sock, jid, { 
        text: `📊 *Status de Administração*\n\n• Grupos Autorizados: \`${totalGroups}\`\n• Mensagens Lidas: \`${stats.totalMessages.toLocaleString()}\`\n• Comandos Usados: \`${stats.commandsUsed.toLocaleString()}\`\n\n_By: ONNX IA_` 
      }, { quoted: msg });
    }
    else if (sub === 'addgroup') {
      if (!isGroup) return await messageQueue.enqueue(sock, jid, { text: `❌ Esse comando só pode ser usado dentro de um grupo.` });
      
      if (!config.behavior.allowedGroups) config.behavior.allowedGroups = [];
      
      if (!config.behavior.allowedGroups.includes(jid)) {
        config.behavior.allowedGroups.push(jid);
        
        const configPath = path.join(process.cwd(), 'config', 'config.json');
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        
        configManager.reload();
        
        await messageQueue.enqueue(sock, jid, { text: `✅ *Sucesso!* Este grupo foi autorizado e injetado na memória do bot.` });
      } else {
        await messageQueue.enqueue(sock, jid, { text: `⚠️ Este grupo já está na lista de autorizados.` });
      }
    }
    else if (sub === 'removegroup') {
      if (!isGroup) return await messageQueue.enqueue(sock, jid, { text: `❌ Esse comando só pode ser usado dentro de um grupo.` });
      
      if (config.behavior.allowedGroups?.includes(jid)) {
        config.behavior.allowedGroups = config.behavior.allowedGroups.filter(g => g !== jid);
        
        const configPath = path.join(process.cwd(), 'config', 'config.json');
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        
        configManager.reload();
        
        await messageQueue.enqueue(sock, jid, { text: `🚫 *Removido!* Este grupo não está mais autorizado a usar o bot.` });
      } else {
        await messageQueue.enqueue(sock, jid, { text: `⚠️ Este grupo não consta na lista de autorizados.` });
      }
    }
  }
};
