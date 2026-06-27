import messageQueue from '../../core/MessageQueue.js';
import { getProfile } from '../../database/profiles.js';
import { getUserData } from '../../database/pets.js';
import profilesDb from '../../database/profiles.js';
import {
  generateFigurinha,
  generateBanner,
  generateWallpaper,
  TIER_CONFIG,
} from '../../services/CollectibleService.js';

// ── Catálogo embutido dos itens colecionáveis ─────────────────────────────────
// Sincronizado com os IDs na shop.json
const COLLECTIBLES = {
  mc_bronze_figurinha: { tier: 'bronze', type: 'figurinha' },
  mc_bronze_banner:    { tier: 'bronze', type: 'banner'    },
  mc_bronze_wallpaper: { tier: 'bronze', type: 'wallpaper' },
  mc_silver_figurinha: { tier: 'silver', type: 'figurinha' },
  mc_silver_banner:    { tier: 'silver', type: 'banner'    },
  mc_silver_wallpaper: { tier: 'silver', type: 'wallpaper' },
  mc_ouro_figurinha:   { tier: 'ouro',   type: 'figurinha' },
  mc_ouro_banner:      { tier: 'ouro',   type: 'banner'    },
  mc_ouro_wallpaper:   { tier: 'ouro',   type: 'wallpaper' },
  mc_diamante_figurinha: { tier: 'diamante', type: 'figurinha' },
  mc_diamante_banner:    { tier: 'diamante', type: 'banner'    },
  mc_diamante_wallpaper: { tier: 'diamante', type: 'wallpaper' },
};

const TYPE_EMOJI = { figurinha: '🃏', banner: '🖼️', wallpaper: '🎨' };

export default {
  name: 'colecionaveis',
  aliases: ['figurinha', 'colecao', 'coleção', 'mycol', 'mc'],
  category: 'economy',
  description: 'Gerencie e use seus colecionáveis Metrocasa de acordo com o tier!',
  cooldown: 5000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender, pushName } = context;

    const key    = profilesDb.normalizeKey(sender);
    const sub    = (args[0] || '').toLowerCase();
    const perfil = getProfile(sender);

    // ── /colecionaveis (sem args) → listar meus itens ─────────────────────────
    if (!sub || sub === 'ver' || sub === 'lista' || sub === 'meus') {
      const data      = getUserData(key);
      const inventory = data.inventory || [];
      const myCol     = inventory.filter(i => COLLECTIBLES[i.id] && i.quantity > 0);

      if (myCol.length === 0) {
        return await messageQueue.enqueue(sock, jid, {
          text:
            `🎨 *SEUS COLECIONÁVEIS*\n` +
            `${'─'.repeat(26)}\n\n` +
            `😔 Você ainda não possui colecionáveis!\n\n` +
            `Compre na */loja* — busque _(colecionavel)_ nos produtos.\n` +
            `Tiers: ☕ Bronze → 🥈 Silver → 🥇 Ouro → 💎 Diamante`
        }, { quoted: msg });
      }

      let text =
        `🎨 *COLECIONÁVEIS — ${(pushName || '').toUpperCase()}*\n` +
        `${'─'.repeat(26)}\n\n`;

      for (const item of myCol) {
        const col = COLLECTIBLES[item.id];
        const cfg = TIER_CONFIG[col.tier];
        text += `${cfg.emoji} *${cfg.name}* — ${TYPE_EMOJI[col.type]} ${col.type.charAt(0).toUpperCase() + col.type.slice(1)}\n`;
        text += `  🆔 \`${item.id}\`  |  x${item.quantity}\n`;
      }

      text += `\n${'─'.repeat(26)}\n`;
      text += `💡 Use: */colecionaveis usar <id>* para exibir o item!\n`;
      text += `Ex: */colecionaveis usar mc_ouro_banner*`;

      return await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
    }

    // ── /colecionaveis usar <id> → gerar e enviar o item ──────────────────────
    if (sub === 'usar' || sub === 'mostrar' || sub === 'exibir' || sub === 'show') {
      const itemId = args[1]?.toLowerCase();
      if (!itemId) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❓ Uso: */colecionaveis usar <id>*\nEx: */colecionaveis usar mc_diamante_banner*`
        }, { quoted: msg });
      }

      const col = COLLECTIBLES[itemId];
      if (!col) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Colecionável *${itemId}* não encontrado!`
        }, { quoted: msg });
      }

      const data      = getUserData(key);
      const inventory = data.inventory || [];
      const owned     = inventory.find(i => i.id === itemId && i.quantity > 0);

      if (!owned) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Você não possui *${itemId}*!\nCompre na */loja*.`
        }, { quoted: msg });
      }

      await messageQueue.enqueue(sock, jid, {
        text: `🎨 Gerando seu *${TIER_CONFIG[col.tier].name} ${col.type}*... ⏳`
      }, { quoted: msg });

      let buffer = null;

      try {
        if (col.type === 'figurinha') {
          buffer = await generateFigurinha(col.tier);
        } else if (col.type === 'banner') {
          buffer = await generateBanner(col.tier, pushName, perfil.level, perfil.coins);
        } else if (col.type === 'wallpaper') {
          buffer = await generateWallpaper(col.tier, pushName);
        }
      } catch (e) {
        buffer = null;
      }

      if (!buffer) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Erro ao gerar o item! Tente novamente.`
        }, { quoted: msg });
      }

      const cfg = TIER_CONFIG[col.tier];
      const caption =
        `${cfg.emoji} *${cfg.name.toUpperCase()} ${col.type.toUpperCase()}*\n` +
        `👤 ${pushName}\n` +
        `🏢 Metrocasa Construtora — ONNX IA`;

      if (col.type === 'figurinha') {
        await messageQueue.enqueue(sock, jid, {
          sticker: buffer,
        }, { quoted: msg });
      } else {
        await messageQueue.enqueue(sock, jid, {
          image: buffer,
          caption,
          mimetype: 'image/png',
        }, { quoted: msg });
      }

      return;
    }

    // ── /colecionaveis info → mostra os tiers disponíveis ────────────────────
    if (sub === 'info' || sub === 'tiers' || sub === 'tipos') {
      let text =
        `🎨 *COLECIONÁVEIS METROCASA*\n` +
        `${'─'.repeat(26)}\n\n` +
        `Colecione cards exclusivos da *Metrocasa Construtora*!\n\n`;

      for (const [tierId, cfg] of Object.entries(TIER_CONFIG)) {
        text += `${cfg.emoji} *${cfg.name}*\n`;
        text += `  🃏 Figurinha · 🖼️ Banner · 🎨 Wallpaper\n`;
        text += `  IDs: \`mc_${tierId}_figurinha\`, \`mc_${tierId}_banner\`, \`mc_${tierId}_wallpaper\`\n\n`;
      }

      text += `${'─'.repeat(26)}\n`;
      text += `🛒 Compre na */loja* | Veja seus itens com */colecionaveis*`;

      return await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
    }

    // Ajuda
    return await messageQueue.enqueue(sock, jid, {
      text:
        `🎨 *COLECIONÁVEIS METROCASA*\n` +
        `${'─'.repeat(26)}\n\n` +
        `• */colecionaveis* — ver seus itens\n` +
        `• */colecionaveis usar <id>* — exibir item\n` +
        `• */colecionaveis info* — ver todos os tiers\n\n` +
        `_Compre na */loja* — tiers disponíveis:_\n` +
        `☕ Bronze → 🥈 Silver → 🥇 Ouro → 💎 Diamante`
    }, { quoted: msg });
  }
};
