// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import nvidiaService from '../../ai/NvidiaService.js';
import { downloadContentFromMessage } from '@whiskeysockets/baileys';
import logger from '../../utils/logger.js';

export default {
  name: 'ver',
  aliases: ['vision', 'analisar', 'olhar', 'descrever'],
  category: 'ai',
  description: 'Analisa uma imagem com IA (envie ou responda uma imagem)',
  cooldown: 10000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, pushName } = context;
    
    // Verificar se há uma imagem na mensagem atual ou na mensagem citada
    let imageMessage = null;
    let userPrompt = args.join(' ') || null;

    // Caso 1: Imagem enviada diretamente com o comando na caption
    if (msg.message?.imageMessage) {
      imageMessage = msg.message.imageMessage;
    }
    // Caso 2: Resposta a uma mensagem com imagem
    else if (msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage) {
      imageMessage = msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
    }
    // Caso 3: Imagem com legenda (caption é o comando)
    else if (msg.message?.imageMessage?.caption) {
      imageMessage = msg.message.imageMessage;
    }

    if (!imageMessage) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `👁️ *Análise de Imagem com IA*\n\nEnvie uma imagem com o comando ou responda uma imagem!\n\n*Como usar:*\n▸ Envie uma foto com a legenda /ver\n▸ Responda uma foto com /ver\n▸ /ver o que tem nesta imagem?\n▸ /ver quantas pessoas há?\n\n_A IA vai analisar a imagem e responder!_`
      }, { quoted: msg });
    }

    try {
      await sock.sendMessage(jid, { react: { text: '👁️', key: msg.key } });
      await messageQueue.enqueue(sock, jid, { 
        text: `👁️ *Analisando imagem...*\n\n⏳ _Processando com IA de visão..._` 
      }, { quoted: msg });

      // Download da imagem
      const stream = await downloadContentFromMessage(imageMessage, 'image');
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }

      // Converter para base64
      const imageBase64 = buffer.toString('base64');

      // Definir prompt
      const prompt = userPrompt || "Descreva detalhadamente o que você vê nesta imagem. Inclua objetos, pessoas, cores, cenário e qualquer texto visível.";

      // Enviar para análise
      const analysis = await nvidiaService.invokeVision(imageBase64, prompt);

      await messageQueue.enqueue(sock, jid, { 
        text: `👁️ *Análise da Imagem*\n\n${analysis}\n\n_By: ONNX IA — Visão Computacional_`
      }, { quoted: msg });

      await sock.sendMessage(jid, { react: { text: '✅', key: msg.key } });

    } catch (error) {
      logger.error('Erro no comando /ver:', error.message);
      await sock.sendMessage(jid, { react: { text: '❌', key: msg.key } }).catch(() => {});
      await messageQueue.enqueue(sock, jid, { 
        text: `❌ *Erro ao analisar imagem:* ${error.message}\n\n_Tente novamente ou use uma imagem diferente._`
      }, { quoted: msg });
    }
  }
};
