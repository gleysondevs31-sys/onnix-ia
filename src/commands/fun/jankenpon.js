import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const delay = ms => new Promise(r => setTimeout(r, ms));

// Mapa de resultado → emoji + nome
const RESULTADOS = [
  { id: 'pedra',    emoji: '🪨', nome: 'Pedra'   },
  { id: 'papel',   emoji: '📄', nome: 'Papel'   },
  { id: 'tesoura', emoji: '✂️',  nome: 'Tesoura' },
];

const ALIASES = {
  pedra:    ['pedra', 'rock', 'r', 'p'],
  papel:    ['papel', 'paper', 'pa', 'papel'],
  tesoura:  ['tesoura', 'scissors', 's', 't', 'sc'],
};

function resolveEscolha(str) {
  str = (str || '').toLowerCase();
  for (const [key, list] of Object.entries(ALIASES)) {
    if (list.includes(str)) return key;
  }
  return null;
}

function vence(a, b) {
  if (a === b) return 'empate';
  if (
    (a === 'pedra'   && b === 'tesoura') ||
    (a === 'papel'   && b === 'pedra')   ||
    (a === 'tesoura' && b === 'papel')
  ) return 'jogador';
  return 'bot';
}

export default {
  name: 'jankenpon',
  aliases: ['pedrapapeltesoura', 'ppt', 'rps', 'pedra', 'jkp'],
  category: 'fun',
  description: 'Pedra, Papel ou Tesoura contra o bot! 🪨📄✂️',
  cooldown: 3000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    const escolhaStr = args[0];
    const bet = parseInt(args[1] || args[0]);

    const escolha = resolveEscolha(escolhaStr);

    if (!escolha || isNaN(parseInt(args[1]))) {
      // Sem aposta - jogo grátis
      if (escolha) {
        const botEscolhaId = RESULTADOS[Math.floor(Math.random() * 3)].id;
        const botObj = RESULTADOS.find(r => r.id === botEscolhaId);
        const playerObj = RESULTADOS.find(r => r.id === escolha);
        const resultado = vence(escolha, botEscolhaId);

        let line = '';
        if (resultado === 'empate') line = `⚖️ *EMPATE!*`;
        else if (resultado === 'jogador') line = `🏆 *VOCÊ GANHOU!*`;
        else line = `💸 *BOT GANHOU!*`;

        return await messageQueue.enqueue(sock, jid, {
          text: `🪨📄✂️ *PEDRA, PAPEL E TESOURA*\n\n` +
                `${playerObj.emoji} Você: *${playerObj.nome}*\n` +
                `🤖 Bot: ${botObj.emoji} *${botObj.nome}*\n\n` +
                `${line}\n\n` +
                `_Para apostar: /ppt [escolha] [valor]_`
        }, { quoted: msg });
      }

      const p = getProfile(sender);
      return await messageQueue.enqueue(sock, jid, {
        text: `🪨📄✂️ *PEDRA, PAPEL E TESOURA*\n\n` +
              `*Sem aposta (grátis):*\n/ppt pedra | /ppt papel | /ppt tesoura\n\n` +
              `*Com aposta:*\n/ppt pedra 100\n/ppt papel 200\n\n` +
              `• *Vitória:* 2x a aposta\n` +
              `• *Empate:* devolve tudo\n` +
              `• *Derrota:* perde tudo\n\n` +
              `💳 Saldo: *${formatCoins(p.coins)} coins*`
      }, { quoted: msg });
    }

    const betAmount = parseInt(args[1]);
    if (isNaN(betAmount) || betAmount < 5) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Aposta mínima: *5 coins*`
      }, { quoted: msg });
    }

    if (!removeCoins(sender, betAmount)) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Saldo insuficiente! Você tem *${formatCoins(getProfile(sender).coins)} coins*.`
      }, { quoted: msg });
    }

    const botEscolhaId = RESULTADOS[Math.floor(Math.random() * 3)].id;
    const botObj = RESULTADOS.find(r => r.id === botEscolhaId);
    const playerObj = RESULTADOS.find(r => r.id === escolha);

    // Animação
    const animMsg = await messageQueue.enqueue(sock, jid, {
      text: `🪨📄✂️ *PEDRA, PAPEL E TESOURA*\n\n3️⃣ ...`
    }, { quoted: msg });

    await delay(800);
    try { await sock.sendMessage(jid, { text: `🪨📄✂️ *PEDRA, PAPEL E TESOURA*\n\n2️⃣ ...`, edit: animMsg.key }); } catch(e) {}
    await delay(800);
    try { await sock.sendMessage(jid, { text: `🪨📄✂️ *PEDRA, PAPEL E TESOURA*\n\n1️⃣ ...`, edit: animMsg.key }); } catch(e) {}
    await delay(800);

    const resultado = vence(escolha, botEscolhaId);
    let finalText = `🪨📄✂️ *PEDRA, PAPEL E TESOURA*\n\n`;
    finalText += `${playerObj.emoji} Você: *${playerObj.nome}*\n`;
    finalText += `🤖 Bot: ${botObj.emoji} *${botObj.nome}*\n\n`;

    if (resultado === 'empate') {
      addCoins(sender, betAmount);
      finalText += `⚖️ *EMPATE!* Aposta devolvida.\n`;
      finalText += `💳 Saldo: *${formatCoins(getProfile(sender).coins)} coins*`;
    } else if (resultado === 'jogador') {
      const prize = betAmount * 2;
      addCoins(sender, prize);
      finalText += `🏆 *VOCÊ GANHOU!* 🎉\n`;
      finalText += `💰 *+${formatCoins(prize)} coins*!\n`;
      finalText += `💳 Saldo: *${formatCoins(getProfile(sender).coins)} coins*`;
    } else {
      finalText += `💸 *BOT GANHOU!*\n`;
      finalText += `Perdeu *${formatCoins(betAmount)} coins*!\n`;
      finalText += `💳 Saldo: *${formatCoins(getProfile(sender).coins)} coins*`;
    }

    try {
      await sock.sendMessage(jid, { text: finalText, edit: animMsg.key });
    } catch(e) {
      await messageQueue.enqueue(sock, jid, { text: finalText });
    }
  }
};
