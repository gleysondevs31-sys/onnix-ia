import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../../data');

class GroupRepository {
  constructor() {
    this.groupsFile = path.join(dbPath, 'groups.json');
    this.statsFile = path.join(dbPath, 'stats.json');
    this.dataCache = { groups: {}, stats: {} };
    this.ensureDb();
    this.loadAll();
  }

  ensureDb() {
    if (!fs.existsSync(dbPath)) fs.mkdirSync(dbPath, { recursive: true });
    if (!fs.existsSync(this.groupsFile)) fs.writeFileSync(this.groupsFile, JSON.stringify({}, null, 2));
    if (!fs.existsSync(this.statsFile)) fs.writeFileSync(this.statsFile, JSON.stringify({ totalMessages: 0, commandsUsed: 0 }, null, 2));
  }

  loadAll() {
    try {
      this.dataCache.groups = JSON.parse(fs.readFileSync(this.groupsFile, 'utf8'));
      this.dataCache.stats = JSON.parse(fs.readFileSync(this.statsFile, 'utf8'));
    } catch(e) {
      logger.error('Erro ao ler base de arquivos JSON (Group/Stats)', e);
    }
  }

  _saveGroups() {
    fs.writeFileSync(this.groupsFile, JSON.stringify(this.dataCache.groups, null, 2));
  }

  _saveStats() {
    fs.writeFileSync(this.statsFile, JSON.stringify(this.dataCache.stats, null, 2));
  }

  // --- Group Actions ---
  getGroup(groupId) {
    return this.dataCache.groups[groupId] || null;
  }

  getOrCreateGroup(groupId) {
    if (!this.dataCache.groups[groupId]) {
      this.dataCache.groups[groupId] = { active: true, points: {} };
      this._saveGroups();
    }
    return this.dataCache.groups[groupId];
  }

  addPoints(groupId, userId, points) {
    const g = this.getOrCreateGroup(groupId);
    if (!g.points) g.points = {};
    if (!g.points[userId]) g.points[userId] = 0;
    g.points[userId] += points;
    this._saveGroups();
    return g.points[userId];
  }

  // --- Stats Actions ---
  incrementCounter(type = 'messages') {
    if (type === 'messages') this.dataCache.stats.totalMessages++;
    if (type === 'commands') this.dataCache.stats.commandsUsed++;
    this._saveStats();
  }

  getStats() {
    return this.dataCache.stats;
  }
}

export const groupRepository = new GroupRepository();
export default groupRepository;
