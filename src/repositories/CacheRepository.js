class CacheRepository {
  constructor() {
    this.memoryMap = new Map();
  }

  set(key, value, ttlMs = 0) {
    this.memoryMap.set(key, {
      value,
      expiresAt: ttlMs > 0 ? Date.now() + ttlMs : 0
    });
  }

  get(key) {
    const item = this.memoryMap.get(key);
    if (!item) return null;
    
    // Verifica Expiração (TTL)
    if (item.expiresAt > 0 && Date.now() > item.expiresAt) {
      this.memoryMap.delete(key);
      return null;
    }
    
    return item.value;
  }

  has(key) {
    return this.get(key) !== null; // Utiliza o get pra forçar checagem de TTL
  }

  delete(key) {
    this.memoryMap.delete(key);
  }

  clear() {
    this.memoryMap.clear();
  }
}

export const cache = new CacheRepository();
export default cache;
