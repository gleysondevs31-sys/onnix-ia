/**
 * WelcomeService.js — Gerador de Cards de Boas-Vindas com Jimp
 * 
 * Cria imagens profissionais no padrão visual da Metrocasa Construtora.
 * Cores da marca: Vermelho #ED1C24, Cinza escuro #2D2D2D, Preto #1A1A1A
 * 
 * O card inclui:
 * - Background escuro profissional com elementos da marca
 * - Foto de perfil do usuário (circular com borda vermelha)
 * - Nome do usuário
 * - Nome do grupo
 * - Número do membro no grupo
 * - Logo da Metrocasa
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
const CARD_HEIGHT = 400;
const AVATAR_SIZE = 140;
const AVATAR_BORDER = 8;
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
    card.cover(CARD_WIDTH, CARD_HEIGHT); // Ajusta a imagem mantendo a proporção
  } catch (e) {
    // Fallback: se não achar a imagem, cria um fundo escuro
    card = new Jimp(CARD_WIDTH, CARD_HEIGHT, DARK_BG);
  }

  // ── Overlay escurecido sutil para garantir leitura do texto ──
  const overlay = new Jimp(CARD_WIDTH, CARD_HEIGHT, 0x000000BB); // Opacidade preta para Glassmorphism
  card.composite(overlay, 0, 0);

  // ── Margens laterais (detalhe visual moderno) ──
  fillRect(card, 0, 0, 8, CARD_HEIGHT, RED);

  // ── Avatar circular com borda vermelha dupla ──
  const avatarCenterX = 150;
  const avatarCenterY = CARD_HEIGHT / 2;
  const avatarRadius = AVATAR_SIZE / 2;

  // Borda decorativa externa escurecida
  fillCircle(card, avatarCenterX, avatarCenterY, avatarRadius + 12, 0x1A1A1AAA);
  // Borda vermelha do avatar
  fillCircle(card, avatarCenterX, avatarCenterY, avatarRadius + AVATAR_BORDER, RED);
  // Fundo interno
  fillCircle(card, avatarCenterX, avatarCenterY, avatarRadius, DARK_GRAY);

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

  // ── Badge no avatar (número do membro) ──
  const badgeX = avatarCenterX + avatarRadius - 15;
  const badgeY = avatarCenterY + avatarRadius - 15;
  fillCircle(card, badgeX, badgeY, 22, 0x000000FF);
  fillCircle(card, badgeX, badgeY, 20, RED);

  // Textos e fontes
  const font32White = await Jimp.loadFont(FONT_32_WHITE);
  const font16White = await Jimp.loadFont(FONT_16_WHITE);
  const font14White = FONT_14_WHITE !== FONT_16_WHITE 
    ? await Jimp.loadFont(FONT_14_WHITE).catch(() => font16White) 
    : font16White;

  // Desenhar número do badge
  card.print(font14White, badgeX - 15, badgeY - 8, {
    text: '#' + memberCount,
    alignmentX: HALIGN_CENTER,
    alignmentY: VALIGN_MIDDLE
  }, 30, 20);

  // ── Área de Texto ──
  const textStartX = 280;
  const textWidth = CARD_WIDTH - textStartX - 40;

  // Título "BEM-VINDO(A)" com muito mais destaque
  card.print(font32White, textStartX, 70, {
    text: 'BEM-VINDO(A)!',
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 50);

  // Detalhe sob o título
  fillRect(card, textStartX, 115, 60, 4, RED);

  // Nome do usuário
  const displayName = userName.length > 25 ? userName.substring(0, 22) + '...' : userName;
  card.print(font16White, textStartX, 150, {
    text: `👤 ${displayName}`,
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 30);

  // Nome do grupo
  const displayGroup = groupName.length > 30 ? groupName.substring(0, 27) + '...' : groupName;
  card.print(font16White, textStartX, 185, {
    text: `🏠 ${displayGroup}`,
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 30);

  // Mensagem acolhedora
  card.print(font14White, textStartX, 240, {
    text: 'Ficamos muito felizes em ter você aqui.',
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 30);

  card.print(font14White, textStartX, 260, {
    text: 'Digite /menu para explorar os serviços.',
    alignmentX: HALIGN_LEFT,
    alignmentY: VALIGN_TOP
  }, textWidth, 30);

  // ── Tentar Adicionar a Logo da Empresa ──
  const logoPath = path.join(process.cwd(), 'assets', 'welcome', 'logo.png');
  try {
    const logoImage = await Jimp.read(logoPath);
    // Configurar pra ignorar o fundo transparente, mantendo assimétricas puras da logo.
    logoImage.contain(180, 80, Jimp.HORIZONTAL_ALIGN_RIGHT | Jimp.VERTICAL_ALIGN_BOTTOM);
    
    // Posicionar no canto inferior direito
    const logoX = CARD_WIDTH - 200;
    const logoY = CARD_HEIGHT - 100;
    card.composite(logoImage, logoX, logoY);
  } catch (e) {
    // Se a logo não existir (ainda), coloca um texto discreto da marca
    card.print(font14White, textStartX, CARD_HEIGHT - 60, {
      text: 'METROCASA CONSTRUTORA',
      alignmentX: HALIGN_LEFT,
      alignmentY: VALIGN_TOP
    }, textWidth, 25);
  }

  // ── Exportar como Buffer PNG ──
  const buffer = await card.getBufferAsync(MIME_PNG);
  return buffer;
}

export default {
  generateWelcomeCard,
  getProfilePicture
};
