import configManager from '../config/index.js';

export function isGroupAllowed(jid) {
  // Mensagens privadas (não-grupo) sempre são permitidas
  if (!jid.endsWith('@g.us')) {
    return true;
  }

  const config = configManager.get();
  
  // Se a lista vazia ou nula, aceitamos todos os grupos
  if (!config.behavior?.allowedGroups || config.behavior.allowedGroups.length === 0) {
    return true;
  }
  
  return config.behavior.allowedGroups.includes(jid);
}
