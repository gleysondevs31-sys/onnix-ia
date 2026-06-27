import messageQueue from '../../core/MessageQueue.js';
import { getInventory, getUserData, getPetHumor } from '../../database/pets.js';
import profilesDb from '../../database/profiles.js';

const CATEGORY_LABELS = {
  comida:    '🍽️ Comida',
  roupa:     '👗 Roupas',
  acessorio: '💎 Acessórios',
  brinquedo: '🧸 Brinquedos',
};

export default {
  name: 'inventario',
  aliases: ['mochila', 'bag', 'inv', 'itens'],
  category: 'economy',
  description: 'Veja seus itens e o status do seu mascote',
  cooldown: 5000,

  execute: async (context) => {
    const { sock, msg, jid, sender, pushName } = context;

    const key = profilesDb.normalizeKey(sender);
    const data = getUserData(key);
    const inventory = data.inventory || [];
    const humor = getPetHumor(key);

    let text = `🎒 *MOCHILA — ${pushName || 'Você'}*\n${'━'.repeat(25)}\n\n`;

    // ── Mascote ──────────────────────────────────────────────────────────────
    if (data.pet) {
      const equipped = (data.pet.equippedItems || []).map(e => `${e.emoji} ${e.name}`).join(', ') || '_Nenhum_';
      text += `🐾 *SEU MASCOTE*\n`;
      text += `  ${data.pet.emoji} *${data.pet.name}* (${data.pet.type})\n`;
      text += `  ${humor.emoji} Humor: *${humor.label}* ${humor.bar}\n`;
      text += `  👗 Equipado: ${equipped}\n\n`;
    } else {
      text += `🐾 *MASCOTE:* _Você não tem um mascote!_\n  _Use /mascote adotar para adotar um!_\n\n`;
    }

    // ── Inventário agrupado ──────────────────────────────────────────────────
    if (inventory.length === 0) {
      text += `📦 *INVENTÁRIO:* _Vazio — compre itens na /loja!_\n`;
    } else {
      text += `📦 *INVENTÁRIO:*\n`;
      const groups = {};
      for (const item of inventory) {
        const cat = item.category || 'outros';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(item);
      }
      for (const [cat, items] of Object.entries(groups)) {
        const label = CATEGORY_LABELS[cat] || `📦 ${cat}`;
        text += `\n  *${label}*\n`;
        for (const item of items) {
          text += `    ${item.emoji} *${item.name}* x${item.quantity}\n`;
          text += `      \`${item.id}\`\n`;
        }
      }
    }

    text += `\n${'━'.repeat(25)}\n`;
    text += `💡 */mascote alimentar* — alimentar pet\n`;
    text += `💡 */mascote vestir <id>* — equipar item\n`;
    text += `💡 */loja* — comprar mais itens`;

    await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
  }
};
