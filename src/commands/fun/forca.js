import messageQueue from '../../core/MessageQueue.js';
import profilesRepository from '../../database/profiles.js';
import Forca from '../../services/games/Forca.js';

export const sessions = new Map();

const words = [
    'computador', 'programacao', 'whatsapp', 'brasil', 'cachorro',
    'teclado', 'javascript', 'elefante', 'televisao', 'biblioteca',
    'estudante', 'chocolate', 'trabalho', 'viagem', 'planeta',
    'internet', 'vulcao', 'natureza', 'arquitetura', 'matematica'
];

export default {
  name: 'forca',
  sessions,
  aliases: ['hangman'],
  category: 'fun',
  description: 'Jogue o jogo da forca e ganhe coins!',
  cooldown: 0,
  
  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName, isIntercepted } = context;
    
    const guess = args.join(' ').toUpperCase();

    if (guess === 'CANCELAR') {
        if (sessions.has(jid)) {
             sessions.delete(jid);
             return await messageQueue.enqueue(sock, jid, { text: `✅ Jogo da forca cancelado!` });
        }
        return;
    }

    if (!guess) {
        if (sessions.has(jid)) {
            const game = sessions.get(jid);
            return await messageQueue.enqueue(sock, jid, { 
                text: `⚠️ Já existe um jogo em andamento!\n${game.renderHangman()}\n\nPalavra: ${game.renderWord()}\nLetras tentadas: ${game.guessedChars.join(', ') || '(nenhuma)'}\n\n💡 Digite uma *letra* ou a *palavra completa* diretamente (sem /comando)!\nOu use */forca cancelar* para encerrar.` 
            }, { quoted: msg });
        }

        const selectedWord = words[Math.floor(Math.random() * words.length)];
        const game = new Forca(sender, selectedWord);
        sessions.set(jid, game);

        return await messageQueue.enqueue(sock, jid, { 
            text: `🎯 *JOGO DA FORCA* 🎯\n${game.renderHangman()}\n\nPalavra: ${game.renderWord()}\n\n💡 *Como jogar:* Digite uma *letra* ou a *palavra completa* — sem precisar de /comando!\nOu */forca cancelar* para encerrar.` 
        });
    }

    const game = sessions.get(jid);
    if (!game) {
         return await messageQueue.enqueue(sock, jid, { text: `❌ Nenhum jogo da forca em andamento. Use */forca* para iniciar!` }, { quoted: msg });
    }

    const status = game.turn(guess);

    if (status === -3) { // Ganhou (chute todo ou ultima letra)
        sessions.delete(jid);
        const reward = guess.length > 1 ? 70 : 50;
        profilesRepository.addCoins(sender, reward);
        return await messageQueue.enqueue(sock, jid, { 
            text: `🎉 *ENFORCADO SALVO! Parabéns, ${pushName}!* 🎉\n\nA palavra era: *${game.word}*\n💳 *+${reward} coins* depositados!${guess.length > 1 ? '\n_(Bônus de acertar a palavra completa!)_' : ''}` 
        }, { quoted: msg });
    }

    if (status === -2) { // Perdeu / Enforcado
        sessions.delete(jid);
        return await messageQueue.enqueue(sock, jid, { 
            text: `💀 *ENFORCADO!* 💀\n${game.renderHangman()}\n\nVocês perderam! A palavra correta era: *${game.word}*` 
        });
    }

    if (status === -1 || status === 2) { // Letra/Palavra errada, continua
        if (isIntercepted) return;
        return await messageQueue.enqueue(sock, jid, { 
            text: `❌ Errou! Resta${game.lives === 1 ? '' : 'm'} *${game.lives} vida${game.lives === 1 ? '' : 's'}*.\n${game.renderHangman()}\nPalavra: ${game.renderWord()}\nLetras tentadas: ${game.guessedChars.join(', ') || '(nenhuma)'}` 
        }, { quoted: msg });
    }

    if (status === 0) { // Ja tentada
        if (isIntercepted) return;
        return await messageQueue.enqueue(sock, jid, { text: `⚠️ A letra *${guess[0]}* já foi tentada!` }, { quoted: msg });
    }

    if (status === 1) { // Letra certa, continua
        return await messageQueue.enqueue(sock, jid, { 
            text: `✅ Letra *${guess}* correta! Resto${game.lives === 1 ? '' : 'm'} *${game.lives} vida${game.lives === 1 ? '' : 's'}*.\n${game.renderHangman()}\nPalavra: ${game.renderWord()}\nLetras tentadas: ${game.guessedChars.join(', ')}\n\nContinue! Digite outra letra (sem /comando).` 
        });
    }
  }
};
