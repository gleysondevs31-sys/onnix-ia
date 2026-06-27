import { cache } from '../repositories/CacheRepository.js';
import configManager from '../config/index.js';

export function checkRateLimit(groupId, userId) {
  const config = configManager.get();
  const max = config?.behavior?.maxMessagesPerMinute || 30;
  const windowMs = 60000;
  
  const cacheKey = `rate_${groupId}_${userId}`;
  const now = Date.now();
  
  let timestamps = cache.get(cacheKey) || [];
  
  // Limpa mensagens fora da janela de deslize (60s)
  timestamps = timestamps.filter(t => (now - t) < windowMs);
  timestamps.push(now);
  
  // Como o array dura tempo indefinido na RAM, o Cache TTL ajuda a limpar lixo
  cache.set(cacheKey, timestamps, windowMs); 
  
  if (timestamps.length > max) {
    return false; // Spam detectado
  }
  
  return true; // OK
}

export function getCommandCooldownMsg(userId, commandName, cooldownMs = 20000) {
  const cacheKey = `cd_${userId}_${commandName}`;
  const item = cache.memoryMap.get(cacheKey);
  
  if (item && item.expiresAt > Date.now()) {
    const timeLeft = item.expiresAt - Date.now();
    
    const warnKey = `warn_cd_${userId}_${commandName}`;
    if (!cache.has(warnKey)) {
       cache.set(warnKey, true, timeLeft);
       return Math.ceil(timeLeft / 1000); // Retorna os segundos pra avisar
    }
    return -1; // Em cooldown mas não avisa (já avisado)
  }
  
  cache.set(cacheKey, true, cooldownMs);
  return 0; // Não está em cooldown
}
