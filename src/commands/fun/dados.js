import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const DADO = ['⚀','⚁','⚂','⚃','⚄','⚅'];

function rolar() {
  return Math.floor(Math.random() * 6) + 1;
}

export default {
  name: 'dados',
  aliases: ['dado', 'dice', 'rolardado'],
  category: 'fun',
  description: 'Role o dado e aposte coins! (maior total vence)',
  cooldown: 3000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    const bet = parseInt(args[0]);

    if (isNaN(bet) || bet <= 0) {
      const p = getProfile(sender);
      return await messageQueue.enqueue(sock, jid, {
        text: `🎲 *JOGO DE DADOS*\n\nVocê vs Bot — quem rolar maior ganha!\n\n• *Vitória:* 2x a aposta\n• *Empate:* devolve a aposta\n• *Derrota:* perde tudo\n\nUso: */dados [valor]*\n💳 Seu saldo: *${formatCoins(p.coins)} coins*`
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

    // Cada lado rola 2 dados
    const d1 = rolar(), d2 = rolar();
    const bot1 = rolar(), bot2 = rolar();
    const playerTotal = d1 + d2;
    const botTotal = bot1 + bot2;

    let resultado = '';
    if (playerTotal > botTotal) {
      const prize = bet * 2;
      addCoins(sender, prize);
      resultado = `🏆 *VOCÊ GANHOU!*\n💰 Ganhou *+${formatCoins(prize)} coins*!`;
    } else if (playerTotal === botTotal) {
      addCoins(sender, bet);
      resultado = `⚖️ *EMPATE!* Aposta devolvida.`;
    } else {
      resultado = `💸 *BOT GANHOU!* Perdeu *${formatCoins(bet)} coins*!`;
    }

    const saldo = getProfile(sender).coins;

    await messageQueue.enqueue(sock, jid, {
      text: `🎲 *JOGO DE DADOS*\n\n${pushName}: ${DADO[d1-1]}${DADO[d2-1]} = *${playerTotal}*\nBot: ${DADO[bot1-1]}${DADO[bot2-1]} = *${botTotal}*\n\n${resultado}\n💳 Saldo: *${formatCoins(getProfile(sender).coins)} coins*`
    }, { quoted: msg });
  }
};
