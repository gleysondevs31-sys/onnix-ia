import messageQueue from '../../core/MessageQueue.js';
import { addCoins, addXP, getCooldown, setCooldown } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const COOLDOWN_MS = 4 * 60 * 60 * 1000; // 4 horas

const EMPREGOS = [
  { nome: 'Entregador',     emoji: '🛵', min: 80,  max: 150 },
  { nome: 'Programador',    emoji: '💻', min: 120, max: 220 },
  { nome: 'Médico',         emoji: '🩺', min: 150, max: 280 },
  { nome: 'Chef de Cozinha',emoji: '👨‍🍳', min: 100, max: 180 },
  { nome: 'Policial',       emoji: '👮', min: 90,  max: 170 },
  { nome: 'Streamer',       emoji: '🎮', min: 50,  max: 400 },
  { nome: 'Youtuber',       emoji: '📹', min: 30,  max: 500 },
  { nome: 'Mecânico',       emoji: '🔧', min: 100, max: 190 },
  { nome: 'Advogado',       emoji: '⚖️', min: 180, max: 320 },
  { nome: 'Músico',         emoji: '🎸', min: 60,  max: 350 },
];

const FRASES = [
  'trabalhou duro e recebeu',
  'fez hora extra e ganhou',
  'bateu todas as metas e levou',
  'foi elogiado pelo chefe e recebeu',
  'entregou o projeto antes do prazo e ganhou',
  'fez um dia produtivo e recebeu',
];

export default {
  name: 'trabalhar',
  aliases: ['trabalho', 'work', 'trampo', 'serviço'],
  category: 'economy',
  description: 'Trabalhe para ganhar coins! (a cada 4h)',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, jid, sender, pushName } = context;

    const lastWork = getCooldown(sender, 'lastWork');
    const elapsed = Date.now() - lastWork;

    if (elapsed < COOLDOWN_MS) {
      const left = COOLDOWN_MS - elapsed;
      const h = Math.floor(left / 3_600_000);
      const m = Math.ceil((left % 3_600_000) / 60_000);
      const tempo = h > 0 ? `${h}h ${m}min` : `${m} min`;
      return await messageQueue.enqueue(sock, jid, {
        text: `💼 Você já trabalhou hoje!\n\n⏳ Descanse por mais *${tempo}* antes de voltar ao trabalho.`
      }, { quoted: msg });
    }

    const emprego = EMPREGOS[Math.floor(Math.random() * EMPREGOS.length)];
    const frase = FRASES[Math.floor(Math.random() * FRASES.length)];
    const ganho = Math.floor(Math.random() * (emprego.max - emprego.min + 1)) + emprego.min;

    setCooldown(sender, 'lastWork');
    const novoSaldo = addCoins(sender, ganho);
    addXP(sender, Math.floor(ganho / 5));

    await messageQueue.enqueue(sock, jid, {
      text: `💼 *TRABALHO*\n\n${emprego.emoji} *${pushName}* trabalhou como *${emprego.nome}*\n\n✅ ${frase} *+${formatCoins(ganho)} coins*!\n💳 Saldo atual: *${formatCoins(novoSaldo)} coins*\n\n⏳ Próximo trabalho em *4 horas*`
    }, { quoted: msg });
  }
};
