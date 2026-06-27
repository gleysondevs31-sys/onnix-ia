import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'silent'
});

export const customLog = {
  info: (msg) => console.log('\x1b[36m%s\x1b[0m', 'ℹ INFO: ' + msg),
  success: (msg) => console.log('\x1b[32m%s\x1b[0m', '✔ SUCESSO: ' + msg),
  error: (msg, err = '') => console.log('\x1b[31m%s\x1b[0m', '✖ ERRO: ' + msg, err),
  warn: (msg) => console.log('\x1b[33m%s\x1b[0m', '⚠ AVISO: ' + msg),
  debug: (msg) => console.log('\x1b[90m%s\x1b[0m', '⚙ DEBUG: ' + msg),
  baileys: logger,
};

export default customLog;
