import handleMessages from './messages.upsert.js';
import handleGroupParticipants from './group-participants.update.js';
import logger from '../utils/logger.js';

class EventHandler {
  register(sock) {
    // Roteador central de Eventos desacoplados
    sock.ev.on('messages.upsert', async (payload) => {
      try {
        if (payload.type === 'notify') {
          await handleMessages(sock, payload);
        }
      } catch (e) {
        logger.error('Erro não tratado em messages.upsert:', e.message);
      }
    });

    sock.ev.on('group-participants.update', async (update) => {
      try {
        await handleGroupParticipants(sock, update);
      } catch (e) {
        logger.error('Erro não tratado em group-participants.update:', e.message);
      }
    });
  }
}

export const eventHandler = new EventHandler();
export default eventHandler;
