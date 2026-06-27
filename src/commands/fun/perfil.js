// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import { getProfile } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

export default {
  name: 'perfil',
  aliases: ['profile', 'meurank', 'stats'],
  category: 'fun',
  description: 'Exibe seu perfil de nível, XP, moedas e streak',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, jid, sender, pushName } = context;
    
    const p = getProfile(sender);
    const nextXp = p.level * 100;
    const progressBar = generateProgressBar(p.xp, nextXp);

    // Título baseado no nível
    const title = getTitle(p.level);
    
    // Streak visual
    const streakDisplay = p.streak >= 7 
      ? `🔥 ${p.streak} dias (Imparável!)`
      : p.streak >= 3 
        ? `⚡ ${p.streak} dias (Firme!)`
        : p.streak >= 1
          ? `✨ ${p.streak} dia(s)`
          : `💤 Inativo`;

    const text = `👤 *PERFIL — ${pushName}*
━━━━━━━━━━━━━━━━━━━

🏅 *Título:* ${title}
📊 *Nível:* ${p.level}
⭐ *XP:* ${p.xp} / ${nextXp}
${progressBar}
🌟 *XP Total:* ${(p.totalXp || 0).toLocaleString()}
💰 *Moedas:* ${formatCoins(p.coins)}
💬 *Mensagens:* ${p.messages.toLocaleString()}
📅 *Streak:* ${streakDisplay}

━━━━━━━━━━━━━━━━━━━
_Ganhe XP enviando mensagens e suba de nível!_
_Mantenha seu streak ativo para bônus extras!_`;

    await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
  }
};

function generateProgressBar(current, max) {
  const pct = Math.min(100, Math.round((current / max) * 100));
  const filled = Math.round(pct / 10);
  const empty = 10 - filled;
  return '▓'.repeat(filled) + '░'.repeat(empty) + ` (${pct}%)`;
}

function getTitle(level) {
  if (level >= 50) return '👑 Lendário';
  if (level >= 40) return '💎 Diamante';
  if (level >= 30) return '🏆 Mestre';
  if (level >= 20) return '⚔️ Guerreiro';
  if (level >= 15) return '🛡️ Guardião';
  if (level >= 10) return '🌟 Veterano';
  if (level >= 7) return '⚡ Experiente';
  if (level >= 5) return '🔥 Ativo';
  if (level >= 3) return '📱 Regular';
  return '🌱 Iniciante';
}
