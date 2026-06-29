/**
 * Start Script - Inicia Bot e Servidor Web simultaneamente
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('==================================');
console.log(' INICIANDO ONNX IA + PAINEL WEB ');
console.log('==================================\n');

// Iniciar o bot em modo web (não conecta automaticamente)
const botProcess = spawn('node', ['index.js'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, WEB_MODE: 'true' }
});

botProcess.stdout.on('data', (data) => {
  console.log(`[BOT] ${data}`);
});

botProcess.stderr.on('data', (data) => {
  console.error(`[BOT ERROR] ${data}`);
});

botProcess.on('close', (code) => {
  console.log(`[BOT] Processo encerrado com código ${code}`);
  process.exit(code);
});

// Aguardar um momento antes de iniciar o servidor web
setTimeout(() => {
  console.log('\n🌐 Iniciando servidor web...\n');
  
  const webProcess = spawn('node', ['web-server/index.js'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });

  webProcess.stdout.on('data', (data) => {
    console.log(`[WEB] ${data}`);
  });

  webProcess.stderr.on('data', (data) => {
    console.error(`[WEB ERROR] ${data}`);
  });

  webProcess.on('close', (code) => {
    console.log(`[WEB] Processo encerrado com código ${code}`);
  });

  // Quando o processo principal terminar, encerrar ambos
  process.on('SIGINT', () => {
    console.log('\n\n🛑 Encerrando processos...');
    botProcess.kill();
    webProcess.kill();
    process.exit();
  });

}, 2000); // 2 segundos de delay para o bot iniciar primeiro
