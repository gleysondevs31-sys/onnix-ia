/**
 * Web Server Completo - ONNX IA Admin
 * Servidor Express com gerenciamento completo de sessões e usuários
 */

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createConnection } from '../src/core/connection.js';
import eventHandler from '../src/events/EventHandler.js';
import logger from '../src/utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

let botInstance = null;
let botStatus = 'disconnected';

// Paths
const SESSIONS_DIR = path.join(process.cwd(), 'data', 'sessions');
const DATA_DIR = path.join(process.cwd(), 'data');

// API Routes - Status
app.get('/api/status', (req, res) => {
  res.json({ 
    status: botStatus, 
    connected: botStatus === 'connected',
    timestamp: new Date().toISOString()
  });
});

// API Routes - Bot Control
app.post('/api/bot/connect', async (req, res) => {
  try {
    if (botStatus === 'connected') {
      return res.status(400).json({ error: 'Bot já está conectado' });
    }

    botStatus = 'connecting';
    io.emit('status', { status: botStatus });

    const callbacks = {
      onQR: (qr) => io.emit('qr', qr),
      onConnectionUpdate: (update) => {
        if (update.connection === 'open') {
          botStatus = 'connected';
          io.emit('status', { status: botStatus });
        } else if (update.connection === 'close') {
          botStatus = 'disconnected';
          io.emit('status', { status: botStatus });
        }
      }
    };

    botInstance = await createConnection(eventHandler, callbacks);
    res.json({ success: true, status: botStatus });
  } catch (error) {
    botStatus = 'disconnected';
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/bot/disconnect', async (req, res) => {
  try {
    if (botInstance) {
      await botInstance.logout();
      await botInstance.end();
    }
    botInstance = null;
    botStatus = 'disconnected';
    io.emit('status', { status: botStatus });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Routes - Sessions Management
app.get('/api/sessions', (req, res) => {
  try {
    if (!fs.existsSync(SESSIONS_DIR)) {
      return res.json({ sessions: [] });
    }

    const files = fs.readdirSync(SESSIONS_DIR);
    const sessions = files.map(file => {
      const filePath = path.join(SESSIONS_DIR, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        size: stats.size,
        modified: stats.mtime,
        isCreds: file === 'creds.json'
      };
    });

    res.json({ sessions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/sessions/:filename', (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(SESSIONS_DIR, filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Arquivo não encontrado' });
    }

    fs.unlinkSync(filePath);
    res.json({ success: true, message: 'Sessão removida' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/sessions', (req, res) => {
  try {
    if (!fs.existsSync(SESSIONS_DIR)) {
      return res.json({ success: true, message: 'Nenhuma sessão para limpar' });
    }

    const files = fs.readdirSync(SESSIONS_DIR);
    let removed = 0;

    for (const file of files) {
      try {
        fs.unlinkSync(path.join(SESSIONS_DIR, file));
        removed++;
      } catch (e) {
        logger.warn(`Erro ao remover ${file}:`, e.message);
      }
    }

    res.json({ success: true, message: `${removed} sessões removidas` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Routes - Users Management
app.get('/api/users', (req, res) => {
  try {
    const usersPath = path.join(DATA_DIR, 'users.json');
    
    if (!fs.existsSync(usersPath)) {
      return res.json({ users: [] });
    }

    const usersData = fs.readFileSync(usersPath, 'utf8');
    const users = JSON.parse(usersData);

    const usersList = Object.entries(users).map(([jid, data]) => ({
      jid,
      name: data.name || jid.split('@')[0],
      coins: data.coins || 0,
      level: data.level || 1,
      xp: data.xp || 0,
      registered: data.registered || new Date().toISOString()
    }));

    res.json({ users: usersList, total: usersList.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/users/:jid', (req, res) => {
  try {
    const { jid } = req.params;
    const updates = req.body;
    const usersPath = path.join(DATA_DIR, 'users.json');

    let users = {};
    if (fs.existsSync(usersPath)) {
      users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
    }

    if (!users[jid]) {
      users[jid] = {};
    }

    users[jid] = { ...users[jid], ...updates };
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

    res.json({ success: true, user: users[jid] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/users/:jid', (req, res) => {
  try {
    const { jid } = req.params;
    const usersPath = path.join(DATA_DIR, 'users.json');

    if (!fs.existsSync(usersPath)) {
      return res.status(404).json({ error: 'Arquivo de usuários não encontrado' });
    }

    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
    
    if (!users[jid]) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    delete users[jid];
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

    res.json({ success: true, message: 'Usuário removido' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Routes - Groups Management
app.get('/api/groups', (req, res) => {
  try {
    const groupsPath = path.join(DATA_DIR, 'groups.json');
    
    if (!fs.existsSync(groupsPath)) {
      return res.json({ groups: [] });
    }

    const groupsData = fs.readFileSync(groupsPath, 'utf8');
    const groups = JSON.parse(groupsData);

    const groupsList = Object.entries(groups).map(([jid, data]) => ({
      jid,
      name: data.name || jid,
      members: data.members || 0,
      welcomeEnabled: data.welcomeEnabled !== false,
      lastActivity: data.lastActivity || new Date().toISOString()
    }));

    res.json({ groups: groupsList, total: groupsList.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Routes - Stats
app.get('/api/stats', (req, res) => {
  try {
    const stats = {
      timestamp: new Date().toISOString(),
      bot: {
        status: botStatus,
        uptime: botStatus === 'connected' ? 'Online' : 'Offline'
      },
      sessions: {
        total: 0,
        size: 0
      },
      users: {
        total: 0
      },
      groups: {
        total: 0
      }
    };

    // Count sessions
    if (fs.existsSync(SESSIONS_DIR)) {
      const files = fs.readdirSync(SESSIONS_DIR);
      stats.sessions.total = files.length;
      stats.sessions.size = files.reduce((acc, file) => {
        try {
          return acc + fs.statSync(path.join(SESSIONS_DIR, file)).size;
        } catch {
          return acc;
        }
      }, 0);
    }

    // Count users
    const usersPath = path.join(DATA_DIR, 'users.json');
    if (fs.existsSync(usersPath)) {
      const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
      stats.users.total = Object.keys(users).length;
    }

    // Count groups
    const groupsPath = path.join(DATA_DIR, 'groups.json');
    if (fs.existsSync(groupsPath)) {
      const groups = JSON.parse(fs.readFileSync(groupsPath, 'utf8'));
      stats.groups.total = Object.keys(groups).length;
    }

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  logger.info(`🌐 Servidor web rodando na porta ${PORT}`);
  logger.info(`📊 Painel administrativo: http://localhost:${PORT}`);
});
