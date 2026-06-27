import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const FACES = ['🪙', '🃏'];

export default {
  name: 'coinflip',
  aliases: ['girarmoeda', 'cara', 'cf', 'moeda'],
  category: 'fun',
  description: 'Aposte em cara ou coroa! (50/50)',
  cooldown: 3000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    const escolha = (args[0] || '').toLowerCase();
    const amountStr = args[1] || args[0];

    const bet = parseInt(args.find(a => /^\d+$/.test(a)));
    const escolhaNorm = ['cara', 'coroa', 'ca', 'co', 'heads', 'tails'].includes(escolha)
      ? ((['cara', 'ca', 'heads'].includes(escolha)) ? 'cara' : 'coroa')
      : null;

    if (!escolhaNorm || isNaN(bet) || bet <= 0) {
      const p = getProfile(sender);
      return await messageQueue.enqueue(sock, jid, {
        text: `🪙 *COINFLIP*\n\nUso: */coinflip [cara/coroa] [valor]*\n\nExemplos:\n• /cf cara 50\n• /cf coroa 100\n\n💳 Seu saldo: *${formatCoins(p.coins)} coins*`
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

    const resultado = Math.random() < 0.5 ? 'cara' : 'coroa';
    const ganhou = resultado === escolhaNorm;

    if (ganhou) {
      const prize = bet * 2;
      addCoins(sender, prize);
      const novoSaldo = getProfile(sender).coins;
      await messageQueue.enqueue(sock, jid, {
        text: `🪙 *COINFLIP*\n\n🌀 Girando a moeda...\n\n${resultado === 'cara' ? '😎 CARA!' : '🔄 COROA!'}\n\nVocê escolheu *${escolhaNorm}* — *ACERTOU!* 🎉\n💰 Ganhou *+${formatCoins(prize)} coins*!\n💳 Saldo: *${formatCoins(novoSaldo)} coins*`
      }, { quoted: msg });
    } else {
      const novoSaldo = getProfile(sender).coins;
      await messageQueue.enqueue(sock, jid, {
        text: `🪙 *COINFLIP*\n\n🌀 Girando a moeda...\n\n${resultado === 'cara' ? '😎 CARA!' : '🔄 COROA!'}\n\nVocê escolheu *${escolhaNorm}* — *ERROU!* 😢\n💸 Perdeu *${formatCoins(bet)} coins*!\n💳 Saldo: *${formatCoins(novoSaldo)} coins*`
      }, { quoted: msg });
    }
  }
};
