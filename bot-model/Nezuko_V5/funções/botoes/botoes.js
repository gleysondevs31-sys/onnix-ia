const fs = require('fs');
const moment = require('moment-timezone');
const fetch = require('node-fetch');
const { proto, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID } = require('@kurtucoben/baileys');

const sendHours = (formato) => moment.tz('America/Sao_Paulo').format(formato);

const identArroba = (txt) => {
  const cleaned = txt.replace(/[\(\)\+\-\s\/]/g, '');
  return cleaned.includes('@') ? cleaned.split('@')[1] + '@s.whatsapp.net' : cleaned + '@s.whatsapp.net';
};

const atraso = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Na Nezuko v5, assumimos que botões estão sempre ativos se a Baileys suportar
const botoes = true;

/**
 * Função para enviar botões interativos (Interactive Message)
 * @param {string} from - JID do destinatário
 * @param {object} dados - Objeto com text, caption, footer, image, video, mentions
 * @param {object} sock - Instância da conexão Baileys
 * @param {array} buttons - Lista de botões [{type, text, url/command}]
 * @param {object} info - Mensagem quoted
 */
const sendButton = async (from, dados, sock, buttons, info) => {
  try {
    if (!botoes) {
      return sock.sendMessage(from, { text: dados.text || dados.caption || '' }, { quoted: info });
    }

    const but = [];
    for (const i of buttons) {
      if (i.type === 'copy_url') {
        but.push({
          name: "cta_url",
          buttonParamsJson: JSON.stringify({ display_text: i.text, url: i.url, merchant_url: i.url })
        });
      } else if (i.type === 'copy_text') {
        but.push({
          name: "cta_copy",
          buttonParamsJson: JSON.stringify({ display_text: i.text, copy_code: i.url })
        });
      } else if (i.type === 'call') {
        but.push({
          name: "cta_call",
          buttonParamsJson: JSON.stringify({ display_text: i.text, id: i.url })
        });
      } else if (i.type === 'cmd') {
        but.push({
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({ display_text: i.text, id: i.command, disabled: false })
        });
      } else if (i.type === 'list' || i.type === 'lista') {
        const sections = [];
        for (const a of i.rowId) {
          const rows = a.options.map(b => ({
            header: b?.name || '',
            title: b?.title || '',
            description: b?.body || '',
            id: b?.command || '',
            disabled: false
          }));
          sections.push({
            title: a?.title || '',
            highlight_label: a?.body || '',
            rows
          });
        }
        but.push({
          name: "single_select",
          buttonParamsJson: JSON.stringify({ title: i.title, sections })
        });
      }
    }

    let midia = null;
    if (dados?.image) {
      midia = await prepareWAMessageMedia({ image: Buffer.isBuffer(dados.image) ? dados.image : { url: dados.image } }, { upload: sock.waUploadToServer });
    } else if (dados?.video) {
      midia = await prepareWAMessageMedia({ video: Buffer.isBuffer(dados.video) ? dados.video : { url: dados.video } }, { upload: sock.waUploadToServer });
    }

    const header = midia?.imageMessage ? { hasMediaAttachment: true, imageMessage: midia.imageMessage } :
                   midia?.videoMessage ? { hasMediaAttachment: true, videoMessage: midia.videoMessage } :
                   undefined;

    const message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header,
            body: { text: dados?.caption || dados?.text || '' },
            footer: { text: dados?.footer || '' },
            contextInfo: {
              participant: info?.key?.participant || info?.key?.remoteJid || '',
              mentionedJid: dados?.mentions || [],
              quotedMessage: info?.message || undefined,
              forwardingScore: dados?.contextInfo?.forwardingScore,
              isForwarded: dados?.contextInfo?.isForwarded
            },
            nativeFlowMessage: {
              buttons: but,
              messageParamsJson: ""
            }
          }
        }
      }
    };

    const msg = generateWAMessageFromContent(from, message, { userJid: sock.user?.id, quoted: info });
    await sock.relayMessage(from, msg.message, { messageId: msg.key.id });
  } catch (e) {
    console.error("Erro em sendButton:", e);
  }
};

/**
 * Função simplificada para enviar botões tradicionais ou texto se botões falharem
 */
const EnvButton = async (from, dados, sock, buttons, info) => {
  try {
    const text = Array.isArray(dados) ? dados[0] : (dados.text || dados.caption || '');
    const footer = Array.isArray(dados) ? dados[1] : (dados.footer || '');
    
    const options = {
      text: text,
      footer: footer,
      mentions: dados.mentions || [],
      quoted: info
    };

    if (buttons && buttons.length > 0) {
        return sendButton(from, { text, footer, ...dados }, sock, buttons, info);
    }

    return sock.sendMessage(from, options);
  } catch (e) {
    console.error("Erro em EnvButton:", e);
  }
};

module.exports = { sendButton, EnvButton };
