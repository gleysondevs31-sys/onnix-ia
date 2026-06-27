import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, addXP, getCooldown, setCooldown } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const COOLDOWN_MS = 30 * 60 * 1000; // 30 minutos

const MINERIOS = [
  { nome: 'Carvão',     emoji: '🪨', min: 15,  max: 35,  chance: 0.40 },
  { nome: 'Ferro',      emoji: '⚙️',  min: 30,  max: 60,  chance: 0.30 },
  { nome: 'Ouro',       emoji: '🟡', min: 60,  max: 120, chance: 0.15 },
  { nome: 'Esmeralda',  emoji: '💚', min: 100, max: 200, chance: 0.08 },
  { nome: 'Diamante',   emoji: '💎', min: 180, max: 350, chance: 0.05 },
  { nome: 'Rubi Raro',  emoji: '🔴', min: 300, max: 600, chance: 0.02 },
];

function sortearMinerио() {
  const roll = Math.random();
  let acc = 0;
  for (const m of MINERIOS) {
    acc += m.chance;
    if (roll < acc) return m;
  }
  return MINERIOS[0];
}

export default {
  name: 'minar',
  aliases: ['minerar', 'mine', 'mineração'],
  category: 'economy',
  description: 'Mine recursos e venda por coins! (a cada 30min)',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, jid, sender, pushName } = context;

    const lastMine = getCooldown(sender, 'lastMine');
    const elapsed = Date.now() - lastMine;

    if (elapsed < COOLDOWN_MS) {
      const left = COOLDOWN_MS - elapsed;
      const min = Math.ceil(left / 60000);
      return await messageQueue.enqueue(sock, jid, {
        text: `⛏️ Você está cansado de minerar!\n\n⏳ Aguarde *${min} minuto(s)* para minerar novamente.`
      }, { quoted: msg });
    }

    // Sortear minério
    const minerio = sortearMinerио();
    const ganho = Math.floor(Math.random() * (minerio.max - minerio.min + 1)) + minerio.min;

    setCooldown(sender, 'lastMine');
    const novoSaldo = addCoins(sender, ganho);
    addXP(sender, Math.floor(ganho / 5));

    const anim = ['⛏️ Cavando...', '💥 Encontrou algo!', `${minerio.emoji} *${minerio.nome}* encontrado!`];

    await messageQueue.enqueue(sock, jid, {
      text: `⛏️ *MINERAÇÃO*\n\n${pushName} foi cavar na mina...\n\n${minerio.emoji} Encontrou: *${minerio.nome}*\n💰 Vendido por: *+${formatCoins(ganho)} coins*\n\n💳 Saldo atual: *${formatCoins(novoSaldo)} coins*\n⏳ Próxima mineração em *30 min*`
    }, { quoted: msg });
  }
};
