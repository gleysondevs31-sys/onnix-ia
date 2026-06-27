// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import { getTopProfiles } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const RANK_MEDALS = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

export default {
  name: 'ranking',
  aliases: ['top', 'rank', 'leaderboard'],
  category: 'fun',
  description: 'Top 10 usuários mais ativos por nível e XP',
  cooldown: 10000,
  
  execute: async (context) => {
    const { sock, msg, jid, sender } = context;

    const topProfiles = getTopProfiles(10);

    if (topProfiles.length === 0) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `🏆 *RANKING*\n\nAinda não há dados suficientes. Continue interagindo para aparecer aqui!`
      }, { quoted: msg });
    }

    let text = `🏆 *RANKING — TOP ${topProfiles.length}*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    const mentions = [];

    topProfiles.forEach((profile, index) => {
      const medal = RANK_MEDALS[index] || `${index + 1}.`;
      const userNumber = profile.jid.split('@')[0];
      const streakIcon = profile.streak >= 7 ? '🔥' : profile.streak >= 3 ? '⚡' : '';
      
      text += `${medal} @${userNumber}\n`;
      text += `    📊 Nv.${profile.level} • ⭐ ${(profile.totalXp || 0).toLocaleString()} XP • 💰 ${formatCoins(profile.coins)} ${streakIcon}\n`;
      text += `    💬 ${profile.messages.toLocaleString()} msgs\n\n`;
      
      mentions.push(profile.jid);
    });

    // Verificar posição do sender
    const allProfiles = getTopProfiles(100);
    const senderPos = allProfiles.findIndex(p => p.jid === sender);
    
    if (senderPos >= 10) {
      text += `━━━━━━━━━━━━━━━━━━━━\n`;
      text += `📍 *Sua posição:* #${senderPos + 1}\n`;
    }

    text += `\n_Continue interagindo para subir no ranking!_`;

    await messageQueue.enqueue(sock, jid, { text, mentions }, { quoted: msg });
  }
};
