import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const delay = ms => new Promise(r => setTimeout(r, ms));

// ─── Baralho ───
const NAIPES = ['♠', '♥', '♦', '♣'];
const VALS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const ORDEM = { 'A':14,'K':13,'Q':12,'J':11,'10':10,'9':9,'8':8,'7':7,'6':6,'5':5,'4':4,'3':3,'2':2 };

function criarBaralho() {
  const deck = [];
  for (const n of NAIPES) for (const v of VALS) deck.push({ v, n });
  // Embaralhar
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function cardStr(c) {
  return `[${c.v}${c.n}]`;
}

// ─── Guerra: comparar carta do topo ───
export default {
  name: 'guerra',
  aliases: ['war', 'cartaguerra', 'batalha'],
  category: 'fun',
  description: 'Jogo de Guerra! Maior carta ganha! 🃏⚔️',
  cooldown: 5000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    const bet = parseInt(args[0]);

    if (isNaN(bet) || bet <= 0) {
      const p = getProfile(sender);
      return await messageQueue.enqueue(sock, jid, {
        text: `🃏 *GUERRA DE CARTAS*\n\n` +
              `Você e o bot viram uma carta cada — maior carta ganha!\n\n` +
              `• *Vitória:* 2x a aposta\n` +
              `• *Empate:* 1.5x a aposta 🃏\n` +
              `• *Derrota:* perde tudo\n\n` +
              `*Uso:* /guerra [valor]\n` +
              `💳 Saldo: *${formatCoins(p.coins)} coins*`
      }, { quoted: msg });
    }

    if (bet < 5) {
      return await messageQueue.enqueue(sock, jid, { text: `❌ Aposta mínima: *5 coins*` }, { quoted: msg });
    }

    if (!removeCoins(sender, bet)) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Saldo insuficiente! Você tem *${formatCoins(getProfile(sender).coins)} coins*.`
      }, { quoted: msg });
    }

    const deck = criarBaralho();
    const playerCard = deck.pop();
    const botCard = deck.pop();

    const animMsg = await messageQueue.enqueue(sock, jid, {
      text: `🃏 *GUERRA DE CARTAS*\n\n🔄 Embaralhando o baralho...`
    }, { quoted: msg });

    await delay(1200);
    try { await sock.sendMessage(jid, { text: `🃏 *GUERRA DE CARTAS*\n\n🂠 Virando as cartas...`, edit: animMsg.key }); } catch(e) {}
    await delay(1200);

    const playerVal = ORDEM[playerCard.v];
    const botVal = ORDEM[botCard.v];

    let resultado = '';
    if (playerVal > botVal) {
      const prize = bet * 2;
      addCoins(sender, prize);
      resultado = `🏆 *VOCÊ GANHOU!* Sua carta é maior!\n💰 *+${formatCoins(prize)} coins*!`;
    } else if (playerVal === botVal) {
      const prize = Math.floor(bet * 1.5);
      addCoins(sender, prize);
      resultado = `⚖️ *EMPATE!* Mesma carta!\n💰 *+${formatCoins(prize)} coins* (1.5x)!`;
    } else {
      resultado = `💸 *BOT GANHOU!* Carta maior do bot.\nPerdeu *${formatCoins(bet)} coins*!`;
    }

    const saldo = getProfile(sender).coins;
    const finalText = `🃏 *GUERRA DE CARTAS*\n\n` +
                      `👤 Você: ${cardStr(playerCard)} (${playerCard.v})\n` +
                      `🤖 Bot: ${cardStr(botCard)} (${botCard.v})\n\n` +
                      `${resultado}\n` +
                      `💳 Saldo: *${formatCoins(saldo)} coins*`;

    try {
      await sock.sendMessage(jid, { text: finalText, edit: animMsg.key });
    } catch(e) {
      await messageQueue.enqueue(sock, jid, { text: finalText });
    }
  }
};
