import fs from 'fs';
import path from 'path';
import messageQueue from '../../core/MessageQueue.js';
import { getShop, getProduct, consumeStock } from '../../database/shop.js';
import { getProfile, removeCoins } from '../../database/profiles.js';
import { addToInventory } from '../../database/pets.js';
import profilesDb from '../../database/profiles.js';

const CATEGORY_LABELS = {
  comida:    '🍽️  Comida & Ração',
  roupa:     '👗  Roupas',
  acessorio: '💎  Acessórios',
  brinquedo: '🧸  Brinquedos',
  mascote:   '🐾  Adoção de Mascotes',
};

function groupByCategory(products) {
  const groups = {};
  for (const p of products) {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
  }
  return groups;
}

export default {
  name: 'loja',
  aliases: ['shop', 'mercado', 'store'],
  category: 'economy',
  description: 'Mini loja — compre itens e mascotes com seus coins!',
  cooldown: 5000,

  execute: async (context) => {
    const { sock, msg, args, jid, sender } = context;

    // ── Subcomandos ─────────────────────────────────────────────────────────
    const sub = args[0]?.toLowerCase();

    // /loja comprar <id>
    if (sub === 'comprar' || sub === 'buy' || sub === 'compra') {
      const itemId = args[1]?.toLowerCase();
      if (!itemId) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❓ *Uso:* /loja comprar <id_do_produto>\n\nEx: */loja comprar racao_basica*\nVeja a lista com */loja*`
        }, { quoted: msg });
      }

      const product = getProduct(itemId);
      if (!product) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Produto *${itemId}* não encontrado na loja.\nVeja a lista com */loja*`
        }, { quoted: msg });
      }

      if (product.stock === 0) {
        return await messageQueue.enqueue(sock, jid, {
          text: `⚠️ O produto *${product.name}* está sem estoque no momento.`
        }, { quoted: msg });
      }

      const profile = getProfile(sender);
      if (profile.coins < product.price) {
        return await messageQueue.enqueue(sock, jid, {
          text: `💸 *Saldo insuficiente!*\n\n💰 Você tem: *${profile.coins} coins*\n🏷️ Preço: *${product.price} coins*\n❗ Faltam: *${product.price - profile.coins} coins*`
        }, { quoted: msg });
      }

      // Processa compra
      removeCoins(sender, product.price);
      consumeStock(product.id);

      // Adiciona ao inventário (exceto mascotes — esses são comprados via /mascote adotar)
      if (product.category !== 'mascote') {
        addToInventory(profilesDb.normalizeKey(sender), {
          id: product.id,
          name: product.name,
          emoji: product.emoji,
          category: product.category,
        });
      }

      const newBalance = getProfile(sender).coins;

      await messageQueue.enqueue(sock, jid, {
        text: `✅ *Compra realizada!*\n\n${product.emoji} *${product.name}*\n💸 Pago: *${product.price} coins*\n💰 Saldo restante: *${newBalance} coins*\n\n${product.category === 'mascote'
            ? `_Use */mascote adotar ${product.id.replace('adocao_', '')}* para adotar!_`
            : `_Item adicionado ao seu inventário! Veja com */inventario*_`
          }`
      }, { quoted: msg });
      return;
    }

    // /loja info <id>
    if (sub === 'info' || sub === 'ver') {
      const itemId = args[1]?.toLowerCase();
      if (!itemId) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❓ *Uso:* /loja info <id_do_produto>`
        }, { quoted: msg });
      }
      const product = getProduct(itemId);
      if (!product) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Produto *${itemId}* não encontrado.`
        }, { quoted: msg });
      }
      const estoqueStr = product.stock === -1 ? '∞ Infinito' : `${product.stock} unidades`;
      return await messageQueue.enqueue(sock, jid, {
        text: `${product.emoji} *${product.name}*\n━━━━━━━━━━━━━━━━━\n📝 ${product.description}\n\n💰 Preço: *${product.price} coins*\n📦 Estoque: ${estoqueStr}\n🏷️ ID: \`${product.id}\`\n📂 Categoria: ${product.category}`
      }, { quoted: msg });
    }

    // ── /loja (lista principal) ─────────────────────────────────────────────
    const products = getShop();
    if (products.length === 0) {
      return await messageQueue.enqueue(sock, jid, {
        text: `🏪 A loja está vazia no momento.\n_Um admin pode adicionar produtos com */admshop add*_`
      }, { quoted: msg });
    }

    const groups = groupByCategory(products);
    let text = `🏪 *LOJA ONNX IA*\n${'━'.repeat(25)}\n\n`;

    for (const [cat, label] of Object.entries(CATEGORY_LABELS)) {
      if (!groups[cat]) continue;
      text += `*${label}*\n`;
      for (const p of groups[cat]) {
        const estoqueStr = p.stock === 0 ? ' _(sem estoque)_' : '';
        text += `  ${p.emoji} *${p.name}* — ${p.price} 🪙${estoqueStr}\n      \`${p.id}\`\n`;
      }
      text += '\n';
    }

    text += `${'━'.repeat(25)}\n`;
    text += `💡 *Como comprar:* /loja comprar <id>\n`;
    text += `🔍 *Detalhes:* /loja info <id>\n`;
    text += `💰 *Seu saldo:* ${getProfile(sender).coins} coins`;

    await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
  }
};
