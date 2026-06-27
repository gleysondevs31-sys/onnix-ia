import messageQueue from '../../core/MessageQueue.js';
import nvidiaService from '../../ai/NvidiaService.js';

export default {
  name: 'frase',
  aliases: ['frasedodia'],
  category: 'fun',
  description: 'Puxa uma frase super motivacional aleatória no formato original',
  cooldown: 8000,
  
  execute: async (context) => {
    const { sock, msg, jid } = context;
    
    try {
      const res = await nvidiaService.invokeCompletion("Crie uma frase inspiradora ou motivacional curta e criativa. Apenas a frase e um emoji no final.");
      await messageQueue.enqueue(sock, jid, { text: `✨ *Frase do Dia:*\n\n"${res}"` });
    } catch (e) {
      await messageQueue.enqueue(sock, jid, { text: `✨ *Frase do Dia:*\n\n"A persistência realiza o impossível." 😊` });
    }
  }
};
