// By: ONNX IA
// Powered by Orbital Code

import messageQueue from '../../core/MessageQueue.js';
import configManager from '../../config/index.js';
import fs from 'fs';
import path from 'path';

const modelOptions = [
  { id: '1', name: 'Llama 3.1 70B (Máxima Qualidade - Padrão)', modelString: 'meta/llama-3.1-70b-instruct' },
  { id: '2', name: 'Llama 3.1 8B (Latência Super Baixa)', modelString: 'meta/llama-3.1-8b-instruct' },
  { id: '3', name: 'Gemma 2 27B (Modelo Criativo Google)', modelString: 'google/gemma-2-27b-it' },
  { id: '4', name: 'Nemotron-4 340B (Pesado / Instruções Complexas)', modelString: 'nvidia/nemotron-4-340b-instruct' }
];

export default {
  name: 'modelo',
  aliases: ['modelos', 'motor'],
  category: 'ai',
  description: 'Altera o modelo neural usado pela IA.',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, args, jid, isOwner, isAdmin } = context;
    
    // Apenas dono ou admin do bot pode mudar o motor (evita que qualquer usuário quebre no grupo)
    if (!isOwner && !isAdmin) {
      return await messageQueue.enqueue(sock, jid, { text: `⛔ Acesso negado. Apenas donos e administradores do bot podem usar este comando.` }, { quoted: msg });
    }

    const config = configManager.get();
    
    // Configura garantir bloco de apis
    if (!config.apis) config.apis = {};
    const currentModel = config.apis.nvidiaModel || 'meta/llama-3.1-70b-instruct';

    if (args.length === 0) {
      let menuTexto = `🧠 *CONFIGURADOR DE MODELO NEURAL*\n\n Modelo Opcional atual:\n_\`${currentModel}\`_\n\n*Opções disponíveis:*\n`;
      
      modelOptions.forEach(opt => {
        const isCurrent = opt.modelString === currentModel ? '✅ ' : '▫️ ';
        menuTexto += `${isCurrent}*${opt.id}.* ${opt.name} \n`;
      });
      
      menuTexto += `\nPara alterar o modelo, digite:\n*/modelo [número]*\nExemplo: */modelo 2*`;
      return await messageQueue.enqueue(sock, jid, { text: menuTexto }, { quoted: msg });
    }

    const selecao = args[0];
    const opcaoValida = modelOptions.find(o => o.id === selecao);

    if (!opcaoValida) {
      return await messageQueue.enqueue(sock, jid, { 
        text: `❌ Opção inválida. Digite apenas */modelo* para ver a lista de opções (1 a ${modelOptions.length}).` 
      }, { quoted: msg });
    }

    // Altera a config
    config.apis.nvidiaModel = opcaoValida.modelString;
    
    // Salva permanentemente
    const configPath = path.join(process.cwd(), 'config', 'config.json');
    try {
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      configManager.reload();
      
      await messageQueue.enqueue(sock, jid, { 
        text: `✅ O motor neural foi alterado com sucesso!\n\nAgora a IA usará:\n*${opcaoValida.name}*\n(_${opcaoValida.modelString}_)\n\nLembre-se que alguns modelos são mais detalhados enquanto outros são mais rápidos.` 
      }, { quoted: msg });
    } catch (e) {
      await messageQueue.enqueue(sock, jid, { 
        text: `⚠️ Erro ao salvar configuração de modelo: ${e.message}` 
      }, { quoted: msg });
    }
  }
};
