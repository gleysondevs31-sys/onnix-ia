import messageQueue from '../../core/MessageQueue.js';
import profilesRepository from '../../database/profiles.js';
import Anagrama from '../../services/games/Anagrama.js';

export const sessions = new Map();

const words = [
    'computador', 'programacao', 'whatsapp', 'brasil', 'cachorro',
    'teclado', 'javascript', 'elefante', 'televisao', 'biblioteca',
    'maravilhoso', 'estudante', 'chocolate', 'trabalho', 'viagem',
    'planeta', 'internet', 'vulcao', 'natureza', 'arquitetura'
];

export default {
  name: 'anagrama',
  sessions,
  aliases: ['desembaralhar'],
  category: 'fun',
  description: 'Desembaralhe a palavra e seja rápido para ganhar coins!',
  cooldown: 0,
  
  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName, isIntercepted } = context;
    
    const guess = args.join(' ').toLowerCase();

    if (guess === 'cancelar') {
         if (sessions.has(jid)) {
             const game = sessions.get(jid);
             clearTimeout(game.timeoutRef);
             sessions.delete(jid);
             return await messageQueue.enqueue(sock, jid, { text: `✅ Jogo de anagrama cancelado!` });
         }
         return;
    }

    if (!guess) {
        if (sessions.has(jid)) {
             const game = sessions.get(jid);
             return await messageQueue.enqueue(sock, jid, { 
                 text: `⚠️ Já existe um jogo em andamento!\n\nDesembaralhe: *${game.scrambledWord}*\n\n💡 Digite a palavra diretamente (sem /comando) para responder!\nOu use */anagrama cancelar* para encerrar.\n⏳ Restam ${game.timeRemaining}s` 
             }, { quoted: msg });
        }

        const selectedWord = words[Math.floor(Math.random() * words.length)];
        const game = new Anagrama(sender, selectedWord);
        
        // Timeout cleanup
        game.timeoutRef = setTimeout(async () => {
             if (sessions.has(jid)) {
                 const current = sessions.get(jid);
                 if (current.originalWord === selectedWord.toUpperCase()) {
                     sessions.delete(jid);
                     await messageQueue.enqueue(sock, jid, { text: `⏰ *FIM DO TEMPO!* Ninguém acertou o anagrama.\n\nA palavra correta era: *${selectedWord.toUpperCase()}*` });
                 }
             }
        }, game.maxTime);

        sessions.set(jid, game);

        return await messageQueue.enqueue(sock, jid, { 
             text: `🔠 *JOGO DO ANAGRAMA* 🔠\n\nQual é a palavra escondida nas letras abaixo?\n\n👉 *${game.scrambledWord}* 👈\n\n⏳ Vocês têm *${game.maxTime / 1000} segundos* para acertar!\n💡 Digite a palavra diretamente — sem /comando! Seja rápido!` 
        });
    }

    const game = sessions.get(jid);
    if (!game) {
         return await messageQueue.enqueue(sock, jid, { text: `❌ Nenhum anagrama em andamento. Use */anagrama* para iniciar um novo!` }, { quoted: msg });
    }

    const status = game.turn(guess);

    if (status === 1) {
         clearTimeout(game.timeoutRef);
         sessions.delete(jid);
         
         const prize = 40;
         profilesRepository.addCoins(sender, prize);

         return await messageQueue.enqueue(sock, jid, { 
             text: `🎉 *PARABÉNS, ${pushName}!* 🎉\n\nVocê acertou! A palavra era *${game.originalWord}*.\n💳 Você recebeu *+${prize} coins*!` 
         }, { quoted: msg });
    } else if (status === -2) {
         clearTimeout(game.timeoutRef);
         sessions.delete(jid);
         return await messageQueue.enqueue(sock, jid, { 
             text: `⏰ *TEMPO ESGOTADO!*\n\nA palavra correta era: *${game.originalWord}*` 
         });
    } else {
         if (isIntercepted) return; // Errou em silencio fora de comando obrigatorio
         return await messageQueue.enqueue(sock, jid, { 
             text: `❌ Palavra incorreta! Restam ${game.timeRemaining}s.` 
         }, { quoted: msg });
    }
  }
};
