import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins } from '../../database/profiles.js';

// ── Cooldown individual por usuário ──────────────────────────────────────────
const lastCapina = new Map(); // sender → timestamp
const COOLDOWN_MS = 60_000; // 60 segundos
const STREAK_MAP  = new Map(); // sender → { count, lastTs }

// Eventos aleatórios de capina
const EVENTOS = [
  { msg: '🌾 Você capinou o campo todo e encontrou $C coins escondidos na terra!',    min: 5,  max: 20 },
  { msg: '🐛 Um passarinho achou seu esforço bonito e te deu $C coins de gorjeta.',   min: 5,  max: 15 },
  { msg: '🪱 Você achou uma minhoca de sorte! Vendeu por $C coins pra um pescador.',  min: 8,  max: 22 },
  { msg: '💧 Regou o canteiro errado mas o patrão pagou $C coins por engano.',        min: 5,  max: 18 },
  { msg: '🌻 A plantação boa te deu uma gorjeta de $C coins!',                        min: 10, max: 25 },
  { msg: '🐝 Uma abelha te prendeu mas você saiu correndo com $C coins no bolso.',    min: 5,  max: 12 },
  { msg: '🎋 Você cortou o mato e achou uma toca de coelho com $C coins dentro.',     min: 8,  max: 25 },
  { msg: '☀️ Sol a pino mas vale a pena — $C coins caíram do trator do patrão.',     min: 5,  max: 15 },
  { msg: '🌿 Você capinou tão rápido que o vizinho contratou você por $C coins.',     min: 10, max: 20 },
  { msg: '🍀 Encontrou um trevo de 4 folhas! Felicidade no valor de $C coins.',      min: 12, max: 28 },
  { msg: '🦎 Um lagarto correu com sua enxada e você ganhou $C coins de seguro.',     min: 5,  max: 18 },
  { msg: '🌵 Capinou um cacto sem querer, mas sobreviveu e recebeu $C coins.',        min: 8,  max: 22 },
  { msg: '🐸 Um sapo falou a quantidade de bugs no código — você ganhou $C coins.',  min: 5,  max: 15 },
  { msg: '🌈 Choveu e o arco-íris apontou pra você — $C coins de bônus!',            min: 15, max: 30 },
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  name: 'capinar',
  aliases: ['capi', 'roça', 'roca', 'enxada'],
  category: 'fun',
  description: 'Capine o campo e ganhe coins! (sem limite, 60s de cooldown)',
  cooldown: 0, // controlado manualmente para mostrar tempo restante

  execute: async (context) => {
    const { sock, msg, jid, sender, pushName } = context;

    // ── Cooldown manual ────────────────────────────────────────────────────
    const agora   = Date.now();
    const ultimo  = lastCapina.get(sender) || 0;
    const restante = COOLDOWN_MS - (agora - ultimo);

    if (restante > 0) {
      const seg = Math.ceil(restante / 1000);
      return await messageQueue.enqueue(sock, jid, {
        text: `😓 *${pushName}, você já capinou!*\n\n⏳ Descanse por *${seg}s* antes de voltar à roça.\n_Seus braços precisam de um tempo!_ 💪`
      }, { quoted: msg });
    }

    // ── Sorteia evento ─────────────────────────────────────────────────────
    const evento = EVENTOS[Math.floor(Math.random() * EVENTOS.length)];
    const coins  = getRandom(evento.min, evento.max);

    // ── Streak de capina ───────────────────────────────────────────────────
    let streakData  = STREAK_MAP.get(sender) || { count: 0, lastTs: 0 };
    const streakGap = agora - streakData.lastTs;

    if (streakGap < 5 * 60_000) {
      // Capina feita em até 5 min da última = mantém streak
      streakData.count++;
    } else {
      streakData.count = 1;
    }
    streakData.lastTs = agora;
    STREAK_MAP.set(sender, streakData);

    // Bônus a cada 5 capinas consecutivas
    let bonusCoins = 0;
    let bonusMsg   = '';
    if (streakData.count > 0 && streakData.count % 5 === 0) {
      bonusCoins = 30;
      bonusMsg   = `\n🔥 *Bônus de Sequência x${streakData.count}!* +${bonusCoins} coins extras!`;
    }

    const totalCoins = coins + bonusCoins;

    // ── Registra cooldown e adiciona coins ──────────────────────────────────
    lastCapina.set(sender, agora);
    addCoins(sender, totalCoins);

    const perfil = getProfile(sender);
    const eventText = evento.msg.replace('$C', coins);

    const streakBar = streakData.count >= 5
      ? `\n🌾 *Sequência:* ${streakData.count} capinas seguidas!`
      : `\n🌾 *Sequência:* ${streakData.count}/5 (bônus a cada 5)`;

    await messageQueue.enqueue(sock, jid, {
      text:
        `🌿 *CAPINA DO ${(pushName || 'Usuário').toUpperCase()}*\n` +
        `${'─'.repeat(28)}\n\n` +
        `${eventText}${bonusMsg}\n\n` +
        `💰 *+${totalCoins} coins*${streakBar}\n` +
        `💳 Saldo: *${perfil.coins} coins*\n\n` +
        `_⏳ Próxima capina em 60 segundos_`
    }, { quoted: msg });
  }
};
