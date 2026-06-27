const fs = require("fs");
// Captura erros ANTES de qualquer require
process.on('uncaughtException', (err) => {
    const msg = `[CRASH ANTES DO BOT INICIAR]\n${err?.stack || err}\n`;
    console.error(msg);
    try { fs.appendFileSync('./crash.log', msg); } catch(e) {}
    setTimeout(() => process.exit(1), 500);
});
process.on('unhandledRejection', (reason) => {
    const msg = `[PROMISE REJEITADA]\n${reason?.stack || reason}\n`;
    console.error(msg);
    try { fs.appendFileSync('./crash.log', msg); } catch(e) {}
});

require("./configurar.js");
const { 
    default: makeWASocket, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    makeCacheableSignalKeyStore, 
    jidDecode, 
    makeInMemoryStore,
    Browsers,
    generateWAMessageFromContent,
    proto
} = require("@kurtucoben/baileys");

const chalk = require("chalk");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const readline = require("readline");
const NodeCache = require("node-cache");

// --- LOGS DE DIAGNÓSTICO (TERMINAL) ---
function logErro(msg, err) {
    const timestamp = new Date().toLocaleString('pt-BR');
    const separator = "=".repeat(50);
    const texto = `\n${separator}\n[${timestamp}] ${msg}\n${err?.stack || err}\n${separator}\n`;
    console.error(texto);
    try {
        fs.appendFileSync('./crash.log', texto);
    } catch(e) {}
}

process.on('uncaughtException', (err) => {
    logErro('EXCEÇÃO NÃO TRATADA (CRASH):', err);
    try { fs.appendFileSync('./crash.log', `[CRASH FATAL] ${err?.stack || err}\n`); } catch(e) {}
    setTimeout(() => process.exit(1), 500);
});

process.on('unhandledRejection', (reason, promise) => {
    logErro('REJEIÇÃO DE PROMESSA NÃO TRATADA:', reason);
    try { fs.appendFileSync('./crash.log', `[UNHANDLED REJECTION] ${reason?.stack || reason}\n`); } catch(e) {}
});
// ---------------------------
const { exibirBannerNezuko } = require("./funções/banner");
const NZ_PREFIX = chalk.magenta("🌸 [NEZUKO V5]");
const NZ_SYMBOL = chalk.magenta("✦");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));
const groupCache = new NodeCache({ stdTTL: 5 * 60, useClones: false });
const msgRetryCounterCache = new NodeCache();
const store = makeInMemoryStore({ logger: pino({ level: "silent" }) });
const storePath = './temp/baileys_store.json';
if (fs.existsSync(storePath)) {
    try { store.readFromFile(storePath); } catch (e) { console.error("Erro ao ler store:", e); }
}
setInterval(() => {
    if (!fs.existsSync('./temp')) fs.mkdirSync('./temp', { recursive: true });
    try { store.writeToFile(storePath); } catch (e) {}
}, 10000);

async function iniciarBot() {
    const _log = (msg) => { console.log('[LOG]', msg); try { fs.appendFileSync('./crash.log', '[LOG] ' + msg + '\n'); } catch(e) {} };
    try {
    _log('iniciarBot() chamado');
    const sessionDir = global.sessionName || "session_nezuko";
    _log('sessionDir = ' + sessionDir);
    const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
    _log('useMultiFileAuthState OK');
    const { version, isLatest } = await fetchLatestBaileysVersion();
    _log('fetchLatestBaileysVersion OK: ' + version);
    
    console.log(chalk.cyan(`\n${NZ_SYMBOL} Iniciando Nezuko-Bot via Baileys v${version.join('.')}`));

    const sock = makeWASocket({
        version,
        logger: pino({ level: "silent" }),
        printQRInTerminal: !process.argv.includes('--pairing'),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })),
        },
        browser: Browsers('Chrome'),
        syncFullHistory: false,
        markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true,
        msgRetryCounterCache,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id);
                return msg?.message || undefined;
            }
            return { conversation: "Nezuko Bot Online!" };
        },
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(message?.interactiveMessage);
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {}
                            },
                            ...message
                        }
                    }
                };
            }
            return message;
        }
    });

    sock.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    if (process.argv.includes('--pairing') && !sock.authState.creds.registered) {
        console.log(chalk.cyan(`\n${NZ_SYMBOL} MODO PAIRING CODE ATIVADO`));
        const num = await question(chalk.white(`${NZ_SYMBOL} Digite o número (Ex: 55119xxxxxxx): `));
        const cleanNum = num.replace(/[^0-9]/g, "");

        if (cleanNum.length > 8) {
            setTimeout(async () => {
                try {
                    let code = await sock.requestPairingCode(cleanNum);
                    code = code?.match(/.{1,4}/g)?.join("-") || code;
                    console.log(chalk.black.bgMagenta(`\n CÓDIGO DE ACESSO: `), chalk.black.bgWhite(` ${code} `), "\n");
                } catch (err) {
                    console.log(chalk.red(`${NZ_SYMBOL} Erro ao gerar código de pareamento.`));
                }
            }, 3000);
        }
    }

    store.bind(sock.ev);

    sock.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === "close") {
            const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode;
            
            if (shouldReconnect === DisconnectReason.loggedOut) {
                console.log(chalk.red(`\n${NZ_SYMBOL} Conexão encerrada: Desconectado pelo usuário. Removendo sessão...`));
                fs.rmSync(sessionDir, { recursive: true, force: true });
                process.exit(0);
            } else if (shouldReconnect === 401) {
                console.log(chalk.red(`\n${NZ_SYMBOL} Conexão encerrada: Sessão inválida ou expirada.`));
                fs.rmSync(sessionDir, { recursive: true, force: true });
                iniciarBot();
            } else {
                console.log(chalk.yellow(`\n${NZ_SYMBOL} Conexão perdida. Tentando reconectar...`));
                iniciarBot();
            }
        } else if (connection === "connecting") {
            console.log(chalk.yellow(`${NZ_SYMBOL} Estabelecendo conexão...`));
        } else if (connection === "open") {
            //console.clear();
            const userName = sock.user.name || 'Nezuko Bot';
            const userId = sock.user.id.split(':')[0];
            exibirBannerNezuko(userName, userId);
            console.log(chalk.green(`${NZ_SYMBOL} Conexão pronta para uso!`));
            _log('Conexão aberta OK - registrando handler de mensagens');
        }
    });

    sock.ev.on("creds.update", saveCreds);
    sock.ev.on("messages.upsert", async (chatUpdate) => {
        try {
            _log('messages.upsert recebido');
            const mek = chatUpdate.messages[0];
            if (!mek.message) { _log('sem mek.message, ignorando'); return; }
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') { _log('status broadcast, ignorando'); return; }

            _log('carregando smsg...');
            const { smsg } = require("./funções/myfunc");
            _log('smsg carregado OK');
            const m = smsg(sock, mek, store);
            _log('smsg executado OK');
            
            try {
                const { AddWhatsAppuser } = require("./database/users/senderlid");
                await AddWhatsAppuser(sock, m);
                _log('AddWhatsAppuser OK');
            } catch (e) { _log('AddWhatsAppuser erro (ignorado): ' + e.message); }

            _log('chamando nezuko.js...');
            require("./nezuko")(sock, m, chatUpdate, store, groupCache);
            _log('nezuko.js retornou');
        } catch (err) {
            logErro("Erro no Handler de Mensagens:", err);
            try { fs.appendFileSync('./crash.log', '[HANDLER ERRO] ' + (err?.stack || err) + '\n'); } catch(e) {}
        }
    });

    try {
        const { sendButton, EnvButton } = require("./funções/botoes/botoes");
        sock.sendButton = (jid, dados, buttons, quoted) => sendButton(jid, dados, sock, buttons, quoted);
        sock.EnvButton = (jid, dados, buttons, quoted) => EnvButton(jid, dados, sock, buttons, quoted);
    } catch (e) {}
    
    sock.sendText = (jid, text, quoted = '', options) => sock.sendMessage(jid, { text: text, ...options }, { quoted });
    sock.sendReaction = async (jid, key, text) => sock.sendMessage(jid, { react: { text, key } });

    return sock;
    } catch(err) {
        const msg = '[iniciarBot ERRO INTERNO] ' + (err?.stack || err) + '\n';
        console.error(msg);
        try { fs.appendFileSync('./crash.log', msg); } catch(e) {}
        throw err;
    }
}

    iniciarBot().catch(err => {
        logErro("Erro fatal na inicialização:", err);
        try { fs.appendFileSync('./crash.log', '[FATAL] ' + (err?.stack || err) + '\n'); } catch(e) {}
    });
