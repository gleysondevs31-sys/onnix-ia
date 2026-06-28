const socket = io();
let currentStatus = 'disconnected';

// Socket.io Events
socket.on('connect', () => {
    console.log('Conectado ao servidor');
    checkStatus();
    loadStats();
});

socket.on('status', (data) => {
    updateStatus(data.status);
});

socket.on('qr', (qr) => {
    displayQR(qr);
});

// UI Functions
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId + 'Section').style.display = 'block';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (sectionId === 'sessions') loadSessions();
    if (sectionId === 'users') loadUsers();
    if (sectionId === 'groups') loadGroups();
    if (sectionId === 'stats') loadDetailedStats();
    if (sectionId === 'dashboard') loadStats();
}

function updateStatus(status) {
    currentStatus = status;
    const indicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    const botStatus = document.getElementById('botStatus');
    const connectBtn = document.getElementById('connectBtn');
    const disconnectBtn = document.getElementById('disconnectBtn');
    
    indicator.className = 'status-indicator';
    
    switch(status) {
        case 'connected':
            indicator.classList.add('status-connected');
            statusText.textContent = 'Conectado';
            botStatus.textContent = 'Conectado';
            botStatus.className = 'text-success';
            connectBtn.disabled = true;
            disconnectBtn.disabled = false;
            document.getElementById('qrContainer').style.display = 'none';
            document.getElementById('connectionInfo').style.display = 'block';
            break;
        case 'connecting':
            indicator.classList.add('status-connecting');
            statusText.textContent = 'Conectando...';
            botStatus.textContent = 'Conectando...';
            botStatus.className = 'text-warning';
            connectBtn.disabled = true;
            disconnectBtn.disabled = true;
            break;
        case 'disconnected':
            indicator.classList.add('status-disconnected');
            statusText.textContent = 'Desconectado';
            botStatus.textContent = 'Desconectado';
            botStatus.className = 'text-danger';
            connectBtn.disabled = false;
            disconnectBtn.disabled = true;
            document.getElementById('qrContainer').style.display = 'none';
            document.getElementById('connectionInfo').style.display = 'none';
            break;
    }
    
    document.getElementById('lastUpdate').textContent = new Date().toLocaleString();
}

function displayQR(qr) {
    const container = document.getElementById('qrContainer');
    const qrDiv = document.getElementById('qrCode');
    container.style.display = 'block';
    qrDiv.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qr)}">`;
}

// Bot Control
async function connectBot() {
    try {
        const res = await fetch('/api/bot/connect', { method: 'POST' });
        const data = await res.json();
        if (!data.success) alert('Erro: ' + data.error);
    } catch (e) {
        alert('Erro ao conectar: ' + e.message);
    }
}

async function disconnectBot() {
    if (!confirm('Deseja desconectar o bot?')) return;
    try {
        const res = await fetch('/api/bot/disconnect', { method: 'POST' });
        const data = await res.json();
        if (!data.success) alert('Erro: ' + data.error);
    } catch (e) {
        alert('Erro ao desconectar: ' + e.message);
    }
}

async function checkStatus() {
    try {
        const res = await fetch('/api/status');
        const data = await res.json();
        updateStatus(data.status);
    } catch (e) {
        console.error('Erro ao verificar status:', e);
    }
}

// Sessions Management
async function loadSessions() {
    try {
        const res = await fetch('/api/sessions');
        const data = await res.json();
        const tbody = document.getElementById('sessionsTable');
        
        if (data.sessions.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="text-center">Nenhuma sessão encontrada</td></tr>';
            return;
        }
        
        tbody.innerHTML = data.sessions.map(session => `
            <tr>
                <td>${session.name}</td>
                <td>${formatBytes(session.size)}</td>
                <td>${new Date(session.modified).toLocaleString()}</td>
                <td>${session.isCreds ? '<span class="badge badge-success">Creds</span>' : '<span class="badge badge-warning">Session</span>'}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="deleteSession('${session.name}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    } catch (e) {
        console.error('Erro ao carregar sessões:', e);
    }
}

async function deleteSession(filename) {
    if (!confirm(`Deseja deletar ${filename}?`)) return;
    try {
        const res = await fetch(`/api/sessions/${filename}`, { method: 'DELETE' });
        const data = await res.json();
        if (data.success) {
            loadSessions();
            loadStats();
        } else {
            alert('Erro: ' + data.error);
        }
    } catch (e) {
        alert('Erro ao deletar sessão: ' + e.message);
    }
}

async function clearAllSessions() {
    if (!confirm('Deseja limpar TODAS as sessões? Isso irá desconectar o bot.')) return;
    try {
        const res = await fetch('/api/sessions', { method: 'DELETE' });
        const data = await res.json();
        if (data.success) {
            loadSessions();
            loadStats();
            alert(data.message);
        } else {
            alert('Erro: ' + data.error);
        }
    } catch (e) {
        alert('Erro ao limpar sessões: ' + e.message);
    }
}

// Users Management
async function loadUsers() {
    try {
        const res = await fetch('/api/users');
        const data = await res.json();
        const tbody = document.getElementById('usersTable');
        
        if (data.users.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="text-center">Nenhum usuário encontrado</td></tr>';
            return;
        }
        
        tbody.innerHTML = data.users.map(user => `
            <tr>
                <td><small>${user.jid}</small></td>
                <td>${user.name}</td>
                <td>${user.coins}</td>
                <td>${user.level}</td>
                <td>${user.xp}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editUser('${user.jid}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteUser('${user.jid}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    } catch (e) {
        console.error('Erro ao carregar usuários:', e);
    }
}

async function editUser(jid) {
    const coins = prompt('Novo valor de coins:');
    if (coins === null) return;
    
    try {
        const res = await fetch(`/api/users/${jid}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ coins: parseInt(coins) })
        });
        const data = await res.json();
        if (data.success) {
            loadUsers();
        } else {
            alert('Erro: ' + data.error);
        }
    } catch (e) {
        alert('Erro ao editar usuário: ' + e.message);
    }
}

async function deleteUser(jid) {
    if (!confirm('Deseja deletar este usuário?')) return;
    try {
        const res = await fetch(`/api/users/${jid}`, { method: 'DELETE' });
        const data = await res.json();
        if (data.success) {
            loadUsers();
            loadStats();
        } else {
            alert('Erro: ' + data.error);
        }
    } catch (e) {
        alert('Erro ao deletar usuário: ' + e.message);
    }
}

// Groups Management
async function loadGroups() {
    try {
        const res = await fetch('/api/groups');
        const data = await res.json();
        const tbody = document.getElementById('groupsTable');
        
        if (data.groups.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="text-center">Nenhum grupo encontrado</td></tr>';
            return;
        }
        
        tbody.innerHTML = data.groups.map(group => `
            <tr>
                <td><small>${group.jid}</small></td>
                <td>${group.name}</td>
                <td>${group.members}</td>
                <td>${group.welcomeEnabled ? '<span class="badge badge-success">Ativo</span>' : '<span class="badge badge-danger">Inativo</span>'}</td>
                <td>${new Date(group.lastActivity).toLocaleString()}</td>
            </tr>
        `).join('');
    } catch (e) {
        console.error('Erro ao carregar grupos:', e);
    }
}

// Stats
async function loadStats() {
    try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        
        document.getElementById('statSessions').textContent = data.sessions.total;
        document.getElementById('statUsers').textContent = data.users.total;
        document.getElementById('statGroups').textContent = data.groups.total;
        document.getElementById('statSize').textContent = formatBytes(data.sessions.size);
    } catch (e) {
        console.error('Erro ao carregar estatísticas:', e);
    }
}

async function loadDetailedStats() {
    try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        
        const container = document.getElementById('detailedStats');
        container.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <h5>Bot</h5>
                    <p><strong>Status:</strong> ${data.bot.status}</p>
                    <p><strong>Uptime:</strong> ${data.bot.uptime}</p>
                </div>
                <div class="col-md-6">
                    <h5>Sessões</h5>
                    <p><strong>Total:</strong> ${data.sessions.total}</p>
                    <p><strong>Tamanho:</strong> ${formatBytes(data.sessions.size)}</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6">
                    <h5>Usuários</h5>
                    <p><strong>Total:</strong> ${data.users.total}</p>
                </div>
                <div class="col-md-6">
                    <h5>Grupos</h5>
                    <p><strong>Total:</strong> ${data.groups.total}</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <h5>Última Atualização</h5>
                    <p>${new Date(data.timestamp).toLocaleString()}</p>
                </div>
            </div>
        `;
    } catch (e) {
        console.error('Erro ao carregar estatísticas detalhadas:', e);
    }
}

// Utility Functions
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkStatus();
    loadStats();
    
    // Auto-refresh stats every 30 seconds
    setInterval(loadStats, 30000);
});
