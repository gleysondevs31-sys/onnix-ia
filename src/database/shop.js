import fs from 'fs';
import path from 'path';
import logger from '../utils/logger.js';

const DATA_DIR = path.join(process.cwd(), 'data');
const SHOP_FILE = path.join(DATA_DIR, 'shop.json');

// Catálogo padrão (seed)
const DEFAULT_SHOP = {
  products: [
    { id: 'racao_basica',    name: 'Ração Básica',       emoji: '🥣', price: 50,  category: 'comida',    description: 'Alimenta seu mascote por 24h.',           stock: -1 },
    { id: 'racao_premium',   name: 'Ração Premium',      emoji: '🍖', price: 150, category: 'comida',    description: 'Alimenta e deixa seu mascote feliz por 48h!', stock: -1 },
    { id: 'petisco',         name: 'Petisco Especial',   emoji: '🍪', price: 80,  category: 'comida',    description: 'Aumenta o humor do pet!',                 stock: -1 },
    { id: 'touca_natal',     name: 'Touca de Natal',     emoji: '🎄', price: 300, category: 'roupa',     description: 'Touca festiva para seu pet.',              stock: -1 },
    { id: 'camiseta_azul',   name: 'Camiseta Azul',      emoji: '👕', price: 200, category: 'roupa',     description: 'Camisetinha estilosa para seu pet.',       stock: -1 },
    { id: 'fantasia_heroi',  name: 'Fantasia de Herói',  emoji: '🦸', price: 500, category: 'roupa',     description: 'Seu pet vira super-herói!',                stock: -1 },
    { id: 'oculos_sol',      name: 'Óculos de Sol',      emoji: '😎', price: 250, category: 'acessorio', description: 'Para o pet mais estiloso do grupo!',       stock: -1 },
    { id: 'coleira_dourada', name: 'Coleira Dourada',    emoji: '✨', price: 400, category: 'acessorio', description: 'Coleira de luxo para pets de alto status!', stock: -1 },
    { id: 'arco_flor',       name: 'Arco de Flores',     emoji: '🌸', price: 180, category: 'acessorio', description: 'Arco floral charmoso para pets fofos!',    stock: -1 },
    { id: 'bola_borracha',   name: 'Bola de Borracha',   emoji: '🎾', price: 100, category: 'brinquedo', description: 'Brinquedo favorito! Aumenta felicidade.',   stock: -1 },
    { id: 'arranhador',      name: 'Arranhador',         emoji: '🪵', price: 200, category: 'brinquedo', description: 'Perfeito para animais que gostam de arranhar!', stock: -1 },
    { id: 'adocao_gato',     name: 'Adotar Gato',        emoji: '🐱', price: 500, category: 'mascote',   description: 'Adote um gatinho laranja super fofo!',     stock: -1 },
    { id: 'adocao_cachorro', name: 'Adotar Cachorro',    emoji: '🐶', price: 500, category: 'mascote',   description: 'Adote um cachorrinho golden retriever!',   stock: -1 },
    { id: 'adocao_papagaio', name: 'Adotar Papagaio',   emoji: '🦜', price: 600, category: 'mascote',   description: 'Adote um papagaio colorido e falante!',    stock: -1 },
    { id: 'adocao_coelho',   name: 'Adotar Coelho',      emoji: '🐰', price: 450, category: 'mascote',   description: 'Adote um coelhinho branco megafofo!',      stock: -1 },
    { id: 'adocao_hamster',  name: 'Adotar Hamster',     emoji: '🐹', price: 350, category: 'mascote',   description: 'Adote um hamster de bochechas gordas!',    stock: -1 },
    { id: 'adocao_raposa',   name: 'Adotar Raposa',      emoji: '🦊', price: 700, category: 'mascote',   description: 'Adote uma raposinha laranja rara!',        stock: -1 },
  ]
};

// Garante que a pasta e o arquivo existem
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(SHOP_FILE)) {
  fs.writeFileSync(SHOP_FILE, JSON.stringify(DEFAULT_SHOP, null, 2), 'utf8');
}

let _cache = null;

function load() {
  if (_cache) return _cache;
  try {
    _cache = JSON.parse(fs.readFileSync(SHOP_FILE, 'utf8'));
    // Migrar estrutura antiga (array direto → {products: []})
    if (Array.isArray(_cache)) _cache = { products: _cache };
    if (!_cache.products) _cache.products = [];
  } catch (e) {
    logger.error('shop.js: Erro ao ler shop.json', e.message);
    _cache = { products: [] };
  }
  return _cache;
}

function save() {
  try {
    fs.writeFileSync(SHOP_FILE, JSON.stringify(_cache, null, 2), 'utf8');
  } catch (e) {
    logger.error('shop.js: Erro ao salvar shop.json', e.message);
  }
}

/** Retorna todos os produtos */
export function getShop() {
  return load().products;
}

/** Retorna um produto pelo ID */
export function getProduct(id) {
  return load().products.find(p => p.id === id.toLowerCase()) || null;
}

/** Adiciona um produto ao catálogo */
export function addProduct(product) {
  const db = load();
  // Gera ID único se não informado
  if (!product.id) {
    product.id = product.name
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '');
  }
  // Evita duplicatas de ID
  const exists = db.products.findIndex(p => p.id === product.id);
  if (exists !== -1) {
    // Sobrescreve
    db.products[exists] = { ...db.products[exists], ...product };
  } else {
    db.products.push({
      stock: -1,
      ...product
    });
  }
  save();
  return product.id;
}

/** Remove um produto pelo ID */
export function removeProduct(id) {
  const db = load();
  const before = db.products.length;
  db.products = db.products.filter(p => p.id !== id.toLowerCase());
  save();
  return db.products.length < before;
}

/** Decrementa o estoque de um produto (se stock != -1). Retorna false se sem estoque. */
export function consumeStock(id) {
  const db = load();
  const prod = db.products.find(p => p.id === id);
  if (!prod) return false;
  if (prod.stock === -1) return true; // infinito
  if (prod.stock <= 0) return false;
  prod.stock -= 1;
  save();
  return true;
}

/** Restaura o catálogo para o padrão */
export function resetShop() {
  _cache = { products: [...DEFAULT_SHOP.products] };
  save();
}

export default { getShop, getProduct, addProduct, removeProduct, consumeStock, resetShop };
