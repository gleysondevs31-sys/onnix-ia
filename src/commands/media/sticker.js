// By: ONNX IA
// Powered by Orbital Code

import stickerService from '../../services/StickerService.js';
import messageQueue from '../../core/MessageQueue.js';
import logger from '../../utils/logger.js';

export default {
  name: 'sticker',
  aliases: ['s', 'fig', 'figurinha'],
  category: 'media',
  description: 'Transforma imagem ou vídeo em figurinha',
  cooldown: 4000,
  
  execute: async (context) => {
    const { sock, msg, jid } = context;
    
    const isMediaMessage = msg.message?.imageMessage || msg.message?.videoMessage;
    const isQuotedMedia = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage || 
                          msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage;
    
    if (!isMediaMessage && !isQuotedMedia) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `💡 *Dica:* Envie este comando na legenda de uma imagem/vídeo ou responda a uma mídia com */sticker*!` 
      }, { quoted: msg });
    }

    const mediaMessage = isMediaMessage ? msg.message : msg.message.extendedTextMessage.contextInfo.quotedMessage;
    const messageType = mediaMessage.imageMessage ? 'image' : 'video';
    const actualMessagePayload = isMediaMessage ? msg.message[messageType + 'Message'] : mediaMessage[messageType + 'Message'];
    
    try {
      await sock.sendMessage(jid, { react: { text: '🎨', key: msg.key } });

      const mediaBuffer = await stickerService.downloadMedia(actualMessagePayload, messageType);
      const webpBuffer = await stickerService.createSticker(mediaBuffer, messageType === 'video');
      
      await messageQueue.enqueue(sock, jid, { sticker: webpBuffer }, { quoted: msg });
      
      await sock.sendMessage(jid, { react: { text: '✅', key: msg.key } });

    } catch (e) {
      logger.error('Erro na criação de sticker via comando', e.message);
      await messageQueue.enqueue(sock, jid, { text: `❌ *Erro:* Falhei na criação da figurinha. Verifique se o arquivo é válido.` });
      await sock.sendMessage(jid, { react: { text: '❌', key: msg.key } });
    }
  }
};
