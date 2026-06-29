/**
 * Start Script - Inicia Servidor Web (que controla o bot)
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('==================================');
console.log(' INICIANDO PAINEL WEB ONNX IA ');
console.log('==================================\n');

// Iniciar apenas o servidor web (ele controla o bot)
const webProcess = spawn('node', ['web-server/index.js'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, WEB_MODE: 'true' }
});

webProcess.on('close', (code) => {
  console.log(`[WEB] Processo encerrado com código ${code}`);
  process.exit(code);
});

// Quando o processo principal terminar, encerrar o servidor web
process.on('SIGINT', () => {
  console.log('\n\n🛑 Encerrando servidor web...');
  webProcess.kill();
  process.exit();
});
