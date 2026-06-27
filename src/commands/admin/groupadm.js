// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import { extractUser } from '../../utils/lidUtils.js';

export default {
  name: 'groupadm',
  aliases: ['abrirgrupo', 'fechargrupo', 'avisar', 'marcar', 'tagall', 'promover', 'rebaixar', 'promote', 'demote'],
  category: 'admin',
  description: 'Comandos robustos para administração de grupos (abrir/fechar, promover/rebaixar, avisar, marcar)',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, isGroup, isGroupAdmin, isBotAdmin, pushName, isOwner, isAdmin, mentionedJid, groupMetadata } = context;
    
    if (!isGroup) return await messageQueue.enqueue(sock, jid, { text: `⚠️ Esse comando só existe para grupos.` }, { quoted: msg });
    if (!isGroupAdmin && !isOwner && !isAdmin) {
       return await messageQueue.enqueue(sock, jid, { text: `❌ Apenas administradores do grupo podem realizar essa ação, ${pushName}.` }, { quoted: msg });
    }

    const text = context.text.toLowerCase();
    const command = text.split(' ')[0].slice(1);
    const intent = command;

    // ── Abrir / Fechar Grupo ──
    if (intent === 'abrirgrupo' || intent === 'fechargrupo') {
       if (!isBotAdmin) {
           return await messageQueue.enqueue(sock, jid, { text: `⚙️ O bot precisa ser Administrador para alterar configurações do grupo.` });
       }
       const setting = intent === 'abrirgrupo' ? 'not_announcement' : 'announcement';
       await sock.groupSettingUpdate(jid, setting);
       return await messageQueue.enqueue(sock, jid, { text: `✅ O grupo foi *${intent === 'abrirgrupo' ? 'ABERTO' : 'FECHADO'}* por ${pushName}.` });
    }
    
    // ── Promover Membro a Admin ──
    if (intent === 'promover' || intent === 'promote') {
      if (!isBotAdmin) {
        return await messageQueue.enqueue(sock, jid, { text: `⚙️ O bot precisa ser Administrador para promover membros.` }, { quoted: msg });
      }
      
      // Pegar target: menção OU reply
      let targetJid = mentionedJid?.[0];
      if (!targetJid && msg.message?.extendedTextMessage?.contextInfo?.participant) {
        targetJid = msg.message.extendedTextMessage.contextInfo.participant;
      }
      
      if (!targetJid) {
        return await messageQueue.enqueue(sock, jid, { 
          text: `❓ *Marque* ou *responda a mensagem* de quem você quer promover.\n\nEx: /promover @usuario`
        }, { quoted: msg });
      }

      try {
        const result = await sock.groupParticipantsUpdate(jid, [targetJid], 'promote');
        
        if (result?.[0]?.status === '200' || result?.[0]?.status === 200) {
          await messageQueue.enqueue(sock, jid, { 
            text: `⬆️ @${targetJid.split('@')[0]} foi *PROMOVIDO* a administrador por ${pushName}! 🎉`,
            mentions: [targetJid]
          });
        } else if (result?.[0]?.status === '404' || result?.[0]?.status === 404) {
          await messageQueue.enqueue(sock, jid, { 
            text: `❌ @${targetJid.split('@')[0]} não está no grupo.`,
            mentions: [targetJid]
          });
        } else {
          await messageQueue.enqueue(sock, jid, { text: `❌ Erro ao promover. Status: ${result?.[0]?.status}` });
        }
      } catch (e) {
        await messageQueue.enqueue(sock, jid, { text: `❌ Erro: ${e.message}` }, { quoted: msg });
      }
      return;
    }

    // ── Rebaixar Admin ──
    if (intent === 'rebaixar' || intent === 'demote') {
      if (!isBotAdmin) {
        return await messageQueue.enqueue(sock, jid, { text: `⚙️ O bot precisa ser Administrador para rebaixar membros.` }, { quoted: msg });
      }
      
      let targetJid = mentionedJid?.[0];
      if (!targetJid && msg.message?.extendedTextMessage?.contextInfo?.participant) {
        targetJid = msg.message.extendedTextMessage.contextInfo.participant;
      }
      
      if (!targetJid) {
        return await messageQueue.enqueue(sock, jid, { 
          text: `❓ *Marque* ou *responda a mensagem* de quem você quer rebaixar.\n\nEx: /rebaixar @usuario`
        }, { quoted: msg });
      }

      try {
        const result = await sock.groupParticipantsUpdate(jid, [targetJid], 'demote');
        
        if (result?.[0]?.status === '200' || result?.[0]?.status === 200) {
          await messageQueue.enqueue(sock, jid, { 
            text: `⬇️ @${targetJid.split('@')[0]} foi *REBAIXADO* de administrador por ${pushName}.`,
            mentions: [targetJid]
          });
        } else if (result?.[0]?.status === '406' || result?.[0]?.status === 406) {
          await messageQueue.enqueue(sock, jid, { 
            text: `❌ @${targetJid.split('@')[0]} é o criador do grupo e não pode ser rebaixado.`,
            mentions: [targetJid]
          });
        } else if (result?.[0]?.status === '404' || result?.[0]?.status === 404) {
          await messageQueue.enqueue(sock, jid, { 
            text: `❌ @${targetJid.split('@')[0]} não está no grupo.`,
            mentions: [targetJid]
          });
        } else {
          await messageQueue.enqueue(sock, jid, { text: `❌ Erro ao rebaixar. Status: ${result?.[0]?.status}` });
        }
      } catch (e) {
        await messageQueue.enqueue(sock, jid, { text: `❌ Erro: ${e.message}` }, { quoted: msg });
      }
      return;
    }
    
    // ── Avisar / TagAll ──
    if (intent === 'avisar' || intent === 'tagall') {
        const payloadText = args.join(' ') || "Atenção a todos os membros!";
        
        try {
            const meta = groupMetadata || await sock.groupMetadata(jid);
            const participantsJid = meta.participants.map(p => p.id);
            
            await messageQueue.enqueue(sock, jid, { 
                text: `📣 *AVISO DE ADMIN: ${pushName}*\n\n${payloadText}`,
                mentions: participantsJid
            });
        } catch(e) {
            await messageQueue.enqueue(sock, jid, { text: `❌ Falha ao obter a lista de participantes do grupo.` });
        }
    }
    
    // ── Marcar Individual ──
    if (intent === 'marcar') {
       const userJid = mentionedJid?.[0];
       if (userJid) {
            await messageQueue.enqueue(sock, jid, { 
                text: `🔔 Alerta para você, @${userJid.split('@')[0]}!`,
                mentions: [userJid]
            });
       } else {
            await messageQueue.enqueue(sock, jid, { text: `❓ Você deve marcar alguém! Ex: /marcar @usuario` });
       }
    }
  }
};
