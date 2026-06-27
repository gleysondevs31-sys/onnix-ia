/**
 * AntiProtection.js — Middleware de Proteção de Grupo
 * 
 * Sistema centralizado de Antilink, Antispam e Antiporn.
 * Estado persistido por grupo em data/anti_settings.json.
 * 
 * Inspirado no Nezuko V5 (nezuko.js linhas 666-669, 23835-23928).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'anti_settings.json');

// Garante que a pasta data e o arquivo existam
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(SETTINGS_FILE)) fs.writeFileSync(SETTINGS_FILE, '{}');

let settings = {};
try {
  settings = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'));
} catch (e) {
  settings = {};
}

function saveSettings() {
  try {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
  } catch (e) {
    logger.error('Erro ao salvar anti_settings.json', e);
  }
}

// ─── Regexes de Detecção ──────────────────────────────────────

const LINK_PATTERNS = [
  /chat\.whatsapp\.com\/[A-Za-z0-9]{10,}/i,          // Grupos WhatsApp
  /wa\.me\/[0-9]+/i,                                   // Links wa.me
  /discord\.(gg|com\/invite)\/[A-Za-z0-9]+/i,         // Discord
  /t\.me\/[A-Za-z0-9_]+/i,                             // Telegram
  /bit\.ly\/[A-Za-z0-9]+/i,                            // Encurtadores
  /tinyurl\.com\/[A-Za-z0-9]+/i,
];

const PORN_URL_PATTERNS = [
  /pornhub|xvideos|xnxx|xhamster|redtube|youporn|tube8|spankbang|brazzers|bangbros/i,
  /onlyfans\.com|chaturbate\.com|cam4\.com|bongacams\.com/i,
  /hentai|rule34|nhentai|hanime/i,
];

const PORN_WORD_LIST = [
  'pornô', 'porno', 'putaria', 'safadeza', 'nudes', 'xvideos',
  'pornhub', 'onlyfans', 'sexo gratis', 'gozada', 'orgasmo',
];

// Cache de avisos por user/grupo
const warningCache = new Map();

function getWarnings(groupJid, userJid) {
  const key = `${groupJid}_${userJid}`;
  return warningCache.get(key) || 0;
}

function addWarning(groupJid, userJid) {
  const key = `${groupJid}_${userJid}`;
  const count = (warningCache.get(key) || 0) + 1;
  warningCache.set(key, count);
  return count;
}

// ─── API Pública ──────────────────────────────────────────

export function getGroupSettings(groupJid) {
  if (!settings[groupJid]) {
    settings[groupJid] = {
      antilink: false,
      antispam: false,
      antiporn: false
    };
  }
  return settings[groupJid];
}

export function toggleProtection(groupJid, type, enabled) {
  if (!settings[groupJid]) {
    settings[groupJid] = { antilink: false, antispam: false, antiporn: false };
  }
  settings[groupJid][type] = enabled;
  saveSettings();
}

/**
 * Verifica se uma mensagem viola alguma proteção ativa.
 * Retorna null se tudo ok, ou um objeto de violação se detectada.
 * 
 * @param {string} groupJid - JID do grupo
 * @param {string} senderJid - JID do remetente
 * @param {string} text - Texto da mensagem
 * @param {boolean} isGroupAdmin - Se o sender é admin do grupo
 * @returns {{ type: string, message: string, shouldKick: boolean } | null}
 */
export function checkMessage(groupJid, senderJid, text, isGroupAdmin) {
  // Admins são imunes a todas as proteções
  if (isGroupAdmin) return null;
  
  const gs = getGroupSettings(groupJid);
  
  // ── Antilink ──
  if (gs.antilink) {
    for (const pattern of LINK_PATTERNS) {
      if (pattern.test(text)) {
        const warnings = addWarning(groupJid, senderJid);
        return {
          type: 'antilink',
          message: `⚠️ *ANTILINK ATIVO*\n\n@${senderJid.split('@')[0]}, links não são permitidos neste grupo!\n\n_Aviso ${warnings}/3 — Após 3 avisos você será removido._`,
          shouldKick: warnings >= 3,
          warnings
        };
      }
    }
  }

  // ── Antiporn ──
  if (gs.antiporn) {
    const textLower = text.toLowerCase();
    
    // Verifica URLs adultas
    for (const pattern of PORN_URL_PATTERNS) {
      if (pattern.test(text)) {
        const warnings = addWarning(groupJid, senderJid);
        return {
          type: 'antiporn',
          message: `🔞 *CONTEÚDO PROIBIDO*\n\n@${senderJid.split('@')[0]}, conteúdo adulto não é permitido!\n\n_Aviso ${warnings}/3_`,
          shouldKick: warnings >= 3,
          warnings
        };
      }
    }

    // Verifica palavras proibidas
    for (const word of PORN_WORD_LIST) {
      if (textLower.includes(word)) {
        const warnings = addWarning(groupJid, senderJid);
        return {
          type: 'antiporn',
          message: `🔞 *LINGUAGEM IMPRÓPRIA*\n\n@${senderJid.split('@')[0]}, esse tipo de conteúdo não é permitido aqui!\n\n_Aviso ${warnings}/3_`,
          shouldKick: warnings >= 3,
          warnings
        };
      }
    }
  }

  return null;
}

export default {
  getGroupSettings,
  toggleProtection,
  checkMessage
};
