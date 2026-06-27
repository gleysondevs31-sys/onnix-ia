import messageQueue from '../../core/MessageQueue.js';
import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';

export default {
  name: 'desafio',
  aliases: ['meta'],
  category: 'fun',
  description: 'Joga um desafio aleatório de interação pro grupo (via Botões)',
  cooldown: 8000,

  execute: async (context) => {
    const { sock, msg, jid } = context;

    // Preparando a imagem para o cabeçalho interativo
    const mediaMessage = await prepareWAMessageMedia(
      { image: { url: 'https://i.ibb.co/tM1F79Sd/Whats-App-Image-2026-04-23-at-19-23-57.jpg' } }, // Imagem demonstrativa de desafios
      { upload: sock.waUploadToServer }
    );

    // Construção do interactiveMessage conforme o modelo (nativeFlowMessage + header media)
    const interactiveMessage = {
      header: {
        hasMediaAttachment: true,
        imageMessage: mediaMessage.imageMessage
      },
      body: { text: "🎲 *DESAFIOS ONNX!*\n\nEscolha um dos desafios abaixo e interaja com o grupo:" },
      footer: { text: "ONNX IA • Botões Interativos" },
      nativeFlowMessage: {
        buttons: [
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "🤪 DESAFIO HUMOR",
              id: "desafio_humor"
            })
          },
          {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
              display_text: "🎯 DESAFIO META",
              id: "desafio_meta"
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "📢 NOSSO CANAL",
              url: "https://whatsapp.com/channel/0029VbBCEri6xCSQ0AI1ok1L"
            })
          }
        ]
      }
    };

    // A versão ofc da Baileys precisa que isso seja envelopado em viewOnceMessage para garantir renderização
    const msgEnvelope = generateWAMessageFromContent(jid, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage
        }
      }
    }, { userJid: sock.user.id });

    // Usa relayMessage com o MessageQueue e mantém 'quoted'
    await messageQueue.enqueue(sock, jid, msgEnvelope.message, {
      isRelay: true,
      quoted: msg,
      messageId: msgEnvelope.key.id
    });
  }
};
