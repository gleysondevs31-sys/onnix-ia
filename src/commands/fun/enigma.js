import messageQueue from '../../core/MessageQueue.js';
import profilesRepository from '../../database/profiles.js';
import EnigmaGame from '../../services/games/EnigmaGame.js';

export const sessions = new Map();

export default {
  name: 'enigma',
  sessions,
  aliases: ['charada', 'adivinha'],
  category: 'fun',
  description: 'Resolva um enigma e ganhe coins!',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName, isOwner, isAdmin } = context;

    const action = args[0]?.toLowerCase();

    // ── Cancelar ──
    if (action === 'cancelar' || action === 'sair') {
      if (!sessions.has(jid)) {
        return await messageQueue.enqueue(sock, jid, { text: `❌ Não há nenhum enigma em andamento.` });
      }
      const game = sessions.get(jid);
      sessions.delete(jid);
      return await messageQueue.enqueue(sock, jid, {
        text: `✅ Enigma cancelado por *${pushName}*.\n\n🔑 A resposta correta era: *${game.correctAnswer}*`
      });
    }

    // ── Iniciar novo jogo ──
    if (!action) {
      if (sessions.has(jid)) {
        const game = sessions.get(jid);
        return await messageQueue.enqueue(sock, jid, {
          text: `🧩 *Enigma em andamento!*\n\n${game.charada}\n\n⏳ Restam *${game.timeRemaining}s*\n\nDigite sua resposta (sem /comando)!\nOu "*dica*" para receber uma dica (custa 20 coins).`
        }, { quoted: msg });
      }

      const game = new EnigmaGame(sender);
      sessions.set(jid, game);

      // Auto-expirar após timeout
      setTimeout(async () => {
        if (sessions.has(jid)) {
          const current = sessions.get(jid);
          if (current === game) {
            sessions.delete(jid);
            await messageQueue.enqueue(sock, jid, {
              text: `⏰ *TEMPO ESGOTADO!* Ninguém acertou o enigma.\n\n🔑 A resposta era: *${game.correctAnswer}*`
            }).catch(() => {});
          }
        }
      }, game.maxTime);

      return await messageQueue.enqueue(sock, jid, {
        text: `🧩 *NOVO ENIGMA!* 🧩\n\n${game.charada}\n\n⏳ Vocês têm *${game.maxTime / 1000} segundos* para responder!\nDigite a resposta diretamente (sem /comando).\nOu "*dica*" para uma dica (custa 20 coins).`
      });
    }

    // ── Resposta via /enigma resposta ──
    const game = sessions.get(jid);
    if (!game) {
      return await messageQueue.enqueue(sock, jid, {
        text: `❌ Nenhum enigma em andamento. Use */enigma* para iniciar!`
      }, { quoted: msg });
    }
    return await _handleGuess(sock, msg, jid, sender, pushName, game, sessions, args.join(' '));
  },

  // ── Handler interceptado (sem prefixo) ──
  handleInteraction: async (sock, msg, jid, sender, pushName, text) => {
    if (!sessions.has(jid)) return false;
    const game = sessions.get(jid);
    const lp = text.toLowerCase().trim();

    // Dica
    if (lp === 'dica') {
      if (game.usedHint) {
        await messageQueue.enqueue(sock, jid, { text: `ℹ️ A dica já foi usada neste enigma!` }, { quoted: msg });
        return true;
      }
      const removed = profilesRepository.removeCoins(sender, 20);
      if (!removed) {
        await messageQueue.enqueue(sock, jid, { text: `❌ Você não tem coins suficientes para a dica (custa 20 coins)!` }, { quoted: msg });
        return true;
      }
      game.usedHint = true;
      await messageQueue.enqueue(sock, jid, { text: `💡 *DICA:* ${game.dica}\n\n_(20 coins descontados de @${sender.split('@')[0]})_`, mentions: [sender] });
      return true;
    }

    await _handleGuess(sock, msg, jid, sender, pushName, game, sessions, text);
    return true;
  }
};

async function _handleGuess(sock, msg, jid, sender, pushName, game, sessions, answer) {
  const status = game.guess(answer);

  if (status === -2) {
    sessions.delete(jid);
    return await messageQueue.enqueue(sock, jid, {
      text: `⏰ *TEMPO ESGOTADO!* Ninguém acertou.\n\n🔑 A resposta era: *${game.correctAnswer}*`
    });
  }

  if (status === 1) {
    const prize = game.usedHint ? 25 : 45;
    profilesRepository.addCoins(sender, prize);
    sessions.delete(jid);
    return await messageQueue.enqueue(sock, jid, {
      text: `🎉 *PARABÉNS, ${pushName}!* 🎉\n\nVocê acertou o enigma!\n🔑 Resposta: *${game.correctAnswer}*\n💳 *+${prize} coins* depositados!${game.usedHint ? '\n_(Bônus reduzido por uso de dica)_' : ''}`
    }, { quoted: msg });
  }

  // Errou — só responde se for interação direta (não interceptada em silêncio)
  if (!msg?._isIntercepted) {
    return await messageQueue.enqueue(sock, jid, {
      text: `❌ Não é isso! Pense mais... ⏳ Restam *${game.timeRemaining}s*`
    }, { quoted: msg });
  }
}
