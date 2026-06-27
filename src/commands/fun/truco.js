import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';
import {
  trucoSessions, createGame, joinGame, startGame,
  playCard, callTruco, acceptTruco, refuseTruco,
  renderScore, renderCard, renderHand, getGame, endGame
} from '../../services/games/TrucoService.js';

// Sessões expostas para o interceptor de mensagens
export const sessions = trucoSessions;

const REGRAS = `🃏 *REGRAS DO TRUCO APOSTADO*
${'─'.repeat(30)}

*🎯 Objetivo:* Chegar a *12 pontos* antes do adversário.

*🃏 Baralho:* 40 cartas (sem 8, 9, 10).
*👥 Jogadores:* 3 a 12 (divididos em 2 equipes).
*💰 Aposta:* Definida ao criar a mesa (por jogador).

*📋 Hierarquia das cartas (sem manilha):*
3 > 2 > A > K > J > Q > 7 > 6 > 5 > 4

*🃏 Manilhas* (determinadas pela carta VIRA):
A carta acima do vira vira manilha.
Ordem das manilhas: ♣Paus > ♥Copas > ♠Espadas > ♦Ouros
_(manilha bate qualquer carta normal)_

*🎮 Como jogar:*
• Cada jogador recebe 3 cartas (enviadas no seu PV)
• No grupo, jogue com *?t 1*, *?t 2* ou *?t 3*
• Vence 2 das 3 rodadas → ganha a mão → ganha pontos

*📢 Truco:*
• *?t truco* → chama Truco (mão vale 3)
• *?t aceitar* → aceita (pode re-trucar)
• *?t recusar* → cede os pontos atuais
• Escala: 1 → 3 → 6 → 9 → 12 pontos

*🏁 Comandos:*
• */truco criar [aposta]* — cria mesa
• */truco entrar* — entra na mesa
• */truco iniciar* — começa (criador)
• */truco status* — vê o placar
• */truco sair* — abandona a mesa
• *?t [1/2/3]* — joga a carta (no grupo)
• *?t truco* — chama truco`;

// ── Comando Principal ─────────────────────────────────────────────────────────
export default {
  name: 'truco',
  aliases: ['tr', 'trucar'],
  category: 'fun',
  description: 'Jogue Truco apostado (3-12 jogadores)! Cartas chegam no seu PV.',
  cooldown: 3000,
  sessions: trucoSessions, // exposto para o interceptor

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName, isGroup } = context;
    if (!isGroup) {
      return await messageQueue.enqueue(sock, jid, {
        text: `🃏 O Truco só pode ser jogado em grupos!`
      }, { quoted: msg });
    }

    const sub = (args[0] || '').toLowerCase();

    // ── /truco regras ────────────────────────────────────────────────────────
    if (sub === 'regras' || sub === 'ajuda' || sub === 'help') {
      return await messageQueue.enqueue(sock, jid, { text: REGRAS }, { quoted: msg });
    }

    // ── /truco criar [aposta] ────────────────────────────────────────────────
    if (sub === 'criar' || sub === 'new' || sub === 'mesa') {
      const bet = parseInt(args[1]) || 0;

      if (bet > 0) {
        const perfil = getProfile(sender);
        if (perfil.coins < bet) {
          return await messageQueue.enqueue(sock, jid, {
            text: `❌ Você não tem *${bet} coins* para abrir esta mesa!\nSeu saldo: *${perfil.coins} coins*`
          }, { quoted: msg });
        }
        removeCoins(sender, bet);
      }

      const res = createGame(jid, sender, pushName, bet);
      if (res.error) {
        return await messageQueue.enqueue(sock, jid, { text: `❌ ${res.error}` }, { quoted: msg });
      }

      return await messageQueue.enqueue(sock, jid, {
        text:
          `🃏 *MESA DE TRUCO CRIADA!*\n` +
          `${'─'.repeat(26)}\n` +
          `👤 Criador: *${pushName}*\n` +
          `💰 Aposta: *${bet > 0 ? bet + ' coins por jogador' : 'sem aposta'}*\n` +
          `👥 Jogadores: 1/${bet > 0 ? '12' : '12'} (mínimo 3)\n\n` +
          `📢 Para entrar: */truco entrar*\n` +
          `▶️ Para começar: */truco iniciar* (criador)\n` +
          `📋 Regras: */truco regras*`
      }, { quoted: msg });
    }

    // ── /truco entrar ────────────────────────────────────────────────────────
    if (sub === 'entrar' || sub === 'join' || sub === 'participar') {
      const game = getGame(jid);
      if (!game) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Não há mesa de Truco neste grupo!\nCrie uma com */truco criar [aposta]*`
        }, { quoted: msg });
      }

      if (game.bet > 0) {
        const perfil = getProfile(sender);
        if (perfil.coins < game.bet) {
          return await messageQueue.enqueue(sock, jid, {
            text: `❌ Você precisa de *${game.bet} coins* para entrar!\nSeu saldo: *${perfil.coins} coins*`
          }, { quoted: msg });
        }
        removeCoins(sender, game.bet);
      }

      const res = joinGame(jid, sender, pushName);
      if (res.error) {
        if (game.bet > 0) addCoins(sender, game.bet); // devolve
        return await messageQueue.enqueue(sock, jid, { text: `❌ ${res.error}` }, { quoted: msg });
      }

      const total = res.game.players.length;
      return await messageQueue.enqueue(sock, jid, {
        text:
          `✅ *${pushName} entrou na mesa!*\n` +
          `👥 Jogadores: *${total}* (${res.game.players.map(p => p.name).join(', ')})\n\n` +
          `${total >= 3 ? `▶️ Pode iniciar com */truco iniciar*` : `⏳ Aguardando mais ${3 - total} jogador(es)...`}`
      }, { quoted: msg });
    }

    // ── /truco iniciar ───────────────────────────────────────────────────────
    if (sub === 'iniciar' || sub === 'start' || sub === 'comecar' || sub === 'começar') {
      const res = startGame(jid, sender);
      if (res.error) {
        return await messageQueue.enqueue(sock, jid, { text: `❌ ${res.error}` }, { quoted: msg });
      }

      const game = res.game;
      const team0 = game.players.filter(p => p.team === 0).map(p => p.name).join(', ');
      const team1 = game.players.filter(p => p.team === 1).map(p => p.name).join(', ');

      await messageQueue.enqueue(sock, jid, {
        text:
          `🃏 *TRUCO — JOGO INICIADO!*\n` +
          `${'─'.repeat(26)}\n` +
          `🟠 *Equipe A:* ${team0}\n` +
          `🔵 *Equipe B:* ${team1}\n\n` +
          `🃏 Vira: *${renderCard(game.vira)}*\n` +
          `⚡ Manilha: *${game.manilhaValue}* (♣>♥>♠>♦)\n\n` +
          `📲 *Suas cartas chegam no seu PV em instantes...*\n` +
          `📋 Jogue com *?t 1*, *?t 2* ou *?t 3* aqui no grupo.\n` +
          `👤 Começa: *${game.players[0].name}*`
      });

      // Envia cartas para cada jogador no PV
      for (const player of game.players) {
        const handText =
          `🃏 *SUAS CARTAS — Truco (${new Date().toLocaleTimeString('pt-BR')})*\n` +
          `${'─'.repeat(26)}\n` +
          `Suas cartas (guarde esse número!):\n` +
          `${renderHand(player.hand)}\n\n` +
          `🃏 Vira: *${renderCard(game.vira)}*  |  Manilha: *${game.manilhaValue}*\n\n` +
          `📢 No grupo, use:\n` +
          `  *?t 1* → joga ${renderCard(player.hand[0])}\n` +
          `  *?t 2* → joga ${renderCard(player.hand[1])}\n` +
          `  *?t 3* → joga ${renderCard(player.hand[2])}\n` +
          `  *?t truco* → chama Truco`;

        try {
          await sock.sendMessage(player.jid, { text: handText });
        } catch (e) {
          // Fallback: mostra codificado no grupo (sem expor as cartas)
          await messageQueue.enqueue(sock, jid, {
            text: `⚠️ Não consegui enviar cartas no PV de *${player.name}*. Verifique se você já conversou com o bot!`
          });
        }
      }

      return;
    }

    // ── /truco status ────────────────────────────────────────────────────────
    if (sub === 'status' || sub === 'placar' || sub === 'mesa') {
      const game = getGame(jid);
      if (!game) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Não há mesa de Truco neste grupo.`
        }, { quoted: msg });
      }
      return await messageQueue.enqueue(sock, jid, {
        text: renderScore(game)
      }, { quoted: msg });
    }

    // ── /truco sair ──────────────────────────────────────────────────────────
    if (sub === 'sair' || sub === 'cancelar' || sub === 'encerrar') {
      const game = getGame(jid);
      if (!game) {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Não há mesa ativa.` }, { quoted: msg });
      }
      if (game.creator !== sender && !context.isOwner && !context.isAdmin) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Apenas o criador ou admin pode encerrar a mesa.`
        }, { quoted: msg });
      }

      // Devolve apostas se o jogo não chegou ao fim
      if (game.status !== 'finished' && game.bet > 0) {
        for (const p of game.players) {
          addCoins(p.jid, game.bet);
        }
      }

      endGame(jid);
      return await messageQueue.enqueue(sock, jid, {
        text: `🃏 Mesa de Truco encerrada. ${game.bet > 0 ? 'Apostas devolvidas.' : ''}`
      }, { quoted: msg });
    }

    // ── /truco (sem args) → ajuda rápida ────────────────────────────────────
    return await messageQueue.enqueue(sock, jid, {
      text:
        `🃏 *TRUCO APOSTADO*\n` +
        `${'─'.repeat(26)}\n\n` +
        `• */truco criar [coins]* — abre mesa\n` +
        `• */truco entrar* — entra na mesa\n` +
        `• */truco iniciar* — começa o jogo\n` +
        `• */truco status* — ver placar\n` +
        `• */truco sair* — encerrar mesa\n` +
        `• */truco regras* — regras completas\n\n` +
        `_Durante o jogo, use *?t 1/2/3* para jogar,_\n_e *?t truco* para chamar truco!_`
    }, { quoted: msg });
  },

  // ── Interceptor de ?t (chamado pelo messages.upsert) ─────────────────────
  handleInteraction: async (sock, msg, jid, sender, pushName, text) => {
    const game = getGame(jid);
    if (!game || game.status !== 'playing') return false;

    const t = text.toLowerCase().trim();

    // Joga carta: ?t 1, ?t 2, ?t 3
    if (/^[123]$/.test(t)) {
      const res = playCard(jid, sender, parseInt(t));
      if (res.error) {
        await messageQueue.enqueue(sock, jid, { text: `❌ ${res.error}` }, { quoted: msg });
        return true;
      }

      const { cardPlayed, roundComplete, nextPlayer, roundWinner, tie, cardsPlayed, handOver, gameOver, winners, losers, champion, score } = res;
      const game2 = res.game;

      let groupMsg = `🃏 *${pushName}* jogou *${renderCard(cardPlayed)}*\n`;

      if (roundComplete) {
        groupMsg += `\n${'─'.repeat(22)}\n`;
        groupMsg += `*Cartas desta rodada:*\n`;
        for (const { playerIdx, card } of (cardsPlayed || [])) {
          groupMsg += `  ${game2.players[playerIdx]?.name || '?'}: ${renderCard(card)}\n`;
        }

        if (tie) {
          groupMsg += `\n⚖️ *Rodada empatada!*`;
        } else if (roundWinner) {
          const wName = game2.players[roundWinner.playerIdx || 0]?.name || `Equipe ${roundWinner.team === 0 ? 'A' : 'B'}`;
          groupMsg += `\n🏆 *Vencedor da rodada: ${wName}!*`;
        }

        if (handOver) {
          if (gameOver && champion >= 0) {
            const winnerNames = (winners || []).map(p => p.name).join(', ');
            const totalPot    = game2.bet * game2.players.length;

            groupMsg +=
              `\n\n🎉 *FIM DE JOGO!*\n` +
              `🏆 Equipe vencedora: *${winnerNames}*\n` +
              `📊 Placar: 🟠 ${score[0]} × ${score[1]} 🔵\n`;

            if (game2.bet > 0) {
              const share = Math.floor(totalPot / (winners || []).length);
              for (const w of (winners || [])) addCoins(w.jid, share);
              groupMsg += `💰 Premiação: *${share} coins cada!* (pot: ${totalPot})`;
            }

            endGame(jid);
          } else {
            groupMsg +=
              `\n\n📦 *Nova mão!* | Placar: 🟠${score[0]} × ${score[1]}🔵\n` +
              `🃏 Vira: *${renderCard(game2.vira)}*  |  Manilha: *${game2.manilhaValue}*\n` +
              `👤 Começa: *${game2.players[game2.currentRound.turn]?.name}*\n` +
              `📲 *Novas cartas chegando no PV...*`;

            // Re-envia cartas no PV
            for (const p of game2.players) {
              const handText =
                `🃏 *NOVA MÃO!*\n` +
                `Suas cartas:\n${renderHand(p.hand)}\n\n` +
                `Vira: ${renderCard(game2.vira)} | Manilha: *${game2.manilhaValue}*\n` +
                `*?t 1*, *?t 2*, *?t 3* para jogar`;
              try { await sock.sendMessage(p.jid, { text: handText }); } catch (_) {}
            }
          }
        } else {
          groupMsg += `\n\n${renderScore(game2)}`;
        }
      } else {
        if (nextPlayer) groupMsg += `\n👤 Vez de: *${nextPlayer.name}*`;
      }

      await messageQueue.enqueue(sock, jid, { text: groupMsg }, { quoted: msg });
      return true;
    }

    // Truco
    if (t === 'truco') {
      const res = callTruco(jid, sender);
      if (res.error) {
        await messageQueue.enqueue(sock, jid, { text: `❌ ${res.error}` }, { quoted: msg });
        return true;
      }
      const adversTeam = res.game.players
        .filter(p => p.team !== res.game.trucoState.callerTeam)
        .map(p => p.name).join(', ');
      await messageQueue.enqueue(sock, jid, {
        text:
          `📢 *${res.caller}* grita: *${res.nextName.toUpperCase()}!* 🗣️\n\n` +
          `⚠️ @${adversTeam} — respondam com:\n` +
          `  *?t aceitar* → aceita os ${res.nextValue} pontos\n` +
          `  *?t recusar* → cede os pontos atuais`,
        mentions: res.game.players.filter(p => p.team !== res.game.trucoState.callerTeam).map(p => p.jid)
      });
      return true;
    }

    // Aceitar truco
    if (t === 'aceitar' || t === 'aceita') {
      const res = acceptTruco(jid, sender);
      if (res.error) {
        await messageQueue.enqueue(sock, jid, { text: `❌ ${res.error}` }, { quoted: msg });
        return true;
      }
      await messageQueue.enqueue(sock, jid, {
        text:
          `✅ *${pushName}* aceitou! Mão vale agora *${res.value} pontos* (${res.name}).\n` +
          `👤 Vez de: *${res.game.players[res.game.currentRound.turn]?.name}*`
      });
      return true;
    }

    // Recusar truco
    if (t === 'recusar' || t === 'recusa' || t === 'correr') {
      const res = refuseTruco(jid, sender);
      if (res.error) {
        await messageQueue.enqueue(sock, jid, { text: `❌ ${res.error}` }, { quoted: msg });
        return true;
      }
      let txt = `🏳️ *${pushName}* recusou! Equipe ${res.game.trucoState === null ? 'adversária' : 'A'} ganha *${res.gainedPoints} ponto(s)*.\n`;
      if (res.gameOver) {
        const wTeam = res.winnerTeam;
        const wNames = res.game.players.filter(p => p.team === wTeam).map(p => p.name).join(', ');
        txt +=`\n🎉 *FIM DE JOGO!* Vencedor: *${wNames}*`;
        if (res.game.bet > 0) {
          const winners = res.game.players.filter(p => p.team === wTeam);
          const pot = res.game.bet * res.game.players.length;
          const share = Math.floor(pot / winners.length);
          for (const w of winners) addCoins(w.jid, share);
          txt += `\n💰 Premiação: *${share} coins cada!*`;
        }
        endGame(jid);
      } else {
        txt += `📊 Placar: 🟠${res.game.score[0]} × ${res.game.score[1]}🔵`;
      }
      await messageQueue.enqueue(sock, jid, { text: txt });
      return true;
    }

    return false;
  }
};
