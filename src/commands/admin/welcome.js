import messageQueue from '../../core/MessageQueue.js';
import {
  getWelcomeSettings,
  setWelcomeEnabled,
  setWelcomeImage,
  setWelcomeMessage
} from '../../events/group-participants.update.js';
import welcomeService from '../../services/WelcomeService.js';

export default {
  name: 'welcome',
  aliases: ['bemvindo', 'boasvindas', 'bv'],
  category: 'admin',
  description: 'Gerencia o sistema de boas-vindas com imagem',
  cooldown: 3000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, isGroup, isGroupAdmin, isBotAdmin, pushName, isOwner, isAdmin, sender } = context;
    
    if (!isGroup) {
      return await messageQueue.enqueue(sock, jid, { text: `⚠️ Esse comando só funciona em grupos.` }, { quoted: msg });
    }
    
    if (!isGroupAdmin && !isOwner && !isAdmin) {
      return await messageQueue.enqueue(sock, jid, { text: `❌ Apenas administradores podem gerenciar boas-vindas.` }, { quoted: msg });
    }

    const sub = args[0]?.toLowerCase();
    const ws = getWelcomeSettings(jid);

    // ── Sem argumentos → Status + Preview ──
    if (!sub || sub === 'status') {
      const statusIcon = (v) => v ? '🟢 Ativo' : '🔴 Desligado';
      
      let text = `🎉 *SISTEMA DE BOAS-VINDAS*\n`;
      text += `━━━━━━━━━━━━━━━━━━━━\n\n`;
      text += `• *Boas-vindas:* ${statusIcon(ws.enabled)}\n`;
      text += `• *Card com imagem:* ${statusIcon(ws.imageEnabled)}\n`;
      text += `• *Mensagem:* ${ws.customMessage ? 'Personalizada' : 'Padrão'}\n\n`;
      text += `━━━━━━━━━━━━━━━━━━━━\n`;
      text += `📌 *Comandos:*\n\n`;
      text += `▸ /welcome on — Ligar\n`;
      text += `▸ /welcome off — Desligar\n`;
      text += `▸ /welcome imagem on — Card com imagem\n`;
      text += `▸ /welcome imagem off — Apenas texto\n`;
      text += `▸ /welcome msg [texto] — Msg personalizada\n`;
      text += `▸ /welcome msg reset — Volta ao padrão\n`;
      text += `▸ /welcome preview — Ver como fica`;

      return await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
    }

    // ── Ligar ──
    if (sub === 'on' || sub === 'ligar' || sub === 'ativar') {
      setWelcomeEnabled(jid, true);
      return await messageQueue.enqueue(sock, jid, { 
        text: `✅ *Boas-vindas ATIVADAS* para este grupo!\n\nNovos membros receberão um card personalizado ao entrar.`
      }, { quoted: msg });
    }

    // ── Desligar ──
    if (sub === 'off' || sub === 'desligar' || sub === 'desativar') {
      setWelcomeEnabled(jid, false);
      return await messageQueue.enqueue(sock, jid, { 
        text: `🔴 *Boas-vindas DESATIVADAS* para este grupo.`
      }, { quoted: msg });
    }

    // ── Controle de imagem ──
    if (sub === 'imagem' || sub === 'img' || sub === 'card') {
      const val = args[1]?.toLowerCase();
      if (val === 'on' || val === '1' || val === 'ativar') {
        setWelcomeImage(jid, true);
        return await messageQueue.enqueue(sock, jid, { 
          text: `✅ *Card com imagem ATIVADO!*\n\nNovos membros receberão um card visual Metrocasa.`
        }, { quoted: msg });
      }
      if (val === 'off' || val === '0' || val === 'desativar') {
        setWelcomeImage(jid, false);
        return await messageQueue.enqueue(sock, jid, { 
          text: `🔴 *Card com imagem DESATIVADO.*\nBoas-vindas serão apenas em texto.`
        }, { quoted: msg });
      }
      return await messageQueue.enqueue(sock, jid, { 
        text: `❓ Use: /welcome imagem on  ou  /welcome imagem off`
      }, { quoted: msg });
    }

    // ── Mensagem personalizada ──
    if (sub === 'msg' || sub === 'mensagem') {
      const customText = args.slice(1).join(' ');
      
      if (!customText) {
        return await messageQueue.enqueue(sock, jid, { 
          text: `❓ *Como usar:*\n\n/welcome msg Olá! Leia as regras no tópico fixado.\n/welcome msg reset — Volta ao padrão`
        }, { quoted: msg });
      }

      if (customText.toLowerCase() === 'reset' || customText.toLowerCase() === 'padrao') {
        setWelcomeMessage(jid, null);
        return await messageQueue.enqueue(sock, jid, { 
          text: `✅ Mensagem de boas-vindas restaurada para o *padrão*.`
        }, { quoted: msg });
      }

      setWelcomeMessage(jid, customText);
      return await messageQueue.enqueue(sock, jid, { 
        text: `✅ Mensagem personalizada salva!\n\n*Preview:*\n${customText}`
      }, { quoted: msg });
    }

    // ── Preview do card ──
    if (sub === 'preview' || sub === 'teste' || sub === 'test') {
      await messageQueue.enqueue(sock, jid, { text: `⏳ Gerando preview do card...` }, { quoted: msg });

      try {
        let groupName = "Grupo";
        let memberCount = 0;
        try {
          const meta = await sock.groupMetadata(jid);
          groupName = meta.subject || "Grupo";
          memberCount = meta.participants?.length || 0;
        } catch(e) {}

        const card = await welcomeService.generateWelcomeCard(
          sock,
          sender,
          pushName,
          groupName,
          memberCount
        );

        await messageQueue.enqueue(sock, jid, {
          image: card,
          caption: `🎉 *PREVIEW DO CARD*\n\nÉ assim que ficará para novos membros!\n\n_Use /welcome imagem off para desativar o card._`
        }, { quoted: msg });
      } catch(e) {
        await messageQueue.enqueue(sock, jid, { 
          text: `❌ Erro ao gerar preview: ${e.message}\n\n_Verifique se o jimp está instalado: npm install jimp_`
        }, { quoted: msg });
      }
      return;
    }

    // ── Comando desconhecido ──
    return await messageQueue.enqueue(sock, jid, { 
      text: `❓ Subcomando desconhecido.\n\nUse /welcome para ver o painel.`
    }, { quoted: msg });
  }
};
