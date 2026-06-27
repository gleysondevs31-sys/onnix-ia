// ────────────────────────────────────────────────────────────────────────────
// TrucoService.js — Truco Paulista Apostado para WhatsApp
// Regras: 40-card deck, 3-12 jogadores, cartas no PV, mesa no grupo
// ────────────────────────────────────────────────────────────────────────────

// ── Deck de 40 cartas (remove 8, 9, 10 do baralho padrão) ──────────────────
const VALUES  = ['4','5','6','7','Q','J','K','A','2','3'];
const SUITS   = ['♦','♠','♥','♣']; // ordem da manilha: pior → melhor
const SUIT_NAMES = { '♦': 'ouros', '♠': 'espadas', '♥': 'copas', '♣': 'paus' };

// Hierarquia de cartas (sem manilhas): 4=menor, 3=maior
const CARD_RANK = { '4':0,'5':1,'6':2,'7':3,'Q':4,'J':5,'K':6,'A':7,'2':8,'3':9 };

function buildDeck() {
  const deck = [];
  for (const v of VALUES) for (const s of SUITS) deck.push({ v, s });
  return shuffle(deck);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Retorna o valor da carta seguinte ao vira (circular) */
function nextValue(v) {
  const idx = VALUES.indexOf(v);
  return VALUES[(idx + 1) % VALUES.length];
}

/** Verifica se uma carta é manilha */
function isManilha(card, manilhaValue) {
  return card.v === manilhaValue;
}

/** Rank comparável de uma carta (manilhas primeiro, depois hierarquia normal) */
function cardStrength(card, manilhaValue) {
  if (isManilha(card, manilhaValue)) {
    return 100 + SUITS.indexOf(card.s); // 100-103 (♣ paus = 103 = mais forte)
  }
  return CARD_RANK[card.v] ?? 0;
}

function renderCard(card) {
  return `[${card.v}${card.s}]`;
}

function renderHand(hand) {
  return hand.map((c, i) => c ? `${i + 1}:${renderCard(c)}` : `${i + 1}:✅`).join('  ');
}

// ── Pontos de Truco ─────────────────────────────────────────────────────────
const TRUCO_VALUES = [1, 3, 6, 9, 12];
const TRUCO_NAMES  = { 1: 'normal', 3: 'Truco', 6: 'Seis', 9: 'Nove', 12: 'Doze' };

// ── Mapa global: groupJid → estado da partida ───────────────────────────────
export const trucoSessions = new Map();

// ────────────────────────────────────────────────────────────────────────────

/** Cria uma nova mesa de Truco */
export function createGame(groupJid, creatorJid, creatorName, bet) {
  if (trucoSessions.has(groupJid)) return { error: 'Já existe uma mesa de Truco neste grupo!' };

  const game = {
    status:      'waiting',    // waiting | playing | finished
    groupJid,
    creator:     creatorJid,
    bet:         bet || 0,
    players:     [{ jid: creatorJid, name: creatorName, hand: [], team: 0, played: null }],
    deck:        [],
    vira:        null,
    manilhaValue: null,
    currentRound: { cards: [], turn: 0 },
    roundsWon:   [0, 0], // equipe 0 vs equipe 1
    score:       [0, 0],
    hand:        1,
    trucoState:  null,   // null | { callerTeam, pendingValue }
    lastActivity: Date.now(),
  };

  trucoSessions.set(groupJid, game);
  return { success: true, game };
}

/** Adiciona jogador à mesa */
export function joinGame(groupJid, playerJid, playerName) {
  const game = trucoSessions.get(groupJid);
  if (!game)                             return { error: 'Não há mesa de Truco neste grupo! Use */truco criar*.' };
  if (game.status !== 'waiting')         return { error: 'A partida já começou!' };
  if (game.players.length >= 12)         return { error: 'Mesa cheia (máximo 12 jogadores)!' };
  if (game.players.find(p => p.jid === playerJid)) return { error: 'Você já está na mesa!' };

  // Equipe alterna (jogadores ímpares = equipe 0, pares = equipe 1)
  const team = game.players.length % 2;
  game.players.push({ jid: playerJid, name: playerName, hand: [], team, played: null });
  game.lastActivity = Date.now();
  return { success: true, game };
}

/** Inicia o jogo (distribui cartas) */
export function startGame(groupJid, requesterJid) {
  const game = trucoSessions.get(groupJid);
  if (!game)                              return { error: 'Não há mesa de Truco!' };
  if (game.creator !== requesterJid)      return { error: 'Apenas o criador da mesa pode iniciar!' };
  if (game.players.length < 3)           return { error: `Precisa de pelo menos 3 jogadores! Atual: ${game.players.length}` };
  if (game.status !== 'waiting')         return { error: 'Jogo já iniciado!' };

  return _dealHand(game);
}

/** Distribui cartas para nova mão */
function _dealHand(game) {
  game.deck = buildDeck();
  game.vira = game.deck.pop();
  game.manilhaValue = nextValue(game.vira.v);
  game.status = 'playing';
  game.currentRound = { cards: [], turn: 0 };
  game.roundsWon = [0, 0];
  game.trucoState = null;

  for (const p of game.players) {
    p.hand   = [game.deck.pop(), game.deck.pop(), game.deck.pop()];
    p.played = null;
  }

  game.lastActivity = Date.now();
  return { success: true, game };
}

/** Jogador joga uma carta (slot 1, 2 ou 3) */
export function playCard(groupJid, playerJid, slot) {
  const game = trucoSessions.get(groupJid);
  if (!game || game.status !== 'playing') return { error: 'Não há partida em andamento!' };

  const playerIdx = game.players.findIndex(p => p.jid === playerJid);
  if (playerIdx === -1)  return { error: 'Você não está nesta partida!' };
  if (game.currentRound.turn !== playerIdx) {
    const current = game.players[game.currentRound.turn];
    return { error: `Não é sua vez! Aguarde *${current.name}* jogar.` };
  }

  // Truco pendente — não pode jogar até resolver
  if (game.trucoState?.pending) {
    return { error: '⚠️ Responda ao Truco antes de jogar! (*?t aceitar* ou *?t recusar*)' };
  }

  const player = game.players[playerIdx];
  const cardIdx = slot - 1;
  if (!player.hand[cardIdx]) return { error: `Carta ${slot} já foi jogada ou não existe!` };

  const card = player.hand[cardIdx];
  player.hand[cardIdx] = null;
  player.played = card;

  game.currentRound.cards.push({ playerIdx, card });
  game.lastActivity = Date.now();

  // Avança o turno
  game.currentRound.turn = (playerIdx + 1) % game.players.length;

  // Verifica se todos jogaram nesta rodada
  const allPlayed = game.currentRound.cards.length === game.players.length;
  if (allPlayed) {
    return _resolveRound(game, card);
  }

  return {
    success: true,
    cardPlayed: card,
    game,
    roundComplete: false,
    nextPlayer: game.players[game.currentRound.turn],
  };
}

/** Resolve o resultado da rodada */
function _resolveRound(game, lastCard) {
  const mv = game.manilhaValue;
  const played = game.currentRound.cards;

  // Encontra a carta mais forte
  let best = -1;
  let bestIdx = -1;
  let tie = false;

  for (const { playerIdx, card } of played) {
    const str = cardStrength(card, mv);
    if (str > best) {
      best = str;
      bestIdx = playerIdx;
      tie = false;
    } else if (str === best) {
      tie = true;
    }
  }

  const winnerTeam = tie ? -1 : game.players[bestIdx].team;
  if (!tie) game.roundsWon[winnerTeam]++;

  // Limpa cartas jogadas para nova rodada
  const cardsThisRound = [...played];
  game.currentRound = { cards: [], turn: tie ? game.currentRound.turn : bestIdx };
  for (const p of game.players) p.played = null;

  // Verifica se a mão terminou (equipe ganhou 2 rodadas ou rodadas = 3)
  const handOver = game.roundsWon[0] >= 2 || game.roundsWon[1] >= 2;

  if (handOver) {
    return _resolveHand(game, cardsThisRound, winnerTeam, tie);
  }

  return {
    success: true,
    game,
    roundComplete: true,
    roundWinner: tie ? null : { team: winnerTeam, playerIdx: bestIdx },
    tie,
    cardsPlayed: cardsThisRound,
    handOver: false,
  };
}

/** Resolve o resultado da mão completa */
function _resolveHand(game, lastCards, winnerTeam, tie) {
  const handValue = game.trucoState ? game.trucoState.currentValue : 1;
  const loserTeam = winnerTeam === 0 ? 1 : 0;

  if (!tie && winnerTeam >= 0) {
    game.score[winnerTeam] += handValue;
  }

  // Verifica partida finalizada (12 pontos)
  const gameOver = game.score[0] >= 12 || game.score[1] >= 12;
  const champion = game.score[0] >= 12 ? 0 : game.score[1] >= 12 ? 1 : -1;

  if (gameOver) {
    game.status = 'finished';
    const winners = game.players.filter(p => p.team === champion);
    const losers  = game.players.filter(p => p.team !== champion);
    return {
      success: true, game,
      roundComplete: true,
      handOver: true, gameOver: true,
      champion, winners, losers,
      handValue, score: game.score, lastCards,
    };
  }

  // Nova mão
  const result = _dealHand(game);

  return {
    success: true, game,
    roundComplete: true,
    handOver: true, gameOver: false,
    roundWinner: tie ? null : { team: winnerTeam },
    score: game.score, handValue, lastCards,
  };
}

/** Chama Truco (aumenta o stake da mão) */
export function callTruco(groupJid, playerJid) {
  const game = trucoSessions.get(groupJid);
  if (!game || game.status !== 'playing') return { error: 'Não há partida em andamento!' };

  const player = game.players.find(p => p.jid === playerJid);
  if (!player) return { error: 'Você não está na partida!' };

  if (game.trucoState?.pending) return { error: 'Já há um Truco pendente! Aguarde a resposta.' };

  const currentValue = game.trucoState?.currentValue || 1;
  const idx = TRUCO_VALUES.indexOf(currentValue);
  if (idx >= TRUCO_VALUES.length - 1) return { error: 'Já está no máximo (Doze)!' };

  const nextValue2 = TRUCO_VALUES[idx + 1];

  game.trucoState = {
    callerTeam:   player.team,
    callerJid:    playerJid,
    callerName:   player.name,
    currentValue: currentValue,
    pendingValue: nextValue2,
    pending:      true,
  };
  game.lastActivity = Date.now();

  return {
    success: true, game,
    caller: player.name,
    nextValue: nextValue2,
    nextName: TRUCO_NAMES[nextValue2],
  };
}

/** Aceita o Truco */
export function acceptTruco(groupJid, playerJid) {
  const game = trucoSessions.get(groupJid);
  if (!game?.trucoState?.pending)  return { error: 'Não há Truco para aceitar!' };

  const player = game.players.find(p => p.jid === playerJid);
  if (!player)                     return { error: 'Você não está na partida!' };
  if (player.team === game.trucoState.callerTeam) return { error: 'Você não pode aceitar seu próprio Truco!' };

  game.trucoState.currentValue = game.trucoState.pendingValue;
  game.trucoState.pending = false;
  game.lastActivity = Date.now();

  return {
    success: true, game,
    value: game.trucoState.currentValue,
    name: TRUCO_NAMES[game.trucoState.currentValue],
  };
}

/** Recusa o Truco (cede pontos) */
export function refuseTruco(groupJid, playerJid) {
  const game = trucoSessions.get(groupJid);
  if (!game?.trucoState?.pending) return { error: 'Não há Truco para recusar!' };

  const player = game.players.find(p => p.jid === playerJid);
  if (!player)                    return { error: 'Você não está na partida!' };
  if (player.team === game.trucoState.callerTeam) return { error: 'Você não pode recusar seu próprio Truco!' };

  // Quem chamou o truco ganha os pontos atuais
  const gainedPoints = game.trucoState.currentValue;
  game.score[game.trucoState.callerTeam] += gainedPoints;
  game.trucoState = null;

  // Verifica fim de jogo
  const gameOver = game.score[0] >= 12 || game.score[1] >= 12;
  if (gameOver) {
    game.status = 'finished';
  } else {
    _dealHand(game);
  }

  return {
    success: true, game, gainedPoints, gameOver,
    winnerTeam: game.score[0] >= 12 ? 0 : game.score[1] >= 12 ? 1 : -1,
  };
}

/** Formata o placar para exibição */
export function renderScore(game) {
  const team0 = game.players.filter(p => p.team === 0).map(p => p.name).join(', ');
  const team1 = game.players.filter(p => p.team === 1).map(p => p.name).join(', ');
  return (
    `🃏 *MESA DO TRUCO*\n` +
    `${'─'.repeat(26)}\n` +
    `🟠 *Equipe A* (${team0})\n  Pontos: ${game.score[0]}/12  |  Rodadas: ${game.roundsWon[0]}\n` +
    `🔵 *Equipe B* (${team1})\n  Pontos: ${game.score[1]}/12  |  Rodadas: ${game.roundsWon[1]}\n` +
    `${'─'.repeat(26)}\n` +
    `🃏 Vira: ${renderCard(game.vira)}  |  Manilha: *${game.manilhaValue}* (${SUIT_NAMES['♣']} > ${SUIT_NAMES['♥']} > ${SUIT_NAMES['♠']} > ${SUIT_NAMES['♦']})\n` +
    `💰 Mão vale: *${game.trucoState?.currentValue || 1} ponto(s)*\n` +
    `👤 Vez de: *${game.players[game.currentRound.turn]?.name || '?'}*`
  );
}

export { renderCard, renderHand };

export function getGame(groupJid) { return trucoSessions.get(groupJid); }

export function endGame(groupJid) {
  trucoSessions.delete(groupJid);
}
