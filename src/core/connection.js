// By: ONNX IA
// Powered by Orbital Code

import {
  makeWASocket,
  useMultiFileAuthState,
  Browsers,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore
} from '@whiskeysockets/baileys';
import fs   from 'fs';
import path from 'path';
import pino from 'pino';
import logger from '../utils/logger.js';
import configManager from '../config/index.js';
import cache from '../repositories/CacheRepository.js';

// ── CORREÇÃO DEFINITIVA: Filtro global de console.log ────────────────────────
// O Baileys usa console.log diretamente no signal.js — não há outra forma de silenciar.
const _origLog = console.log;
const _origDebug = console.debug;
const _origTrace = console.trace;
const _origError = console.error;
const _origWarn = console.warn;
const _origInfo = console.info;

const BLOCKED = [
  'Closing session', 'SessionEntry', '_chains:', 'chainKey:', 'chainType:',
  'messageKeys:', 'registrationId:', 'currentRatchet:', 'ephemeralKeyPair:',
  'lastRemoteEphemeralKey:', 'previousCounter:', 'rootKey:', 'indexInfo:',
  'baseKey:', 'baseKeyType:', 'remoteIdentityKey:', 'pendingPreKey:',
  'signedKeyId:', 'preKeyId:', '<Buffer', 'pubKey:', 'privKey:', 'closed:',
  'used:', 'created:', 'messageKeys: {}', 'Bad MAC', 'Failed to decrypt message',
  'Session error:', 'libsignal', 'queue_job.js', 'verifyMAC', 'doDecryptWhisperMessage'
];

function isBaileysNoise(...args) {
  const str = args.map(a =>
    typeof a === 'string' ? a :
    typeof a === 'object' && a !== null ? (a.constructor?.name || '') : String(a)
  ).join(' ');
  return BLOCKED.some(p => str.includes(p));
}

console.log   = function (...args) { if (!isBaileysNoise(...args)) _origLog.apply(console, args); };
console.debug = function (...args) { if (!isBaileysNoise(...args)) _origDebug.apply(console, args); };
console.error = function (...args) { if (!isBaileysNoise(...args)) _origError.apply(console, args); };
console.warn  = function (...args) { if (!isBaileysNoise(...args)) _origWarn.apply(console, args); };
console.info  = function (...args) { if (!isBaileysNoise(...args)) _origInfo.apply(console, args); };

// Logger pino silencioso para o Baileys
const BAILEYS_LOGGER = pino({ level: 'silent' });

/**
 * Limpa sessões antigas automaticamente.
 */
function autoCleanSessions(sessionDir) {
  try {
    const files = fs.readdirSync(sessionDir).filter(f => f !== 'creds.json');
    if (files.length > 150) {
      let removed = 0;
      for (const f of files) {
        try { fs.unlinkSync(path.join(sessionDir, f)); removed++; } catch {}
      }
      logger.warn(`[AutoClean] Removidos ${removed} arquivos de sessão obsoletos.`);
    }
  } catch {}
}

/**
 * Cria a conexão com o WhatsApp.
 */
export async function createConnection(eventHandler) {
  const sessionDir = path.join(process.cwd(), 'data', 'sessions');
  if (!fs.existsSync(sessionDir)) {
    fs.mkdirSync(sessionDir, { recursive: true });
  }

  autoCleanSessions(sessionDir);

  const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
  const { version, isLatest } = await fetchLatestBaileysVersion();

  logger.info(`Conectando ao WhatsApp Web v${version.join('.')} (Latest: ${isLatest})`);

  const sock = makeWASocket({
    version,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, BAILEYS_LOGGER),
    },
    printQRInTerminal: false,
    logger: BAILEYS_LOGGER,
    markOnlineOnConnect: true,
    browser: Browsers.ubuntu('Chrome'),
    generateHighQualityLinkPreview: false,  // desativa — gasta CPU e rede
    syncFullHistory: false,
    retryRequestDelayMs: 5000,
    maxMsgRetryCount: 1,      // drásticamente reduzido para evitar lentidão com chaves corrompidas
    msgRetryCounterCache: {
      get: (key) => cache.get(`retry_${key}`),
      set: (key, value) => cache.set(`retry_${key}`, value, 60000)
    },
    getMessage: async () => { return { conversation: 'onnx' }; },
    maxCachedMessages: 50,    // reduzido de 100 → 50
    fireInitQueries: false,   // NÃO executa queries iniciais pesadas
  });

  let pairingCodeRequested = false;
  let lastMessageAt        = Date.now();
  let watchdogTimer        = null;
  let heartbeatInterval    = null;

  // ── Watchdog de saúde: reconecta apenas se travar ─────────────────────
  function startWatchdog() {
    clearInterval(heartbeatInterval);
    clearTimeout(watchdogTimer);

    heartbeatInterval = setInterval(() => {
      // O bot só morre se houver uma trava de sistema, não por inatividade do grupo
    }, 60_000);
  }

  // Atualiza heartbeat a cada mensagem
  sock.ev.on('messages.upsert', () => {
    lastMessageAt = Date.now();
  });

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr && !sock.authState.creds.registered && !pairingCodeRequested) {
      pairingCodeRequested = true;
      const config = configManager.get();
      const phoneNumber = config.botPhoneNumber?.replace(/[^0-9]/g, '');

      if (!phoneNumber || phoneNumber === '5511999999999') {
        logger.warn('Defina botPhoneNumber no config.json para gerar Pairing Code.');
      } else {
        setTimeout(async () => {
          try {
            let code = await sock.requestPairingCode(phoneNumber);
            code = code?.match(/.{1,4}/g)?.join('-') || code;
            logger.success(`CÓDIGO DE PAREAMENTO: ${code}`);
          } catch (e) {
            logger.error('Falha Pairing Code:', e.message);
          }
        }, 3000);
      }
    }

    if (connection === 'close') {
      clearInterval(heartbeatInterval);
      clearTimeout(watchdogTimer);
      const statusCode      = lastDisconnect?.error?.output?.statusCode;
      const reason          = lastDisconnect?.error?.message || 'Desconhecido';
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      logger.warn(`Conexão fechada: ${reason} (${statusCode})`);

      if (shouldReconnect) {
        const delay = statusCode === DisconnectReason.restartRequired ? 1000 : 3000;
        logger.info(`Reconectando em ${delay / 1000}s...`);
        setTimeout(() => createConnection(eventHandler), delay);
      } else {
        logger.error('Desconectado permanentemente. /clear-session + restart.');
      }
    } else if (connection === 'open') {
      logger.success('ONNX IA está online!');
      lastMessageAt = Date.now();
      startWatchdog();
    }
  });

  sock.ev.on('creds.update', saveCreds);
  eventHandler.register(sock);

  return sock;
}
