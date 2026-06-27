import logger from '../utils/logger.js';

class CommandRegistry {
  constructor() {
    this.commands = new Map();
    this.aliases = new Map();
  }

  register(commandModule) {
    if (!commandModule.name || !commandModule.execute) {
      logger.warn('Módulo de comando inválido ignorado.', commandModule);
      return;
    }

    this.commands.set(commandModule.name, commandModule);
    
    if (commandModule.aliases && Array.isArray(commandModule.aliases)) {
      commandModule.aliases.forEach(alias => {
        this.aliases.set(alias, commandModule.name);
      });
    }
    logger.debug(`Comando registrado: /${commandModule.name}`);
  }

  getCommand(nameOrAlias) {
    const raw = nameOrAlias.toLowerCase();
    
    if (this.commands.has(raw)) {
      return this.commands.get(raw);
    }
    
    if (this.aliases.has(raw)) {
      const mainName = this.aliases.get(raw);
      return this.commands.get(mainName);
    }

    return null;
  }

  getAllCommands() {
    return Array.from(this.commands.values());
  }
}

export const commandRegistry = new CommandRegistry();
export default commandRegistry;
