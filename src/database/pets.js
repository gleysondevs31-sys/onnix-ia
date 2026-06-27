import fs from 'fs';
import path from 'path';
import logger from '../utils/logger.js';

const DATA_DIR = path.join(process.cwd(), 'data');
const PETS_FILE = path.join(DATA_DIR, 'pets.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(PETS_FILE)) fs.writeFileSync(PETS_FILE, JSON.stringify({}, null, 2), 'utf8');

// ── Tipos de mascotes disponíveis ──────────────────────────────────────────
export const PET_TYPES = {
  gato:     { name: 'Gato',     emoji: '🐱', file: 'cat.png',     adoptId: 'adocao_gato',     cost: 500, phrases: ['Miau~', 'Purr...', '*ronrona*', 'Nyaa!'] },
  cachorro: { name: 'Cachorro', emoji: '🐶', file: 'dog.png',     adoptId: 'adocao_cachorro', cost: 500, phrases: ['Au au!', '*abana o rabo*', 'Woof!', '*late feliz*'] },
  papagaio: { name: 'Papagaio', emoji: '🦜', file: 'parrot.png',  adoptId: 'adocao_papagaio', cost: 600, phrases: ['Polly quer biscoito!', 'Squawk!', '*imita sua voz*', '...'] },
  coelho:   { name: 'Coelho',   emoji: '🐰', file: 'rabbit.png',  adoptId: 'adocao_coelho',   cost: 450, phrases: ['*freme o narizinho*', '...', '*bate o pezinho*', '*brinca*'] },
  hamster:  { name: 'Hamster',  emoji: '🐹', file: 'hamster.png', adoptId: 'adocao_hamster',  cost: 350, phrases: ['*recheia as bochechas*', '...', '*corre na rodasinha*', 'Squeak!'] },
  raposa:   { name: 'Raposa',   emoji: '🦊', file: 'fox.png',     adoptId: 'adocao_raposa',   cost: 700, phrases: ['*espreita*', '*abana a cauda*', 'Ring-ding-ding!', '*é esperta!*'] },
};

let _cache = null;

function load() {
  if (_cache) return _cache;
  try {
    _cache = JSON.parse(fs.readFileSync(PETS_FILE, 'utf8'));
  } catch (e) {
    logger.error('pets.js: Erro ao ler pets.json', e.message);
    _cache = {};
  }
  return _cache;
}

function save() {
  try {
    fs.writeFileSync(PETS_FILE, JSON.stringify(_cache, null, 2), 'utf8');
  } catch (e) {
    logger.error('pets.js: Erro ao salvar pets.json', e.message);
  }
}

/** Retorna os dados completos do usuário (pet + inventário) */
export function getUserData(key) {
  const db = load();
  if (!db[key]) {
    db[key] = { pet: null, inventory: [], lastFed: 0 };
    save();
  }
  // Migrar campos ausentes
  if (db[key].inventory === undefined) db[key].inventory = [];
  if (db[key].lastFed === undefined) db[key].lastFed = 0;
  return db[key];
}

/** Salva os dados do usuário */
function setUserData(key, data) {
  const db = load();
  db[key] = data;
  save();
}

/** Adota um pet (tipo = 'gato', 'cachorro', etc) */
export function adoptPet(key, type) {
  const petType = PET_TYPES[type.toLowerCase()];
  if (!petType) return { success: false, reason: 'tipo_invalido' };

  const data = getUserData(key);
  if (data.pet) return { success: false, reason: 'ja_tem_pet' };

  data.pet = {
    type: type.toLowerCase(),
    name: petType.name,
    emoji: petType.emoji,
    equippedItems: [],
    happiness: 100,
    adoptedAt: Date.now(),
  };
  data.lastFed = Date.now();
  setUserData(key, data);
  return { success: true, pet: data.pet };
}

/** Remove o pet atual do usuário */
export function releasePet(key) {
  const data = getUserData(key);
  if (!data.pet) return false;
  data.pet = null;
  data.lastFed = 0;
  setUserData(key, data);
  return true;
}

/** Alimenta o pet usando um item do inventário.
 *  feedDuration: quantas ms o item sacia (ex: 24h = 86400000) */
export function feedPet(key, itemId, feedDuration = 86_400_000) {
  const data = getUserData(key);
  if (!data.pet) return { success: false, reason: 'sem_pet' };

  const idx = data.inventory.findIndex(i => i.id === itemId && i.quantity > 0);
  if (idx === -1) return { success: false, reason: 'sem_item' };

  // Verifica se está com fome (lastFed + feedDuration < now)
  const now = Date.now();
  const alreadyFed = (now - data.lastFed) < (feedDuration * 0.5);
  if (alreadyFed) return { success: false, reason: 'nao_com_fome', lastFed: data.lastFed };

  // Consome o item
  data.inventory[idx].quantity -= 1;
  if (data.inventory[idx].quantity <= 0) data.inventory.splice(idx, 1);

  data.lastFed = now;
  data.pet.happiness = Math.min(100, (data.pet.happiness || 0) + 20);
  setUserData(key, data);
  return { success: true };
}

/** Equipa um item no pet */
export function equipItem(key, itemId, itemName, itemEmoji) {
  const data = getUserData(key);
  if (!data.pet) return { success: false, reason: 'sem_pet' };

  const idx = data.inventory.findIndex(i => i.id === itemId && i.quantity > 0);
  if (idx === -1) return { success: false, reason: 'sem_item' };

  // Remove item anterior da mesma categoria se existir
  // (mantém simplicidade — apenas 1 item equipado por vez)
  data.pet.equippedItems = data.pet.equippedItems || [];

  // Evita duplicar o mesmo item equipado
  if (!data.pet.equippedItems.find(e => e.id === itemId)) {
    data.pet.equippedItems.push({ id: itemId, name: itemName, emoji: itemEmoji });
  }

  // Consome do inventário
  data.inventory[idx].quantity -= 1;
  if (data.inventory[idx].quantity <= 0) data.inventory.splice(idx, 1);

  setUserData(key, data);
  return { success: true };
}

/** Adiciona um item ao inventário do usuário */
export function addToInventory(key, item) {
  const data = getUserData(key);
  const existing = data.inventory.find(i => i.id === item.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    data.inventory.push({ ...item, quantity: 1 });
  }
  setUserData(key, data);
}

/** Retorna o inventário do usuário */
export function getInventory(key) {
  return getUserData(key).inventory;
}

/** Calcula o humor do pet baseado em quando foi alimentado */
export function getPetHumor(key) {
  const data = getUserData(key);
  if (!data.pet) return null;

  const AGE_HOUR = 3_600_000;
  const elapsed = Date.now() - data.lastFed;

  if (elapsed < 12 * AGE_HOUR) return { emoji: '😊', label: 'Super feliz', bar: '█████████' };
  if (elapsed < 24 * AGE_HOUR) return { emoji: '🙂', label: 'Bem',         bar: '███████░░' };
  if (elapsed < 36 * AGE_HOUR) return { emoji: '😐', label: 'Neutro',      bar: '█████░░░░' };
  if (elapsed < 48 * AGE_HOUR) return { emoji: '😕', label: 'Triste',      bar: '███░░░░░░' };
  return { emoji: '😢', label: 'Com fome!', bar: '█░░░░░░░░' };
}

export default {
  PET_TYPES, getUserData, adoptPet, releasePet, feedPet,
  equipItem, addToInventory, getInventory, getPetHumor,
};
