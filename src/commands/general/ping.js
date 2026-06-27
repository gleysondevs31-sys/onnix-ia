// By: ONNX IA
// Powered by Orbital Code

import os from 'os';
import fs from 'fs';
import { execSync } from 'child_process';
import messageQueue from '../../core/MessageQueue.js';
import { groupRepository } from '../../repositories/GroupRepository.js';

export default {
  name: 'ping',
  aliases: ['p', 'status', 'info', 'sistema'],
  category: 'general',
  description: 'Exibe estatísticas detalhadas do sistema e do bot (Universal)',
  cooldown: 5000,
  
  execute: async (context) => {
    const { sock, msg, jid } = context;
    try {
      const isTermux = process.env.PREFIX?.includes('com.termux') || fs.existsSync('/data/data/com.termux');
      let uptimeStr = "N/A";
      try {
        const uptimeSeconds = os.uptime();
        const days = Math.floor(uptimeSeconds / (24 * 3600));
        const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((uptimeSeconds % 3600) / 60);
        const seconds = Math.floor(uptimeSeconds % 60);
        uptimeStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } catch (e) {}
      let totalMemGB = "0.00", usedMemGB = "0.00", memPercent = "0";
      try {
        const totalMemRaw = os.totalmem();
        const freeMemRaw = os.freemem();
        totalMemGB = (totalMemRaw / (1024 ** 3)).toFixed(2);
        usedMemGB = ((totalMemRaw - freeMemRaw) / (1024 ** 3)).toFixed(2);
        memPercent = ((parseFloat(usedMemGB) / parseFloat(totalMemGB)) * 100).toFixed(1);
      } catch (e) {
        try {
          const freeOut = execSync('free -m').toString().split('\n')[1].split(/\s+/);
          const totalMB = parseInt(freeOut[1]);
          const usedMB = parseInt(freeOut[2]);
          totalMemGB = (totalMB / 1024).toFixed(2);
          usedMemGB = (usedMB / 1024).toFixed(2);
          memPercent = ((usedMB / totalMB) * 100).toFixed(1);
        } catch (shErr) {}
      }
      let cpuModel = "Desconhecido", cpuCores = "N/A";
      try {
        const cpus = os.cpus();
        if (cpus && cpus.length > 0) {
          cpuModel = cpus[0].model;
          cpuCores = cpus.length;
        } else {
          throw new Error("CPUs empty");
        }
      } catch (e) {
        try {
          const cpuInfo = execSync('grep "model name" /proc/cpuinfo | head -1').toString();
          cpuModel = cpuInfo.split(':')[1].trim();
          cpuCores = execSync('nproc').toString().trim();
        } catch (shErr) {
          cpuModel = isTermux ? "Android CPU" : "Cloud CPU";
        }
      }
      let loadAvg = "N/A";
      try {
        loadAvg = os.loadavg().map(l => l.toFixed(2)).join(' | ');
      } catch (e) {}
      const stats = groupRepository.getStats();
      const totalMessages = stats.totalMessages || 0;
      const commandsUsed = stats.commandsUsed || 0;
      const start = Date.now();
      await sock.sendMessage(jid, { react: { text: '⏳', key: msg.key } });
      const end = Date.now();
      const latency = end - start;
      let responseText = `🚀 *ONNX IA — PAINEL UNIVERSAL*\n\n`;
      responseText += `📡 *CONEXÃO*\n`;
      responseText += `  • Latência: \`${latency}ms\`\n`;
      responseText += `  • Ambiente: \`${isTermux ? 'Termux (Android)' : 'Linux/VPS'}\`\n\n`;
      responseText += `💻 *SERVIDOR*\n`;
      responseText += `  • SO: \`${os.platform()} (${os.release()})\`\n`;
      responseText += `  • CPU: \`${cpuModel}\`\n`;
      responseText += `  • Cores: \`${cpuCores}\`\n`;
      responseText += `  • Carga: \`${loadAvg}\`\n`;
      responseText += `  • RAM: \`${usedMemGB}GB / ${totalMemGB}GB (${memPercent}%)\`\n`;
      responseText += `  • Uptime: \`${uptimeStr}\`\n\n`;
      responseText += `🤖 *BOT STATS*\n`;
      responseText += `  • Node.js: \`${process.version}\`\n`;
      responseText += `  • Mensagens: \`${totalMessages.toLocaleString()}\`\n`;
      responseText += `  • Comandos: \`${commandsUsed.toLocaleString()}\`\n\n`;
      responseText += `_By: ONNX IA_`;
      await messageQueue.enqueue(sock, jid, { text: responseText }, { quoted: msg });
      await sock.sendMessage(jid, { react: { text: '⚡', key: msg.key } });
    } catch (error) {
      await messageQueue.enqueue(sock, jid, { 
        text: `🏓 *Pong!* ONNX IA ativa.\n\n_By: ONNX IA_` 
      }, { quoted: msg });
    }
  }
};
