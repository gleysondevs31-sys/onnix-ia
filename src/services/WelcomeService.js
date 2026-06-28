/**
 * WelcomeService.js — Gerador de Cards de Boas-Vindas com Jimp
 * 
 * Cria imagens profissionais no padrão visual da Metrocasa Construtora.
 * Cores da marca: Vermelho #ED1C24, Cinza escuro #2D2D2D, Preto #1A1A1A
 * 
 * O card inclui:
 * - Background escuro profissional com gradiente vermelho
 * - Foto de perfil do usuário (circular com borda vermelha dupla)
 * - Nome do usuário em destaque
 * - Nome do grupo
 * - Número do membro no grupo (badge)
 * - Logo da Metrocasa integrado no design
 * - Elementos visuais modernos (glassmorphism, sombras)
 */

import JimpPkg from 'jimp';
import path from 'path';
import axios from 'axios';
import logger from '../utils/logger.js';

// ── Fix ESM/CJS interop — Jimp exports differ based on module system ──
const Jimp = JimpPkg.default || JimpPkg;

// Resolve font constants (podem estar undefined dependendo da versão/import)
const FONT_32_WHITE = Jimp.FONT_SANS_32_WHITE || JimpPkg.FONT_SANS_32_WHITE || 
  'https://raw.githubusercontent.com/jimp-dev/jimp/main/packages/plugin-print/fonts/open-sans/open-sans-32-white/open-sans-32-white.fnt';
const FONT_16_WHITE = Jimp.FONT_SANS_16_WHITE || JimpPkg.FONT_SANS_16_WHITE ||
  'https://raw.githubusercontent.com/jimp-dev/jimp/main/packages/plugin-print/fonts/open-sans/open-sans-16-white/open-sans-16-white.fnt';
const FONT_14_WHITE = Jimp.FONT_SANS_14_WHITE || JimpPkg.FONT_SANS_14_WHITE || FONT_16_WHITE;

// Alignment constants
const HALIGN_LEFT = Jimp.HORIZONTAL_ALIGN_LEFT || JimpPkg.HORIZONTAL_ALIGN_LEFT || 1;
const HALIGN_CENTER = Jimp.HORIZONTAL_ALIGN_CENTER || JimpPkg.HORIZONTAL_ALIGN_CENTER || 2;
const VALIGN_TOP = Jimp.VERTICAL_ALIGN_TOP || JimpPkg.VERTICAL_ALIGN_TOP || 1;
const VALIGN_MIDDLE = Jimp.VERTICAL_ALIGN_MIDDLE || JimpPkg.VERTICAL_ALIGN_MIDDLE || 2;
const MIME_PNG = Jimp.MIME_PNG || JimpPkg.MIME_PNG || 'image/png';

// Cores da Metrocasa
const RED = 0xED1C24FF;       // Vermelho Metrocasa
const DARK_BG = 0x1A1A1AFF;   // Fundo escuro
const DARK_GRAY = 0x2D2D2DFF; // Cinza card
const WHITE = 0xFFFFFFFF;
const LIGHT_GRAY = 0xAAAAAAFF;
const RED_DARK = 0xB8151AFF;   // Vermelho escuro para gradiente

const CARD_WIDTH = 800;
const CARD_HEIGHT = 450;
const AVATAR_SIZE = 150;
const AVATAR_BORDER = 10;
const LOGO_PATH = path.join(process.cwd(), 'assets', 'welcome', 'background.png');

/**
 * Desenha um retângulo preenchido
 */
function fillRect(image, x, y, w, h, color) {
  for (let xi = x; xi < x + w && xi < image.bitmap.width; xi++) {
    for (let yi = y; yi < y + h && yi < image.bitmap.height; yi++) {
      image.setPixelColor(color, xi, yi);
    }
  }
}

/**
 * Desenha um gradiente vertical
 */
function drawVerticalGradient(image, x, y, w, h, topColor, bottomColor) {
  for (let yi = y; yi < y + h && yi < image.bitmap.height; yi++) {
    const progress = (yi - y) / h;
    const r1 = (topColor >> 24) & 0xFF;
    const g1 = (topColor >> 16) & 0xFF;
    const b1 = (topColor >> 8) & 0xFF;
    const a1 = topColor & 0xFF;
    
    const r2 = (bottomColor >> 24) & 0xFF;
    const g2 = (bottomColor >> 16) & 0xFF;
    const b2 = (bottomColor >> 8) & 0xFF;
    const a2 = bottomColor & 0xFF;
    
    const r = Math.round(r1 + (r2 - r1) * progress);
    const g = Math.round(g1 + (g2 - g1) * progress);
    const b = Math.round(b1 + (b2 - b1) * progress);
    const a = Math.round(a1 + (a2 - a1) * progress);
    
    const color = (r << 24) | (g << 16) | (b << 8) | a;
    
    for (let xi = x; xi < x + w && xi < image.bitmap.width; xi++) {
      image.setPixelColor(color, xi, yi);
    }
  }
}

/**
 * Desenha um círculo preenchido
 */
function fillCircle(image, cx, cy, radius, color) {
  for (let x = cx - radius; x <= cx + radius; x++) {
    for (let y = cy - radius; y <= cy + radius; y++) {
      if (x >= 0 && x < image.bitmap.width && y >= 0 && y < image.bitmap.height) {
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        if (dist <= radius) {
          image.setPixelColor(color, x, y);
        }
      }
    }
  }
}

/**
 * Recorta uma imagem em formato circular
 */
function cropCircular(image) {
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) / 2;

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (dist > radius) {
        image.setPixelColor(0x00000000, x, y);
      }
    }
  }
  return image;
}

/**
 * Baixa a foto de perfil do WhatsApp
 */
async function getProfilePicture(sock, userJid) {
  try {
    const ppUrl = await sock.profilePictureUrl(userJid, 'image');
    if (ppUrl) {
      const response = await axios.get(ppUrl, { responseType: 'arraybuffer', timeout: 10000 });
      return Buffer.from(response.data);
    }
  } catch (e) {
    // Sem foto de perfil, será usado um placeholder
  }
  return null;
}

/**
 * Cria o avatar placeholder (silhueta)
 */
function createPlaceholderAvatar(size) {
  const img = new Jimp(size, size, 0x444444FF);
  // Cabeça
  fillCircle(img, size / 2, size * 0.35, size * 0.18, 0x666666FF);
  // Corpo
  fillCircle(img, size / 2, size * 0.85, size * 0.3, 0x666666FF);
  return img;
}

/**
 * Gera o card de boas-vindas completo
 * 
 * @param {object} sock - Socket do Baileys
 * @param {string} userJid - JID do usuário
 * @param {string} userName - Nome do usuário
 * @param {string} groupName - Nome do grupo
 * @param {number} memberCount - Número de membros
 * @returns {Promise<Buffer>} - Buffer PNG da imagem gerada
 */
async function generateWelcomeCard(sock, userJid, userName, groupName, memberCount) {
  const bgPath = path.join(process.cwd(), 'assets', 'welcome', 'modern_bg.png');
  let card;
  try {
    card = await Jimp.read(bgPath);
    card.cover(CARD_WIDTH, CARD_HEIGHT);
  } catch (e) {
    // Fallback: cria fundo com gradiente vermelho Metrocasa
    card = new Jimp(CARD_WIDTH, CARD_HEIGHT);
    drawVerticalGradient(card, 0, 0, CARD_WIDTH, CARD_HEIGHT, RED_DARK, DARK_BG);
  }

  // ── Overlay escurecido para glassmorphism ──
  const overlay = new Jimp(CARD_WIDTH, CARD_HEIGHT, 0x00000099);
  card.composite(overlay, 0, 0);

  // ── Faixa lateral vermelha com gradiente ──
  drawVerticalGradient(card, 0, 0, 12, CARD_HEIGHT, RED, RED_DARK);

  // ── Faixa decorativa superior ──
  fillRect(card, 12, 0, CARD_WIDTH - 12, 4, RED);

  // ── Avatar circular com borda vermelha tripla (efeito premium) ──
  const avatarCenterX = 160;
  const avatarCenterY = CARD_HEIGHT / 2;
  const avatarRadius = AVATAR_SIZE / 2;

  // Borda externa sutil (sombra)
  fillCircle(card, avatarCenterX, avatarCenterY, avatarRadius + 16, 0x00000066);
  // Borda secundária cinza
  fillCircle(card, avatarCenterX, avatarCenterY, avatarRadius + 12, DARK_GRAY);
  // Borda principal vermelha
  fillCircle(card, avatarCenterX, avatarCenterY, avatarRadius + AVATAR_BORDER, RED);
  // Fundo interno
  fillCircle(card, avatarCenterX, avatarCenterY, avatarRadius, 0x333333FF);

  // Tentar baixar foto de perfil
  let avatarImage;
  const ppBuffer = await getProfilePicture(sock, userJid);
  if (ppBuffer) {
    try {
      avatarImage = await Jimp.read(ppBuffer);
      avatarImage.resize(AVATAR_SIZE, AVATAR_SIZE);
      cropCircular(avatarImage);
    } catch(e) {
      avatarImage = createPlaceholderAvatar(AVATAR_SIZE);
      cropCircular(avatarImage);
    }
  } else {
    avatarImage = createPlaceholderAvatar(AVATAR_SIZE);
    cropCircular(avatarImage);
  }

  // Compor avatar no card
  card.composite(avatarImage, avatarCenterX - avatarRadius, avatarCenterY - avatarRadius);

  // ── Badge no avatar (número do membro) com efeito premium ──
  const badgeX = avatarCenterX + avatarRadius - 12;
  const badgeY = avatarCenterY + avatarRadius - 12;
  fillCircle(card, badgeX, badgeY, 26, 0x000000FF);
  fillCircle(card, badgeX, badgeY, 24, RED);

  // Textos e fontes
  const font32White = await Jimp.loadFont(FONT_32_WHITE);
  const font16White = await Jimp.loadFont(FONT_16_WHITE);
  const font14White = FONT_14_WHITE !== FONT_16_WHITE 
    ? await Jimp.loadFont(FONT_14_WHITE).catch(() => font16White) 
    : font16White;

  // Desenhar número do badge
  card.print(font14White, badgeX - 18, badgeY - 10, {
    text: '#' + memberCount,
    alignmentX: HALIGN_CENTER,
    alignmentY: VALIGN_MIDDLE
  }, 36, 24);

  // ── Área de Texto melhorada ──
  const textStartX = 300;
  const textWidth = CARD_WIDTH - textStartX - 40;

  // Título "BEM-VINDO(A)" com destaque
  card.print(font32White, textStartX, 80, {
    text: 'BEM-VINDO(A)!',
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 50);

  // Detalhe decorativo sob o título (linha vermelha mais longa)
  fillRect(card, textStartX, 130, 80, 5, RED);

  // Nome do usuário com emoji
  const displayName = userName.length > 28 ? userName.substring(0, 25) + '...' : userName;
  card.print(font16White, textStartX, 160, {
    text: `👤 ${displayName}`,
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 35);

  // Nome do grupo
  const displayGroup = groupName.length > 35 ? groupName.substring(0, 32) + '...' : groupName;
  card.print(font16White, textStartX, 200, {
    text: `🏠 ${displayGroup}`,
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 35);

  // Linha separadora sutil
  fillRect(card, textStartX, 245, textWidth - 20, 1, 0x444444FF);

  // Mensagem acolhedora
  card.print(font14White, textStartX, 265, {
    text: 'Ficamos muito felizes em ter você conosco!',
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 30);

  card.print(font14White, textStartX, 295, {
    text: 'Digite /menu para descobrir tudo que posso fazer.',
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 30);

  // ── Logo da Metrocasa (integrado no design) ──
  const logoPath = path.join(process.cwd(), 'assets', 'welcome', 'logo.png');
  try {
    const logoImage = await Jimp.read(logoPath);
    // Redimensionar logo mantendo proporção
    logoImage.resize(200, Jimp.AUTO);
    
    // Posicionar no canto inferior direito com margem
    const logoX = CARD_WIDTH - logoImage.bitmap.width - 30;
    const logoY = CARD_HEIGHT - logoImage.bitmap.height - 25;
    
    // Adicionar sombra sutil atrás do logo
    const shadow = new Jimp(logoImage.bitmap.width + 4, logoImage.bitmap.height + 4, 0x00000044);
    card.composite(shadow, logoX - 2, logoY - 2);
    card.composite(logoImage, logoX, logoY);
  } catch (e) {
    // Se a logo não existir, adiciona texto estilizado da marca
    card.print(font16White, textStartX, CARD_HEIGHT - 50, {
      text: 'METROCASA CONSTRUTORA',
      alignmentX: HALIGN_LEFT,
      alignmentY: VALIGN_TOP
    }, textWidth, 30);
    
    // Detalhe vermelho abaixo do texto
    fillRect(card, textStartX, CARD_HEIGHT - 22, 180, 3, RED);
  }

  // ── Faixa decorativa inferior ──
  fillRect(card, 0, CARD_HEIGHT - 4, CARD_WIDTH, 4, RED);

  // ── Exportar como Buffer PNG ──
  const buffer = await card.getBufferAsync(MIME_PNG);
  return buffer;
}

export default {
  generateWelcomeCard,
  getProfilePicture
};
