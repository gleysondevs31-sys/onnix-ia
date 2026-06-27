import messageQueue from '../../core/MessageQueue.js';
import { addCoins, addXP, getCooldown, setCooldown, getProfile } from '../../database/profiles.js';

const COOLDOWN_MS = 60 * 60 * 1000; // 1 hora

const PEIXES = [
  { nome: 'Bota Velha',    emoji: '👢', min: 0,   max: 5,   chance: 0.10, descricao: 'Que decepção...' },
  { nome: 'Peixinho',      emoji: '🐟', min: 10,  max: 25,  chance: 0.35, descricao: 'Pequeno, mas é um peixe!' },
  { nome: 'Salmão',        emoji: '🐠', min: 30,  max: 55,  chance: 0.25, descricao: 'Um peixe bem gordinho!' },
  { nome: 'Atum',          emoji: '🐡', min: 60,  max: 100, chance: 0.15, descricao: 'Valioso no mercado!' },
  { nome: 'Caranguejo',    emoji: '🦀', min: 90,  max: 150, chance: 0.08, descricao: 'Raro e saboroso!' },
  { nome: 'Polvo',         emoji: '🐙', min: 150, max: 250, chance: 0.05, descricao: 'Uau, que criatura!' },
  { nome: 'Baú Submerso',  emoji: '🎁', min: 300, max: 500, chance: 0.02, descricao: '🎉 SORTE INCRÍVEL!' },
];

function sortearPeixe() {
  const roll = Math.random();
  let acc = 0;
  for (const p of PEIXES) {
    acc += p.chance;
    if (roll < acc) return p;
  }
  return PEIXES[1];
}

export default {
  name: 'pescar',
  aliases: ['pesca', 'fish', 'fishing'],
  category: 'economy',
  description: 'Lance a vara e pesque para ganhar coins! (a cada 1h)',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, jid, sender, pushName } = context;

    const lastFish = getCooldown(sender, 'lastFish');
    const elapsed = Date.now() - lastFish;

    if (elapsed < COOLDOWN_MS) {
      const left = COOLDOWN_MS - elapsed;
      const min = Math.ceil(left / 60000);
      return await messageQueue.enqueue(sock, jid, {
        text: `🎣 Você ainda está esperando os peixes!\n\n⏳ Aguarde *${min} minuto(s)* para pescar novamente.`
      }, { quoted: msg });
    }

    const peixe = sortearPeixe();
    const ganho = peixe.min === 0 && peixe.max === 5
      ? Math.floor(Math.random() * 6)
      : Math.floor(Math.random() * (peixe.max - peixe.min + 1)) + peixe.min;

    setCooldown(sender, 'lastFish');

    let texto;
    if (ganho === 0) {
      texto = `🎣 *PESCARIA*\n\n${pushName} lançou a vara...\n\n${peixe.emoji} *${peixe.nome}*\n_${peixe.descricao}_\n\n💰 Não valeu nada... *0 coins*\n⏳ Próxima pesca em *1 hora*`;
    } else {
      const novoSaldo = addCoins(sender, ganho);
      addXP(sender, Math.floor(ganho / 4));
      texto = `🎣 *PESCARIA*\n\n${pushName} lançou a vara...\n\n${peixe.emoji} Pescou: *${peixe.nome}*\n_${peixe.descricao}_\n\n💰 Vendido por: *+${ganho} coins*\n💳 Saldo atual: *${novoSaldo} coins*\n⏳ Próxima pesca em *1 hora*`;
    }

    await messageQueue.enqueue(sock, jid, { text: texto }, { quoted: msg });
  }
};
