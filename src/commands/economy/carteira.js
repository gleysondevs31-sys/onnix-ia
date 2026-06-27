import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins, setCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

export default {
  name: 'carteira',
  aliases: ['saldo', 'wallet', 'coins', 'banco'],
  category: 'economy',
  description: 'Veja seu saldo atual de coins',
  cooldown: 5000,

  execute: async (context) => {
    const { sock, msg, jid, sender, pushName, mentionedJid, isOwner } = context;

    // Se mencionou alguém (dono vendo o saldo de outro)
    let targetJid = sender;
    let targetName = pushName;
    if (mentionedJid?.[0]) {
      targetJid = mentionedJid[0];
      targetName = `@${targetJid.split('@')[0]}`;
    }

    const p = getProfile(targetJid);
    const nextXp = p.level * 100;
    const pct = Math.min(100, Math.round((p.xp / nextXp) * 100));
    const bar = '▓'.repeat(Math.round(pct / 10)) + '░'.repeat(10 - Math.round(pct / 10));

    await messageQueue.enqueue(sock, jid, {
      text: `💳 *CARTEIRA — ${targetName}*\n━━━━━━━━━━━━━━━━━━━\n\n💰 *Coins:* ${formatCoins(p.coins)}\n📊 *Nível:* ${p.level}\n${bar} (${pct}%)\n⭐ *XP:* ${p.xp}/${nextXp}\n💬 *Msgs:* ${p.messages.toLocaleString('pt-BR')}\n\n_Use /diario para ganhar coins diários!_\n_Use /trabalhar, /minar ou /pescar para mais coins!_`,
      mentions: mentionedJid?.[0] ? [targetJid] : []
    }, { quoted: msg });
  }
};
