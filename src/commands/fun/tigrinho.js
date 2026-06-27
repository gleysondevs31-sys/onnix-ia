import messageQueue from '../../core/MessageQueue.js';
import profilesRepository from '../../database/profiles.js';
import { formatCoins } from '../../utils/formatCoins.js';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  name: 'tigrinho',
  aliases: ['cassino', 'tigre', 'jogar'],
  category: 'fun',
  description: 'Aposte no joguinho do Tigrinho voador (Cassino)',
  cooldown: 10000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;
    
    if (args.length === 0 || isNaN(parseInt(args[0]))) {
       const _p = profilesRepository.getProfile(sender);
       return await messageQueue.enqueue(sock, jid, { 
         text: `🎰 *Tigrinho Cassino* 🐯\n\nComo jogar:\nEspecifique o valor da sua aposta.\nExemplo: */tigrinho 50*\n\n💳 Saldo: *${formatCoins(_p.coins)} coins*\n_Se você ganhar, sua aposta é multiplicada!_` 
       }, { quoted: msg });
    }

    const betAmount = parseInt(args[0]);

    if (betAmount < 10) {
       return await messageQueue.enqueue(sock, jid, { 
         text: `❌ O valor mínimo de aposta é de *10 coins*.` 
       }, { quoted: msg });
    }

    const userProfile = profilesRepository.getProfile(sender);

    if (userProfile.coins < betAmount) {
       return await messageQueue.enqueue(sock, jid, { 
         text: `❌ Saldo insuficiente para apostar *${formatCoins(betAmount)} coins*!\nVocê tem apenas *${formatCoins(userProfile.coins)} coins*.` 
       }, { quoted: msg });
    }

    // Deduct bet amount upfront
    profilesRepository.removeCoins(sender, betAmount);

    // Enviar mensagem inicial do giro
    const sentMsg = await messageQueue.enqueue(sock, jid, { text: '🎰 *Tigrinho girando a roleta...* 🐯🌀' });
    if (!sentMsg) return;

    await delay(1500);
    await sock.sendMessage(jid, { text: '🎰 *Girando...* 🐯 ❓ ❓', edit: sentMsg.key });

    await delay(1500);
    await sock.sendMessage(jid, { text: '🎰 *Girando...* 🐯 💰 ❓', edit: sentMsg.key });

    await delay(1500);

    // Calcular resultado
    const chance = Math.random();
    let winMultiplier = 0;
    let resultSlots = '';
    let resultMsg = '';

    if (chance < 0.05) {
      // 5% de chance de lucrar 10x
      winMultiplier = 10;
      resultSlots = '🐯 🐯 🐯';
      resultMsg = `JACKPOT! GRANDE RECOMPENSA!`;
    } else if (chance < 0.20) {
      // 15% de chance (0.05 a 0.20) de lucrar 3x
      winMultiplier = 3;
      resultSlots = '🐯 💰 🐯';
      resultMsg = `MEGAA GANHO!`;
    } else if (chance < 0.40) {
      // 20% de chance (0.20 a 0.40) de lucrar 2x
      winMultiplier = 2;
      resultSlots = '💰 💰 🐯';
      resultMsg = `VOCÊ GANHOU!`;
    } else if (chance < 0.50) {
      // 10% de chance de reaver a aposta (1x)
      winMultiplier = 1;
      resultSlots = '🍒 🍒 🍒';
      resultMsg = `Ufa! Você recuperou sua aposta!`;
    } else {
      // 50% de chance de perder
      winMultiplier = 0;
      const loseSlots = ['🍒 🍋 🔔', '🐯 🍎 💰', '🍋 🔔 🍎', '🍎 🐯 🍋'];
      resultSlots = loseSlots[Math.floor(Math.random() * loseSlots.length)];
      resultMsg = `QUE PENA! VOCÊ PERDEU TUDO!`;
    }

    const wonAmount = betAmount * winMultiplier;
    
    if (wonAmount > 0) {
      profilesRepository.addCoins(sender, wonAmount);
    }

    const newProfile = profilesRepository.getProfile(sender);

    const finalText = `🎰 *CASSINO DO TIGRINHO* 🐯\n\n` +
                      `[  ${resultSlots}  ]\n\n` +
                      `*Resultado:* ${resultMsg}\n` +
                      `${wonAmount > 0 ? `🎊 *Prêmio:* +${formatCoins(wonAmount)} coins\n` : `💸 *Perdeu:* -${formatCoins(betAmount)} coins\n`}` +
                      `💳 *Seu Saldo Atual:* ${formatCoins(newProfile.coins)} coins`;

    await sock.sendMessage(jid, { 
       text: finalText,
       edit: sentMsg.key 
    });
  }
};
