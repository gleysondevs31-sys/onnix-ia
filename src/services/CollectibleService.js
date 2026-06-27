import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';
import logger from '../utils/logger.js';

const ASSETS_DIR       = path.join(process.cwd(), 'assets', 'collectibles');
const FONT_CACHE       = new Map();
const IMG_CACHE        = new Map();

// ── Definição dos tiers ──────────────────────────────────────────────────────
export const TIER_CONFIG = {
  bronze: {
    name:     'Bronze',
    emoji:    '☕',
    bg:       0x3D2200FF,   // marrom escuro
    accent:   0xCD7F32FF,   // bronze
    text:     0xF5D08AFF,   // cobre claro
    file:     'mc_bronze.png',
  },
  silver: {
    name:     'Silver',
    emoji:    '🥈',
    bg:       0x1A1A2AFF,
    accent:   0xC0C0C0FF,   // prata
    text:     0xE8E8E8FF,
    file:     'mc_silver.png',
  },
  ouro: {
    name:     'Ouro',
    emoji:    '🥇',
    bg:       0x1A1000FF,
    accent:   0xFFD700FF,   // ouro
    text:     0xFFF3A0FF,
    file:     'mc_ouro.png',
  },
  diamante: {
    name:     'Diamante',
    emoji:    '💎',
    bg:       0x000D1AFF,
    accent:   0x00CED1FF,   // ciano cristal
    text:     0xB0F0FFFF,
    file:     'mc_diamante.png',
  },
};

async function getFont(fontConst) {
  if (!FONT_CACHE.has(fontConst)) {
    FONT_CACHE.set(fontConst, await Jimp.loadFont(fontConst));
  }
  return FONT_CACHE.get(fontConst);
}

async function loadImg(filePath) {
  if (!IMG_CACHE.has(filePath)) {
    try {
      IMG_CACHE.set(filePath, await Jimp.read(filePath));
    } catch (e) {
      logger.warn(`[Collectible] Imagem não encontrada: ${filePath}`);
      return null;
    }
  }
  return IMG_CACHE.get(filePath).clone();
}

function drawRect(img, x, y, w, h, colorHex) {
  img.scan(Math.max(0, x), Math.max(0, y), Math.min(w, img.bitmap.width - x), Math.min(h, img.bitmap.height - y), function (px, py, idx) {
    this.bitmap.data[idx]     = (colorHex >> 24) & 0xff;
    this.bitmap.data[idx + 1] = (colorHex >> 16) & 0xff;
    this.bitmap.data[idx + 2] = (colorHex >> 8)  & 0xff;
    this.bitmap.data[idx + 3] = colorHex & 0xff;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// FIGURINHA (sticker-like): 400 × 550
// ─────────────────────────────────────────────────────────────────────────────
export async function generateFigurinha(tier) {
  const cfg = TIER_CONFIG[tier];
  if (!cfg) return null;

  try {
    const W = 400, H = 550;
    const img = new Jimp(W, H, cfg.bg);

    // Borda externa
    drawRect(img, 0, 0, W, 8,     cfg.accent);
    drawRect(img, 0, H - 8, W, 8, cfg.accent);
    drawRect(img, 0, 0, 8, H,     cfg.accent);
    drawRect(img, W - 8, 0, 8, H, cfg.accent);

    // Imagem base do tier (logo gerada por IA)
    const baseImg = await loadImg(path.join(ASSETS_DIR, cfg.file));
    if (baseImg) {
      baseImg.resize(360, 360);
      img.composite(baseImg, 20, 60, { mode: Jimp.BLEND_SOURCE_OVER });
    }

    // Faixa superior
    drawRect(img, 8, 8, W - 16, 48, cfg.accent);
    // Faixa inferior
    drawRect(img, 8, H - 64, W - 16, 56, cfg.accent);

    const f16 = await getFont(Jimp.FONT_SANS_16_BLACK);
    const f32 = await getFont(Jimp.FONT_SANS_32_BLACK);

    img.print(f16, 14, 18,  'METROCASA CONSTRUTORA');
    img.print(f32, 14, H - 58, `${cfg.emoji} ${cfg.name.toUpperCase()}`);

    return await img.getBufferAsync(Jimp.MIME_PNG);
  } catch (e) {
    logger.error('[CollectibleService] Figurinha error:', e.message);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// BANNER DE PERFIL: 700 × 260 (foto + dados do usuário)
// ─────────────────────────────────────────────────────────────────────────────
export async function generateBanner(tier, userName, level, coins) {
  const cfg = TIER_CONFIG[tier];
  if (!cfg) return null;

  try {
    const W = 700, H = 260;
    const img = new Jimp(W, H, cfg.bg);

    // Borda
    drawRect(img, 0, 0, W, 6,     cfg.accent);
    drawRect(img, 0, H - 6, W, 6, cfg.accent);
    drawRect(img, 0, 0, 6, H,     cfg.accent);
    drawRect(img, W - 6, 0, 6, H, cfg.accent);

    // Faixa lateral decorativa
    drawRect(img, 6, 6, 8, H - 12, cfg.accent);

    // Área do avatar (placeholder circular quadrado)
    drawRect(img, 24, 30, 140, 140, cfg.accent);
    drawRect(img, 28, 34, 132, 132, cfg.bg);

    // Mini logo tier
    const baseImg = await loadImg(path.join(ASSETS_DIR, cfg.file));
    if (baseImg) {
      baseImg.resize(128, 128);
      img.composite(baseImg, 30, 36, { mode: Jimp.BLEND_SOURCE_OVER });
    }

    const f32 = await getFont(Jimp.FONT_SANS_32_BLACK);
    const f16 = await getFont(Jimp.FONT_SANS_16_BLACK);

    // Nome do usuário
    img.print(f32, 180, 30, (userName || 'Usuário').slice(0, 22));

    // Info badge
    drawRect(img, 180, 80, 200, 28, cfg.accent);
    img.print(f16, 186, 85, `${cfg.emoji} ${cfg.name} Member`);

    // Stats
    img.print(f16, 180, 120, `🏆 Nível: ${level || 1}`);
    img.print(f16, 180, 148, `🪙 Coins: ${(coins || 0).toLocaleString('pt-BR')}`);
    img.print(f16, 180, 176, `📛 Metrocasa Construtora`);

    // Marca d'água
    img.print(f16, W - 160, H - 30, 'ONNX IA Bot');

    return await img.getBufferAsync(Jimp.MIME_PNG);
  } catch (e) {
    logger.error('[CollectibleService] Banner error:', e.message);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// WALLPAPER: 600 × 900
// ─────────────────────────────────────────────────────────────────────────────
export async function generateWallpaper(tier, userName) {
  const cfg = TIER_CONFIG[tier];
  if (!cfg) return null;

  try {
    const W = 600, H = 900;
    const img = new Jimp(W, H, cfg.bg);

    // Grade de fundo decorativa
    for (let y = 0; y < H; y += 60) {
      img.scan(0, y, W, 2, function (px, py, idx) {
        this.bitmap.data[idx + 3] = 30;
      });
    }
    for (let x = 0; x < W; x += 60) {
      img.scan(x, 0, 2, H, function (px, py, idx) {
        this.bitmap.data[idx + 3] = 30;
      });
    }

    // Borda tripla
    drawRect(img, 0,  0,  W,    6,    cfg.accent);
    drawRect(img, 0,  H - 6, W, 6,    cfg.accent);
    drawRect(img, 0,  0,  6,    H,    cfg.accent);
    drawRect(img, W - 6, 0, 6,  H,    cfg.accent);
    drawRect(img, 10, 10, W - 20, 4,  cfg.accent);
    drawRect(img, 10, H - 14, W - 20, 4, cfg.accent);

    // Logo grande centralizado
    const baseImg = await loadImg(path.join(ASSETS_DIR, cfg.file));
    if (baseImg) {
      baseImg.resize(400, 400);
      img.composite(baseImg, (W - 400) / 2, 200, { mode: Jimp.BLEND_SOURCE_OVER });
    }

    // Cabeçalho
    drawRect(img, 6, 6, W - 12, 72, cfg.accent);
    const f32 = await getFont(Jimp.FONT_SANS_32_BLACK);
    const f16 = await getFont(Jimp.FONT_SANS_16_BLACK);

    img.print(f32, 20, 16, `${cfg.emoji} METROCASA`);
    img.print(f16, 20, 52, `CONSTRUTORA — ${cfg.name.toUpperCase()}`);

    // Rodapé com dono
    drawRect(img, 6, H - 78, W - 12, 72, cfg.accent);
    img.print(f16, 20, H - 66, (userName || 'Usuário').slice(0, 28));
    img.print(f16, 20, H - 42, `Membro ${cfg.name} • Metrocasa Bot`);
    img.print(f16, W - 160, H - 24, 'ONNX IA');

    return await img.getBufferAsync(Jimp.MIME_PNG);
  } catch (e) {
    logger.error('[CollectibleService] Wallpaper error:', e.message);
    return null;
  }
}

export default { generateFigurinha, generateBanner, generateWallpaper, TIER_CONFIG };
