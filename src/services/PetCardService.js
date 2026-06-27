import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';
import logger from '../utils/logger.js';
import { PET_TYPES } from '../database/pets.js';

const ASSETS_DIR  = path.join(process.cwd(), 'assets', 'pets');
const FONT_CACHE  = new Map();
const IMAGE_CACHE = new Map();

// ── Paleta de cores em hex (Jimp usa 0xRRGGBBAA) ─────────────────────────────
const C = {
  bg:        0x1a1a2eFF,  // azul escuro profundo
  card:      0x16213eFF,  // card secundário
  accent:    0xe94560FF,  // rosa-vermelho vibrante
  accent2:   0x0f3460FF,  // azul médio
  white:     0xffffffff,
  offWhite:  0xe8e8f0FF,
  gray:      0x8888aaFF,
  gold:      0xffd700FF,
  green:     0x4caf50FF,
  orange:    0xff9800FF,
  red:       0xf44336FF,
};

/**
 * Carrega uma fonte com cache.
 * Jimp 0.22 suporta: FONT_SANS_8_BLACK, FONT_SANS_16_BLACK, FONT_SANS_32_BLACK, FONT_SANS_64_BLACK
 */
async function getFont(fontConst) {
  if (!FONT_CACHE.has(fontConst)) {
    const font = await Jimp.loadFont(fontConst);
    FONT_CACHE.set(fontConst, font);
  }
  return FONT_CACHE.get(fontConst);
}

/**
 * Carrega imagem do pet com cache.
 */
async function getPetImage(petType) {
  const info = PET_TYPES[petType];
  if (!info) return null;
  const imgPath = path.join(ASSETS_DIR, info.file);
  if (!fs.existsSync(imgPath)) return null;

  const cacheKey = imgPath;
  if (!IMAGE_CACHE.has(cacheKey)) {
    try {
      const img = await Jimp.read(imgPath);
      IMAGE_CACHE.set(cacheKey, img);
    } catch (e) {
      logger.warn(`[PetCard] Erro ao carregar imagem ${imgPath}: ${e.message}`);
      return null;
    }
  }
  return IMAGE_CACHE.get(cacheKey).clone();
}

/**
 * Preenche um retângulo arredondado de forma manual (Jimp não tem border-radius nativo).
 */
function drawRect(img, x, y, w, h, colorHex, alpha = 255) {
  img.scan(x, y, w, h, function (px, py, idx) {
    this.bitmap.data[idx]     = (colorHex >> 24) & 0xff;
    this.bitmap.data[idx + 1] = (colorHex >> 16) & 0xff;
    this.bitmap.data[idx + 2] = (colorHex >> 8)  & 0xff;
    this.bitmap.data[idx + 3] = alpha;
  });
}

/**
 * Gera o card visual do mascote usando Jimp.
 * Retorna um Buffer PNG ou null se falhar.
 */
export async function generatePetCard(petData, humor, pushName) {
  try {
    const W = 600, H = 360;
    const img = new Jimp(W, H, C.bg);

    // ── Fundo decorativo — faixas diagonais sutis ──────────────────────────
    for (let i = 0; i < W; i += 40) {
      img.scan(i, 0, 2, H, function (px, py, idx) {
        this.bitmap.data[idx + 3] = 18; // ~7% alpha
      });
    }

    // ── Card interno ───────────────────────────────────────────────────────
    drawRect(img, 14, 14, W - 28, H - 28, C.card);

    // ── Barra de acento lateral esquerda ──────────────────────────────────
    drawRect(img, 14, 14, 6, H - 28, C.accent);

    // ── Cabeçalho ─────────────────────────────────────────────────────────
    drawRect(img, 20, 14, W - 34, 52, C.accent2);

    // ── Imagem do pet (lado esquerdo) ──────────────────────────────────────
    const petImg = await getPetImage(petData.type);
    if (petImg) {
      petImg.resize(160, 160);
      img.composite(petImg, 30, 75, {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacitySource: 1,
        opacityDest: 1,
      });
    }

    // ── Barra de humor ─────────────────────────────────────────────────────
    const barX = 210, barY = 240, barW = 340, barH = 18;
    drawRect(img, barX, barY, barW, barH, 0x333355FF); // trilho
    const humorPct = humor.bar.split('█').length - 1; // 0..9
    const filled = Math.round((humorPct / 9) * barW);
    const barColor = humorPct >= 7 ? C.green : humorPct >= 4 ? C.orange : C.red;
    if (filled > 0) drawRect(img, barX, barY, filled, barH, barColor);

    // ── Textos ─────────────────────────────────────────────────────────────
    const f32 = await getFont(Jimp.FONT_SANS_32_BLACK);
    const f16 = await getFont(Jimp.FONT_SANS_16_BLACK);

    // Título no cabeçalho
    img.print(f16, 25, 24, `PET DE ${(pushName || '').toUpperCase().slice(0, 22)}`);

    // Nome do pet
    img.print(f32, 205, 75, `${petData.emoji || ''} ${petData.name}`);

    // Tipo
    img.print(f16, 210, 120, `Tipo: ${(petData.type || '').toUpperCase()}`);

    // Humor label
    img.print(f16, 210, 155, `Estado: ${humor.emoji} ${humor.label}`);

    // Label barra
    img.print(f16, 210, 218, 'Felicidade:');

    // Porcento barra
    const pctStr = `${Math.round((humorPct / 9) * 100)}%`;
    img.print(f16, barX + barW + 8, barY, pctStr);

    // Itens equipados
    const equippedLabel = (petData.equippedItems || []).map(e => `${e.emoji}${e.name}`).join('  ') || 'Nenhum';
    img.print(f16, 210, 275, `Visual: ${equippedLabel.slice(0, 36)}`);

    // Rodapé
    img.print(f16, 25, H - 38, '/mascote alimentar  |  /mascote vestir <id>  |  /loja');

    // ── Linha divisória rodapé ─────────────────────────────────────────────
    drawRect(img, 20, H - 46, W - 34, 2, C.accent);

    // Exporta como buffer PNG
    const buffer = await img.getBufferAsync(Jimp.MIME_PNG);
    return buffer;
  } catch (e) {
    logger.error('[PetCard] Erro ao gerar card:', e.message);
    return null;
  }
}

/**
 * Gera um card de loja simplificado usando Jimp.
 * Retorna Buffer PNG ou null.
 */
export async function generateShopBanner(totalProducts) {
  try {
    const W = 600, H = 160;
    const img = new Jimp(W, H, C.bg);
    drawRect(img, 0, 0, 8, H, C.accent);
    drawRect(img, 8, 0, W - 8, H, C.card);

    const f32 = await getFont(Jimp.FONT_SANS_32_BLACK);
    const f16 = await getFont(Jimp.FONT_SANS_16_BLACK);

    img.print(f32, 24, 24,  '🏪 LOJA ONNX IA');
    img.print(f16, 24, 72,  `${totalProducts} produtos disponíveis`);
    img.print(f16, 24, 100, '/loja comprar <id>  •  /loja info <id>  •  /inventario');

    const buffer = await img.getBufferAsync(Jimp.MIME_PNG);
    return buffer;
  } catch (e) {
    logger.error('[ShopBanner] Erro:', e.message);
    return null;
  }
}

export default { generatePetCard, generateShopBanner };
