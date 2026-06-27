import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const delay = ms => new Promise(r => setTimeout(r, ms));

const NUMEROS = Array.from({ length: 37 }, (_, i) => i); // 0-36

const VERMELHOS = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
const PRETOS = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];

function corNumero(n) {
  if (n === 0) return '🟢';
  return VERMELHOS.includes(n) ? '🔴' : '⚫';
}

function avaliarAposta(tipo, valor, numero) {
  tipo = tipo.toLowerCase();

  if (tipo === 'numero' || /^\d+$/.test(tipo)) {
    const n = parseInt(tipo === 'numero' ? valor : tipo);
    if (n === numero) return { mult: 35, label: `Número ${n}` };
    return null;
  }
  if (tipo === 'vermelho' || tipo === 'red' || tipo === 'v') {
    if (VERMELHOS.includes(numero)) return { mult: 2, label: 'Vermelho' };
    return null;
  }
  if (tipo === 'preto' || tipo === 'black' || tipo === 'p') {
    if (PRETOS.includes(numero)) return { mult: 2, label: 'Preto' };
    return null;
  }
  if (tipo === 'par' || tipo === 'even') {
    if (numero !== 0 && numero % 2 === 0) return { mult: 2, label: 'Par' };
    return null;
  }
  if (tipo === 'impar' || tipo === 'ímpar' || tipo === 'odd') {
    if (numero % 2 !== 0) return { mult: 2, label: 'Ímpar' };
    return null;
  }
  if (tipo === 'baixo' || tipo === '1-18') {
    if (numero >= 1 && numero <= 18) return { mult: 2, label: '1-18' };
    return null;
  }
  if (tipo === 'alto' || tipo === '19-36') {
    if (numero >= 19 && numero <= 36) return { mult: 2, label: '19-36' };
    return null;
  }
  if (tipo === 'coluna1' || tipo === 'c1') {
    const col = [1,4,7,10,13,16,19,22,25,28,31,34];
    if (col.includes(numero)) return { mult: 3, label: 'Coluna 1' };
    return null;
  }
  if (tipo === 'coluna2' || tipo === 'c2') {
    const col = [2,5,8,11,14,17,20,23,26,29,32,35];
    if (col.includes(numero)) return { mult: 3, label: 'Coluna 2' };
    return null;
  }
  if (tipo === 'coluna3' || tipo === 'c3') {
    const col = [3,6,9,12,15,18,21,24,27,30,33,36];
    if (col.includes(numero)) return { mult: 3, label: 'Coluna 3' };
    return null;
  }
  return undefined; // tipo inválido
}

export default {
  name: 'roleta',
  aliases: ['roulette', 'rlt'],
  category: 'fun',
  description: 'Jogue na roleta europeia! 🎡',
  cooldown: 6000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    const tipoAposta = args[0];
    const bet = parseInt(args[1]);

    if (!tipoAposta || isNaN(bet) || bet <= 0) {
      const p = getProfile(sender);
      return await messageQueue.enqueue(sock, jid, {
        text: `🎡 *ROLETA EUROPEIA*\n\n` +
              `*Tipos de aposta:*\n` +
              `• \`vermelho\` / \`preto\` — 2x\n` +
              `• \`par\` / \`impar\` — 2x\n` +
              `• \`baixo\` (1-18) / \`alto\` (19-36) — 2x\n` +
              `• \`coluna1\` / \`coluna2\` / \`coluna3\` — 3x\n` +
              `• \`numero\` (ex: 17) — 35x 🎯\n\n` +
              `*Uso:* /roleta [tipo] [valor]\n` +
              `*Ex:* /roleta vermelho 100\n` +
              `*Ex:* /roleta 17 200\n\n` +
              `💳 Saldo: *${formatCoins(p.coins)} coins*`
      }, { quoted: msg });
    }

    if (bet < 5) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Aposta mínima: *5 coins*`
      }, { quoted: msg });
    }

    // Aposta em número direto (ex: /roleta 17 100)
    let tipoFinal = tipoAposta;
    let valorNumero = null;
    if (/^\d+$/.test(tipoAposta)) {
      valorNumero = parseInt(tipoAposta);
      if (valorNumero < 0 || valorNumero > 36) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Número inválido! Use de *0 a 36*.`
        }, { quoted: msg });
      }
      tipoFinal = 'numero';
    }

    if (!removeCoins(sender, bet)) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Saldo insuficiente! Você tem *${formatCoins(getProfile(sender).coins)} coins*.`
      }, { quoted: msg });
    }

    // Animação
    const spinMsg = await messageQueue.enqueue(sock, jid, {
      text: `🎡 *ROLETA GIRANDO...*\n\n🌀 🌀 🌀\n\n_A bola está rodando..._`
    }, { quoted: msg });

    await delay(1000);
    try { await sock.sendMessage(jid, { text: `🎡 *ROLETA GIRANDO...*\n\n🔴 ⚫ 🔴\n\n_Vai cair em qual número?_`, edit: spinMsg.key }); } catch(e) {}
    await delay(1000);
    try { await sock.sendMessage(jid, { text: `🎡 *ROLETA GIRANDO...*\n\n⚫ 🔴 ⚫\n\n_Quase parando..._`, edit: spinMsg.key }); } catch(e) {}
    await delay(1000);

    // Resultado
    const numero = NUMEROS[Math.floor(Math.random() * NUMEROS.length)];
    const cor = corNumero(numero);

    const resultado = avaliarAposta(tipoFinal, String(valorNumero ?? ''), numero);

    let finalText;
    if (resultado && resultado.mult) {
      const prize = Math.floor(bet * resultado.mult);
      addCoins(sender, prize);
      const profit = prize - bet;
      const saldo = getProfile(sender).coins;
      finalText = `🎡 *ROLETA — RESULTADO*\n\n` +
                  `${cor} *Caiu no ${numero}!*\n\n` +
                  `✅ *Aposta (${resultado.label}): ACERTOU!*\n` +
                  `💰 Prêmio: *+${formatCoins(prize)} coins* (${resultado.mult}x)\n` +
                  `💳 Saldo: *${formatCoins(saldo)} coins*`;
    } else if (resultado === null) {
      const saldo = getProfile(sender).coins;
      finalText = `🎡 *ROLETA — RESULTADO*\n\n` +
                  `${cor} *Caiu no ${numero}!*\n\n` +
                  `❌ Você perdeu *${formatCoins(bet)} coins*!\n` +
                  `💳 Saldo: *${formatCoins(saldo)} coins*`;
    } else {
      // Tipo inválido - devolve aposta
      addCoins(sender, bet);
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Tipo de aposta inválido!\n\nUse: vermelho, preto, par, impar, baixo, alto, coluna1-3 ou um número (0-36)`
      }, { quoted: msg });
    }

    try {
      await sock.sendMessage(jid, { text: finalText, edit: spinMsg.key });
    } catch(e) {
      await messageQueue.enqueue(sock, jid, { text: finalText });
    }
  }
};
