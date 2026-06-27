import fs from 'fs';
import path from 'path';
import logger from '../utils/logger.js';
import { isLid, resolveJidFromLid } from '../utils/lidUtils.js';

// ── Caminho do banco de dados ──
const DATA_DIR = path.join(process.cwd(), 'data');
const PROFILES_FILE = path.join(DATA_DIR, 'profiles.json');

// Garante que o diretório existe
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(PROFILES_FILE)) {
  fs.writeFileSync(PROFILES_FILE, JSON.stringify({}, null, 2), 'utf8');
}

// ── Cache em memória ──
let _cache = null;

/**
 * Normaliza qualquer JID/LID para uma chave de perfil consistente.
 *
 * Espelha a lógica de resolveSenderJid() do messages.upsert.js:
 *   - LID (@lid) → tenta resolver para número de telefone via users DB
 *   - Se não resolver, usa o número do LID (mesma fallback do sender)
 *   - JID (@s.whatsapp.net) → extrai só o número puro (sem device suffix)
 *
 * Assim getProfile/addCoins/removeCoins SEMPRE chegam na mesma chave
 * que foi usada quando o perfil foi criado via mensagem.
 */
function normalizeKey(jid) {
  if (!jid || jid === 'unknown') return 'unknown';

  // Remove device suffix: '5521999:2@...' → '5521999'
  const raw = jid.split('@')[0].split(':')[0];
  const domain = (jid.split('@')[1] || '').toLowerCase();

  // Caso LID: tenta resolver para JID telefônico
  if (domain === 'lid' || isLid(jid)) {
    const resolved = resolveJidFromLid(raw + '@lid');
    if (resolved) {
      // resolved = '5521999999999@s.whatsapp.net'
      return resolved.split('@')[0].split(':')[0];
    }
    // Fallback: usa número do LID (mesmo comportamento de resolveSenderJid)
    return raw;
  }

  return raw;
}

function load() {
  if (_cache) return _cache;
  try {
    _cache = JSON.parse(fs.readFileSync(PROFILES_FILE, 'utf8'));
  } catch (e) {
    logger.error('profiles.js: Erro ao ler profiles.json, iniciando vazio.', e.message);
    _cache = {};
  }
  return _cache;
}

/** Salva imediatamente no disco (síncrono) */
function save() {
  try {
    fs.writeFileSync(PROFILES_FILE, JSON.stringify(_cache, null, 2), 'utf8');
  } catch (e) {
    logger.error('profiles.js: Erro ao salvar profiles.json', e.message);
  }
}

/** Cria perfil padrão para um usuário */
function defaultProfile() {
  return {
    level: 1,
    xp: 0,
    totalXp: 0,
    coins: 100,
    lastDaily: 0,
    lastMine: 0,
    lastFish: 0,
    lastWork: 0,
    lastRob: 0,
    messages: 0,
    streak: 0,
    lastActive: 0
  };
}

// ════════════════════════════════════════════
// FUNÇÕES PÚBLICAS
// ════════════════════════════════════════════

export function getProfile(jid) {
  const db = load();
  const key = normalizeKey(jid);

  if (!db[key]) {
    db[key] = defaultProfile();
    save();
  }

  // Migrar campos ausentes de perfis antigos
  const p = db[key];
  const def = defaultProfile();
  let migrated = false;
  for (const field of Object.keys(def)) {
    if (p[field] === undefined || p[field] === null) {
      p[field] = def[field];
      migrated = true;
    }
  }
  if (migrated) save();

  return p;
}

export function addCoins(jid, amount) {
  const db = load();
  const key = normalizeKey(jid);
  const p = getProfile(jid); // garantir que existe
  amount = Math.max(0, Math.floor(Number(amount)) || 0);
  db[key].coins += amount;
  save();
  return db[key].coins;
}

export function removeCoins(jid, amount) {
  const db = load();
  const key = normalizeKey(jid);
  const p = getProfile(jid);
  amount = Math.max(0, Math.floor(Number(amount)) || 0);
  if (db[key].coins < amount) return false;
  db[key].coins -= amount;
  save();
  return true;
}

export function setCoins(jid, amount) {
  const db = load();
  const key = normalizeKey(jid);
  getProfile(jid);
  db[key].coins = Math.max(0, Math.floor(Number(amount)) || 0);
  save();
  return db[key].coins;
}

export function addXP(jid, amount) {
  const db = load();
  const key = normalizeKey(jid);
  const p = getProfile(jid);

  amount = Math.max(0, Math.floor(Number(amount)) || 0);

  db[key].xp += amount;
  db[key].totalXp += amount;
  db[key].messages += 1;

  // Streak diário
  const now = Date.now();
  const ONE_DAY = 86_400_000;
  const elapsed = now - (db[key].lastActive || 0);
  if (elapsed >= ONE_DAY && elapsed < 2 * ONE_DAY) {
    db[key].streak = (db[key].streak || 0) + 1;
    db[key].lastActive = now;
  } else if (elapsed >= 2 * ONE_DAY) {
    db[key].streak = 1;
    db[key].lastActive = now;
  }
  if (!db[key].lastActive) db[key].lastActive = now;

  // Level up
  const xpNeeded = db[key].level * 100;
  let levelUp = false;
  if (db[key].xp >= xpNeeded) {
    db[key].xp -= xpNeeded;
    db[key].level += 1;
    const bonus = (db[key].level * 10) + Math.min(db[key].streak, 10) * 5;
    db[key].coins += bonus;
    levelUp = true;
  }

  save();
  return { levelUp, newLevel: db[key].level, xpNeeded, currentXp: db[key].xp, streak: db[key].streak };
}

export function claimDaily(jid) {
  const db = load();
  const key = normalizeKey(jid);
  const p = getProfile(jid);
  const now = Date.now();
  const DAY = 86_400_000;

  if (now - db[key].lastDaily < DAY) {
    const left = DAY - (now - db[key].lastDaily);
    return {
      success: false,
      waitHours: Math.floor(left / 3_600_000),
      waitMins: Math.floor((left % 3_600_000) / 60_000)
    };
  }

  const streakBonus = Math.min(db[key].streak || 0, 30) * 3;
  const reward = Math.floor(Math.random() * 100) + 100 + streakBonus;
  db[key].coins += reward;
  db[key].lastDaily = now;
  save();
  return { success: true, reward, total: db[key].coins, streak: db[key].streak };
}

/** Retorna cooldown restante em ms para uma atividade */
export function getCooldown(jid, field) {
  const db = load();
  const key = normalizeKey(jid);
  getProfile(jid);
  return db[key][field] || 0;
}

/** Define o timestamp de uma atividade */
export function setCooldown(jid, field) {
  const db = load();
  const key = normalizeKey(jid);
  getProfile(jid);
  db[key][field] = Date.now();
  save();
}

export function getTopProfiles(limit = 10) {
  const db = load();
  return Object.entries(db)
    .map(([key, p]) => ({ jid: key, ...p }))
    .filter(p => p.messages > 0)
    .sort((a, b) => b.level !== a.level ? b.level - a.level : (b.totalXp || 0) - (a.totalXp || 0))
    .slice(0, limit);
}

export default {
  getProfile,
  addCoins,
  removeCoins,
  setCoins,
  addXP,
  claimDaily,
  getCooldown,
  setCooldown,
  getTopProfiles,
  normalizeKey
};
