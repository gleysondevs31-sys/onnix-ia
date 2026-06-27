/**
 * scheduler.js — Sistema de Agendamentos Dinâmicos e Controláveis
 * 
 * Cada task pode ser ligada/desligada e ter horário editado via comando /schedule.
 * Configurações persistidas em data/scheduler_settings.json.
 */

import cron from 'node-cron';
import fs from 'fs';
import path from 'path';
import logger from '../utils/logger.js';
import configManager from '../config/index.js';
import messageQueue from '../core/MessageQueue.js';
import nvidiaService from '../ai/NvidiaService.js';

// ─── Persistência ────────────────────────────────────────

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'scheduler_settings.json');
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const DEFAULT_SETTINGS = {
  bomdia: { enabled: true, cron: '0 8 * * *', label: '08:00' },
  frase: { enabled: true, cron: '0 18 * * *', label: '18:00' },
  desafio: { enabled: true, cron: '*/90 * * * *', label: 'A cada 1h30m' }
};

let settings = {};

function loadSettings() {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      settings = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'));
    }
  } catch (e) {
    settings = {};
  }
  // Merge com defaults (novas tasks pegam o default)
  for (const [key, def] of Object.entries(DEFAULT_SETTINGS)) {
    if (!settings[key]) settings[key] = { ...def };
  }
  saveSettings();
}

function saveSettings() {
  try {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
  } catch (e) {
    logger.error('Erro ao salvar scheduler_settings.json', e);
  }
}

loadSettings();

// ─── API Pública (usada pelo comando /schedule) ──────────

export function getSchedulerSettings() {
  return { ...settings };
}

export function setTaskEnabled(taskName, enabled) {
  if (!settings[taskName]) return false;
  settings[taskName].enabled = enabled;
  saveSettings();
  return true;
}

export function setTaskSchedule(taskName, cronExpr, label) {
  if (!settings[taskName]) return false;
  if (!cron.validate(cronExpr)) return false;
  settings[taskName].cron = cronExpr;
  settings[taskName].label = label || cronExpr;
  saveSettings();
  return true;
}

// ─── Conteúdo dos Jobs ────────────────────────────────────

let challengeRotation = 0;

const STATIC_CHALLENGES = [
  "Envie uma foto do seu café/lanche de agora! ☕",
  "Grave um áudio de 5 segundos dizendo Bom dia com seu sotaque mais exagerado! 🎙️",
  "Mande a figurinha mais engraçada que você tem salva! 🤪",
  "Escreva o nome da última música que você ouviu! 🎵",
  "Conte uma curiosidade sobre você que ninguém do grupo sabe! 🤔",
  "Mande uma foto da vista da sua janela agora! 📸",
  "Faça um elogio sincero para o membro que mandou a última msg antes desta! 💬",
  "Descreva seu humor atual usando apenas emojis (mínimo 3)! 😊",
  "Mande um áudio cantarolando a música que está na sua cabeça! 🎶",
  "Compartilhe o melhor conselho que já recebeu na vida! 💡",
  "Escolha 2 membros do grupo e marque-os com um elogio! 👏",
  "Mande uma foto do lugar mais bonito que você já visitou! 🌅"
];

const POLL_QUESTIONS = [
  { title: "Qual seu horário favorito do dia?", options: ["Manhã 🌅", "Tarde ☀️", "Noite 🌙", "Madrugada 🦉"] },
  { title: "O que te motiva mais?", options: ["Família 👨‍👩‍👧‍👦", "Dinheiro 💰", "Conhecimento 📚", "Experiências 🌍"] },
  { title: "Qual rede social você mais usa?", options: ["WhatsApp 💬", "Instagram 📸", "TikTok 🎵", "YouTube ▶️"] },
  { title: "Café ou suco pela manhã?", options: ["Café ☕", "Suco 🧃", "Água 💧", "Não tomo nada 😴"] },
  { title: "Se pudesse ter um superpoder?", options: ["Voar 🦅", "Invisibilidade 👻", "Teletransporte ✨", "Ler mentes 🧠"] },
  { title: "Como você lida com estresse?", options: ["Música 🎵", "Exercício 🏃", "Dormir 😴", "Conversar 💬"] }
];

async function executeBomDia(sock) {
  if (!settings.bomdia.enabled) return;
  if (!sock?.user?.id) return;
  logger.info('Executando cron: Bom Dia');
  const config = configManager.get();
  const { allowedGroups } = config.behavior;
  if (!allowedGroups || allowedGroups.length === 0) return;

  const greeting = config.messages?.greetingMorning || "Bom dia pessoal! Que o dia de vocês seja abençoado e muito produtivo! 🌅";
  
  let motivacional = "";
  try {
    motivacional = await nvidiaService.invokeCompletion("Traga uma curta citação de motivação matinal para animar uma equipe ou comunidade (máx 15 palavras).");
  } catch(e) {}

  for (const groupId of allowedGroups) {
    try {
      await sock.groupMetadata(groupId);
      const text = motivacional 
        ? `${greeting}\n\n*Inspiração de Hoje:* ${motivacional}` 
        : greeting;
      await messageQueue.enqueue(sock, groupId, { text });
    } catch (e) {
      logger.warn(`Scheduler BomDia: Erro no grupo ${groupId} (${e.message}). Pulando...`);
    }
  }
}

async function executeFrase(sock) {
  if (!settings.frase.enabled) return;
  if (!sock?.user?.id) return;
  logger.info('Executando cron: Frase do Dia');
  const { allowedGroups } = configManager.get().behavior;
  if (!allowedGroups || allowedGroups.length === 0) return;

  let frase = "✨ Se supere todos os dias!";
  try {
    frase = await nvidiaService.invokeCompletion("Crie uma frase filosófica curta. Apenas a frase e 1 emoji.");
  } catch(e) {}

  for (const groupId of allowedGroups) {
    try {
      await sock.groupMetadata(groupId);
      await messageQueue.enqueue(sock, groupId, { text: `🌙 *Reflexão da Noite*\n\n${frase}` });
    } catch (e) {
      logger.warn(`Scheduler Frase: Erro no grupo ${groupId} (${e.message}). Pulando...`);
    }
  }
}

async function executeDesafio(sock) {
  if (!settings.desafio.enabled) return;
  const { allowedGroups } = configManager.get().behavior;
  if (!allowedGroups || allowedGroups.length === 0) return;

  const format = challengeRotation % 4;
  challengeRotation++;
  logger.info(`Executando cron: Desafio Dinâmico (formato ${format})`);

  for (const groupId of allowedGroups) {
    try {
      // Verifica se a conexão está ativa antes de enviar
      if (!sock?.user?.id) {
        logger.warn('Scheduler: Conexão não está ativa, pulando ciclo de desafio.');
        return;
      }

      // Verifica se o bot ainda está no grupo
      try {
        await sock.groupMetadata(groupId);
      } catch (metaErr) {
        logger.warn(`Scheduler: Não foi possível acessar o grupo ${groupId} (${metaErr.message}). Pulando...`);
        continue;
      }

      switch (format) {
        case 0: {
          let desafioTexto;
          try {
            desafioTexto = await nvidiaService.invokeCompletion(
              "Crie um desafio divertido e criativo de interação para um grupo de WhatsApp. " +
              "Deve ser algo que os membros possam fazer agora mesmo (enviar foto, áudio, emoji, etc). " +
              "Apenas o desafio, máximo 2 linhas."
            );
          } catch(e) {
            desafioTexto = STATIC_CHALLENGES[Math.floor(Math.random() * STATIC_CHALLENGES.length)];
          }
          await messageQueue.enqueue(sock, groupId, { 
            text: `📝 *DESAFIO DA HORA*\n\n${desafioTexto}\n\n⏰ _Próximo desafio: ${settings.desafio.label}_`
          });
          break;
        }
        case 1: {
          const audioDesafios = [
            "🎙️ *DESAFIO DE ÁUDIO*\n\nGrave um áudio de até 10 segundos dizendo: 'Um ótimo dia para vocês!' com a voz mais animada!",
            "🎙️ *DESAFIO DE ÁUDIO*\n\nGrave um áudio cantando o refrão da sua música favorita!",
            "🎙️ *DESAFIO DE ÁUDIO*\n\nGrave um áudio imitando algum famoso! O grupo tem que adivinhar!",
            "🎙️ *DESAFIO DE ÁUDIO*\n\nGrave um áudio contando algo engraçado que aconteceu essa semana!",
            "🎙️ *DESAFIO DE ÁUDIO*\n\nGrave um áudio com um discurso motivacional épico!"
          ];
          const chosen = audioDesafios[Math.floor(Math.random() * audioDesafios.length)];
          await messageQueue.enqueue(sock, groupId, { text: `${chosen}\n\n⏰ _Próximo: ${settings.desafio.label}_` });
          break;
        }
        case 2: {
          const poll = POLL_QUESTIONS[Math.floor(Math.random() * POLL_QUESTIONS.length)];
          await messageQueue.enqueue(sock, groupId, { 
            poll: { name: `📊 ${poll.title}`, values: poll.options, selectableCount: 1 }
          });
          break;
        }
        case 3: {
          let imgDesafio;
          try {
            imgDesafio = await nvidiaService.invokeCompletion(
              "Crie um desafio criativo que envolva enviar uma FOTO no grupo de WhatsApp. Apenas o desafio, máximo 2 linhas."
            );
          } catch(e) {
            imgDesafio = "Mande uma foto do que está na sua mesa agora! 📸";
          }
          await messageQueue.enqueue(sock, groupId, { 
            text: `🖼️ *DESAFIO FOTO*\n\n${imgDesafio}\n\n⏰ _Próximo: ${settings.desafio.label}_`
          });
          break;
        }
      }
    } catch (e) {
      // Connection Closed, Precondition Required, etc — ignora e continua
      if (e?.output?.statusCode === 428 || e?.message?.includes('Connection Closed')) {
        logger.warn(`Scheduler: Conexão fechada ao enviar desafio para ${groupId}. Pulando grupo.`);
      } else {
        logger.error(`Erro no desafio para ${groupId}:`, e.message || e);
      }
    }
  }
}

// ─── Referências dos cron jobs (para poder parar/reiniciar) ──

let activeTasks = {};

function stopAllTasks() {
  for (const [name, task] of Object.entries(activeTasks)) {
    try { task.stop(); } catch(e) {}
  }
  activeTasks = {};
}

function startTask(name, cronExpr, handler, sock) {
  if (activeTasks[name]) {
    try { activeTasks[name].stop(); } catch(e) {}
  }
  activeTasks[name] = cron.schedule(cronExpr, () => handler(sock));
}

// ─── Inicialização e Reinicialização ──────────────────────

export function startScheduler(sock) {
  loadSettings();
  stopAllTasks();

  startTask('bomdia', settings.bomdia.cron, executeBomDia, sock);
  startTask('frase', settings.frase.cron, executeFrase, sock);
  startTask('desafio', settings.desafio.cron, executeDesafio, sock);

  logger.success(`Scheduler inicializado — BomDia:${settings.bomdia.enabled ? '✅' : '❌'} Frase:${settings.frase.enabled ? '✅' : '❌'} Desafio:${settings.desafio.enabled ? '✅' : '❌'}`);
}

export function restartScheduler(sock) {
  loadSettings();
  stopAllTasks();
  startTask('bomdia', settings.bomdia.cron, executeBomDia, sock);
  startTask('frase', settings.frase.cron, executeFrase, sock);
  startTask('desafio', settings.desafio.cron, executeDesafio, sock);
  logger.info('Scheduler reiniciado com novas configurações.');
}
