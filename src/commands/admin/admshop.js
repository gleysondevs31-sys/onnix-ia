import messageQueue from '../../core/MessageQueue.js';
import { getShop, addProduct, removeProduct, resetShop } from '../../database/shop.js';

const CATEGORIES = ['comida', 'roupa', 'acessorio', 'brinquedo', 'mascote'];

export default {
  name: 'admshop',
  aliases: ['adminloja', 'lojaadmin', 'shopadmin'],
  category: 'admin',
  description: 'Gerencia o catálogo da loja (Admin/Dono)',
  cooldown: 0,

  execute: async (context) => {
    const { sock, msg, args, jid, isOwner, isAdmin } = context;

    // Restrito a admins e donos
    if (!isOwner && !isAdmin) {
      return await messageQueue.enqueue(sock, jid, {
        text: `⛔ *Acesso negado.* Apenas Admins e o Dono podem usar este comando.`
      }, { quoted: msg });
    }

    const sub = args[0]?.toLowerCase();

    // ── /admshop (sem argumentos) → ajuda ────────────────────────────────────
    if (!sub) {
      return await messageQueue.enqueue(sock, jid, {
        text:
          `🔧 *ADMIN LOJA — ONNX IA*\n${'━'.repeat(30)}\n\n` +
          `*Gerenciamento de Produtos:*\n\n` +
          `▸ */admshop list*\n  Lista todos os produtos\n\n` +
          `▸ */admshop add <categoria> <preço> <emoji> <nome> | <descrição>*\n  _Ex:_ \`/admshop add comida 120 🐟 Atum | Peixe fresco premium!\`\n\n` +
          `▸ */admshop rm <id>*\n  _Ex:_ \`/admshop rm atum\`\n\n` +
          `▸ */admshop reset*\n  Restaura o catálogo padrão\n\n` +
          `*Categorias válidas:* ${CATEGORIES.join(', ')}`
      }, { quoted: msg });
    }

    // ── /admshop list ─────────────────────────────────────────────────────────
    if (sub === 'list' || sub === 'lista' || sub === 'ls') {
      const products = getShop();
      if (products.length === 0) {
        return await messageQueue.enqueue(sock, jid, {
          text: `📦 A loja está vazia. Use */admshop add* para adicionar produtos.`
        }, { quoted: msg });
      }

      const grouped = {};
      for (const p of products) {
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push(p);
      }

      let text = `📋 *CATÁLOGO COMPLETO DA LOJA*\n${'━'.repeat(30)}\n\n`;
      for (const [cat, items] of Object.entries(grouped)) {
        text += `*📂 ${cat.toUpperCase()}*\n`;
        for (const p of items) {
          const stockStr = p.stock === -1 ? '∞' : `${p.stock}`;
          text += `  ${p.emoji} *${p.name}* — ${p.price}🪙 (estoque: ${stockStr})\n`;
          text += `     ID: \`${p.id}\`\n`;
        }
        text += '\n';
      }
      text += `Total: ${products.length} produtos`;
      return await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
    }

    // ── /admshop add <cat> <preco> <emoji> <nome> | <desc> ───────────────────
    if (sub === 'add' || sub === 'adicionar') {
      // Formato: /admshop add comida 100 🎁 Nome do Produto | Descrição aqui
      // args[0]=add, args[1]=categoria, args[2]=preco, args[3]=emoji, args[4..]=nome|desc
      if (args.length < 5) {
        return await messageQueue.enqueue(sock, jid, {
          text:
            `❓ *Formato incorreto!*\n\n` +
            `*Uso:* /admshop add <categoria> <preço> <emoji> <nome> | <descrição>\n\n` +
            `*Exemplo:*\n\`/admshop add comida 120 🐟 Atum Fresco | Um peixe fresco e saboroso!\`\n\n` +
            `*Categorias:* ${CATEGORIES.join(', ')}`
        }, { quoted: msg });
      }

      const category = args[1].toLowerCase();
      if (!CATEGORIES.includes(category)) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Categoria inválida: *${category}*\n\nCategorias válidas: ${CATEGORIES.join(', ')}`
        }, { quoted: msg });
      }

      const price = parseInt(args[2]);
      if (isNaN(price) || price <= 0) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Preço inválido: *${args[2]}*. Deve ser um número inteiro positivo.`
        }, { quoted: msg });
      }

      const emoji = args[3];
      // Resto após emoji = "Nome do produto | descrição"
      const rest = args.slice(4).join(' ');
      const pipeIdx = rest.indexOf('|');
      let namePart, descPart;

      if (pipeIdx !== -1) {
        namePart = rest.slice(0, pipeIdx).trim();
        descPart = rest.slice(pipeIdx + 1).trim();
      } else {
        namePart = rest.trim();
        descPart = `${namePart} para seu mascote.`;
      }

      if (!namePart) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Nome do produto não pode ser vazio.`
        }, { quoted: msg });
      }

      const newId = addProduct({
        name: namePart,
        emoji,
        price,
        category,
        description: descPart,
        stock: -1,
      });

      return await messageQueue.enqueue(sock, jid, {
        text: `✅ *Produto adicionado com sucesso!*\n\n${emoji} *${namePart}*\n💰 Preço: ${price} coins\n📂 Categoria: ${category}\n📝 Descrição: ${descPart}\n🏷️ ID: \`${newId}\``
      }, { quoted: msg });
    }

    // ── /admshop rm <id> ──────────────────────────────────────────────────────
    if (sub === 'rm' || sub === 'remover' || sub === 'del' || sub === 'delete') {
      const itemId = args[1]?.toLowerCase();
      if (!itemId) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❓ *Uso:* /admshop rm <id_do_produto>\n\nVeja os IDs com */admshop list*`
        }, { quoted: msg });
      }

      const removed = removeProduct(itemId);
      if (!removed) {
        return await messageQueue.enqueue(sock, jid, {
          text: `❌ Produto *${itemId}* não encontrado.\nVeja os IDs com */admshop list*`
        }, { quoted: msg });
      }

      return await messageQueue.enqueue(sock, jid, {
        text: `🗑️ *Produto \`${itemId}\` removido com sucesso!*`
      }, { quoted: msg });
    }

    // ── /admshop reset ────────────────────────────────────────────────────────
    if (sub === 'reset') {
      resetShop();
      return await messageQueue.enqueue(sock, jid, {
        text: `🔄 *Catálogo da loja restaurado para o padrão!*\n_Todos os produtos customizados foram removidos e o catálogo base foi reinstalado._`
      }, { quoted: msg });
    }

    // Subcomando desconhecido
    await messageQueue.enqueue(sock, jid, {
      text: `❓ Subcomando desconhecido: *${sub}*\n\nUse */admshop* para ver a ajuda.`
    }, { quoted: msg });
  }
};
