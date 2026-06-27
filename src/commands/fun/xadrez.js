import messageQueue from '../../core/MessageQueue.js';
import { getProfile, addCoins, removeCoins } from '../../database/profiles.js';

// ─────────────────────────────────────────────────────────────────────────────
// Representação do tabuleiro como array 8x8
// Peças: maiúsculas = brancas, minúsculas = pretas
// K=Rei Q=Dama R=Torre B=Bispo N=Cavalo P=Peão
// ─────────────────────────────────────────────────────────────────────────────

const PIECE_UNICODE = {
  K:'♔', Q:'♕', R:'♖', B:'♗', N:'♘', P:'♙',
  k:'♚', q:'♛', r:'♜', b:'♝', n:'♞', p:'♟',
};

function initialBoard() {
  return [
    ['r','n','b','q','k','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','Q','K','B','N','R'],
  ];
}

function renderBoard(board, perspective = 'white') {
  const files = '  a b c d e f g h';
  const rows = [];
  rows.push(files);

  const rankOrder = perspective === 'white' ? [0,1,2,3,4,5,6,7] : [7,6,5,4,3,2,1,0];

  for (const r of rankOrder) {
    const rank     = 8 - r;
    const rankNum  = perspective === 'white' ? rank : 9 - rank;
    let row        = `${rankNum} `;

    for (let f = 0; f < 8; f++) {
      const piece = board[r][f];
      const isLight = (r + f) % 2 === 0;
      const empty   = isLight ? '□' : '■';
      row += piece ? (PIECE_UNICODE[piece] || piece) : empty;
      row += ' ';
    }
    rows.push(row.trimEnd());
  }

  rows.push(files);
  return rows.join('\n');
}

// Parsing de notação algébrica (ex: "e2e4", "e2 e4", "e2-e4")
function parseMove(str) {
  const clean = str.replace(/[-\s]/g, '').toLowerCase();
  if (!/^[a-h][1-8][a-h][1-8]$/.test(clean)) return null;
  const fc = clean.charCodeAt(0) - 97; // file from (0-7)
  const rc = 8 - parseInt(clean[1]);   // rank from
  const ft = clean.charCodeAt(2) - 97; // file to
  const rt = 8 - parseInt(clean[3]);   // rank to
  return { fc, rc, ft, rt };
}

function isWhite(p) { return p && p === p.toUpperCase(); }
function isBlack(p) { return p && p === p.toLowerCase(); }
function isSameColor(a, b) {
  if (!a || !b) return false;
  return (isWhite(a) && isWhite(b)) || (isBlack(a) && isBlack(b));
}

// Validação básica de movimento (sem xeque antecipado)
function isLegalMove(board, move, whiteTurn) {
  const { fc, rc, ft, rt } = move;
  const piece = board[rc][fc];
  if (!piece) return { ok: false, reason: 'Não há peça nessa posição!' };

  const myColor = whiteTurn ? isWhite : isBlack;
  if (!myColor(piece)) return { ok: false, reason: `Não é sua peça!` };

  const target = board[rt][ft];
  if (isSameColor(piece, target)) return { ok: false, reason: 'Posição ocupada pela sua peça!' };

  const p = piece.toUpperCase();
  const dr = rt - rc, df = ft - fc;
  const absDr = Math.abs(dr), absDf = Math.abs(df);

  if (p === 'P') {
    const dir = whiteTurn ? -1 : 1;
    const startRow = whiteTurn ? 6 : 1;
    // Avanço simples
    if (df === 0 && dr === dir && !target) return { ok: true };
    // Avanço duplo
    if (df === 0 && dr === 2 * dir && rc === startRow && !target && !board[rc + dir][fc]) return { ok: true };
    // Captura diagonal
    if (absDf === 1 && dr === dir && target && !isSameColor(piece, target)) return { ok: true };
    return { ok: false, reason: 'Movimento inválido para o Peão!' };
  }

  if (p === 'N') {
    if ((absDr === 2 && absDf === 1) || (absDr === 1 && absDf === 2)) return { ok: true };
    return { ok: false, reason: 'Movimento inválido para o Cavalo!' };
  }

  if (p === 'K') {
    if (absDr <= 1 && absDf <= 1) return { ok: true };
    return { ok: false, reason: 'Movimento inválido para o Rei!' };
  }

  if (p === 'B') {
    if (absDr !== absDf) return { ok: false, reason: 'Bispo move em diagonal!' };
    return _pathClear(board, rc, fc, rt, ft) ? { ok: true } : { ok: false, reason: 'Caminho bloqueado!' };
  }

  if (p === 'R') {
    if (dr !== 0 && df !== 0) return { ok: false, reason: 'Torre move em linha reta!' };
    return _pathClear(board, rc, fc, rt, ft) ? { ok: true } : { ok: false, reason: 'Caminho bloqueado!' };
  }

  if (p === 'Q') {
    if (dr !== 0 && df !== 0 && absDr !== absDf) return { ok: false, reason: 'Dama: linha reta ou diagonal!' };
    return _pathClear(board, rc, fc, rt, ft) ? { ok: true } : { ok: false, reason: 'Caminho bloqueado!' };
  }

  return { ok: false, reason: 'Movimento inválido!' };
}

function _pathClear(board, r0, f0, r1, f1) {
  const dr = Math.sign(r1 - r0);
  const df = Math.sign(f1 - f0);
  let r = r0 + dr, f = f0 + df;
  while (r !== r1 || f !== f1) {
    if (board[r][f]) return false;
    r += dr; f += df;
  }
  return true;
}

function applyMove(board, move, promotion = 'Q') {
  const nb = board.map(r => [...r]);
  const piece = nb[move.rc][move.fc];
  nb[move.rc][move.fc] = null;
  // Promoção de peão
  if (piece?.toUpperCase() === 'P' && (move.rt === 0 || move.rt === 7)) {
    nb[move.rt][move.ft] = isWhite(piece) ? promotion.toUpperCase() : promotion.toLowerCase();
  } else {
    nb[move.rt][move.ft] = piece;
  }
  return nb;
}

function findKing(board, white) {
  const k = white ? 'K' : 'k';
  for (let r = 0; r < 8; r++) {
    for (let f = 0; f < 8; f++) {
      if (board[r][f] === k) return { r, f };
    }
  }
  return null;
}

function isInCheck(board, whiteTurn) {
  const king = findKing(board, whiteTurn);
  if (!king) return true;
  // Verifica se alguma peça adversária ataca o rei
  const opp = !whiteTurn;
  for (let r = 0; r < 8; r++) {
    for (let f = 0; f < 8; f++) {
      const p = board[r][f];
      if (!p) continue;
      if (opp ? !isBlack(p) : !isWhite(p)) continue;
      const move = { rc: r, fc: f, rt: king.r, ft: king.f };
      const legal = isLegalMove(board, move, opp);
      if (legal.ok) return true;
    }
  }
  return false;
}

// Sessões: groupJid → game
export const sessions = new Map();

export default {
  name: 'xadrez',
  aliases: ['chess', 'xd'],
  category: 'fun',
  description: 'Jogue xadrez apostado contra outro jogador no grupo!',
  cooldown: 3000,
  sessions,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName, isGroup, mentionedJid } = context;

    if (!isGroup) {
      return await messageQueue.enqueue(sock, jid, {
        text: `♟️ O Xadrez só pode ser jogado em grupos!`
      }, { quoted: msg });
    }

    const sub = (args[0] || '').toLowerCase();

    // ── /xadrez @jogador [aposta] — desafiar ─────────────────────────────────
    if (mentionedJid?.length > 0 || (!isNaN(args[0]) && args[0] !== '')) {
      const opponent = mentionedJid?.[0];
      const bet = parseInt(args.find(a => !isNaN(a))) || 0;

      if (!opponent || opponent === sender) {
        return await messageQueue.enqueue(sock, jid, {
          text: `♟️ Mencione um adversário!\nEx: */xadrez @jogador 200*`
        }, { quoted: msg });
      }

      if (sessions.has(jid)) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Já há uma partida de xadrez em andamento neste grupo!`
        }, { quoted: msg });
      }

      if (bet > 0) {
        const p = getProfile(sender);
        if (p.coins < bet) {
          return await messageQueue.enqueue(sock, jid, {
            text: `❌ Você não tem *${bet} coins*! Seu saldo: *${p.coins}*`
          }, { quoted: msg });
        }
        removeCoins(sender, bet);
      }

      sessions.set(jid, {
        status:   'pending',
        white:    { jid: sender, name: pushName },
        black:    { jid: opponent, name: '?' },
        board:    initialBoard(),
        whiteTurn: true,
        bet,
        history:   [],
        lastActivity: Date.now(),
        moveCount: 0,
      });

      return await messageQueue.enqueue(sock, jid, {
        text:
          `♟️ *DESAFIO DE XADREZ!*\n` +
          `${'─'.repeat(24)}\n` +
          `⚪ *${pushName}* desafia @${opponent.split('@')[0]}!\n` +
          `💰 Aposta: *${bet > 0 ? bet + ' coins cada' : 'sem aposta'}*\n\n` +
          `Para aceitar: */xadrez aceitar*\n` +
          `Para recusar: */xadrez recusar*`,
        mentions: [opponent]
      }, { quoted: msg });
    }

    // ── /xadrez aceitar ──────────────────────────────────────────────────────
    if (sub === 'aceitar' || sub === 'accept') {
      const game = sessions.get(jid);
      if (!game || game.status !== 'pending') {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Não há desafio pendente!`
        }, { quoted: msg });
      }
      if (game.black.jid !== sender) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Este desafio não é para você!`
        }, { quoted: msg });
      }

      if (game.bet > 0) {
        const p = getProfile(sender);
        if (p.coins < game.bet) {
          sessions.delete(jid);
          addCoins(game.white.jid, game.bet); // devolve
          return await messageQueue.enqueue(sock, jid, {
            text: `❌ @${sender.split('@')[0]} não tem *${game.bet} coins* para aceitar!`,
            mentions: [sender]
          }, { quoted: msg });
        }
        removeCoins(sender, game.bet);
      }

      // Atualiza o nome do jogador preto
      game.black.name = context.pushName || sender.split('@')[0];
      game.status = 'playing';
      game.lastActivity = Date.now();

      const board = renderBoard(game.board);
      return await messageQueue.enqueue(sock, jid, {
        text:
          `♟️ *XADREZ — PARTIDA INICIADA!*\n` +
          `${'─'.repeat(24)}\n` +
          `⚪ Brancas: *${game.white.name}*\n` +
          `⚫ Pretas:  *${game.black.name}*\n` +
          `💰 Aposta: ${game.bet > 0 ? game.bet + ' coins' : 'amistoso'}\n\n` +
          `\`\`\`\n${board}\n\`\`\`\n\n` +
          `👤 Vez das *brancas*\n` +
          `📋 Use *?x e2e4* para movimentar peças.\n` +
          `_Exemplo: ?x e2e4 move de e2 para e4_`
      });
    }

    // ── /xadrez recusar ──────────────────────────────────────────────────────
    if (sub === 'recusar' || sub === 'decline') {
      const game = sessions.get(jid);
      if (!game || game.status !== 'pending') {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Não há desafio pendente.` }, { quoted: msg });
      }
      if (game.bet > 0) addCoins(game.white.jid, game.bet);
      sessions.delete(jid);
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ *${pushName}* recusou o desafio de xadrez.`
      }, { quoted: msg });
    }

    // ── /xadrez render — ver tabuleiro ───────────────────────────────────────
    if (sub === 'ver' || sub === 'tabuleiro' || sub === 'render' || sub === 'board') {
      const game = sessions.get(jid);
      if (!game || game.status === 'pending') {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Não há partida em andamento!` }, { quoted: msg });
      }

      const isWhitePlayer = game.white.jid === sender;
      const board = renderBoard(game.board, isWhitePlayer ? 'white' : 'black');
      return await messageQueue.enqueue(sock, jid, {
        text:
          `♟️ *XADREZ — TABULEIRO*\n\n\`\`\`\n${board}\n\`\`\`\n\n` +
          `👤 Vez das *${game.whiteTurn ? 'brancas' : 'pretas'}* (${game.whiteTurn ? game.white.name : game.black.name})\n` +
          `📊 Movimentos: ${game.moveCount}`
      }, { quoted: msg });
    }

    // ── /xadrez desistir ─────────────────────────────────────────────────────
    if (sub === 'desistir' || sub === 'resign' || sub === 'render') {
      const game = sessions.get(jid);
      if (!game || game.status !== 'playing') {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Não há partida ativa!` }, { quoted: msg });
      }
      const isPlayer = game.white.jid === sender || game.black.jid === sender;
      if (!isPlayer) return;

      const winner = game.white.jid === sender ? game.black : game.white;
      const loser  = game.white.jid === sender ? game.white : game.black;

      if (game.bet > 0) {
        addCoins(winner.jid, game.bet * 2);
        messageQueue.enqueue(sock, jid, {
          text: `♟️ *${loser.name}* desistiu!\n🏆 *${winner.name}* vence e recebe *${game.bet * 2} coins*!`
        });
      } else {
        messageQueue.enqueue(sock, jid, {
          text: `♟️ *${loser.name}* desistiu!\n🏆 *${winner.name}* vence!`
        });
      }
      sessions.delete(jid);
      return;
    }

    // Ajuda padrão
    return await messageQueue.enqueue(sock, jid, {
      text:
        `♟️ *XADREZ APOSTADO*\n` +
        `${'─'.repeat(24)}\n\n` +
        `• */xadrez @jogador [coins]* — desafiar\n` +
        `• */xadrez aceitar* — aceitar desafio\n` +
        `• */xadrez recusar* — recusar\n` +
        `• */xadrez ver* — ver o tabuleiro\n` +
        `• */xadrez desistir* — se render\n\n` +
        `_Durante o jogo, use *?x e2e4* para mover._\n` +
        `_Exemplo: e2e4 (de e2 para e4)_`
    }, { quoted: msg });
  },

  // ── Interceptor ?x ───────────────────────────────────────────────────────
  handleInteraction: async (sock, msg, jid, sender, pushName, text) => {
    const game = sessions.get(jid);
    if (!game || game.status !== 'playing') return false;

    const move = parseMove(text);
    if (!move) return false;

    const isWhitePlayer = game.white.jid === sender;
    const isBlackPlayer = game.black.jid === sender;
    if (!isWhitePlayer && !isBlackPlayer) return false;
    if (game.whiteTurn && !isWhitePlayer) {
      await messageQueue.enqueue(sock, jid, {
        text: `⚠️ Não é sua vez! Aguarde *${game.white.name}* (brancas).`
      }, { quoted: msg });
      return true;
    }
    if (!game.whiteTurn && !isBlackPlayer) {
      await messageQueue.enqueue(sock, jid, {
        text: `⚠️ Não é sua vez! Aguarde *${game.black.name}* (pretas).`
      }, { quoted: msg });
      return true;
    }

    const legal = isLegalMove(game.board, move, game.whiteTurn);
    if (!legal.ok) {
      await messageQueue.enqueue(sock, jid, {
        text: `❌ Movimento inválido: ${legal.reason}`
      }, { quoted: msg });
      return true;
    }

    const captured    = game.board[move.rt][move.ft];
    game.board        = applyMove(game.board, move);
    game.moveCount++;
    game.lastActivity = Date.now();

    // Troca de turno
    game.whiteTurn = !game.whiteTurn;

    const check = isInCheck(game.board, game.whiteTurn);

    const colLetters  = ['a','b','c','d','e','f','g','h'];
    const fromNotation = `${colLetters[move.fc]}${8 - move.rc}`;
    const toNotation   = `${colLetters[move.ft]}${8 - move.rt}`;
    const nextPlayerN  = game.whiteTurn ? game.white.name : game.black.name;
    const nextColor    = game.whiteTurn ? '⚪ Brancas' : '⚫ Pretas';

    const boardStr = renderBoard(game.board, game.whiteTurn ? 'white' : 'black');
    let status = '';
    if (check) {
      status = `\n⚠️ *XEQUE!* ${nextPlayerN} está em xeque!`;
    }

    const captureNote = captured ? ` *(capturou ${PIECE_UNICODE[captured] || captured})*` : '';

    await messageQueue.enqueue(sock, jid, {
      text:
        `♟️ *${pushName}* move *${fromNotation}→${toNotation}*${captureNote}\n\n` +
        `\`\`\`\n${boardStr}\n\`\`\`\n` +
        `${status}\n\n` +
        `👤 Vez das *${nextColor}* — *${nextPlayerN}*\n` +
        `📋 *?x e2e4* para mover | */xadrez desistir* para se render`
    }, { quoted: msg });

    return true;
  }
};
