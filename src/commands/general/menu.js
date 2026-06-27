// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import commandRegistry from '../CommandRegistry.js';
import configManager from '../../config/index.js';
import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';

const CATEGORY_INFO = {
  general:  { emoji: '📋', title: 'GERAL' },
  admin:    { emoji: '👑', title: 'ADMINISTRAÇÃO' },
  ai:       { emoji: '🤖', title: 'INTELIGÊNCIA ARTIFICIAL' },
  media:    { emoji: '📥', title: 'DOWNLOADS & MÍDIA' },
  fun:      { emoji: '🎮', title: 'DIVERSÃO & JOGOS' },
  economy:  { emoji: '🏪', title: 'LOJA & MASCOTES' },
};

export default {
  name: 'menu',
  aliases: ['start', 'help', 'ajuda', 'comandos'],
  category: 'general',
  description: 'Lista todos os comandos disponíveis',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, pushName, isOwner, isAdmin } = context;

    // Se passou uma categoria específica
    const filter = args[0]?.toLowerCase();
    
    const cmds = commandRegistry.getAllCommands();
    const categories = {};

    cmds.forEach(c => {
      const cat = c.category || 'general';
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(c);
    });

    const config = configManager.get();
    const botName = config.botName || 'ONNX IA';
    const now = new Date();
    const hora = now.getHours();
    const saudacao = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';

    // Se filtrou por categoria
    if (filter && CATEGORY_INFO[filter]) {
      const info = CATEGORY_INFO[filter];
      const catCmds = categories[filter] || [];
      
      let text = `${info.emoji} *${info.title}*\n`;
      text += `━━━━━━━━━━━━━━━━━━\n\n`;
      
      catCmds.forEach(c => {
        const aliases = c.aliases?.length ? ` _(${c.aliases.join(', ')})_` : '';
        text += `  ▸ */${c.name}*${aliases}\n`;
        text += `     ${c.description}\n\n`;
      });

      text += `_Digite /menu para ver todas as categorias._`;
      return await messageQueue.enqueue(sock, jid, { text }, { quoted: msg });
    }

    // Menu completo
    let menuText = '';
    
    menuText += `╭━━━━━━━━━━━━━━━━━━━╮\n`;
    menuText += `┃  🤖 *${botName}*\n`;
    menuText += `┃  ${saudacao}, *${pushName}*!\n`;
    menuText += `╰━━━━━━━━━━━━━━━━━━━╯\n\n`;

    // ── GERAL ──
    menuText += `📋 *GERAL*\n`;
    menuText += `┃\n`;
    menuText += `┃ ▸ /menu — _Menu de comandos_\n`;
    menuText += `┃ ▸ /ping — _Status do sistema_\n`;
    menuText += `┃ ▸ /config — _Configurações do bot_\n`;
    menuText += `┃ ▸ /group — _Info do grupo_\n`;
    menuText += `┃\n\n`;

    // ── ADMIN DO GRUPO ──
    menuText += `👑 *ADMINISTRAÇÃO DE GRUPO*\n`;
    menuText += `┃\n`;
    menuText += `┃ ▸ /abrirgrupo — _Abre o grupo para todos_\n`;
    menuText += `┃ ▸ /fechargrupo — _Fecha (só admins falam)_\n`;
    menuText += `┃ ▸ /promover @user — _Promove a admin_\n`;
    menuText += `┃ ▸ /rebaixar @user — _Remove de admin_\n`;
    menuText += `┃ ▸ /avisar [msg] — _Aviso + marca todos_\n`;
    menuText += `┃ ▸ /tagall [msg] — _Marca todos do grupo_\n`;
    menuText += `┃ ▸ /marcar @user — _Marca individual_\n`;
    menuText += `┃ ▸ /welcome — _Boas-vindas com imagem_\n`;
    menuText += `┃\n\n`;

    // ── PROTEÇÃO ──
    menuText += `🛡️ *PROTEÇÃO DO GRUPO*\n`;
    menuText += `┃\n`;
    menuText += `┃ ▸ /protecao status — _Painel de proteções_\n`;
    menuText += `┃ ▸ /protecao antilink 1 — _Anti-link ON_\n`;
    menuText += `┃ ▸ /protecao antiporn 1 — _Anti-porn ON_\n`;
    menuText += `┃ ▸ /protecao antispam 1 — _Anti-spam ON_\n`;
    menuText += `┃\n\n`;

    // ── ADMIN DO BOT ──
    menuText += `⚙️ *ADMIN DO BOT*\n`;
    menuText += `┃\n`;
    menuText += `┃ ▸ /admin — _Painel administrativo_\n`;
    menuText += `┃ ▸ /dono — _Área do dono_\n`;
    menuText += `┃ ▸ /schedule — _Gerenciar agendamentos_\n`;
    if (isOwner) {
      menuText += `┃ ▸ /eval [código] — _Executar JS (dono)_\n`;
      menuText += `┃ ▸ /ligar-aquecer_pv — _IA no PV (ON)_\n`;
      menuText += `┃ ▸ /desligar-aquecer_pv — _IA no PV (OFF)_\n`;
    }
    menuText += `┃\n\n`;

    menuText += `🤖 *INTELIGÊNCIA ARTIFICIAL*\n`;
    menuText += `┃\n`;
    menuText += `┃ ▸ /ia [pergunta] — _Chat inteligente_\n`;
    menuText += `┃ ▸ /pesquisar [tema] — _Busca web + IA_\n`;
    menuText += `┃ ▸ /modelo — _Trocar motor da IA_\n`;
    menuText += `┃ ▸ /imagine [desc] — _Gerar imagem com IA_\n`;
    menuText += `┃ ▸ /ver — _Analisar imagem com IA_\n`;
    menuText += `┃\n\n`;

    // ── DOWNLOADS ──
    menuText += `📥 *DOWNLOADS & MÍDIA*\n`;
    menuText += `┃\n`;
    menuText += `┃ ▸ /play [música] — _Baixar áudio YouTube_\n`;
    menuText += `┃ ▸ /tiktok [url] — _Baixar vídeo TikTok_\n`;
    menuText += `┃ ▸ /instagram [url] — _Baixar do Instagram_\n`;
    menuText += `┃ ▸ /sticker — _Criar figurinha_\n`;
    menuText += `┃ ▸ /pinterest [tema] — _Buscar imagens_\n`;
    menuText += `┃\n\n`;

    // ── LOJA & MASCOTES ──
    menuText += `🏪 *LOJA & MASCOTES*\n`;
    menuText += `┃\n`;
    menuText += `┃ 🛒 *LOJA:*\n`;
    menuText += `┃ ▸ /loja — _Ver todos os produtos_\n`;
    menuText += `┃ ▸ /loja comprar <id> — _Comprar um item_\n`;
    menuText += `┃ ▸ /loja info <id> — _Detalhes do produto_\n`;
    menuText += `┃ ▸ /inventario — _Ver sua mochila_\n`;
    menuText += `┃\n`;
    menuText += `┃ 🐾 *MASCOTES:*\n`;
    menuText += `┃ ▸ /mascote — _Status do seu pet_\n`;
    menuText += `┃ ▸ /mascote lista — _Tipos disponíveis_\n`;
    menuText += `┃ ▸ /mascote adotar <tipo> — _Adotar um pet_\n`;
    menuText += `┃ ▸ /mascote alimentar — _Alimentar o pet_\n`;
    menuText += `┃ ▸ /mascote vestir <id> — _Equipar item_\n`;
    menuText += `┃ ▸ /mascote liberar — _Liberar o pet_\n`;
    if (isOwner || isAdmin) {
      menuText += `┃\n`;
      menuText += `┃ 🔧 *ADMIN LOJA:*\n`;
      menuText += `┃ ▸ /admshop add — _Adicionar produto_\n`;
      menuText += `┃ ▸ /admshop rm <id> — _Remover produto_\n`;
      menuText += `┃ ▸ /admshop list — _Ver catálogo completo_\n`;
      menuText += `┃ ▸ /admshop reset — _Restaurar catálogo_\n`;
    }
    menuText += `┃\n\n`;

    menuText += `🎮 *DIVERSÃO & JOGOS*\n`;
    menuText += `┃\n`;
    menuText += `┃ 👤 *PERFIL & ECONOMIA:*\n`;
    menuText += `┃ ▸ /perfil — _Seu nível, XP e moedas_\n`;
    menuText += `┃ ▸ /diario — _Bônus diário (reset às 00h)_\n`;
    menuText += `┃ ▸ /ranking — _Top 10 do grupo_\n`;
    menuText += `┃ ▸ /pix @user [valor] — _Transferir coins_\n`;
    menuText += `┃\n`;
    menuText += `┃ ⛏️ *GANHAR COINS (Atividades):*\n`;
    menuText += `┃ ▸ /trabalhar — _Trabalho (4h cooldown)_\n`;
    menuText += `┃ ▸ /minar — _Mineração (30min cooldown)_\n`;
    menuText += `┃ ▸ /pescar — _Pesca (1h cooldown)_\n`;
    menuText += `┃ ▸ /roubar @user — _Roubo (2h cooldown, risco!)_\n`;
    menuText += `┃\n`;
    menuText += `┃ 🎰 *CASSINO:*\n`;
    menuText += `┃ ▸ /cassino [valor] — _Caça-níqueis (slots)_\n`;
    menuText += `┃ ▸ /tigrinho [valor] — _Tigrinho com animação_\n`;
    menuText += `┃ ▸ /blackjack [valor] — _Jogue o 21_\n`;
    menuText += `┃ ▸ /dados [valor] — _Jogo de dados_\n`;
    menuText += `┃ ▸ /coinflip [cara/coroa] [valor] — _Cara ou coroa_\n`;
    menuText += `┃ ▸ /aviator [valor] — _Aposte e retire antes do crash!_\n`;
    menuText += `┃ ▸ /roleta [cor/num] [valor] — _Roleta europeia_\n`;
    menuText += `┃ ▸ /jankenpon [valor] — _Pedra, Papel, Tesoura_\n`;
    menuText += `┃ ▸ /guerra [valor] — _Guerra de Cartas_\n`;
    menuText += `┃\n`;
    menuText += `┃ 🎲 *JOGOS INTERATIVOS:*\n`;
    menuText += `┃ ▸ /velha @user — _Jogo da Velha (2 jogadores)_\n`;
    menuText += `┃ ▸ /forca — _Jogo da Forca_\n`;
    menuText += `┃ ▸ /anagrama — _Desembaralhe a palavra_\n`;
    menuText += `┃ ▸ /minado — _Campo Minado 5×5_\n`;
    menuText += `┃ ▸ /enigma — _Enigmas e charadas_\n`;
    menuText += `┃ ▸ /perguntas — _Quiz com recompensa_\n`;
    menuText += `┃\n`;
    menuText += `┃ 🎭 *ENTRETENIMENTO:*\n`;
    menuText += `┃ ▸ /verdade — _Verdade ou Desafio_\n`;
    menuText += `┃ ▸ /cantada — _Gerador de cantadas_\n`;
    menuText += `┃ ▸ /frase — _Frase motivacional_\n`;
    menuText += `┃ ▸ /sorteio — _Sortear membro_\n`;
    menuText += `┃ ▸ /enquete — _Criar enquete_\n`;
    menuText += `┃ ▸ /eununca — _Eu Nunca (party game)_\n`;
    menuText += `┃ ▸ /aquecer — _Missão anti-ban_\n`;
    menuText += `┃ _(Jogos: sem /comando após iniciar!)_\n`;
    menuText += `┃\n\n`;


    // ── RODAPÉ ──
    menuText += `╭━━━━━━━━━━━━━━━━━━━╮\n`;
    menuText += `┃ 📊 *${cmds.length} comandos* disponíveis\n`;
    menuText += `┃ 💡 /menu [categoria] p/ detalhes\n`;
    menuText += `┃ 📌 Categorias: general, admin,\n`;
    menuText += `┃    ai, media, fun, economy\n`;
    menuText += `╰━━━━━━━━━━━━━━━━━━━╯`;

    // Imagem do Menu (AQUECENDO CHIP METROCASA)
    const imageUrl = 'https://i.ibb.co/tM1F79Sd/Whats-App-Image-2026-04-23-at-19-23-57.jpg';

    // O envio via Imagem clássica garante que todo celular / whatsapp web verá o menu, sem ser bloqueado pela API.
    await messageQueue.enqueue(sock, jid, { 
      image: { url: imageUrl }, 
      caption: menuText 
    }, { quoted: msg });
  }
};
