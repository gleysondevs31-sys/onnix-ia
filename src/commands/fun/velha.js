import messageQueue from '../../core/MessageQueue.js';
import profilesRepository from '../../database/profiles.js';
import TicTacToe from '../../services/games/TicTacToe.js';
import { isSameUser } from '../../utils/lidUtils.js';

export const sessions = new Map();

const HELP_TEXT = `🎮 *JOGO DA VELHA* 🎮

Como jogar:
1️⃣  Desafie alguém: */velha @usuario*
2️⃣  O desafiado responde *aceitar* ou *recusar* (sem /comando!)
3️⃣  Na sua vez, envie um número de *1 a 9* — sem /comando!
4️⃣  Para cancelar: */velha cancelar*

📋 *Posições do tabuleiro:*
 1️⃣ │ 2️⃣ │ 3️⃣
 ───────────
 4️⃣ │ 5️⃣ │ 6️⃣
 ───────────
 7️⃣ │ 8️⃣ │ 9️⃣

🏆 Vencedor recebe *+50 coins*!`;

export default {
  name: 'velha',
  sessions,
  aliases: ['jogodavelha', 'tictactoe'],
  category: 'fun',
  description: 'Jogue o jogo da velha contra um amigo e ganhe coins!',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, senderRaw, mentionedJid, pushName, isOwner, isAdmin } = context;

    const action = (args[0] || '').toLowerCase().trim();

    // ══════════════════════════════════════════
    // CANCELAR
    // ══════════════════════════════════════════
    if (action === 'cancelar' || action === 'sair') {
      if (!sessions.has(jid)) {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Não há nenhum jogo da velha em andamento neste grupo.` }, { quoted: msg });
      }
      const session = sessions.get(jid);
      const isPlayer = _isPlayer(sender, senderRaw, session);
      if (!isPlayer && !isOwner && !isAdmin) {
        return await messageQueue.enqueue(sock, jid, { text: `⚠️ Apenas os participantes do jogo podem cancelar.` }, { quoted: msg });
      }
      sessions.delete(jid);
      return await messageQueue.enqueue(sock, jid, { text: `✅ Jogo da velha cancelado por *${pushName}*.` });
    }

    // ══════════════════════════════════════════
    // ACEITAR DESAFIO
    // ══════════════════════════════════════════
    if (action === 'aceitar') {
      if (!sessions.has(jid)) return;
      const session = sessions.get(jid);
      if (session.state !== 'WAITING') return;

      // Qualquer um pode tentar aceitar — mas só o desafiado confirma
      if (!isSameUser(sender, session.target) && !isSameUser(senderRaw, session.target)) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Apenas @${session.target.split('@')[0]} pode aceitar o desafio!`,
          mentions: [session.target]
        }, { quoted: msg });
      }

      session.state = 'PLAYING';
      session.game = new TicTacToe(session.challenger, session.target);
      sessions.set(jid, session);

      const board = session.game.renderEmojis();
      return await messageQueue.enqueue(sock, jid, {
        text: `🎮 *JOGO DA VELHA COMEÇOU!* 🎮\n\n❌ @${session.challenger.split('@')[0]} (Desafiante)\n⭕ @${session.target.split('@')[0]} (Desafiado)\n\n❌ começa! Digite um número de *1 a 9* — sem /comando!\n${board}`,
        mentions: [session.challenger, session.target]
      });
    }

    // ══════════════════════════════════════════
    // RECUSAR DESAFIO
    // ══════════════════════════════════════════
    if (action === 'recusar') {
      if (!sessions.has(jid)) return;
      const session = sessions.get(jid);
      if (session.state !== 'WAITING') return;
      if (!_isPlayer(sender, senderRaw, session)) return;
      sessions.delete(jid);
      return await messageQueue.enqueue(sock, jid, { text: `❌ Desafio recusado por *${pushName}*.` });
    }

    // ══════════════════════════════════════════
    // JOGADA NUMÉRICA (1-9)
    // ══════════════════════════════════════════
    const move = parseInt(action);
    if (!isNaN(move) && move >= 1 && move <= 9) {
      if (!sessions.has(jid)) return; // sem jogo, ignora silenciosamente

      const session = sessions.get(jid);

      if (session.state === 'WAITING') {
        return await messageQueue.enqueue(sock, jid, { text: `⏳ Aguarde o desafiado *aceitar* o jogo primeiro!` }, { quoted: msg });
      }

      const game = session.game;

      // Verificar se é jogador usando isSameUser (robusto a LID/JID)
      const isX = isSameUser(sender, game.playerX) || isSameUser(senderRaw, game.playerX);
      const isO = isSameUser(sender, game.playerO) || isSameUser(senderRaw, game.playerO);

      if (!isX && !isO) return; // Não é jogador, ignora

      const playerSymbol = isX ? 0 : 1;
      const status = game.turn(playerSymbol, move - 1);

      if (status === -2) {
        return await messageQueue.enqueue(sock, jid, { text: `⏰ Não é o seu turno! Aguarde o outro jogador.` }, { quoted: msg });
      }
      if (status === 0) {
        return await messageQueue.enqueue(sock, jid, { text: `⚠️ Posição *${move}* já ocupada! Escolha outra (1-9).` }, { quoted: msg });
      }
      if (status !== 1) return; // -1 inválido, -3 jogo acabado

      // Verificar vitória
      const winnerJid = game.winner;
      if (winnerJid) {
        profilesRepository.addCoins(winnerJid, 50);
        const winSymbol = isSameUser(winnerJid, game.playerX) ? '❌' : '⭕';
        sessions.delete(jid);
        return await messageQueue.enqueue(sock, jid, {
          text: `🏆 *TEMOS UM VENCEDOR!* 🏆\n\n@${winnerJid.split('@')[0]} (${winSymbol}) venceu!\n💳 *+50 coins* depositados!\n${game.renderEmojis()}`,
          mentions: [game.playerX, game.playerO]
        });
      }

      // Verificar empate
      if (game.isDraw) {
        sessions.delete(jid);
        return await messageQueue.enqueue(sock, jid, {
          text: `⚖️ *DEU VELHA! EMPATE!* ⚖️\n\nNinguém ganhou desta vez...\n${game.renderEmojis()}`,
          mentions: [game.playerX, game.playerO]
        });
      }

      // Próxima jogada
      const nextJid = game.currentTurn;
      const nextSymbol = isSameUser(nextJid, game.playerX) ? '❌' : '⭕';
      return await messageQueue.enqueue(sock, jid, {
        text: `✅ *${pushName}* jogou!\n\nVez de @${nextJid.split('@')[0]} (${nextSymbol})!\nDigite um número de *1 a 9*.\n${game.renderEmojis()}`,
        mentions: [nextJid]
      });
    }

    // ══════════════════════════════════════════
    // DESAFIAR ALGUÉM: /velha @usuario
    // ══════════════════════════════════════════
    let targetJid = mentionedJid?.[0];
    if (!targetJid && msg.message?.extendedTextMessage?.contextInfo?.participant) {
      targetJid = msg.message.extendedTextMessage.contextInfo.participant;
    }

    if (targetJid) {
      if (sessions.has(jid)) {
        return await messageQueue.enqueue(sock, jid, { text: `⚠️ Já existe um jogo em andamento! Use */velha cancelar* primeiro.` }, { quoted: msg });
      }
      if (isSameUser(targetJid, sender) || isSameUser(targetJid, senderRaw)) {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Você não pode jogar contra si mesmo!` }, { quoted: msg });
      }

      sessions.set(jid, { state: 'WAITING', challenger: sender, target: targetJid });

      return await messageQueue.enqueue(sock, jid, {
        text: `⚔️ *DESAFIO DE JOGO DA VELHA!* ⚔️\n\n@${sender.split('@')[0]} desafiou @${targetJid.split('@')[0]} para uma partida!\n\n👉 @${targetJid.split('@')[0]}, responda *aceitar* ou *recusar* (sem /comando!)`,
        mentions: [sender, targetJid]
      });
    }

    // ══════════════════════════════════════════
    // SEM ARGUMENTOS: status ou ajuda
    // ══════════════════════════════════════════
    if (!action) {
      if (sessions.has(jid)) {
        const session = sessions.get(jid);
        if (session.state === 'WAITING') {
          return await messageQueue.enqueue(sock, jid, {
            text: `⏳ Aguardando @${session.target.split('@')[0]} *aceitar* ou *recusar* o desafio.`,
            mentions: [session.target]
          }, { quoted: msg });
        }
        if (session.state === 'PLAYING') {
          const next = session.game.currentTurn;
          const sym = isSameUser(next, session.game.playerX) ? '❌' : '⭕';
          return await messageQueue.enqueue(sock, jid, {
            text: `🎮 Jogo em andamento!\n\nVez de @${next.split('@')[0]} (${sym})\nDigite um número de *1 a 9*.\n${session.game.renderEmojis()}`,
            mentions: [next]
          }, { quoted: msg });
        }
      }
      return await messageQueue.enqueue(sock, jid, { text: HELP_TEXT }, { quoted: msg });
    }

    return await messageQueue.enqueue(sock, jid, { text: HELP_TEXT }, { quoted: msg });
  }
};

/** Verifica se sender (JID ou LID) é participante da sessão */
function _isPlayer(sender, senderRaw, session) {
  const ids = [sender, senderRaw].filter(Boolean);
  const targets = [session.challenger, session.target];
  if (session.game) {
    targets.push(session.game.playerX, session.game.playerO);
  }
  return ids.some(id => targets.some(t => isSameUser(id, t)));
}
