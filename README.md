# ONNX IA - Bot de Comunidade WhatsApp

Olá! Este é o projeto do bot **ONNX IA**, criado por **GleysonDevs (Connor)** para auxiliar e engajar comunidades no WhatsApp de forma inteligente, divertida e escalável.

## Funcionalidades Principais

* **Boas-vindas:** Mensagem adaptada ao horário e simpática.
* **Inteligência Artificial (NVIDIA):** Permite interações naturais, conselhos, humor e resolução de dúvidas de forma carismática e útil através da API da NVIDIA.
* **Geração de Figurinhas:** Converte imagens estáticas ou animadas em pacotes nativos do WhatsApp, usando Mídia interna ou Externa (suporta `fluent-ffmpeg`).
* **Brincadeiras e Desafios:** Sistema de desafios diários com cômputo de ranking.
* **Agendamentos Diários:** Envio autônomo (via cron-jobs) de mensagens motivacionais ou frases do dia para grupos autorizados.

## Implantação e Execução Recomendada (VPS)

### Pré-requisitos:
1. Instalar o **Node.js** v18+ 
2. Instalar o **Google Chrome/Chromium** pode NÃO ser estritamente necessário para o Baileys, mas se for processar algumas imagens complexas ou se for fallback, mantenha na máquina (o Baileys roda via Sockets leves).
3. Instalar o **FFmpeg** 
   - No Ubuntu: `sudo apt-get install ffmpeg`

### Instalação:
1. Extraia o código na sua VPS ou sincronize seu repositório.
2. Na raiz do projeto (`/onnx-ia`), execute:
```bash
npm install
```
3. Acesse `config/config.json` e adicione sua chave de API NVIDIA, além de ajustar suas preferências de operação.

### Inicialização Rápida:
```bash
npm start
```

No primeiro uso, o console irá gerar um **QR Code**. Acesse o WhatsApp Web ou o App e faça a varredura do QR Code. O console indicará quando a ONNX IA estiver autenticada e pronta para ouvir as mensagens.

> **Dica**: Utilize ferramentas como `pm2` para deixar o bot rodando eternamente em background.
> `pm2 start index.js --name onnx-ia`
