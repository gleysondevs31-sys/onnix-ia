import messageQueue from '../../core/MessageQueue.js';
import { getGroupSettings, toggleProtection } from '../../middleware/AntiProtection.js';

export default {
  name: 'protecao',
  aliases: ['anti', 'proteger', 'seguranca'],
  category: 'admin',
  description: 'Ativa/desativa proteções do grupo (antilink, antispam, antiporn)',
  cooldown: 3000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, isGroup, isGroupAdmin, isBotAdmin, pushName, isOwner, isAdmin } = context;
    
    if (!isGroup) {
      return await messageQueue.enqueue(sock, jid, { text: `⚠️ Esse comando só funciona em grupos.` }, { quoted: msg });
    }
    
    if (!isGroupAdmin && !isOwner && !isAdmin) {
      return await messageQueue.enqueue(sock, jid, { text: `❌ Apenas administradores podem gerenciar proteções.` }, { quoted: msg });
    }

    const gs = getGroupSettings(jid);
    
    // Sem argumentos → mostra status
    if (args.length === 0 || args[0]?.toLowerCase() === 'status') {
      const statusIcon = (v) => v ? '✅ Ativo' : '❌ Desativado';
      
      return await messageQueue.enqueue(sock, jid, { 
        text: `🛡️ *PAINEL DE PROTEÇÕES*\n\n` +
              `• *Antilink:* ${statusIcon(gs.antilink)}\n` +
              `• *Antispam:* ${statusIcon(gs.antispam)}\n` +
              `• *Antiporn:* ${statusIcon(gs.antiporn)}\n\n` +
              `📌 *Como usar:*\n` +
              `» /protecao antilink 1 — Ativar\n` +
              `» /protecao antilink 0 — Desativar\n\n` +
              `_Admins do grupo são imunes às proteções._`
      }, { quoted: msg });
    }

    const type = args[0]?.toLowerCase();
    const value = args[1];

    if (!['antilink', 'antispam', 'antiporn'].includes(type)) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `❓ Opção inválida. Use: antilink, antispam ou antiporn\n\nEx: /protecao antilink 1`
      }, { quoted: msg });
    }

    if (value === '1' || value === 'on') {
      if (gs[type]) {
        return await messageQueue.enqueue(sock, jid, { text: `⚠️ *${type}* já está ativo neste grupo.` }, { quoted: msg });
      }
      toggleProtection(jid, type, true);
      return await messageQueue.enqueue(sock, jid, { 
        text: `✅ *${type.toUpperCase()}* ativado com sucesso neste grupo!\n\n_Infratores receberão avisos e poderão ser removidos após 3 infrações._`
      }, { quoted: msg });
    }
    
    if (value === '0' || value === 'off') {
      if (!gs[type]) {
        return await messageQueue.enqueue(sock, jid, { text: `⚠️ *${type}* já está desativado.` }, { quoted: msg });
      }
      toggleProtection(jid, type, false);
      return await messageQueue.enqueue(sock, jid, { 
        text: `❌ *${type.toUpperCase()}* desativado neste grupo.`
      }, { quoted: msg });
    }

    return await messageQueue.enqueue(sock, jid, { 
      text: `❓ Use 1 para ativar ou 0 para desativar.\nEx: /protecao ${type} 1`
    }, { quoted: msg });
  }
};
