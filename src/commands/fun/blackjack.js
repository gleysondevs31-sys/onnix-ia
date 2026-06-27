import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

// ── Helpers ──
const delay = ms => new Promise(r => setTimeout(r, ms));

function shuffleDeck() {
  const vals = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  const suits = ['♠','♥','♦','♣'];
  const deck = [];
  for (const v of vals) for (const s of suits) deck.push({ v, s });
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function cardValue(card) {
  if (['J','Q','K'].includes(card.v)) return 10;
  if (card.v === 'A') return 11;
  return parseInt(card.v);
}

function handValue(hand) {
  let total = hand.reduce((s, c) => s + cardValue(c), 0);
  let aces = hand.filter(c => c.v === 'A').length;
  while (total > 21 && aces > 0) { total -= 10; aces--; }
  return total;
}

function renderHand(hand) {
  return hand.map(c => `[${c.v}${c.s}]`).join(' ');
}

// Sessões ativas de blackjack por usuário
const sessions = new Map();

export default {
  name: 'blackjack',
  aliases: ['bj', '21'],
  category: 'fun',
  description: 'Jogue Blackjack contra o bot! Chegue ao 21 sem passar.',
  cooldown: 5000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    // ── Ação durante jogo ──
    if (sessions.has(sender)) {
      const s = sessions.get(sender);
      const action = (args[0] || '').toLowerCase();

      if (action === 'hit' || action === 'carta' || action === 'c') {
        s.playerHand.push(s.deck.pop());
        const total = handValue(s.playerHand);

        if (total > 21) {
          sessions.delete(sender);
          return await messageQueue.enqueue(sock, jid, {
            text: `🃏 *BLACKJACK — ESTOUROU!*\n\nSuas cartas: ${renderHand(s.playerHand)}\n*Total: ${total}* — Você passou de 21!\n\n💸 Perdeu *${formatCoins(s.bet)} coins*!\n💳 Saldo: *${formatCoins(getProfile(sender).coins)} coins*`
          }, { quoted: msg });
        }

        if (total === 21) {
          // Auto-stand
          return await _stand(sock, msg, jid, sender, pushName, s);
        }

        return await messageQueue.enqueue(sock, jid, {
          text: `🃏 *BLACKJACK*\n\nSuas cartas: ${renderHand(s.playerHand)}\n*Total: ${total}*\n\nBot (carta visível): ${renderHand([s.dealerHand[0]])} + 🂠\n\n👉 Digite *hit* (mais carta) ou *stand* (parar)`
        }, { quoted: msg });
      }

      if (action === 'stand' || action === 'parar' || action === 'p') {
        return await _stand(sock, msg, jid, sender, pushName, s);
      }

      if (action === 'sair' || action === 'cancelar') {
        sessions.delete(sender);
        return await messageQueue.enqueue(sock, jid, { text: `✅ Partida de Blackjack cancelada.` });
      }

      return await messageQueue.enqueue(sock, jid, {
        text: `🃏 Você tem um jogo em andamento!\n\nSuas cartas: ${renderHand(s.playerHand)} (${handValue(s.playerHand)})\n\n👉 *hit* = mais carta | *stand* = parar`
      }, { quoted: msg });
    }

    // ── Novo jogo ──
    const amountStr = args[0];
    if (!amountStr || isNaN(amountStr)) {
      return await messageQueue.enqueue(sock, jid, {
        text: `🃏 *BLACKJACK*\n\nChegue ao 21 sem passar!\n\nUso: */blackjack [valor]*\nEx: */bj 50*\n\nComandos durante o jogo:\n• *hit* ou *c* = pedir carta\n• *stand* ou *p* = parar`
      }, { quoted: msg });
    }

    const bet = parseInt(amountStr);
    if (bet < 10) {
      return await messageQueue.enqueue(sock, jid, { text: `❌ Aposta mínima: *10 coins*` }, { quoted: msg });
    }

    if (!removeCoins(sender, bet)) {
      const p = getProfile(sender);
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Saldo insuficiente! Você tem *${formatCoins(p.coins)} coins*, apostou *${formatCoins(bet)}*.`
      }, { quoted: msg });
    }

    const deck = shuffleDeck();
    const playerHand = [deck.pop(), deck.pop()];
    const dealerHand = [deck.pop(), deck.pop()];

    const s = { deck, playerHand, dealerHand, bet };
    sessions.set(sender, s);

    const total = handValue(playerHand);

    // Blackjack natural
    if (total === 21) {
      sessions.delete(sender);
      const prize = Math.floor(bet * 2.5);
      addCoins(sender, prize);
      return await messageQueue.enqueue(sock, jid, {
        text: `🃏 *BLACKJACK NATURAL!* 🎉\n\nSuas cartas: ${renderHand(playerHand)}\n*Total: 21!*\n\n🏆 Blackjack! Ganhou *+${formatCoins(prize)} coins* (2.5x)!\n💳 Saldo: *${formatCoins(getProfile(sender).coins)} coins*`
      }, { quoted: msg });
    }

    await messageQueue.enqueue(sock, jid, {
      text: `🃏 *BLACKJACK — Nova partida!*\n\nSuas cartas: ${renderHand(playerHand)}\n*Total: ${total}*\n\nBot (carta visível): ${renderHand([dealerHand[0]])} + 🂠\n\n👉 *hit* = pedir carta | *stand* = parar\n_(Aposta: ${formatCoins(bet)} coins)_`
    }, { quoted: msg });
  }
};

async function _stand(sock, msg, jid, sender, pushName, s) {
  sessions.delete(sender);

  // Dealer joga até >= 17
  while (handValue(s.dealerHand) < 17) {
    s.dealerHand.push(s.deck.pop());
  }

  const playerTotal = handValue(s.playerHand);
  const dealerTotal = handValue(s.dealerHand);

  let resultado = '';
  let prize = 0;

  if (dealerTotal > 21 || playerTotal > dealerTotal) {
    prize = s.bet * 2;
    addCoins(sender, prize);
    resultado = `🏆 *VOCÊ GANHOU!*\n\n💰 Ganhou *+${formatCoins(prize)} coins*!`;
  } else if (playerTotal === dealerTotal) {
    addCoins(sender, s.bet); // devolve aposta
    resultado = `⚖️ *EMPATE!*\n\nSua aposta de *${formatCoins(s.bet)} coins* foi devolvida.`;
  } else {
    resultado = `💸 *BOT GANHOU!*\n\nPerdeu *${formatCoins(s.bet)} coins*!`;
  }

  const saldo = getProfile(sender).coins;

  await messageQueue.enqueue(sock, jid, {
    text: `🃏 *BLACKJACK — RESULTADO*\n\nSuas cartas: ${renderHand(s.playerHand)} *(${playerTotal})*\nBot: ${renderHand(s.dealerHand)} *(${dealerTotal})*\n\n${resultado}\n💳 Saldo: *${formatCoins(getProfile(sender).coins)} coins*`
  }, { quoted: msg });
}
