import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.join(__dirname, '../../config/config.json');

class ConfigManager {
  constructor() {
    this.config = null;
    this.lastLoaded = 0;
  }

  load() {
    try {
      if (!fs.existsSync(configPath)) {
        throw new Error('Configuração base config.json não encontrada na pasta /config');
      }
      const raw = fs.readFileSync(configPath, 'utf8');
      this.config = JSON.parse(raw);
      this.lastLoaded = Date.now();
      logger.info('Configurações carregadas em RAM com sucesso.');
    } catch (e) {
      logger.error('Falha ao processar arquivo de configuração JSON.', e);
      // Fallback base
      if(!this.config) process.exit(1);
    }
  }

  get() {
    if (!this.config) {
      this.load();
    }
    return this.config;
  }

  reload() {
    this.load();
  }
}

export const configManager = new ConfigManager();
export default configManager;
