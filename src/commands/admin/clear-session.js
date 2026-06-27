import fs from 'fs';
import path from 'path';
import messageQueue from '../../core/MessageQueue.js';

const SESSION_DIR = path.join(process.cwd(), 'data', 'sessions');
const CREDS_FILE  = path.join(SESSION_DIR, 'creds.json');

// Prefixos de arquivos que SÃO SEGUROS para deletar (preserva creds.json)
const DELETABLE_PREFIXES = [
  'pre-key-',
  'app-state-sync-key-',
  'app-state-sync-version-',
  'sender-key-',
  'sender-key-memory-',
  'session-',
  'device-list-',
  'lid-mapping-',
  'tctoken-',
];

function clearSessionFiles() {
  const all    = fs.readdirSync(SESSION_DIR);
  const kept   = [];
  const deleted = [];

  for (const file of all) {
    const isProtected = file === 'creds.json';
    const isDeletable = DELETABLE_PREFIXES.some(p => file.startsWith(p));

    if (isProtected) {
      kept.push(file);
      continue;
    }

    if (isDeletable) {
      try {
        fs.unlinkSync(path.join(SESSION_DIR, file));
        deleted.push(file);
      } catch (e) {
        kept.push(file);
      }
    } else {
      kept.push(file);
    }
  }

  return { deleted: deleted.length, kept: kept.length };
}

export default {
  name: 'clear-session',
  aliases: ['clearsession', 'limpar-sessao', 'resetsession'],
  category: 'admin',
  description: 'Limpa os arquivos de sessão preservando creds.json (Dono)',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, args, jid, isOwner } = context;

    if (!isOwner) {
      return await messageQueue.enqueue(sock, jid, {
        text: `⛔ Apenas o dono pode limpar a sessão.`
      }, { quoted: msg });
    }

    const confirm = args[0]?.toLowerCase();

    // Pede confirmação se não passou "--confirm"
    if (confirm !== '--confirm' && confirm !== 'confirmar' && confirm !== 'sim') {
      return await messageQueue.enqueue(sock, jid, {
        text:
          `⚠️ *Atenção — Limpeza de Sessão*\n\n` +
          `Este comando vai deletar todos os arquivos de sessão temporários\n` +
          `*(pre-keys, sender-keys, device-lists, app-state, etc.)*\n\n` +
          `✅ *O que será preservado:*\n` +
          `  • creds.json (suas credenciais — sem reescanear QR)\n\n` +
          `🔴 *O que será deletado:*\n` +
          `  • pre-key-*.json\n` +
          `  • session-*.json\n` +
          `  • sender-key-*.json\n` +
          `  • device-list-*.json\n` +
          `  • app-state-*.json\n` +
          `  • lid-mapping-*.json\n\n` +
          `Para confirmar, use:\n` +
          `*/clear-session confirmar*\n\n` +
          `_Após a limpeza, reinicie o bot para reconectar normalmente._`
      }, { quoted: msg });
    }

    // Verifica se creds.json existe antes de apagar qualquer coisa
    if (!fs.existsSync(CREDS_FILE)) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ *creds.json não encontrado!*\n_Limpeza cancelada para evitar perda da sessão._`
      }, { quoted: msg });
    }

    // Limpa a fila de mensagens para não travar durante o processo
    messageQueue.clear();

    // Executa a limpeza
    const result = clearSessionFiles();

    await messageQueue.enqueue(sock, jid, {
      text:
        `🧹 *Sessão limpa com sucesso!*\n\n` +
        `🗑️ Arquivos removidos: *${result.deleted}*\n` +
        `✅ Arquivos preservados: *${result.kept}*\n` +
        `🔐 creds.json: *Intacto*\n\n` +
        `_Reinicie o bot agora para reconectar sem precisar reescanear o QR._`
    }, { quoted: msg });
  }
};
