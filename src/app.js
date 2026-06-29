import * as fs from 'fs';
import * as path from 'path';

// Carrega as bibliotecas Core
import configManager from './config/index.js';
import logger from './utils/logger.js';
import commandRegistry from './commands/CommandRegistry.js';
import { createConnection } from './core/connection.js';
import eventHandler from './events/EventHandler.js';
import { startScheduler } from './schedulers/scheduler.js';

// Import de comandos modularizados para registro
import menuCmd from './commands/general/menu.js';
import adminCmd from './commands/admin/admin.js';
import stickerCmd from './commands/media/sticker.js';
import pinterestCmd from './commands/media/pinterest.js';
import iaCmd from './commands/ai/ia.js';
import imagineCmd from './commands/ai/imagine.js';
import verCmd from './commands/ai/ver.js';

// V1 Compat RESTORED & V5 SOCIAL EXPANSION
import pingCmd from './commands/general/ping.js';
import configCmd from './commands/general/config.js';
import fraseCmd from './commands/fun/frase.js';
import desafioCmd from './commands/fun/desafio.js';
import rankingCmd from './commands/fun/ranking.js';
import searchCmd from './commands/ai/pesquisar.js';
import groupadmCmd from './commands/admin/groupadm.js';
import groupStatsCmd from './commands/general/group.js';
import enqueteCmd from './commands/fun/enquete.js';
import sorteioCmd from './commands/fun/sorteio.js';
import perfilCmd from './commands/fun/perfil.js';
import diarioCmd from './commands/fun/diario.js';
import cassinoCmd from './commands/fun/cassino.js';
import aquecerCmd from './commands/fun/aquecer.js';
import donoCmd from './commands/admin/dono.js';
import evalCmd from './commands/admin/eval.js';
import protecaoCmd from './commands/admin/protecao.js';
import tiktokCmd from './commands/media/tiktok.js';
import instagramCmd from './commands/media/instagram.js';
import playCmd from './commands/media/play.js';
import verdadeCmd from './commands/fun/verdade.js';
import cantadaCmd from './commands/fun/cantada.js';
import scheduleCmd from './commands/admin/schedule.js';
import welcomeCmd from './commands/admin/welcome.js';
import modeloCmd from './commands/ai/modelo.js';
import ligarAquecerPvCmd from './commands/admin/ligar-aquecer_pv.js';
import desligarAquecerPvCmd from './commands/admin/desligar-aquecer_pv.js';
import addcoinsCmd from './commands/economy/addcoins.js';
import rmcoinsCmd from './commands/economy/rmcoins.js';
import pixcoinsCmd from './commands/economy/pixcoins.js';
import tigrinhoCmd from './commands/fun/tigrinho.js';
import velhaCmd from './commands/fun/velha.js';
import anagramaCmd from './commands/fun/anagrama.js';
import forcaCmd from './commands/fun/forca.js';
import minadoCmd from './commands/fun/minado.js';
import enigmaCmd from './commands/fun/enigma.js';
import blackjackCmd from './commands/fun/blackjack.js';
import coinflipCmd from './commands/fun/coinflip.js';
import dadosCmd from './commands/fun/dados.js';
import capinarCmd from './commands/fun/capinar.js';
import trucoCmd from './commands/fun/truco.js';
import xadrezCmd from './commands/fun/xadrez.js';
import minarCmd from './commands/economy/minar.js';
import pescarCmd from './commands/economy/pescar.js';
import trabalharCmd from './commands/economy/trabalhar.js';
import roubarCmd from './commands/economy/roubar.js';
import carteiraCmd from './commands/economy/carteira.js';
import lojaCmd from './commands/economy/loja.js';
import inventarioCmd from './commands/economy/inventario.js';
import mascoteCmd from './commands/economy/mascote.js';
import colecionaveisCmd from './commands/economy/colecionaveis.js';
import admshopCmd from './commands/admin/admshop.js';
import sessionStatusCmd from './commands/admin/session-status.js';
import clearSessionCmd from './commands/admin/clear-session.js';
// 🎰 JOGOS CASINO V2
import aviatorCmd from './commands/fun/aviator.js';
import roletaCmd from './commands/fun/roleta.js';
import jankenponCmd from './commands/fun/jankenpon.js';
import guerraCmd from './commands/fun/guerra.js';
import perguntasCmd from './commands/fun/perguntas.js';
import eununcaCmd from './commands/fun/eununca.js';

logger.info('==================================');
logger.info(' INICIANDO ONNX IA V2 (ESM CORE) ');
logger.info('==================================');

// 1. Validar configs na inicialização
configManager.load();

// 2. Registrar plugins/comandos na Factory
commandRegistry.register(menuCmd);
commandRegistry.register(adminCmd);
commandRegistry.register(stickerCmd);
commandRegistry.register(pinterestCmd);
commandRegistry.register(iaCmd);
commandRegistry.register(imagineCmd);
commandRegistry.register(verCmd);

commandRegistry.register(pingCmd);
commandRegistry.register(configCmd);
commandRegistry.register(fraseCmd);
commandRegistry.register(desafioCmd);
commandRegistry.register(rankingCmd);
commandRegistry.register(searchCmd);
// NOVOS COMMANDS DE EXPANSAO NEZUKO V5 STYLE
commandRegistry.register(groupadmCmd);
commandRegistry.register(groupStatsCmd);
commandRegistry.register(enqueteCmd);
commandRegistry.register(sorteioCmd);
commandRegistry.register(perfilCmd);
commandRegistry.register(diarioCmd);
commandRegistry.register(cassinoCmd);
commandRegistry.register(aquecerCmd);
commandRegistry.register(donoCmd);
commandRegistry.register(evalCmd);
commandRegistry.register(protecaoCmd);
commandRegistry.register(tiktokCmd);
commandRegistry.register(instagramCmd);
commandRegistry.register(playCmd);
commandRegistry.register(verdadeCmd);
commandRegistry.register(cantadaCmd);
commandRegistry.register(scheduleCmd);
commandRegistry.register(welcomeCmd);
commandRegistry.register(modeloCmd);
commandRegistry.register(ligarAquecerPvCmd);
commandRegistry.register(desligarAquecerPvCmd);
commandRegistry.register(addcoinsCmd);
commandRegistry.register(rmcoinsCmd);
commandRegistry.register(pixcoinsCmd);
commandRegistry.register(tigrinhoCmd);
commandRegistry.register(velhaCmd);
commandRegistry.register(anagramaCmd);
commandRegistry.register(forcaCmd);
commandRegistry.register(minadoCmd);
commandRegistry.register(enigmaCmd);
commandRegistry.register(blackjackCmd);
commandRegistry.register(coinflipCmd);
commandRegistry.register(dadosCmd);
commandRegistry.register(capinarCmd);
commandRegistry.register(trucoCmd);
commandRegistry.register(xadrezCmd);
commandRegistry.register(minarCmd);
commandRegistry.register(pescarCmd);
commandRegistry.register(trabalharCmd);
commandRegistry.register(roubarCmd);
commandRegistry.register(carteiraCmd);
// 🏪 SISTEMA DE LOJA E MASCOTES
commandRegistry.register(lojaCmd);
commandRegistry.register(inventarioCmd);
commandRegistry.register(mascoteCmd);
commandRegistry.register(colecionaveisCmd);
commandRegistry.register(admshopCmd);
// 🔧 SESSÃO & DIAGNÓSTICO
commandRegistry.register(sessionStatusCmd);
commandRegistry.register(clearSessionCmd);
// 🎰 JOGOS CASINO V2
commandRegistry.register(aviatorCmd);
commandRegistry.register(roletaCmd);
commandRegistry.register(jankenponCmd);
commandRegistry.register(guerraCmd);
commandRegistry.register(perguntasCmd);
commandRegistry.register(eununcaCmd);

// 3. Subir e orquestrar infraestrutura
async function bootstrap() {
  try {
    // Se WEB_MODE=true, não conectar automaticamente (painel web controla)
    if (process.env.WEB_MODE === 'true') {
      logger.info('🌐 Modo Web ativado - Bot aguardando conexão via painel administrativo');
      logger.info('📊 Acesse o painel em http://localhost:3000 para conectar o bot');
      return;
    }

    // O eventHandler passa como injetor de depedência pra ser acoplado no baileys
    const sock = await createConnection(eventHandler);
    
    // Injetar Socket na cron queue (Opcional, passamos no start direto)
    startScheduler(sock);
    
  } catch (error) {
    logger.error('Falha de bootstrap Crítico:', error);
    process.exit(1);
  }
}

// 4. Tolerância à falhas Node Core Root
process.on('uncaughtException', (err) => {
  logger.error('🔥 EXCEPTION FATAL NÃO CAPTURADA:', err);
});

process.on('unhandledRejection', (reason) => {
  logger.error('🔥 PROMISE REJECT FATAL:', reason);
});

// START
bootstrap();
