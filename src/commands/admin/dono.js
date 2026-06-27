import messageQueue from '../../core/MessageQueue.js';
import configManager from '../../config/index.js';
import fs from 'fs';
import path from 'path';

export default {
  name: 'dono',
  aliases: ['owner'],
  category: 'admin',
  description: 'Área exclusiva do dono (gerenciar admins)',
  cooldown: 0,
  
  execute: async (context) => {
    const { sock, msg, args, jid, isOwner } = context;
    
    if (!isOwner) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `⛔ *Acesso negado.* Apenas o Dono pode usar este comando.` 
      }, { quoted: msg });
    }

    const config = configManager.get();

    if (args.length === 0) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `👑 *Área do Dono — ONNX IA*\n\n• */dono addadmin [número]* - Promove a admin do bot\n• */dono deladmin [número]* - Remove admin do bot\n• */dono listadmins* - Lista admins atuais`
      }, { quoted: msg });
    }

    const sub = args[0].toLowerCase();

    if (sub === 'listadmins') {
      const admins = config.admins || [];
      if (admins.length === 0) {
        return await messageQueue.enqueue(sock, jid, { text: `📋 Nenhum admin cadastrado no momento.` });
      }
      const list = admins.map((a, i) => `  ${i + 1}. ${a}`).join('\n');
      return await messageQueue.enqueue(sock, jid, { 
        text: `📋 *Admins do Bot:*\n\n${list}` 
      });
    }

    const numTgt = args[1] ? args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null;
    
    if (!numTgt) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `⚠️ Formato incorreto. Use:\n*/dono addadmin 5511999999999*`
      }, { quoted: msg });
    }

    const configPath = path.join(process.cwd(), 'config', 'config.json');

    if (sub === 'addadmin') {
      if (!config.admins) config.admins = [];
      
      if (!config.admins.includes(numTgt)) {
        config.admins.push(numTgt);
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        configManager.reload();
        
        await messageQueue.enqueue(sock, jid, { 
          text: `✅ *Admin adicionado com sucesso!*\n${numTgt}`
        }, { quoted: msg });
      } else {
        await messageQueue.enqueue(sock, jid, { text: `⚠️ Esse usuário já é um administrador.` }, { quoted: msg });
      }
    }
    else if (sub === 'deladmin') {
      if (config.admins && config.admins.includes(numTgt)) {
        config.admins = config.admins.filter(a => a !== numTgt);
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        configManager.reload();
        
        await messageQueue.enqueue(sock, jid, { 
          text: `❌ *Admin removido:* ${numTgt}`
        }, { quoted: msg });
      } else {
        await messageQueue.enqueue(sock, jid, { text: `⚠️ Esse usuário não era administrador.` }, { quoted: msg });
      }
    }
  }
};
