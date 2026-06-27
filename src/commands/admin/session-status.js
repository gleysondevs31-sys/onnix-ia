import fs from 'fs';
import path from 'path';
import messageQueue from '../../core/MessageQueue.js';
import { getShop } from '../../database/shop.js';

const SESSION_DIR = path.join(process.cwd(), 'data', 'sessions');

function getSessionStats() {
  const total    = fs.readdirSync(SESSION_DIR).length;
  const preKeys  = fs.readdirSync(SESSION_DIR).filter(f => f.startsWith('pre-key-')).length;
  const sessions = fs.readdirSync(SESSION_DIR).filter(f => f.startsWith('session-')).length;
  const senders  = fs.readdirSync(SESSION_DIR).filter(f => f.startsWith('sender-key-')).length;
  const apps     = fs.readdirSync(SESSION_DIR).filter(f => f.startsWith('app-state')).length;
  const lids     = fs.readdirSync(SESSION_DIR).filter(f => f.startsWith('lid-mapping')).length;
  const hasCreds = fs.existsSync(path.join(SESSION_DIR, 'creds.json'));
  const credsSize = hasCreds ? fs.statSync(path.join(SESSION_DIR, 'creds.json')).size : 0;

  // Tamanho total em KB
  let totalSizeBytes = 0;
  for (const f of fs.readdirSync(SESSION_DIR)) {
    try { totalSizeBytes += fs.statSync(path.join(SESSION_DIR, f)).size; } catch (_) {}
  }

  return { total, preKeys, sessions, senders, apps, lids, hasCreds, credsSize, totalSizeBytes };
}

export default {
  name: 'session-status',
  aliases: ['sessionstatus', 'sessao', 'session'],
  category: 'admin',
  description: 'Mostra o status da sessão do WhatsApp (Dono)',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, jid, isOwner } = context;

    if (!isOwner) {
      return await messageQueue.enqueue(sock, jid, {
        text: `⛔ Apenas o dono pode verificar o status da sessão.`
      }, { quoted: msg });
    }

    const s = getSessionStats();
    const { getStatus } = await import('../../core/MessageQueue.js');
    const mq = messageQueue.getStatus();

    const totalKB = (s.totalSizeBytes / 1024).toFixed(1);
    const uptime  = process.uptime();
    const hours   = Math.floor(uptime / 3600);
    const mins    = Math.floor((uptime % 3600) / 60);
    const secs    = Math.floor(uptime % 60);
    const mem     = process.memoryUsage();
    const heapMB  = (mem.heapUsed / 1024 / 1024).toFixed(1);
    const rssMB   = (mem.rss / 1024 / 1024).toFixed(1);
    const shop    = getShop();

    const text =
      `📊 *SESSION STATUS — ONNX IA*\n` +
      `${'━'.repeat(28)}\n\n` +
      `🔐 *Sessão:*\n` +
      `  ✅ creds.json: ${s.hasCreds ? `Presente (${s.credsSize}b)` : '❌ Ausente!'}\n` +
      `  📁 Total de arquivos: ${s.total}\n` +
      `  🔑 Pre-keys: ${s.preKeys}\n` +
      `  📡 Sessions: ${s.sessions}\n` +
      `  📨 Sender-keys: ${s.senders}\n` +
      `  🗂️ App-state: ${s.apps}\n` +
      `  🔗 LID-mappings: ${s.lids}\n` +
      `  💾 Tamanho total: ${totalKB} KB\n\n` +
      `⚙️ *Runtime:*\n` +
      `  ⏱️ Uptime: ${hours}h ${mins}m ${secs}s\n` +
      `  🧠 Heap: ${heapMB} MB\n` +
      `  💻 RSS: ${rssMB} MB\n\n` +
      `📨 *Message Queue:*\n` +
      `  📋 Na fila: ${mq.queueSize}/${mq.maxSize}\n` +
      `  ⚡ Processando: ${mq.processing ? 'Sim' : 'Não'}\n\n` +
      `🏪 *Loja:* ${shop.length} produtos\n\n` +
      `${'━'.repeat(28)}\n` +
      `💡 Use */clear-session* para limpar arquivos desnecessários.\n` +
      `💡 Use */admshop list* para gerenciar produtos.`;

    await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
  }
};
