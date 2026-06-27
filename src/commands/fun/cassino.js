import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const delay = ms => new Promise(r => setTimeout(r, ms));

// Slots com pesos
const SLOTS_POOL = [
  { emoji: '🍒', peso: 30 },
  { emoji: '🍋', peso: 25 },
  { emoji: '🍊', peso: 20 },
  { emoji: '🔔', peso: 12 },
  { emoji: '💎', peso: 7  },
  { emoji: '7️⃣', peso: 4  },
  { emoji: '🐯', peso: 2  },
];

function girarSlot() {
  const total = SLOTS_POOL.reduce((s, i) => s + i.peso, 0);
  let roll = Math.random() * total;
  for (const item of SLOTS_POOL) {
    roll -= item.peso;
    if (roll <= 0) return item.emoji;
  }
  return SLOTS_POOL[0].emoji;
}

function calcularPremio(s1, s2, s3, bet) {
  if (s1 === s2 && s2 === s3) {
    if (s1 === '🐯') return { mult: 25, label: '🐯🐯🐯 JACKPOT TIGRINHO!' };
    if (s1 === '7️⃣') return { mult: 15, label: '7️⃣7️⃣7️⃣ TRIPLE SEVEN!' };
    if (s1 === '💎') return { mult: 10, label: '💎💎💎 DIAMANTE!' };
    if (s1 === '🔔') return { mult: 5,  label: '🔔🔔🔔 TRIPLE BELL!' };
    return { mult: 3, label: `${s1}${s2}${s3} TRIPLE!` };
  }
  if (s1 === s2 || s2 === s3 || s1 === s3) {
    return { mult: 1.5, label: 'PAR! Recuperou parte!' };
  }
  return { mult: 0, label: 'PERDEU! Mais sorte da próxima!' };
}

export default {
  name: 'cassino',
  aliases: ['slots', 'maquina', 'slotmachine', 'apostar', 'bet'],
  category: 'fun',
  description: 'Jogue na caça-níqueis! Alinhe símbolos e ganhe coins!',
  cooldown: 5000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    const bet = parseInt(args[0]);

    if (isNaN(bet) || bet <= 0) {
      const p = getProfile(sender);
      return await messageQueue.enqueue(sock, jid, {
        text: `🎰 *CAÇA-NÍQUEIS ONNX*\n\n┌──────────────────┐\n│  🐯 x25 │ 7️⃣ x15  │\n│  💎 x10  │ 🔔 x5   │\n│  3 iguais x3 │ PAR x1.5│\n└──────────────────┘\n\nUso: */cassino [valor]*\nEx: */cassino 50*\n\n💳 Saldo: *${formatCoins(p.coins)} coins*`
      }, { quoted: msg });
    }

    if (bet < 10) {
      return await messageQueue.enqueue(sock, jid, { text: `❌ Aposta mínima: *10 coins*` }, { quoted: msg });
    }

    if (!removeCoins(sender, bet)) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Saldo insuficiente! Você tem *${formatCoins(getProfile(sender).coins)} coins*.`
      }, { quoted: msg });
    }

    // Animação de giro
    const spinMsg = await messageQueue.enqueue(sock, jid, {
      text: `🎰 *Girando...*\n│ 🌀 │ 🌀 │ 🌀 │`
    }, { quoted: msg });

    await delay(1200);

    const s1 = girarSlot();
    try {
      await sock.sendMessage(jid, {
        text: `🎰 *Girando...*\n│ ${s1} │ 🌀 │ 🌀 │`,
        edit: spinMsg.key
      });
    } catch(e) {}

    await delay(1000);
    const s2 = girarSlot();
    try {
      await sock.sendMessage(jid, {
        text: `🎰 *Girando...*\n│ ${s1} │ ${s2} │ 🌀 │`,
        edit: spinMsg.key
      });
    } catch(e) {}

    await delay(1000);
    const s3 = girarSlot();

    const { mult, label } = calcularPremio(s1, s2, s3, bet);
    const prize = Math.floor(bet * mult);

    if (prize > 0) addCoins(sender, prize);

    const saldo = getProfile(sender).coins;
    const resultLine = prize > 0
      ? `💰 *+${formatCoins(prize)} coins* ganhos!`
      : `💸 Perdeu *${formatCoins(bet)} coins*!`;

    const finalText = `🎰 *CAÇA-NÍQUEIS ONNX*\n\n┌─────────────┐\n│ ${s1}  │  ${s2}  │  ${s3} │\n└─────────────┘\n\n✨ *${label}*\n${resultLine}\n💳 Saldo: *${formatCoins(saldo)} coins*`;

    try {
      await sock.sendMessage(jid, { text: finalText, edit: spinMsg.key });
    } catch(e) {
      await messageQueue.enqueue(sock, jid, { text: finalText });
    }
  }
};
