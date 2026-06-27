import messageQueue from '../../core/MessageQueue.js';
import profilesRepository from '../../database/profiles.js';
import Minesweeper from '../../services/games/Minesweeper.js';

export const sessions = new Map();

const HELP_TEXT = `💣 *CAMPO MINADO* 💣

Como jogar:
1️⃣  Inicie o jogo: */minado*
2️⃣  Revele células digitando a coordenada (ex: *A3*, *C5*) — sem /comando!
3️⃣  Evite as 💣 *5 minas* escondidas no tabuleiro 5×5!
4️⃣  Para cancelar: */minado cancelar*

📋 *Legenda:*
⬛ = Não revelado
🟩 = Seguro (sem mina vizinha)
1️⃣-5️⃣ = Nº de minas vizinhas
💥 = MINA!

🏆 Revelar todas as células seguras = *+60 coins*!`;

export default {
  name: 'minado',
  sessions,
  aliases: ['campominado', 'minesweeper'],
  category: 'fun',
  description: 'Jogue campo minado e sobreviva às bombas!',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName, isOwner, isAdmin } = context;

    // ── Sem argumentos: iniciar ou mostrar status ──
    if (args.length === 0) {
      if (sessions.has(jid)) {
        const game = sessions.get(jid);
        return await messageQueue.enqueue(sock, jid, {
          text: `💣 *Campo Minado em andamento!*\n\nDigite uma coordenada (*A1* a *E5*) para revelar (sem /comando).\n⏳ Tempo restante: ${game.timeRemaining}s\n📊 ${game.safeRevealed}/${game.totalSafe} células seguras reveladas\n\n${game.render()}`
        }, { quoted: msg });
      }

      const game = new Minesweeper(sender);
      sessions.set(jid, game);

      return await messageQueue.enqueue(sock, jid, {
        text: `💣 *CAMPO MINADO INICIADO!* 💣\n\nTabuleiro 5×5 com *5 minas* escondidas!\n\nDigite uma coordenada (*A1* a *E5*) — sem /comando — para revelar.\n⏳ Tempo: ${game.maxTime / 1000}s\n\n${game.render()}\n\n_Dica: Linhas = A a E | Colunas = 1 a 5_`
      });
    }

    const action = args[0].toLowerCase();

    // ── Cancelar ──
    if (action === 'cancelar' || action === 'sair') {
      if (!sessions.has(jid)) {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Não há nenhum campo minado em andamento.` });
      }
      const game = sessions.get(jid);
      if (game.player !== sender && !isOwner && !isAdmin) {
        return await messageQueue.enqueue(sock, jid, { text: `⚠️ Apenas o jogador ou um admin pode cancelar o jogo.` }, { quoted: msg });
      }
      sessions.delete(jid);
      return await messageQueue.enqueue(sock, jid, {
        text: `✅ Campo Minado cancelado por *${pushName}*.\n\n${game.render(true)}`
      });
    }

    // ── Jogada via /minado A3 ──
    const coord = Minesweeper.parseCoord(action.toUpperCase());
    if (coord) {
      return await _handleReveal(sock, msg, jid, sender, pushName, coord, sessions);
    }

    return await messageQueue.enqueue(sock, jid, { text: HELP_TEXT }, { quoted: msg });
  },

  // ── Handler interceptado (sem prefixo) ──
  handleInteraction: async (sock, msg, jid, sender, pushName, text) => {
    if (!sessions.has(jid)) return false;
    const coord = Minesweeper.parseCoord(text.toUpperCase());
    if (!coord) return false;
    await _handleReveal(sock, msg, jid, sender, pushName, coord, sessions);
    return true;
  }
};

async function _handleReveal(sock, msg, jid, sender, pushName, [row, col], sessions) {
  const game = sessions.get(jid);
  if (!game) return;

  // Verificar timeout
  if (game.timeRemaining <= 0) {
    sessions.delete(jid);
    return await messageQueue.enqueue(sock, jid, {
      text: `⏰ *TEMPO ESGOTADO!* O campo minado expirou.\n\n${game.render(true)}`
    });
  }

  const colLetters = ['A', 'B', 'C', 'D', 'E'];
  const coordStr = `${colLetters[row]}${col + 1}`;
  const status = game.reveal(row, col);

  if (status === 0) {
    return await messageQueue.enqueue(sock, jid, {
      text: `⚠️ A célula *${coordStr}* já foi revelada!`
    }, { quoted: msg });
  }

  if (status === -2) {
    sessions.delete(jid);
    return await messageQueue.enqueue(sock, jid, {
      text: `⏰ *TEMPO ESGOTADO!* O campo minado expirou.\n\n${game.render(true)}`
    });
  }

  if (status === -1) {
    sessions.delete(jid);
    return await messageQueue.enqueue(sock, jid, {
      text: `💥 *BOOM! ${pushName} pisou em uma MINA!* 💥\n\nCoordenada: *${coordStr}*\n\nGame over! Aqui estava o campo:\n\n${game.render(true)}`
    });
  }

  if (status === 2) {
    profilesRepository.addCoins(sender, 60);
    sessions.delete(jid);
    return await messageQueue.enqueue(sock, jid, {
      text: `🏆 *VITÓRIA! ${pushName} limpou o campo!* 🏆\n\n🎯 ${game.moves} jogadas | ⏱️ Tempo restante: ${game.timeRemaining}s\n💳 *+60 coins* depositados!\n\n${game.render(true)}`
    });
  }

  // Status 1: revelado com sucesso
  return await messageQueue.enqueue(sock, jid, {
    text: `✅ *${coordStr}* revelado!\n\n📊 ${game.safeRevealed}/${game.totalSafe} células seguras | ⏳ ${game.timeRemaining}s\n\n${game.render()}\n\nDigite outra coordenada (*A1* a *E5*) para continuar.`
  });
}
