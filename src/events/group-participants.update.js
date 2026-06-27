// By: ONNX IA
// Powered by Orbital Code

import fs from 'fs';
import path from 'path';
import configManager from '../config/index.js';
import messageQueue from '../core/MessageQueue.js';
import logger from '../utils/logger.js';
import { isLid } from '../utils/lidUtils.js';

// Importação dinâmica do WelcomeService para não crashar se Jimp falhar
let welcomeService = null;
try {
  const mod = await import('../services/WelcomeService.js');
  welcomeService = mod.default;
} catch (e) {
  logger.warn('WelcomeService não pôde ser carregado (Jimp pode estar com problema):', e.message);
}

// ─── Persistência de settings de boas-vindas por grupo ───

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'welcome_settings.json');
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

let welcomeSettings = {};

function loadSettings() {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      welcomeSettings = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'));
    }
  } catch(e) { welcomeSettings = {}; }
}

function saveSettings() {
  try {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(welcomeSettings, null, 2));
  } catch(e) {}
}

loadSettings();

// ─── API pública (usada pelo comando /welcome) ──────────

export function getWelcomeSettings(groupJid) {
  if (!welcomeSettings[groupJid]) {
    welcomeSettings[groupJid] = {
      enabled: true,
      imageEnabled: true,
      customMessage: null  // null = usa default
    };
  }
  return welcomeSettings[groupJid];
}

export function setWelcomeEnabled(groupJid, enabled) {
  getWelcomeSettings(groupJid);
  welcomeSettings[groupJid].enabled = enabled;
  saveSettings();
}

export function setWelcomeImage(groupJid, enabled) {
  getWelcomeSettings(groupJid);
  welcomeSettings[groupJid].imageEnabled = enabled;
  saveSettings();
}

export function setWelcomeMessage(groupJid, message) {
  getWelcomeSettings(groupJid);
  welcomeSettings[groupJid].customMessage = message;
  saveSettings();
}

// ─── Handler principal ──────────────────────────────────

/**
 * Gerencia a entrada e saída de participantes nos grupos.
 */
export default async function handleGroupParticipants(sock, update) {
  try {
    const { id, participants, action } = update;
    
    if (action !== 'add') return;

    // Verifica se a conexão está ativa
    if (!sock?.user?.id) {
      logger.warn('Welcome: Conexão não está ativa, ignorando evento.');
      return;
    }

    const config = configManager.get();
    
    // Verifica se o grupo está na lista de permitidos
    if (config.behavior?.allowedGroups && config.behavior.allowedGroups.length > 0) {
      if (!config.behavior.allowedGroups.includes(id)) return;
    }

    // Verifica se boas-vindas está ativado para esse grupo
    const ws = getWelcomeSettings(id);
    if (!ws.enabled) return;

    const botName = config.botName || "ONNX IA";
    
    // Metadata do grupo (com proteção contra Connection Closed)
    let groupName = "Grupo";
    let memberCount = 0;
    try {
      const meta = await sock.groupMetadata(id);
      groupName = meta.subject || "Grupo";
      memberCount = meta.participants?.length || 0;
    } catch(e) {
      // Se não consegue pegar metadata, tenta enviar com dados mínimos
      logger.warn(`Welcome: Não foi possível obter metadata do grupo ${id}: ${e.message}`);
    }

    // Saudação baseada no horário
    const hour = new Date().getHours();
    const greeting = hour >= 5 && hour < 12 ? "🌅 Bom dia" : hour < 18 ? "☀️ Boa tarde" : "🌙 Boa noite";

    for (const rawUserJid of participants) {
      try {
        // Garantir que userJid seja string, pois algumas versões do Baileys ou middlewares podem alterar o formato
        const userJid = typeof rawUserJid === 'string' ? rawUserJid : (rawUserJid?.id || rawUserJid?.jid);
        
        if (!userJid || typeof userJid !== 'string') {
          logger.warn(`Welcome: Identificador de usuário não pôde ser resolvido:`, rawUserJid);
          continue;
        }

        const userNumber = userJid.split('@')[0];
        const isLidUser = isLid(userJid);
        
        // Pegar nome do contato
        let userName = userNumber;
        try {
          const contact = await sock.onWhatsApp(userJid);
          userName = contact?.[0]?.name || userNumber;
        } catch(e) {}

        // Mensagem personalizada ou padrão
        const welcomeMsg = ws.customMessage || 
          `${greeting}! Seja muito bem-vindo(a) ao *${groupName}*! 🎉\n\n` +
          `Você é nosso membro *#${memberCount}*!\n` +
          `Digite */menu* para ver tudo que posso fazer.\n\n` +
          `_${botName}_`;

        // ── Gerar imagem de boas-vindas com Jimp ──
        if (ws.imageEnabled && welcomeService) {
          try {
            const welcomeImage = await welcomeService.generateWelcomeCard(
              sock,
              userJid,
              userName,
              groupName,
              memberCount
            );

            await messageQueue.enqueue(sock, id, {
              image: welcomeImage,
              caption: `🎉 *BEM-VINDO(A)!*\n\nOlá @${userNumber}!\n\n${welcomeMsg}`,
              mentions: [userJid]
            });

            if (isLidUser) {
              logger.debug(`[LID-Welcome] Card enviado para LID: ${userJid}`);
            }
            
            continue; // Pula o fallback de texto
          } catch(imgError) {
            logger.warn(`Falha ao gerar imagem de boas-vindas, usando texto:`, imgError.message);
          }
        }

        // ── Fallback: Apenas texto ──
        await messageQueue.enqueue(sock, id, {
          text: `🎉 *BEM-VINDO(A)!*\n\nOlá @${userNumber}!\n\n${welcomeMsg}`,
          mentions: [userJid]
        });

      } catch (e) {
        // Proteção contra Connection Closed por participante
        if (e?.output?.statusCode === 428 || e?.message?.includes('Connection Closed')) {
          logger.warn(`Welcome: Conexão fechada ao enviar boas-vindas para ${userJid}.`);
        } else {
          logger.error(`Falha ao enviar boas-vindas para ${userJid}:`, e.message);
        }
      }
    }
  } catch (outerError) {
    // Proteção geral — nunca deixa o handler crashar o bot inteiro
    logger.error('Welcome: Erro crítico no handler de boas-vindas:', outerError.message);
  }
}
