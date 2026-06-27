/**
 * users.js — Banco de dados local de mapeamento LID ↔ JID
 *
 * Armazena o mapeamento entre LID (@lid) e JID (@s.whatsapp.net) de cada
 * usuário que interagiu com o bot, permitindo resolver o sender correto
 * mesmo quando o grupo usa addressing_mode 'lid' (Baileys 7.x).
 *
 * CONVERTIDO DE CJS PARA ESM para compatibilidade com o projeto type:module.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USERS_DIR = path.join(__dirname, 'data', 'users');

// Certifica de que a pasta existe
if (!fs.existsSync(USERS_DIR)) {
  fs.mkdirSync(USERS_DIR, { recursive: true });
}

const getUserPath = (lid) => path.join(USERS_DIR, `${lid}.json`);

export function getAllUsers() {
  const allData = [];
  try {
    const files = fs.readdirSync(USERS_DIR);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    jsonFiles.forEach(file => {
      const filePath = path.join(USERS_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      try {
        allData.push(JSON.parse(fileContent));
      } catch (e) {}
    });
    return allData;
  } catch (err) {
    return [];
  }
}

export function existsUser(id, type = 'lid') {
  if (type === 'lid') {
    return fs.existsSync(getUserPath(id));
  } else if (type === 'jid') {
    const list = getAllUsers();
    return list.some(u => u.jid === id);
  }
  return false;
}

export function getUser(id, type = 'lid') {
  if (type === 'lid') {
    if (fs.existsSync(getUserPath(id))) {
      return JSON.parse(fs.readFileSync(getUserPath(id), 'utf8'));
    }
    return null;
  } else if (type === 'jid') {
    const list = getAllUsers();
    return list.find(u => u.jid === id) || null;
  }
  return null;
}

export function saveUser(data, lid) {
  try {
    fs.writeFileSync(getUserPath(lid), JSON.stringify(data, null, 2));
  } catch (e) {
    logger.error('Erro ao salvar usuário JID/LID', e);
  }
}

/**
 * Registra ou atualiza o mapeamento LID ↔ JID de um usuário no banco local.
 *
 * CORREÇÃO LID/JID — Baileys 7.x:
 *
 * Dependendo do addressing_mode do grupo, o participant pode ser LID ou JID.
 * O campo participantAlt contém o alternativo (se participant é LID, alt é JID e vice-versa).
 *
 * Casos possíveis:
 *   A) participant = JID, participantAlt = LID  (grupo PN-mode)
 *   B) participant = LID, participantAlt = JID  (grupo LID-mode)
 *   C) participant = JID, sem participantAlt    (grupo legado)
 *
 * @param {object} sock  — socket do Baileys
 * @param {object} msg   — objeto de mensagem do Baileys
 * @param {number} restart — intervalo de atualização em ms (padrão: 24h)
 */
export async function registerWhatsAppUser(sock, msg, restart = 1000 * 60 * 60 * 24) {
  try {
    const isGroup = msg.key.remoteJid?.endsWith('@g.us');

    const participantRaw = isGroup ? msg.key.participant : msg.key.remoteJid;
    const participantAlt = isGroup ? (msg.key.participantAlt || null) : null;

    // Campos legados (algumas versões do Baileys)
    const legacyLid = msg.key?.participantLid || msg.senderLid;

    let senderjid = null;
    let senderlid = null;

    if (participantRaw?.endsWith('@s.whatsapp.net')) {
      // Caso A ou C: participant é JID
      senderjid = participantRaw;
      senderlid = (participantAlt?.endsWith('@lid') ? participantAlt : null) || legacyLid;
    } else if (participantRaw?.endsWith('@lid')) {
      // Caso B: participant é LID
      senderlid = participantRaw;
      senderjid = (participantAlt?.endsWith('@s.whatsapp.net') ? participantAlt : null);
    } else {
      senderjid = participantRaw;
      senderlid = legacyLid;
    }

    if (!senderjid) return;
    if (!senderlid) return; // Sem LID associado não é possível criar o mapeamento

    const jid = senderjid.split(':')[0].split('@')[0] + '@s.whatsapp.net';
    const lid = senderlid.split(':')[0].split('@')[0] + '@lid';
    const name = msg.pushName || 'Usuário';
    const dateNow = Date.now();

    const data = { jid, lid, name, lastUpdate: dateNow + restart };

    if (!existsUser(lid, 'lid')) {
      logger.info(`Novo registro LID/JID salvo: ${name} (${jid})`);
      saveUser(data, lid);
    } else {
      const old = getUser(lid, 'lid');
      // Atualiza o registro a cada 24h ou se o nome de perfil mudar
      if (old && (dateNow >= old.lastUpdate || old.name !== name)) {
        saveUser(data, lid);
      }
    }
  } catch (e) {}
}

export default {
  getAllUsers,
  existsUser,
  getUser,
  saveUser,
  registerWhatsAppUser
};
