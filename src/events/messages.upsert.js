// By: ONNX IA
// Powered by Orbital Code

import logger from '../utils/logger.js'
import commandRegistry from '../commands/CommandRegistry.js'
import groupRepository from '../repositories/GroupRepository.js'
import { isGroupAllowed } from '../middleware/GroupGuard.js'
import { checkRateLimit, getCommandCooldownMsg } from '../middleware/RateLimitGuard.js'
import responseOrchestrator from '../ai/ResponseOrchestrator.js'
import messageQueue from '../core/MessageQueue.js'
import configManager from '../config/index.js'
import {
  resolveSenderJid,
  isParticipantAdmin,
  isInConfigList,
  extractUser
} from '../utils/lidUtils.js'
import { registerWhatsAppUser } from '../database/users.js'
import { addXP } from '../database/profiles.js'
import { checkMessage } from '../middleware/AntiProtection.js'

// ── Cache de metadados de grupo (evita chamadas repetidas ao WA) ──────────────
const groupMetaStore = new Map(); // jid → { data, ts }
const META_TTL = 3 * 60_000;     // cache válido por 3 minutos

async function getGroupMeta(sock, jid) {
  const cached = groupMetaStore.get(jid);
  if (cached && (Date.now() - cached.ts) < META_TTL) {
    return cached.data;
  }
  try {
    const meta = await Promise.race([
      sock.groupMetadata(jid),
      new Promise((_, r) => setTimeout(() => r(new Error('meta_timeout')), 8000))
    ]);
    groupMetaStore.set(jid, { data: meta, ts: Date.now() });
    return meta;
  } catch (e) {
    // Retorna cache expirado se existir, melhor que null
    return cached?.data || null;
  }
}

export default async function handleMessages(sock, payload) {
  for (const msg of payload.messages) {
    try {
      // Wrap completo em try/catch — NENHUM erro pode matar o loop
      await _processMessage(sock, msg);
    } catch (fatalError) {
      logger.error(`[FATAL] Erro não capturado no processamento:`, fatalError.message);
    }
  }
}

async function _processMessage(sock, msg) {
  if (!msg.message || msg.key.fromMe) return;

  const jid = msg.key.remoteJid;
  const isGroup = jid.endsWith('@g.us');

  // Normalização de Sender (LID -> JID)
  const senderRaw = isGroup ? (msg.key.participant || '') : jid;
  const sender = resolveSenderJid(msg);
  const pushName = msg.pushName || 'Usuário';

  // Registro assíncrono no banco local (fire-and-forget)
  registerWhatsAppUser(sock, msg).catch(() => {});

  // Desempacotamento de mensagens (temporárias, viewOnce, etc)
  const actualMessage = msg.message?.ephemeralMessage?.message ||
                        msg.message?.viewOnceMessage?.message ||
                        msg.message?.viewOnceMessageV2?.message ||
                        msg.message?.documentWithCaptionMessage?.message ||
                        msg.message;

  // Extração de texto seguro
  let text = actualMessage?.conversation ||
             actualMessage?.extendedTextMessage?.text ||
             actualMessage?.imageMessage?.caption ||
             actualMessage?.videoMessage?.caption || "";

  text = text.trim();
  if (!text) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('pt-BR');
  const isCommand = text.startsWith('/');

  // ── groupMetadata com cache + timeout ──────────────────────────────────────
  let groupName = 'Privado';
  let groupMetaCache = null;
  if (isGroup) {
    groupMetaCache = await getGroupMeta(sock, jid);
    groupName = groupMetaCache?.subject || 'Grupo';
  }

  // Log da mensagem (compacto)
  const senderShort = sender.split('@')[0];
  const cmdIcon = isCommand ? '⚡' : '💬';
  const locIcon = isGroup ? '🏘️' : '📱';
  console.log(`${cmdIcon} ${pushName} (${senderShort}) ${locIcon} ${groupName} | ${text.slice(0, 80)}`);

  // Verificação de Donos e Admins
  const config = configManager.get();
  const isOwner = isInConfigList(sender, config.owners || []) || isInConfigList(senderRaw, config.owners || []);
  const isAdminBot = isOwner || isInConfigList(sender, config.admins || []) || isInConfigList(senderRaw, config.admins || []);

  // Se não for dono/admin, verifica permissões
  if (!isOwner && !isAdminBot) {
    if (!isGroupAllowed(jid)) return;
    if (!checkRateLimit(jid, sender)) return;
  }

  // ── Anti-Proteções ─────────────────────────────────────────────────────────
  if (isGroup && !isOwner && !isAdminBot) {
    let senderIsGroupAdmin = false;
    if (groupMetaCache) {
      senderIsGroupAdmin = groupMetaCache.participants.some(p =>
        (p.id === sender || p.id === senderRaw) && (p.admin === 'admin' || p.admin === 'superadmin')
      );
    }

    const violation = checkMessage(jid, sender, text, senderIsGroupAdmin);
    if (violation) {
      try { await sock.sendMessage(jid, { delete: msg.key }); } catch {}
      await messageQueue.enqueue(sock, jid, {
        text: violation.message,
        mentions: [sender]
      });
      if (violation.shouldKick) {
        try {
          await sock.groupParticipantsUpdate(jid, [sender], 'remove');
        } catch {}
      }
      return;
    }
  }

  // Sistema de XP — fire-and-forget, nunca bloqueia
  try {
    const xpGain = Math.floor(Math.random() * 5) + 1;
    const rpgRes = addXP(sender, xpGain);
    if (rpgRes.levelUp) {
      messageQueue.enqueue(sock, jid, {
        text: `🎊 *Level Up!* @${sender.split('@')[0]} → *Nível ${rpgRes.newLevel}!* (+${rpgRes.newLevel * 10} 🪙)`,
        mentions: [sender]
      });
    }
  } catch {}

  groupRepository.incrementCounter('messages');

  // ═══════════════════════════════════════════════════
  // Interceptador de Jogos (mensagens SEM prefixo '/')
  // ═══════════════════════════════════════════════════
  if (!isCommand) {
    let intercepted = false;
    const lp = text.toLowerCase().trim();

    // ── 0a. Truco (?t ou ?truco) ── ALTA PRIORIDADE
    if (!intercepted && /^\?t(ruco)?\s*/i.test(text)) {
      const cmd = commandRegistry.getCommand('truco');
      if (cmd?.sessions?.has(jid) && typeof cmd.handleInteraction === 'function') {
        const payload2 = text.replace(/^\?t(ruco)?\s*/i, '').trim().toLowerCase();
        intercepted = await cmd.handleInteraction(sock, msg, jid, sender, pushName, payload2);
      }
    }

    // ── 0b. Xadrez (?x ou ?xadrez) ── ALTA PRIORIDADE
    if (!intercepted && /^\?x(adrez)?\s*/i.test(text)) {
      const cmd = commandRegistry.getCommand('xadrez');
      if (cmd?.sessions?.has(jid) && typeof cmd.handleInteraction === 'function') {
        const payload2 = text.replace(/^\?x(adrez)?\s*/i, '').trim().toLowerCase();
        intercepted = await cmd.handleInteraction(sock, msg, jid, sender, pushName, payload2);
      }
    }

    // ── 1. Jogo da Velha (aceitar | recusar | 1-9) ──
    if (!intercepted && (/^[1-9]$/.test(lp) || lp === 'aceitar' || lp === 'recusar')) {
      const cmd = commandRegistry.getCommand('velha');
      if (cmd?.sessions?.has(jid)) {
        const context = { sock, msg, text: lp, args: [lp], jid, sender, senderRaw, isGroup, pushName, isOwner, isAdmin: isAdminBot };
        await cmd.execute(context);
        intercepted = true;
      }
    }

    // ── 2. Campo Minado (coordenada A1-E5) ──
    if (!intercepted && /^[a-eA-E][1-5]$/.test(lp)) {
      const cmd = commandRegistry.getCommand('minado');
      if (cmd?.sessions?.has(jid) && typeof cmd.handleInteraction === 'function') {
        intercepted = await cmd.handleInteraction(sock, msg, jid, sender, pushName, lp);
      }
    }

    // ── 3. Forca (letra única A-Z) ──
    if (!intercepted && /^[a-zA-ZÀ-ú]$/.test(lp)) {
      const cmd = commandRegistry.getCommand('forca');
      if (cmd?.sessions?.has(jid)) {
        const context = { sock, msg, text, args: [lp], jid, sender, senderRaw, isGroup, pushName, isOwner, isAdmin: isAdminBot, isIntercepted: true };
        await cmd.execute(context);
        intercepted = true;
      }
    }

    // ── 4. Anagrama (qualquer palavra) ──
    if (!intercepted) {
      const cmd = commandRegistry.getCommand('anagrama');
      if (cmd?.sessions?.has(jid)) {
        const context = { sock, msg, text, args: text.trim().split(/\s+/), jid, sender, senderRaw, isGroup, pushName, isOwner, isAdmin: isAdminBot, isIntercepted: true };
        await cmd.execute(context);
        intercepted = true;
      }
    }

    // ── 5. Enigma (qualquer texto — deve ser o último) ──
    if (!intercepted) {
      const cmd = commandRegistry.getCommand('enigma');
      if (cmd?.sessions?.has(jid) && typeof cmd.handleInteraction === 'function') {
        intercepted = await cmd.handleInteraction(sock, msg, jid, sender, pushName, lp);
      }
    }

    if (intercepted) return;
  }

  // Processamento de Comandos
  if (isCommand) {
    const commandBody = text.slice(1).split(' ');
    const commandName = commandBody.shift().toLowerCase();
    const cmdModule = commandRegistry.getCommand(commandName);

    if (cmdModule) {
      // Cooldown de 20 segundos por padrão se o comando não definir
      const cdResult = getCommandCooldownMsg(sender, cmdModule.name, cmdModule.cooldown || 20000);
      if (cdResult > 0) {
        await messageQueue.enqueue(sock, jid, { 
          text: `⏳ *@${sender.split('@')[0]}*, aguarde ${cdResult} segundo(s) para usar o /${cmdModule.name} novamente!`,
          mentions: [sender]
        });
        return;
      } else if (cdResult === -1) {
        return;
      }

      groupRepository.incrementCounter('commands');

      let groupMetadata = null;
      let isGroupAdmin = false;
      let isBotAdmin = false;

      if (isGroup && groupMetaCache) {
        groupMetadata = groupMetaCache;
        const participants = groupMetadata.participants;
        const botJid = extractUser(sock.user.id) + '@s.whatsapp.net';
        isGroupAdmin = isParticipantAdmin(participants, sender) || isParticipantAdmin(participants, senderRaw);
        isBotAdmin   = isParticipantAdmin(participants, botJid);
      }

      const mentionedJid = actualMessage?.extendedTextMessage?.contextInfo?.mentionedJid || [];

      const context = {
        sock, msg, text, args: commandBody, jid, sender, senderRaw, isGroup,
        pushName, groupMetadata, isGroupAdmin, isBotAdmin, mentionedJid,
        isOwner, isAdmin: isAdminBot
      };

      try {
        await cmdModule.execute(context);
      } catch (error) {
        logger.error(`Erro no /${commandName}:`, error.message);
      }
    }
  }
  else {
    // Interação Natural (IA) — com timeout de segurança
    const isMentioned = actualMessage?.extendedTextMessage?.contextInfo?.participant;
    const myJid = extractUser(sock.user?.id) + '@s.whatsapp.net';
    const isPvAiEnabled = config.behavior?.pvAiEnabled ?? true; // PV habilitado por padrão

    if ((!isGroup && isPvAiEnabled) || (isGroup && isMentioned === myJid)) {
      try {
        // Timeout de 45s para a IA — se travar, não mata o bot
        const aiResponse = await Promise.race([
          responseOrchestrator.processResponse(text, pushName, groupName),
          new Promise((_, r) => setTimeout(() => r(new Error('ai_timeout')), 45_000))
        ]);
        await messageQueue.enqueue(sock, jid, { text: aiResponse }, { quoted: msg });
      } catch (e) {
        if (e.message === 'ai_timeout') {
          logger.warn(`[IA] Timeout de 45s para ${sender}`);
          await messageQueue.enqueue(sock, jid, {
            text: '😅 Desculpa, demorei demais pensando! Pode repetir?'
          }, { quoted: msg });
        }
      }
    }
  }
}
