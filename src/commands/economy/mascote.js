import fs from 'fs';
import path from 'path';
import messageQueue from '../../core/MessageQueue.js';
import {
  PET_TYPES, getUserData, adoptPet, releasePet,
  feedPet, equipItem, getPetHumor
} from '../../database/pets.js';
import { getProfile, removeCoins } from '../../database/profiles.js';
import { getProduct } from '../../database/shop.js';
import profilesDb from '../../database/profiles.js';

const ASSETS_DIR = path.join(process.cwd(), 'assets', 'pets');

// Duração de saciedade por item (ms)
const FEED_DURATIONS = {
  racao_basica:   24 * 3_600_000,
  racao_premium:  48 * 3_600_000,
  petisco:        12 * 3_600_000,
};
const DEFAULT_FEED_DURATION = 24 * 3_600_000;

async function sendPetCard(sock, jid, msg, key, petInfo, pushName) {
  const data    = getUserData(key);
  const humor   = getPetHumor(key);
  const petType = PET_TYPES[data.pet.type];

  const lastFedMs  = Date.now() - (data.lastFed || 0);
  const lastFedStr = data.lastFed ? `${Math.floor(lastFedMs / 3_600_000)}h atrás` : 'Nunca';
  const phrase     = petType.phrases[Math.floor(Math.random() * petType.phrases.length)];
  const equipped   = (data.pet.equippedItems || []).map(e => `${e.emoji} ${e.name}`).join(' | ') || 'Nenhum';

  // Caption concisa (vai abaixo da imagem)
  const caption =
    `${data.pet.emoji} *${data.pet.name}* — _"${phrase}"_\n` +
    `${humor.emoji} ${humor.label} • 🍽️ ${lastFedStr} • 👗 ${equipped}\n` +
    `_/mascote alimentar • /mascote vestir <id> • /inventario_`;

  // Tenta gerar card Jimp (visual dinâmico)
  try {
    const { generatePetCard } = await import('../../services/PetCardService.js');
    const cardBuffer = await generatePetCard(data.pet, humor, pushName);
    if (cardBuffer) {
      await messageQueue.enqueue(sock, jid, {
        image: cardBuffer,
        caption,
        mimetype: 'image/png',
      }, { quoted: msg });
      return;
    }
  } catch (e) { /* fallback */ }

  // Fallback: imagem original do pet
  const imgPath = path.join(ASSETS_DIR, petType.file);
  if (fs.existsSync(imgPath)) {
    try {
      const imgBuffer = fs.readFileSync(imgPath);
      await messageQueue.enqueue(sock, jid, {
        image: imgBuffer,
        caption,
        mimetype: 'image/png',
      }, { quoted: msg });
      return;
    } catch (_) { }
  }

  // Fallback final: apenas texto
  await messageQueue.enqueue(sock, jid, {
    text:
      `${data.pet.emoji} *${data.pet.name}* (${data.pet.type})\n` +
      `${humor.emoji} ${humor.label}  🍽️ ${lastFedStr}\n` +
      `👗 ${equipped}\n\n_"${phrase}"_`
  }, { quoted: msg });
}

export default {
  name: 'mascote',
  aliases: ['pet', 'bichinho', 'meu-pet'],
  category: 'economy',
  description: 'Sistema completo de mascotes — adote, alimente e vista seu pet!',
  cooldown: 5000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    const key = profilesDb.normalizeKey(sender);
    const sub = args[0]?.toLowerCase();

    // ── /mascote (sem argumentos) → status ──────────────────────────────────
    if (!sub || sub === 'status' || sub === 'ver') {
      const data = getUserData(key);
      if (!data.pet) {
        return await messageQueue.enqueue(sock, jid, {
          text: `🐾 *Você não tem um mascote!*\n\n_Adote um usando */mascote adotar <tipo>*_\n_Ou compre na */loja* primeiro!_\n\n*Tipos disponíveis:*\n${Object.entries(PET_TYPES).map(([t, p]) => `  ${p.emoji} \`${t}\` — ${p.cost} coins`).join('\n')}`
        }, { quoted: msg });
      }
      return await sendPetCard(sock, jid, msg, key, data.pet, pushName);
    }

    // ── /mascote lista ───────────────────────────────────────────────────────
    if (sub === 'lista' || sub === 'tipos' || sub === 'list') {
      let text = `🐾 *MASCOTES DISPONÍVEIS*\n${'━'.repeat(25)}\n\n`;
      for (const [type, info] of Object.entries(PET_TYPES)) {
        text += `${info.emoji} *${info.name}*\n`;
        text += `  💰 Custo de adoção: *${info.cost} coins*\n`;
        text += `  📦 ID para adotar: \`${type}\`\n\n`;
      }
      text += `${'━'.repeat(25)}\n`;
      text += `💡 Para adotar: */mascote adotar gato*\n`;
      text += `🛒 Compre na loja primeiro se necessário: */loja*`;
      return await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
    }

    // ── /mascote adotar <tipo> ────────────────────────────────────────────────
    if (sub === 'adotar' || sub === 'adopt') {
      const tipo = args[1]?.toLowerCase();
      if (!tipo) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❓ *Uso:* /mascote adotar <tipo>\n\n*Exemplos:* gato, cachorro, papagaio, coelho, hamster, raposa\n\nVeja todos com */mascote lista*`
        }, { quoted: msg });
      }

      const petInfo = PET_TYPES[tipo];
      if (!petInfo) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Tipo de mascote *${tipo}* inválido!\n\nVeja os disponíveis com */mascote lista*`
        }, { quoted: msg });
      }

      // Verifica se já tem pet
      const existing = getUserData(key);
      if (existing.pet) {
        return await messageQueue.enqueue(sock, jid, {
          text: `⚠️ Você já tem um *${existing.pet.emoji} ${existing.pet.name}*!\n_Use */mascote liberar* para liberar o pet atual antes de adotar outro._`
        }, { quoted: msg });
      }

      // Verifica saldo
      const profile = getProfile(sender);
      if (profile.coins < petInfo.cost) {
        return await messageQueue.enqueue(sock, jid, {
          text: `💸 *Saldo insuficiente!*\n\n💰 Você tem: *${profile.coins} coins*\n🏷️ Custo: *${petInfo.cost} coins*\n❗ Faltam: *${petInfo.cost - profile.coins} coins*\n\n_Ganhe mais coins jogando ou com /diario!_`
        }, { quoted: msg });
      }

      // Debita coins e adota
      removeCoins(sender, petInfo.cost);
      const result = adoptPet(key, tipo);
      if (!result.success) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Erro ao adotar: ${result.reason}`
        }, { quoted: msg });
      }

      // Envia com imagem
      const imgPath = path.join(ASSETS_DIR, petInfo.file);
      const caption =
        `🎉 *Parabéns! Você adotou um ${petInfo.emoji} ${petInfo.name}!*\n\n` +
        `_Seu novo companheiro está super feliz!_\n\n` +
        `💸 Pago: *${petInfo.cost} coins*\n` +
        `💰 Saldo restante: *${getProfile(sender).coins} coins*\n\n` +
        `${'━'.repeat(25)}\n` +
        `🍽️ Alimente com */mascote alimentar*\n` +
        `👗 Compre roupas na */loja*\n` +
        `📊 Veja o status com */mascote*`;

      if (fs.existsSync(imgPath)) {
        try {
          const imgBuffer = fs.readFileSync(imgPath);
          return await messageQueue.enqueue(sock, jid, {
            image: imgBuffer,
            caption,
            mimetype: 'image/png',
          }, { quoted: msg });
        } catch (_) { }
      }
      return await messageQueue.enqueue(sock, jid, { text: caption }, { quoted: msg });
    }

    // ── /mascote alimentar [item_id] ──────────────────────────────────────────
    if (sub === 'alimentar' || sub === 'feed' || sub === 'comer') {
      const data = getUserData(key);
      if (!data.pet) {
        return await messageQueue.enqueue(sock, jid, {
          text: `🐾 Você não tem um mascote!\n_Use */mascote adotar* para adotar um._`
        }, { quoted: msg });
      }

      // Procura comida no inventário
      const inventory = data.inventory || [];
      const foodItems = inventory.filter(i => i.category === 'comida' && i.quantity > 0);

      // Permite especificar item: /mascote alimentar racao_premium
      const targetId = args[1]?.toLowerCase();
      let itemToUse = targetId
        ? foodItems.find(i => i.id === targetId)
        : foodItems[0]; // usa o primeiro disponível

      if (!itemToUse) {
        return await messageQueue.enqueue(sock, jid, {
          text: `🍽️ *Sem comida no inventário!*\n\n_Compre ração na */loja*:_\n  🥣 Ração Básica — 50 coins\n  🍖 Ração Premium — 150 coins\n  🍪 Petisco — 80 coins`
        }, { quoted: msg });
      }

      const feedDuration = FEED_DURATIONS[itemToUse.id] || DEFAULT_FEED_DURATION;
      const result = feedPet(key, itemToUse.id, feedDuration);

      if (!result.success) {
        if (result.reason === 'nao_com_fome') {
          const nextFeedMs = feedDuration - (Date.now() - (data.lastFed || 0));
          const h = Math.floor(nextFeedMs / 3_600_000);
          const m = Math.floor((nextFeedMs % 3_600_000) / 60_000);
          return await messageQueue.enqueue(sock, jid, {
            text: `😊 Seu ${data.pet.emoji} *${data.pet.name}* ainda está saciado!\n_Próxima refeição em: ${h}h ${m}min_`
          }, { quoted: msg });
        }
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Erro ao alimentar: ${result.reason}`
        }, { quoted: msg });
      }

      await messageQueue.enqueue(sock, jid, {
        text: `🍽️ *${data.pet.emoji} ${data.pet.name} foi alimentado!*\n\n${itemToUse.emoji} Usou: *${itemToUse.name}*\n😊 Seu pet está feliz agora!\n\n_Veja o status com */mascote*_`
      }, { quoted: msg });
      return;
    }

    // ── /mascote vestir <item_id> ─────────────────────────────────────────────
    if (sub === 'vestir' || sub === 'equipar' || sub === 'equip') {
      const itemId = args[1]?.toLowerCase();
      if (!itemId) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❓ *Uso:* /mascote vestir <id_do_item>\n\n_Veja seus itens com */inventario*_`
        }, { quoted: msg });
      }

      const data = getUserData(key);
      if (!data.pet) {
        return await messageQueue.enqueue(sock, jid, {
          text: `🐾 Você não tem um mascote para vestir!\n_Use */mascote adotar* para adotar um._`
        }, { quoted: msg });
      }

      const inventoryItem = (data.inventory || []).find(i =>
        i.id === itemId && i.quantity > 0 && ['roupa', 'acessorio', 'brinquedo'].includes(i.category)
      );
      if (!inventoryItem) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Item *${itemId}* não encontrado no inventário ou não é equipável!\n_Veja seus itens com */inventario*_`
        }, { quoted: msg });
      }

      const result = equipItem(key, itemId, inventoryItem.name, inventoryItem.emoji);
      if (!result.success) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Erro ao equipar: ${result.reason}`
        }, { quoted: msg });
      }

      await messageQueue.enqueue(sock, jid, {
        text: `✨ *${data.pet.emoji} ${data.pet.name}* agora usa ${inventoryItem.emoji} *${inventoryItem.name}*!\n\n_Veja o status com */mascote*_`
      }, { quoted: msg });
      return;
    }

    // ── /mascote liberar ──────────────────────────────────────────────────────
    if (sub === 'liberar' || sub === 'release' || sub === 'remover') {
      const data = getUserData(key);
      if (!data.pet) {
        return await messageQueue.enqueue(sock, jid, {
          text: `🐾 Você não tem um mascote para liberar.`
        }, { quoted: msg });
      }

      const petName = data.pet.name;
      const petEmoji = data.pet.emoji;
      releasePet(key);

      await messageQueue.enqueue(sock, jid, {
        text: `💔 *${petEmoji} ${petName}* foi liberado...\n_Você pode adotar um novo mascote a qualquer momento com */mascote adotar*_`
      }, { quoted: msg });
      return;
    }

    // Subcomando inválido
    await messageQueue.enqueue(sock, jid, {
      text: `🐾 *SISTEMA DE MASCOTES*\n${'━'.repeat(25)}\n\n• */mascote* — ver status do seu pet\n• */mascote lista* — ver todos os tipos\n• */mascote adotar <tipo>* — adotar um pet\n• */mascote alimentar* — alimentar o pet\n• */mascote vestir <id>* — equipar item\n• */mascote liberar* — liberar o pet`
    }, { quoted: msg });
  }
};
