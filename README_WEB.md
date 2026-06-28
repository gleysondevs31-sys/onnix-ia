# Painel Administrativo ONNX IA - Versão Completa

Painel web completo para gerenciar o bot ONNX IA com controle total de sessões, usuários e grupos.

## Funcionalidades

### Dashboard
- Estatísticas em tempo real (sessões, usuários, grupos, tamanho)
- Status do sistema
- Atualização automática a cada 30 segundos

### Controle do Bot
- Conectar/Desconectar bot WhatsApp
- Exibir QR Code para autenticação
- Status em tempo real via Socket.io

### Gerenciamento de Sessões
- Listar todas as sessões do bot
- Visualizar tamanho e data de modificação
- Deletar sessões individuais
- Limpar todas as sessões (desconecta o bot)

### Gerenciamento de Usuários
- Listar todos os usuários registrados
- Editar coins de usuários
- Deletar usuários
- Visualizar nível e XP

### Gerenciamento de Grupos
- Listar todos os grupos ativos
- Visualizar número de membros
- Status de welcome (ativo/inativo)
- Última atividade

### Estatísticas
- Métricas detalhadas do sistema
- Contagem de sessões, usuários e grupos
- Tamanho total das sessões
- Status do bot

## Instalação

```bash
npm install
```

## Executar

```bash
npm run web
```

Acesse: `http://localhost:3000`

## Deploy no Render

1. Fazer push para GitHub
2. Criar Web Service no Render com:
   - Build Command: `npm install`
   - Start Command: `npm run web`
   - Environment Variables: `PORT=10000`

## Estrutura

```
web-server/
  └── index.js        # Servidor Express + Socket.io
public/
  ├── index.html      # Interface completa
  └── app.js          # Lógica de gerenciamento
```

## API Endpoints

### Status
- `GET /api/status` - Status do bot

### Bot Control
- `POST /api/bot/connect` - Conectar bot
- `POST /api/bot/disconnect` - Desconectar bot

### Sessions
- `GET /api/sessions` - Listar sessões
- `DELETE /api/sessions/:filename` - Deletar sessão específica
- `DELETE /api/sessions` - Limpar todas as sessões

### Users
- `GET /api/users` - Listar usuários
- `PUT /api/users/:jid` - Editar usuário
- `DELETE /api/users/:jid` - Deletar usuário

### Groups
- `GET /api/groups` - Listar grupos

### Stats
- `GET /api/stats` - Estatísticas detalhadas

## Socket.io Events

### Cliente → Servidor
- `status` - Atualização de status do bot
- `qr` - QR Code gerado

### Servidor → Cliente
- `status` - Status atual do bot
- `qr` - QR Code para autenticação

## Design

Interface moderna com as cores da Metrocasa:
- Vermelho principal: #ED1C24
- Fundo escuro: #1A1A1A
- Cards: #2D2D2D
- Bootstrap 5 + Font Awesome icons
