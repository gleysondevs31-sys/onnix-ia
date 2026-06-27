require("./configurar");
const {
  downloadContentFromMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  prepareWAMessageMedia,
  getContentType
} = require('@kurtucoben/baileys')
const uber = require("uberduck-api");
const fs = require("fs");
const yts = require("yt-search");
const util = require("util");
const chalk = require("chalk");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const {
  Youtube
} = require("ytdownloader");
const {
  mediafire
} = require("./funções de cmd/funções/mediafire");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./funções/exif");
const {
  pornok,
  hentai
} = require("./funções de cmd/funções/scraper");
const webp_mp4 = require("./funções de cmd/funções/webp_mp4.js");
const {
  validmove,
  setGame
} = require("./funções de cmd/tictactoe");
const execute = util.promisify(require("child_process").exec);
const {
  pinterest
} = require("./funções de cmd/funções/pinterest");
const {
  wallpaper
} = require("./funções de cmd/funções/wallpaper");
const sotoy = JSON.parse(fs.readFileSync("./funções de cmd/funções/sotoy.json"));
const autoreact = JSON.parse(fs.readFileSync("./funções de cmd/funções/autoreact.json"));
const {
  palavrasANA
} = require("./funções de cmd/funções/jogos.js");
const {
  infobemvindo
} = require("./funções de cmd/funções/infobv.js");
const welcome_group2 = JSON.parse(fs.readFileSync("./funções de cmd/grupos/welcomegp2.json"));
const welcome_group = JSON.parse(fs.readFileSync("./funções de cmd/grupos/welcomegp.json"));
const bye_group2 = JSON.parse(fs.readFileSync("./funções de cmd/grupos/byegp2.json"));
const {
  infopalavrao
} = require("./armor/js/infopalavrao.js");
const {
  writeExifStc
} = require("./funções/exif2");
const welkom = JSON.parse(fs.readFileSync("./funções de cmd/grupos/welkom.json"));
const {
  TelegraPh
} = require("./funções/uploader");
const thiccysapi = require("textmaker-thiccy");
const {
  addComandosId,
  deleteComandos,
  getComandoBlock,
  getComandos,
  addComandos
} = require("./funções de cmd/funções/addcmd.js");
const xfar = require("xfarr-api");
const path = require("path");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const os = require("os");
const {
  TiktokDownloader
} = require("./funções/tiktokdl");
const moment = require("moment-timezone");
const {
  JSDOM
} = require("jsdom");
const speed = require("performance-now");
const hx = require("./funções/hxz-api");
const {
  TiktokDownloaderr
} = require("./funções/tiktokmikudl");
const stalker = require("xzons-api");
const hxz = require("./funções/hxz-api");
const {
  Aki
} = require("aki-api");
const {
  insert,
  response
} = require("./funções de cmd/funções/simi.js");
const welkom2 = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/vacilo.json"));
const {
  detikNews
} = require("./funções/detik");
const {
  color,
  bgcolor
} = require("./funções/color");
const {
  convertSticker
} = require("./funções de cmd/funções/swm.js");
const tamat = JSON.parse(fs.readFileSync("./funções de cmd/funções/tamat.json"));
const countMessage = JSON.parse(fs.readFileSync("./funções de cmd/grupos/countmsg.json"));
const {
  conselhob
} = require("./funções de cmd/funções/conselhob.js");
const {
  palavras
} = require("./funções de cmd/funções/conselhos.js");
const {
  mediafireDl
} = require("./funções/mediafire");
const {
  cantadas
} = require("./funções de cmd/funções/cantadas.js");
const {
  eununca
} = require("./funções de cmd/funções/eununca.js");
const adeuscara = JSON.parse(fs.readFileSync("./funções de cmd/grupos/adeuscara.json"));
const botoff = JSON.parse(fs.readFileSync("./datab/grupos/botoff.json"));

// ✅ Correção Bug 1: wlcm e gcrevoke declarados (eram usados sem definição)
const wlcm = fs.existsSync("./funções de cmd/grupos/wlcm.json")
  ? JSON.parse(fs.readFileSync("./funções de cmd/grupos/wlcm.json"))
  : [];
const gcrevoke = fs.existsSync("./funções de cmd/grupos/gcrevoke.json")
  ? JSON.parse(fs.readFileSync("./funções de cmd/grupos/gcrevoke.json"))
  : [];
const {
  menu
} = require("./funções de cmd/menu/menu.js");
const {
  menuanime
} = require("./funções de cmd/menu/menuanime.js");
const {
  menupuxadas
} = require("./funções de cmd/menu/menupuxadas");
const {
  menudestrava
} = require("./funções de cmd/menu/menudestrava");
const {
  menubrincadeiras2
} = require("./funções de cmd/menu/menubrincadeiras2");
const {
  menuadm
} = require("./funções de cmd/menu/menuadm");
const {
  menupremium
} = require("./funções de cmd/menu/menupremium");
const {
  menudesban
} = require("./funções de cmd/menu/menudesban");
const {
  menupack
} = require("./funções de cmd/menu/menupack");
const {
  menugerar
} = require("./funções de cmd/menu/menugerar");
const {
  menugeradores
} = require("./funções de cmd/menu/menugeradores");
const {
  menutravas
} = require("./funções de cmd/menu/menutravas");
const {
  menusemprefixo
} = require("./funções de cmd/menu/menusemprefixo");
const {
  menugrupo
} = require("./funções de cmd/menu/menugrupo");
const {
  menuimitacoes
} = require("./funções de cmd/menu/menuimitacoes");
const {
  menuefeito
} = require("./funções de cmd/menu/menuefeito");
const {
  menupesquisa
} = require("./funções de cmd/menu/menupesquisa");
const {
  menubrincadeiras
} = require("./funções de cmd/menu/menubrincadeiras");
const {
  menumusica
} = require("./funções de cmd/menu/menumusica");
const {
  menuedits2
} = require("./funções de cmd/menu/menuedits2");
const {
  menuplaquinhas
} = require("./funções de cmd/menu/menuplaquinhas");
const {
  menulogos
} = require("./funções de cmd/menu/menulogos");
const {
  infodono
} = require("./funções de cmd/menu/infodono");
const {
  menudono
} = require("./funções de cmd/menu/menudono");
const {
  menufig
} = require("./funções de cmd/menu/menufig");
const {
  alteradores
} = require("./funções de cmd/menu/alteradores");
const {
  menujogos
} = require("./funções de cmd/menu/menujogos");
const {
  EmojiAPI
} = require("emoji-api");
const imgbbUploader = require("imgbb-uploader");
const {
  isLimit,
  getLimit,
  giveLimit,
  addBalance,
  kurangBalance,
  getBalance,
  isGame,
  gameAdd,
  givegame,
  cekGLimit
} = require("./funções/limit.js");
const emoji = new EmojiAPI();
const usedCommandRecently = new Set();
const {
  getLevelingXp,
  getLevelingLevel,
  getLevelingId,
  addLevelingXp,
  addLevelingLevel,
  addLevelingId,
  smsg,
  tanggal,
  getExtension,
  formatDate,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getGroupAdmins,
  getRandom
} = require("./funções/myfunc");
const {
  aiovideodl
} = require("./funções/scraper.js");
const cheerio = require("cheerio");
const textpro = require("./funções/textpro");
const mimetype = require("mime-types");
const {
  segunPRONTOws
} = require("./funções/segundo");
const {
  wikiSearch
} = require("./funções/wiki.js");
const premium = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/premium.json"));
const {
  upload,
  nit
} = require("./funções de cmd/funções/tourl");
const {
  forwarding,
  imgnazista,
  imggay,
  imgcorno,
  imggostosa,
  imggostoso,
  imgfeio,
  imgvesgo,
  imgbebado,
  imggado,
  matarcmd,
  beijocmd,
  chutecmd,
  tapacmd
} = require("./funções de cmd/nescessario.json");
const ms = require("ms");
let {
  covid
} = require("./funções/covid.js");
const {
  yta,
  ytv,
  searchResult
} = require("./funções/ytdl");
const advertencia = JSON.parse(fs.readFileSync("./advertencia.json"));
const toMs = require("ms");
const adv2 = JSON.parse(fs.readFileSync("./media/user/adv2.json"));
const request = require("request");
const participantess = (p2, p3) => {
  array = [];
  for (let vLN0 = 0; vLN0 < p3.length; vLN0++) {
    array.push(p3[vLN0].id);
  }
  return array;
};
const {
  travavideo
} = require("./src/travavideo.js");
const {
  porra
} = require("./src/porra");
const {
  lugia
} = require("./src/lugia");
const {
  txt
} = require("./src/txt.js");
const {
  funeral
} = require("./src/funeral");
const {
  murian
} = require("./src/murian");
const {
  pmek
} = require("./src/pmek");
const {
  loc
} = require("./src/loc");
const {
  judeu
} = require("./src/judeu");
const {
  explosion
} = require("./src/explosion");
const {
  jamaicano
} = require("./src/jamaicano");
const {
  listbug
} = require("./src/listbug.js");
const {
  malvadinha
} = require("./src/malvadinha");
const {
  spanking
} = require("./src/spanking");
const {
  cova
} = require("./src/cova");
const {
  killed
} = require("./src/killed");
const {
  sumiu
} = require("./src/sumiu");
const {
  carrinho
} = require("./src/carrinho");
const {
  carrinhodesc
} = require("./src/carrinhodesc");
const {
  carrinhofake
} = require("./src/carrinhofake");
const {
  catalogo
} = require("./src/catalogo");
const {
  catalogodesc
} = require("./src/catalogodesc");
const {
  convite
} = require("./src/convite");
const {
  doc
} = require("./src/doc");
const {
  pdf
} = require("./src/pdf");
const {
  pdfkill
} = require("./src/pdfkill");
const {
  telapreta
} = require("./src/telapreta");
const {
  pdff
} = require("./src/pdff");
const {
  ngazap
} = require("./src/ngazap");
const {
  buttonkal
} = require("./src/travas/buttonkal.js");
const {
  azrarel
} = require("./src/travas/azrarel.js");
const {
  home
} = require("./src/travas/home.js");
const {
  travaloc
} = require("./src/travas/travaloc.js");
const {
  destrava
} = require("./src/destrava");
const {
  destrava2
} = require("./src/destrava2");
const {
  destrava3
} = require("./src/destrava3");
const {
  destrava4
} = require("./src/destrava4");
const {
  destrava5
} = require("./src/destrava5");
const {
  destrava6
} = require("./src/destrava6");
const {
  destrava7
} = require("./src/destrava7");
const {
  destrava8
} = require("./src/destrava8");
const {
  destrava9
} = require("./src/destrava9");
const {
  destrava10
} = require("./src/destrava10");
const {
  destrava11
} = require("./src/destrava11");
const {
  destrava12
} = require("./src/destrava12");
const {
  destrava13
} = require("./src/destrava13");
const reSize = async (p4, p5, p6) => {
  return new Promise(async (p7, p8) => {
    var v = await Jimp.read(p4);
    var v2 = await v.resize(p5, p6).getBufferAsync(Jimp.MIME_JPEG);
    p7(v2);
  });
};
const Jimp = require("jimp");
const forca = JSON.parse(fs.readFileSync("./funções/database/forca.json"));
const puppet = JSON.parse(fs.readFileSync("./funções/database/puppet_forca.json"));
const anotar = JSON.parse(fs.readFileSync("./func/tabela/anotar.json"));
const disney = JSON.parse(fs.readFileSync("./datab/disney.json"));
const hbo = JSON.parse(fs.readFileSync("./datab/hbo.json"));
const star = JSON.parse(fs.readFileSync("./datab/star.json"));
const deezer = JSON.parse(fs.readFileSync("./datab/deezer.json"));
const antiview = JSON.parse(fs.readFileSync("./funções de cmd/antis/antiview.json"));
const palavra = JSON.parse(fs.readFileSync("./datab/grupos/palavras.json"));
const palavrao = JSON.parse(fs.readFileSync("./datab/grupos/palavrao.json"));
const muted = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/muted.json"));
const pro = JSON.parse(fs.readFileSync("./funções de cmd/jogos/pro.json"));
const speedB = moment.tz("America/Sao_Paulo").format("ss");
sph = "☔";
fake = "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿";
lolkey = global.lolhuman;
keyapi = "nezuko-cripto-2.0";
var prefix = global.prefix;
NomeDoBot = global.NomeDoBot;
numerodn = global.numerodonoa;
NickDono = global.NickDono;
banChats = global.banChats;
banChatss = global.banChatss;
logo = global.log0;
logo2 = global.log2;
let picaks = ["flamejante", "flaming", "flarun", "flasmurf"];
let picak = picaks[Math.floor(Math.random() * picaks.length)];
const nsfw = JSON.parse(fs.readFileSync("./funções de cmd/grupos/nsfw.json"));
const ban = JSON.parse(fs.readFileSync("./datab/usuarios/banned.json"));
const samih = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/simi.json"));
const samih2 = JSON.parse(fs.readFileSync("./funções de cmd/funções/simi.json"));
const akinator = JSON.parse(fs.readFileSync("./funções de cmd/funções/akinator.json"));
let limit = JSON.parse(fs.readFileSync("./funções de cmd/jogos/limit.json"));
let leveling = JSON.parse(fs.readFileSync("./funções de cmd/funções/leveling.json"));
const bancht = JSON.parse(fs.readFileSync("./datab/grupos/banchat.json"));
let autosticker = JSON.parse(fs.readFileSync("./funções de cmd/funções/autosticker.json"));
const autostick = JSON.parse(fs.readFileSync("./funções de cmd/funções/autostickpc.json"));
let _level = JSON.parse(fs.readFileSync("./funções de cmd/funções/level.json"));
const joguinhodavelhajs = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/joguinhodavelha.json"));
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/joguinhodavelha2.json"));
const dinheiro = JSON.parse(fs.readFileSync("./funções de cmd/bancos/dinheiro.json"));
const mensagem = JSON.parse(fs.readFileSync("./funções de cmd/funções/menssagem.json"));
const limitefll = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/flood.json"));
const anticall = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/anticall.json"));
const antifake = JSON.parse(fs.readFileSync("./funções de cmd/antis/antifake.json"));
const antilinkhard = JSON.parse(fs.readFileSync("./funções de cmd/antis/antilinkhard.json"));
const autofigu = JSON.parse(fs.readFileSync("./funções de cmd/grupos/autofigu.json"));
const antilinkgp = JSON.parse(fs.readFileSync("./funções de cmd/antis/antilinkgp.json"));
const antiporn = JSON.parse(fs.readFileSync("./funções de cmd/antis/antiporn.json"));
const antiimg = JSON.parse(fs.readFileSync("./funções de cmd/antis/antiimg.json"));
const antiflood = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/antiflood.json"));
const antisticker = JSON.parse(fs.readFileSync("./funções de cmd/antis/antisticker.json"));
const antinotas = JSON.parse(fs.readFileSync("./funções de cmd/antis/antinotas.json"));
const antictt = JSON.parse(fs.readFileSync("./funções de cmd/antis/antictt.json"));
const anticatalogo = JSON.parse(fs.readFileSync("./funções de cmd/antis/anticatalogo.json"));
const antidoc = JSON.parse(fs.readFileSync("./funções de cmd/antis/antidoc.json"));
const antiloc = JSON.parse(fs.readFileSync("./funções de cmd/antis/antiloc.json"));
const antipv = JSON.parse(fs.readFileSync("./funções de cmd/usuarios/antipv.json"));
const antivid = JSON.parse(fs.readFileSync("./funções de cmd/antis/antivideo.json"));
const antiaudio = JSON.parse(fs.readFileSync("./funções de cmd/antis/antiaudio.json"));
const game = JSON.parse(fs.readFileSync("./funções de cmd/funções/game.json"));
module.exports = nezuko = async (sock, m, chatUpdate, store, groupCache) => {

  try {
    const mek = m;
    if (!mek.message) {
      return;
    }

    // Sistema de Reação Automática
    if (Array.isArray(autoreact) && autoreact.length > 0 && !m.fromMe && m.message) { // ✅ Correção Bug 2: autoreact é array, não boolean
        const emojis = ["🌸", "🌹", "☔", "✨", "❤️", "💖"];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        await sock.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
    }
    if (mek.key && mek.key.remoteJid == "status@broadcast") {
      return;
    }
    const v4 = Object.keys(mek.message);
    const type = Object.keys(mek.message)[0] == "senderKeyDistributionMessage" ? Object.keys(mek.message)[2] : Object.keys(mek.message)[0] == "messageContextInfo" ? Object.keys(mek.message)[1] : Object.keys(mek.message)[0];
    var body = type === "conversation" ? mek.message.conversation : type == "imageMessage" ? mek.message.imageMessage.caption : type == "videoMessage" ? mek.message.videoMessage.caption : type == "extendedTextMessage" ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : type == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : type == "templateButtonReplyMessage" ? mek.message.templateButtonReplyMessage.selectedId : type === "messageContextInfo" ? mek.message.buttonsResponseMessage?.selectedButtonId || mek.message.listResponseMessage?.singleSelectReply.selectedRowId || mek.text : "";
    const args = body.trim().split(/ +/).slice(1);
    const q = args.join(" ");
    const query = args.join(" ");
    var isCmd = body.startsWith(prefix);
    const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null;
    bady = type === "conversation" ? mek.message.conversation : type == "imageMessage" ? mek.message.imageMessage.caption : type == "videoMessage" ? mek.message.videoMessage.caption : type == "extendedTextMessage" ? mek.message.extendedTextMessage.text : mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : "";
    bidy = bady.toLowerCase();
    const vA = ["Hoje", "Amanhã", "Nunca", "dia", "semana", "mês", "ano"];
    const vA2 = ["dias", "semanas", "meses", "anos"];
    budy = type === "conversation" ? mek.message.conversation : type === "extendedTextMessage" ? mek.message.extendedTextMessage.text : "";
    var v12 = budy.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var v13 = type === "conversation" && m.message.conversation ? m.message.conversation : type == "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : type == "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : type == "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : "";
    const v14 = Object.keys(m.message)[0] == "stickerMessage" ? m.message.stickerMessage.fileSha256.toString("base64") : "";
    const vF = (p13, p14, p15, p16) => {
      const vO = {
        title: p14,
        description: p15,
        buttonText: "Escolha aqui",
        footerText: "Selecione",
        listType: 1,
        sections: p16
      };
      const vO2 = {
        listMessage: vO
      };
      po = sock.prepareMessageFromContent(p13, vO2, {});
      return sock.relayWAMessage(po, {
        waitForAck: true
      });
    };
    listmes = type == "listResponseMessage" ? mek.message.listResponseMessage.title : "";
    const v15 = JSON.parse(fs.readFileSync("./dono/nescessario.json"));
    const vA3 = [numerodn + "@s.whatsapp.net", v15.dono2 + "@s.whatsapp.net", v15.dono3 + "@s.whatsapp.net", v15.dono4 + "@s.whatsapp.net", v15.dono5 + "@s.whatsapp.net", v15.dono6 + "@s.whatsapp.net", v15.dono7 + "@s.whatsapp.net"];
    const v16 = m.key.fromMe ? true : false;
    const vA4 = [numerodn + "@s.whatsapp.net"];
    const isOwner = vA4.includes(m.sender) || v16;
    const isPremium = vA3.includes(m.sender) || v16;
    const v19 = sock.user.id.split(":")[0] + "@s.whatsapp.net";
    const v20 = m.sender == v19 ? true : false;
    const v21 = args.join(" ");
    const from = m.key.remoteJid;
    const isGroup = from.endsWith("@g.us");
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const vF2 = p17 => {
      const vO3 = {
        id: p17,
        dinheiro: 0
      };
      const vVO3 = vO3;
      dinheiro.push(vVO3);
      fs.writeFileSync("./funções de cmd/bancos/dinheiro.json", JSON.stringify(dinheiro));
    };
    const vF3 = (p18, p19) => {
      let v26 = false;
      Object.keys(dinheiro).forEach(p20 => {
        if (dinheiro[p20].id === p18) {
          v26 = p20;
        }
      });
      if (v26 !== false) {
        dinheiro[v26].dinheiro += p19;
        fs.writeFileSync("./funções de cmd/bancos/dinheiro.json", JSON.stringify(dinheiro));
      }
    };
    const vF4 = p21 => {
      let v27 = false;
      Object.keys(dinheiro).forEach(p22 => {
        if (dinheiro[p22].id === p21) {
          v27 = p22;
        }
      });
      if (v27 !== false) {
        return dinheiro[v27].dinheiro;
      }
    };
    const v28 = isGroup ? await sock.groupMetadata(from) : "";
    const v29 = isGroup ? await v28.participants : "";
    const groupName = isGroup ? v28.subject : "";
    const sender = isGroup ? m.key.participant : m.key.remoteJid;
    const pushname = m.pushName ? m.pushName : "";
    const v33 = v13.slice(0).trim().split(/ +/).shift().toLowerCase();
    const v34 = body.substring(body.indexOf(" ") + 1);
    const v35 = body.split(/ +/g);
    const vV6 = body;
    const vV62 = body;
    const v36 = isGroup ? v28.desc : "";
    const v37 = isGroup ? v28.participants : "";
    const v38 = isGroup ? getGroupAdmins(v37) : "";
    const v39 = [...global.numerodonoa].map(p23 => p23.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
    const v40 = isGroup ? samih.includes(from) : false;
    const v41 = isGroup ? samih2.includes(from) : false;
    const v42 = nit.includes(sender);
    isGamePro = pro.includes(sender);
    const v43 = isGroup ? nsfw.includes(from) : true;
    const v44 = premium.includes(sender);
    const v45 = v38.includes(v19) || false;
    const isGroupAdmins = v38.includes(sender) || false;
    const isBotGroupAdmins = v38.includes(v19) || false;
    const v48 = isGroup ? wlcm.includes(from) : true;
    const v49 = isGroup ? gcrevoke.includes(from) : false;
    const v50 = isGroup ? leveling.includes(from) : false;
    const v51 = autostick.includes(from);
    const v52 = isGroup ? autosticker.includes(from) : false;
    const v53 = JSON.parse(fs.readFileSync("./funções de cmd/grupos/adeus.json"));
    const v54 = JSON.parse(fs.readFileSync("./funções de cmd/grupos/bemvindo.json"));
    const v55 = isGroup ? v54.includes(from) : false;
    const v56 = isGroup ? v53.includes(from) : false;
    const v57 = JSON.stringify(m.message);
    const vF5 = (p24, p25, p26, p27) => {
      const vO4 = {
        text: p25,
        footer: p26,
        templateButtons: p27
      };
      return sock.sendMessage(p24, vO4);
    };
    const v58 = isGroup ? antifake.includes(from) : false;
    const v59 = isGroup ? antictt.includes(from) : false;
    const v60 = isGroup ? anticatalogo.includes(from) : false;
    const v61 = isGroup ? antiflood.includes(from) : false;
    const v62 = isGroup ? antilinkhard.includes(from) : false;
    const v63 = isGroup ? joguinhodavelhajs.includes(sender) : false;
    const v64 = isGroup ? antilinkgp.includes(from) : false;
    const v65 = isGroup ? antiporn.includes(from) : false;
    const v66 = isGroup ? palavrao.includes(from) : false;
    const v67 = isGroup ? antiaudio.includes(from) : false;
    const v68 = isGroup ? bancht.includes(from) : false;
    const v69 = isGroup ? antiimg.includes(from) : false;
    const v70 = isGroup ? antisticker.includes(from) : false;
    const v71 = isGroup ? antinotas.includes(from) : false;
    const v72 = isGroup ? antidoc.includes(from) : false;
    const v73 = isGroup ? antiloc.includes(from) : false;
    const v74 = isGroup ? antivid.includes(from) : false;
    const v75 = isGroup ? autoreact.includes(from) : false;
    const v76 = isGroup ? antiview.includes(from) : false;
    const v77 = isGroup ? welkom2.includes(from) : true;
    const v78 = JSON.parse(fs.readFileSync("./funções de cmd/grupos/bvmsg.json"));
    const vA5 = [];
    for (let v79 of v78) {
      vA5.push(v79.id);
    }
    if (isGroup && !JSON.stringify(v78).includes(from)) {
      const vO5 = {
        id: from,
        mensagembv: "Bem Vindo!"
      };
      v78.push(vO5);
      fs.writeFileSync("./funções de cmd/grupos/bvmsg.json", JSON.stringify(v78, null, 2) + "\n");
    }
    const vA6 = [];
    for (let v80 of welcome_group2) {
      vA6.push(v80.id);
    }
    const vA7 = [];
    for (let v81 of bye_group2) {
      vA7.push(v81.id);
    }
    const v82 = vA6.indexOf(from) >= 0 ? true : false;
    const v83 = vA7.indexOf(from) >= 0 ? true : false;
    const v84 = isGroup ? game.includes(from) : false;
    const vF6 = (p28, p29) => {
      const vO6 = {
        grupo: p29,
        pessoa: p28,
        advertencias: 0
      };
      const vVO6 = vO6;
      advertencia.push(vVO6);
      fs.writeFileSync("./advertencia.json", JSON.stringify(advertencia, null, 2) + "\n");
    };
    const vF7 = (p30, p31, p32) => {
      let v85 = false;
      Object.keys(advertencia).forEach(p33 => {
        if (advertencia[p33].pessoa === p30 && advertencia[p33].grupo === p31) {
          v85 = p33;
        }
      });
      if (v85 !== false) {
        advertencia[v85].advertencias += p32;
        fs.writeFileSync("./advertencia.json", JSON.stringify(advertencia, null, 2) + "\n");
      }
    };
    const vF8 = (p34, p35) => {
      let v86 = false;
      Object.keys(advertencia).forEach(p36 => {
        if (advertencia[p36].pessoa === p34 && advertencia[p36].grupo === p35) {
          v86 = p36;
        }
      });
      if (v86 !== false) {
        return advertencia[v86].advertencias;
      }
    };
    if (isGroup && !mek.key.fromMe) {
      advertir = vF8(sender, from);
      if (advertir == undefined) {
        vF6(sender, from);
      }
    }
    const v87 = antipv.indexOf("Ativado") >= 0 ? true : false;
    const v88 = anticall.indexOf("Ativado") >= 0 ? true : false;
    const v89 = type == "viewOnceMessage";
    const vF9 = (p37, p38) => {
      let v90 = false;
      Object.keys(dinheiro).forEach(p39 => {
        if (dinheiro[p39].id === p37) {
          v90 = p39;
        }
      });
      if (v90 !== false) {
        dinheiro[v90].dinheiro -= p38;
        fs.writeFileSync("./funções de cmd/bancos/dinheiro.json", JSON.stringify(dinheiro));
      }
    };
    const vVF4 = vF4(sender);
    try {
      if (vVF4 === undefined) {
        vF2(sender);
      }
      const v91 = Math.floor(Math.random() * 1) + 2;
      vF3(sender, v91);
    } catch (e) {
      console.error(e);
    }
    const vF10 = p40 => {
      const vO7 = {
        groupId: p40,
        users: []
      };
      const vVO7 = vO7;
      adv2.push(vVO7);
      fs.writeFileSync("./media/user/adv2.json", JSON.stringify(adv2, null, 2));
    };
    const vF11 = p41 => {
      let v92 = false;
      Object.keys(adv2).forEach(p42 => {
        if (adv2[p42].groupId === p41) {
          v92 = p42;
        }
      });
      if (v92 !== false) {
        return adv2[v92].groupId;
      }
    };
    const vF12 = (p43, p44) => {
      let v93 = false;
      Object.keys(adv2).forEach(p45 => {
        if (adv2[p45].groupId === p43) {
          v93 = p45;
        }
      });
      if (v93 !== false) {
        adv2[v93].users.push(p44);
        fs.writeFileSync("./media/user/adv2.json", JSON.stringify(adv2, null, 2));
      }
    };
    const vF13 = (p46, p47) => {
      let v94 = false;
      Object.keys(adv2).forEach(p48 => {
        if (adv2[p48].groupId === p46) {
          v94 = p48;
        }
      });
      if (v94 !== false) {
        adv2[v94].users.splice(adv2[v94].users.map(p49 => p49.userId).indexOf(p47), 1);
        fs.writeFileSync("./media/user/adv2.json", JSON.stringify(adv2, null, 2));
      }
    };
    const vF14 = p50 => {
      let v95 = false;
      Object.keys(adv2).forEach(p51 => {
        if (adv2[p51].groupId === p50) {
          v95 = p51;
        }
      });
      if (v95 !== false) {
        return adv2[v95].users;
      }
    };
    const vF15 = (p52, p53) => {
      let v96 = false;
      Object.keys(adv2).forEach(p54 => {
        if (adv2[p54].groupId === p52) {
          v96 = p54;
        }
      });
      if (v96 !== false) {
        if (adv2[v96].users.length > 0) {
          if (Date.now() >= adv2[v96].users[adv2[v96].users.map(p55 => p55.userId).indexOf(p53)].expired) {
            adv2[v96].users.splice(adv2[v96].users.map(p56 => p56.userId).indexOf(p53), 1);
            fs.writeFileSync("./media/user/adv2.json", JSON.stringify(adv2, null, 2));
          }
        }
      }
    };
    if (isGroup) {
      checar = vF11(from);
      if (checar === undefined) {
        vF10(from);
      }
    }
    if (isGroup && isCmd && vF14(from).map(p57 => p57.userId).includes(sender)) {
      vF15(from, sender);
    }
    if (isGroup && isCmd && vF14(from).map(p58 => p58.userId).includes(sender)) {
      k = "╭───「 ❔ Suporte 🤓 」\n│\n├ Olá *" + pushname + "*\n├ Você está\n├ bloqueado no momento\n│\n╰───────────────────";
      return reply(k);
    }
    const v97 = type == "imageMessage";
    const v98 = type == "videoMessage";
    const v99 = type == "audioMessage";
    const v100 = type == "stickerMessage";
    const v101 = type == "contactMessage";
    const v102 = type == "locationMessage";
    const v103 = type == "productMessage";
    const v104 = type === "imageMessage" || type === "videoMessage" || type === "audioMessage";
    typeMessage = body.substr(0, 50).replace(/\n/g, "");
    if (v97) {
      typeMessage = "Image";
    } else if (v98) {
      typeMessage = "Video";
    } else if (v99) {
      typeMessage = "Audio";
    } else if (v100) {
      typeMessage = "Sticker";
    } else if (v101) {
      typeMessage = "Contact";
    } else if (v102) {
      typeMessage = "Location";
    } else if (v103) {
      typeMessage = "Product";
    }
    const v105 = type === "extendedTextMessage" && v57.includes("textMessage");
    const v106 = type === "extendedTextMessage" && v57.includes("imageMessage");
    const v107 = type === "extendedTextMessage" && v57.includes("videoMessage");
    const v108 = type === "extendedTextMessage" && v57.includes("documentMessage");
    const v109 = type === "extendedTextMessage" && v57.includes("audioMessage");
    const v110 = type === "extendedTextMessage" && v57.includes("stickerMessage");
    const v111 = type === "extendedTextMessage" && v57.includes("contactMessage");
    const v112 = type === "extendedTextMessage" && v57.includes("locationMessage");
    const v113 = type === "extendedTextMessage" && v57.includes("productMessage");
    selectedButton = type == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : "";
    const v114 = selectedButton.trim().split(/ +/);
    const vF16 = async (p59, p60) => {
      const v115 = await downloadContentFromMessage(p59, p60);
      let v116 = Buffer.from([]);
      for await (const v117 of v115) {
        v116 = Buffer.concat([v116, v117]);
      }
      return v116;
    };
    try {
      ppimg = await sock.profilePictureUrl(sender);
    } catch {
      ppimg = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
    }
    const v118 = await getBuffer(ppimg);
    const vF17 = (p61, p62, p63) => {
      const vO8 = {
        sticker: p62
      };
      const vO9 = {
        quoted: vVO27
      };
      sock.sendMessage(p61, vO8, vO9);
    };
    const vF18 = p64 => {
      const vO10 = {
        image: p64
      };
      const vO11 = {
        quoted: m
      };
      sock.sendMessage(from, vO10, vO11);
    };
    const vF19 = (p65, p66) => {
      const vO12 = {
        text: p66
      };
      sock.sendMessage(p65, vO12);
    };
    const vF20 = p67 => {
      return p67[Math.floor(Math.random() * p67.length)];
    };
    const vF21 = (p68 = "", p69 = mek) => {
      memberr = [];
      vy = p68.includes("\n") ? p68.split("\n") : [p68];
      for (vz of vy) {
        for (zn of vz.split(" ")) {
          if (zn.includes("@")) {
            memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
          }
        }
      }
      const vO13 = {
        quoted: p69
      };
      sock.sendMessage(from, {
        text: p68.trim(),
        mentions: memberr
      }, vO13);
    };
    const vF22 = (p70, p71, p72) => {
      if (p72 == null || p72 == undefined || p72 == false) {
        sock.sendMessage(from, {
          text: p70.trim(),
          mentions: p71
        });
      } else {
        sock.sendMessage(from, {
          text: p70.trim(),
          mentions: p71
        });
      }
    };
    const vF23 = (p73, p74, p75, p76) => {
      const vO14 = {
        conversation: "" + p76
      };
      sock.sendMessage(from, p73, p74, {
        quoted: {
          key: {
            fromMe: false,
            participant: "" + p75,
            ...(from ? {
              remoteJid: from
            } : {})
          },
          message: vO14
        }
      });
    };
    const vF24 = async (p77, p78, p79, p80, p81, p82) => {
      const vP82 = p82;
      const vO15 = {
        text: p78,
        footer: p79,
        title: p80,
        buttonText: p81,
        sections: vP82
      };
      const vVO15 = vO15;
      sock.sendMessage(p77, vVO15);
    };
    function f(p83) {
      function f2(p84) {
        return (p84 < 10 ? "0" : "") + p84;
      }
      var v119 = Math.floor(p83 / 3600);
      var v120 = Math.floor(p83 % 3600 / 60);
      var p83 = Math.floor(p83 % 60);
      return f2(v119) + " HORAS " + f2(v120) + " MINUTOS " + f2(p83) + " SEGUNDOS";
    }
    const v121 = moment().tz("America/Sao_Paulo").format("HH:mm:ss");
    if (v121 > "00:00:00") {
      var vLSBoaMadrugada = "Boa madrugada";
    }
    if (v121 > "05:30:00") {
      var vLSBoaMadrugada = "Bom dia";
    }
    if (v121 > "12:00:00") {
      var vLSBoaMadrugada = "Boa tarde";
    }
    if (v121 > "19:00:00") {
      var vLSBoaMadrugada = "Boa noite";
    }
    const vO16 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "557999398421-1625944593@g.us"
      } : {})
    };
    const vO17 = {
      caption: vLSBoaMadrugada + " " + pushname + " ✨"
    };
    const vO18 = {
      liveLocationMessage: vO17
    };
    const vO19 = {
      key: vO16,
      message: vO18
    };
    const vVO19 = vO19;
    const vO20 = {
      participant: "0@s.whatsapp.net",
      ...(m.from ? {
        remoteJid: "" + m.from
      } : {})
    };
    const vO21 = {
      text: "aqui está " + pushname + " 🌹"
    };
    const vO22 = {
      extendedTextMessage: vO21
    };
    const vO23 = {
      key: vO20,
      message: vO22
    };
    const vVO23 = vO23;
    const vO24 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(m.from ? {
        remoteJid: "6283136505591-1614953337@g.us"
      } : {})
    };
    const vO25 = {
      key: vO24,
      message: {
        contactMessage: {
          displayName: "" + pushname,
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;NEZUKO,;;;\nFN:NEZUKO,\nitem1.TEL;waid= \"./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg\":\"./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg\"\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: fs.readFileSync("funções de cmd/mídia-ft-vd/fotos/nezuko.jpg"),
          thumbnail: fs.readFileSync("funções de cmd/mídia-ft-vd/fotos/nezuko.jpg"),
          sendEphemeral: true
        }
      }
    };
    const vO26 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...{
        remoteJid: "status@broadcast"
      }
    };
    const vO27 = {
      key: vO26,
      message: {
        imageMessage: {
          caption: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        }
      }
    };
    const vVO27 = vO27;
    const vO28 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        orderMessage: {
          itemCount: 777,
          status: 200,
          thumbnail: await reSize(logo2, 100, 100),
          surface: 200,
          message: "" + NomeDoBot,
          orderTitle: "Yajiir",
          sellerJid: "0@s.whatsapp.net"
        }
      },
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true
      },
      sendEphemeral: true
    };
    const vO29 = {
      displayName: "" + pushname
    };
    const vO30 = {
      contactMessage: vO29
    };
    const vO31 = {
      key: {
        participant: "0@s.whatsapp.net"
      },
      message: vO30
    };
    const vVO31 = vO31;
    const vO32 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "557598293339@g.us"
      },
      message: {
        orderMessage: {
          itemCount: 0,
          status: 4,
          thumbnail: fs.readFileSync("./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg"),
          message: "Nick : " + pushname,
          surface: 100,
          sellerJid: "0@s.whatsapp.net"
        }
      }
    };
    const vO33 = {
      participant: "0@s.whatsapp.net",
      mentionedJid: "Dacoro",
      ...(m.from ? {
        remoteJid: "" + m.from
      } : {})
    };
    const vO34 = {
      key: vO33,
      message: {
        extendedTextMessage: {
          text: "𝑫𝒏 𝑵𝒐 𝑪𝒐𝒏𝒕𝒓𝒐𝒍𝒆 😈"
        }
      }
    };
    const vVO34 = vO34;
    const reply = p85 => {
      const vO35 = {
        text: p85
      };
      const vO36 = {
        quoted: m
      };
      sock.sendMessage(from, vO35, vO36).catch(p86 => {
        console.log(p86);
      });
    };
    sock.createMessage = async (p87, p88, p89) => {
      const vO37 = {
        ...p89
      };
      vO37.userJid = sock.authState.creds.me.id;
      vO37.upload = sock.waUploadToServer;
      return await generateWAMessage(p87, p88, vO37);
    };
    function f3(p90) {
      return Math.floor(Math.random() * p90) + 1;
    }
    const v122 = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
    const v123 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
    const v124 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
    const v125 = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
    const v126 = type == "audioMessage" ? "Áudio" : type == "stickerMessage" ? "Figurinha" : type == "imageMessage" ? "Imagem" : type == "videoMessage" ? "Vídeo" : type == "documentMessage" ? "Documento" : type == "contactMessage" ? "Contato" : type == "locationMessage" ? "Localização" : "Mensagem";
    if (!isGroup && isCmd) {
      console.log("[1;31m~[1;37m>", "[[1;32m COMANDO [1;37m]", color(command, "yellow"), "do", color(pushname, "yellow"), "Horas:", color(v123, "yellow"));
    }
    if (isCmd && isGroup) {
      console.log("[1;31m~[1;37m>", "[[1;32m COMANDO [1;37m]", color(command, "yellow"), "do", color(pushname, "yellow"), "Grupo:", color(groupName, "yellow"), "Horas:", color(v123, "yellow"));
    }
    if (!isCmd && isGroup && !mek.key.fromMe) {
      console.log("[1;31m~[1;37m>", "[[1;32m MENSAGEM [1;37m]", color(v126, "yellow"), "do", color(pushname, "yellow"), "Grupo:", color(groupName, "yellow"), "Horas:", color(v123, "yellow"));
    }
    if (!isGroup && !isCmd && !mek.key.fromMe) {
      console.log("[1;31m~[1;37m>", "[[1;32m MENSAGEM [1;37m]", color(v126, "yellow"), "do", color(pushname, "yellow"), "Horas:", color(v123, "yellow"));
    }
    const {
      mensagens: listaMensagens
    } = require("./funções de cmd/funções/aleatoria.js");
    const {
      sortear: listaSorteio
    } = require("./funções de cmd/funções/aleatoria.js");
    var v127 = listaMensagens[Math.floor(Math.random() * listaMensagens.length)];
    const vO38 = {
      espere: "" + v127,
      successo: "️❬ ✔ ❭ Sucesso 🖤",
      levelon: "❬ ✔ ❭ *leveling* *ativado*",
      leveloff: "❬ X ❭  *leveling* *desativado*",
      levelnoton: "❬ X ❭ *leveling não ativado*",
      levelnol: "*error* 0 °-°",
      error: {},
      msg: {}
    };
    vO38.error.stick = "*falhou, tente novamente";
    vO38.error.Iv = "Link invalido ☹️";
    vO38.msg.grupo = "<❗> Este comando só pode ser utilizado em grupo.";
    vO38.msg.premium = "<❗> Este pedido é so para usuários premium.";
    vO38.msg.mod = "<❗> ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD " + global.NickDono + "*";
    vO38.msg.banido = "<❗> Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque.";
    vO38.msg.donosmt = "<❗> Este é um recurso especial para o meu Mestre.";
    vO38.msg.donosmt2 = "<❗> Este é um recurso especial para o meu Mestre.";
    vO38.msg.adm = "<❗> Este comando só pode ser usado por administradores do grupo.";
    vO38.msg.Badmin = "<❗> Este comando só pode ser usado quando o bot se tornar administrador.";
    enviar = vO38;
    const sendButtons = async (p91, p92, p93, p94 = [], p95) => {
      const buttons = p94.map(b => ({
        type: 'cmd',
        text: b.buttonText?.displayText || b.displayText || '',
        command: b.buttonId || ''
      }));
      return sock.sendButton(p91, { text: p92, footer: p93 }, buttons, p95);
    };
    const sendTemplateButtons = (p96, p97, p98, p99) => {
      const buttons = p99.map(b => {
        const btn = b.urlButton || b.callButton || b.quickReplyButton || b;
        if (btn.url) return { type: 'copy_url', text: btn.displayText, url: btn.url };
        if (btn.phoneNumber) return { type: 'call', text: btn.displayText, url: btn.phoneNumber };
        if (btn.id) return { type: 'cmd', text: btn.displayText, command: btn.id };
        return null;
      }).filter(Boolean);
      return sock.sendButton(p96, { text: p97, footer: p98 }, buttons, vVO27);
    };
    const sendImage = (p100, p101) => {
      sock.sendMessage(from, {
        image: fs.readFileSync(p100),
        caption: p101
      });
    };
    const sendImageButtons = async (p102, p103, p104, p105, p106 = [], p107) => {
      const buttons = p106.map(b => ({
        type: 'cmd',
        text: b.buttonText?.displayText || b.displayText || '',
        command: b.buttonId || ''
      }));
      return sock.sendButton(p102, { image: p103, caption: p104, footer: p105 }, buttons, p107);
    };
    const sendSticker = async (p108, p109) => {
      v427 = fs.readFileSync(p108);
      const vO45 = {
        sticker: v427
      };
      const vO46 = {
        quoted: mek
      };
      sock.sendMessage(from, vO45, vO46);
    };
    const sendGifSticker = async p110 => {
      ranp = getRandom(".gif");
      rano = getRandom(".webp");
      ini_buffer = "" + p110;
      exec("wget " + ini_buffer + " -O " + ranp + " && ffmpeg -i " + ranp + " -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 " + rano, p111 => {
        fs.unlinkSync(ranp);
        buff = fs.readFileSync(rano);
        const vO47 = {
          sticker: buff
        };
        const vO48 = {
          quoted: mek
        };
        sock.sendMessage(from, vO47, vO48).catch(p112 => {});
        fs.unlinkSync(rano);
      });
    };
    budai = budy.toLowerCase();
    if (budai.startsWith("nezuko ban")) {
      if (!isPremium) {
        return reply(" Comando bloqueado por motivo de ban no número.");
      }
      if (!isGroup) {
        return reply("Apenas em Grupo");
      }
      if (!isBotGroupAdmins) {
        return reply("O Bot não e admin");
      }
      if (!isGroupAdmins) {
        return reply("Você não e adm");
      }
      testa = budai.replace("nezuko ban", "");
      let v128 = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : testa.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      if (v128 === "@s.whatsapp.net") {
        return reply("<❗> Marque alguem ou adicione um numero.");
      }
      if (v19.includes(v128)) {
        return reply("<❗> Não sou besta de remover eu mesmo né.");
      }
      if (vA3.includes(v128)) {
        return reply("<❗> Não posso remover meu Mestre");
      }
      try {
        await sock.groupParticipantsUpdate(from, [v128], "remove");
        reply("<❗> Usuario banido com sucesso.");
      } catch {
        reply("<❗> Erro ao Remover Usuario do Grupo.");
      }
    }
    if (budai.startsWith("nezuko reviver")) {
      if (!isPremium) {
        return reply(" Comando bloqueado por motivo de ban no número.");
      }
      if (!isGroup) {
        return reply("Apenas em Grupo");
      }
      if (!isBotGroupAdmins) {
        return reply("O Bot não e admin");
      }
      if (!isGroupAdmins) {
        return reply("Você não e adm");
      }
      testa = budai.replace("nezuko reviver", "");
      let v129 = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : testa.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      if (v129 === "@s.whatsapp.net") {
        return reply("Marque alguem ou adicione um numero.");
      }
      try {
        await sock.groupParticipantsUpdate(from, [v129], "add");
        reply("Sucesso ao Reviver o Usuario");
      } catch {
        reply("Erro Ao Reviver o Usuario");
      }
    }
    if (budai.startsWith("nezuko promover")) {
      if (!isGroup) {
        return reply("Apenas em Grupo");
      }
      if (!isBotGroupAdmins) {
        return reply("O Bot não e admin");
      }
      if (!isGroupAdmins) {
        return reply("<❗> Você não é adm.");
      }
      testa = budai.replace("nezuko promover", "");
      let v130 = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : testa.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      if (v130 === "@s.whatsapp.net") {
        return reply("<❗> Marque alguem ou adicione um numero.");
      }
      try {
        await sock.groupParticipantsUpdate(from, [v130], "promote");
        reply("<❗> Sucesso ao Promover Usuario");
      } catch {
        reply("<❗> Erro Ao Promover o Usuario");
      }
    }
    if (budai.startsWith("nezuko rebaixar")) {
      if (!isGroup) {
        return reply("<❗> Apenas em Grupo.");
      }
      if (!isBotGroupAdmins) {
        return reply("<❗> O Bot não é adm.");
      }
      if (!isGroupAdmins) {
        return reply("<❗> Você não é adm");
      }
      testa = budai.replace("nezuko rebaixar", "");
      let v131 = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : testa.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      if (v131 === "@s.whatsapp.net") {
        return reply("<❗> Marque alguem ou adicione um numero.");
      }
      if (v19.includes(v131)) {
        return reply("<❗> Não sou besta de rebaixar eu mesmo né.");
      }
      if (vA3.includes(v131)) {
        return reply("<❗> Não posso rebaixar meu Mestre.");
      }
      try {
        await sock.groupParticipantsUpdate(from, [v131], "demote");
        reply("[ ! ] Usuario Rebaixado com Sucesso.");
      } catch {
        reply("[ ! ] Erro ao Rebaixar Usuario no Grupo.");
      }
    }
    if (budai.startsWith("nezuko fechargp")) {
      if (!isGroup) {
        return reply("Apenas em Grupo");
      }
      if (!isBotGroupAdmins) {
        return reply("O Bot não e admin");
      }
      if (!isGroupAdmins) {
        return reply("Você não e adm");
      }
      await sock.groupSettingUpdate(from, "announcement");
    }
    if (budai.startsWith("nezuko abrirgp")) {
      if (!isGroup) {
        return reply("<❗> Apenas em Grupo");
      }
      if (!isBotGroupAdmins) {
        return reply("<❗> O Bot não é adm.");
      }
      if (!isGroupAdmins) {
        return reply("<❗> Você não é adm.");
      }
      await sock.groupSettingUpdate(from, "not_announcement");
    }
    if (v52 && !m.key.fromMe && isGroup) {
      async function f4() {
        await setTimeout(async () => {
          if (budy.includes(prefix + "sticker") || budy.includes(prefix + "s") || budy.includes(prefix + "stk") || budy.includes(prefix + "st") || budy.includes(prefix + "fsticker") || budy.includes(prefix + "f") || budy.includes(prefix + "fstiker")) {
            return;
          }
          if (type === "videoMessage") {
            if (v104 && mek.message.videoMessage.seconds < 20) {
              rane = getRandom("." + (await getExtension(mek.message.videoMessage.mimetype)));
              buffimg = await vF16(mek.message.videoMessage, "video");
              fs.writeFileSync(rane, buffimg);
              const vRane = rane;
              rano = getRandom(".webp");
              await ffmpeg("./" + vRane).inputFormat(vRane.split(".")[1]).on("start", function (p113) {
                console.log("Started : " + p113);
              }).on("error", function (p114) {
                console.log("Error : " + p114);
                exec("webpmux -set exif " + addMetadata("bot", "manu") + " " + rano + " -o " + rano, async p115 => {
                  fs.unlinkSync(vRane);
                  tipe = vRane.endsWith(".mp4") ? "video" : "gif";
                  reply("Falha na conversão de " + tipe + " para sticker");
                });
              });
              exec("ffmpeg -i " + vRane + " -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 " + rano, p116 => {
                fs.unlinkSync(vRane);
                buffer = fs.readFileSync(rano);
                const vO49 = {
                  sticker: buffer
                };
                const vO50 = {
                  quoted: mek
                };
                sock.sendMessage(from, vO49, vO50);
                fs.unlinkSync(rano);
              });
            }
          }
          if (type === "imageMessage") {
            rane = getRandom("." + (await getExtension(mek.message.imageMessage.mimetype)));
            buffimg = await vF16(mek.message.imageMessage, "image");
            fs.writeFileSync(rane, buffimg);
            const vRane2 = rane;
            rano = getRandom(".webp");
            exec("ffmpeg -i " + vRane2 + " -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 " + rano, p117 => {
              fs.unlinkSync(vRane2);
              buffer = fs.readFileSync(rano);
              const vO51 = {
                sticker: buffer
              };
              const vO52 = {
                quoted: mek
              };
              sock.sendMessage(from, vO51, vO52);
              fs.unlinkSync(rano);
            });
          }
        }, 1000);
      }
      f4().catch(p118 => {
        console.log(p118);
      });
    }
    const vA8 = [];
    for (let v132 of muted) {
      vA8.push(v132.jid);
    }
    const v133 = isGroup && vA8.indexOf(from) >= 0 ? true : false;
    const v134 = v133 ? muted[vA8.indexOf(from)].numbers : [];
    if (v133 && v134.indexOf(sender) >= 0) {
      reply("*Eu avisei, vou meter o martelo do ban em tu 😡");
      setTimeout(async () => {
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }, 1000);
      return;
    }
    if (v75 && isGroup && isCmd) {
      if (!v75) {
        return;
      }
      emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "☔", "👺", "👹", "💨", "😸", "😹", "☔", "🫀", "👁️", "🛑", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "☔", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎗️", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"];
      reassao = emojis[Math.floor(Math.random() * emojis.length)];
      const vO53 = {
        text: reassao,
        key: m.key
      };
      const vO54 = {
        react: vO53
      };
      sendMsg = await sock.sendMessage(from, vO54);
    }
    if (v75 && isGroup && !isCmd) {
      if (!v75) {
        return;
      }
      emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "☔", "👺", "👹", "💨", "😸", "😹", "☔", "🫀", "👁️", "🛑", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "☔", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎗️", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"];
      reassao = emojis[Math.floor(Math.random() * emojis.length)];
      const vO55 = {
        text: reassao,
        key: m.key
      };
      const vO56 = {
        react: vO55
      };
      sendMsg = await sock.sendMessage(from, vO56);
    }
    async function f5() {
      if (joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
        const v135 = body.toLowerCase().split(" ")[0] || "";
        let vA9 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (fs.existsSync("./funções de cmd/tictactoe/db/" + from + ".json")) {
          const vSetGame = setGame("" + from);
          if (body == "Cex") {
            return reply("why");
          }
          if (body.toLowerCase() == "s" || body.toLowerCase() == "sim" || body.toLowerCase() == "ok") {
            if (vSetGame.O == sender.replace("@s.whatsapp.net", "")) {
              if (vSetGame.status) {
                return reply("O jogo já começou antes!");
              }
              const v136 = vSetGame._matrix;
              vSetGame.status = true;
              fs.writeFileSync("./funções de cmd/tictactoe/db/" + from + ".json", JSON.stringify(vSetGame, null, 2));
              const v137 = "*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n    \n❌ : @" + vSetGame.X + "\n⭕ : @" + vSetGame.O + "\n \nSua vez... : @" + (vSetGame.turn == "X" ? vSetGame.X : vSetGame.O) + "\n\n" + v136[0][0] + "  " + v136[0][1] + "  " + v136[0][2] + "\n" + v136[1][0] + "  " + v136[1][1] + "  " + v136[1][2] + "\n" + v136[2][0] + "  " + v136[2][1] + "  " + v136[2][2] + "\n";
              const vO57 = {
                text: v137
              };
              sock.sendMessage(from, vO57, {
                quoted: vVO27,
                contextInfo: {
                  mentionedJid: [vSetGame.X + "@s.whatsapp.net", vSetGame.O + "@s.whatsapp.net"]
                }
              });
            }
          } else if (body.toLowerCase() == "n" || body.toLowerCase() == "não" || body.toLowerCase() == "no") {
            if (vSetGame.O == sender.replace("@s.whatsapp.net", "")) {
              if (vSetGame.status) {
                return reply("O jogo já começou!");
              }
              fs.unlinkSync("./funções de cmd/tictactoe/db/" + from + ".json");
              const vO58 = {
                text: "@" + vSetGame.X + " *_Infelizmente seu oponente não aceitou o desafio ❌😕_*"
              };
              sock.sendMessage(from, vO58, {
                quoted: vVO27,
                contextInfo: {
                  mentionedJid: [vSetGame.X + "@s.whatsapp.net"]
                }
              });
              joguinhodavelhajs.splice([]);
              fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha.json", JSON.stringify(joguinhodavelhajs));
              joguinhodavelhajs2.splice([]);
              fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha2.json", JSON.stringify(joguinhodavelhajs2));
            }
          }
        }
        if (vA9.includes(v135)) {
          const vSetGame2 = setGame("" + from);
          if (!vSetGame2.status) {
            return reply("Parece que seu oponente não aceitou o desafio ainda...");
          }
          if ((vSetGame2.turn == "X" ? vSetGame2.X : vSetGame2.O) != sender.replace("@s.whatsapp.net", "")) {
            return;
          }
          const vValidmove = validmove(Number(body), "" + from);
          const v138 = vValidmove._matrix;
          if (vValidmove.isWin) {
            if (vValidmove.winner == "SERI") {
              const vLSJogoTerminaEmpatado = "*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n  \nJogo termina empatado 😐\n";
              reply(vLSJogoTerminaEmpatado);
              fs.unlinkSync("./funções de cmd/tictactoe/db/" + from + ".json");
              joguinhodavelhajs.splice([]);
              fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha.json", JSON.stringify(joguinhodavelhajs));
              joguinhodavelhajs2.splice([]);
              fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha2.json", JSON.stringify(joguinhodavelhajs2));
              return;
            }
            const v139 = Math.ceil(Math.random() + 4000);
            const v140 = vValidmove.winner == "O" ? vValidmove.O : vValidmove.X;
            const v141 = vValidmove.winner == "O" ? vValidmove.X : vValidmove.O;
            const v142 = Math.floor(Math.random() * 1) + 10;
            const v143 = Math.floor(Math.random() * 1) + 5;
            const v144 = "*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n  \nVencido por @" + v140 + " 😎👑\n";
            addLevelingXp(v140 + "@s.whatsapp.net", v139);
            const vO59 = {
              text: v144
            };
            sock.sendMessage(from, vO59, {
              quoted: vVO27,
              contextInfo: {
                mentionedJid: [vValidmove.winner == "O" ? vValidmove.O + "@s.whatsapp.net" : vValidmove.X + "@s.whatsapp.net"]
              }
            });
            setTimeout(() => {
              if (fs.existsSync("./funções de cmd/tictactoe/db/" + from + ".json")) {
                fs.unlinkSync("./funções de cmd/tictactoe/db/" + from + ".json");
                reply("*🕹️JOGO DA VELHA RESETADO...🕹️*");
              } else {
                console.log(color(v123, "red"), color("[ ESPIRADO ]", "magenta"), color("Jogo da velha espirado", "red"));
              }
              joguinhodavelhajs.splice([]);
              fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha.json", JSON.stringify(joguinhodavelhajs));
              joguinhodavelhajs2.splice([]);
              fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha2.json", JSON.stringify(joguinhodavelhajs2));
            }, 300000);
            reply("_*🥳Parabéns @" + v140 + " Você ganhou \"" + v139 + "\" em xp por ter ganhado o jogo da velha🎉...*_");
            fs.unlinkSync("./funções de cmd/tictactoe/db/" + from + ".json");
            joguinhodavelhajs.splice([]);
            fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha.json", JSON.stringify(joguinhodavelhajs));
            joguinhodavelhajs2.splice([]);
            fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha2.json", JSON.stringify(joguinhodavelhajs2));
          } else {
            const v145 = "*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n  \n❌ : @" + vValidmove.X + "\n⭕ : @" + vValidmove.O + "\n\nSua vez : @" + (vValidmove.turn == "X" ? vValidmove.X : vValidmove.O) + "\n\n" + v138[0][0] + "  " + v138[0][1] + "  " + v138[0][2] + "\n" + v138[1][0] + "  " + v138[1][1] + "  " + v138[1][2] + "\n" + v138[2][0] + "  " + v138[2][1] + "  " + v138[2][2] + "\n";
            const vO60 = {
              text: v145
            };
            sock.sendMessage(from, vO60, {
              quoted: vVO27,
              contextInfo: {
                mentionedJid: [vValidmove.X + "@s.whatsapp.net", vValidmove.O + "@s.whatsapp.net"]
              }
            });
          }
        }
      }
    }
    const vF32 = async (p119, p120) => {
      var v146 = Date.now() / 10000;
      function f6(p121, p122, p123) {
        request.head(p121, function (p124, p125, p126) {
          request(p121).pipe(fs.createWriteStream(p122)).on("close", p123);
        });
      }
      f6(p120, "./sticker" + v146 + ".png", async function () {
        console.log("enviando sticker");
        let v147 = "./sticker" + v146 + ".png";
        let v148 = "./sticker" + v146 + ".webp";
        exec("ffmpeg -i " + v147 + " -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 " + v148, p127 => {
          let v149 = fs.readFileSync(v148);
          const vO61 = {
            sticker: v149
          };
          const vO62 = {
            sendEphemeral: true,
            contextInfo: {
              forwardingScore: 50,
              isForwarded: true
            },
            quoted: mek
          };
          sock.sendMessage(p119, vO61, vO62);
          fs.unlinkSync(v147);
          fs.unlinkSync(v148);
        });
      });
    };
    if (isGroup && fs.existsSync("./funções de cmd/anagrama-" + from + ".json")) {
      let v150 = JSON.parse(fs.readFileSync("./funções de cmd/anagrama-" + from + ".json"));
      if (budy.slice(0, 4).toUpperCase() == v150.original.slice(0, 4).toUpperCase() && budy.toUpperCase() != v150.original) {
        return reply("está perto");
      }
      xp = Math.floor(Math.random() * 14) + 3000;
      if (budy.toUpperCase() == v150.original) {
        const vO63 = {
          text: "parabéns " + pushname + " 🥳 você ganhou o jogo\nPalavra : " + v150.original + "\nIniciando o proximo jogo em 5 segundos..."
        };
        const vO64 = {
          mentionedJid: [sender]
        };
        sock.sendMessage(from, vO63, vO64);
        fs.unlinkSync("./funções de cmd/anagrama-" + from + ".json");
        addLevelingXp(sender, xp);
        recompensa = "🎉🎉RECOMPENSA🎉🎉\nVocê ganhou " + xp + " em *xp*";
        reply(recompensa);
        setTimeout(async () => {
          fs.writeFileSync("./funções de cmd/anagrama-" + from + ".json", "" + JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)]));
          let v151 = JSON.parse(fs.readFileSync("./funções de cmd/anagrama-" + from + ".json"));
          const vO65 = {
            text: "\n╭─────≽「 👾 ANAGRAMA 👾 」\n│➽ DESCUBRA A PALAVRA\n│➽ ANAGRAMA: " + v151.embaralhada + "\n│➽ DICA: " + v151.dica + "\n╰────────────────────────\n"
          };
          sock.sendMessage(from, vO65);
        }, 5000);
      }
    }
    if (v68 && !isGroupAdmins && !isPremium) {
      if (!isGroupAdmins && !isPremium) {
        return;
      }
      if (v12.startsWith("unbangp")) {
        if (isCmd && !v68 && !isGroupAdmins) {
          return reply("Este grupo esta banido, ou seja não estou ouvindo ninguém");
        }
        let v152 = bancht.indexOf(from);
        bancht.splice(v152, 1);
        fs.writeFileSync("./datab/grupos/banchat.json", JSON.stringify(bancht));
        reply("Grupo desbanido...");
      }
    }
    const vGetLevelingLevel = getLevelingLevel(sender);
    var vLSBronzeI = "Bronze I 🎗️";
    if (vGetLevelingLevel === 1) {
      vLSBronzeI = "Bronze  I 🎗️";
    } else if (vGetLevelingLevel === 2) {
      vLSBronzeI = "Bronze II 🎗️";
    } else if (vGetLevelingLevel === 3) {
      vLSBronzeI = "Bronze  III ";
    } else if (vGetLevelingLevel === 4) {
      vLSBronzeI = "Bronze  IV  🎗️";
    } else if (vGetLevelingLevel === 5) {
      vLSBronzeI = "Bronze  V 🎗️";
    } else if (vGetLevelingLevel === 6) {
      vLSBronzeI = "Prata I🥈";
    } else if (vGetLevelingLevel === 7) {
      vLSBronzeI = "Prata II🥈";
    } else if (vGetLevelingLevel === 8) {
      vLSBronzeI = "Prata III🥈";
    } else if (vGetLevelingLevel === 9) {
      vLSBronzeI = "Prata IV🥈";
    } else if (vGetLevelingLevel === 10) {
      vLSBronzeI = "Prata V🥈";
    } else if (vGetLevelingLevel === 11) {
      vLSBronzeI = "Ouro I🥇";
    } else if (vGetLevelingLevel === 12) {
      vLSBronzeI = "Ouro II🥇";
    } else if (vGetLevelingLevel === 13) {
      vLSBronzeI = "Ouro III🥇";
    } else if (vGetLevelingLevel === 14) {
      vLSBronzeI = "Ouro IV🥇";
    } else if (vGetLevelingLevel === 15) {
      vLSBronzeI = "Ouro V🥇";
    } else if (vGetLevelingLevel === 16) {
      vLSBronzeI = "Campeão I🏆";
    } else if (vGetLevelingLevel === 17) {
      vLSBronzeI = "Campeão II🏆";
    } else if (vGetLevelingLevel === 18) {
      vLSBronzeI = "Campeão III🏆";
    } else if (vGetLevelingLevel === 19) {
      vLSBronzeI = "Campeão IV🏆";
    } else if (vGetLevelingLevel === 20) {
      vLSBronzeI = "Campeão V🏆";
    } else if (vGetLevelingLevel === 21) {
      vLSBronzeI = "Diamante I 💎";
    } else if (vGetLevelingLevel === 22) {
      vLSBronzeI = "Diamante II 💎";
    } else if (vGetLevelingLevel === 23) {
      vLSBronzeI = "Diamante III 💎";
    } else if (vGetLevelingLevel === 24) {
      vLSBronzeI = "Diamante IV 💎";
    } else if (vGetLevelingLevel === 25) {
      vLSBronzeI = "Diamante V 💎";
    } else if (vGetLevelingLevel === 26) {
      vLSBronzeI = "Mestre I 🐂";
    } else if (vGetLevelingLevel === 27) {
      vLSBronzeI = "Mestre II 🐂";
    } else if (vGetLevelingLevel === 28) {
      vLSBronzeI = "Mestre III 🐂";
    } else if (vGetLevelingLevel === 29) {
      vLSBronzeI = "Mestre IV 🐂";
    } else if (vGetLevelingLevel === 30) {
      vLSBronzeI = "Mestre V 🐂";
    } else if (vGetLevelingLevel === 31) {
      vLSBronzeI = "Mítico I 🔮";
    } else if (vGetLevelingLevel === 32) {
      vLSBronzeI = "Mítico II 🔮";
    } else if (vGetLevelingLevel === 33) {
      vLSBronzeI = "Mítico III 🔮";
    } else if (vGetLevelingLevel === 34) {
      vLSBronzeI = "Mítico IV 🔮";
    } else if (vGetLevelingLevel === 35) {
      vLSBronzeI = "Mítico V 🔮";
    } else if (vGetLevelingLevel === 36) {
      vLSBronzeI = "God I🕴";
    } else if (vGetLevelingLevel === 37) {
      vLSBronzeI = "God II🕴";
    } else if (vGetLevelingLevel === 38) {
      vLSBronzeI = "God III🕴";
    } else if (vGetLevelingLevel === 39) {
      vLSBronzeI = "God IV🕴";
    } else if (vGetLevelingLevel === 40) {
      vLSBronzeI = "God V🕴";
    } else if (vGetLevelingLevel > 41) {
      vLSBronzeI = "🛐Grande Mestre🛐";
    }
    if (isGroup && v50) {
      const vGetLevelingLevel2 = getLevelingLevel(sender);
      const vGetLevelingId = getLevelingId(sender);
      try {
        if (vGetLevelingLevel2 === undefined && vGetLevelingId === undefined) {
          addLevelingId(sender);
        }
        const v153 = Math.floor(Math.random() * 10) + 500;
        const v154 = (Math.pow(2, vGetLevelingLevel2) - 1) * 5000;
        const vGetLevelingLevel3 = getLevelingLevel(sender);
        addLevelingXp(sender, v153);
        if (v154 <= getLevelingXp(sender)) {
          addLevelingLevel(sender, 1);
          await reply("╭━─━───[🌹️]────━─━╮\n                 𝐏𝐀𝐑𝐀𝐁𝐄́𝐍𝐒 \n╰━─━───[🌹️]────━─━╯\n\n*[🏓] 𝐍𝐨𝐯𝐨 𝐧𝐢́𝐯𝐞𝐥 𝐚𝐥𝐜𝐚𝐧𝐜̧𝐚𝐝𝐨 [🏓]*\n\n[🎴] 𝐜𝐡𝐚𝐭: " + sender.split("@")[0] + ".           \n[🔰️] 𝐩𝐚𝐭𝐞𝐧𝐭𝐞: " + vLSBronzeI + "\n[👥] 𝐱𝐩: " + getLevelingXp(sender) + "\n[⚙️] 𝐚𝐧𝐭𝐢𝐠𝐨: " + vGetLevelingLevel3 + " \n[🎮] 𝐧𝐞𝐰 𝐥𝐞𝐯𝐞𝐥: " + getLevelingLevel(sender));
        }
      } catch (e2) {
        console.error(e2);
      }
    }
    const vF33 = async p128 => {
      try {
        v453 = await fetchJson("https://simsimi.info/api/?text=" + p128 + "&lc=pt", {
          method: "get"
        });
        simi = "" + v453.message;
        return simi;
      } catch {
        return;
      }
    };
    async function f7() {
      if (isUrl(v12) && v62 && isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe) {
        if (command == "tiktok" && command == "" && command == "instagram" && command == "tiktok" && command == "" && command == "ytmp3" && command == "ytmp4" && command == "play") {
          return;
        }
        linkgpp = await sock.groupInviteCode(from);
        if (v12.match("" + linkgpp)) {
          return;
        }
        if (!isUrl(v12)) {
          return;
        }
        if (type === "buttonsResponseMessage") {
          return;
        }
        if (type === "listResponseMessage") {
          return;
        }
        if (v12.includes("" + linkgpp)) {
          return;
        }
        reply("*Link detectado, porém usuário é admin*");
      }
      if (isUrl(v12) && v62 && !isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe) {
        if (command == "tiktok" && command == "" && command == "instagram" && command == "tiktok" && command == "" && command == "ytmp3" && command == "ytmp4" && command == "play") {
          return;
        }
        linkgpp = await sock.groupInviteCode(from);
        if (v12.match("" + linkgpp)) {
          return reply("Link do nosso grupo, não irei remover.. ");
        }
        if (!isUrl(v12)) {
          return;
        }
        if (type === "buttonsResponseMessage") {
          return;
        }
        if (type === "listResponseMessage") {
          return;
        }
        reply("*Link detectado, punindo usuário...*");
        if (!JSON.stringify(v37).includes(sender)) {
          return;
        }
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }
    }
    f7();
    f5();
    if (isUrl(body) && v64 && isGroup && isBotGroupAdmins) {
      if (!v64) {
        return;
      }
      if (!isUrl(body)) {
        return;
      }
      if (isGroupAdmins) {
        return reply("Você é adm, não removerei você..");
      }
      if (v12.includes("chat.whatsapp.com/")) {
        if (!v12.includes("chat.whatsapp.com/")) {
          return;
        }
        if (v16) {
          return;
        }
        linkgpp = await sock.groupInviteCode(from);
        if (budy.match("" + linkgpp)) {
          return reply("Link do nosso grupo, não irei remover.. ");
        }
        reply("*Link de grupo detectado, punindo usuário...*");
        if (!JSON.stringify(v37).includes(sender)) {
          return;
        }
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }
    }
    if (v69 && isBotGroupAdmins && type == "imageMessage") {
      if (m.key.fromMe) {
        return;
      }
      const vO66 = {
        quoted: vVO27
      };
      if (isGroupAdmins) {
        return sock.sendMessage(from, {
          text: "*mensagem proibida detectada, porém é admin logo a punição será anulada*"
        }, vO66);
      }
      const vO67 = {
        quoted: vVO27
      };
      await sock.sendMessage(from, {
        text: "*mensagem proibida detectada, banindo...*"
      }, vO67);
      setTimeout(async function () {
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }, 1000);
    }
    if (v70 && isBotGroupAdmins && type == "stickerMessage") {
      if (m.key.fromMe) {
        return;
      }
      const vO68 = {
        quoted: vVO27
      };
      if (isGroupAdmins) {
        return sock.sendMessage(from, {
          text: "*mensagem proibida detectada, porém é admin logo a punição será anulada*"
        }, vO68);
      }
      const vO69 = {
        quoted: vVO27
      };
      await sock.sendMessage(from, {
        text: "*mensagem proibida detectada, banindo...*"
      }, vO69);
      setTimeout(async function () {
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }, 1000);
    }
    if (v72 && isBotGroupAdmins && type == "documentMessage") {
      if (m.key.fromMe) {
        return;
      }
      const vO70 = {
        quoted: vVO27
      };
      if (isGroupAdmins) {
        return sock.sendMessage(from, {
          text: "*mensagem proibida detectada, porém é admin logo a punição será anulada*"
        }, vO70);
      }
      const vO71 = {
        quoted: vVO27
      };
      await sock.sendMessage(from, {
        text: "*mensagem proibida detectada, banindo...*"
      }, vO71);
      setTimeout(async function () {
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }, 1000);
    }
    if (isGroup) {
      const vGetComandos = getComandos(from);
      if (vGetComandos === undefined) {
        addComandosId(from);
      }
    }
    if (isGroup && isCmd && !isPremium && !v42 && getComandoBlock(from).includes(command)) {
      return reply("comando blockeado");
    }
    if (v71 && body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
      if (type == "stickerMessage") {
        return;
      }
      let v155 = body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi);
      if (v155 && body.length < 100) {
        return;
      }
      const vO72 = {
        quoted: vVO27
      };
      await sock.sendMessage(from, {
        text: "*mensagem proibida detectada, banindo...*"
      }, vO72);
      setTimeout(async function () {
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }, 1000);
    }
    if (v74 && isBotGroupAdmins && type == "videoMessage") {
      const vO73 = {
        quoted: vVO27
      };
      if (isGroupAdmins) {
        return sock.sendMessage(from, {
          text: "*mensagem proibida detectada, porém é admin logo a punição será anulada*"
        }, vO73);
      }
      const vO74 = {
        quoted: vVO27
      };
      await sock.sendMessage(from, {
        text: "*mensagem proibida detectada, banindo...*"
      }, vO74);
      setTimeout(async function () {
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }, 1000);
    }
    if (antiview.includes(from)) {
      if (v89) {
        if (Object.keys(mek.message.viewOnceMessage.message)[0] == "imageMessage") {
          bhj = mek.message.viewOnceMessage.message[Object.keys(mek.message.viewOnceMessage.message)[0]];
          buff = await vF16(bhj, "image");
          const vO75 = {
            quoted: mek
          };
          sock.sendMessage(from, {
            image: buff,
            caption: "O Antiviewone Ativo Neste Grupo" + ("caption" in bhj ? "\n\nlegenda: " + bhj?.caption : "")
          }, vO75).catch(p129 => {
            console.log(p129);
          });
        } else if (Object.keys(mek.message.viewOnceMessage.message)[0] == "videoMessage") {
          bhj = mek.message.viewOnceMessage.message[Object.keys(mek.message.viewOnceMessage.message)[0]];
          buff = await vF16(bhj, "video");
          const vO76 = {
            quoted: mek
          };
          sock.sendMessage(from, {
            video: buff,
            caption: "O Antiviewone Ativo Neste Grupo" + ("caption" in bhj ? "\n\nLegenda: " + bhj?.caption : "")
          }, vO76).catch(p130 => {
            console.log(p130);
          });
        }
      }
    }
    if (v67 && isBotGroupAdmins && type == "audioMessage") {
      const vO77 = {
        quoted: vVO27
      };
      if (isGroupAdmins) {
        return sock.sendMessage(from, {
          text: "*mensagem proibida detectada, porém é admin logo a punição será anulada*"
        }, vO77);
      }
      const vO78 = {
        quoted: vVO27
      };
      await sock.sendMessage(from, {
        text: "*mensagem proibida detectada, banindo...*"
      }, vO78);
      setTimeout(async function () {
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }, 1000);
    }
    if (isGroup && isBotGroupAdmins && !isGroupAdmins && !isPremium && !mek.key.fromMe) {
      if (mek.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == v37.length || mek.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == v37.length - 1) {
        reply("MEMBRO COM MENSAGEM DE MARCAÇÃO DE TODOS DO GRUPO, POR CONTA DISSO VOU REMOVER DO GRUPO, QUALQUER COISA VÁ NO PV DO ADMINISTRADOR...");
        sock.groupParticipantsUpdate(from, [sender], "remove");
      }
    }
    if (v87 && !isGroup && !isPremium && !m.key.fromMe && !v44) {
      reply("[🚫] 𝗔𝗡𝗧𝗜𝗣𝗩 𝗤𝗨𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗜𝗔! [🚫]\nUsuários que enviarem mensagem no privado, será bloqueado pois antipv está ativo, fale com meu dono para solicitar o desbloqueio: wa.me/" + numerodn);
      setTimeout(async () => {
        sock.updateBlockStatus(sender, "block");
      }, 1000);
      return;
    }
    const v156 = JSON.parse(fs.readFileSync("./funções de cmd/funções/welcomepv.json"));
    if (!isCmd && !isGroup && !mek.key.fromMe && !v156.includes(sender)) {
      var v157 = "𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐃𝐄 𝐁𝐎𝐀𝐒 𝐕𝐈𝐍𝐃𝐀𝐒!\n*Olá*, prazer em conhecê-lo(a), me chamo *" + NomeDoBot + "*. _Sou uma inteligência artificial 100% automatizado para ajudar em todo que for possível nessa plataforma!_\n*Estou a sua disposição o dia todo, 24h horas por dia para te ajudar!* _Tenho +1mil comandos, entre eles de fazer figurinhas, pesquisa, download de músicas..._";
      const vO79 = {
        buttonId: prefix + "criador",
        buttonText: {
          displayText: "𝗦𝘂𝗽𝗼𝗿𝘁𝗲"
        },
        type: 1
      };
      const vO80 = {
        buttonId: prefix + "avaliar",
        buttonText: {
          displayText: "𝗔𝘃𝗮𝗹𝗶𝗮𝗿"
        },
        type: 1
      };
      const vO81 = {
        buttonId: prefix + "menu",
        buttonText: {
          displayText: "𝗠𝗲𝗻𝘂 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗼"
        },
        type: 1
      };
      const vO82 = {
        text: v157,
        footer: "Espero que goste e aproveite bastante!",
        buttons: [vO79, vO80, vO81]
      };
      const vO83 = {
        quoted: vVO27
      };
      sock.sendMessage(from, vO82, vO83);
      v156.push(sender);
      fs.writeFileSync("./funções de cmd/funções/welcomepv.json", JSON.stringify(v156));
    }
    sock.ws.on("CB:call", async p131 => {
      console.log("[1;31m~[1;37m>", "[[1;32m LIGAÇÃO DETECTADA [1;37m]");
      const v158 = p131.content[0].attrs["call-creator"];
      if (p131.content[0].tag == "offer") {
        function f8(p132, p133, p134, p135 = {}) {
          const vO84 = {
            contentText: p133,
            footerText: p134,
            buttons: [],
            contextInfo: {
              isForwarded: true,
              forwardingScore: 0
            },
            headerType: 1
          };
          const vO85 = {
            buttonsMessage: vO84
          };
          const vVO85 = vO85;
          const v159 = Object.keys(vVO85)[0];
          vVO85[v159].contextInfo.mentionedJid = "contextInfo" in p135 ? p135.contextInfo.mentionedJid : [];
          if ("quoted" in p135) {
            const {
              quoted: msgCitada
            } = p135;
            vVO85[v159].contextInfo.participant = msgCitada.key.participant;
            vVO85[v159].contextInfo.quotedMessage = msgCitada.message;
          } else if ("contextInfo" in p135) {}
          sock.relayMessage(p132, vVO85, {
            messageId: require("@adiwajshing/baileys").generateMessageID(),
            additionalAttributes: {}
          });
        }
        if (v158.startsWith("2")) {
          return f8(v158, "_*Anticall 📞*_", "*Você será bloqueado, evite ligações na próxima vez*").then(() => sock.updateBlockStatus(v158, "block"));
        }
        f8(v158, "\t\t⚠️ Aviso sobre a ligação ⚠️\n", "Devido as minhas configurações atuais, as ligações para mim são proibidas e, por isso, sua ligação foi reportada à administração 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿");
        const vO86 = {
          buttonId: prefix + "anticallaviso " + v158,
          buttonText: {
            displayText: "「🔔」AVISO「🔔」"
          },
          type: 1
        };
        const vO87 = {
          buttonId: prefix + "anticallblock " + v158,
          buttonText: {
            displayText: "「🚫」BLOQUEAR「🚫」"
          },
          type: 1
        };
        const vO88 = {
          buttonId: prefix + "crash2 " + v158,
          buttonText: {
            displayText: "「🛑」CRASHUSER「🛑」"
          },
          type: 1
        };
        const vA10 = [vO86, vO87, vO88];
        const vO89 = {
          text: "\t\t𝖫𝗂𝗀𝖺çã𝗈 𝖣𝖾𝗍𝖾𝖼𝗍𝖺𝖽𝖺\n",
          footer: "👤 Usuário: " + pushname + "\n☎ ️Número: " + v158.split("@")[0] + "\n🔗 Wame: wa.me/" + sender.split("@")[0] + "\n🌐 Nacionalidade: " + (v158.startsWith("2") ? "Africano 👨🏿" : !v158.startsWith("55") && !v158.startsWith("2") ? "Estrangeiro 🗿" : "BR 🇧🇷"),
          buttons: vA10,
          headerType: 1
        };
        const v160 = await sock.sendMessage("5521964523665@s.whatsapp.net", vO89);
      }
    });
    if (!isGroup && !v44 && !isPremium && !m.key.fromMe && banChats === true) {
      return;
    }
    const v161 = m.isBaileys;
    if (v161 === true) {
      return;
    }
    if (fs.existsSync("./func/limitecaracteres/limite-c_" + from + ".json")) {
      var v162 = JSON.parse(fs.readFileSync("./func/limitecaracteres/limite-c_" + from + ".json"));
      var v163 = v162.limite;
    } else {
      var v163 = limitefll.limitefl;
    }
    const vA11 = [];
    for (let v164 of forca) {
      vA11.push(v164.id);
    }
    const v165 = vA11.indexOf(sender) >= 0 ? true : false;
    async function f9() {
      return new Promise(async (p136, p137) => {
        fetch("https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=0&Submit=Nova+palavra").then(async function (p138, p139) {
          if (p139) {
            p137(p139);
          }
          var v166 = cheerio.load(await p138.text());
          p136(v166("body > center > center > table:nth-child(4) > tbody > tr > td > div")[0].children[0].data);
        });
      });
    }
    const vF34 = async (p140, p141, p142, p143 = {}) => {
      let v167 = Buffer.isBuffer(p141) ? p141 : /^data:.*?\/.*?;base64,/i.test(p141) ? Buffer.from(p141.split`,`[1], "base64") : /^https?:\/\//.test(p141) ? await await getBuffer(p141) : fs.existsSync(p141) ? fs.readFileSync(p141) : Buffer.alloc(0);
      let v168;
      if (p143 && (p143.packname || p143.author)) {
        v168 = await writeExifImg(v167, p143);
      } else {
        v168 = await imageToWebp(v167);
      }
      const vO90 = {
        url: v168
      };
      const vO91 = {
        sticker: vO90,
        ...p143
      };
      const vO92 = {
        quoted: p142
      };
      await sock.sendMessage(p140, vO91, vO92);
      return v168;
    };
    const vF35 = async (p144, p145, p146, p147 = {}) => {
      let v169 = Buffer.isBuffer(p145) ? p145 : /^data:.*?\/.*?;base64,/i.test(p145) ? Buffer.from(p145.split`,`[1], "base64") : /^https?:\/\//.test(p145) ? await await getBuffer(p145) : fs.existsSync(p145) ? fs.readFileSync(p145) : Buffer.alloc(0);
      let v170;
      if (p147 && (p147.packname || p147.author)) {
        v170 = await writeExifVid(v169, p147);
      } else {
        v170 = await videoToWebp(v169);
      }
      const vO93 = {
        url: v170
      };
      const vO94 = {
        sticker: vO93,
        ...p147
      };
      const vO95 = {
        quoted: p146
      };
      await sock.sendMessage(p144, vO94, vO95);
      return v170;
    };
    const vF36 = (p148, p149, p150, p151) => {
      const vO96 = {
        mentionedJid: p150
      };
      const vO97 = {
        mentionedJid: p150
      };
      if (p151 == null || p151 == undefined || p151 == false) {
        sock.sendMessage(from, {
          image: p148,
          caption: p149.trim(),
          contextInfo: vO96
        });
      } else {
        sock.sendMessage(from, {
          image: p148,
          caption: p149.trim(),
          contextInfo: vO97
        });
      }
    };
    const {
      addVotoDuelo: addVotoDuelo,
      delVotoDuelo: delVotoDuelo
    } = require("./funcoes/votoduelo.js");
    const v171 = JSON.parse(fs.readFileSync("./dados/votacao/votacao.json"));
    const v172 = JSON.parse(fs.readFileSync("./dados/duelo/votacaoduelo.json"));
    const v173 = isGroup ? v171.includes(from) : false;
    const v174 = isGroup ? v172.includes(from) : false;
    if (isGroup) {
      if (budy.toLowerCase() === "um") {
        let v175 = JSON.parse(fs.readFileSync("./dados/duelo/P_votos/" + from + ".json"));
        let v176 = JSON.parse(fs.readFileSync("./dados/duelo/votos/" + from + ".json"));
        let v177 = v175.map(p152 => p152.participante);
        let v178 = sender ? sender : "0@s.whatsapp.net";
        if (v177.includes(v178)) {
          return vF22("Olá @@@@@@" + sender.split("@")[0] + "\n~ Não é possível votar duas vezes.", v177, true);
        } else {
          const vO98 = {
            participante: v178,
            votacao: "1"
          };
          v175.push(vO98);
          fs.writeFileSync("./dados/duelo/P_votos/" + from + ".json", JSON.stringify(v175));
          let vA12 = [];
          let v179 = "VOTAÇÃO...\n\nParticipante 1: @" + v176[0].votos.split("@")[0] + "\nParticipante 2: @" + v176[0].votos2.split("@")[0] + "\nMotivo da votação: " + v176[0].razao + "\nTotal de votos: " + v175.length + ".\nDuração: " + v176[0].duracao + " minuto.";
          for (let vLN02 = 0; vLN02 < v175.length; vLN02++) {
            v179 += "\n\n========\nMembro: @" + v175[vLN02].participante.split("@")[0] + "\nVotou em: " + v175[vLN02].votacao + "\n========";
            vA12.push(v175[vLN02].participante);
          }
          vA12.push(v176[0].votos, v176[0].votos2);
          vF22(v179, vA12, true);
        }
      } else if (budy.toLowerCase() === "dois") {
        const v180 = JSON.parse(fs.readFileSync("./dados/duelo/P_votos/" + from + ".json"));
        let v181 = JSON.parse(fs.readFileSync("./dados/duelo/votos/" + from + ".json"));
        let v182 = v180.map(p153 => p153.participante);
        let v183 = sender ? sender : "0@s.whatsapp.net";
        if (v182.includes(v183)) {
          return vF22("Olá @@@@@@" + sender.split("@")[0] + "\n~ Não é possivel votar duas vezes.", v182, true);
        } else {
          const vO99 = {
            participante: v183,
            votacao: "2"
          };
          v180.push(vO99);
          fs.writeFileSync("./dados/duelo/P_votos/" + from + ".json", JSON.stringify(v180));
          let vA13 = [];
          let v184 = "VOTAÇÃO...\n\nParticipante 1: @" + v181[0].votos.split("@")[0] + "\nParticipante 2: @" + v181[0].votos2.split("@")[0] + "\nMotivo da votação: " + v181[0].razao + "\nTotal de votos: " + v180.length + ".\nDuração: " + v181[0].duracao + " minuto.";
          for (let vLN03 = 0; vLN03 < v180.length; vLN03++) {
            v184 += "\n\n========\nMembro: @" + v180[vLN03].participante.split("@")[0] + "\nVotou em: " + v180[vLN03].votacao + "\n========\n";
            vA13.push(v180[vLN03].participante);
          }
          vA13.push(v181[0].votos, v181[0].votos2);
          vF22(v184, vA13, true);
        }
      }
    }
    const vA14 = [];
    const vA15 = [];
    for (let v185 of countMessage) {
      vA14.push(v185.groupId);
    }
    if (isGroup && vA14.indexOf(from) >= 0) {
      var v186 = vA14.indexOf(from);
      for (let v187 of countMessage[v186].numbers) {
        vA15.push(v187.id);
      }
      if (vA15.indexOf(sender) >= 0) {
        var v188 = vA15.indexOf(sender);
        countMessage[v186].numbers[v188].messages += 1;
        countMessage[v186].numbers[v188].cmd_messages += isCmd ? 1 : 0;
        fs.writeFileSync("./funções de cmd/grupos/countmsg.json", JSON.stringify(countMessage, null, 2) + "\n");
      } else {
        const vLN1 = 1;
        const v189 = isCmd ? 1 : 0;
        const vO100 = {
          id: sender,
          messages: vLN1,
          cmd_messages: v189
        };
        countMessage[v186].numbers.push(vO100);
        fs.writeFileSync("./funções de cmd/grupos/countmsg.json", JSON.stringify(countMessage, null, 2) + "\n");
      }
    } else if (isGroup) {
      const vO101 = {
        id: sender,
        messages: 2,
        cmd_messages: isCmd ? 1 : 0
      };
      const vO102 = {
        groupId: from,
        numbers: [vO101]
      };
      countMessage.push(vO102);
      fs.writeFileSync("./funções de cmd/grupos/countmsg.json", JSON.stringify(countMessage, null, 2) + "\n");
    }
    const vA16 = [];
    for (i = 0; i < v53.length; ++i) {
      vA16.push(v53[i].groupId);
    }
    this.suit = this.suit ? this.suit : {};
    let v190 = Object.values(this.suit).find(p154 => p154.id && p154.status && [p154.p, p154.p2].includes(m.sender));
    if (v190) {
      let vLS = "";
      let v191 = false;
      if (sender == v190.p2 && /^(acc(ept)?|aceitar|Aceitar|Ok?|aceita|Ação|Posterior|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && v190.status == "wait") {
        if (/^(Menos|Ação|rejeitar|n|ga(k.)?bisa)/i.test(m.text)) {
          sock.sendTextWithMentions(from, "@" + v190.p2.split`@`[0] + " terno de lixo, terno cancelado", m);
          delete this.suit[v190.id];
          return true;
        }
        v190.status = "play";
        v190.asal = from;
        clearTimeout(v190.waktu);
        sock.sendText(from, "O jogo foi enviado para conversar.\n\n@" + v190.p.split`@`[0] + " e \n@" + v190.p2.split`@`[0] + "\n\nSelecione o jogo em cada bate-papo\"\nclique https://wa.me/" + v19.split`@`[0], m, {
          mentions: [v190.p, v190.p2]
        });
        if (!v190.pilih) {
          sock.sendText(v190.p, "Por favor, selecione \n\nPedra🗿\nPapel📄\nTesoura✂️", m);
        }
        if (!v190.pilih2) {
          sock.sendText(v190.p2, "Por favor, selecione \n\nPedra🗿\nPapel📄Tesoura✂️", m);
        }
        v190.waktu_milih = setTimeout(() => {
          if (!v190.pilih && !v190.pilih2) {
            sock.sendText(from, "Ambos os jogadores não têm intenção de jogar,\njogo cancelado");
          } else if (!v190.pilih || !v190.pilih2) {
            vLS = !v190.pilih ? v190.p2 : v190.p;
            sock.sendTextWithMentions(from, "@" + (v190.pilih ? v190.p2 : v190.p).split`@`[0] + " não escolher um jogo, o jogo terminou", m);
          }
          delete this.suit[v190.id];
          return true;
        }, v190.timeout);
      }
      let v192 = m.sender == v190.p;
      let v193 = m.sender == v190.p2;
      let v194 = /tesoura/i;
      let v195 = /pedra/i;
      let v196 = /papel/i;
      let v197 = /^(tesoura|pedra|papel)/i;
      if (v192 && v197.test(m.text) && !v190.pilih && !m.isGroup) {
        v190.pilih = v197.exec(m.text.toLowerCase())[0];
        v190.text = m.text;
        reply("Você escolheu " + m.text + " " + (!v190.pilih2 ? "\n\nEsperando que o oponente escolha" : ""));
        if (!v190.pilih2) {
          sock.sendText(v190.p2, "_O oponente já escolheu_\nAgora é sua vez.", 0);
        }
      }
      if (v193 && v197.test(m.text) && !v190.pilih2 && !m.isGroup) {
        v190.pilih2 = v197.exec(m.text.toLowerCase())[0];
        v190.text2 = m.text;
        reply("Você escolheu " + m.text + " " + (!v190.pilih ? "\n\nEsperando que o oponente escolha" : ""));
        if (!v190.pilih) {
          sock.sendText(v190.p, "_O oponente já escolheu_\nAgora é sua vez.", 0);
        }
      }
      let v198 = v190.pilih;
      let v199 = v190.pilih2;
      if (v190.pilih && v190.pilih2) {
        clearTimeout(v190.waktu_milih);
        if (v195.test(v198) && v194.test(v199)) {
          vLS = v190.p;
        } else if (v195.test(v198) && v196.test(v199)) {
          vLS = v190.p2;
        } else if (v194.test(v198) && v196.test(v199)) {
          vLS = v190.p;
        } else if (v194.test(v198) && v195.test(v199)) {
          vLS = v190.p2;
        } else if (v196.test(v198) && v195.test(v199)) {
          vLS = v190.p;
        } else if (v196.test(v198) && v194.test(v199)) {
          vLS = v190.p2;
        } else if (v198 == v199) {
          v191 = true;
        }
        sock.sendText(v190.asal, ("_*Resultados do jogo*_" + (v191 ? "\nSERI" : "") + "\n\n@" + v190.p.split`@`[0] + " (" + v190.text + ") " + (v191 ? "" : v190.p == vLS ? " Ganhou \n" : " Perdido \n") + "\n@" + v190.p2.split`@`[0] + " (" + v190.text2 + ") " + (v191 ? "" : v190.p2 == vLS ? " Ganhou \n" : " Perdido \n") + "\n").trim(), m, {
          mentions: [v190.p, v190.p2]
        });
        delete this.suit[v190.id];
      }
    }
    const vF37 = p155 => !!usedCommandRecently.has(p155);
    const vF38 = p156 => {
      usedCommandRecently.add(p156);
      setTimeout(() => usedCommandRecently.delete(p156), 4000);
    };
    if (v62 && isUrl(budy) && vF37(sender) && isGroup) {
      console.log(color("~> [SPAM] - LINK", "red"), color(moment.tz("America/Sao_Paulo").format("HH:mm:ss"), "yellow"), color("" + budy), "DE:", color(pushname));
      if (mek.key.fromMe) {
        return;
      }
      return;
    }
    const vO103 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(from ? {
        remoteJid: "120363042083601149@g.us"
      } : {})
    };
    const vO104 = {
      mimetype: "image/jpeg",
      jpegThumbnail: log0
    };
    const vO105 = {
      productImage: vO104,
      title: "Daniel",
      description: "NEZUKO BOT",
      currencyCode: "USD",
      priceAmount1000: "2000",
      retailerId: "My[P.L]",
      productImageCount: 1
    };
    const vO106 = {
      product: vO105,
      businessOwnerJid: "0@s.whatsapp.net"
    };
    const vO107 = {
      productMessage: vO106
    };
    const vO108 = {
      key: vO103,
      message: vO107
    };
    const vVO108 = vO108;
    const vO109 = {
      itemCount: 1,
      status: 1,
      surface: 1,
      message: "My[DN]",
      orderTitle: "Bang",
      thumbnail: log0,
      sellerJid: "0@s.whatsapp.net"
    };
    const vO110 = {
      orderMessage: vO109
    };
    const vO111 = {
      key: {
        participant: "5521964523665@s.whatsapp.net"
      },
      message: vO110
    };
    const vVO111 = vO111;
    const vO112 = {
      name: "BRASIL",
      jpegThumbnail: log0
    };
    const vO113 = {
      locationMessage: vO112
    };
    const vO114 = {
      key: {
        participant: "5521964523665@s.whatsapp.net"
      },
      message: vO113
    };
    const vVO114 = vO114;
    const vO115 = {
      title: "OLÁ BEM?",
      jpegThumbnail: log0
    };
    const vO116 = {
      documentMessage: vO115
    };
    const vO117 = {
      key: {
        participant: "5521964523665@s.whatsapp.net"
      },
      message: vO116
    };
    const vVO117 = vO117;
    const vO118 = {
      groupJid: "120363042083601149@g.us",
      inviteCode: "mememteeeekkeke",
      groupName: "P",
      caption: "OLÁ BOM JOGO",
      jpegThumbnail: log0
    };
    const vO119 = {
      groupInviteMessage: vO118
    };
    const vO120 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net"
      },
      message: vO119
    };
    const vVO120 = vO120;
    const vO121 = {
      fromMe: false,
      participant: "5521964523665@s.whatsapp.net",
      ...(from ? {
        remoteJid: "120363042083601149@g.us"
      } : {})
    };
    const vO122 = {
      title: "Daniel",
      h: "Hmm",
      seconds: "30",
      gifPlayback: "true",
      caption: " ɴᴇᴢᴜᴋᴏ ʙᴏᴛ ",
      jpegThumbnail: log0
    };
    const vO123 = {
      videoMessage: vO122
    };
    const vO124 = {
      key: vO121,
      message: vO123
    };
    const vVO124 = vO124;
    const vF39 = p157 => {
      const vO125 = {
        quoted: vVO27
      };
      sock.sendMessage(from, {
        text: p157,
        contextInfo: {
          externalAdReply: {
            title: "SÓ FÉ 😎",
            body: "ʟɪɴᴋ ɢʀᴜᴘᴏ ɴᴇᴢᴜᴋᴏ ʙᴏᴛ ᴏғᴄ",
            previewType: "PHOTO",
            thumbnailUrl: "",
            thumbnail: fs.readFileSync("./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg"),
            sourceUrl: "https://chat.whatsapp.com/HuzS4bvjpQ6978JZ5PJ2xh"
          }
        }
      }, vO125);
    };
    const vO126 = {
      fromMe: false,
      participant: "5521964523665@s.whatsapp.net",
      ...(from ? {
        remoteJid: "6289643739077-1613049930@g.us"
      } : {})
    };
    const vO127 = {
      text: "OLÁ BEM? ",
      title: "Hmm",
      jpegThumbnail: log0
    };
    const vO128 = {
      extendedTextMessage: vO127
    };
    const vO129 = {
      key: vO126,
      message: vO128
    };
    const vVO129 = vO129;
    const vO130 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(from ? {
        remoteJid: "120363042083601149@g.us"
      } : {})
    };
    const vO131 = {
      key: vO130,
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: "22:33",
          ptt: "true"
        }
      }
    };
    const vVO131 = vO131;
    l = 1;
    monospace = "```";
    const vF40 = async (p158, p159, p160, p161, p162, p163, p164, p165, p166) => {
      const vGenerateWAMessageFromContent = generateWAMessageFromContent(p158, proto.Message.fromObject({
        orderMessage: {
          orderId: p160,
          thumbnail: p161,
          itemCount: p162,
          status: "INQUIRY",
          surface: "CATALOG",
          orderTitle: p163,
          message: p159,
          sellerJid: p164,
          token: p165,
          totalAmount1000: p166,
          totalCurrencyCode: "BRL"
        }
      }), {
        userJid: p158
      });
      sock.relayMessage(p158, vGenerateWAMessageFromContent.message, {
        messageId: vGenerateWAMessageFromContent.key.id
      });
    };
    const vF41 = async (p167, p168, p169, p170) => {
      const vGenerateWAMessageFromContent2 = generateWAMessageFromContent(p167, proto.Message.fromObject({
        productMessage: {
          product: {
            productImage: {
              url: "https://mmg.whatsapp.net/d/f/An6ssWQrEx3DYOvrXx5Ld5-1zzyW8DpRhZvr2ZCKrIu-.enc",
              mimetype: "image/jpeg",
              fileSha256: "fR9ZYUp6oPISWJNO6ywrBBNck0OpSw7FYL6XPXjKS6M=",
              fileLength: "99999999999",
              height: 50,
              width: 50,
              mediaKey: "/BQzqmWzeGOB1X7aPOCAxbVUeZL18bw3v9J7yA0Vn2Y=",
              fileEncSha256: "C7LQFJx65AAS6sdALkCGNmDC+0NWilRBH8zHa+Lt4x4=",
              directPath: "/v/t62.7118-24/35880876_730612661375500_4224816547459430339_n.enc?ccb=11-4&oh=01_AVxtkNgm-pIDHhEhvkfWXRnfU9WbYIckQFKZrtbZuAzGmw&oe=631A1B4E&_nc_hot=1660217709",
              mediaKeyTimestamp: "1660217472",
              jpegThumbnail: v118
            },
            productId: "7912700932134833",
            title: p168,
            description: p169,
            currencyCode: "BRL",
            priceAmount1000: p170,
            productImageCount: 2
          },
          businessOwnerJid: "5521964523665@s.whatsapp.net"
        }
      }), {
        userJid: p167
      });
      sock.relayMessage(p167, vGenerateWAMessageFromContent2.message, {
        messageId: vGenerateWAMessageFromContent2.key.id
      });
    };
    const vF42 = async (p171, p172, p173, p174) => {
      var v200 = await generateWAMessageFromContent(from, {
        templateMessage: {
          hydratedTemplate: {
            ...p174.message,
            hydratedContentText: p172,
            hydratedFooterText: p173,
            hydratedButtons: [{
              urlButton: {
                displayText: "[👥] ɴᴀ̃ᴏ ᴀᴘᴇʀᴛᴇ [👥] ",
                url: "https://wa.me/5521964523665?text=Desculpa%20,Daniel%2C%20eu%20n%C3%A3o%20resisti%F0%9F%98%94%E2%9C%8C"
              }
            }, {
              urlButton: {
                displayText: "[🎴] ᴄᴀɴᴀʟ ᴅᴏ ʏᴏᴜᴛᴜʙᴇ [🎴]",
                url: "https://youtube.com/c/PLMODS"
              }
            }, {
              quickReplyButton: {
                displayText: "[🎨] ᴍᴇɴᴜ ʟᴏɢᴏs [🎨️] ",
                id: prefix + "menulogos"
              }
            }, {
              quickReplyButton: {
                displayText: "[🗣️] ᴀᴋɪɴᴀᴛᴏʀ [🗣️]",
                id: prefix + "akinator"
              }
            }, {
              quickReplyButton: {
                displayText: "[⚡️] ᴘɪɴɢ [⚡️]",
                id: prefix + "ping2"
              }
            }]
          }
        }
      }, {});
      sock.relayMessage(p171, v200.message, {
        messageId: v200.key.id
      });
    };
    switch (v114[0]) {
      case "finaki":
        if (v114[1] == "nao") {
          reply("*Puxa não foi desta vez 😔*");
          akinator[0][from] = undefined;
          fs.writeFileSync("./funções de cmd/funções/akinator.json", JSON.stringify(akinator, null, 2));
        } else {
          reply("*SABIA! EU VENCI OTÁRIO 🥳*");
          akinator[0][from] = undefined;
          fs.writeFileSync("./funções de cmd/funções/akinator.json", JSON.stringify(akinator, null, 2));
        }
        break;
      case "akinator":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        if (v114[1] == "nao") {
          return reply("*Até a próxima amigo*");
        }
        if (akinator[0][from]) {
          return reply("*Desculpe-me amigo alguem ja está jogando, aguarde pra chegar sua vez*");
        }
        akinator[0][from] = {
          id: from,
          player: sender,
          game: new Aki({
            region: "pt"
          })
        };
        await akinator[0][from].game.start();
        const vO132 = {
          text: akinator[0][from].game.question,
          footer: "Mostrar opções",
          buttonText: "Opções",
          title: "Pergunta",
          sections: [{
            title: "Opções",
            rows: [{
              rowId: prefix + "respaki 0",
              title: "Sim",
              description: ""
            }, {
              rowId: prefix + "respaki 1",
              title: "Não",
              description: ""
            }, {
              rowId: prefix + "respaki 2",
              title: "Não sei",
              description: ""
            }, {
              rowId: prefix + "respaki 3",
              title: "Provavelmente sim",
              description: ""
            }, {
              rowId: prefix + "respaki 4",
              title: "Provavelmente não",
              description: ""
            }]
          }]
        };
        vVO1334 = vO132;
        sock.sendMessage(from, vVO1334);
        fs.writeFileSync("./funções de cmd/funções/akinator.json", JSON.stringify(akinator, null, 2));
        break;
    }
    switch (command) {
      case "donos":
        dono = "donos da " + NomeDoBot + "\nDono oficial: " + vA4[0] + "\nTotal : " + vA3.length + "\n╭⸺⩫⸺⃙❀\n";
        no = 0;
        for (let v201 of vA3) {
          no += 1;
          dono += "┣❲" + no.toString() + "❳=❲@" + v201.split("@")[0] + "\n";
        }
        dono += "╰⸺⩫⸺⃙❀";
        const vO133 = {
          mentionedJid: vA3
        };
        const vO134 = {
          quoted: m
        };
        await sock.sendMessage(from, {
          text: dono.trim(),
          contextInfo: vO133
        }, vO134);
        break;
      case "dono2":
        if (args.length < 1) {
          return;
        }
        if (!isOwner) {
          return reply("Apenas meu criador");
        }
        dono2 = body.slice(8);
        v15.dono2 = dono2;
        fs.writeFileSync("./dono/nescessario.json", JSON.stringify(v15, null, "\t"));
        reply("Agora contem um segundo dono(a) alterado com sucesso para: " + dono2);
        break;
      case "dono3":
        if (args.length < 1) {
          return;
        }
        if (!isOwner) {
          return reply("Apenas meu criador");
        }
        dono3 = body.slice(8);
        v15.dono3 = dono3;
        fs.writeFileSync("./dono/nescessario.json", JSON.stringify(v15, null, "\t"));
        reply("Agora contem um terceiro dono(a) alterado com sucesso para: " + dono3);
        break;
      case "dono4":
        if (args.length < 1) {
          return;
        }
        if (!isOwner) {
          return reply("Apenas meu criador");
        }
        dono4 = body.slice(8);
        v15.dono4 = dono4;
        fs.writeFileSync("./dono/nescessario.json", JSON.stringify(v15, null, "\t"));
        reply("Agora contem um quarto dono(a) alterado com sucesso para: " + dono4);
        break;
      case "dono5":
        if (args.length < 1) {
          return;
        }
        if (!isOwner) {
          return reply("Apenas meu criador");
        }
        dono5 = body.slice(8);
        v15.dono5 = dono5;
        fs.writeFileSync("./dono/nescessario.json", JSON.stringify(v15, null, "\t"));
        reply("Agora contem um quinto dono(a) alterado com sucesso para: " + dono5);
        break;
      case "dono6":
        if (args.length < 1) {
          return;
        }
        if (!isOwner) {
          return reply("Apenas meu criador");
        }
        dono6 = body.slice(8);
        v15.dono6 = dono6;
        fs.writeFileSync("./dono/nescessario.json", JSON.stringify(v15, null, "\t"));
        reply("Agora contem um sexto dono(a) alterado com sucesso para: " + dono6);
        break;
      case "dono7":
        if (args.length < 1) {
          return;
        }
        if (!isOwner) {
          return reply("Apenas meu criador");
        }
        dono7 = body.slice(8);
        v15.dono7 = dono7;
        fs.writeFileSync("./dono/nescessario.json", JSON.stringify(v15, null, "\t"));
        reply("Agora contem um setimo dono(a) alterado com sucesso para: " + dono7);
        break;
      case "menu":
        var v203 = "Ativo";
        try {
            var v202 = await sock.fetchStatus(m.sender);
            v203 = v202.status || "Ativo";
        } catch {}
        sendImageButtons(from, "" + logo, menu(prefix, pushname, numerodn, v203, NomeDoBot, "Wa.me/" + sender.split("@")[0]), "𝙉𝙚𝙯𝙪𝙠𝒐 𝙗𝒐𝒕 𝙈𝘿", [{
          buttonId: prefix + "menulist",
          buttonText: {
            displayText: "[🌺] 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 [🌺]"
          },
          type: 1
        }, {
          buttonId: prefix + "alugar",
          buttonText: {
            displayText: "[☔️] 𝐀𝐋𝐔𝐆𝐀𝐑 [☔]"
          },
          type: 1
        }, {
          buttonId: prefix + "dono",
          buttonText: {
            displayText: "[💸️] 𝐃𝐎𝐍𝐎 [💸]"
          },
          type: 1
        }], vVO27);
        break;
      case "menulist":
      case "menulista":
        {
          timestampe = speed();
          qlatensie = speed() - timestampe;
          uptime = process.uptime();
          const buttons = [{
            type: 'list',
            title: "ABRIR LISTA DE MENUS",
            rowId: [{
              title: "🌸 NEZUKO BOT - LISTA DE MENUS 🌸",
              body: "Selecione uma categoria abaixo",
              options: [
                { title: "🌸 MENU COMPLETO", command: prefix + "menu", body: "Ver todos os comandos" },
                { title: "🎨 MENU LOGOS", command: prefix + "menulogos", body: "Criação de logos e artes" },
                { title: "👑 INFO DONO", command: prefix + "infodono", body: "Informações do proprietário" },
                { title: "🛠️ MENU DONO", command: prefix + "menudono", body: "Comandos restritos ao dono" },
                { title: "🖼️ MENU STICKER", command: prefix + "menufig", body: "Criação de figurinhas" },
                { title: "👮 MENU ADM", command: prefix + "menuadm", body: "Comandos para administradores" },
                { title: "✨ MENU EDITS 2", command: prefix + "menuedit2", body: "Edição de imagens e vídeos" },
                { title: "🍥 MENU NARUTO", command: prefix + "menunaruto", body: "Comandos tema Naruto" },
                { title: "🎵 MENU MÚSICAS", command: prefix + "menumusica", body: "Download de músicas e áudios" },
                { title: "🎮 MENU JOGOS", command: prefix + "menujogos", body: "Jogos interativos do bot" },
                { title: "🔍 MENU PESQUISAS", command: prefix + "menu-pesquisas", body: "Pesquisas na internet" },
                { title: "🎭 MENU EFEITOS", command: prefix + "menuefeito", body: "Efeitos de voz e texto" },
                { title: "💎 MENU PREMIUM", command: prefix + "menupremium", body: "Recursos para usuários VIP" },
                { title: "🌀 MENU ALTERADORES", command: prefix + "alteradores", body: "Alteradores de voz" },
                { title: "⚡ MENU GERADORES", command: prefix + "geradores", body: "Geradores de diversos tipos" }
              ]
            }]
          }];
          sock.sendButton(from, { 
            text: `🌸 *NEZUKO BOT - INTERACTIVE MENU* 🌸\n\nOlá *${pushname}*, escolha uma opção na lista abaixo para navegar pelos comandos.\n\n⚡ *Ping:* ${qlatensie.toFixed(4)}ms\n⏳ *Uptime:* ${f(uptime)}`,
            footer: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 - Versão V5"
          }, buttons, m);
          break;
        }
        case "menu_completo":
          break;
      case "menuanime":
      case "menuanimes":
        sendImageButtons(from, "" + logo, menuanime(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menujogo":
      case "menujogos":
        sendImageButtons(from, "" + logo, menujogos(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menupuxadas":
      case "puxadas":
        sendImageButtons(from, "" + logo, menupuxadas(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menudestrava":
      case "destravamenu":
        sendImageButtons(from, "" + logo, menudestrava(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menubrincadeiras2":
      case "menubrinc2":
        sendImageButtons(from, "" + logo, menubrincadeiras2(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menuadm":
      case "admmenu":
        sendImageButtons(from, "" + logo, menuadm(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menupremium":
      case "premiummenu":
        sendImageButtons(from, "" + logo, menupremium(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "mtddeban":
      case "banmtd":
        sendImageButtons(from, "" + logo, menudesban(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menupack":
      case "menu-packs":
        sendImageButtons(from, "" + logo, menupack(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menuger":
        sendImageButtons(from, "" + logo, v323(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "geradores":
      case "menugeradores":
        sendImageButtons(from, "" + logo, menugeradores(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menutravas":
      case "travasmenu":
        sendImageButtons(from, "" + logo, menutravas(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "semprefixo":
      case "menusemprefixo":
        sendImageButtons(from, "" + logo, menusemprefixo(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "funções-grupo":
      case "funçõesgrupo":
        sendImageButtons(from, "" + logo, menugrupo(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "imitações":
        sendImageButtons(from, "" + logo, menuimitacoes(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menuefeito":
      case "menuefeitos":
        sendImageButtons(from, "" + logo, menuefeito(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menupesquisas":
      case "menu-pesquisas":
        sendImageButtons(from, "" + logo, menupesquisa(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menu-bricadeiras":
      case "bricadeiras":
        sendImageButtons(from, "" + logo, menubrincadeiras(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menumusica":
      case "menuplayers":
        sendImageButtons(from, "" + logo, menumusica(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menuedit2":
      case "menuedits2":
        sendImageButtons(from, "" + logo, menuedits2(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menuplaq":
      case "plaquinhas":
        sendImageButtons(from, "" + logo, menuplaquinhas(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menulogos":
      case "logosmenu":
        sendImageButtons(from, "" + logo, menulogos(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "infodono":
      case "dono":
      case "owner":
        sendImageButtons(from, "" + logo, infodono(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menudono":
      case "donomenu":
        sendImageButtons(from, "" + logo, menudono(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "menufig":
      case "figmenu":
        sendImageButtons(from, "" + logo, menufig(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "alteradores":
      case "menualteradores":
        sendImageButtons(from, "" + logo, alteradores(prefix), "" + NomeDoBot, [{
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "menu completo"
          },
          type: 1
        }, {
          buttonId: prefix + "infopuxadas",
          buttonText: {
            displayText: "info puxadas"
          },
          type: 1
        }], vVO27);
        break;
      case "tupai":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -filter:a \"atempo=0.5,asetrate=65100\"' " + ran, (p175, p176, p177) => {
          fs.unlinkSync(gem);
          if (p175) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO138 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO139 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO138, vO139);
          fs.unlinkSync(ran);
        });
        break;
      case "reverse":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -filter_complex \"areverse\" " + ran, (p178, p179, p180) => {
          fs.unlinkSync(gem);
          if (p178) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO140 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO141 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO140, vO141);
          fs.unlinkSync(ran);
        });
        break;
      case "fat":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -filter:a \"atempo=1.6,asetrate=22100\" " + ran, (p181, p182, p183) => {
          fs.unlinkSync(gem);
          if (p181) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO142 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO143 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO142, vO143);
          fs.unlinkSync(ran);
        });
        break;
      case "deep":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -af \"atempo=4/4,asetrate=44500*2/3\" " + ran, (p184, p185, p186) => {
          fs.unlinkSync(gem);
          if (p184) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO144 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO145 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO144, vO145);
          fs.unlinkSync(ran);
        });
        break;
      case "vozmenino":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -filter:a atempo=1.06,asetrate=44100*1.25 " + ran, (p187, p188, p189) => {
          fs.unlinkSync(gem);
          if (p187) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO146 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO147 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO146, vO147);
          fs.unlinkSync(ran);
        });
        break;
      case "grave":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -filter:a \"atempo=0.9,asetrate=44100\" " + ran, (p190, p191, p192) => {
          fs.unlinkSync(gem);
          if (p190) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO148 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO149 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO148, vO149);
          fs.unlinkSync(ran);
        });
        break;
      case "grave2":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -filter:a \"atempo=1.6,asetrate=22100\" " + ran, (p193, p194, p195) => {
          fs.unlinkSync(gem);
          if (p193) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO150 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO151 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO150, vO151);
          fs.unlinkSync(ran);
        });
        break;
      case "bass":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -af equalizer=f=20:width_type=o:width=2:g=15 " + ran, (p196, p197, p198) => {
          fs.unlinkSync(gem);
          if (p196) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO152 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO153 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO152, vO153);
          fs.unlinkSync(ran);
        });
        break;
      case "bass2":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -af equalizer=f=94:width_type=o:width=2:g=30 " + ran, (p199, p200, p201) => {
          fs.unlinkSync(gem);
          if (p199) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO154 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO155 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO154, vO155);
          fs.unlinkSync(ran);
        });
        break;
      case "bass3":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -af equalizer=f=20:width_type=o:width=2:g=15 " + ran, (p202, p203, p204) => {
          fs.unlinkSync(gem);
          if (p202) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO156 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO157 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO156, vO157);
          fs.unlinkSync(ran);
        });
        break;
      case "estourado":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -af \"volume=12'\" " + ran, (p205, p206, p207) => {
          fs.unlinkSync(gem);
          if (p205) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO158 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO159 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO158, vO159);
          fs.unlinkSync(ran);
        });
        break;
      case "estourado2":
        if (!v109) {
          return reply("Marque um áudio");
        }
        reply(enviar.espere);
        muk = v109 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage;
        rane = getRandom("." + (await getExtension(muk.mimetype)));
        buffimg = await vF16(muk, "audio");
        fs.writeFileSync(rane, buffimg);
        gem = rane;
        ran = getRandom(".mp3");
        exec("ffmpeg -i " + gem + " -af \"acrusher=.1:1:64:0:log\" " + ran, (p208, p209, p210) => {
          fs.unlinkSync(gem);
          if (p208) {
            return reply("Error!");
          }
          hah = fs.readFileSync(ran);
          const vO160 = {
            audio: hah,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO161 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO160, vO161);
          fs.unlinkSync(ran);
        });
        break;
      case "sorteio":
        if (!isGroupAdmins) {
          return reply("Só ADM pode utilizar este comando.");
        }
        try {
          if (!isGroup) {
            return reply(enviar.msg.grupo);
          }
          if (!q) {
            return reply("Coloque algo, após o comando sorteio, por exemplo, " + prefix + "sorteio de 100 R$");
          }
          d = [];
          teks = "[☔] PARABÉNS, VOCÊ É O SORTUDO DO GRUPO\n\n";
          for (i = 0; i < 1; i++) {
            r = Math.floor(Math.random() * v28.participants.length + 0);
            teks += "┠➥ *[☔] USUÁRIO*  @" + v37[r].id.split("@")[0] + "\n";
            d.push(v37[r].id);
          }
          vF22(teks, d, true);
        } catch (e3) {
          console.log(e3);
          reply("Deu erro, tente novamente :/");
        }
        break;
      case "sorteionumeros":
        if (!isGroupAdmins) {
          return reply("Só ADM pode utilizar este comando.");
        }
        try {
          if (!isGroup) {
            return reply(enviar.msg.grupo);
          }
          if (!q) {
            return reply("Coloque algo, após o comando sorteio, por exemplo, " + prefix + "sorteionumero de 100 R$");
          }
          var v204 = listaSorteio[Math.floor(Math.random() * listaSorteio.length)];
          d = [];
          teks = "[☔] PARABÉNS, VOCÊ É O SORTUDO DO GRUPO\n\n";
          for (i = 0; i < 1; i++) {
            teks += "┠➥ *[☔] NÚMERO:* " + v204 + "\n";
            d.push(v204);
          }
          vF22(teks, d, true);
        } catch (e4) {
          console.log(e4);
          reply("Deu erro, tente novamente :/");
        }
        break;
      case "gitbot":
      case "git":
        {
          const vO162 = {
            buttonId: prefix + "termux",
            buttonText: {
              displayText: "[☔] 𝗧𝗘𝗥𝗠𝗨𝗫 119 [☔] "
            },
            type: 1
          };
          const vO163 = {
            buttonId: prefix + "contratar",
            buttonText: {
              displayText: "[☔] 𝗖𝗢𝗠𝗣𝗥𝗔𝗥 𝗕𝗢𝗧 [☔]"
            },
            type: 1
          };
          const vO164 = {
            buttonId: prefix + "menu",
            buttonText: {
              displayText: "[☔] 𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟 [☔]"
            },
            type: 1
          };
          let vA17 = [vO162, vO163, vO164];
          let vLSNezukoMD20Descrip24h = "𝗡𝗘𝗭𝗨𝗞𝗢 𝗕𝗢𝗧 \n\n[☔] 𝗕𝗢𝗧: Nezuko - MD\n[☔] 𝗩𝗘𝗥𝗦𝗔̃𝗢: 2.0\n[☔] 𝗔𝗥𝗤𝗨𝗜𝗩𝗢: descrip\n[☔] 𝗦𝗨𝗣𝗢𝗥𝗧𝗘 : 24h\n[☔] 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦: +1000\n[☔] 𝗔𝗧𝗨𝗔𝗟𝗜𝗭𝗔𝗖̧𝗔̃𝗢: semanal";
          blabla = fs.readFileSync("./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg");
          const vO165 = {
            image: blabla,
            caption: "" + vLSNezukoMD20Descrip24h,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA17,
            headerType: 4
          };
          buttonMessage = vO165;
          const vO166 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO166);
        }
        break;
      case "metadinha":
        {
          const vO167 = {
            text: "👋",
            key: m.key
          };
          const vO168 = {
            react: vO167
          };
          sock.sendMessage(from, vO168);
          let v205 = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
          let v206 = v205[Math.floor(Math.random() * v205.length)];
          const vO169 = {
            url: v206.male
          };
          const vO170 = {
            image: vO169,
            caption: "MASCULINO"
          };
          const vO171 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO170, vO171);
          const vO172 = {
            url: v206.female
          };
          const vO173 = {
            image: vO172,
            caption: "FEMININO"
          };
          const vO174 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO173, vO174);
        }
        break;
      case "metadinha2":
        anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
        random = anu[Math.floor(Math.random() * anu.length)];
        var vA18 = [{
          buttonId: "affscringe",
          buttonText: {
            displayText: "[☔]"
          },
          type: 1
        }];
        const vO175 = {
          url: random.male
        };
        const vO176 = {
          image: vO175,
          caption: "MASCULINO",
          footer: "" + NomeDoBot,
          buttons: vA18,
          headerType: 4
        };
        let vVO176 = vO176;
        const vO177 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vVO176, vO177).catch(p211 => {
          return "Error!";
        });
        var vA19 = [{
          buttonId: "affscringe",
          buttonText: {
            displayText: "[☔]"
          },
          type: 1
        }];
        const vO178 = {
          url: random.female
        };
        const vO179 = {
          image: vO178,
          caption: "FEMININO",
          footer: "" + NomeDoBot,
          buttons: vA19,
          headerType: 4
        };
        let vVO179 = vO179;
        const vO180 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vVO179, vO180).catch(p212 => {
          return "Error!";
        });
        break;
      case "metadinha3":
        {
          try {
            const vO181 = {
              text: "✅",
              key: mek.key
            };
            const vO182 = {
              react: vO181
            };
            sock.sendMessage(from, vO182);
            let v207 = await fetchJson("https://nezsab-apis.xyz/api/random/metadinha?apikey=" + keyapi);
            const vO183 = {
              url: v207.resultado.metadinha_feminina
            };
            const vO184 = {
              image: vO183,
              caption: "Perfil Feminino:"
            };
            const vO185 = {
              quoted: vVO27
            };
            sock.sendMessage(from, vO184, vO185);
            const vO186 = {
              url: v207.resultado.metadinha_masculina
            };
            const vO187 = {
              image: vO186,
              caption: "Perfil Masculino:"
            };
            const vO188 = {
              quoted: vVO27
            };
            sock.sendMessage(from, vO187, vO188);
          } catch {
            reply("ERROR!");
          }
        }
        break;
      case "metadinha4":
        {
          try {
            const vO189 = {
              text: "✅",
              key: mek.key
            };
            const vO190 = {
              react: vO189
            };
            sock.sendMessage(from, vO190);
            let v208 = await fetchJson("https://nezsab-apis.xyz/api/random/metadinha2?apikey=" + keyapi);
            const vO191 = {
              url: v208.resultado.parte_feminina
            };
            const vO192 = {
              image: vO191,
              caption: "Perfil Feminino:"
            };
            const vO193 = {
              quoted: vVO27
            };
            sock.sendMessage(from, vO192, vO193);
            const vO194 = {
              url: v208.resultado.parte_masculina
            };
            const vO195 = {
              image: vO194,
              caption: "Perfil Masculino:"
            };
            const vO196 = {
              quoted: vVO27
            };
            sock.sendMessage(from, vO195, vO196);
          } catch {
            reply("ERROR!");
          }
        }
        break;
      case "imunes":
      case "menuimunes":
        timestampe = speed();
        latensie = speed() - timestampe;
        uptime = process.uptime();
        adivinhaa = mek.key.id.length > 21 ? "Android 🥴" : mek.key.id.substring(0, 2) == "3A" ? "IPHONE 🔋🔌" : "ZAP DA WEB 💻";
        const vO197 = {
          title: "[☔] 50K BLACK ROXO [☔]",
          rowId: prefix + "imune1",
          description: "Imune primário"
        };
        const vO198 = {
          title: "[☔] 50K BLACK SECUNDÁRIO ROXO [☔]",
          rowId: prefix + "imune2",
          description: "Imune secundário"
        };
        const vO199 = {
          title: "[☔] BASE BY BISHOP [☔]",
          rowId: prefix + "imune3",
          description: "Base primária"
        };
        const vO200 = {
          title: "[☔] BASE PRIMÁRIA [☔]",
          rowId: prefix + "imune4",
          description: "Base primária"
        };
        const vO201 = {
          title: "[☔] BILLS HAKAI [☔]",
          rowId: prefix + "imune5",
          description: "Imune primário"
        };
        const vO202 = {
          title: "[☔] BILLS HAKAI SECUNDÁRIO [☔]",
          rowId: prefix + "imune6",
          description: "Imune secundário"
        };
        const vO203 = {
          title: "[☔] DANCING IN HELL [☔]",
          rowId: prefix + "imune7",
          description: "Imune primário"
        };
        const vO204 = {
          title: "[☔] FREEDOM WINGS AMARELO [☔]",
          rowId: prefix + "imune8",
          description: "Imune primário"
        };
        const vO205 = {
          title: "[☔] VIBES DARK PRETO [☔]",
          rowId: prefix + "imune9",
          description: "Imune primário"
        };
        const vO206 = {
          title: "[☔] TISU END 3 [☔]",
          rowId: prefix + "imune10",
          description: "Imune primário"
        };
        const vO207 = {
          title: "[☔] EL THE FURY ROXO [☔]",
          rowId: prefix + "imune11",
          description: "Imune primário"
        };
        const vO208 = {
          title: "[☔] BISHOP O LOKO [☔]",
          rowId: prefix + "imune12",
          description: "Imune primário"
        };
        const vO209 = {
          title: "[☔] BISHOP O LOKO VERMELHO [☔]",
          rowId: prefix + "imune13",
          description: "Imune secundário"
        };
        const vO210 = {
          title: "[☔] NEZUKO BOT [☔]",
          rows: [vO197, vO198, vO199, vO200, vO201, vO202, vO203, vO204, vO205, vO206, vO207, vO208, vO209]
        };
        vA44 = [vO210];
        const vO211 = {
          text: "\n" + pushname + " bem vindo ao menu de imunes.",
          footer: "➥@daniell_dn1",
          title: "",
          buttonText: "[☔] MENU IMUNES [☔]",
          sections: vA44
        };
        const vVO211 = vO211;
        const vO212 = {
          quoted: vVO27
        };
        v308 = await sock.sendMessage(from, vVO211, vO212);
        break;
      case "imune1":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/3munyxvb8dmjt09/50K_BLACK_%2528ROXO%2529.apk/file\n");
        break;
      case "imune2":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/jjdx696vpyr1xa7/50K_BLACK_%2528SECUNDARIO_ROXO%2529.apk/file\n");
        break;
      case "imune3":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/l7aa2een9x345z8/Base_By_Bishop_%2528sem_obsoleto_2.22.20.3%2529.apk/file\n");
        break;
      case "imune4":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/wkba5qauviedvuf/Base_Prim%25C3%25A1ria_%2528Colocar_o_n%25C3%25BAmero%252C_pedir_c%25C3%25B3digo%252C_corrigir_crash%2529_%25281%2529%25282%2529.apk/file\n");
        break;
      case "imune5":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/7dmiwdzndxoons6/Bills_Hakai_Primario1.apk/file\n");
        break;
      case "imune6":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/gmtnaeq8f47h2le/Bills_Hakai_Secund%25C3%25A1rio2.apk/file\n");
        break;
      case "imune7":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/313lk2o71rykphg/dancing_in_hell_sem_obsoleto.zip/file\n");
        break;
      case "imune8":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/6z1b0ec2nqh0zy5/%25F0%259D%2590%2585%25F0%259D%2590%25AB%25F0%259D%2590%259E%25F0%259D%2590%259E%25F0%259D%2590%259D%25F0%259D%2590%25A8%25F0%259D%2590%25A6_%25F0%259D%2590%2596%25F0%259D%2590%25A2%25F0%259D%2590%25A7%25F0%259D%2590%25A0%25F0%259D%2590%25AC_%25E2%2580%2590%25E2%25BB%25B0_%2528Amarelo%2529_%2528com.PxsMini%2529.apk/file\n");
        break;
      case "imune9":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/w6fcsfkxbbeggcy/%25F0%259D%2590%2595%25F0%259D%2596%258E%25F0%259D%2596%2587%25F0%259D%2596%258A%25F0%259D%2596%2598_%25EA%2594%25B8_%25F0%259D%2595%25AF%25F0%259D%2596%2586%25F0%259D%2596%2597%25F0%259D%2596%2590_%25F0%259D%2590%2586%25F0%259D%2596%2594_%25C3%2597_Preto_-_Branco.apk/file\n");
        break;
      case "imune10":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/yc3ziax1z63pboe/%25F0%259D%2591%2587%25F0%259D%2591%2596%25F0%259D%2591%25A0%25F0%259D%2591%25A2_%25F0%259D%2590%25B8%25F0%259D%2591%259B%25F0%259D%2591%2591_%25F0%259D%2590%25BC%25F0%259D%2590%25BC%25F0%259D%2590%25BC.apk/file\n");
        break;
      case "imune11":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/d5nwazg6kn3fhuu/%25F0%259D%259A%25B5%25F0%259D%2590%258B_%25F0%259D%2590%2593%25F0%259D%2590%2587%25F0%259D%259A%25B5_%25F0%259D%2590%2585%25F0%259D%2590%2594%25F0%259D%2590%2591%25F0%259D%2590%2598_%2528Roxo%2529.apk/file\n");
        break;
      case "imune12":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/6ec43ft1rnxsltf/%25EA%259C%259B_%25C2%25B2%25F0%259D%2590%2581%25F0%259D%2590%2588%25F0%259D%2590%2592%25F0%259D%2590%2587%25F0%259D%2590%258E%25F0%259D%2590%258F_%25F0%2596%25A6%25BC_%25F0%259D%2590%258E_%25F0%259D%2590%258B%25F0%259D%2590%258E%25F0%259D%2590%258A%25F0%259D%2590%258E_%25EA%259C%259C_%255BSEC%255D_%255BROXO%255D_rr.apk.apk/file\n");
        break;
      case "imune13":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/2mfxwxxus5pq7p7/%25EA%259C%259B_%25C2%25B2%25F0%259D%2590%2581%25F0%259D%2590%2588%25F0%259D%2590%2592%25F0%259D%2590%2587%25F0%259D%2590%258E%25F0%259D%2590%258F_%25F0%2596%25A6%25BC_%25F0%259D%2590%258E_%25F0%259D%2590%258B%25F0%259D%2590%258E%25F0%259D%2590%258A%25F0%259D%2590%258E_%25EA%259C%259C_%255BSEC%255D_%255BVERMELHO%255D_rr.apk/file\n");
        break;
      case "menu-anime":
      case "menuanime":
        {
          const vO213 = {
            title: "🇱\xA0🇮\xA0🇸\xA0🇹\xA0🇦\xA0  🇩\xA0🇪\xA0  🇦\xA0🇳\xA0🇮\xA0🇲\xA0🇪\xA0🇸\xA0",
            rows: [{
              title: "✰ۜۜ͜͡𝐒𝐇𝐎𝐓𝐀🎎",
              rowId: prefix + "shota",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐖𝐀𝐈𝐅𝐔🎎",
              rowId: prefix + "waifu",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐋𝐎𝐋𝐈🎎",
              rowId: prefix + "loli2",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐘𝐎𝐓𝐒𝐔𝐁𝐀🎎",
              rowId: prefix + "yotsuba",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐒𝐇𝐈𝐍𝐎𝐌𝐈𝐘𝐀🎎",
              rowId: prefix + "shinomiya",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐘𝐔𝐌𝐄𝐊𝐎🎎",
              rowId: prefix + "yumeko",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐓𝐄𝐉𝐈𝐍𝐀🎎",
              rowId: prefix + "tejina",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐂𝐇𝐈𝐍𝐎🎎",
              rowId: prefix + "chino",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐁𝐎𝐑𝐔𝐓𝐎🎎",
              rowId: prefix + "boruto",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐊𝐀𝐎𝐑𝐈🎎",
              rowId: prefix + "kaori",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐒𝐇𝐈𝐙𝐔𝐊𝐀🎎",
              rowId: prefix + "shizuka",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐊𝐀𝐆𝐀🎎",
              rowId: prefix + "kaga",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐊𝐎𝐓𝐎𝐑𝐈🎎",
              rowId: prefix + "kotori",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐌𝐈𝐊𝐀𝐒𝐀🎎",
              rowId: prefix + "mikasa",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐀𝐊𝐈𝐘𝐀𝐌𝐀🎎",
              rowId: prefix + "akiyama",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐆𝐑𝐄𝐌𝐎𝐑𝐘🎎",
              rowId: prefix + "gremory",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐈𝐒𝐔𝐙𝐔🎎",
              rowId: prefix + "isuzu",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐒𝐇𝐈𝐍𝐀🎎",
              rowId: prefix + "shina",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐊𝐀𝐆𝐔𝐑𝐀🎎",
              rowId: prefix + "kagura",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐒𝐇𝐈𝐍𝐊𝐀🎎",
              rowId: prefix + "shinka",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐄𝐁𝐀🎎",
              rowId: prefix + "eba",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐄𝐋𝐀𝐈𝐍𝐀🎎",
              rowId: prefix + "elaina",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐄𝐑𝐙𝐀🎎",
              rowId: prefix + "erza",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐇𝐈𝐍𝐀𝐓𝐀🎎",
              rowId: prefix + "hinata",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐌𝐈𝐍𝐀𝐓𝐎🎎",
              rowId: prefix + "minato",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐍𝐀𝐑𝐔𝐓𝐎🎎",
              rowId: prefix + "naruto",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐒𝐀𝐆𝐈𝐑𝐈🎎",
              rowId: prefix + "sagiri",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐍𝐄𝐙𝐔𝐊𝐎🎎",
              rowId: prefix + "nezuko",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐑𝐈𝐙𝐄🎎",
              rowId: prefix + "rize",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐃𝐄𝐈𝐃𝐀𝐑𝐀🎎",
              rowId: prefix + "deidara",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐘𝐔𝐊𝐈🎎",
              rowId: prefix + "yuki",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐀𝐍𝐀🎎",
              rowId: prefix + "ana",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐀𝐒𝐔𝐍𝐀🎎",
              rowId: prefix + "asuna",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐀𝐘𝐔𝐙𝐀𝐖𝐀🎎",
              rowId: prefix + "ayuzawa",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐂𝐇𝐈𝐓𝐎𝐆𝐄🎎",
              rowId: prefix + "chitoge",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐄𝐌𝐈𝐋𝐈𝐀🎎",
              rowId: prefix + "emilia",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐇𝐄𝐒𝐓𝐈𝐀🎎",
              rowId: prefix + "hestia",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐈𝐍𝐎𝐑𝐈🎎",
              rowId: prefix + "inori",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐈𝐓𝐀𝐂𝐇𝐈🎎",
              rowId: prefix + "itachi",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐌𝐀𝐃𝐀𝐑𝐀🎎",
              rowId: prefix + "madara",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐒𝐀𝐊𝐔𝐑𝐀🎎",
              rowId: prefix + "sakura",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐒𝐀𝐒𝐔𝐊𝐄🎎",
              rowId: prefix + "sasuke",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐓𝐒𝐔𝐍𝐀𝐃𝐄🎎",
              rowId: prefix + "tsunade",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐎𝐍𝐄-𝐏𝐈𝐄𝐂𝐄🎎",
              rowId: prefix + "onepiece",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐌𝐎𝐁𝐈𝐋🎎",
              rowId: prefix + "emilia",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐌𝐎𝐍𝐓𝐎𝐑🎎",
              rowId: prefix + "montor",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐊𝐄𝐍𝐄𝐊𝐈🎎",
              rowId: prefix + "keneki",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐌𝐄𝐆𝐔𝐌𝐈𝐍🎎",
              rowId: prefix + "megumin",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐓𝐎𝐔𝐊𝐀𝐂𝐇𝐀𝐍🎎",
              rowId: prefix + "toukachan",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐈𝐓𝐎𝐑𝐈🎎",
              rowId: prefix + "itori",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐒𝐀𝐊𝐔𝐑𝐀𝐉𝐈𝐌𝐀🎎",
              rowId: prefix + "sakurajima",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐊𝐔𝐑𝐔𝐌𝐈🎎",
              rowId: prefix + "kurumi",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐌𝐈𝐊𝐔🎎",
              rowId: prefix + "miku",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐏𝐎𝐊𝐄𝐌𝐎𝐍🎎",
              rowId: prefix + "pokemon",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐂𝐎𝐒𝐏𝐋𝐀𝐘🎎",
              rowId: prefix + "cosplay",
              description: "" + NomeDoBot
            }]
          };
          vA44 = [vO213];
          const vO214 = {
            text: "Bem vindo(a), *" + pushname + "*,\nSelecione quantos você desejar.",
            footer: "By: " + NomeDoBot,
            title: "˚⸺͟͞ꪶ𝐌𝐄𝐍𝐔-𝐀𝐍𝐈𝐌𝐄𝐒ꫂ ✰✰✰",
            buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
            sections: vA44
          };
          const vVO214 = vO214;
          const vO215 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO214, vO215);
        }
        break;
      case "shota":
      case "waifu":
      case "loli2":
      case "yotsuba":
      case "shinomiya":
      case "yumeko":
      case "tejina":
      case "chiho":
      case "boruto":
      case "kaori":
      case "shizuka":
      case "kaga":
      case "kotori":
      case "mikasa":
      case "akiyama":
      case "gremory":
      case "isuzu":
      case "shina":
      case "kagura":
      case "shinka":
      case "eba":
      case "elaina":
      case "erza":
      case "hinata":
      case "minato":
      case "naruto":
      case "sagiri":
      case "nezuko":
      case "rize":
      case "deidara":
      case "yuki":
      case "ana":
      case "asuna":
      case "ayuzawa":
      case "chitoge":
      case "emilia":
      case "hestia":
      case "inori":
      case "itachi":
      case "madara":
      case "sakura":
      case "sasuke":
      case "tsunade":
      case "onepiece":
      case "mobil":
      case "montor":
      case "keneki":
      case "megumin":
      case "toukachan":
      case "itori":
      case "kurumi":
      case "sakurajima":
      case "miku":
      case "pokemon":
        reply("*Ei " + pushname + "*, já estou enviando sua imagem... Enquanto isso tome um café!");
        const vO216 = {
          buttonId: "" + prefix + command,
          buttonText: {
            displayText: "✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐀-𝐈𝐌𝐀𝐆𝐄𝐌🎎"
          },
          type: 1
        };
        buttonss = [vO216];
        const vO217 = {
          url: "https://www.nezsab-apis.xyz/random/" + command + "?apikey=" + keyapi
        };
        const vO218 = {
          image: vO217,
          caption: "▢ ⌁ *Olá " + pushname + "*, aqui está o seu pedido!\n▢ ⌁ *Horário solicitado:* " + v123 + "\n▢ ⌁ Deseja mais *fotos do(a) " + command + "?* Clique no botão abaixo!",
          footer: "By: " + NomeDoBot,
          buttons: buttonss,
          headerType: 4
        };
        buttonMessagse = vO218;
        const vO219 = {
          quoted: vVO27
        };
        sock.sendMessage(from, buttonMessagse, vO219);
        break;
      case "wikipedia":
        reply("*Ei " + pushname + "*, estou realizando a pesquisa sobre: *" + q + "*");
        sendee = await fetchJson("http://nezsab-api2.herokuapp.com/api/wikipedia?q=" + q + "&apikey=" + keyapi);
        v272 = "✓ 🏷 𝘛𝘪𝘵𝘶𝘭𝘰⧽ " + sendee.pesquisa.titulo + "\n";
        v272 += "× 🈹 𝘋𝘦𝘴𝘤𝘳𝘪𝘤̧𝘢̃𝘰⧽ " + sendee.pesquisa.descrição + "\n";
        v272 += "× ✒️ 𝘙𝘦𝘴𝘶𝘭𝘵𝘢𝘥𝘰⧽ " + sendee.pesquisa.resultado;
        img = await getBuffer(sendee.pesquisa.thumb);
        const vO220 = {
          image: img,
          caption: "" + v272
        };
        const vO221 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO220, vO221);
        break;
      case "qrcode":
        reply(mess.wait);
        const vEncodeURIComponent = encodeURIComponent(body.slice(8));
        if (!vEncodeURIComponent) {
          return reply("Digite um texto/url que deseja criar um código qr");
        }
        const v209 = await getBuffer("https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" + vEncodeURIComponent);
        const vO222 = {
          image: v209
        };
        const vO223 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO222, vO223);
        break;
      case "soundcloud":
        {
          soundb = args.join(" ");
          if (!soundb) {
            return reply("Cadê o link do SoundCloud?");
          }
          const vO224 = {
            buttonId: prefix + "sc_audio " + q,
            buttonText: {
              displayText: "🎶 Baixar [ Formato: Áudio ]"
            },
            type: 1
          };
          const vO225 = {
            buttonId: prefix + "sc_documento " + q,
            buttonText: {
              displayText: "📄 Baixar [ Formato: Doc ]"
            },
            type: 1
          };
          let vA20 = [vO224, vO225];
          vt = await axios.get("https://nezsab-apis.xyz/api/soundcloud?url=" + soundb + "&apikey=" + keyapi);
          let v210 = "    ₊˚.ೃೀ𝐒𝐎𝐔𝐍𝐃✰𝐂𝐋𝐎𝐔𝐃፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n   lıl.ılı.lıllılı.ıllı..ılı.lıllılı.ıllı.ılı.lılı.lıllılıl.lıl\n➤ۜۜ͜͡🎶 𝘔𝘶́𝘴𝘪𝘤𝘢⧽ " + vt.data.resultado.titulo + "\n➤ۜۜ͜͡🏷️ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘴⧽ " + vt.data.resultado.total_downloads;
          img = await getBuffer(vt.data.resultado.capa);
          const vO226 = {
            image: img,
            caption: "" + v210,
            footer: "Usuário: " + pushname + "\nBy: " + NomeDoBot,
            buttons: vA20,
            headerType: 4
          };
          buttonMessage = vO226;
          const vO227 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage, vO227);
        }
        break;
      case "sc_documento":
        reply("Aguarde, estou baixando sua música!");
        vt = await axios.get("https://nezsab-apis.xyz/api/soundcloud?url=" + soundb + "&apikey=" + keyapi);
        const vO228 = {
          url: vt.resultado.link_dl
        };
        const vO229 = {
          document: vO228,
          mimetype: "audio/mpeg",
          fileName: vt.resultado.titulo + ".mp3"
        };
        const vO230 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO229, vO230);
        break;
      case "sc_audio":
        reply("Aguarde, estou baixando sua música!");
        vt = await fetchJson("https://nezsab-apis.xyz/api/soundcloud?url=" + soundb + "&apikey=" + keyapi);
        const vO231 = {
          url: vt.resultado.link_dl
        };
        const vO232 = {
          audio: vO231,
          mimetype: "audio/mpeg",
          fileName: vt.resultado.titulo + ".mp3"
        };
        const vO233 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO232, vO233);
        break;
      case "soundcloud2":
        qd = args.join(" ");
        const vO234 = {
          text: "🔍",
          key: m.key
        };
        const vO235 = {
          react: vO234
        };
        sock.sendMessage(from, vO235);
        if (qd.length < 7) {
          return reply("Você deve pegar o link gerado do Soundcloud e usar com esse comando, e ele enviará seu áudio.");
        }
        anu = await fetchJson("https://ayu.p7api.xyz/api/dl/sound?link=" + q + "&apikey=" + keyapi2);
        pla = "🎶 *Música:* " + anu.resultado.titulo + "\n";
        pla += "🏷️ *Total de downloads:* " + anu.resultado.total_downloads + "\n";
        pla += "*_Aguarde, estou enviando o áudio!_*";
        img = await getBuffer(anu.resultado.capa);
        const vO236 = {
          image: img,
          caption: "" + pla
        };
        const vO237 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO236, vO237);
        const vO238 = {
          url: anu.resultado.link_dl
        };
        const vO239 = {
          audio: vO238,
          mimetype: "audio/mpeg",
          fileName: anu.resultado.titulo + ".mp3"
        };
        const vO240 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO239, vO240);
        break;
      case "happymod":
        if (!q) {
          return reply("Cadê o título da pesquisa?");
        }
        axios.get("http://nezsab-api2.herokuapp.com/api/happymod?q=" + q + "&apikey=" + keyapi).then(p213 => {
          try {
            d = p213.data.resultado;
            v272 = "";
            no = 0;
            for (let v211 of d) {
              no += 1;
              v272 += "✓ 🏷️ 𝘕𝘰𝘮𝘦⧽ " + v211.nome + "\n× 🔗 𝘓𝘪𝘯𝘬⧽ " + v211.link + "\n\n";
            }
            const vO241 = {
              url: "" + logo
            };
            const vO242 = {
              image: vO241,
              caption: v272
            };
            sock.sendMessage(from, vO242);
          } catch (e5) {
            reply("Nenhum resultado foi encontrado.");
          }
        }).catch(p214 => {
          reply("Ops, eu acho que a api ou módulo caiu!");
          console.log(p214);
        });
        break;
      case "playvid2":
        qp = args.join(" ");
        res = await yts(qp);
        const vO243 = {
          text: "⏳",
          key: mek.key
        };
        const vO244 = {
          react: vO243
        };
        sock.sendMessage(from, vO244);
        blaimg = await getBuffer(res.all[0].image);
        v427 = "▢ *Título:* " + res.all[0].title + "\n▢ *Visualizações:* " + res.all[0].views + "\n▢ *Duração:* " + res.all[0].timestamp + "\n▢ *Canal:* " + res.all[0].author.name;
        sendImageButtons(from, "" + res.all[0].image, v427, "", [{
          buttonId: prefix + "ytvideo " + res.all[0].url,
          buttonText: {
            displayText: "🎦 Download [ Video ]"
          },
          type: 1
        }, {
          buttonId: prefix + "playvid " + res.all[0].url,
          buttonText: {
            displayText: "☔ Playlist [ YouTube ]"
          },
          type: 1
        }], vVO27);
        break;
      case "playvid4":
        reply("<❗> Aguarde um pouco...");
        playvid = args.join(" ");
        anu = await fetchJson("https://nezsab-apis.xyz/api/youtube/playmp4-2?q=" + q + "&apikey=" + keyapi);
        pla = "---「 𝐘𝐎𝐔𝐓𝐔𝐁𝐄-𝐏𝐋𝐀𝐘 𝐕𝐈𝐃𝐄𝐎 」---\n";
        pla += "๖ۣ• ▢️️ *Título:* " + anu.resultado.título + "\n";
        pla += "๖ۣ• ▢️ *Visualizações:* " + anu.resultado.visualizações + "\n";
        pla += "๖ۣ• ▢️ *Canal:* " + anu.resultado.canal + "\n";
        img = await getBuffer(anu.resultado.thumb);
        const vO245 = {
          image: img,
          caption: "" + pla
        };
        const vO246 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO245, vO246);
        const vO247 = {
          url: anu.resultado.url
        };
        const vO248 = {
          video: vO247,
          mimetype: "video/mp4",
          fileName: anu.resultado.título + ".mp4"
        };
        const vO249 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO248, vO249);
        break;
      case "playvid3":
        reply(enviar.espere);
        playvid = args.join(" ");
        anu = await fetchJson("https://p7api.xyz/api/ytplaymp4?nome=" + playvid + "&apikey=" + keydop7);
        pla = "---「 𝐘𝐎𝐔𝐓𝐔𝐁𝐄-𝐏𝐋𝐀𝐘 𝐕𝐈𝐃𝐄𝐎 」---\n";
        pla += "➡️ *Título:* " + anu.resultado.título + "\n";
        pla += "📊️ *Visualizações:* " + anu.resultado.visualizações + "\n";
        pla += "💈️️ *Canal:* " + anu.resultado.canal + "\n";
        pla += "🚨 *_Aguarde, estou enviando o vídeo!_*";
        img = await getBuffer(anu.resultado.thumb);
        const vO250 = {
          image: img,
          caption: "" + pla
        };
        const vO251 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO250, vO251);
        const vO252 = {
          url: anu.resultado.url
        };
        const vO253 = {
          video: vO252,
          mimetype: "video/mp4",
          fileName: anu.resultado.título + ".mp4"
        };
        const vO254 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO253, vO254);
        break;
      case "playvid":
        reply("*Olá " + pushname + "*, já estou enviando os resultados da pesquisa!");
        if (!q.length > 2) {
          return reply("Cade o título da música que deseja pesquisar?");
        }
        var vA21 = [];
        v453 = await yts(q);
        for (let v212 of v453.all) {
          const vO255 = {
            title: v212.title,
            description: "Canal: " + v212.author.name + "\nDuração: " + v212.timestamp,
            rowId: prefix + "ytmp4 " + v212.url
          };
          vA21.push(vO255);
        }
        const vO256 = {
          title: "",
          rows: vA21
        };
        const vO257 = {
          text: "[📋]️ 𝐘𝐓-𝐏𝐋𝐀𝐘𝐋𝐈𝐒𝐓 𝐕𝐈𝐃𝐄𝐎 [🎞️]️",
          footer: "© _Copyright by Nezuko-MD_",
          title: "",
          buttonText: "🔍𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🔥",
          sections: [vO256]
        };
        listMessagze = vO257;
        sock.sendMessage(from, listMessagze);
        break;
      case "playaud":
        reply("*Olá " + pushname + "*, já estou enviando os resultados da pesquisa!");
        if (!q.length > 2) {
          return reply("Cade o título da música que deseja pesquisar?");
        }
        var vA21 = [];
        v453 = await yts(q);
        for (let v213 of v453.all) {
          const vO258 = {
            title: v213.title,
            description: "Canal: " + v213.author.name + "\nDuração: " + v213.timestamp,
            rowId: prefix + "ytaudio2 " + v213.url
          };
          vA21.push(vO258);
        }
        const vO259 = {
          title: "",
          rows: vA21
        };
        const vO260 = {
          text: "[📋]️ 𝐘𝐓-𝐏𝐋𝐀𝐘𝐋𝐈𝐒𝐓 𝐀𝐔𝐃𝐈𝐎 [🎶]️",
          footer: "© _Copyright by Nezuko-MD_",
          title: "",
          buttonText: "🔍𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🔥",
          sections: [vO259]
        };
        listMessagze = vO260;
        sock.sendMessage(from, listMessagze);
        break;
      case "info":
        try {
          ppimg = await sock.profilePictureUrl(sender.split("@")[0] + "@c.us", "image");
        } catch {
          ppimg = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        me = sock.user;
        uptime = process.uptime();
        teks = "\n╭━─━───[🌹]────━─━╮\nᴜsᴜᴀ́ʀɪᴏ : " + pushname + "\nɴᴏᴍᴇ ᴅᴏ ʙᴏᴛ : " + NomeDoBot + "\nɴᴜ́ᴍᴇʀᴏ ᴅᴏ ʙᴏᴛ : wa.me/" + me.id.split("@")[0] + "\nᴘʀᴇғɪxᴏ : 『 " + prefix + " 』\nᴏ ʙᴏᴛ ᴇsᴛᴀ́ ᴀᴛɪᴠᴏ ᴅᴇsᴅᴇ  : " + runtime(uptime) + "\n╰━─━───[🌹]────━─━╯";
        daftarimgg = await getBuffer(ppimg);
        sock.sendMessage(from, {
          image: daftarimgg,
          caption: teks,
          mentions: [sock.user.id]
        });
        break;
      case "tempban":
        {
          if (!isGroup) {
            return reply(mess.only.group);
          }
          if (!v45) {
            return reply(mess.only.botadm);
          }
          if (!isGroupAdmins) {
            return reply(enviar.msg.adm);
          }
          let v214 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : v21.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await sock.groupParticipantsUpdate(m.chat, [v214], "remove").then(p215 => console.log(jsonformat(p215))).catch(p216 => console.log(jsonformat(p216)));
          reply("Pronto.");
          await sleep(300000);
          await sock.groupParticipantsUpdate(m.chat, [v214], "add").then(p217 => console.log(jsonformat(p217))).catch(p218 => console.log(jsonformat(p218)));
        }
        break;
      case "del":
      case "delete":
      case "d":
        {
          if (!v44 && !isGroupAdmins && !isPremium) {
            return reply(enviar.msg.premium);
          }
          if (!quoted) {
            return;
          }
          let {
            chat: chatId,
            fromMe: isFromMe,
            id: msgId
          } = quoted;
          sock.sendMessage(from, {
            delete: {
              remoteJid: from,
              fromMe: false,
              id: m.quoted.id,
              participant: m.quoted.sender
            }
          });
        }
        break;
      case "apagar":
        const vO261 = {
          remoteJid: m.chat,
          id: m.quoted.id,
          participant: m.quoted.sender
        };
        const vO262 = {
          delete: vO261
        };
        sock.sendMessage(from, vO262);
        break;
      case "destrava":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA22 = [{
            buttonId: "/destrava2",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO263 = {
            text: "" + destrava,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA22,
            headerType: 2
          };
          let vVO263 = vO263;
          const vO264 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO263, vO264);
        }
        break;
      case "destrava2":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA23 = [{
            buttonId: "/destrava3",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO265 = {
            text: "" + destrava2,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA23,
            headerType: 2
          };
          let vVO265 = vO265;
          const vO266 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO265, vO266);
        }
        break;
      case "destrava3":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA24 = [{
            buttonId: "/destrava4",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO267 = {
            text: "" + destrava3,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA24,
            headerType: 2
          };
          let vVO267 = vO267;
          const vO268 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO267, vO268);
        }
        break;
      case "destrava4":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA25 = [{
            buttonId: "/destrava5",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO269 = {
            text: "" + destrava2,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA25,
            headerType: 2
          };
          let vVO269 = vO269;
          const vO270 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO269, vO270);
        }
        break;
      case "destrava5":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA26 = [{
            buttonId: "/destrava6",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO271 = {
            text: "" + destrava5,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA26,
            headerType: 2
          };
          let vVO271 = vO271;
          const vO272 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO271, vO272);
        }
        break;
      case "destrava6":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA27 = [{
            buttonId: "/destrava7",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO273 = {
            text: "" + destrava6,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA27,
            headerType: 2
          };
          let vVO273 = vO273;
          const vO274 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO273, vO274);
        }
        break;
      case "destrava7":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA28 = [{
            buttonId: "/destrava8",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO275 = {
            text: "" + destrava7,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA28,
            headerType: 2
          };
          let vVO275 = vO275;
          const vO276 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO275, vO276);
        }
        break;
      case "destrava8":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA29 = [{
            buttonId: "/destrava9",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO277 = {
            text: "" + destrava8,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA29,
            headerType: 2
          };
          let vVO277 = vO277;
          const vO278 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO277, vO278);
        }
        break;
      case "destrava9":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA30 = [{
            buttonId: "/destrava10",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO279 = {
            text: "" + destrava9,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA30,
            headerType: 2
          };
          let vVO279 = vO279;
          const vO280 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO279, vO280);
        }
        break;
      case "destrava10":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA31 = [{
            buttonId: "/destrava11",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO281 = {
            text: "" + destrava10,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA31,
            headerType: 2
          };
          let vVO281 = vO281;
          const vO282 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO281, vO282);
        }
        break;
      case "destrava11":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA32 = [{
            buttonId: "/destrava12",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO283 = {
            text: "" + destrava11,
            footer: "© Copyright by Nezuko-MD",
            buttons: vA32,
            headerType: 2
          };
          let vVO283 = vO283;
          const vO284 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO283, vO284);
        }
        break;
      case "destrava12":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA33 = [{
            buttonId: "/destrava13",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO285 = {
            text: "" + destrava12,
            footer: "©  _Copyright by Nezuko-MD_",
            buttons: vA33,
            headerType: 2
          };
          let vVO285 = vO285;
          const vO286 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO285, vO286);
        }
        break;
      case "destrava13":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          let vA34 = [{
            buttonId: "/limpar",
            buttonText: {
              displayText: "Proxima destrava"
            },
            type: 1
          }];
          const vO287 = {
            text: "" + destrava13,
            footer: "©  _Copyright by Nezuko-MD_",
            buttons: vA34,
            headerType: 2
          };
          let vVO287 = vO287;
          const vO288 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO287, vO288);
        }
        break;
      case "subir":
      case "limpar":
        if (!v44 && !isGroupAdmins) {
          return reply(enviar.msg.premium);
        }
        const vO289 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        }, vO289);
        const vO290 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        }, vO290);
        const vO291 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        }, vO291);
        const vO292 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        }, vO292);
        const vO293 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        }, vO293);
        const vO294 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        }, vO294);
        break;
      case "frase2":
        try {
          ppimg = await sock.profilePictureUrl(sender.split("@")[0] + "@c.us", "image");
        } catch {
          ppimg = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        hehe = await fetchJson("https://www.luc4rio-rest-api.tk/api/aleatorios/frases");
        if (hehe.error) {
          return reply(hehe.error);
        }
        ccg = "\n  ‣ Author: " + hehe.Author + "\n \n  ‣ Criador: " + hehe.Criador + "\n \n  ‣ Frase: \n \n  " + hehe.Frase + "\n";
        daftarimg = await getBuffer(ppimg);
        const vO295 = {
          image: daftarimg,
          caption: ccg
        };
        const vO296 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO295, vO296);
        break;
      case "frase":
        rate = body.slice(6);
        var vA35 = ["amor imaturo diz: Eu te amo porque preciso de você", "A vida começa a cada cinco minutos", "Onde as palavras falham, a música fala", "Um bom viajante não tem planos", "Uma vez que aceitamos nossos limites, vamos além deles", "O que não nos mata nos fortalece", "Se você caminha sozinho, você vai mais rápido Se vocês caminharem juntos, vocês irão mais longe", "Uma vida cheia de erros não é apenas mais honrosa, mas é mais sábia do que uma vida gasta sem fazer nada", "Nunca perca o senso de humor e aprenda a rir de suas próprias falhas", "A preocupação é como uma cadeira de balanço, ela mantém você ocupado, mas não leva a lugar nenhum", "O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida", "Se você pode sonhar, você pode fazer", "O impossível é o fantasma dos tímidos e o refúgio dos covardes", "O caminho que temos que percorrer 998 é cheio de surpresas. Você nunca estará preparado para aqueles que o tocam, sejam eles felizes ou sombrios, porque isso faz parte de ganhar experiência. E descobrir quão agradáveis ​​ou infelizes são aqueles que esperam por você, é algo que você nunca poderá evitar", "A felicidade não é algo que você adia para o futuro, é algo que você projeta para o presente", "Os amigos devem ser como dinheiro, que antes de precisar, você sabe o seu valor", "O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida"];
        var v215 = vA35[Math.floor(Math.random() * vA35.length)];
        reply(" " + v215 + " ");
        break;
      case "frase3":
        var v216 = JSON.parse(fs.readFileSync("./funções de cmd/grupos/frases.json"));
        var v217 = v216[Math.floor(Math.random() * v216.length)];
        const vO297 = {
          buttonId: prefix + "frase3",
          buttonText: {
            displayText: "PRÓXIMA FRASE"
          },
          type: 1
        };
        buttons2 = [vO297];
        const vO298 = {
          text: "" + v217,
          footer: "by " + NomeDoBot,
          buttons: buttons2,
          headerType: 1
        };
        buttonMessage2 = vO298;
        const vO299 = {
          quoted: mek
        };
        sock.sendMessage(from, buttonMessage2, vO299);
        break;
      case "enquete":
        if (!q) {
          return reply("cade o nome?");
        }
        sock.relayMessage(from, {
          pollCreationMessage: {
            name: budy.slice(8).trim(),
            options: [{
              optionName: "Sim"
            }, {
              optionName: "Talvez"
            }, {
              optionName: "Não"
            }],
            selectableOptionsCount: 1
          }
        }, {});
        break;
      case "eununca":
        {
          const v218 = eununca[Math.floor(Math.random() * eununca.length)];
          const vO300 = {
            buttonId: prefix + "ja",
            buttonText: {
              displayText: "Eu já"
            },
            type: 1
          };
          const vO301 = {
            buttonId: prefix + "nunca",
            buttonText: {
              displayText: "Eu nunca"
            },
            type: 1
          };
          let vA36 = [vO300, vO301];
          const vO302 = {
            text: "" + v218,
            footer: "©  _Copyright by Nezuko-MD_",
            buttons: vA36,
            headerType: 2
          };
          let vVO302 = vO302;
          const vO303 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO302, vO303);
        }
        break;
      case "ja":
        {
          const vO304 = {
            buttonId: prefix + "eununca",
            buttonText: {
              displayText: "Próxima pergunta!"
            },
            type: 1
          };
          let vA37 = [vO304];
          const vO305 = {
            text: "Rapaz nem vou comentar nada pq se eu falar tô errado.",
            footer: "©  _Copyright by Nezuko-MD_",
            buttons: vA37,
            headerType: 2
          };
          let vVO305 = vO305;
          const vO306 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO305, vO306);
        }
        break;
      case "nunca":
        {
          const vO307 = {
            buttonId: prefix + "eununca",
            buttonText: {
              displayText: "Próxima pergunta!"
            },
            type: 1
          };
          let vA38 = [vO307];
          const vO308 = {
            text: "Finalmente um santinho por aqui ou está fingindo hein? 😳",
            footer: "©  _Copyright by Nezuko-MD_",
            buttons: vA38,
            headerType: 2
          };
          let vVO308 = vO308;
          const vO309 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO308, vO309);
        }
        break;
      case "pgt_desafio":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!v84) {
          return reply(mensagem[0].game);
        }
        sunsen = "🌹 *Pergunta / Desafio* 🌹\n\nEscolha uma opção abaixo entre pergunta e desafio, responda ou complete oque você escolheu, ou se preferir, pule.\n\nAs perguntas e desafios são a meu critério, e ai, vamos jogar?";
        const vO310 = {
          buttonId: prefix + "pergunta",
          buttonText: {
            displayText: "🌹 PERGUNTA 🌹"
          },
          type: 1
        };
        const vO311 = {
          buttonId: prefix + "desafio",
          buttonText: {
            displayText: "🌹 DESAFIO 🌹"
          },
          type: 1
        };
        sendButtons(from, sunsen, "" + NomeDoBot, [vO310, vO311], vVO27);
        break;
      case "pergunta":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!v84) {
          return reply(mensagem[0].game);
        }
        const vO312 = {
          text: "😇",
          key: mek.key
        };
        const vO313 = {
          react: vO312
        };
        await sock.sendMessage(from, vO313);
        sunsen = JSON.parse(fs.readFileSync("./lib/pgt.json"));
        moon = sunsen[Math.floor(Math.random() * sunsen.length)];
        const vO314 = {
          buttonId: prefix + "pergunta",
          buttonText: {
            displayText: "🌹 PRÓXIMA PERGUNTA 🌹"
          },
          type: 1
        };
        const vO315 = {
          buttonId: prefix + "desistir",
          buttonText: {
            displayText: "🌹 DESISTIR 🌹"
          },
          type: 1
        };
        sendButtons(from, moon, "" + NomeDoBot, [vO314, vO315], vVO27);
        break;
      case "desafio":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!v84) {
          return reply(mensagem[0].game);
        }
        const vO316 = {
          text: "😈",
          key: mek.key
        };
        const vO317 = {
          react: vO316
        };
        await sock.sendMessage(from, vO317);
        sunsen = JSON.parse(fs.readFileSync("./lib/desafio.json"));
        moon = sunsen[Math.floor(Math.random() * sunsen.length)];
        const vO318 = {
          buttonId: prefix + "desafio",
          buttonText: {
            displayText: "🌹 PRÓXIMO DESAFIO 🌹"
          },
          type: 1
        };
        const vO319 = {
          buttonId: prefix + "desistir",
          buttonText: {
            displayText: "🌹 DESISTIR 🌹"
          },
          type: 1
        };
        sendButtons(from, moon, "" + NomeDoBot, [vO318, vO319], vVO27);
        break;
      case "desistir":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!v84) {
          return reply(mensagem[0].game);
        }
        const vO320 = {
          text: "🙄",
          key: mek.key
        };
        const vO321 = {
          react: vO320
        };
        await sock.sendMessage(from, vO321);
        reply(pushname + " que triste, não aguentou a jogar e pediu desistência, que triste mas fazer oque né...");
        break;
      case "ytvideo":
        let {
          ytv: ytvFunc
        } = require("./funções/y2mate");
        if (!q) {
          return reply("Example : " + (prefix + command) + " https://youtube.com/watch?v=PtFMh6Tccag%27 360p");
        }
        let v219 = args[1] ? args[1] : "360p";
        media = await ytvFunc("" + q.replace("/shorts/", "/watch?v=").split("?feature")[0], v219);
        if (media.filesizeF.split("MB")[0] >= 250) {
          return reply("Video muito pesado");
        }
        const vO322 = {
          url: media.dl_link
        };
        const vO323 = {
          video: vO322,
          mimetype: "video/mp4"
        };
        const vO324 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO323, vO324);
        break;
      case "simi":
        if (v40) {
          return reply("Desativado");
        }
        sduy = args.join(" ");
        v453 = await fetchJson("https://api.simsimi.net/v2/?text=" + sduy + "&lc=pt", {
          method: "get"
        });
        simi = "" + v453.success;
        reply(simi);
        break;
      case "simih":
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (args.length < 1) {
          return reply("Hmmmm");
        }
        if (Number(args[0]) === 1) {
          if (v40) {
            return reply("O modo Simi está ativo");
          }
          samih.push(from);
          fs.writeFileSync("./funções de cmd/usuarios/simi.json", JSON.stringify(samih));
          reply("Ativado com sucesso o modo simi neste grupo 😗");
        } else if (Number(args[0]) === 0) {
          if (!v40) {
            return reply("Já está Desativado.");
          }
          samih.splice(from, 1);
          fs.writeFileSync("./funções de cmd/usuarios/simi.json", JSON.stringify(samih));
          reply("Desativado modo simi com sucesso neste grupo 😡️");
        } else {
          reply("1 para ativar, 0 para desativar, lerdao vc em");
        }
        break;
      case "simih2":
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (args.length < 1) {
          return reply("Hmmmm");
        }
        if (Number(args[0]) === 1) {
          if (v41) {
            return reply("O modo Simi está ativo");
          }
          samih2.push(from);
          fs.writeFileSync("./funções de cmd/funções/simi.json", JSON.stringify(samih2));
          reply("Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios");
        } else if (Number(args[0]) === 0) {
          if (!v41) {
            return reply("Já está Desativado.");
          }
          samih2.splice(from, 1);
          fs.writeFileSync("./funções de cmd/funções/simi.json", JSON.stringify(samih2));
          reply("Desativado modo simi com sucesso neste grupo 😡️");
        } else {
          reply("1 para ativar, 0 para desativar, lerdao vc em");
        }
        break;
      case "plaquinha":
      case "plaquinhas":
        {
          const vO325 = {
            title: "[🔞] Plaquinha 01 com o nome " + q,
            rowId: prefix + "plaq " + q,
            description: "" + NomeDoBot
          };
          const vO326 = {
            title: "[🔞] Plaquinha 02 com o nome " + q,
            rowId: prefix + "plaq2 " + q,
            description: "" + NomeDoBot
          };
          const vO327 = {
            title: "[🔞] Plaquinha 03 com o nome " + q,
            rowId: prefix + "plaq3 " + q,
            description: "" + NomeDoBot
          };
          const vO328 = {
            title: "[🔞] Plaquinha 04 com o nome " + q,
            rowId: prefix + "plaq4 " + q,
            description: "" + NomeDoBot
          };
          const vO329 = {
            title: "[🔞] Plaquinha 05 com o nome " + q,
            rowId: prefix + "plaq5 " + q,
            description: "" + NomeDoBot
          };
          const vO330 = {
            title: "[🔞] Plaquinha 06 com o nome " + q,
            rowId: prefix + "plaq6 " + q,
            description: "" + NomeDoBot
          };
          const vO331 = {
            title: "[🔞] Plaquinha 07 com o nome " + q,
            rowId: prefix + "plaq7 " + q,
            description: "" + NomeDoBot
          };
          const vO332 = {
            title: "[🔞] Plaquinha 08 com o nome " + q,
            rowId: prefix + "plaq8 " + q,
            description: "" + NomeDoBot
          };
          const vO333 = {
            title: "[🔞] Plaquinha 09 com o nome " + q,
            rowId: prefix + "plaq9 " + q,
            description: "" + NomeDoBot
          };
          const vO334 = {
            title: "[🔞] Plaquinha 10 com o nome " + q,
            rowId: prefix + "plaq10 " + q,
            description: "" + NomeDoBot
          };
          const vO335 = {
            title: "[🔞] Plaquinha 11 com o nome " + q,
            rowId: prefix + "plaq11 " + q,
            description: "" + NomeDoBot
          };
          const vO336 = {
            title: "",
            rows: [vO325, vO326, vO327, vO328, vO329, vO330, vO331, vO332, vO333, vO334, vO335]
          };
          vA44 = [vO336];
          const vO337 = {
            text: "Selecione a plaquinha desejada!",
            footer: "© _Copyright by Nezuko-MD_",
            title: "[🔞] 𝐏𝐋𝐀𝐐𝐔𝐈𝐍𝐇𝐀𝐒-𝐍𝐒𝐅𝐖 [🔞]️",
            buttonText: "🔍 𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑: 🔍",
            sections: vA44
          };
          const vVO337 = vO337;
          const vO338 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO337, vO338);
        }
        break;
      case "plaq":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(prefix + "plaq e digite o seu nome");
        }
        teks = body.slice(6);
        if (teks.length > 15) {
          return reply("O texto é longo, até 15 caracteres");
        }
        reply(enviar.espere);
        buffer = await getBuffer("https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=" + teks + "&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21");
        const vO339 = {
          image: buffer,
          sendEphemeral: true,
          thumbnail: null,
          caption: " *Plaquinha feita ✓* "
        };
        const vO340 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, vO339, vO340);
        break;
      case "plaq2":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(prefix + "plaq2 e digite o seu nome");
        }
        teks = body.slice(7);
        if (teks.length > 15) {
          return reply("O texto é longo, até 15 caracteres");
        }
        reply(enviar.espere);
        buffer = await getBuffer("https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=" + teks);
        const vO341 = {
          image: buffer,
          sendEphemeral: true,
          thumbnail: null,
          caption: " *Plaquinha feita ✓* "
        };
        const vO342 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, vO341, vO342);
        break;
      case "plaq3":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(prefix + "plaq3 e digite o seu nome");
        }
        teks = body.slice(7);
        if (teks.length > 15) {
          return reply("O texto é longo, até 15 caracteres");
        }
        reply(enviar.espere);
        buffer = await getBuffer("https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=" + teks + "&text.0.outline.blur=63");
        const vO343 = {
          image: buffer,
          sendEphemeral: true,
          thumbnail: null,
          caption: " *Plaquinha feita ✓* "
        };
        const vO344 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, vO343, vO344);
        break;
      case "plaq4":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(prefix + "plaq4 e digite o seu nome");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply(enviar.espere);
        buffer = await getBuffer("https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=" + teks + "&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter");
        plaq = " *Plaquinha feita ✓* ";
        const vO345 = {
          image: buffer,
          sendEphemeral: true,
          thumbnail: null,
          caption: " *Plaquinha feita ✓* "
        };
        const vO346 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, vO345, vO346);
        break;
      case "plaq5":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(prefix + "plaq5 e digite o seu nome");
        }
        teks = body.slice(7);
        if (teks.length > 15) {
          return reply("O texto é longo, até 15 caracteres");
        }
        reply(enviar.espere);
        buffer = await getBuffer("https://umethroo.sirv.com/peito1.jpg?text.0.text=" + teks + "&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700");
        const vO347 = {
          image: buffer,
          sendEphemeral: true,
          thumbnail: null,
          caption: " *Plaquinha feita ✓* "
        };
        const vO348 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, vO347, vO348);
        break;
      case "plaq6":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(prefix + "plaq6 e digite o seu nome");
        }
        teks = body.slice(7);
        if (teks.length > 15) {
          return reply("O texto é longo, até 15 caracteres");
        }
        reply(mess.wait);
        buffer = await getBuffer("https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=" + teks + "&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic");
        const vO349 = {
          image: buffer
        };
        const vO350 = {
          quoted: vVO27
        };
        await sock.sendMessage(sender, vO349, vO350);
        break;
      case "plaq7":
        reply("<❗> Enviando no seu pv, aguarde.");
        teks1 = body.slice(5);
        if (teks1.length < 1) {
          return reply("Use no mínimo 1 Letras!");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply(mess.wait);
        buffer = await getBuffer("https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=" + teks + "&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter");
        plaq = " *Plaquinha feita ✓* ";
        const vO351 = {
          image: buffer,
          txt: plaq,
          quoted: vVO27
        };
        await sock.sendMessage(sender, vO351);
        break;
      case "plaq8":
        reply("<❗> Enviando no seu pv, aguarde.");
        teks1 = body.slice(5);
        if (teks1.length < 1) {
          return reply("Use no mínimo 1 Letras!");
        }
        blk = body.slice(6);
        teks = body.slice(7);
        if (teks.length > 15) {
          return reply("O texto é longo, até 15 caracteres");
        }
        reply(mess.wait);
        buffer = await getBuffer("https://blackzin.sirv.com/Plaq18/20220212_213215.jpg?text.0.text=" + blk + "&text.0.position.gravity=northwest&text.0.position.x=43%25&text.0.position.y=18%25&text.0.size=15&text.0.color=000000&text.0.opacity=57&text.0.font.family=Vollkorn&text.0.font.weight=800&text.0.font.style=italic&text.0.background.color=000000&text.0.outline.blur=32&text.0.outline.opacity=46&text.1.text=Daniel Domina bb%3F&text.1.position.gravity=center&text.1.position.x=10%25&text.1.position.y=30%25&text.1.size=20&text.1.color=000000&text.1.opacity=59&text.1.font.family=Playball&text.1.font.weight=700&text.1.outline.opacity=0\" width=\"718\" height=\"1009\" alt=\"\" />");
        const vO352 = {
          image: buffer,
          quoted: vVO27
        };
        await sock.sendMessage(sender, vO352);
        break;
      case "plaq9":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(mess.blank);
        }
        teks = body.slice(6);
        if (teks.length > 25) {
          return reply("O texto é longo, até 25 caracteres");
        }
        reply(mess.wait);
        buffer = await getBuffer("https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=" + teks + "&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15");
        const vO353 = {
          image: buffer,
          quoted: vVO27
        };
        await sock.sendMessage(sender, vO353);
        break;
      case "plaq10":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(mess.blank);
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply(mess.wait);
        buffer = await getBuffer("https://rsymenti.sirv.com/images%20(10).jpeg?text.0.text=" + teks + "&text.0.position.gravity=south&text.0.position.x=4%25&text.0.position.y=-32%25&text.0.align=left&text.0.size=34&text.0.color=000000&text.0.opacity=78&text.0.background.opacity=78&text.0.outline.blur=72&text.0.outline.opacity=74");
        const vO354 = {
          image: buffer,
          quoted: vVO27
        };
        await sock.sendMessage(sender, vO354);
        break;
      case "plaq11":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(mess.blank);
        }
        teks = body.slice(7);
        if (teks.length > 20) {
          return reply("O TEXTO E MUITO GRANDE NO MAXIMO 20 LETRAS");
        }
        reply(mess.wait);
        buffer = await getBuffer("https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=" + teks + "&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58");
        const vO355 = {
          image: buffer,
          quoted: vVO27
        };
        await sock.sendMessage(sender, vO355);
        break;
      case "plaq4off":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (args.length < 1) {
          return reply(prefix + "plaq4 e digite o seu nome");
        }
        teks = body.slice(7);
        if (teks.length > 15) {
          return reply("O texto é longo, até 15 caracteres");
        }
        reply(enviar.espere);
        buffer = await getBuffer("https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=" + teks);
        const vO356 = {
          image: buffer,
          sendEphemeral: true,
          thumbnail: null,
          caption: " *Plaquinha feita ✓* "
        };
        const vO357 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO356, vO357);
        break;
      case "shadow":
      case "angelwing":
      case "efeitoneon":
      case "cemiterio":
      case "metalgold":
      case "narutologo":
      case "fire":
      case "smoke":
      case "papel":
      case "lovemsg":
      case "lovemsg2":
      case "lovemsg3":
      case "coffecup":
      case "coffecup2":
      case "cup":
      case "florwooden":
      case "madeira":
      case "neon2":
      case "lobometal":
      case "harryp":
      case "txtborboleta":
      case "blackpink":
      case "girlmascote":
      case "logogame":
      case "equipemascote":
      case "fpsmascote":
      case "hackneon":
      case "ffavatar":
      case "mascotegame":
      case "wingeffect":
      case "angelglx":
      case "gizquadro":
      case "txtquadrinhos":
        try {
          textin = args.join(" ");
          if (!textin) {
            return reply("Cade o texto?");
          }
          reply(enviar.espere);
          v427 = await fetchJson("https://nezsab-apis.xyz/api/" + command + "?texto=" + textin + "&apikey=" + keyapi);
          blabla = await getBuffer(v427.resultado.imageUrl);
          const vO358 = {
            image: blabla
          };
          const vO359 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO358, vO359).catch(p219 => {
            reply("ERROR!!");
          });
        } catch (e6) {
          if (String(e6).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "gameplay":
      case "ffbanner":
      case "mascoteavatar":
        try {
          textin = args.join(" ");
          v273 = textin.split("/")[0];
          v274 = textin.split("/")[1];
          if (!textin) {
            return reply("Cade o texto?");
          }
          if (!textin.includes("/")) {
            return reply("Cade a / precisa dela para a separação..\nExemplo: " + (prefix + command) + " Game/Play");
          }
          reply(enviar.espere);
          v427 = await fetchJson("https://nezsab-apis.xyz/api/" + command + "?texto=" + v273 + "&texto2=" + v274 + "&apikey=" + keyapi);
          blabla = await getBuffer(v427.resultado.imageUrl);
          const vO360 = {
            image: blabla
          };
          const vO361 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO360, vO361).catch(p220 => {
            reply("ERROR!!");
          });
        } catch (e7) {
          if (String(e7).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "googlesg":
        try {
          textin = args.join(" ");
          v273 = textin.split("/")[0];
          v274 = textin.split("/")[1];
          txt3 = textin.split("/")[2];
          if (!textin) {
            return reply("Cade o texto?");
          }
          if (!textin.includes("/")) {
            return reply("Cade a / precisa dela para a separação..\nExemplo: " + (prefix + command) + " Game/Play/Sad");
          }
          reply(enviar.espere);
          v427 = await fetchJson("https://nezsab-apis.xyz/api/" + command + "?texto=" + v273 + "&texto2=" + v274 + "&texto3=" + txt3 + "&apikey=" + keyapi);
          blabla = await getBuffer(v427.resultado.imageUrl);
          const vO362 = {
            image: blabla
          };
          const vO363 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO362, vO363).catch(p221 => {
            reply("ERROR!!");
          });
        } catch (e8) {
          if (String(e8).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "metalfire":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/hot-metal-text-effect-843.html", "" + q).then(async p222 => {
          try {
            let v220 = await getBuffer(p222);
            const vO364 = {
              image: v220,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO365 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO364, vO365);
            console.log(p222);
          } catch (e9) {
            console.log(e9);
          }
        });
        break;
      case "thunder":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", "" + q).then(async p223 => {
          try {
            let v221 = await getBuffer(p223);
            const vO366 = {
              image: v221,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO367 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO366, vO367);
            console.log(p223);
          } catch (e10) {
            console.log(e10);
          }
        });
        break;
      case "neongreen":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/green-neon-text-effect-874.html", "" + q).then(async p224 => {
          try {
            let v222 = await getBuffer(p224);
            const vO368 = {
              image: v222,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO369 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO368, vO369);
            console.log(p224);
          } catch (e11) {
            console.log(e11);
          }
        });
        break;
      case "neontxt":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", "" + q).then(async p225 => {
          try {
            let v223 = await getBuffer(p225);
            const vO370 = {
              image: v223,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO371 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO370, vO371);
            console.log(p225);
          } catch (e12) {
            console.log(e12);
          }
        });
        break;
      case "rainbow":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", "" + q).then(async p226 => {
          try {
            let v224 = await getBuffer(p226);
            const vO372 = {
              image: v224,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO373 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO372, vO373);
            console.log(p226);
          } catch (e13) {
            console.log(e13);
          }
        });
        break;
      case "ice":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html", "" + q).then(async p227 => {
          try {
            let v225 = await getBuffer(p227);
            const vO374 = {
              image: v225,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO375 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO374, vO375);
            console.log(p227);
          } catch (e14) {
            console.log(e14);
          }
        });
        break;
      case "summer3d":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html", "" + q).then(async p228 => {
          try {
            let v226 = await getBuffer(p228);
            const vO376 = {
              image: v226,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO377 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO376, vO377);
            console.log(p228);
          } catch (e15) {
            console.log(e15);
          }
        });
        break;
      case "blackp1":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", "" + q).then(async p229 => {
          try {
            let v227 = await getBuffer(p229);
            const vO378 = {
              image: v227,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO379 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO378, vO379);
            console.log(p229);
          } catch (e16) {
            console.log(e16);
          }
        });
        break;
      case "blackp2":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-blackpink-logo-decorated-with-roses-online-free-1080.html", "" + q).then(async p230 => {
          try {
            let v228 = await getBuffer(p230);
            const vO380 = {
              image: v228,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO381 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO380, vO381);
            console.log(p230);
          } catch (e17) {
            console.log(e17);
          }
        });
        break;
      case "summerlg":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", "" + q).then(async p231 => {
          try {
            let v229 = await getBuffer(p231);
            const vO382 = {
              image: v229,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO383 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO382, vO383);
            console.log(p231);
          } catch (e18) {
            console.log(e18);
          }
        });
        break;
      case "bussineslg":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/3d-business-sign-text-effect-1078.html", "" + q).then(async p232 => {
          try {
            let v230 = await getBuffer(p232);
            const vO384 = {
              image: v230,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO385 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO384, vO385);
            console.log(p232);
          } catch (e19) {
            console.log(e19);
          }
        });
        break;
      case "typography":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-artistic-typography-online-1086.html", "" + q).then(async p233 => {
          try {
            let v231 = await getBuffer(p233);
            const vO386 = {
              image: v231,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO387 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO386, vO387);
            console.log(p233);
          } catch (e20) {
            console.log(e20);
          }
        });
        break;
      case "gradient":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html", "" + q).then(async p234 => {
          try {
            let v232 = await getBuffer(p234);
            const vO388 = {
              image: v232,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO389 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO388, vO389);
            console.log(p234);
          } catch (e21) {
            console.log(e21);
          }
        });
        break;
      case "lapis":
      case "lápis":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", "" + q).then(async p235 => {
          try {
            let v233 = await getBuffer(p235);
            const vO390 = {
              image: v233,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO391 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO390, vO391);
            console.log(p235);
          } catch (e22) {
            console.log(e22);
          }
        });
        break;
      case "3dstone":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", "" + q).then(async p236 => {
          try {
            let v234 = await getBuffer(p236);
            const vO392 = {
              image: v234,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO393 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO392, vO393);
            console.log(p236);
          } catch (e23) {
            console.log(e23);
          }
        });
        break;
      case "fiction":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", "" + q).then(async p237 => {
          try {
            let v235 = await getBuffer(p237);
            const vO394 = {
              image: v235,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO395 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO394, vO395);
            console.log(p237);
          } catch (e24) {
            console.log(e24);
          }
        });
        break;
      case "anotar":
        if (!q) {
          return enviar("Exemplo: " + (prefix + command) + " Nota 1- Sexo ofc");
        }
        const v236 = args.join(" ");
        const vO396 = {
          sender: sender,
          Nota: v236
        };
        const vVO396 = vO396;
        notas.push(vVO396);
        fs.writeFileSync("./lib/notas.json", JSON.stringify(notas));
        reply(v236 + " ADICIONADA A LISTA DE NOTAS");
        break;
      case "totalnotas":
        minhapika = "\nTotal De Notas: " + notas.length + "\n";
        for (let v237 of notas) {
          minhapika += "\n" + v237.Nota + "\n";
        }
        reply(minhapika);
        break;
      case "wall":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/break-wall-text-effect-871.html", "" + q).then(async p238 => {
          try {
            let v238 = await getBuffer(p238);
            const vO397 = {
              image: v238,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO398 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO397, vO398);
            console.log(p238);
          } catch (e25) {
            console.log(e25);
          }
        });
        break;
      case "blood":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", "" + q).then(async p239 => {
          try {
            let v239 = await getBuffer(p239);
            const vO399 = {
              image: v239,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO400 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO399, vO400);
            console.log(p239);
          } catch (e26) {
            console.log(e26);
          }
        });
        break;
      case "joker":
      case "jokerlogo":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html", "" + q).then(async p240 => {
          try {
            let v240 = await getBuffer(p240);
            const vO401 = {
              image: v240,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO402 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO401, vO402);
            console.log(p240);
          } catch (e27) {
            console.log(e27);
          }
        });
        break;
      case "demon":
      case "demongreen":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", "" + q).then(async p241 => {
          try {
            let v241 = await getBuffer(p241);
            const vO403 = {
              image: v241,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO404 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO403, vO404);
            console.log(p241);
          } catch (e28) {
            console.log(e28);
          }
        });
        break;
      case "natal":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", "" + q).then(async p242 => {
          try {
            let v242 = await getBuffer(p242);
            const vO405 = {
              image: v242,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO406 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO405, vO406);
            console.log(p242);
          } catch (e29) {
            console.log(e29);
          }
        });
        break;
      case "asfalto":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/road-warning-text-effect-878.html", "" + q).then(async p243 => {
          try {
            let v243 = await getBuffer(p243);
            const vO407 = {
              quoted: mek
            };
            await sock.sendMessage(from, v243, image, vO407);
            console.log(p243);
          } catch (e30) {
            console.log(e30);
          }
        });
        break;
      case "neon3d":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", "" + q).then(async p244 => {
          try {
            let v244 = await getBuffer(p244);
            const vO408 = {
              image: v244,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO409 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO408, vO409);
            console.log(p244);
          } catch (e31) {
            console.log(e31);
          }
        });
        break;
      case "neon":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", "" + q).then(async p245 => {
          try {
            let v245 = await getBuffer(p245);
            const vO410 = {
              image: v245,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO411 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO410, vO411);
            console.log(p245);
          } catch (e32) {
            console.log(e32);
          }
        });
        break;
      case "ossos":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/skeleton-text-effect-online-929.html", "" + q).then(async p246 => {
          try {
            let v246 = await getBuffer(p246);
            const vO412 = {
              image: v246,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO413 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO412, vO413);
            console.log(p246);
          } catch (e33) {
            console.log(e33);
          }
        });
        break;
      case "jeans":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/denim-text-effect-online-919.html", "" + q).then(async p247 => {
          try {
            let v247 = await getBuffer(p247);
            const vO414 = {
              image: v247,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO415 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO414, vO415);
            console.log(p247);
          } catch (e34) {
            console.log(e34);
          }
        });
        break;
      case "metalblue":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html", "" + q).then(async p248 => {
          try {
            let v248 = await getBuffer(p248);
            const vO416 = {
              image: v248,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO417 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO416, vO417);
            console.log(p248);
          } catch (e35) {
            console.log(e35);
          }
        });
        break;
      case "carbon":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/glossy-carbon-text-effect-965.html", "" + q).then(async p249 => {
          try {
            let v249 = await getBuffer(p249);
            const vO418 = {
              image: v249,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO419 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO418, vO419);
            console.log(p249);
          } catch (e36) {
            console.log(e36);
          }
        });
        break;
      case "pink":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/holographic-3d-text-effect-975.html", "" + q).then(async p250 => {
          try {
            let v250 = await getBuffer(p250);
            const vO420 = {
              image: v250,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO421 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO420, vO421);
            console.log(p250);
          } catch (e37) {
            console.log(e37);
          }
        });
        break;
      case "style":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/1917-style-text-effect-online-980.html", "" + q).then(async p251 => {
          try {
            let v251 = await getBuffer(p251);
            const vO422 = {
              image: v251,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO423 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO422, vO423);
            console.log(p251);
          } catch (e38) {
            console.log(e38);
          }
        });
        break;
      case "vidro":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/dropwater-text-effect-872.html", "" + q).then(async p252 => {
          try {
            let v252 = await getBuffer(p252);
            const vO424 = {
              image: v252,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO425 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO424, vO425);
            console.log(p252);
          } catch (e39) {
            console.log(e39);
          }
        });
        break;
      case "areia":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", "" + q).then(async p253 => {
          try {
            let v253 = await getBuffer(p253);
            const vO426 = {
              image: v253,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO427 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO426, vO427);
            console.log(p253);
          } catch (e40) {
            console.log(e40);
          }
        });
        break;
      case "neve":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/xmas-cards-3d-online-942.html", "" + q).then(async p254 => {
          try {
            let v254 = await getBuffer(p254);
            const vO428 = {
              image: v254,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO429 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO428, vO429);
            console.log(p254);
          } catch (e41) {
            console.log(e41);
          }
        });
        break;
      case "neon3":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", "" + q).then(async p255 => {
          try {
            let v255 = await getBuffer(p255);
            const vO430 = {
              image: v255,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO431 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO430, vO431);
            console.log(p255);
          } catch (e42) {
            console.log(e42);
          }
        });
        break;
      case "nuvem":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", "" + q).then(async p256 => {
          try {
            let v256 = await getBuffer(p256);
            const vO432 = {
              image: v256,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO433 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO432, vO433);
            console.log(p256);
          } catch (e43) {
            console.log(e43);
          }
        });
        break;
      case "horror":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", "" + q).then(async p257 => {
          try {
            let v257 = await getBuffer(p257);
            const vO434 = {
              image: v257,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO435 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO434, vO435);
            console.log(p257);
          } catch (e44) {
            console.log(e44);
          }
        });
        break;
      case "matrix":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", "" + q).then(async p258 => {
          try {
            let v258 = await getBuffer(p258);
            const vO436 = {
              image: v258,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO437 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO436, vO437);
            console.log(p258);
          } catch (e45) {
            console.log(e45);
          }
        });
        break;
      case "transformer":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", "" + q).then(async p259 => {
          try {
            let v259 = await getBuffer(p259);
            const vO438 = {
              image: v259,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO439 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO438, vO439);
            console.log(p259);
          } catch (e46) {
            console.log(e46);
          }
        });
        break;
      case "berry":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", "" + q).then(async p260 => {
          try {
            let v260 = await getBuffer(p260);
            const vO440 = {
              image: v260,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO441 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO440, vO441);
            console.log(p260);
          } catch (e47) {
            console.log(e47);
          }
        });
        break;
      case "luxury":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", "" + q).then(async p261 => {
          try {
            let v261 = await getBuffer(p261);
            const vO442 = {
              image: v261,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO443 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO442, vO443);
            console.log(p261);
          } catch (e48) {
            console.log(e48);
          }
        });
        break;
      case "colaq":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", "" + q).then(async p262 => {
          try {
            let v262 = await getBuffer(p262);
            const vO444 = {
              image: v262,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO445 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO444, vO445);
            console.log(p262);
          } catch (e49) {
            console.log(e49);
          }
        });
        break;
      case "batman":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", "" + q).then(async p263 => {
          try {
            let v263 = await getBuffer(p263);
            const vO446 = {
              image: v263,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO447 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO446, vO447);
            console.log(p263);
          } catch (e50) {
            console.log(e50);
          }
        });
        break;
      case "neonlight":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html", "" + q).then(async p264 => {
          try {
            let v264 = await getBuffer(p264);
            const vO448 = {
              image: v264,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO449 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO448, vO449);
            console.log(p264);
          } catch (e51) {
            console.log(e51);
          }
        });
        break;
      case "glowing":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", "" + q).then(async p265 => {
          try {
            let v265 = await getBuffer(p265);
            const vO450 = {
              image: v265,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO451 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO450, vO451);
            console.log(p265);
          } catch (e52) {
            console.log(e52);
          }
        });
        break;
      case "3dchristmas":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", "" + q).then(async p266 => {
          try {
            let v266 = await getBuffer(p266);
            const vO452 = {
              image: v266,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO453 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO452, vO453);
            console.log(p266);
          } catch (e53) {
            console.log(e53);
          }
        });
        break;
      case "neondevil":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", "" + q).then(async p267 => {
          try {
            let v267 = await getBuffer(p267);
            const vO454 = {
              image: v267,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO455 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO454, vO455);
            console.log(p267);
          } catch (e54) {
            console.log(e54);
          }
        });
        break;
      case "thunderv2":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", "" + q).then(async p268 => {
          try {
            let v268 = await getBuffer(p268);
            const vO456 = {
              image: v268,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO457 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO456, vO457);
            console.log(p268);
          } catch (e55) {
            console.log(e55);
          }
        });
        break;
      case "demonfire":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", "" + q).then(async p269 => {
          try {
            let v269 = await getBuffer(p269);
            const vO458 = {
              image: v269,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO459 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO458, vO459);
            console.log(p269);
          } catch (e56) {
            console.log(e56);
          }
        });
        break;
      case "neondevil":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", "" + q).then(async p270 => {
          try {
            let v270 = await getBuffer(p270);
            const vO460 = {
              image: v270,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO461 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO460, vO461);
            console.log(p270);
          } catch (e57) {
            console.log(e57);
          }
        });
        break;
      case "cattxt":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", "" + q).then(async p271 => {
          try {
            let v271 = await getBuffer(p271);
            const vO462 = {
              image: v271,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO463 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO462, vO463);
            console.log(p271);
          } catch (e58) {
            console.log(e58);
          }
        });
        break;
      case "glitch2":
        var v272 = body.slice(8);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", ["" + v273, "" + v274]).then(async p272 => {
          try {
            let v275 = await getBuffer(p272);
            const vO464 = {
              image: v275,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO465 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO464, vO465);
            console.log(p272);
          } catch (e59) {
            console.log(e59);
          }
        });
        break;
      case "grafity":
        var v272 = body.slice(8);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", ["" + v273, "" + v274]).then(async p273 => {
          try {
            let v276 = await getBuffer(p273);
            const vO466 = {
              image: v276,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO467 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO466, vO467);
            console.log(p273);
          } catch (e60) {
            console.log(e60);
          }
        });
        break;
      case "steel":
        var v272 = body.slice(7);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/3d-steel-text-effect-877.html", ["" + v273, "" + v274]).then(async p274 => {
          try {
            let v277 = await getBuffer(p274);
            const vO468 = {
              image: v277,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO469 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO468, vO469);
            console.log(p274);
          } catch (e61) {
            console.log(e61);
          }
        });
        break;
      case "marvel":
        var v272 = body.slice(8);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", ["" + v273, "" + v274]).then(async p275 => {
          try {
            let v278 = await getBuffer(p275);
            const vO470 = {
              image: v278,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO471 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO470, vO471);
            console.log(p275);
          } catch (e62) {
            console.log(e62);
          }
        });
        break;
      case "escudo":
      case "america":
        var v272 = body.slice(8);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", ["" + v273, "" + v274]).then(async p276 => {
          try {
            let v279 = await getBuffer(p276);
            const vO472 = {
              image: v279,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO473 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO472, vO473);
            console.log(p276);
          } catch (e63) {
            console.log(e63);
          }
        });
        break;
      case "stone":
        var v272 = body.slice(7);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", ["" + v273, "" + v274]).then(async p277 => {
          try {
            let v280 = await getBuffer(p277);
            const vO474 = {
              image: v280,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO475 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO474, vO475);
            console.log(p277);
          } catch (e64) {
            console.log(e64);
          }
        });
        break;
      case "gameover":
        var v272 = body.slice(9);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", ["" + v273, "" + v274]).then(async p278 => {
          try {
            let v281 = await getBuffer(p278);
            const vO476 = {
              image: v281,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO477 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO476, vO477);
            console.log(p278);
          } catch (e65) {
            console.log(e65);
          }
        });
        break;
      case "pornhub":
        var v272 = body.slice(8);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", ["" + v273, "" + v274]).then(async p279 => {
          try {
            let v282 = await getBuffer(p279);
            const vO478 = {
              image: v282,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO479 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO478, vO479);
            console.log(p279);
          } catch (e66) {
            console.log(e66);
          }
        });
        break;
      case "thorlogo":
        var v272 = body.slice(9);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", ["" + v273, "" + v274]).then(async p280 => {
          try {
            let v283 = await getBuffer(p280);
            const vO480 = {
              image: v283,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO481 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO480, vO481);
            console.log(p280);
          } catch (e67) {
            console.log(e67);
          }
        });
        break;
      case "catwindows":
        var v272 = body.slice(8);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", ["" + v273, "" + v274]).then(async p281 => {
          try {
            let v284 = await getBuffer(p281);
            const vO482 = {
              image: v284,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO483 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO482, vO483);
            console.log(p281);
          } catch (e68) {
            console.log(e68);
          }
        });
        break;
      case "ninjalogo":
        var v272 = body.slice(11);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html", ["" + v273, "" + v274]).then(async p282 => {
          try {
            let v285 = await getBuffer(p282);
            const vO484 = {
              image: v285,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO485 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO484, vO485);
            console.log(p282);
          } catch (e69) {
            console.log(e69);
          }
        });
        break;
      case "whitebear":
        var v272 = body.slice(10);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", ["" + v273, "" + v274]).then(async p283 => {
          try {
            let v286 = await getBuffer(p283);
            const vO486 = {
              image: v286,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO487 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO486, vO487);
            console.log(p283);
          } catch (e70) {
            console.log(e70);
          }
        });
        break;
      case "wolfgalaxy":
        var v272 = body.slice(11);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", ["" + v273, "" + v274]).then(async p284 => {
          try {
            let v287 = await getBuffer(p284);
            const vO488 = {
              image: v287,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO489 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO488, vO489);
            console.log(p284);
          } catch (e71) {
            console.log(e71);
          }
        });
        break;
      case "space":
        var v272 = body.slice(7);
        var v273 = v272.split("/")[0] || "Indefinido";
        var v274 = v272.split("/")[1] || "Indefinido";
        if (!v273) {
          return reply("Cade o primeiro texto?");
        }
        if (!v274) {
          return reply("Cade o segundo texto?");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", ["" + v273, "" + v274]).then(async p285 => {
          try {
            let v288 = await getBuffer(p285);
            const vO490 = {
              image: v288,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO491 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO490, vO491);
            console.log(p285);
          } catch (e72) {
            console.log(e72);
          }
        });
        break;
      case "halloween":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html", "" + q).then(async p286 => {
          try {
            let v289 = await getBuffer(p286);
            const vO492 = {
              image: v289,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO493 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO492, vO493);
            console.log(p286);
          } catch (e73) {
            console.log(e73);
          }
        });
        break;
      case "lava":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/lava-text-effect-online-914.html", "" + q, ["Developer"], ["Phaticusthiccy"]).then(async p287 => {
          try {
            let v290 = await getBuffer(p287);
            const vO494 = {
              image: v290,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO495 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO494, vO495);
            console.log(p287);
          } catch (e74) {
            console.log(e74);
          }
        });
        break;
      case "toxic":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/toxic-text-effect-online-901.html", "" + q, ["Developer"], ["Phaticusthiccy"]).then(async p288 => {
          try {
            let v291 = await getBuffer(p288);
            const vO496 = {
              image: v291,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO497 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO496, vO497);
            console.log(p288);
          } catch (e75) {
            console.log(e75);
          }
        });
        break;
      case "glowlogo":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", "" + q).then(async p289 => {
          try {
            let v292 = await getBuffer(p289);
            const vO498 = {
              image: v292,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO499 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO498, vO499);
            console.log(p289);
          } catch (e76) {
            console.log(e76);
          }
        });
        break;
      case "laranja":
        if (!q) {
          return reply("Digite o texto que vai aparecer na imagem | Exemplo: " + (prefix + command) + " sad");
        }
        reply(enviar.espere);
        thiccysapi.textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", "" + q).then(async p290 => {
          try {
            let v293 = await getBuffer(p290);
            const vO500 = {
              image: v293,
              caption: "🎨「 𝐋𝐨𝐠𝐨 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨 - 𝐌𝐃 」✍🏻"
            };
            const vO501 = {
              quoted: vVO27
            };
            await sock.sendMessage(from, vO500, vO501);
            console.log(p290);
          } catch (e77) {
            console.log(e77);
          }
        });
        break;
      case "ebase":
        {
          if (!q) {
            return reply("Exemplo: " + (prefix + command) + " texto");
          }
          let v294 = await fetchJson("https://luffy-md-api.herokuapp.com/api/tools/ebase64?text=" + q + "&ApiKey=YoshiOfcc");
          teks = "\nPedido: " + q + "\n\nResultado: " + v294.result;
          reply(teks);
        }
        break;
      case "debase":
        {
          if (!q) {
            return reply("Exemplo: " + (prefix + command) + " texto");
          }
          let v295 = await fetchJson("https://luffy-md-api.herokuapp.com/api/tools/debase64?text=" + q + "&ApiKey=YoshiOfcc");
          teks = "\nPedido: " + q + "\n\nResultado: " + v295.result;
          reply(teks);
        }
        break;
      case "signo":
        if (!q) {
          return reply("Cadê o signo o qual deseja pesquisar?");
        }
        axios.get("https://nezsab-apis.xyz/api/horoscopo?signo=" + q + "&apikey=" + keyapi).then(p291 => {
          try {
            d = p291.data.pesquisa.resultado;
            v272 = "▢ ⌁ Aqui está algumas informações sobre o signo de: *" + q + "*\n\n";
            no = 0;
            for (let v296 of d) {
              no += 1;
              v272 += "" + v296.previsao;
            }
            const vO502 = {
              url: "" + logo
            };
            const vO503 = {
              image: vO502,
              caption: v272
            };
            sock.sendMessage(from, vO503);
          } catch (e78) {
            reply("<❌️> Erro detectado. Tente novamente!");
          }
        }).catch(p292 => {
          reply("<❌️> Ops, erro na api ao puxar os dados.");
          console.log(p292);
        });
        break;
      case "edit1":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_api.jpg?text.0.text=" + teks + "&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17");
        const vO504 = {
          image: venomk
        };
        const vO505 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO504, vO505);
        break;
      case "edit2":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=" + teks + "&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6");
        const vO506 = {
          image: venomk
        };
        const vO507 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO506, vO507);
        break;
      case "edit3":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3");
        const vO508 = {
          image: venomk
        };
        const vO509 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO508, vO509);
        break;
      case "edit4":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis.jpg?text.0.text=" + teks + "&text.0.position.gravity=center&text.0.position.x=11%25&text.0.position.y=22%25&text.0.size=20&text.0.color=241b1b&text.0.opacity=33&text.0.font.family=Rock%20Salt&text.0.font.style=italic&text.0.background.opacity=49");
        const vO510 = {
          image: venomk
        };
        const vO511 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO510, vO511);
        break;
      case "edit5":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=" + teks + "&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18");
        const vO512 = {
          image: venomk
        };
        const vO513 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO512, vO513);
        break;
      case "edit6":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61");
        const vO514 = {
          image: venomk
        };
        const vO515 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO514, vO515);
        break;
      case "edit7":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20");
        const vO516 = {
          image: venomk
        };
        const vO517 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO516, vO517);
        break;
      case "edit8":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis.jpg?w=640&h=640&text.0.text=Venom&text.0.position.gravity=north&text.0.position.y=53%25&text.0.size=96&text.0.color=ff0000&text.0.opacity=46&text.0.font.family=Shadows%20Into%20Light&text.0.font.style=italic&text.0.background.opacity=70&text.0.outline.width=9&text.0.outline.blur=52");
        const vO518 = {
          image: venomk
        };
        const vO519 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO518, vO519);
        break;
      case "edit9":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9");
        const vO520 = {
          image: venomk
        };
        const vO521 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO520, vO521);
        break;
      case "edit10":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21");
        const vO522 = {
          image: venomk
        };
        const vO523 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO522, vO523);
        break;
      case "edit11":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis11.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=60%25&text.0.size=64&text.0.color=0071ff&text.0.font.family=Old%20Standard%20TT&text.0.font.style=italic&text.0.background.opacity=55&text.0.outline.color=00d0ff&text.0.outline.width=19&text.0.outline.blur=30");
        const vO524 = {
          image: venomk
        };
        const vO525 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO524, vO525);
        break;
      case "edit12":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6");
        const vO526 = {
          image: venomk
        };
        const vO527 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO526, vO527);
        break;
      case "edit13":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21");
        const vO528 = {
          image: venomk
        };
        const vO529 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO528, vO529);
        break;
      case "edit14":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16");
        const vO530 = {
          image: venomk
        };
        const vO531 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO530, vO531);
        break;
      case "edit15":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33");
        const vO532 = {
          image: venomk
        };
        const vO533 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO532, vO533);
        break;
      case "edit16":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("*Estou fazendo, se der erro tente novamente ✓*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66");
        const vO534 = {
          image: venomk
        };
        const vO535 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO534, vO535);
        break;
      case "narutoedits":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/edit-videos/editsnaruto.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺✰𝑵𝑨𝑹𝑼𝑻𝑶፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: " + pushname + "\nDeseja mais? Clica em próxima-edit"];
          var v297 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          tst = await getBuffer(randKey.result);
          const vO536 = {
            buttonId: prefix + "narutoedits",
            buttonText: {
              displayText: "☔𝐏𝐑𝐎́𝐗𝐈𝐌𝐀-𝐄𝐃𝐈𝐓☔"
            },
            type: 1
          };
          let vA39 = [vO536];
          let v298 = "" + v297;
          const vO537 = {
            video: tst,
            caption: "" + v298,
            footer: "By: " + NomeDoBot,
            buttons: vA39,
            headerType: 4
          };
          buttonMessage = vO537;
          sock.sendMessage(m.chat, buttonMessage, {
            quoted: m
          });
        }
        break;
      case "jujutsuedits":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/edit-videos/editsjujutsu.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺 𝐉𝐔𝐉𝐔𝐓𝐒𝐔፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: " + pushname + "\nDeseja mais? Clica em próxima-edit"];
          var v297 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          tst = await getBuffer(randKey.result);
          const vO538 = {
            buttonId: prefix + "jujutsuedits",
            buttonText: {
              displayText: "☔𝐏𝐑𝐎́𝐗𝐈𝐌𝐀-𝐄𝐃𝐈𝐓☔"
            },
            type: 1
          };
          let vA40 = [vO538];
          let v299 = "" + v297;
          const vO539 = {
            video: tst,
            caption: "" + v299,
            footer: "By: " + NomeDoBot,
            buttons: vA40,
            headerType: 4
          };
          buttonMessage = vO539;
          sock.sendMessage(m.chat, buttonMessage, {
            quoted: m
          });
        }
        break;
      case "itachiedits":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/edit-videos/edits.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["₊˚.ೃೀ𝑬𝑫𝑰𝑻𝑺፝֯֟⋆⁺˖⸙̭❛◌*̥₊\n👤 𝘚𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘥𝘰 𝘱𝘰𝘳: " + pushname + "\nDeseja mais? Clica em próxima-edit"];
          var v297 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          tst = await getBuffer(randKey.result);
          const vO540 = {
            buttonId: prefix + "itachiedits",
            buttonText: {
              displayText: "☔𝐏𝐑𝐎́𝐗𝐈𝐌𝐀-𝐄𝐃𝐈𝐓☔"
            },
            type: 1
          };
          let vA41 = [vO540];
          let v300 = "" + v297;
          const vO541 = {
            video: tst,
            caption: "" + v300,
            footer: "By: " + NomeDoBot,
            buttons: vA41,
            headerType: 4
          };
          buttonMessage = vO541;
          sock.sendMessage(m.chat, buttonMessage, {
            quoted: m
          });
        }
        break;
      case "danielfulll":
        reply("" + (isGroup ? "Estou enviando no seu privado." : "Aqui está o contato."));
        await delay(100);
        const vO542 = {
          buttonId: prefix + "criador",
          buttonText: {
            displayText: "Daniel Drk"
          },
          type: 1
        };
        const vO543 = {
          buttonId: prefix + "Redes",
          buttonText: {
            displayText: "Redes Sociais"
          },
          type: 1
        };
        const vO544 = {
          text: "*A baixo O Contato Do meu Criador:*",
          footer: "" + NomeDoBot,
          buttons: [vO542, vO543]
        };
        const vO545 = {
          quoted: vO28
        };
        sock.sendMessage(sender, vO544, vO545);
        break;
      case "redes":
        reply("" + (isGroup ? "Estou enviando no seu privado." : "Aqui está."));
        await delay(100);
        var v301 = "\n\n*Olá " + pushname + "!*\n\n*✨ Siga Nosso Perfil Nas Redes Sociais ✨*\n\n───────「令」───────\n*🪀️ Grupo ofc:* https://chat.whatsapp.com/DTsrSH5CVF66Xvn9Ow61Yn\n\n*📸 Instagram:* https://instagram.com/daniell_dn1\n───────「令」───────";
        const vO546 = {
          url: logo
        };
        const vO547 = {
          buttonId: prefix + "danielfulll",
          buttonText: {
            displayText: "🐉 Meu Criador"
          },
          type: 1
        };
        const vO548 = {
          image: vO546,
          caption: v301,
          footer: "",
          buttons: [vO547]
        };
        const vO549 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, vO548, vO549);
        break;
      case "criador":
      case "desenvolvedor":
        {
          let vLSBEGINVCARDVERSION30N = "BEGIN:VCARD\nVERSION:3.0\nN:;Daniel;;;\nFN:Daniel\nitem1.TEL;waid=5521964523665:+55 21 96922-6661\nitem1.X-ABLabel:Celular\nEND:VCARD";
          const vO550 = {
            vcard: vLSBEGINVCARDVERSION30N
          };
          const vO551 = {
            displayName: "Daniel",
            contacts: [vO550]
          };
          const vO552 = {
            contacts: vO551
          };
          const vO553 = {
            quoted: vVO27
          };
          await sock.sendMessage(m.chat, vO552, vO553);
          await reply("O contato dele caso você use imune https://wa.me/5521964523665");
        }
        break;
      case "criargp":
        if (!isPremium && !mek.key.fromMe) {
          return reply(enviar.msg.donosmt);
        }
        const v302 = await sock.groupCreate("Grupo Criado por Nezuko", [numerodn + "@s.whatsapp.net"]);
        console.log("created group with id: " + v302.gid);
        sock.sendMessage(v302.id, {
          text: "Prontinho, fiz oq vc pediu!"
        });
        break;
      case "igstalk":
      case "instagramstalk":
        {
          if (!v21) {
            return m.reply("*Kd o nome ? exemplo: " + (prefix + command) + " affz._.carlos*");
          }
          tod = await fetchJson("https://api.lolhuman.xyz/api/stalkig/" + v21 + "?apikey=" + lolkey);
          try {
            gaber = tod.result.photo_profile;
          } catch (e79) {
            gaber = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
          }
          teks = " *_STALKER_*\n▢ Nome de usuário:  " + tod.result.username + "\n▢ Nome: " + tod.result.fullname + "\n▢ Seguidores: " + tod.result.followers + "\n▢ Seguindo : " + tod.result.following + "\n▢ Quantidade de post: " + tod.result.posts + "\n▢ Bio: " + tod.result.bio;
          var v303 = await getBuffer(gaber);
          const vO554 = {
            image: v303,
            jpegThumbnail: v303,
            caption: "" + teks
          };
          const vO555 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vO554, vO555).catch(p293 => m.reply("*Nome não encontrado*"));
        }
        break;
      case "gitstalker":
        {
          if (!q) {
            return reply("Cadê o username do cara?");
          }
          reply("Buscando informações...");
          kika = await fetchJson("https://nezsab-apis.xyz/api/githubuser?usuario=" + q + "&apikey=" + keyapi);
          const vO556 = {
            displayText: "Obrigado " + NomeDoBot + " !"
          };
          const vO557 = {
            buttonId: "a",
            buttonText: vO556,
            type: 1
          };
          let vA42 = [vO557];
          let v304 = "⚠︎ 👤 [ 𝐆𝐈𝐓𝐇𝐔𝐁 𝐒𝐓𝐀𝐋𝐊𝐄𝐑 ] 👤 ⚠︎\n• Usuário pesquisado⧽ " + kika.resultado.username + "\n• Nome do Perfil⧽ " + kika.resultado.apelido + "\n• Biografia⧽ " + kika.resultado.bio + "\n• Link do perfil⧽ " + kika.resultado.user_url + "\n• Seguidores⧽ " + kika.resultado.seguidores + "\n• Seguindo⧽  " + kika.resultado.seguindo + "\n• Tipo de Conta⧽ " + kika.resultado.conta_tipo + "\n• Conta criada⧽ " + kika.resultado.conta_criada + "\n• Último Update⧽ " + kika.resultado.ultima_update;
          const vO558 = {
            url: "" + kika.resultado.foto_url
          };
          const vO559 = {
            image: vO558,
            caption: "" + v304,
            footer: "Solicitado por: " + pushname,
            buttons: vA42,
            headerType: 4
          };
          buttonMessagse = vO559;
          const vO560 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessagse, vO560);
        }
        break;
      case "igdl":
      case "instadw":
      case "igdl":
      case "instadw":
      case "instagram":
        if (!q) {
          return reply("Cadê o link?");
        }
        axios.get("https://api.brizaloka-api.tk/sociais/instagram?apikey=brizaloka&url=" + q).then(p294 => {
          try {
            d = p294.data;
            v272 = "";
            no = 0;
            for (let v305 of d) {
              no += 1;
              v272 += "*Criador do Reels:* @" + d[0].author + "\n*Descrição:* " + d[0].desc;
            }
            const vO561 = {
              url: d[0].url
            };
            const vO562 = {
              video: vO561,
              caption: v272
            };
            sock.sendMessage(from, vO562);
          } catch (e80) {
            reply("Erro ao baixar a mídia!");
          }
        }).catch(p295 => {
          console.log(p295);
        });
        break;
      case "desbanir":
      case "desban":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        if (!budy.includes("/")) {
          return m.reply("Exemplo: " + prefix + "desbanir Número banido injustamente/Meu número +55 79 xxxx-xxxx foi banido injustamente desbana por favor");
        }
        var [v306, v307] = q.split("/");
        await fetchJson("https://rafinha043.herokuapp.com/enviar/email?titulo=" + v306 + "&texto=" + v307 + "&apikey=KgIbfyAJ");
        m.reply("Olá " + pushname + " A mensagem foi enviada para o suporte com sucesso só aguardar...");
        break;
      case "desban2":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        if (!budy.includes("/")) {
          return m.reply("Exemplo: " + prefix + "desbanir Número banido injustamente/Meu número +55 79 xxxx-xxxx foi banido injustamente desbana por favor");
        }
        var [v306, v307] = q.split("/");
        await fetchJson("https://rafinha043.herokuapp.com/enviar/email?titulo=" + v306 + "&texto=" + v307 + "&apikey=qzFGCJmek");
        reply("Olá " + pushname + " A mensagem foi enviada para o suporte com sucesso só aguardar...");
        break;
      case "retirarsp":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        const vO563 = {
          buttonId: prefix + "menos1",
          buttonText: {
            displayText: "🐉 Rᥱtιrᥲr D᥆ Sᥙρ᥆rtᥱ 1 🐉"
          },
          type: 1
        };
        const vO564 = {
          buttonId: prefix + "menos2",
          buttonText: {
            displayText: "🐉 Rᥱtιrᥲr D᥆ Sᥙρ᥆rtᥱ 2 🐉"
          },
          type: 1
        };
        const vO565 = {
          buttonId: prefix + "bandesban",
          buttonText: {
            displayText: "🐉 Mᥱt᥆d᥆᥉ Bᥲᥒιr/Dᥱ᥉bᥲᥒιr 🐉"
          },
          type: 1
        };
        buttonss = [vO563, vO564, vO565];
        ab = await getBuffer("https://telegra.ph/file/db0956276ed548db4aa21.jpg");
        const vO566 = {
          image: ab,
          caption: "\n  Bᥡ: Nᥱzᥙk᥆",
          buttons: buttonss,
          headerType: 1
        };
        buttonMessagge = vO566;
        const vO567 = {
          quoted: vVO27
        };
        sock.sendMessage(from, buttonMessagge, vO567);
        break;
      case "bandesban":
        {
          if (!v44) {
            return reply(enviar.msg.premium);
          }
          const vO568 = {
            buttonId: prefix + "mtdban",
            buttonText: {
              displayText: "🐉 T᥊t Bᥲᥒιr Zᥲρ 🐉"
            },
            type: 1
          };
          const vO569 = {
            buttonId: prefix + "mtddesban",
            buttonText: {
              displayText: "🐉 T᥊t Dᥱ᥉bᥲᥒιr Zᥲρ 1 🐉"
            },
            type: 1
          };
          const vO570 = {
            buttonId: prefix + "mtddesban2",
            buttonText: {
              displayText: "🐉 T᥊t Dᥱ᥉bᥲᥒιr Zᥲρ 2 🐉"
            },
            type: 1
          };
          let vA43 = [vO568, vO569, vO570];
          blabla = await getBuffer("https://telegra.ph/file/2b2474618e0324d179724.jpg");
          const vO571 = {
            image: blabla,
            caption: "\n  Bᥡ: Nᥱzᥙk᥆",
            buttons: vA43,
            headerType: 4
          };
          buttonMesssage = vO571;
          const vO572 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMesssage, vO572);
        }
        break;
      case "menos1":
      case "-1":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        await reply("\n\nassunto:\nNão recebo código de verificação\n\nresposta:\n\nAlguém solicitou meu código por engano, e agora não consigo entrar no meu whatsapp, peço que o suporte do whatsapp redefina o meu tempo para que eu possa pedir SMS e ligação Número: +55 82 9999-9999\n\n");
        break;
      case "menos2":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        await reply("\n\nAssunto: Não consigo entrar no whatsapp!\n\nresposta: Eu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!\nNúmero: +55 99 9999-9999\n\n");
        break;
      case "mtdban":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        await reply("\n\nAssunto: Usuário violando os termos de uso do whatsapp usando versões modificadas de whatsapps.\n\nresposta: Olá, hojé eu percebi que um homem estava usando whatsapp modificado, falei para ele que talvez a conta dele poderia ser banida mais ele nem ligou, pesquisei no Google e vi que whatsapp modificados dão ban, então peço que o suporte dê ban nesta conta por estar usando whatsapp modificado.\n\nNúmero: +55 99899\n");
        break;
      case "mtddesban":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        await reply("\n\nAssunto: Roubado/perdido\n\nDesativem a minha conta +55 999999555\n\n");
        break;
      case "mtddesban2":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        await reply("\n\nAssunto: Número Banido\n\nresposta: Ola suporte do whatsapp , meu numero ,(+55 9999999) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número\n\n");
        break;
      case "mtddesban3":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        await reply("\n\nAssunto: Número banido injustamente\n\nolá meu nome é Ricardo, trabalho com vendas no aplicativo Whatsapp. Recentemente me eu número foi algo de um grupo de web terroristas e a 3 dias atrás ele foi banido injustamente por favor verifiquem!\n\n(Após o support responder você envia o número completo com +55 etc..)\n\n");
        break;
      case "metodos":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        const vO573 = {
          title: "Dᴇsʙᴀɴɪʀ Nᴜ́ᴍᴇʀᴏs",
          rows: [{
            title: "🛑 ️𝐃𝐞𝐬𝐛𝐚𝐧 1 ",
            rowId: prefix + "txt-desban1"
          }, {
            title: "🛑 𝐃𝐞𝐬𝐛𝐚𝐧 2",
            rowId: prefix + "txt-desban2"
          }, {
            title: "🛑 𝐃𝐞𝐬𝐛𝐚𝐧 3",
            rowId: prefix + "txt-desban3"
          }, {
            title: "🛑 𝐃𝐞𝐬𝐛𝐚𝐧 4",
            rowId: prefix + "txt-desban4"
          }, {
            title: "🛑 𝐃𝐞𝐬𝐛𝐚𝐧 5",
            rowId: prefix + "txt-desban5",
            description: ""
          }]
        };
        const vO574 = {
          title: "Sᴀɪʀ Dᴏ -1",
          rows: [{
            title: "🛑 𝐒𝐚𝐢𝐫 𝐝𝐨 -1",
            rowId: prefix + "txt-sair-1-1"
          }, {
            title: "🛑 𝐒𝐚𝐢𝐫 𝐝𝐨 -1 (2)",
            rowId: prefix + "txt-sair-1-2",
            description: ""
          }]
        };
        const vO575 = {
          title: "Dᴇsᴀᴛɪᴠᴀʀ Nᴜ́ᴍᴇʀᴏs",
          rows: [{
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 1",
            rowId: prefix + "txt-desativar1"
          }, {
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 2",
            rowId: prefix + "txt-desativar2"
          }, {
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 3",
            rowId: prefix + "txt-desativar3"
          }, {
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 4",
            rowId: prefix + "txt-desativar4"
          }, {
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 5",
            rowId: prefix + "txt-desativar5"
          }, {
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 6",
            rowId: prefix + "txt-desativar6"
          }, {
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 7",
            rowId: prefix + "txt-desativar7"
          }, {
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 8",
            rowId: prefix + "txt-desativar8"
          }, {
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 9",
            rowId: prefix + "txt-desativar9"
          }, {
            title: "🛑 𝐝𝐞𝐬𝐚𝐭𝐢𝐯𝐚𝐫 10",
            rowId: prefix + "txt-desativar10",
            description: ""
          }]
        };
        var vA44 = [vO573, vO574, vO575];
        const vO576 = {
          text: "Dᴇsʙᴀɴ, Sᴀɪʀ Dᴏ -1",
          footer: "© Cᴏᴘʏʀɪɢʜᴛ Bʏ Nᴇᴢᴜᴋᴏ-MD",
          title: "🔒 Mᴇ́ᴛᴏᴅᴏs Cᴏᴍᴘʟᴇᴛᴏs 🔒",
          buttonText: "Mᴇɴᴜ Mᴇ́ᴛᴏᴅᴏs",
          sections: vA44
        };
        const vVO576 = vO576;
        const vO577 = {
          quoted: vVO27
        };
        const v308 = await sock.sendMessage(from, vVO576, vO577);
        break;
      case "txt-desativar10":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPedófila e abuso sexual , peço banimento desse número ao suporte Whatsapp , ele está envolvido com grupos de pedófilia da deep web , peço que ajudem nisso pois meu filho foi vítima.\nNúmero: +55 99 9999-9999";
        const vO578 = {
          text: bymonarge
        };
        const vO579 = {
          quoted: mek
        };
        sock.sendMessage(from, vO578, vO579);
        break;
      case "txt-desativar9":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu perdi todos meus documentos junto com meu celular e preciso imediatamente que desativem meu número:\n+55 99 9999-9999";
        const vO580 = {
          text: bymonarge
        };
        const vO581 = {
          quoted: mek
        };
        sock.sendMessage(from, vO580, vO581);
        break;
      case "txt-desativar8":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\n偷⾛了我的⼿机和我所有的宝⻉，请⽴即禁⽌我的帐⼾\n+55 99 9999-9999";
        const vO582 = {
          text: bymonarge
        };
        const vO583 = {
          quoted: mek
        };
        sock.sendMessage(from, vO582, vO583);
        break;
      case "txt-desativar7":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá , eu gostaria de desativar meu número do WhatsApp porque eu estou migrando para o telegram , Meu número:\n+55 99 9999-9999";
        const vO584 = {
          text: bymonarge
        };
        const vO585 = {
          quoted: mek
        };
        sock.sendMessage(from, vO584, vO585);
        break;
      case "txt-desativar6":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá fui assaltado a uns 30 minutos e roubaram todos meus pertences , quero que desativem minha conta do whatsapp.\nNúmero: +55 99 9999-9999";
        const vO586 = {
          text: bymonarge
        };
        const vO587 = {
          quoted: mek
        };
        sock.sendMessage(from, vO586, vO587);
        break;
      case "txt-desativar5":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu numero do whatsapp foi roubado , desativem minha conta imensamente , desde já agradeço! meu numero :\n+55 99999-99999";
        const vO588 = {
          text: bymonarge
        };
        const vO589 = {
          quoted: mek
        };
        sock.sendMessage(from, vO588, vO589);
        break;
      case "txt-desativar4":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPerdido/Roubado: Por favor, desative minha conta\n+55 11 11111-11111";
        const vO590 = {
          text: bymonarge
        };
        const vO591 = {
          quoted: mek
        };
        sock.sendMessage(from, vO590, vO591);
        break;
      case "txt-desativar3":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nEstou solicitando a desativação temporária de minha conta no whatsapp , meu numero:\n+55 11 11111-1111";
        const vO592 = {
          text: bymonarge
        };
        const vO593 = {
          quoted: mek
        };
        sock.sendMessage(from, vO592, vO593);
        break;
      case "txt-desativar2":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nPlease Deactivate The My Account Number (número*) Immediately Because The Number Has Been Lost";
        const vO594 = {
          text: bymonarge
        };
        const vO595 = {
          quoted: mek
        };
        sock.sendMessage(from, vO594, vO595);
        break;
      case "txt-desativar1":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOlá,perdi todos os meus documentos e o meu chip foi roubado. Peço que desativem\nminha conta imediatamente,no chip há dados sobre mim por isso peço que desativem,meu  número imediatamente (número)";
        const vO596 = {
          text: bymonarge
        };
        const vO597 = {
          quoted: mek
        };
        sock.sendMessage(from, vO596, vO597);
        break;
      case "txt-desban1":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número (Número) foi banido indevidamente isto foi um engano . Fui clonado e roubaram meu número preciso ativar minha conta tenho uma empresa de eletrodomésticos e tenho pedidos pendentes.";
        const vO598 = {
          text: bymonarge
        };
        const vO599 = {
          quoted: mek
        };
        sock.sendMessage(from, vO598, vO599);
        break;
      case "txt-desban2":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número (Numero) , foi banido do whatsapp injustamente e tenho provas pra mostrar que o banimento foi um erro do sistema.";
        const vO600 = {
          text: bymonarge
        };
        const vO601 = {
          quoted: mek
        };
        sock.sendMessage(from, vO600, vO601);
        break;
      case "txt-desban4":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOla suporte do whatsapp , meu numero ,(numero) foi banido injustamente do whatsapp , estou solicitando o desbanimento imediato de meu número ";
        const vO602 = {
          text: bymonarge
        };
        const vO603 = {
          quoted: mek
        };
        sock.sendMessage(from, vO602, vO603);
        break;
      case "txt-desban5":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nOla eu sou roberto silva, eu comprei um número número para meu filho fazer os trabalhos da escola em qual ele estuda , porém quando fui tentar entrar , estava dizendo que o número foi banido e eu nem sequer entrei no número, não fiz nada eu ja comprei o número e ele ja estava assim , ele precisa urgentemente desse número para fazer os trabalhos da escola.\nVerifiquem o maís rápido possível!\nNÚMERO: 55 99 9999-9999";
        const vO604 = {
          text: bymonarge
        };
        const vO605 = {
          quoted: mek
        };
        sock.sendMessage(from, vO604, vO605);
        break;
      case "txt-desban3":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu numero foi banido, utilizo ele para falar com meus amigos e familia. Além de falar com meus clientes, e estou sendo prejudicado perdendo vendas +55 99 9999-9999";
        const vO606 = {
          text: bymonarge
        };
        const vO607 = {
          quoted: mek
        };
        sock.sendMessage(from, vO606, vO607);
        break;
      case "txt-sair-1-2":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nEu nao consigo entrar no whatsapp , meu número esta -1 , solicito que resetem minha verificação de número!\nNúmero: +55 99 9999-9999";
        const vO608 = {
          text: bymonarge
        };
        const vO609 = {
          quoted: mek
        };
        sock.sendMessage(from, vO608, vO609);
        break;
      case "txt-sair-1-1":
        bymonarge = "⊶ۣۜۜ͜͡ 🛑Suporte: https://www.whatsapp.com/contact/?lang=pt_br&subject=messenger \n\n📄 • Texto: \n\nMeu número está no suporte alguém solicitou meu código por engano meu número é usado para conversas com familiares que estão com convite por favor reinicie o meu código de verificação via SMS!\nNúmero: +55 99 9999-9999";
        const vO610 = {
          text: bymonarge
        };
        const vO611 = {
          quoted: mek
        };
        sock.sendMessage(from, vO610, vO611);
        break;
      case "alugar":
      case "aluguel":
        {
          let vA45 = [{
            buttonId: "/contratar",
            buttonText: {
              displayText: "CONTRATAR PLANOS💲"
            },
            type: 1
          }];
          const vO612 = {
            text: "☑️ 𝗣𝗟𝗔𝗡𝗢𝗦 𝗘 𝗩𝗔𝗟𝗢𝗥𝗘𝗦\n\n\n✅ Consultas\n✅ Comandos para grupos\n✅ Administração de grupos\n✅ Baixo músicas \n✅ Auto sticker\n✅ Playlist\n\n🔘 Escolha um plano.\n\n👤 PLANOS INDIVIDUAIS\n\n🟢 07 DIAS = R$ 10,00\n🟢 30 DIAS = R$ 20,00\n\n👥 PLANOS PARA GRUPOS\n\n🟢 07 DIAS = R$ 15,00\n🟢 15 DIAS = R$ 25,00\n🟢 30 DIAS = R$ 35,00\n\n\n💰 FORMAS DE PAGAMENTO\n\n🟢 PIX",
            footer: "© Copyright by Nezuko-MD",
            buttons: vA45,
            headerType: 2
          };
          let vVO612 = vO612;
          sock.sendMessage(from, vVO612);
        }
        break;
      case "plano":
      case "planos":
        {
          let vA46 = [{
            buttonId: "/contratar",
            buttonText: {
              displayText: "☔ CONTRATAR PLANOS ☔"
            },
            type: 1
          }];
          const vO613 = {
            text: "┏⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┓\n                 𝗖𝗢𝗡𝗧𝗥𝗔𝗧𝗔𝗥 𝗕𝗢𝗧\nㅤㅤ  ㅤ\n\n[☔] BOT DE WHATSAPP 24H ON\n[☔] SUPORTE 24h\n[☔] ORGANIZE SEU GRUPO\n[☔] GERENCIE SEU GRUPO\n[☔] PROTEJA SEU GRUPO\n[☔] DEIXE SEU GRUPO MAIS ANIMADO\n\n____________𝗣𝗟𝗔𝗡𝗢𝗦____________\n\n*[☔] TESTE 24H:* R$ 1,00\n*[☔] SEMANAL:* R$ 7,00\n*[☔] MENSAL:* R$ 15,00\n*[☔] ARQUIVO R$ 50,00\n\n____________𝗣𝗥𝗢𝗧𝗘𝗖̧𝗢̃𝗘𝗦____________\n\n[☔] ANTI-LINK\n[☔] ANTI-FAKE\n[☔] ANTI-CONTATO\n[☔] ANTI-LOCALIZAÇÃO\n[☔] ANTI-DOCUMENTO\n[☔] ANTI-VIDEO\n[☔] ANTI-IMAGEM\n[☔] ANTI-HIDETAG\n[☔] ANTI-AUDIO\n[☔] ANTI-VIEWONCE\n\n____________𝗥𝗘𝗖𝗨𝗥𝗦𝗢𝗦____________\n\n[☔] CRIAR FIGURINHAS\n[☔] AUTO STICKER\n[☔] BAIXAR MÚSICAS\n[☔] BAIXAR VIDEOS\n[☔] ABRIR/FECHAR\n[☔] BAN & REVIVER\n[☔] BRINCADEIRAS\n[☔] COMANDOS +18\n[☔] FIGURINHAS INTERATIVAS\n\n____________𝗖𝗢𝗡𝗧𝗥𝗔𝗧𝗔𝗥____________\n[☔] DONO OFICIAL: Daniel\n[☔] NÚMERO DONO:\nwa.me/5521964523665\n┗⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┛",
            footer: "© Copyright by Nezuko-MD",
            buttons: vA46,
            headerType: 2
          };
          let vVO613 = vO613;
          sock.sendMessage(from, vVO613);
        }
        break;
      case "infopuxadas":
      case "menupux":
        {
          let vA47 = [{
            buttonId: "/danielfulll",
            buttonText: {
              displayText: "contratar"
            },
            type: 1
          }];
          const vO614 = {
            text: "☑️ 𝗣𝗟𝗔𝗡𝗢𝗦 𝗗𝗘 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔𝗦\n\n𝗢𝗣𝗖̧𝗢̃𝗘𝗦 𝗗𝗘 𝗣𝗨𝗫𝗔𝗗𝗔𝗦 \n\nCpf1\nCpf2\nCpf3\nCpf4\nCpf5\nNome\nTelefone\nTelefone2\nIP\nCep \nBin\nPlaca\nCNPJ \nGerarpessoa\nGerarpessoa2\n\n𝗧𝗘𝗠 𝗣𝗟𝗔𝗡𝗢𝗦 𝗠𝗘𝗡𝗦𝗔𝗜𝗦 𝗘 𝗦𝗘𝗠𝗔𝗡𝗔𝗜𝗦, 𝗣𝗥𝗘𝗖̧𝗢 𝗣𝗩\n\nwa.me/5521964523665\n\n💰 𝗙𝗢𝗥𝗠𝗔𝗦 𝗗𝗘 𝗣𝗔𝗚𝗔𝗠𝗘𝗡𝗧𝗢 \n\n🟢 𝗣𝗜𝗫",
            footer: "© Copyright by Nezuko-MD",
            buttons: vA47,
            headerType: 2
          };
          let vVO614 = vO614;
          sock.sendMessage(from, vVO614);
        }
        break;
      case "contratar":
        const vO615 = {
          quoted: vVO27
        };
        reply("*Dono Da Nezuko-MD*\n*Contato: wa.me/5521964523665*\n*Instagram: daniell_dn1*\n\n*Grupo ofc*: https://chat.whatsapp.com/DTsrSH5CVF66Xvn9Ow61Yn");
        vO615;
        break;
      case "quando":
        if (args.length < 1) {
          return reply("Digite a pergunta");
        }
        random = vA[Math.floor(Math.random() * vA.length)];
        random2 = "" + (Math.floor(Math.random() * 11) + 1);
        if (random == "Hoje" || random == "Amanhã" || random == "Nunca") {
          query = "Pergunta: " + body.slice(1) + "\n\nResposta: " + random;
        } else if (random2 == 1) {
          query = "Pergunta: " + body.slice(1) + "\n\nResposta: 1 " + random;
        } else {
          random3 = vA2[Math.floor(Math.random() * vA2.length)];
          query = "Pergunta: " + body.slice(1) + "\n\nResposta: " + random2 + " " + random3;
        }
        reply(query);
        break;
      case "ytmp3-v2":
        v625 = args.join(" ");
        if (!v625) {
          return reply("Example : " + (prefix + command) + " https://youtube.com/watch?v=PtFMh6Tccag%27");
        }
        reply(enviar.espere);
        anu = await fetchJson("https://lolizit-api.herokuapp.com/api/download/ytmp3?url=" + v625 + "&apikey=apikeyFree30days");
        anu = anu.resultado;
        pla = "➡️ *Título:* " + anu.título + "\n";
        pla += "📬️ *Visualizações:* " + anu.visualizações + "\n";
        pla += "⚡️️ *Canal:* " + anu.canal + "\n";
        pla += "⏳ *Publicado em:* " + anu.publicado + "\n";
        pla += "🔎 *_Aguarde, estou enviando o áudio!_*";
        img = await getBuffer(anu.thumb);
        const vO616 = {
          image: img,
          caption: "" + pla
        };
        const vO617 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO616, vO617);
        const vO618 = {
          url: anu.link
        };
        const vO619 = {
          audio: vO618,
          mimetype: "audio/mpeg",
          fileName: anu.título + ".mp3"
        };
        const vO620 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO619, vO620);
        break;
      case "ytmp4-v2":
        v625 = args.join(" ");
        if (!v625) {
          return reply("Example : " + (prefix + command) + " https://youtube.com/watch?v=PtFMh6Tccag%27");
        }
        reply(enviar.espere);
        anu = await fetchJson("https://lolizit-api.herokuapp.com/api/download/ytmp4?url=" + v625 + "&apikey=apikeyFree30days");
        anu = anu.resultado;
        pla = "➡️ *Título:* " + anu.título + "\n";
        pla += "📬️ *Visualizações:* " + anu.visualizações + "\n";
        pla += "⚡️️ *Canal:* " + anu.canal + "\n";
        pla += "⏳ *Publicado em:* " + anu.publicado + "\n";
        pla += "🔎 *_Aguarde, estou enviando o video!_*";
        img = await getBuffer(anu.thumb);
        const vO621 = {
          image: img,
          caption: "" + pla
        };
        const vO622 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO621, vO622);
        const vO623 = {
          url: anu.link
        };
        const vO624 = {
          audio: vO623,
          mimetype: "video/mp4",
          fileName: anu.título + ".mp4"
        };
        const vO625 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO624, vO625);
        break;
      case "comunismo":
      case "bolsonaro":
      case "affect":
      case "blur":
      case "beautiful":
      case "circle":
      case "del":
      case "invert":
      case "facepalm":
      case "jail":
      case "rip":
      case "trash":
      case "wasted":
      case "wanted":
      case "sepia":
      case "pixelate":
      case "lgbt":
        try {
          if (v104 && !mek.message.videoMessage || v106) {
            post = v106 ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : mek.message.imageMessage;
            reply(enviar.espere);
            imagem = await downloadContentFromMessage(post, "image");
            base64 = Buffer.from([]);
            for await (const v309 of imagem) {
              base64 = Buffer.concat([base64, v309]);
            }
            v314 = await upload(base64);
            const vO626 = {
              url: "https://www.nezsab-apis.xyz/canvas/" + command + "?link=" + v314 + "&apikey=" + keyapi
            };
            const vO627 = {
              image: vO626
            };
            const vO628 = {
              quoted: vVO27
            };
            sock.sendMessage(from, vO627, vO628).catch(p296 => {
              reply("Error!!");
            });
          } else {
            reply("Selecione uma imagem...!");
          }
        } catch (e81) {
          if (String(e81).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel baixar essa música, espere retornar.");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "bluediscord":
      case "blackdiscord":
        try {
          if (v104 && !mek.message.videoMessage || v106) {
            post = v106 ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : mek.message.imageMessage;
            reply(enviar.espere);
            imagem = await downloadContentFromMessage(post, "image");
            base64 = Buffer.from([]);
            for await (const v310 of imagem) {
              base64 = Buffer.concat([base64, v310]);
            }
            v314 = await upload(base64);
            const vO629 = {
              url: "https://www.nezsab-apis.xyz/canvas/" + command + "?link=" + v314 + "&apikey=" + keyapi
            };
            const vO630 = {
              image: vO629
            };
            const vO631 = {
              quoted: vVO27
            };
            sock.sendMessage(from, vO630, vO631).catch(p297 => {
              reply("Error!!");
            });
          } else {
            reply("Selecione uma imagem...!");
          }
        } catch (e82) {
          if (String(e82).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel baixar essa música, espere retornar.");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "wame":
      case "wa.me":
        reply("「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *" + pushname + "*\n\nSeu link WhatsApp:\n\n*https://wa.me/" + sender.split("@s.whatsapp.net")[0] + "*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=" + sender.split("@")[0] + "*\n\n𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿");
        break;
      case "wame2":
      case "wa.me2":
        reply("Seu Wame\nWa.me/" + sender.split("@")[0]);
        break;
      case "resetaki":
        try {
          if (akinator[0][from] && akinator[0][from].player != sender && !isGroupAdmins && !isPremium) {
            return reply("*Não é você que está jogando*");
          }
          akinator[0][from] = undefined;
          fs.writeFileSync("./funções de cmd/funções/akinator.json", JSON.stringify(akinator, null, 2));
          const vO632 = {
            buttonId: "akinator sim",
            buttonText: {},
            type: 1
          };
          vO632.buttonText.displayText = "Sim";
          const vO633 = {
            buttonId: "akinator nao",
            buttonText: {},
            type: 1
          };
          vO633.buttonText.displayText = "Não";
          buttons_opts = [vO632, vO633];
          const vO634 = {
            text: "*Jogo reiniciado com sucesso! Deseja jogar outra partida?*",
            footer: "Sim ou não?",
            buttons: buttons_opts,
            headerType: 1
          };
          sendbuttonsMessage = vO634;
          sock.sendMessage(from, sendbuttonsMessage);
        } catch {
          reply("Nenhuma sessão em andamento...");
        }
        break;
      case "romantic":
        fre = await fetchJson("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz");
        romantic = "Frase Romântica: ︎" + fre.frase;
        const vO635 = {
          text: romantic
        };
        const vO636 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO635, vO636);
        break;
      case "doge":
        fetch("https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing").then(p298 => p298.text()).then(p299 => {
          let v311 = p299.split("\n");
          let v312 = v311[Math.floor(Math.random() * v311.length)];
          vF32(from, v312);
        });
        await limitAdd(sender);
        break;
      case "gato":
      case "gata":
      case "gatos":
      case "gatinhos":
        Cleiton = "Cute Cute🐈‍⬛❤️‍🩹";
        const vO637 = {
          image: {
            url: "https://cataas.com/cat?type=sq"
          },
          caption: Cleiton
        };
        sock.sendMessage(from, vO637);
        break;
      case "sticker-cat":
      case "fig-gato":
        vF32(from, "https://cataas.com/cat?type=sq", vVO27);
        break;
      case "jogo":
      case "gamer":
        if (!query) {
          return reply("Digite o nome do jogo para que eu possa pesquisar\n\nExemplo: " + (prefix + command) + " Minecraft");
        }
        reply("Pesquisando jogo...");
        phaticusthiccy.system_requirements("" + query).then(async p300 => {
          let v313 = "\t\t\t\t*" + query + "*\n\n*Nome:* " + p300.game.name + "\n*Lançamento:* " + p300.game.release_date + "\n*Desenvolvedora:* " + p300.game.developer + "\n*Editora:* " + p300.game.publisher + "\n*Genero:* " + p300.game.genre + "\n\n*- Requisitos Mínimos*\n\n*CPU:* " + p300.system_requirements.minimum.cpu + "\n*GPU:* " + p300.system_requirements.minimum.gpu + "\n*RAM:* " + p300.system_requirements.minimum.ram + "\n*HDD:* " + p300.system_requirements.minimum.hdd + "\n*DirectX:* " + p300.system_requirements.minimum.directx + "\n*OS:* " + p300.system_requirements.minimum.os + "\n\n*- Requisitos Recomendados*\n\n*CPU:* " + p300.system_requirements.recommended.cpu + "\n*GPU:* " + p300.system_requirements.recommended.gpu + "\n*RAM:* " + p300.system_requirements.recommended.ram + "\n*HDD:* " + p300.system_requirements.recommended.hdd + "\n*DirectX:* " + p300.system_requirements.recommended.directx + "\n*OS:* " + p300.system_requirements.recommended.os + "\n\n*- REVIEWS SOBRE:*\n\n*Popularidade:* " + p300.reviews.popularity + "\n*Gráficos:* " + p300.reviews.graphics + "\n*Design:* " + p300.reviews.design + "\n*GamePlay:* " + p300.reviews.gameplay + "\n*Som:* " + p300.reviews.sound + "\n*Música:* " + p300.reviews.music + "\n*Inovações:* " + p300.reviews.innovations + "\n*Geral:* " + p300.reviews.overall + "\n\n";
          const vO638 = {
            url: p300.game.avatar
          };
          const vO639 = {
            image: vO638,
            caption: v313
          };
          const vO640 = {
            quoted: mek
          };
          sock.sendMessage(from, vO639, vO640);
        }).catch(p301 => {
          reply("Jogo não encontrando.");
          console.log(p301);
        });
        break;
      case "nazista":
      case "legal":
      case "rico":
      case "rockeiro":
      case "retardado":
      case "sadboy":
      case "toxico":
      case "lindo":
      case "frio":
      case "homofobico":
      case "pobre":
      case "feio":
      case "cauculista":
      case "inativo":
      case "baiano":
      case "feio":
      case "feia":
      case "burro":
      case "burra":
      case "gordo":
      case "pobre":
      case "bonito":
      case "bonita":
      case "mamaco":
      case "gostoso":
      case "gostosa":
      case "maconheiro":
      case "maconheira":
      case "gado":
      case "gada":
      case "putinha":
      case "chifrudo":
      case "riquinho":
      case "riquinha":
      case "dragão":
      case "kengo":
      case "kenga":
      case "trouxa":
      case "iludido":
      case "iludida":
      case "palhaço":
      case "palhaça":
      case "corno":
      case "corna":
      case "puta":
      case "vagabundo":
      case "vagabunda":
      case "santo":
      case "santa":
      case "punheteiro":
      case "otaku":
      case "lolicon":
      case "preto":
      case "feio":
      case "lixo":
      case "burro":
      case "gordo":
      case "pobre":
      case "corno":
      case "bonito":
      case "macaco":
      case "gostoso":
      case "fimose":
        if (!isGroup) {
          return reply(mess.group);
        }
        d = [];
        teks = "O mais *" + command + "* é: ";
        for (i = 0; i < 1; i++) {
          r = Math.floor(Math.random() * v28.participants.length + 0);
          teks += "@" + v37[r].id.split("@")[0];
          d.push(v37[r].id);
        }
        await vF22(teks, d, true);
        break;
      case "omais":
        d = [];
        teks = "O mais" + body.slice(6) + " é o ";
        for (i = 0; i < 1; i++) {
          r = Math.floor(Math.random() * v28.participants.length + 0);
          teks += "@" + v37[r].id.split("@")[0];
          d.push(v37[r].id);
        }
        await vF22(teks, d, true);
        break;
      case "audiomeme":
        const vO641 = {
          text: "✅️",
          key: mek.key
        };
        const vO642 = {
          react: vO641
        };
        sock.sendMessage(from, vO642);
        try {
          if (args.length < 1) {
            return reply("Uso incorreto do comando!\nExemplo: *" + (prefix + command) + " Bolsonaro*");
          }
          anu = await fetchJson("https://nezsab-apis.xyz/api/audiomeme?text=" + q + "&apikey=" + keyapi);
          const vO643 = {
            url: "" + anu.resultado.audio
          };
          const vO644 = {
            audio: vO643,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO645 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO644, vO645);
          setTimeout(() => {
            const vO646 = {
              quoted: vVO27
            };
            sock.sendMessage(from, {
              text: "⸙͎۪۫ ⊰ Olá *" + pushname + "*, ♡\n*Deseja outro áudio?* Clique no botão \"Próximo Áudio\".",
              footer: "Por: " + NomeDoBot,
              buttons: [{
                buttonId: prefix + command + " " + q,
                buttonText: {
                  displayText: "✰ۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐎-𝐀𝐔𝐃𝐈𝐎💢"
                },
                type: 1
              }]
            }, vO646);
          }, 2090);
        } catch (e83) {
          console.log(e83);
          const vO647 = {
            text: "❌️",
            key: mek.key
          };
          const vO648 = {
            react: vO647
          };
          sock.sendMessage(from, vO648);
          reply("Nenhum resultado foi encontrado, tente novamente!");
        }
        break;
      case "play":
        if (args.length < 1) {
          return reply("Exemplo:\n" + command + " mc poze");
        }
        srch = args.join(" ");
        ytbusca = await yts(srch);
        ytbr = ytbusca.all;
        res = await yts(srch);
        var v314 = ytbr[0].url;
        vA44 = [];
        ytbr.splice(10, ytbr.length);
        ytlink = ytbr.url;
        ytbr.forEach((p302, p303) => {
          const vO649 = {
            description: "" + p302.title,
            title: "🎶 𝐀́𝐔𝐃𝐈𝐎 🎶 Duração: " + p302.timestamp,
            rowId: prefix + "ytmp3 " + p302.url
          };
          const vO650 = {
            description: "" + p302.title,
            title: "📽️ 𝐕𝐈́𝐃𝐄𝐎 📽️ Duração: " + p302.timestamp,
            rowId: prefix + "ytmp4 " + p302.url
          };
          const vO651 = {
            rows: [vO649, vO650],
            title: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
          };
          vA44.push(vO651);
        });
        const vO652 = {
          text: "© Cᴏᴘʏʀɪɢʜᴛ Bʏ Nᴇᴢᴜᴋᴏ-MD",
          title: "[🌺] Mᴜ́sɪᴄᴀ Eɴᴄᴏɴᴛʀᴀᴅᴀ [🌺]",
          buttonText: "Cʟɪϙᴜᴇ Aϙᴜɪ",
          sections: vA44
        };
        const vO653 = {
          quoted: mek
        };
        sock.sendMessage(from, vO652, vO653);
        break;
      case "play2":
        if (!q) {
          return reply("Cade o nome?");
        }
        const vO654 = {
          text: "⏳",
          key: mek.key
        };
        const vO655 = {
          react: vO654
        };
        sock.sendMessage(from, vO655);
        qp = args.join(" ");
        res = await yts(qp);
        blaimg = await getBuffer(res.all[0].image);
        blalink = await getBuffer(res.all[0].url);
        v427 = "\n⟮ _*◉ʏᴏᴜᴛᴜʙᴇ◉*_ ⟯ \n \n0.02━◉━━━━━━━━━━━━3.26\n🔂 ⏪ ⏸️ ⏩🎵\n\n❤️‍🔥 Titulo: " + res.all[0].title + "\n📈 Visualizações: " + res.all[0].views + "\n👀 Duração: " + res.all[0].timestamp + "\n🔎 Canal: " + res.all[0].author.name + "\n🗯 Link " + res.all[0].url;
        const vO656 = {
          buttonId: prefix + "ytmp3 " + res.all[0].url,
          buttonText: {
            displayText: "Audio 🎶"
          },
          type: 1
        };
        const vO657 = {
          buttonId: prefix + "ytmp4 " + res.all[0].url,
          buttonText: {
            displayText: "Video 🎥"
          },
          type: 1
        };
        const vO658 = {
          buttonId: prefix + "ytdoc " + res.all[0].url,
          buttonText: {
            displayText: "Documento 🔞"
          },
          type: 1
        };
        buttons02 = [vO656, vO657, vO658];
        buttonMessage02 = {
          image: await getBuffer(res.all[0].image),
          sendEphemeral: true,
          Thumbnail: await getBuffer(res.all[0].thumbnail),
          mentions: [sender],
          caption: v427,
          footer: "",
          buttons: buttons02,
          headerType: 4,
          contextInfo: {
            externalAdReply: {
              title: "𝚫 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ⫹⫺",
              renderLargerThumbnail: false,
              showAdAttribution: true,
              body: "9:07●━━━━━━── 10:49⇆",
              mediaUrl: "" + q,
              mediaType: 2,
              thumbnail: fs.readFileSync("./funções de cmd/mídia-ft-vd/fotos/nezuko2.jpg")
            }
          }
        };
        sock.sendMessage(from, buttonMessage02);
        break;
      case "ytaudio":
        const vO659 = {
          text: "🌹",
          key: mek.key
        };
        const vO660 = {
          react: vO659
        };
        sock.sendMessage(from, vO660);
        try {
          if (args.length < 1) {
            return reply("<❗> Cadê o nome?");
          }
          if (!args[0]) {
            return reply("『 ❌ 』Isso não é o nome de uma música do YouTube.");
          }
          anumusic = await new Youtube().ytmp3(args[0]);
          buff = await getBuffer(anumusic.dl_link);
          ran = getRandom(".mp3");
          reply("Baixando o áudio, aguarde...");
          const vO661 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            audio: buff,
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                title: "Música: " + anumusic.title,
                renderLargerThumbnail: false,
                showAdAttribution: true,
                body: "By: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
                mediaUrl: "" + q,
                mediaType: 2,
                thumbnail: fs.readFileSync("./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg")
              }
            }
          }, vO661);
        } catch (e84) {
          console.log(e84);
          reply("Error");
        }
        break;
      case "playaudio":
        q = args.join(" ");
        v427 = await fetchJson("https://api-team-of-hero.herokuapp.com/api/yt/playmp4?apikey=apiteam&query=" + q);
        audbla = await getBuffer(v427.url);
        const vO662 = {
          audio: audbla,
          mimetype: "audio/mp4"
        };
        const vO663 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO662, vO663);
        break;
      case "ytdoc":
        const vO664 = {
          text: "⏳",
          key: mek.key
        };
        const vO665 = {
          react: vO664
        };
        sock.sendMessage(from, vO665);
        try {
          if (args.length < 1) {
            return reply("<❗> Cadê o nome?");
          }
          if (!args[0]) {
            return reply("『❌』Isso não é o nome de uma música do YouTube.");
          }
          anumusic = await new Youtube().ytmp3(args[0]);
          buff = await getBuffer(anumusic.dl_link);
          ran = getRandom(".mp3");
          reply("Baixando o documento, aguarde...");
          const vO666 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            document: buff,
            mimetype: "audio/mpeg",
            fileName: anumusic.title + ".mp3",
            contextInfo: {
              externalAdReply: {
                title: "Música: " + anumusic.title,
                renderLargerThumbnail: false,
                showAdAttribution: true,
                body: "By: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
                mediaUrl: "" + q,
                mediaType: 2,
                thumbnail: fs.readFileSync("./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg")
              }
            }
          }, vO666);
        } catch (e85) {
          console.log(e85);
          reply("Error");
        }
        break;
      case "ytmp4":
      case "play_video":
        try {
          qp = args.join(" ");
          if (!qp) {
            return reply("Cade o link da música/video?");
          }
          reply(enviar.espere);
          res = await yts(qp);
          v427 = await fetchJson("https://nezsab-apis.xyz/youtube/mp4?link=" + qp + "&apikey=" + keyapi);
          audbla = await getBuffer(v427.resultado.download);
          const vO667 = {
            video: audbla,
            mimetype: "video/mp4"
          };
          const vO668 = {
            quoted: mek
          };
          sock.sendMessage(from, vO667, vO668).catch(p304 => {
            reply("<❌️️> Erro ao baixar a mídia, tente novamente mais tarde!");
          });
        } catch (e86) {
          if (String(e86).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("<❌️️> Erro ao baixar a mídia, tente novamente mais tarde!");
          }
        }
        break;
      case "ytmp5":
        try {
          qp = args.join(" ");
          if (!qp) {
            return reply("Cade o link da música/video?");
          }
          reply(enviar.espere);
          res = await yts(qp);
          v427 = await fetchJson("https://nezsab-apis.xyz/youtube/mp4?link=" + qp + "&apikey=" + keyapi);
          audbla = await getBuffer(v427.resultado.download);
          const vO669 = {
            audio: audbla,
            mimetype: "audio/mp4"
          };
          const vO670 = {
            quoted: mek
          };
          sock.sendMessage(from, vO669, vO670).catch(p305 => {
            reply("<❌️️> Erro ao baixar a mídia, tente novamente mais tarde!");
          });
        } catch (e87) {
          if (String(e87).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("<❌️️> Erro ao baixar a mídia, tente novamente mais tarde!");
          }
        }
        break;
      case "ytmp3":
      case "ytmp34":
        const vO671 = {
          text: "⏳",
          key: mek.key
        };
        const vO672 = {
          react: vO671
        };
        sock.sendMessage(from, vO672);
        try {
          if (args.length < 1) {
            return reply("CADE O LINK ANIMAL");
          }
          if (!args[0]) {
            return reply("❌ Isso não é um link do youtube ❌");
          }
          anumusic = await new Youtube().ytmp3(args[0]);
          buff = await getBuffer(anumusic.dl_link);
          ran = getRandom(".mp3");
          reply("「▰▰▰▰▱▱」enviando vida...");
          const vO673 = {
            audio: buff,
            mimetype: "audio/mpeg"
          };
          const vO674 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, vO673, vO674);
        } catch (e88) {
          console.log(e88);
          reply("Error");
        }
        break;
      case "ytmp33":
        {
          const vO675 = {
            text: "🇧🇷",
            key: mek.key
          };
          const vO676 = {
            react: vO675
          };
          sock.sendMessage(from, vO676);
          if (!q) {
            return reply("Cadê o link do vídeo? 🥱");
          }
          playdobiel = args.join(" ");
          reply("Aguarde *" + pushname + "*... ☕");
          anu = await fetchJson("https://nezsab-apis.xyz/api/ytmp4?url=" + playdobiel + "&apikey=" + keyapi);
          pla = "ೋ🏷 𝘛𝘪́𝘵𝘶𝘭𝘰⧽ " + anu.resultado.título + "\n";
          pla += "ೋ📊️️ 𝘝𝘪𝘴𝘶𝘢𝘭𝘪𝘻𝘢𝘤̧𝘰̃𝘦𝘴⧽ " + anu.resultado.visualizações + "\n";
          pla += "ೋ🧧 𝘊𝘢𝘯𝘢𝘭⧽ " + anu.resultado.canal + "\n";
          pla += "ೋ📮 𝘗𝘶𝘣𝘭𝘪𝘤𝘢𝘥𝘰⧽ " + anu.resultado.publicado;
          img = await getBuffer(anu.resultado.thumb);
          const vO677 = {
            image: img,
            caption: "" + pla
          };
          const vO678 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO677, vO678);
          const vO679 = {
            url: anu.resultado.link
          };
          const vO680 = {
            audio: vO679,
            mimetype: "audio/mpeg",
            fileName: anu.resultado.título + ".mp3"
          };
          const vO681 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO680, vO681);
        }
        break;
      case "play5":
        try {
          const vO682 = {
            text: "✅",
            key: mek.key
          };
          const vO683 = {
            react: vO682
          };
          sock.sendMessage(from, vO683);
          piks = args.join(" ");
          if (piks < 1) {
            return reply("<❗> Cadê o título da música?");
          }
          anumusic = await fetchJson("https://nezsab-apis.xyz/api/youtube/playmp3-3?q=" + piks + "&apikey=" + keyapi);
          pla = "𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘-𝐌𝐏𝟑\n";
          pla += "ೋ🏷 𝘛𝘪́𝘵𝘶𝘭𝘰⧽ " + anumusic.resultado.titulo + "\n";
          pla += "ೋ📊️️ 𝘝𝘪𝘴𝘶𝘢𝘭𝘪𝘻𝘢𝘤̧𝘰̃𝘦𝘴⧽ " + anumusic.resultado.visualizações + "\n";
          pla += "ೋ🧧 𝘊𝘢𝘯𝘢𝘭⧽ " + anumusic.resultado.canal + "\n";
          pla += "ೋ⏰ 𝘋𝘶𝘳𝘢𝘤̧𝘢̃𝘰⧽ " + anumusic.resultado.duração;
          img = await getBuffer(anumusic.resultado.thumb);
          const vO684 = {
            image: img,
            caption: "" + pla
          };
          const vO685 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO684, vO685);
          buff = await getBuffer(anumusic.resultado.audio_src);
          ran = getRandom(".mp3");
          reply("⬇️ *BAIXANDO A MÚSICA!* ⬇️");
          const vO686 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            audio: buff,
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                title: "Música: " + anumusic.resultado.titulo,
                renderLargerThumbnail: false,
                showAdAttribution: true,
                body: "By: " + NomeDoBot,
                mediaUrl: "" + q,
                mediaType: 2,
                thumbnail: fs.readFileSync("./funções de cmd/mídia-ft-vd/fotos/nezuko2.jpg")
              }
            }
          }, vO686);
        } catch (e89) {
          console.log(e89);
          reply("<❗>  Algum erro detectado ou api caiu.");
        }
        break;
      case "play3":
        reply(enviar.espere);
        playdobiel = args.join(" ");
        anu = await axios.get("https://api.brizaloka-api.tk/sociais/ytplaymp3?apikey=brizaloka&query=" + playdobiel);
        pla = "➡️ *Título:* " + anu.data.titulo + "\n";
        pla += "📬️ *Visualizações:* " + anu.data.views + "\n";
        pla += "🗞️️ *Canal:* " + anu.data.canal.name + "\n";
        pla += "⏳ *Duração:* " + anu.data.duration + "\n";
        pla += "🔎 _*Aguarde, estou enviando o áudio!*_";
        img = await getBuffer(anu.data.thumb);
        const vO687 = {
          image: img,
          caption: "" + pla
        };
        const vO688 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO687, vO688);
        const vO689 = {
          url: anu.data.audio_src
        };
        const vO690 = {
          audio: vO689,
          mimetype: "audio/mpeg",
          fileName: anu.data.titulo + ".mp3"
        };
        const vO691 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO690, vO691);
        break;
      case "play4":
        qp = args.join(" ");
        res = await yts(qp);
        const vO692 = {
          text: "⏳",
          key: mek.key
        };
        const vO693 = {
          react: vO692
        };
        sock.sendMessage(from, vO693);
        blaimg = await getBuffer(res.all[0].image);
        v427 = "▢ *Título:* " + res.all[0].title + "\n▢ *Visualizações:* " + res.all[0].views + "\n▢ *Duração:* " + res.all[0].timestamp + "\n▢ *Canal:* " + res.all[0].author.name;
        const vO694 = {
          buttonId: prefix + "ytmp3 " + q,
          buttonText: {
            displayText: "🎶 Download [ Áudio ]"
          },
          type: 1
        };
        const vO695 = {
          buttonId: prefix + "playaud " + q,
          buttonText: {
            displayText: "☔ Playlist [ YouTube ]"
          },
          type: 1
        };
        sendImageButtons(from, "" + res.all[0].image, v427, "© _Copyright by Nezuko-MD_", [vO694, vO695], vVO27);
        break;
      case "play5":
        reply(enviar.espere);
        playdobiel = args.join(" ");
        anu = await axios.get("https://api.brizaloka-api.tk/sociais/v2/ytplaymp3?apikey=brizaloka&query=" + playdobiel);
        pla = "➡️ *Título:* " + anu.data.titulo + "\n";
        pla += "📊️ *Visualizações:* " + anu.data.views + "\n";
        pla += "🗞️️ *Canal:* " + anu.data.canal.name + "\n";
        pla += "⏳ *Duração:* " + anu.data.duration + "\n";
        pla += "_*Aguarde, estou enviando o áudio!*_";
        img = await getBuffer(anu.data.thumb);
        const vO696 = {
          image: img,
          caption: "" + pla
        };
        const vO697 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO696, vO697);
        const vO698 = {
          url: anu.data.link_src
        };
        const vO699 = {
          audio: vO698,
          mimetype: "audio/mpeg",
          fileName: anu.data.titulo + ".mp3"
        };
        const vO700 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO699, vO700);
        break;
      case "play6":
        reply(enviar.espere);
        playdobiel = args.join(" ");
        anu = await axios.get("https://sabrina-api.herokuapp.com/youtube/playmp3?&q=" + q + "&apikey=" + keysabrina);
        pla = "➡️ *Título:* " + anu.data.resultado.titulo + "\n";
        pla += "📊️ *Visualizações:* " + anu.data.resultado.views + "\n";
        pla += "🎞️️️ *Canal:* " + anu.data.resultado.canal + "\n";
        pla += "📆 *Data de postagem:* " + anu.data.resultado.postado_em + "\n";
        pla += "🔎 _*Aguarde, estou enviando o áudio!*_";
        img = await getBuffer(anu.data.resultado.thumb);
        const vO701 = {
          image: img,
          caption: "" + pla
        };
        const vO702 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO701, vO702);
        const vO703 = {
          url: anu.data.resultado.download
        };
        const vO704 = {
          audio: vO703,
          mimetype: "audio/mp4",
          fileName: anu.data.resultado.titulo + ".mp3"
        };
        const vO705 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO704, vO705);
        break;
      case "pix":
        {
          v272 = args.join(" ");
          if (!isPremium) {
            return reply("Exemplo: " + (prefix + command) + " +55 21 96452-3665/30");
          }
          let v315 = v272.split("/")[0].replace(/\D/g, "");
          let v316 = v272.split("/")[1];
          if (!v315) {
            return reply("CHAVE PIX DA PESSOA?/número de telefone");
          }
          if (!v316) {
            return reply("QUAL O VALOR DO PIX?");
          }
          let [v317] = await sock.onWhatsApp(v315);
          if (!v317) {
            return reply("Número inválido");
          }
          v427 = "[💠]  𝗣𝗜𝗫 𝗡𝗘𝗭𝗨𝗞𝗢  [💠]\nTransferência Pix Recebida Com Sucesso\n\n[👤] 𝗢𝗥𝗜𝗚𝗘𝗠: " + pushname + "\n[🏦] 𝗕𝗔𝗡𝗖𝗢: NEZUKO SUPREMO\n[💱] 𝗧𝗔𝗥𝗜𝗙𝗔: Grátis \n[💸] 𝗩𝗔𝗟𝗢𝗥: " + v316 + ",00";
          const vO706 = {
            text: v427
          };
          sock.sendMessage(v317.jid, vO706);
          reply("[💠] 𝗖𝗢𝗠𝗣𝗥𝗢𝗩𝗔𝗡𝗧𝗘 [💠]\nTransferência Pix Realizada com Sucesso\n\n[💱] 𝗧𝗔𝗥𝗜𝗙𝗔: Gratis\n[👤] 𝗢𝗥𝗜𝗚𝗘𝗠: " + pushname + "\n[📆] 𝗗𝗔𝗧𝗔: " + v122 + "\n[⏱️] 𝗛𝗢𝗥𝗔: " + v123 + "\n\n[🗣️] 𝗗𝗘𝗦𝗧𝗜𝗡𝗢: wa.me/" + v317.jid.split("@")[0] + "\n[💸] 𝗩𝗔𝗟𝗢𝗥: " + v316 + ",00");
        }
        break;
      case "saldo":
        if (!v84 && !isGroupAdmins) {
          return reply(mensagem[0].game);
        }
        var vVF42 = vF4(sender);
        const vO707 = {
          salldo: vVF42
        };
        const vVO707 = vO707;
        if (vVO707 < 100000) {
          status = "Classe média";
        } else if (vVO707 == 1000000) {
          status = "Milionário";
        } else if (vVO707 == 1000000000) {
          status = "Bilionário";
        } else if (vVO707 == 100000) {
          status = "Classe pobre";
        }
        pinga = "┏━──────「令」──────━┓\n│ㅤㅤ *STATUS BANCÁRIO*    ㅤ│\n┗━──────「令」──────━┛\n│\n│Nome: *" + pushname + "*\n│Número: *" + sender.split("@")[0] + "*\n│Situação Bancária: *Undefined*\n│Instituição: *CoinBank*\n│Saldo disponível: *" + vVF42 + "*\n│\n┗━──────「令」──────━┛";
        const vO708 = {
          buttonId: prefix + "helptransf",
          buttonText: {
            displayText: "REALIZAR TRANSFERÊNCIA"
          },
          type: 1
        };
        const vO709 = {
          text: pinga,
          footer: "Caso queira fazer transferência, use o botão a baixo",
          buttons: [vO708]
        };
        const vO710 = {
          quoted: mek
        };
        sock.sendMessage(from, vO709, vO710);
        break;
      case "pix2":
        if (!v84 && !isGroupAdmins) {
          return reply(mensagem[0].game);
        }
        if (args.length < 1) {
          return reply("Modo certo de se usar " + prefix + "transferir @ | valor");
        }
        if (!q.includes("|")) {
          return reply("Você precisa colocar o valor que deseja transferir.\n\nExemplo:\n\n*" + prefix + "Pix @pessoa | 3000*");
        }
        const v318 = q.substring(0, q.indexOf("|") - 1);
        const v319 = q.substring(q.lastIndexOf("|") + 1);
        if (isNaN(v319)) {
          return await reply("O valor precisa está em números...");
        }
        if (v319 < 50) {
          return reply("transfrência mínima e de 50 Coins");
        }
        if (vF4(sender) < v319) {
          return reply("Você não tem Coins suficiente para fazer uma transferência, você precisa ter no minímo 1000 de Coins");
        }
        const v320 = v318.replace("@", "") + "@s.whatsapp.net";
        fee = v319 * 0;
        hasiltf = v319 - fee;
        vF3(v320, hasiltf);
        vF9(sender, v319);
        vF3("5521964523665@s.whatsapp.net", fee);
        pingaa = "*TRANSFERÊNCIA CONCLUÍDA*\n\nOrigem: *" + sender.split("@")[0] + "*\nDestinatário: *" + v318 + "*\nValor transferêrido: *" + v319 + "*\nInstituição: *CoinBank*\nTarifa sobre: *0,00*";
        const vO711 = {
          buttonId: prefix + "saldo",
          buttonText: {
            displayText: "CONSULTA SALDO"
          },
          type: 1
        };
        const vO712 = {
          text: pingaa,
          footer: "Deseja vê seu saldo atualizado?",
          buttons: [vO711]
        };
        const vO713 = {
          quoted: m
        };
        sock.sendMessage(from, vO712, vO713);
        break;
      case "helptransf":
        pingu = "Para fazer uma transferência de Coins para outra pessoa faça o seguinte, exemplo de como se usar: " + prefix + "pix @ | 1000\n não esqueça de usar o |";
        const vO714 = {
          text: pingu
        };
        const vO715 = {
          quoted: mek
        };
        sock.sendMessage(from, vO714, vO715);
        break;
      case "apostar":
        if (!v84 && !isGroupAdmins) {
          return reply(mensagem[0].game);
        }
        if (!isGroup) {
          return reply("Comando apenas para grupo");
        }
        const vVF43 = vF4(sender);
        const vVF44 = vF4(sender, vVF43);
        const vLS50 = "50";
        if (vVF44 <= vLS50) {
          return reply("desculpe vc ainda não  pode apostar😕 somente com  " + vLS50 + " de Coins.\n\nSuas Coins: " + vVF44);
        }
        if (args.length !== 1) {
          return reply("Especifique a quantidade de Coin para apostar.");
        }
        if (Number(args[0]) >= vVF44 || Number(args[0]) >= vVF43) {
          return reply("Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de " + vLS50 + " dinheiro por vez!\n\nSeu dinheiro: " + vVF44);
        }
        if (Number(args[0]) < 50) {
          return reply("O minimo para se apostar é de 50 Coins");
        }
        if (isNaN(args[0])) {
          return reply("Para apostar use apenas números, nada de inserir letras, a menos que queira perder todo o XP que tenha.");
        }
        const v321 = Math.floor(Math.random() * 7) + 1;
        const vNumber = Number(-args[0]);
        const v322 = v321 + Number(args[0]);
        if (v321 == 1) {
          await reply("🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de " + vNumber + " em seu dinheiro.");
          vF3(sender, vNumber, vVF43);
          vF3(numerodonoa + "@s.whatsapp.net", v322);
        } else if (v321 == 2) {
          await reply("Você Ganhou🥳\nSobreviveu ao tiro e recebeu " + v322 + " Coins");
          vF3(sender, v322, vVF43);
        } else if (v321 == 3) {
          await reply("Poxa você está sem sorte😓\n\nVocê perdeu " + vNumber + "\não desista continue apostando😎🤙");
          vF3(sender, vNumber, vVF43);
          vF3(numerodonoa + "@s.whatsapp.net", v322);
        } else if (v321 == 4) {
          await reply("Essa foi por pouco!!😬\n\nVocê consegiu concluir o golpe e ganhou " + v322 + " Coins");
          vF3(sender, v322, vVF43);
        } else if (v321 == 5) {
          await reply("Você errou o cavalo️\n\nAcabou perdendo " + vNumber + " em seu dinheiro, que tal..apostar mais alto??🤫.");
          vF3(sender, vNumber, vVF43);
          vF3(nunerodonoa + "@s.whatsapp.net", v322);
        } else if (v321 == 6) {
          await reply("🥳Aeeeeee🥳\n\nVocê finalmente ganhou, receba seus " + v322 + " de Coins🔷️");
          vF3(sender, v322, vVF43);
        }
        break;
      case "timegrup":
      case "timegroup":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        const vO716 = {
          text: "☔",
          key: m.key
        };
        const vO717 = {
          react: vO716
        };
        sock.sendMessage(from, vO717);
        {
          timestampe = speed();
          latensie = speed() - timestampe;
          uptime = process.uptime();
          adivinhaa = mek.key.id.length > 21 ? "Android 🥴" : mek.key.id.substring(0, 2) == "3A" ? "IPHONE 🔋🔌" : "ZAP DA WEB 💻";
          const vO718 = {
            title: "[☔] NEZUKO BOT [☔] ",
            rows: [{
              title: "[☔] 30 SEGUNDOS [☔]",
              rowId: prefix + "grupo30s"
            }, {
              title: "[☔] 01 MINUTO [☔]",
              rowId: prefix + "grupo1m"
            }, {
              title: "[☔] 02 MINUTOS [☔]",
              rowId: prefix + "grupo2m"
            }, {
              title: "[☔] 05 MINUTOS [☔]",
              rowId: prefix + "grupo5m"
            }, {
              title: "[☔] 10 MINUTOS [☔]",
              rowId: prefix + "grupo10m"
            }, {
              title: "[☔] 20 MINUTOS [☔]",
              rowId: prefix + "grupo20m"
            }, {
              title: "[☔] 30 MINITOS [☔]",
              rowId: prefix + "grupo30m"
            }, {
              title: "[☔] 01 HORA [☔]",
              rowId: prefix + "grupo1h"
            }, {
              title: "[☔] 03 HORAS [☔]",
              rowId: prefix + "grupo3h"
            }, {
              title: "[☔] 05 HORAS [☔]",
              rowId: prefix + "grupo5h"
            }, {
              title: "[☔] 12 HORAS [☔]",
              rowId: prefix + "grupo12h"
            }]
          };
          vA44 = [vO718];
          const vO719 = {
            text: "\n╭━━━━━◉                                       ◉━━━━━╮\n       ╔┉☔┉═══『☔』═══┉☔┉╗    \n       ║                 𝗗𝗘𝗙𝗜𝗡𝗜𝗥                  ║\n       ╚┉☔┉═══『☔』═══┉☔┉╝    \n╰━━━━━◉                                       ◉━━━━━╯\nㅤㅤི⋮ ྀ☔⏝ ི⋮ ྀ  ☔ ི⋮ ྀ⏝☔ི ྀ\nㅤㅤ  ㅤ \n┠➥ *[👤] OLÁ  ADM:* " + pushname + "\n┠\n┠➥ *AQUI ESTÃO AS OPÇÕES DE FECHAR E ABRIR O GRUPO, BASTA ESCOLHER O TEMPO*",
            footer: "➥@daniell_dn1\n➥@daniell_dn1",
            title: "",
            buttonText: "[☔] TIME LIST [☔]",
            sections: vA44
          };
          const vVO719 = vO719;
          const vO720 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO719, vO720);
        }
        break;
      case "grupo30s":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(30000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo1m":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(60000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo2m":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(120000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo5m":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(300000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo10m":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(600000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo20m":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(1200000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo30m":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(13800000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo1h":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(27600000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo3h":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(82800000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo5h":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(138000000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "grupo12":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        {
          sock.groupSettingUpdate(from, "announcement");
          await sleep(331200000);
          sock.groupSettingUpdate(from, "not_announcement");
        }
        break;
      case "respaki":
        if (!mek.message.listResponseMessage) {
          return;
        }
        if (akinator[0][from] && akinator[0][from].player != sender) {
          return reply("*Não é você que está jogando*");
        }
        if (args.length < 1) {
          return;
        }
        await akinator[0][from].game.step(args[0]);
        if (akinator[0][from].game.progress > 85) {
          await akinator[0][from].game.win();
          teks = "Por acaso seu personagem é " + akinator[0][from].game.answers[0].name + "?";
          const vO721 = {
            buttonId: "finaki sim",
            buttonText: {},
            type: 1
          };
          vO721.buttonText.displayText = "Sim";
          const vO722 = {
            buttonId: "finaki nao",
            buttonText: {},
            type: 1
          };
          vO722.buttonText.displayText = "Não";
          buttons_opts = [vO721, vO722];
          const vO723 = {
            url: akinator[0][from].game.answers[0].absolute_picture_path
          };
          const vO724 = {
            image: vO723,
            caption: "Já sei!\n\n" + teks,
            footer: "Sim ou não?",
            buttons: buttons_opts,
            headerType: 1
          };
          sendbuttonsMessage = vO724;
          sock.sendMessage(from, sendbuttonsMessage);
        } else {
          const vO725 = {
            text: akinator[0][from].game.question,
            footer: "Mostrar opções",
            buttonText: "Opções",
            title: "Pergunta",
            sections: [{
              title: "Opções",
              rows: [{
                rowId: prefix + "respaki 0",
                title: "Sim",
                description: ""
              }, {
                rowId: prefix + "respaki 1",
                title: "Não",
                description: ""
              }, {
                rowId: prefix + "respaki 2",
                title: "Não sei",
                description: ""
              }, {
                rowId: prefix + "respaki 3",
                title: "Provavelmente sim",
                description: ""
              }, {
                rowId: prefix + "respaki 4",
                title: "Provavelmente não",
                description: ""
              }]
            }]
          };
          vVO1334 = vO725;
          sock.sendMessage(from, vVO1334);
        }
        break;
      case "akinator":
        const vO726 = {
          buttonId: "akinator sim",
          buttonText: {},
          type: 1
        };
        vO726.buttonText.displayText = "Sim";
        const vO727 = {
          buttonId: "akinator nao",
          buttonText: {},
          type: 1
        };
        vO727.buttonText.displayText = "Não";
        buttons_opts = [vO726, vO727];
        sendbuttonsMessage = {
          image: fs.readFileSync("./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg"),
          caption: "Olá, sou o akinator",
          footer: "Vamos jogar um jogo?",
          buttons: buttons_opts,
          headerType: 1
        };
        sock.sendMessage(from, sendbuttonsMessage);
        break;
      case "resetforca":
        if (!v165) {
          return reply("*Você não iniciou uma partida, para iniciar dê o comando " + prefix + "jogodaforca*");
        }
        pla_pos = vA11.indexOf(sender);
        forca.splice(pla_pos, 1);
        fs.writeFileSync("./funções/database/forca.json", JSON.stringify(forca, null, 2));
        reply("*Jogo da forca reiniciado com sucesso. Para iniciar outra partida dê o comando " + prefix + "jogodaforca*");
        break;
      case "forca":
        if (!v165) {
          return reply("*Você não iniciou uma partida, para iniciar dê o comando " + prefix + "jogodaforca*");
        }
        if (args.length < 1) {
          return reply("*Dê o comando mais a letra para advinhar*");
        }
        if (args[0].trim().length < 2) {
          p_pos = vA11.indexOf(sender);
          find = forca[p_pos].word.match(args[0].toLowerCase());
          is_correct = false;
          while (find != null) {
            res_tmp = forca[p_pos].word.indexOf(args[0].toLowerCase());
            forca[p_pos].array_under_word[res_tmp] = args[0].toLowerCase();
            forca[p_pos].array_word[res_tmp] = 0;
            forca[p_pos].word = forca[p_pos].word.replace(args[0].toLowerCase(), 0);
            find = forca[p_pos].word.match(args[0].toLowerCase());
            is_correct = true;
          }
          if (is_correct) {
            str_under = "";
            for (i = 0; i < forca[p_pos].array_under_word.length; ++i) {
              str_under += forca[p_pos].array_under_word[i];
            }
            attempts = forca[p_pos].attempts;
            if (str_under == forca[p_pos].word_original) {
              reply("*Parabéns, Você venceu o jogo!✅🥳*\n\n" + puppet[attempts] + "\n\n_*Palavra: " + str_under.split("").join(" ") + "*_");
              forca.splice(p_pos, 1);
              fs.writeFileSync("./funções/database/forca.json", JSON.stringify(forca, null, 2));
            } else {
              reply("*Você acertou!✅*\n\n" + puppet[attempts] + "\n\n_*Palavra: " + str_under.split("").join(" ") + "*_\n*Você tem " + attempts + " chances*");
              fs.writeFileSync("./funções/database/forca.json", JSON.stringify(forca, null, 2));
            }
          } else {
            str_under = "";
            for (i = 0; i < forca[p_pos].array_under_word.length; ++i) {
              str_under += forca[p_pos].array_under_word[i];
            }
            forca[p_pos].attempts -= 1;
            attempts = forca[p_pos].attempts;
            if (forca[p_pos].attempts <= 0) {
              forca.splice(p_pos, 1);
              fs.writeFileSync("./funções/database/forca.json", JSON.stringify(forca, null, 2));
              reply("*Você perdeu o jogo!❌*\n\n" + puppet[attempts] + "\n\n*Palavra: " + str_under.split("").join(" ") + "*\n*Suas chances se esgotaram*");
            } else {
              reply("*Você errou!❌*\n\n" + puppet[attempts] + "\n\n*Palavra: " + str_under.split("").join(" ") + "*\n*Você tem " + attempts + " chances*");
              fs.writeFileSync("./funções/database/forca.json", JSON.stringify(forca, null, 2));
            }
          }
        } else {
          p_pos = vA11.indexOf(sender);
          if (forca[p_pos].word_original == args[0].toLowerCase()) {
            attempts = forca[p_pos].attempts;
            reply("*Parabéns, Você venceu o jogo!✅🥳*\n\n" + puppet[attempts] + "\n\n_*Palavra: " + forca[p_pos].word_original.split("").join(" ") + "*_");
            forca.splice(p_pos, 1);
            fs.writeFileSync("./funções/database/forca.json", JSON.stringify(forca, null, 2));
          } else {
            str_under = "";
            for (i = 0; i < forca[p_pos].array_under_word.length; ++i) {
              str_under += forca[p_pos].array_under_word[i];
            }
            forca[p_pos].attempts -= 1;
            attempts = forca[p_pos].attempts;
            if (forca[p_pos].attempts <= 0) {
              forca.splice(p_pos, 1);
              fs.writeFileSync("./funções/database/forca.json", JSON.stringify(forca, null, 2));
              reply("*Você perdeu o jogo!❌*\n\n" + puppet[attempts] + "\n\n*Palavra: " + str_under.split("").join(" ") + "*\n*Suas chances se esgotaram*");
            } else {
              reply("*Você errou!❌*\n\n" + puppet[attempts] + "\n\n*Palavra: " + str_under.split("").join(" ") + "*\n*Você tem " + attempts + " chances*");
              fs.writeFileSync("./funções/database/forca.json", JSON.stringify(forca, null, 2));
            }
          }
        }
        break;
      case "créditos":
      case "creditos":
      case "agradecimentos":
        try {
          ppimg = await conn.profilePictureUrl("https://telegra.ph/file/db0956276ed548db4aa21.jpg", "image");
        } catch {
          ppimg = "https://telegra.ph/file/db0956276ed548db4aa21.jpg";
        }
        const vLSITOSDCrJGbrKGtY2TDfw = "\n   『 ᗩＧᖇᗩᗞᕮᑕIᗰᕮᘉTOS 』\n┎┳━┅┅┄┈┄✧┈┈✦❖✦\n┋┃ 👥 Dᥲᥒιᥱᥣ\n┋┃ 👥 Cᥲrᥣ᥆᥉\n┋┃ 👥 J᥆᥉ᥙᥱ́\n┋┃ 👥 Gᥲbrιᥱᥣ\n┋┃ 👥 Kᥱ᥎ιᥒ\n┋┃ 👥 Gᥙ᥉tᥲ᥎᥆\n┋┃ 👥 ᖇYᗩᘉ\n┋┃ 👥 ᑭᒪ 2ᗩ.Tᖇᕮᗰ\n┋┃\n┋┃D᥆ᥒ᥆ ᥆fιᥴιᥲᥣ: \n┋┃wa.me/5521964523665\n┖┻━┅┅┄┈┄✧┈┈✦❖✦";
        daftarimg = await getBuffer(ppimg);
        const vO728 = {
          image: daftarimg,
          caption: vLSITOSDCrJGbrKGtY2TDfw
        };
        const vO729 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO728, vO729);
        break;
      case "menugerar":
        const vO730 = {
          title: "⚙️ 𝗧𝗢𝗗𝗢𝗦 𝗚𝗘𝗥𝗔𝗗𝗢𝗥𝗘𝗦 ⚙️",
          rows: [{
            title: "🟦 Gerar Contas Da Disney 🟦",
            rowId: prefix + "gerardisney",
            description: "📥"
          }, {
            title: "🟪 Gerar Contas Da HBO MAX 🟪",
            rowId: prefix + "gerarhbo",
            description: "📥"
          }, {
            title: "🟧 Gerar Contas Da Star + 🟧",
            rowId: prefix + "gerarstar",
            description: "📥"
          }, {
            title: "⬛ Gerar Contas Da Deezer ⬛",
            rowId: prefix + "gerardeezer",
            description: "📥"
          }]
        };
        const vO731 = {
          title: "=================",
          rows: [{
            title: "↩️ Voltar ao menu",
            rowId: prefix + "menu"
          }]
        };
        var vA44 = [vO730, vO731];
        const vO732 = {
          text: "by: Nezuko-MD",
          title: "🔰𝗟𝗶𝘀𝘁𝗮 𝗚𝗲𝗿𝗮𝗱𝗼𝗿𝗲𝘀🔰\n\nMᴇɴᴜ Gᴇʀᴀᴅᴏʀᴇs ✅\n",
          buttonText: "𝙑𝙚𝙧 𝙂𝙚𝙧𝙖𝙙𝙤𝙧𝙚𝙨",
          sections: vA44
        };
        const vVO732 = vO732;
        const vO733 = {
          quoted: vVO27
        };
        const v323 = await sock.sendMessage(from, vVO732, vO733);
      case "addhbo":
        if (!isPremium && !mek.key.fromMe && !addcontas) {
          return reply(enviar.msg.donosmt);
        }
        v427 = hbo.includes(q);
        if (v427) {
          return reply("*Esta conta ja foi adicionada..*");
        }
        hbo.push("" + q);
        fs.writeFileSync("./datab/hbo.json", JSON.stringify(hbo));
        const vO734 = {
          text: q + "\n foi adicionado à lista de hbo com sucesso"
        };
        const vO735 = {
          quoted: mek
        };
        sock.sendMessage(from, vO734, vO735);
        break;
      case "delhbo":
        if (!isPremium && !mek.key.fromMe && !addcontas) {
          return reply(enviar.msg.donosmt);
        }
        v427 = hbo.includes(q);
        if (!v427) {
          return reply("*Esta conta ja foi adicionada..*");
        }
        pesquisar = q;
        processo = hbo.indexOf(pesquisar);
        while (processo >= 0) {
          hbo.splice(processo, 1);
          processo = hbo.indexOf(pesquisar);
        }
        fs.writeFileSync("./datab/hbo.json", JSON.stringify(hbo));
        const vO736 = {
          text: " " + q + "\n foi tirado da lista de hbo com sucesso.."
        };
        const vO737 = {
          quoted: mek
        };
        sock.sendMessage(from, vO736, vO737);
        break;
      case "addstar":
        if (!isPremium && !mek.key.fromMe && !addcontas) {
          return reply(enviar.msg.donosmt);
        }
        v427 = star.includes(q);
        if (v427) {
          return reply("*Esta conta ja foi adicionada..*");
        }
        star.push("" + q);
        fs.writeFileSync("./datab/star.json", JSON.stringify(star));
        const vO738 = {
          text: q + "\n foi adicionado à lista de star com sucesso"
        };
        const vO739 = {
          quoted: mek
        };
        sock.sendMessage(from, vO738, vO739);
        break;
      case "delstar":
        if (!isPremium && !mek.key.fromMe && !addcontas) {
          return reply(enviar.msg.donosmt);
        }
        v427 = star.includes(q);
        if (!v427) {
          return reply("*Esta conta ja foi adicionada..*");
        }
        pesquisar = q;
        processo = star.indexOf(pesquisar);
        while (processo >= 0) {
          star.splice(processo, 1);
          processo = star.indexOf(pesquisar);
        }
        fs.writeFileSync("./datab/star.json", JSON.stringify(star));
        const vO740 = {
          text: " " + q + "\n foi tirado da lista de star com sucesso.."
        };
        const vO741 = {
          quoted: mek
        };
        sock.sendMessage(from, vO740, vO741);
        break;
      case "adddeezer":
        if (!isPremium && !mek.key.fromMe && !addcontas) {
          return reply(enviar.msg.donosmt);
        }
        v427 = deezer.includes(q);
        if (v427) {
          return reply("*Esta conta ja foi adicionada..*");
        }
        deezer.push("" + q);
        fs.writeFileSync("./datab/deezer.json", JSON.stringify(deezer));
        const vO742 = {
          text: q + "\n foi adicionado à lista de deezer com sucesso"
        };
        const vO743 = {
          quoted: mek
        };
        sock.sendMessage(from, vO742, vO743);
        break;
      case "deldeezer":
        if (!isPremium && !mek.key.fromMe && !addcontas) {
          return reply(enviar.msg.donosmt);
        }
        v427 = deezer.includes(q);
        if (!v427) {
          return reply("*Esta conta ja foi adicionada..*");
        }
        pesquisar = q;
        processo = deezer.indexOf(pesquisar);
        while (processo >= 0) {
          deezer.splice(processo, 1);
          processo = deezer.indexOf(pesquisar);
        }
        fs.writeFileSync("./datab/deezer.json", JSON.stringify(deezer));
        const vO744 = {
          text: " " + q + "\n foi tirado da lista de deezer com sucesso.."
        };
        const vO745 = {
          quoted: mek
        };
        sock.sendMessage(from, vO744, vO745);
        break;
      case "adddisney":
        const v324 = disney.length;
        if (!isPremium && !mek.key.fromMe && !addcontas) {
          return reply(enviar.msg.donosmt);
        }
        v427 = disney.includes(q);
        if (v427) {
          return reply("*Esta conta ja foi adicionada..*");
        }
        disney.push("" + q);
        fs.writeFileSync("./datab/disney.json", JSON.stringify(disney));
        const vO746 = {
          text: q + "\n\n foi adicionado à lista de disney com sucesso, total de contas: " + v324
        };
        const vO747 = {
          quoted: mek
        };
        sock.sendMessage(from, vO746, vO747);
        break;
      case "deldisney":
        if (!isPremium && !mek.key.fromMe && !addcontas) {
          return reply(enviar.msg.donosmt);
        }
        v427 = disney.includes(q);
        if (!v427) {
          return reply("*Esta conta ja foi adicionada..*");
        }
        pesquisar = q;
        processo = disney.indexOf(pesquisar);
        while (processo >= 0) {
          disney.splice(processo, 1);
          processo = disney.indexOf(pesquisar);
        }
        fs.writeFileSync("./datab/disney.json", JSON.stringify(disney));
        const vO748 = {
          text: " " + q + "\n foi tirado da lista de disney com sucesso.."
        };
        const vO749 = {
          quoted: mek
        };
        sock.sendMessage(from, vO748, vO749);
        break;
      case "gerardisney":
        const vO750 = {
          buttonId: prefix + "tchau",
          buttonText: {
            displayText: "Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
          },
          type: 1
        };
        if (!isPremium) {
          return sendButtons(from, "🛑 ️PARADO AI 🛑️", "‼️" + pushname + " Você não tem permissão para gerar contas‼️", [vO750], vVO27);
        }
        var vA48 = [""];
        const v325 = disney[Math.floor(Math.random() * disney.length)];
        const vO751 = {
          buttonId: prefix + "gerardisney " + q,
          buttonText: {
            displayText: "Gerar Outra Conta‼️"
          },
          type: 1
        };
        sendButtons(from, "✅ DISNEY GERADA COM SUCESSO!\n️", "" + v325, [vO751], vVO27);
        const vO752 = {
          text: ".deldisney " + v325
        };
        sock.sendMessage(sock.user.id, vO752);
        break;
      case "totaldisney":
        const v326 = disney.length;
        reply("" + v326);
        break;
      case "gerarstar":
        const vO753 = {
          buttonId: prefix + "tchau",
          buttonText: {
            displayText: "Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
          },
          type: 1
        };
        if (!isPremium) {
          return sendButtons(from, "🛑 ️PARADO Ai 🛑️", "‼️" + pushname + " Você não tem permissão para gerar contas‼️", [vO753], vVO27);
        }
        var vA48 = [""];
        const v327 = star[Math.floor(Math.random() * star.length)];
        const vO754 = {
          buttonId: prefix + "gerarstar " + q,
          buttonText: {
            displayText: "Gerar Outra Conta‼️"
          },
          type: 1
        };
        sendButtons(from, "✅ STAR + GERADA COM SUCESSO!\n️", "" + v327, [vO754], vVO27);
        break;
      case "gerarhbo":
        const vO755 = {
          buttonId: prefix + "tchau",
          buttonText: {
            displayText: "Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
          },
          type: 1
        };
        if (!isPremium) {
          return sendButtons(from, "🛑 ️PARADO Ai 🛑️", "‼️" + pushname + " Você não tem permissão para gerar contas‼️", [vO755], vVO27);
        }
        var vA48 = [""];
        const v328 = hbo[Math.floor(Math.random() * hbo.length)];
        const vO756 = {
          buttonId: prefix + "gerarhbo " + q,
          buttonText: {
            displayText: "Gerar Outra Conta‼️"
          },
          type: 1
        };
        sendButtons(from, "✅ HBO MAX GERADA COM SUCESSO!\n️", "" + v328, [vO756], vVO27);
        break;
      case "gerardeezer":
        const vO757 = {
          buttonId: prefix + "tchau",
          buttonText: {
            displayText: "Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
          },
          type: 1
        };
        if (!isPremium) {
          return sendButtons(from, "🛑 ️PARADO Ai 🛑️", "‼️" + pushname + " Você não tem permissão para gerar contas‼️", [vO757], vVO27);
        }
        var vA48 = [""];
        const v329 = deezer[Math.floor(Math.random() * deezer.length)];
        const vO758 = {
          buttonId: prefix + "gerardeezer " + q,
          buttonText: {
            displayText: "Gerar Outra Conta‼️"
          },
          type: 1
        };
        sendButtons(from, "✅ DEEZER GERADA COM SUCESSO!\n️", "" + v329, [vO758], vVO27);
        break;
      case "gerarcpf":
        if (!v44) {
          return reply(mess.msg.premium);
        }
        send = await fetchJson("https://nezsab-apis.xyz/api/gerarcpf?apikey=" + keyapi);
        teks = "⚙ *GERADOR DE CPF* ⚙\n➸ CPF: " + send.CPF + "\n\n🔛 *BY:* Nezuko-MD";
        const vO759 = {
          text: teks
        };
        const vO760 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO759, vO760);
        break;
      case "gerarcnpj":
        if (!v44) {
          return reply(mess.msg.premium);
        }
        send = await fetchJson("https://nezsab-apis.xyz/api/gerarcnpj?apikey=" + keyapi);
        teks = "⚙ *GERADOR DE CNPJ* ⚙\n➸ CNPJ: " + send.certidao + "\n\n🔛 *BY:* Nezuko-MD";
        const vO761 = {
          text: teks
        };
        const vO762 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO761, vO762);
        break;
      case "gerarcertidão":
      case "gerarcertidao":
        if (!v44) {
          return reply(mess.msg.premium);
        }
        send = await fetchJson("https://nezsab-apis.xyz/api/gerarcertidao?apikey=" + keyapi);
        teks = "⚙ *GERADOR DE CERTIDÃO* ⚙\n➸ CERTIDÃO: " + send.certidao + "\n\n🔛 *BY:* Nezuko-MD";
        const vO763 = {
          text: teks
        };
        const vO764 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO763, vO764);
        break;
      case "gerarcnh":
        if (!v44) {
          return reply(mess.msg.premium);
        }
        send = await fetchJson("https://nezsab-apis.xyz/api/gerarcnh?apikey=" + keyapi);
        teks = "⚙ *GERADOR DE CNH* ⚙\n➸ CNH: " + send.CNH + "\n\n🔛 *BY:* Nezuko-MD";
        const vO765 = {
          text: teks
        };
        const vO766 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO765, vO766);
        break;
      case "gcrlv":
      case "gerarcrlv":
        try {
          if (!v44) {
            return reply(mess.msg.premium);
          }
          reply("*Estou gerando, se der erro tente novamente ✓*");
          anu = await fetchJson("http://brizas-api.herokuapp.com/gerador/crlv?apikey=brizaloka");
          crlv = "⚙ *GERADOR DOCUMENTO DE VEÍCULO* ⚙\n\n➸ *PLACA:* " + anu.result.placa + "\n➸ *CHASSI:* " + anu.result.chassi + "\n➸ *MARCA:* " + anu.result.marca + "\n➸ *MODELO:* " + anu.result.modelo + "\n➸ *CATEGORIA:* " + anu.result.categoria + "\n➸ *ESPÉCIE:* " + anu.result.especie + "\n➸ *RESTRIÇÃO:* " + anu.result.restricao + "\n➸ *TIPO:* " + anu.result.tipo + "\n➸ *CARROCERIA:* " + anu.result.carroceria + "\n➸ *COMBUSTÍVEL:* " + anu.result.combustivel + "\n➸ *COR:* " + anu.result.cor + "\n\n🔛 *BY:* Nezuko-MD";
          const vO767 = {
            text: crlv
          };
          const vO768 = {
            quoted: mek
          };
          sock.sendMessage(from, vO767, vO768);
        } catch (e90) {
          console.error(e90);
          reply("*• NÃO FOI POSSÍVEL GERAR!*");
        }
        break;
      case "gerarrenavam":
        if (!v44) {
          return reply(mess.msg.premium);
        }
        send = await fetchJson("https://nezsab-apis.xyz/api/gerarrenavam?apikey=" + keyapi);
        teks = "⚙ *GERADOR DE RENAVAM* ⚙\n\n➸ RENAVAM: " + send.RENAVAM + "\n\n🔛 *BY:* Nezuko-MD";
        const vO769 = {
          text: teks
        };
        const vO770 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO769, vO770);
        break;
      case "gerarprocesso":
        if (!v44) {
          return reply(mess.msg.premium);
        }
        send = await fetchJson("https://nezsab-apis.xyz/api/gerarprocesso?apikey=" + keyapi);
        teks = "⚙ *GERADOR DE PROCESSO* ⚙\n➸ NÚMERO DO PROCESSO: " + send.processo_judicial + "\n\n🔛 *BY:* Nezuko-MD";
        const vO771 = {
          text: teks
        };
        const vO772 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO771, vO772);
        break;
      case "gerarcnae":
        if (!v44) {
          return reply(mess.msg.premium);
        }
        send = await fetchJson("https://nezsab-apis.xyz/api/gerarcnae?apikey=" + keyapi);
        teks = "⚙ *GERADOR DE CNAE* ⚙\n➸ NÚMERO DO PROCESSO: " + send.CNAE + "\n\n🔛 *BY:* Nezuko-MD";
        const vO773 = {
          text: teks
        };
        const vO774 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO773, vO774);
        break;
      case "gerarpessoa":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        send = await fetchJson("https://apirest.gestorvip.com/api/gerarpessoa?apikey=Toms123");
        teks = "⚙ *GERADOR DE PESSOA* ⚙\n\n➸ NOME: " + send.nome + "\n➸ CPF: " + send.cpf + "\n➸ CEP: " + send.cep + "\n\n🔛 *BY:* Nezuko-MD";
        const vO775 = {
          text: teks
        };
        const vO776 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO775, vO776);
        break;
      case "gerarpessoa2":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        send = await fetchJson("https://apirest.gestorvip.com/api/gerarpessoa2?apikey=Toms123");
        teks = "⚙ *GERADOR DE PESSOA* ⚙\n\n➸ NOME: " + send.nome + "\n➸ MÃE: " + send.mae + "\n➸ CPF: " + send.cpf + "\n➸ NASCIMENTO: " + send.nascimento + "\n➸ CEP: " + send.cep + "\n➸ COMPLEMENTO: " + send.complemento + "\n➸ BAIRRO: " + send.bairro + "\n➸ MUNICÍPIO: " + send.municipio + "\n➸ SIGLA DO ESTADO: " + send.uf + "\n\n🔛 *BY:* Nezuko-MD";
        const vO777 = {
          text: teks
        };
        const vO778 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO777, vO778);
        break;
      case "gerarpessoa3":
        try {
          if (!v44) {
            return reply(mess.msg.premium);
          }
          anu = await fetchJson("http://brizas-api.herokuapp.com/gerador/pessoa?apikey=brizaloka");
          gerarpessoa = "⚙ *GERADOR DE PESSOA* ⚙\n\n➸ *NOME:* " + anu.resultado.nome + "\n➸ *NOME DA MÃE:* " + anu.resultado.mae + "\n➸ *NOME DO PAI:* " + anu.resultado.pai + "\n➸ *RG:* " + anu.resultado.RG + "\n➸ *CPF:* " + anu.resultado.CPF + "\n➸ *NÚMERO DE TELEFONE:* " + anu.resultado.telefonde + "\n➸ *DATA DE NASCIMENTO:* " + anu.resultado.nascimento + "\n➸ *SIGNO:* " + anu.resultado.signo + "\n➸ *ALTURA:* " + anu.resultado.altura + "\n➸ *CIDADE:* " + anu.resultado.endereco.cidade + "\n➸ *BAIRRO:* " + anu.resultado.endereco.bairro + "\n➸ *ESTADO:*" + anu.resultado.endereco.estado + "\n\n🔛 *BY:* Nezuko-MD";
          const vO779 = {
            text: gerarpessoa
          };
          const vO780 = {
            quoted: mek
          };
          sock.sendMessage(from, vO779, vO780);
        } catch (e91) {
          console.error(e91);
          reply("*• NÃO FOI POSSÍVEL GERAR!*");
        }
        break;
      case "gempresa":
      case "gerarempresa":
        try {
          if (!v44) {
            return reply(mess.msg.premium);
          }
          anu = await fetchJson("http://brizas-api.herokuapp.com/gerador/empresa?apikey=brizaloka");
          gerarpessoa = "⚙ *GERADOR DE EMPRESA* ⚙\n\n➸ *Nome:* " + anu.result.nome + "\n➸ *E-mail:* " + anu.result.email + "\n➸ *INSCRIÇÃO ESTADUAL:* " + anu.result.inscricaoestadual + "\n➸ *CNPJ:* " + anu.result.cnpj + "\n➸ *CEP:* " + anu.result.endereco.cep + "\n➸ *LOGRADOURO:* " + anu.result.endereco.logradouro + "\n➸ *COMPLEMENTO:* " + anu.result.endereco.complemento + "\n➸ *NÚMERO:* " + anu.result.endereco.numero + "\n➸ *BAIRRO:* " + anu.result.endereco.bairro + "\n➸ *CIDADE:* " + anu.result.endereco.cidade + "\n➸ *ESTADO:* " + anu.result.endereco.estado + "\n➸ *ESTADO SIGLA:* " + anu.result.endereco.estadoSigla + "\n➸ *TELEFONE:* " + anu.result.telefone + "\n➸ *CELULAR:* " + anu.result.celular + "\n➸ *DATA DE ABERTURA:* " + anu.result.dataAbertura + "\n\n🔛 *BY:* Nezuko-MD";
          const vO781 = {
            text: gerarpessoa
          };
          const vO782 = {
            quoted: mek
          };
          sock.sendMessage(from, vO781, vO782);
        } catch (e92) {
          console.error(e92);
          reply("*NÃO FOI POSSÍVEL GERAR!*");
        }
        break;
      case "gerarcarro":
        if (!v44) {
          return reply(mess.msg.premium);
        }
        send = await fetchJson("https://nezsab-apis.xyz/api/gerarcarro?apikey=" + keyapi);
        teks = "⚙ *GERADOR DE CARRO* ⚙\n\nModelo: " + send.result.modelo + "\nMarca: " + send.result.marca + "\nCor: " + send.result.cor + "\nPlaca: " + send.result.placa + "\nChassi: " + send.result.chassi + "\nCategoria: " + send.result.categoria + "\nEspecie: " + send.result.especie + "\nRestrição: " + send.result.restricao + "\nTipo: " + send.result.tipo + "\nCarroceria: " + send.result.carroceria + "\nCombustível: " + send.result.combustivel + "\n\n🔛 *BY:* Nezuko-MD";
        const vO783 = {
          text: teks
        };
        const vO784 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO783, vO784);
        break;
      case "dadosfake":
        if (!v44) {
          return reply(mess.msg.premium);
        }
        send = await fetchJson("https://nezsab-apis.xyz/api/dadosfake?apikey=" + keyapi);
        teks = "⚙ *GERADOR DE DADOS* ⚙\n\nNome: " + send.resultado.nome + "\nMãe: " + send.resultado.mae + "\nPai: " + send.resultado.pai + "\nRg: " + send.resultado.RG + "\nCpf: " + send.resultado.CPF + "\nTelefone: " + send.resultado.telefonde + "\nSigno: " + send.resultado.signo + "\nAltura: " + send.resultado.altura + "\nPeso: " + send.resultado.peso + "\nTipo Sanguíneo: " + send.resultado.tipoSanguineo + "\nCep: " + send.resultado.endereco.cep + "\nLagradouro: " + send.resultado.endereco.logradouro + "\nComplemento: " + send.resultado.endereco.complemento + "\nNúmero: " + send.resultado.endereco.numero + "\nBairro: " + send.resultado.endereco.bairro + "\nCidade: " + send.resultado.endereco.cidade + "\nEstado: " + send.resultado.endereco.estado + "\nSigla do estado: " + send.resultado.endereco.estadoSigla + "\n\n🔛 *BY:* Nezuko-MD";
        const vO785 = {
          text: teks
        };
        const vO786 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO785, vO786);
        break;
      case "blockpv":
        {
          reply("<❗> Usuario bloqueado com sucesso.");
          if (!isPremium) {
            return reply(mess.owner);
          }
          let v330 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : v21.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (v330 === "@s.whatsapp.net") {
            return reply("Marca Alguem ou coloca o numero");
          }
          if (v330.length < 20) {
            return reply("Insira um Numero Valido");
          }
          if (v19.includes(v330)) {
            return reply("Não sou besta de banir eu mesmo né 🙁, mas estou decepcionado com você");
          }
          if (vA3.includes(v330)) {
            return reply("Não posso banir meu dono 🤧");
          }
          try {
            await sock.updateBlockStatus(v330, "block");
          } catch {
            await reply("erro ao banir");
          }
        }
        break;
      case "unblockpv":
        {
          reply("<❗> Usuario desbloqueado com sucesso.");
          if (!isPremium) {
            return reply(mess.owner);
          }
          let v331 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : v21.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (v331 === "@s.whatsapp.net") {
            return reply("Marca Alguem ou coloca o numero");
          }
          if (v331.length < 20) {
            return reply("Insira um Numero Valido");
          }
          if (v19.includes(v331)) {
            return reply("Como eu vou me desbanir Jegue?");
          }
          try {
            await sock.updateBlockStatus(v331, "unblock");
          } catch {
            await reply("Erro ao Desbanir");
          }
        }
        break;
      case "blocklist":
        if (!isPremium && !v42) {
          return reply(enviar.msg.donosmt);
        }
        jrc = "ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n";
        for (let v332 of ban) {
          jrc += "~> @" + v332.split("@")[0] + "\n";
        }
        jrc += "Total : " + ban.length;
        sock.sendMessage(from, {
          text: jrc.trim(),
          mentions: ban
        });
        break;
        __________________________________________;
      case "cantada":
        reply("*Ei " + pushname + " já estou fazendo a sua cantada...* Enquanto isso tome um café☕");
        sendee = await axios.get("https://lzmods-api.tk/api/tools/cantadas?apikey=lz");
        cantada = "*Conquista a novinha com essa:* " + sendee.data.resultado.cantada;
        const vO787 = {
          text: cantada
        };
        const vO788 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO787, vO788);
        break;
      case "cantada2":
      case "cantadas":
        {
          var v333 = cantadas[Math.floor(Math.random() * cantadas.length)];
          let vA49 = [{
            buttonId: "" + (prefix + command),
            buttonText: {
              displayText: " Proxima Cantada "
            },
            type: 1
          }];
          const vO789 = {
            text: "*Uma cantada para conquistar a novinha:* " + v333,
            footer: "Usuario: " + pushname + "\nBot: " + NomeDoBot,
            buttons: vA49,
            headerType: 2
          };
          let vVO789 = vO789;
          const vO790 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO789, vO790);
        }
        break;
      case "fuckmylife":
        {
          api = await fetchJson("http://nezsab-api2.herokuapp.com/api/fuckmylife?apikey=" + keyapi);
          let vA50 = [{
            buttonId: "" + (prefix + command),
            buttonText: {
              displayText: "✰ۣۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐎-𝐑𝐄𝐋𝐀𝐓𝐎😱"
            },
            type: 1
          }];
          const vO791 = {
            text: api.resultado + ".",
            footer: "Usuário: " + pushname + "\nBot: " + NomeDoBot,
            buttons: vA50,
            headerType: 2
          };
          let vVO791 = vO791;
          const vO792 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO791, vO792);
        }
        break;
      case "jogodaforca":
        if (v165) {
          return reply("*Termine a partida iniciada para jogar uma nova, ou dê o comando " + p + "resetforca*");
        }
        if (!v84) {
          return reply(mensagem[0].game);
        }
        word_correct = (await f9()).slice(1).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        under_word = "-".repeat(word_correct.length);
        forca.push({
          id: sender,
          word_original: word_correct,
          word: word_correct,
          under_word: under_word,
          array_word: Array.from(word_correct),
          array_under_word: Array.from(under_word),
          tam: word_correct.length,
          attempts: 6
        });
        fs.writeFileSync("./funções/database/forca.json", JSON.stringify(forca, null, 2));
        reply("*Jogo da forca iniciado!✅*\n\n*Palavra: " + under_word.split("").join(" ") + "*\n*Para advinhar uma letra , dê o comando " + prefix + "forca mais a letra*");
        break;
      case "reagir":
        {
          if (!isPremium) {
            return m.reply("<❗> Somente meu dono pode usar esse comando.");
          }
          const vO793 = {
            remoteJid: m.chat,
            fromMe: true,
            id: quoted.id
          };
          const vO794 = {
            text: args[0],
            key: vO793
          };
          const vO795 = {
            react: vO794
          };
          reactionMessage = vO795;
          sock.sendMessage(m.chat, reactionMessage);
        }
        break;
      case "jogodavelha":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        if (!isGroup) {
          return reply("comando apenas para grupos");
        }
        joguinhodavelhajs.push(sender);
        fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha.json", JSON.stringify(joguinhodavelhajs));
        joguinhodavelhajs2.push(from);
        fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha2.json", JSON.stringify(joguinhodavelhajs2));
        if (fs.existsSync("./funções de cmd/tictactoe/db/" + from + ".json")) {
          const vSetGame3 = setGame("" + from);
          const v334 = vSetGame3._matrix;
          const v335 = "*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n     \n<❗> Alguém está jogando no momento...\n\n@" + vSetGame3.X + " VS @" + vSetGame3.O + "\n     \n❌ : @" + vSetGame3.X + "\n⭕ : @" + vSetGame3.O + "\n     \n Sua vez : @" + (vSetGame3.turn == "X" ? vSetGame3.X : vSetGame3.O) + "\n     \n" + v334[0][0] + "  " + v334[0][1] + "  " + v334[0][2] + "\n" + v334[1][0] + "  " + v334[1][1] + "  " + v334[1][2] + "\n" + v334[2][0] + "  " + v334[2][1] + "  " + v334[2][2] + "\n";
          const vO796 = {
            text: v335
          };
          sock.sendMessage(from, vO796, {
            quoted: vVO27,
            contextInfo: {
              mentionedJid: [vSetGame3.X + "@s.whatsapp.net", vSetGame3.O + "@s.whatsapp.net"]
            }
          });
          return;
        }
        if (v35.length === 1) {
          return reply("*⟅❗⟆ Jogue com Alguem!!!!*\n*para inicar a partida : " + (prefix + command) + " @membro do gp*");
        }
        const vSetGame4 = setGame("" + from);
        console.log("Start No jogodavelha " + vSetGame4.session);
        vSetGame4.status = false;
        vSetGame4.X = sender.replace("@s.whatsapp.net", "");
        vSetGame4.O = v35[1].replace("@", "");
        fs.writeFileSync("./funções de cmd/tictactoe/db/" + from + ".json", JSON.stringify(vSetGame4, null, 2));
        const v336 = "*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*\n     \n@" + sender.replace("@s.whatsapp.net", "") + " _está te desafiando para uma partida de jogo da velha..._\n_[ " + v35[1] + " ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n     ";
        const vO797 = {
          text: v336
        };
        sock.sendMessage(from, vO797, {
          quoted: vVO27,
          contextInfo: {
            mentionedJid: [sender, v35[1].replace("@", "") + "@s.whatsapp.net"]
          }
        });
        break;
      case "resetarvelha":
      case "resetavelha":
      case "resetarv":
      case "resetav":
      case "resetvelha":
      case "rv":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        if (!v63 && !isGroupAdmins) {
          return reply("Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM");
        }
        if (fs.existsSync("./funções de cmd/tictactoe/db/" + from + ".json")) {
          fs.unlinkSync("./funções de cmd/tictactoe/db/" + from + ".json");
          reply("Jogo da velha resetado com sucesso nesse grupo!");
          joguinhodavelhajs.splice([]);
          fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha.json", JSON.stringify(joguinhodavelhajs));
          joguinhodavelhajs2.splice([]);
          fs.writeFileSync("./funções de cmd/usuarios/joguinhodavelha2.json", JSON.stringify(joguinhodavelhajs2));
        } else {
          reply("Não a nenhuma sessão em andamento...");
        }
        break;
      case "blockspam":
        if (!isPremium) {
          return m.reply("<❗> Somente meu dono pode usar esse comando.");
        }
        if (m.isGroup) {
          return reply("Apenas em privado");
        }
        if (!q) {
          return reply("Cadê a quantidade mn? 🤷‍♂?");
        }
        for (let v337 = "" + q; v337 !== 0; v337 -= 1) {
          sock.updateBlockStatus(from, "block");
          sock.updateBlockStatus(from, "unblock");
        }
        break;
      case "listajogos":
        const vO798 = {
          title: "➣ 𝐌𝐈𝐍𝐄𝐂𝐑𝐀𝐅𝐓 𝟏.𝟏𝟔.𝟐𝟐𝟏.𝟎𝟏",
          rowId: prefix + "jogo1",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO799 = {
          title: "➣️ 𝐃𝐑𝐀𝐆𝐎𝐍 𝐁𝐀𝐋𝐋 𝐙 - 𝐃𝐎𝐊𝐊𝐀𝐍",
          rowId: prefix + "jogo2",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO800 = {
          title: "️➣ 𝐆𝐓𝐀 𝐒𝐀𝐍 𝐀𝐍𝐃𝐑𝐄𝐀𝐒 𝐎𝐅𝐂",
          rowId: prefix + "jogo3",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO801 = {
          title: "️➣ 𝐆𝐓𝐀 𝐒𝐀 𝐋𝐄𝐆𝐄𝐍𝐃𝐀𝐃𝐎 𝐄𝐌 𝐏𝐓/𝐁𝐑",
          rowId: prefix + "jogo4",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO802 = {
          title: "➣ 𝐆𝐓𝐀 𝐒𝐀 𝐂𝐎𝐌 𝐌𝐎𝐃 𝐂𝐋𝐄𝐎",
          rowId: prefix + "jogo5",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO803 = {
          title: "➣ 𝐆𝐓𝐀 𝐒𝐀 𝐎𝐍𝐋𝐈𝐍𝐄",
          rowId: prefix + "jogo6",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO804 = {
          title: "️➣ 𝐆𝐓𝐀 𝐒𝐔𝐏𝐄𝐑 𝐋𝐈𝐓𝐄 + 𝐌𝐎𝐃 𝐂𝐋𝐄𝐎",
          rowId: prefix + "jogo7",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO805 = {
          title: "️➣ 𝐋𝐀𝐒𝐓 𝐃𝐀𝐘 𝐎𝐍 𝐄𝐀𝐑𝐓 𝐒𝐔𝐑𝐕𝐈𝐕𝐀𝐋",
          rowId: prefix + "jogo8",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO806 = {
          title: "️➣ 𝐁𝐎𝐌𝐁𝐄𝐑 𝐅𝐑𝐈𝐄𝐍𝐃𝐒 𝐌𝐎𝐃",
          rowId: prefix + "jogo9",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO807 = {
          title: "️➣ 𝐀𝐑𝐂𝐀𝐃𝐄 𝐇𝐔𝐍𝐓𝐄𝐑",
          rowId: prefix + "jogo10",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO808 = {
          title: "️➣ 𝐃𝐄𝐅𝐄𝐒𝐀 𝐃𝐄 𝐙𝐎𝐌𝐁𝐈𝐄 𝐎𝐂𝐈𝐎𝐒𝐎",
          rowId: prefix + "jogo11",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO809 = {
          title: "️➣ 𝐏𝐀𝐂-𝐌𝐀𝐍",
          rowId: prefix + "jogo12",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO810 = {
          title: "️➣ 𝐂𝐀𝐑 𝐃𝐑𝐈𝐕𝐈𝐍𝐆 𝐒𝐂𝐇𝐎𝐎𝐋 𝐒𝐈𝐌𝐔𝐋𝐀𝐓𝐎𝐑",
          rowId: prefix + "jogo13",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO811 = {
          title: "️➣ 𝐂𝐘𝐁𝐄𝐑 𝐅𝐈𝐆𝐇𝐓𝐄𝐑𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌",
          rowId: prefix + "jogo14",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO812 = {
          title: "➣ 𝐃𝐑𝐀𝐆 𝐑𝐀𝐂𝐈𝐍𝐆",
          rowId: prefix + "jogo15",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO813 = {
          title: "️➣ 𝐌𝐑. 𝐁𝐑𝐎𝐖",
          rowId: prefix + "jogo16",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO814 = {
          title: "️➣ 𝐀𝐈𝐑𝐏𝐎𝐑𝐓 𝐂𝐈𝐓𝐘",
          rowId: prefix + "jogo17",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO815 = {
          title: "➣ 𝐂𝐑𝐀𝐒𝐇 𝐁𝐀𝐍𝐃𝐈𝐂𝐎𝐎𝐓",
          rowId: prefix + "Jogo18",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO816 = {
          title: "️➣ 𝐑𝐄𝐀𝐋 𝐒𝐓𝐄𝐄𝐋 𝐖𝐎𝐑𝐋𝐃 𝐑𝐎𝐁𝐎𝐓 𝐁𝐎𝐗𝐈𝐍𝐆",
          rowId: prefix + "jogo19",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO817 = {
          title: "️➣ 𝐀𝐍𝐆𝐄𝐑 𝐎𝐅 𝐒𝐓𝐈𝐂𝐊𝐄𝐑",
          rowId: prefix + "jogo20",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO818 = {
          title: "️➣ 𝐀𝐍𝐆𝐑𝐘 𝐁𝐈𝐑𝐃𝐒 𝟐",
          rowId: prefix + "jogo21",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO819 = {
          title: "️➣ 𝐄𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐅𝐎𝐑𝐂𝐄 𝐆𝐑𝐎𝐔𝐏 𝟐 (𝐂𝐒)",
          rowId: prefix + "jogo22",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO820 = {
          title: "️➣ 𝐑𝐎𝐁𝐋𝐎𝐗",
          rowId: prefix + "jogo23",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO821 = {
          title: "️➣ 𝐂𝐒 𝐒𝐓𝐑𝐈𝐊𝐄𝐑",
          rowId: prefix + "jogo24",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO822 = {
          title: "️➣ 𝐃𝐑𝐄𝐀𝐌 𝐋𝐄𝐀𝐆𝐔𝐄 𝐒𝐎𝐂𝐂𝐄𝐑",
          rowId: prefix + "jogo25",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO823 = {
          title: "️➣ 𝐂𝐋𝐀𝐒𝐇 𝐎𝐅 𝐂𝐋𝐀𝐍𝐒",
          rowId: prefix + "jogo26",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO824 = {
          title: "️➣ 𝐂𝐑𝐈𝐌𝐈𝐍𝐀𝐋 𝐂𝐀𝐒𝐄 𝐏𝐀𝐑𝐈𝐒",
          rowId: prefix + "jogo27",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO825 = {
          title: "️➣ 𝐃𝐑𝐈𝐅𝐓 𝐌𝐀𝐗 𝐖𝐎𝐑𝐋𝐃",
          rowId: prefix + "jogo28",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO826 = {
          title: "️➣ 𝐃𝐎𝐖𝐍𝐇𝐈𝐋𝐋 𝐌𝐀𝐒𝐓𝐄𝐑𝐒",
          rowId: prefix + "jogo29",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO827 = {
          title: "️➣ 𝐌𝐎𝐍𝐎𝐏𝐎𝐋𝐘",
          rowId: prefix + "jogo30",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO828 = {
          title: "",
          rows: [vO798, vO799, vO800, vO801, vO802, vO803, vO804, vO805, vO806, vO807, vO808, vO809, vO810, vO811, vO812, vO813, vO814, vO815, vO816, vO817, vO818, vO819, vO820, vO821, vO822, vO823, vO824, vO825, vO826, vO827]
        };
        botaoale = [vO828];
        vF24(from, "© _Copyright by Nezuko-MD_", "", "️[🎮] 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐉𝐎𝐆𝐎𝐒 [🎮️]", "Selecione abaixo:", botaoale);
        break;
      case "jogo1":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣ *Minecraft:* https://www.mediafire.com/file/w9sms627ql2np6i/Minecraft_1.16.221.01_ByHT.apk/file\n");
        break;
      case "downloadbot":
      case "nezukolink":
      case "download-md":
        await reply("\nOlá aqui está o link de download da Nezuko bot V1, espero que você goste!\n👥 Número: @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/9nfwjo0p29y6bfp/nezuko-bot.zip/file?dkey=osxktmtheit&r=1371");
        break;
      case "jogo2":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣ *DragonBall Z - Dokkan:* https://www.mediafire.com/file/015ibjiljfkv7uo/Dokkan_v4_12_1_MOD.apk/file\n");
        break;
      case "jogo3":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣ *GTA SanAndreas:* https://www.mediafire.com/file/ln6r3kx0ie77r9t/GTA_San_Andreas_2021.zip/file\n");
        break;
      case "jogo4":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣ *GTA SA - Legendado em Português:* http://www.mediafire.com/file/7op13aup1ll7m9y/GTA_SA_COM_TRADU%25C3%2587%25C3%2583O_PT-BR.zip/file\n");
        break;
      case "jogo5":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣ *GTA SA com Mod Cleo:* http://www.mediafire.com/file/d8cfwzctx95x0dx/GTA_SA_v2.00_Mod_Cleo.zip/file\n");
        break;
      case "jogo6":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *GTA SA Online:* https://www.mediafire.com/file/0xccd5m0zwqstag/GTA_SA_ONLINE_SAMP_ByHT.zip/file\n");
        break;
      case "jogo7":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣ *GTA SuperLite + Mod Cleo:* http://www.mediafire.com/file/wdkg8pmndtihil3/GTA_SA_super_lite_mod_cleo_ByHT.zip/file\n");
        break;
      case "jogo8":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *LastDay on Eart Survival:* https://www.mediafire.com/file/k4pr6awvr5eb1ak/Last%20Day%20on%20Earth%201.17.7-mod.apk/file \n");
        break;
      case "jogo9":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *Bomber Friends MOD:* https://www.mediafire.com/file/dir8pwrb1mpm57w/Bomber_Friends_v4.10_MOD.apk/file\n");
        break;
      case "jogo10":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣ *Arcade Hunter:* https://www.mediafire.com/file/ugcdaclnpodtxxs/Arcade_Hunter-Sword%252CGun%252C_and_Magic_1.11.0-mod.apk/file\n");
        break;
      case "jogo11":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *Defesa de Zombie Ocioso:* https://www.mediafire.com/file/8422sjofw1cdnka/Zombie+Idle+Defense+1.5.79.229MOD-t.apk/file\n");
        break;
      case "jogo12":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Pac-Man:* https://www.mediafire.com/file/gxwy01ni99pcur2/PAC-MAN+9.2.7.10150MOD-t.apk/file\n");
        break;
      case "jogo13":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Car Driving School Simulator - APK:* https://www.mediafire.com/file/r6aps8mn6wqoabj/Car+Driving+School+Simulator+3.1.0.283MOD-t.apk/file\n⚠️ Obrigatório - OBB:\n\xA0https://www.mediafire.com/file/hcsb5tpr7byh8fg/com.boombitgames.DrivingSchoolParking.zip/file\n");
        break;
      case "jogo14":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Cyber Fighters Premium:* https://www.mediafire.com/file/4tmv2cdahvqamlx/Cyber+Fighters+Premium+1.11.35.68MOD-t.apk/file\n");
        break;
      case "jogo15":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Drag Racing:* https://www.mediafire.com/file/g88v399ks1fpnfq/drag-racing-mod_2.0.37.rar/file\n");
        break;
      case "jogo16":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *Mr. Brow:* https://www.mediafire.com/file/i0ii099sejk9fnk/Mr+Bow+4.15.75MOD-t.apk/file\n");
        break;
      case "jogo17":
        await reply("\nOLÁ *" + pushname + "* AKI ESTÁ SEU PEDIDO 🤙\n☔ *Número* : @" + sender.split("@")[0] + "\n\n➣️ *Airport City:* https://www.mediafire.com/file/vuupmpp3r03lso0/Airport+City+8.7.18.101418MOD-t.apk/file\n");
        break;
      case "jogo18":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *Crash Bandicoot:* https://www.mediafire.com/file/nyx8rjqn5m51o3r/Crash+Bandicoot+Mobile+v0.7.6242+Mod.apk/file \n");
        break;
      case "jogo19":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Real Steel World Robot Boxing (APK+OBB):* https://www.mediafire.com/file/zcnsxb55mldn51e/Real+Steel+World+Robot+Boxing+v54.54.126+Mod.apk/file\n");
        break;
      case "jogo20":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *Anger of Sticker:* https://www.mediafire.com/file/zfmqmszkhbgoem2/anger-of-stick-5-mod_1.1.39.apk/file\n");
        break;
      case "jogo21":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Angry Birds 2 (APK+OBB)*\nhttps://www.mediafire.com/file/uwnurszwrdbv5ge/angrybirds2-2481.apk/file\n");
        break;
      case "jogo22":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Especial Force Group 2 (CS):* https://www.mediafire.com/file/uwf5cq9u8tjg44x/specialforcesgroup2-421.apk/file\n");
        break;
      case "jogo23":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Roblox:* https://apkadmin.com/k05ck2q6ioo1/ROBLOX_v2.459.415955_MOD_MENU.apk.html\n");
        break;
      case "jogo24":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *Critical Striker:* https://www.mediafire.com/file/7yqmk1gn4wrieri/CRITICAL_STRIKE.zip/file\n");
        break;
      case "jogo25":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Dream League Soccer:* http://www.mediafire.com/file/yuw9n5d4phzz5wg/Dream_League_Soccer_2019_body.13-mod.apk/file\n");
        break;
      case "jogo26":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️️ *Clash of Clans:* http://www.mediafire.com/file/aoaem76tyg0hvfv/Clash_Of_Clans_v13.675.6_MOD.apk/file\n");
        break;
      case "jogo27":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *Criminal Case Paris:* http://www.mediafire.com/fil...e/i5pbv8d7yjbbtly/Criminal%20Case%20Paris%20v2.36.1-mod.apk/file\n");
        break;
      case "jogo28":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *Drift Max World:* https://www.mediafire.com/file/hqui6asekutsocq/DRIFT+MAX+WORLD+DINHEIRO+INFINITO.zip/file");
        break;
      case "jogo29":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n➣️ *Downhill Masters:* https://www.mediafire.com/file/9cdgreyc8amkto9/Downhill_Masters_v1.0.59_MOD.apk/file");
        break;
      case "jogo30":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\n➣ *Monopoly:* https://www.mediafire.com/file/q5jfi61xwbqiu2x/Monopoly-v1-7-11-mod.zip/file");
        break;
      case "filme2":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nhomem aranha sem volta pra casa: https://drive.google.com/file/d/1jNUcLsJqRNcrYD_pMkrUc066TIEWhFRf/view?usp=drivesdk");
        break;
      case "filme3":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nCidade perdida: https://overflix.online/filmes/cidade-perdida-online/");
        break;
      case "filme4":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nThor Amor e trovão : https://overflix.online/filmes/thor-amor-e-trovao-hd-gratis-online/");
        break;
      case "filme5":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nPINÓQUIO 2: https://overflix.online/filmes/pinoquio-2/");
        break;
      case "filme6":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nRua do medo parte 1: https://overflix.online/filmes/rua-do-medo-1994-parte-1/");
        break;
      case "filme7":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nNa mente do demônio: https://overflix.online/filmes/na-mente-do-demonio/");
        break;
      case "filme8":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nO homem nas trevas: https://overflix.online/filmes/o-homem-nas-trevas-2-online-hd/");
        break;
      case "filme9":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nCompilados TERROR: https://overflix.online/?s=Terror");
        break;
      case "filme10":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nHalloween kills o terror continua : https://overflix.online/filmes/halloween-kills-o-terror-continua/");
        break;
      case "filme11":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nO predador a caçada: https://overflix.online/filmes/o-predador-a-cacada/");
        break;
      case "filme12":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nOs primeiros passos de groot: https://overflix.online/filmes/os-primeiros-passos-de-groot/");
        break;
      case "filme13":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nTá chovendo hambúrguer 2: https://overflix.online/filmes/ta-chovendo-hamburguer-2/");
        break;
      case "filme14":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nMinions a origem do gru: https://overflix.online/filmes/minions-2-a-origem-de-gru/");
        break;
      case "filme15":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nThe Sandman: https://overflix.online/series/the-sandman-online-hd-gratis/");
        break;
      case "filme16":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nThe Batman: https://photos.app.goo.gl/F6zsDNxipwYdxS9s9");
        break;
      case "filme17":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nAs branquelas: https://drive.google.com/file/d/1avm4yXd2tg1lZKy00yZRknboNv2Dxqpi/view?usp=drivesdk");
        break;
      case "filme18":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nInterestelar https://drive.google.com/file/d/10nSkrlV_TwkqtyFJ_h-c3GlLx-E7nqz9/view?usp=drivesdk");
        break;
      case "filme19":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nUm olhar do paraíso: https://drive.google.com/file/d/102IWrzkbMAYDxkPmwMuHDuKFK3HGVFWF/view?usp=drivesdk");
        break;
      case "filme20":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nBarbie: https://drive.google.com/drive/folders/1-yFkZrcyph8b1l4yrPpD7oaF5DHD7wss");
        break;
      case "filme21":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nMaze Runner: https://photos.app.goo.gl/D68AJD4SgQmvMyjY7");
        break;
      case "filme22":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nMad max: https://photos.app.goo.gl/88nQZhtu7v3ZWbNe6");
        break;
      case "filme23":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nHomem Aranha: https://photos.app.goo.gl/mLzQtYumEfMpYQ4p7");
        break;
      case "filme24":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nSherlock Homes: https://photos.app.goo.gl/Eg5dJLspQhcaznAtype");
        break;
      case "filme25":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nCinquenta tons de cinza: https://photos.app.goo.gl/3QoCnRNfwJ83KBau6");
        break;
      case "filme26":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nCrepúsculo: https://photos.app.goo.gl/9etPkcZVG42Ngzm29");
        break;
      case "filme27":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nBad Boys: https://photos.app.goo.gl/sVdfEwLKzg4sghxx6");
        break;
      case "filme28":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nVingadores: https://photos.app.goo.gl/uQRWCRbrLc5yPgPi8");
        break;
      case "filme29":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nVelozes e Furiosos: https://photos.app.goo.gl/dSJPea6tf5QEZMK77");
        break;
      case "filme30":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nBatman (1989 - 2016): https://photos.app.goo.gl/x1ZywBqZFNoijUkA6");
        break;
      case "filme31":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nAs vantagens de ser invisível: https://drive.google.com/file/d/12cnRyPwcXDTbbU26MF7wXhz9cnotdEoX/view?usp=drivesdk");
        break;
      case "filme32":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nMoana: https://drive.google.com/file/d/1aHVoN-kWxIvdQBi9a6OMSqXws7q674Cr/view?usp=drivesdk");
        break;
      case "filme33":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nProgramação para princesas: https://drive.google.com/file/d/1aHVoN-kWxIvdQBi9a6OMSqXws7q674Cr/view?usp=drivesdk");
        break;
      case "filme34":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nAs crônicas de Nárnia: https://drive.google.com/folderview?id=1QYz_a12LMrs0Trz2RyfcsrkoNYLsjpdg");
        break;
      case "filme35":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nCulpa é das estrelas: https://drive.google.com/file/d/1ADMJxVpf0RLTJZBpjj_lb0KRGb_OQHs1/view");
        break;
      case "filme36":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nGarota infernal: https://drive.google.com/file/d/1cGSEO0tEPg44Yt1AcVXpNgdzMOXXZ64F/view?usp=drivesdk");
        break;
      case "filme37":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nVerdade ou Desafio: https://drive.google.com/file/d/1mzr_E-OmjQpwouBx2oOo3y4qZStxN-2Z/view?usp=drivesdk");
        break;
      case "filme38":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nCom amor, Simon: https://drive.google.com/file/d/1mzr_E-OmjQpwouBx2oOo3y4qZStxN-2Z/view?usp=drivesdk");
        break;
      case "filme39":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nAfter 1: https://drive.google.com/file/d/1YX8pGsFAY1vrKu8rl96VdN8-vhpUQ2mY/view?usp=drivesdk");
        break;
      case "filme40":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nA 5 passos de você: https://drive.google.com/file/d/132_vwYz5zXMQORAhWmTwQHlLZ47Tpu7V/view?usp=drivesdk");
        break;
      case "filme41":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nHannah Montana: https://drive.google.com/file/d/1Fx1Dn-JV8LOsfiBYL8-ihdz4b2fVnNbg/view?usp=drivesdk");
        break;
      case "filme42":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nPonte para Terabitia: https://drive.google.com/file/d/1F0iFKt2xgglz7pldUuMaE5gxLs55Ta7T/view?usp=drivesdk");
        break;
      case "filme43":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nSr. & Sra. Smith: https://drive.google.com/file/d/1bJsB7wjvU7WWuFSJzwcz0VKQ6vz2UMlA/view?usp=drivesdk");
        break;
      case "filme44":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nUm laço de amor: https://drive.google.com/file/d/17x2Um_DDg7Px2y1EINwpA8jLdgDx-AeM/view?usp=drivesdk");
        break;
      case "filme45":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nTransformers: https://drive.google.com/folderview?id=10QVCb14pAWod2rQ67n1BlLocP71yF8Ez");
        break;
      case "filme46":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nOito mulheres e um segredo: https://drive.google.com/file/d/1jNUcLsJqRNcrYD_pMkrUc066TIEWhFRf/view?usp=drivesdk");
        break;
      case "filme47":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nA garota do trem: https://drive.google.com/file/d/10nc2orAOhI_fLHWLCJfffuFVuUlKo158/view?usp=drivesdk");
        break;
      case "filme48":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nNerve: https://drive.google.com/file/d/1kbS-l4Af_PR_wFmykYAE_pq6qwfORWjD/view?usp=drivesdk");
        break;
      case "filme49":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nEsquadrão 6: https://drive.google.com/file/d/13voArwUsQMgC3o7Q0ZIf87MKjQb3laU6/view?usp=drivesdk");
        break;
      case "filme50":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nA chegada: https://drive.google.com/file/d/17ZTQ4VaUwM_m7immHx4XDWvR_fc1K0Vt/view?usp=drivesdk");
        break;
      case "filme51":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nJumanji- bem vindo a selva: https://drive.google.com/file/d/1j5puYj2JzBgDcH0QKIR__UY1o1Zvs022/view?usp=drivesdk");
        break;
      case "filme52":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nMonte carlo: https://drive.google.com/file/d/1GmN34mKHGd5rp82cX3LVv4mAzz1XoVbB/view?usp=drivesdk");
        break;
      case "filme53":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nNasce uma estrela: https://drive.google.com/file/d/1t8ZLbRMDsUhnzGMbjDie-7jTKDNxy7xF/view?usp=drivesdk");
        break;
      case "filme54":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nMistério no mediterrâneo: https://drive.google.com/file/d/1J4JMLzT6qSgYl1nX75RIEPc4DVc7G9FS/view?usp=drivesdk");
        break;
      case "filme55":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nNorbit: https://drive.google.com/file/d/1UkgrI-fM6rOAHmFEaABtJQP_Lx6jantD/view?usp=drivesdk");
        break;
      case "filmelist":
      case "menufilme":
        const vO829 = {
          title: "➽️️ 𝐇𝐎𝐌𝐄𝐌 𝐀𝐑𝐀𝐍𝐇𝐀 𝐒𝐄𝐌 𝐕𝐎𝐋𝐓𝐀 𝐏𝐑𝐀 𝐂𝐀𝐒𝐀  ",
          rowId: prefix + "filme2",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO830 = {
          title: "➽️️ 𝐂𝐈𝐃𝐀𝐃𝐄 𝐏𝐄𝐑𝐃𝐈𝐃𝐀 ",
          rowId: prefix + "filme3",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO831 = {
          title: "➽️️ 𝐓𝐇𝐎𝐑 𝐀𝐌𝐎𝐑 𝐄 𝐓𝐑𝐎𝐕𝐀̃𝐎 ",
          rowId: prefix + "filme4",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO832 = {
          title: "➽️️ 𝐏𝐈𝐍𝐎́𝐐𝐔𝐈𝐎 2",
          rowId: prefix + "filme5",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO833 = {
          title: "➽️️ 𝐑𝐔𝐀 𝐃𝐎 𝐌𝐄𝐃𝐎 1",
          rowId: prefix + "filme6",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO834 = {
          title: "➽️️ 𝐍𝐀 𝐌𝐄𝐍𝐓𝐄 𝐃𝐎 𝐃𝐄𝐌𝐎̂𝐍𝐈𝐎",
          rowId: prefix + "filme7",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO835 = {
          title: "➽️️ 𝐎 𝐇𝐎𝐌𝐄𝐌 𝐍𝐀𝐒 𝐓𝐑𝐄𝐕𝐀𝐒",
          rowId: prefix + "filme8",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO836 = {
          title: "➽️️ 𝐂𝐎𝐌𝐏𝐈𝐋𝐀𝐃𝐎𝐒 𝐓𝐄𝐑𝐑𝐎𝐑 ",
          rowId: prefix + "filme9",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO837 = {
          title: "➽️️ 𝐇𝐀𝐋𝐋𝐎𝐖𝐄𝐄𝐍𝐒 𝐊𝐈𝐋𝐋𝐒 𝐎 𝐓𝐄𝐑𝐑𝐎𝐑 𝐂𝐎𝐍𝐓𝐈𝐍𝐔𝐀 ",
          rowId: prefix + "filme10",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO838 = {
          title: "➽️️ 𝐎 𝐏𝐑𝐄𝐃𝐀𝐃𝐎𝐑  𝐀 𝐂𝐀𝐂̧𝐀𝐃𝐀",
          rowId: prefix + "filme11",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO839 = {
          title: "➽️️ 𝐎𝐒 𝐏𝐑𝐈𝐌𝐄𝐈𝐑𝐎𝐒 𝐏𝐀𝐒𝐒𝐎𝐒 𝐃𝐄 𝐆𝐑𝐎𝐎𝐓",
          rowId: prefix + "filme12",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO840 = {
          title: "➽️️ 𝐓𝐀́ 𝐂𝐇𝐎𝐕𝐄𝐍𝐃𝐎 𝐇𝐀𝐌𝐁𝐔́𝐑𝐆𝐔𝐄𝐑",
          rowId: prefix + "filme13",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO841 = {
          title: "➽️️ 𝐌𝐈𝐍𝐈𝐎𝐍𝐒 𝐀 𝐎𝐑𝐈𝐆𝐄𝐌 𝐃𝐄 𝐆𝐑𝐔",
          rowId: prefix + "filme14",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO842 = {
          title: "➽️️ 𝐓𝐇𝐄 𝐒𝐀𝐍𝐃𝐌𝐀𝐍",
          rowId: prefix + "filme15",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO843 = {
          title: "➽️️ 𝐓𝐇𝐄 𝐁𝐀𝐓𝐌𝐀𝐍",
          rowId: prefix + "filme16",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO844 = {
          title: "➽️️ 𝐀𝐒 𝐁𝐑𝐀𝐍𝐐𝐔𝐄𝐋𝐀𝐒",
          rowId: prefix + "filme17",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO845 = {
          title: "➽️️ 𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓𝐄𝐋𝐀𝐑",
          rowId: prefix + "filme18",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO846 = {
          title: "➽️️ 𝐔𝐌 𝐎𝐋𝐇𝐀𝐑 𝐃𝐎 𝐏𝐀𝐑𝐀𝐈𝐒𝐎",
          rowId: prefix + "filme19",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO847 = {
          title: "➽️️ 𝐁𝐀𝐑𝐁𝐈𝐄",
          rowId: prefix + "filme20",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO848 = {
          title: "➽️️ 𝐌𝐀𝐙𝐄 𝐑𝐔𝐍𝐍𝐄𝐑",
          rowId: prefix + "filme21",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO849 = {
          title: "➽️️ 𝐌𝐀𝐃 𝐌𝐀𝐗",
          rowId: prefix + "filme22",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO850 = {
          title: "➽️️ 𝐇𝐎𝐌𝐄𝐌 𝐀𝐑𝐀𝐍𝐇𝐀",
          rowId: prefix + "filme23",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO851 = {
          title: "➽️️ 𝐒𝐇𝐄𝐑𝐋𝐎𝐂𝐊 𝐇𝐎𝐌𝐄𝐒 (𝐓𝐎𝐃𝐎𝐒)",
          rowId: prefix + "filme24",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO852 = {
          title: "➽️️ 𝐂𝐈𝐍𝐐𝐔𝐄𝐍𝐓𝐀 𝐓𝐎𝐍𝐒 𝐃𝐄 𝐂𝐈𝐍𝐙𝐀 (𝐓𝐎𝐃𝐎𝐒)",
          rowId: prefix + "filme25",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO853 = {
          title: "➽️️ 𝐂𝐑𝐄𝐏𝐔́𝐒𝐂𝐔𝐋𝐎 (𝐓𝐎𝐃𝐎𝐒)",
          rowId: prefix + "filme26",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO854 = {
          title: "➽️️ 𝐁𝐀𝐃 𝐁𝐎𝐘𝐒 (𝐓𝐎𝐃𝐎𝐒)",
          rowId: prefix + "filme27",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO855 = {
          title: "➽️️ 𝐕𝐈𝐍𝐆𝐀𝐃𝐎𝐑𝐄𝐒 (𝐓𝐎𝐃𝐎𝐒)",
          rowId: prefix + "filme28",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO856 = {
          title: "➽️️ 𝐕𝐄𝐋𝐎𝐙𝐄𝐒 𝐄 𝐅𝐔𝐑𝐈𝐎𝐒𝐎𝐒 (𝐓𝐎𝐃𝐎𝐒)",
          rowId: prefix + "filme29",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO857 = {
          title: "➽️️ 𝐁𝐀𝐓𝐌𝐀𝐍",
          rowId: prefix + "filme30",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO858 = {
          title: "➽️️ 𝐀𝐒 𝐕𝐀𝐍𝐓𝐀𝐆𝐄𝐍𝐒 𝐃𝐄 𝐒𝐄𝐑 𝐈𝐍𝐕𝐈𝐒𝐈́𝐕𝐄𝐋",
          rowId: prefix + "filme31",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO859 = {
          title: "➽️️ 𝐌𝐎𝐀𝐍𝐀",
          rowId: prefix + "filme32",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO860 = {
          title: "➽️️ 𝐏𝐑𝐎𝐆𝐑𝐀𝐌𝐀 𝐃𝐑 𝐏𝐑𝐎𝐓𝐄𝐂̧𝐀̃𝐎 𝐏𝐀𝐑𝐀 𝐏𝐑𝐈𝐍𝐂𝐄𝐒𝐀𝐒:",
          rowId: prefix + "filme33",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO861 = {
          title: "➽️️ 𝐀𝐒 𝐂𝐑𝐎̂𝐍𝐈𝐂𝐀𝐒 𝐃𝐄 𝐍𝐀́𝐑𝐍𝐈𝐀 (𝐓𝐎𝐃𝐎𝐒",
          rowId: prefix + "filme34",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO862 = {
          title: "➽️️ 𝐀 𝐂𝐔𝐋𝐏𝐀 𝐄́ 𝐃𝐀𝐒 𝐄𝐒𝐓𝐑𝐄𝐋𝐀𝐒",
          rowId: prefix + "filme35",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO863 = {
          title: "➽️️ 𝐕𝐄𝐑𝐃𝐀𝐃𝐄 𝐎𝐔 𝐃𝐄𝐒𝐀𝐅𝐈𝐎:",
          rowId: prefix + "filme36",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO864 = {
          title: "➽️️ 𝐆𝐀𝐑𝐎𝐓𝐀 𝐈𝐍𝐅𝐄𝐑𝐍𝐀𝐋",
          rowId: prefix + "filme37",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO865 = {
          title: "➽️️ 𝐂𝐎𝐌 𝐀𝐌𝐎𝐑,𝐒𝐈𝐌𝐎𝐍",
          rowId: prefix + "filme38",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO866 = {
          title: "➽️️ 𝐀𝐅𝐓𝐄𝐑 1:",
          rowId: prefix + "filme39",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO867 = {
          title: "➽️️ 𝐀 5 𝐏𝐀𝐒𝐒𝐎𝐒 𝐃𝐄 𝐕𝐎𝐂𝐄̂:",
          rowId: prefix + "filme40",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO868 = {
          title: "➽️️ 𝐇𝐀𝐍𝐍𝐀𝐇 𝐌𝐎𝐍𝐓𝐀𝐍𝐀-𝐎 𝐅𝐈𝐋𝐌𝐄",
          rowId: prefix + "filme41",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO869 = {
          title: "➽️️ 𝐏𝐎𝐍𝐓𝐄 𝐏𝐀𝐑𝐀 𝐓𝐄𝐑𝐀𝐁𝐈𝐓𝐈𝐀",
          rowId: prefix + "filme42",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO870 = {
          title: "➽️️ 𝐒𝐡.& 𝐒𝐑𝐀.𝐒𝐌𝐈𝐓𝐇",
          rowId: prefix + "filme43",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO871 = {
          title: "➽️️ 𝐔𝐌 𝐋𝐀𝐂̧𝐎 𝐃𝐄 𝐀𝐌𝐎𝐑",
          rowId: prefix + "filme44",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO872 = {
          title: "➽️️ 𝐓𝐑𝐀𝐍𝐒𝐅𝐎𝐑𝐌𝐄𝐒 (𝐓𝐎𝐃𝐎𝐒)",
          rowId: prefix + "filme45",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO873 = {
          title: "➽️️ 𝐎𝐈𝐓𝐎 𝐌𝐔𝐋𝐇𝐄𝐑𝐄𝐒 𝐄 𝐔𝐌 𝐒𝐄𝐆𝐑𝐄𝐃𝐎",
          rowId: prefix + "filme46",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO874 = {
          title: "➽️️ 𝐀 𝐆𝐀𝐑𝐎𝐓𝐀 ??𝐎 𝐓𝐑𝐄𝐌:",
          rowId: prefix + "filme47",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO875 = {
          title: "➽️️ 𝐍𝐄𝐑𝐕𝐄:",
          rowId: prefix + "filme48",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO876 = {
          title: "➽️️ 𝐄𝐒𝐐𝐔𝐀𝐃𝐑𝐀̃𝐎 6",
          rowId: prefix + "filme49",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO877 = {
          title: "➽️️ 𝐀 𝐂𝐇𝐄𝐆𝐀𝐃𝐀",
          rowId: prefix + "filme50",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO878 = {
          title: "➽️️ 𝐉𝐔𝐌𝐀𝐍𝐉𝐈-𝐁𝐄𝐌 𝐕𝐈𝐍𝐃𝐎 𝐀 𝐒𝐄𝐋𝐕𝐀",
          rowId: prefix + "filme51",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO879 = {
          title: "➽️️ 𝐌𝐎𝐍??𝐄 𝐂𝐀𝐑𝐋𝐎",
          rowId: prefix + "filme52",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO880 = {
          title: "➽️️ 𝐍𝐀𝐒𝐂𝐄 𝐔𝐌𝐀 𝐄𝐒𝐓𝐑𝐄𝐋𝐀",
          rowId: prefix + "filme53",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO881 = {
          title: "➽️️ 𝐌𝐈𝐒𝐓𝐄́𝐑𝐈𝐎 𝐍𝐎 𝐌𝐄𝐃𝐈𝐓𝐄𝐑𝐑𝐀̂𝐍𝐄𝐎",
          rowId: prefix + "filme54",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO882 = {
          title: "➽️️ 𝐍𝐎𝐑𝐁𝐈𝐓",
          rowId: prefix + "filme55",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO883 = {
          title: "",
          rows: [vO829, vO830, vO831, vO832, vO833, vO834, vO835, vO836, vO837, vO838, vO839, vO840, vO841, vO842, vO843, vO844, vO845, vO846, vO847, vO848, vO849, vO850, vO851, vO852, vO853, vO854, vO855, vO856, vO857, vO858, vO859, vO860, vO861, vO862, vO863, vO864, vO865, vO866, vO867, vO868, vO869, vO870, vO871, vO872, vO873, vO874, vO875, vO876, vO877, vO878, vO879, vO880, vO881, vO882]
        };
        botaoale = [vO883];
        vF24(from, "© _Copyright by Nezuko-MD", "", "[📽️] 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐅𝐈𝐋𝐌𝐄𝐒 [📽️]", "Selecione abaixo:", botaoale);
        break;
      case "serie1":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\narcane https://overflix.online/series/arcane/");
        break;
      case "serie2":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nstranger-things https://overflix.online/series/stranger-things-gratis-hd/");
        break;
      case "serie3":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nsoldados ou zumbis https://overflix.online/series/s-o-z-soldados-ou-zumbis/");
        break;
      case "serie4":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\no senhor dos aneis https://overflix.online/series/o-senhor-dos-aneis-os-aneis-de-poder-online-hd-gratis/");
        break;
      case "serie5":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nriveldade https://overflix.online/series/riverdale-online-gratis-hd-full/");
        break;
      case "serie6":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\na casa do dragão https://overflix.online/series/a-casa-do-dragao-online-gratis-hd/");
        break;
      case "serie7":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nsintonia https://overflix.online/series/sintonia-online-gratis/");
        break;
      case "serie8":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nchucky https://overflix.online/series/chucky-a-serie/");
        break;
      case "serie9":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nflash https://overflix.online/series/flash-hd-online-gratis/");
        break;
      case "serie10":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\ngame of thrones https://overflix.online/series/game-of-thrones-hd-online-gratis/");
        break;
      case "serie11":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nlegados https://overflix.online/series/legados-gratis-hd-online/");
        break;
      case "serie12":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nthe hood doctor o bom doutor https://overflix.online/series/the-good-doctor-o-bom-doutor-hd-online/");
        break;
      case "serie13":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nthe walking dead https://overflix.online/series/the-walking-dead/");
        break;
      case "serie14":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\npeaky blinders https://overflix.online/series/peaky-blinders-sangue-apostas-e-navalhas/");
        break;
      case "serie15":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\ndiarios de um vampiro https://overflix.online/series/diarios-de-um-vampiro/");
        break;
      case "serie16":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\ngavião arqueiro https://overflix.online/series/gaviao-arqueiro-full-online-gratis/");
        break;
      case "serie17":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nwestworld https://overflix.online/series/westworld-hd-gratis-online/");
        break;
      case "serie18":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nlucifer https://overflix.online/series/lucifer-online-hd/");
        break;
      case "serie19":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nlobo adolecentes https://overflix.online/series/lobo-adolescente/");
        break;
      case "serie20":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nla casa de papel https://overflix.online/series/la-casa-de-papel/");
        break;
      case "serie21":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\ncobra kai https://overflix.online/series/cobra-kai-online-gratis-hd/");
        break;
      case "serie22":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nlove victor https://overflix.online/series/love-victor-gratis-online-hd/");
        break;
      case "serie23":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nvikings https://overflix.online/series/vikings-hd/");
        break;
      case "serie24":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\ncavaleiro da lua https://overflix.online/series/cavaleiro-da-lua-online-gratis-hd-full/");
        break;
      case "serie25":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nfear the walking dead https://overflix.online/series/fear-the-walking-dead/");
        break;
      case "serie26":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nrick morty https://overflix.online/series/rick-morty/");
        break;
      case "serie27":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nround 6 https://overflix.online/series/round-6-online-gratis-hd-full/");
        break;
      case "serie28":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\ncarnival row https://overflix.online/series/carnival-row-online-hd/");
        break;
      case "serie29":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\ndark https://overflix.online/series/dark/");
        break;
      case "serie30":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\narqueiro https://overflix.online/series/arqueiro/");
        break;
      case "serie31":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\neu nunca https://overflix.online/series/eu-nunca/");
        break;
      case "serie32":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nthe last kingdom https://overflix.online/series/the-last-kingdom/");
        break;
      case "serie33":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\no livro de boba fett https://overflix.online/series/o-livro-de-boba-fett-hd-online-gratis-full/");
        break;
      case "serie34":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nragnarok https://overflix.online/series/ragnarok/");
        break;
      case "serie35":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nos 100 https://overflix.online/series/os-100/");
        break;
      case "serie36":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nfbi https://overflix.online/series/fbi/");
        break;
      case "serie37":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nextracurricular https://overflix.online/series/extracurricular/");
        break;
      case "serie38":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nhalo https://overflix.online/series/halo-online-gratis/");
        break;
      case "serie39":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nwarrior nun https://overflix.online/series/warrior-nun-online-completo/");
        break;
      case "serie40":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\n\nanne with https://overflix.online/series/anne-with-an-e/");
        break;
      case "serie41":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\npatrulha do destino https://overflix.online/series/patrulha-do-destino-online/");
        break;
      case "serie42":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\ndinastia https://overflix.online/series/dinastia/");
        break;
      case "serie43":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nwatchmen https://overflix.online/series/watchmen/");
        break;
      case "serie44":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n\nlovecraft country https://overflix.online/series/lovecraft-country-dublado-legendado-online-hd-gratis/");
        break;
      case "serielist":
      case "menuserie":
        const vO884 = {
          title: "➽️️ 𝐀𝐑𝐂𝐀𝐍𝐄 ",
          rowId: prefix + "serie1",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO885 = {
          title: "➽️️ 𝐒𝐓𝐑𝐀𝐍𝐆𝐄𝐑 𝐓𝐇𝐈𝐍𝐆𝐒 ",
          rowId: prefix + "serie2",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO886 = {
          title: "➽️️ 𝐒𝐎𝐋𝐃𝐀𝐃𝐎𝐒 𝐎𝐔 𝐙𝐔𝐌𝐁𝐈𝐒 ",
          rowId: prefix + "serie3",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO887 = {
          title: "➽️️ 𝐎 𝐒𝐄𝐍𝐇𝐎𝐑 𝐃𝐎𝐒 𝐀𝐍𝐄́𝐈𝐒 ",
          rowId: prefix + "serie4",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO888 = {
          title: "➽️️ 𝐑𝐈𝐕𝐄𝐋𝐃𝐀𝐃𝐄",
          rowId: prefix + "serie5",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO889 = {
          title: "➽️️ 𝐀 𝐂𝐀𝐒𝐀 𝐃𝐎 𝐃𝐑𝐀𝐆𝐀̃𝐎 ",
          rowId: prefix + "serie6",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO890 = {
          title: "➽️️ 𝐒𝐈𝐍𝐓𝐎𝐍𝐈𝐀 ",
          rowId: prefix + "serie7",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO891 = {
          title: "➽️️ 𝐂𝐇𝐔𝐂𝐊𝐘 ",
          rowId: prefix + "serie8",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO892 = {
          title: "➽️️ 𝐅𝐋𝐀𝐒𝐇 ",
          rowId: prefix + "serie9",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO893 = {
          title: "➽️️ 𝐆𝐀𝐌𝐄 𝐎𝐅 𝐓𝐇𝐑𝐎𝐍𝐄𝐒",
          rowId: prefix + "serie10",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO894 = {
          title: "➽️️ 𝐋𝐄𝐆𝐀𝐃𝐎𝐒",
          rowId: prefix + "serie11",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO895 = {
          title: "➽️️ 𝐓𝐇𝐄 𝐆𝐎𝐎𝐃 𝐃𝐎𝐂𝐓𝐎𝐑 𝐎 𝐁𝐎𝐌 𝐃𝐎𝐔𝐓𝐎𝐑",
          rowId: prefix + "serie12",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO896 = {
          title: "➽️️ 𝐓𝐇𝐄 𝐖𝐀𝐋𝐊𝐈𝐍𝐆 𝐃𝐄𝐀𝐃",
          rowId: prefix + "serie13",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO897 = {
          title: "➽️️ 𝐏𝐄𝐀𝐊𝐘 𝐁𝐋𝐈𝐍𝐃𝐄𝐑𝐒",
          rowId: prefix + "serie14",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO898 = {
          title: "➽️️ 𝐃𝐈𝐀́𝐑𝐈𝐎𝐒 𝐃𝐄 𝐔𝐌 𝐕𝐀𝐌𝐏𝐈𝐑𝐎 ",
          rowId: prefix + "serie15",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO899 = {
          title: "➽️️ 𝐆𝐀𝐕𝐈𝐀̃𝐎 𝐀𝐑𝐐𝐔𝐄𝐈𝐑𝐎 ",
          rowId: prefix + "serie16",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO900 = {
          title: "➽️️ 𝐖𝐄𝐒𝐓𝐖𝐎𝐑𝐋𝐃",
          rowId: prefix + "serie17",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO901 = {
          title: "➽️️ 𝐋𝐔́𝐂𝐈𝐅𝐄𝐑 ",
          rowId: prefix + "serie18",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO902 = {
          title: "➽️️ 𝐋𝐎𝐁𝐎 𝐀𝐃𝐎𝐋𝐄𝐒𝐂𝐄𝐍𝐓𝐄 ",
          rowId: prefix + "serie19",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO903 = {
          title: "➽️️ 𝐋𝐀 𝐂𝐀𝐒𝐀 𝐃𝐄 𝐏𝐀𝐏𝐄𝐋",
          rowId: prefix + "serie20",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO904 = {
          title: "➽️️ 𝐂𝐎𝐁𝐑𝐀 𝐊𝐀𝐈",
          rowId: prefix + "serie21",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO905 = {
          title: "➽️️ 𝐋𝐎𝐕𝐄 𝐕𝐈𝐂𝐓𝐎𝐑",
          rowId: prefix + "serie22",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO906 = {
          title: "➽️️ 𝐕𝐈𝐊𝐈𝐍𝐆𝐒 ",
          rowId: prefix + "serie23",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO907 = {
          title: "➽️️ 𝐂𝐀𝐕𝐀𝐋𝐄𝐈𝐑𝐎 𝐃𝐀 𝐋𝐔𝐀",
          rowId: prefix + "serie24",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO908 = {
          title: "➽️️ 𝐅𝐄𝐀𝐑 𝐓𝐇𝐄 𝐖𝐀𝐋𝐊𝐈𝐍𝐆 𝐃𝐄𝐀𝐃 ",
          rowId: prefix + "serie25",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO909 = {
          title: "➽️️ 𝐑𝐈𝐂𝐊 𝐌𝐎𝐑𝐓𝐘",
          rowId: prefix + "serie26",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO910 = {
          title: "➽️️ 𝐑𝐎𝐔𝐍𝐃 6",
          rowId: prefix + "serie27",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO911 = {
          title: "➽️️ 𝐂𝐀𝐑𝐍𝐈𝐕𝐀𝐋 𝐑𝐎𝐖",
          rowId: prefix + "serie28",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO912 = {
          title: "➽️️ 𝐃𝐀𝐑𝐊",
          rowId: prefix + "serie29",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO913 = {
          title: "➽️️ 𝐀𝐑𝐐𝐔𝐄𝐈𝐑𝐎",
          rowId: prefix + "serie30",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO914 = {
          title: "➽️️ 𝐄𝐔 𝐍𝐔𝐍𝐂𝐀",
          rowId: prefix + "serie31",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO915 = {
          title: "➽️️ 𝐓𝐇𝐄 𝐋𝐀𝐒𝐓 𝐊𝐈𝐍𝐆𝐃𝐎𝐌",
          rowId: prefix + "serie32",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO916 = {
          title: "➽️️ 𝐎 𝐋𝐈𝐕𝐑𝐎 𝐃𝐄 𝐁𝐎𝐁𝐀 𝐅𝐄𝐓𝐓",
          rowId: prefix + "serie33",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO917 = {
          title: "➽️️ 𝐑𝐀𝐆𝐍𝐀𝐑𝐎𝐊",
          rowId: prefix + "serie34",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO918 = {
          title: "➽️️ 𝐎𝐒 100",
          rowId: prefix + "serie35",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO919 = {
          title: "➽️️ 𝐅𝐁𝐈",
          rowId: prefix + "serie36",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO920 = {
          title: "➽️️ 𝐄𝐗𝐓𝐑𝐀𝐂𝐔𝐑𝐑𝐈𝐂𝐔𝐋𝐀𝐑 ",
          rowId: prefix + "serie37",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO921 = {
          title: "➽️️ 𝐇𝐀𝐋𝐎",
          rowId: prefix + "serie38",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO922 = {
          title: "➽️️ 𝐖𝐀𝐑𝐑𝐈𝐎𝐑 𝐍𝐔𝐍",
          rowId: prefix + "serie39",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO923 = {
          title: "➽️️ 𝐀𝐍𝐍𝐄 𝐖𝐈𝐓𝐇",
          rowId: prefix + "serie40",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO924 = {
          title: "➽️️ 𝐏𝐀𝐓𝐑𝐔𝐋𝐇𝐀 𝐃𝐎 𝐃𝐄𝐒𝐓𝐈𝐍𝐎",
          rowId: prefix + "serie41",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO925 = {
          title: "➽️️ 𝐃𝐈𝐍𝐀𝐒𝐓𝐈𝐀",
          rowId: prefix + "serie42",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO926 = {
          title: "➽️️ 𝐖𝐀𝐓𝐂𝐇𝐌𝐄𝐍 ",
          rowId: prefix + "serie43",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO927 = {
          title: "➽️️ 𝐋𝐎𝐕𝐄𝐂𝐑𝐀𝐅𝐓 𝐂𝐎𝐔𝐍𝐓𝐑𝐘  ",
          rowId: prefix + "serie44",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO928 = {
          title: "",
          rows: [vO884, vO885, vO886, vO887, vO888, vO889, vO890, vO891, vO892, vO893, vO894, vO895, vO896, vO897, vO898, vO899, vO900, vO901, vO902, vO903, vO904, vO905, vO906, vO907, vO908, vO909, vO910, vO911, vO912, vO913, vO914, vO915, vO916, vO917, vO918, vO919, vO920, vO921, vO922, vO923, vO924, vO925, vO926, vO927]
        };
        botaoale = [vO928];
        vF24(from, "© _Copyright by Nezuko-MD", "", "[🕹️] 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐒𝐄́𝐑𝐈𝐄𝐒 [🕹️️]", "Selecione abaixo:", botaoale);
        break;
      case "appspremium":
        const vO929 = {
          title: "➣️️️ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐓. 𝐃𝐀𝐑𝐊",
          rowId: prefix + "app1 ",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO930 = {
          title: "➣️️️ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝐓. 𝐁𝐋𝐀𝐂𝐊",
          rowId: prefix + "app2",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO931 = {
          title: "➣️️️ 𝐘𝐎𝐔𝐂𝐔𝐓 𝐏𝐑𝐎",
          rowId: prefix + "app3",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO932 = {
          title: "➣️️️ 𝐏𝐈𝐂𝐒𝐀𝐑𝐓 𝐏𝐑𝐄𝐌𝐈𝐔𝐌",
          rowId: prefix + "app4",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO933 = {
          title: "➣️️️ 𝐒𝐍𝐀𝐏𝐓𝐔𝐁𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌",
          rowId: prefix + "app5",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO934 = {
          title: "➣️️️ 𝐊𝐈𝐍𝐄𝐌𝐀𝐒𝐓𝐄𝐑 𝐏𝐑𝐎",
          rowId: prefix + "app6",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO935 = {
          title: "➣️️️ 𝐍𝐄𝐓𝐅𝐋𝐈𝐗 𝐏𝐈𝐑𝐀𝐓𝐀",
          rowId: prefix + "app7",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO936 = {
          title: "➣️️️ 𝐏𝐎𝐖𝐄𝐑-𝐃𝐈𝐑𝐄𝐂𝐓𝐎𝐑 𝐏𝐑𝐎",
          rowId: prefix + "app8",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO937 = {
          title: "➣️️️ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 𝐏𝐑𝐄𝐌𝐈𝐔𝐌",
          rowId: prefix + "apsock",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO938 = {
          title: "➣️️️ 𝐑𝐄𝐌𝐈𝐍𝐈 𝐏𝐑𝐎",
          rowId: prefix + "apm",
          description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
        };
        const vO939 = {
          title: "",
          rows: [vO929, vO930, vO931, vO932, vO933, vO934, vO935, vO936, vO937, vO938]
        };
        botaoale = [vO939];
        vF24(from, "© _Copyright by Nezuko-MD_", "", "[👥️] 𝐀𝐏𝐏𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 [👥]", "Selecione abaixo:", botaoale);
        break;
      case "app1":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n 📂 *Youtube Premium Tema Dark:* http://www.mediafire.com/file/x98arvls146n5i5/YouTube+Premium+15.43.32.apk/file\n");
        break;
      case "app2":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n📂 *Youtube Premium Tema Black:* http://www.mediafire.com/file/ourocauwy1hc3v1/YouTube+Black.apk/file\n");
        break;
      case "app3":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n📂 *YouCut Pro:* https://www.mediafire.com/file/5y6rp0t6ffgvnpm/YouCut-Pro-1.452.1119-SK_BR_CANAL.apk/file\n");
        break;
      case "app4":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n📂 *PicsArt Premium:* https://www.mediafire.com/file/dd1ej4z78uvdui8/base.apk/file\n");
        break;
      case "app5":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n📂 *Snaptube Premium:* http://www.mediafire.com/file/lfdc3ptkhear0w0/Snaptube_Premium_BY_FlashStudio.apk/file\n");
        break;
      case "googlesg":
        try {
          textin = args.join(" ");
          v273 = textin.split("/")[0];
          v274 = textin.split("/")[1];
          txt3 = textin.split("/")[2];
          if (!textin) {
            return reply("Cade o texto?");
          }
          if (!textin.includes("/")) {
            return reply("Cade a / precisa dela para a separação..\nExemplo: " + (prefix + command) + " Game/Play/Sad");
          }
          reply(enviar.espere);
          v427 = await fetchJson("https://nezsab-apis.xyz/api/" + command + "?texto=" + v273 + "&texto2=" + v274 + "&texto3=" + txt3 + "&apikey=" + keyapi);
          blabla = await getBuffer(v427.resultado.imageUrl);
          const vO940 = {
            image: blabla
          };
          const vO941 = {
            quoted: m
          };
          sock.sendMessage(from, vO940, vO941).catch(p306 => {
            reply("ERROR!!");
          });
        } catch (e93) {
          if (String(e93).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "app6":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n📂 *KineMaster Pro:* https://www.mediafire.com/file/itxxeuct5efo075/Kinemaster_Premium_Download_2021.apk/file\n");
        break;
      case "app7":
        await reply("\nOlá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n📂 *Netflix Pirata:* https://apkmstore.blogspot.com/2020/06/download-apk-mediaflix-plus.html?m=1\n");
        break;
      case "app8":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n📂 *PowerDirector PRO:* https://www.mediafire.com/file/1et7hx53dwgjk89/PowerDirector_Premium_query.2.0_ATUALIZADO_2021_PRO.om.apk/file\n");
        break;
      case "apsock":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n📂 *Spotify Premium:* https://www.mediafire.com/file/5ajeu8dysva0pso/SPOTIFY_PREMIUM_100%2525_M%25C3%259ASICA_OFFLINE.apk/file");
        break;
      case "apm":
        await reply("Olá " + pushname + ", aqui está o seu pedido, espero que você goste!\n☔ *Número:* @" + sender.split("@")[0] + "\n\n📂 *Remini Pro:* https://techgara.com/download/mod/remini-pro-31633-1357/");
        break;
      case "filmee2":
        keyyubi = "key-free";
        if (!q) {
          return reply("_Coloque o nome do filme *após o comando*_.");
        }
        axios.get("https://isyubii-api.tk/api/filme?nome=" + q + "&apikey=" + keyyubi).then(p307 => {
          try {
            d = p307.data.resultado;
            v272 = "🎬𝐅𝐈𝐋𝐌𝐄 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎🎭\n\n";
            no = 0;
            for (let v338 of d) {
              no += 1;
              v272 += "\n𝐅𝐈𝐋𝐌𝐄: " + no + "\n\n𝐓𝐈́𝐓𝐔𝐋𝐎: " + v338.titulo + "\n\n𝐋𝐈𝐍𝐊: " + v338.link + "\n\n🎬  𝐃𝐄𝐒𝐂𝐑𝐈𝐂̧𝐀̃𝐎 𝐃𝐎 𝐅𝐈𝐋𝐌𝐄: " + v338.sinopse + "\n\n――――――――――――――――――――";
            }
            const vO942 = {
              url: d[0].img
            };
            const vO943 = {
              image: vO942,
              caption: v272
            };
            sock.sendMessage(from, vO943);
          } catch (e94) {
            reply("Resultado do filme " + q + " não foi encontrado.");
          }
        }).catch(p308 => {
          console.log("Ops, eu acho que a api caiu 😢");
        });
        break;
      case "filme":
        if (!q) {
          return reply("_Coloque o nome do filme *após o comando*_.");
        }
        axios.get("https://nezsab-apis.xyz/api/filme?q=" + q + "&apikey=" + keyapi).then(p309 => {
          try {
            d = p309.data.resultado;
            v272 = "";
            no = 0;
            for (let v339 of d) {
              no += 1;
              v272 += "✓ 💬 Foram encontrados " + no + " relacionados com a sua pesquisa: *" + q + "*\n\n× ✨ 𝘛𝘪́𝘵𝘶𝘭𝘰⧽ " + v339.titulo + "\n× 🔗 𝘓𝘪𝘯𝘬⧽ " + v339.link + "\n\n× 🎬 𝘚𝘪𝘯𝘰𝘱𝘴𝘦⧽ " + v339.sinopse;
            }
            const vO944 = {
              url: d[0].img
            };
            const vO945 = {
              image: vO944,
              caption: v272
            };
            sock.sendMessage(from, vO945);
          } catch (e95) {
            reply("Resultado do filme " + q + " não foi encontrado.");
          }
        }).catch(p310 => {
          console.log("Ops, eu acho que a api caiu 😢");
        });
        break;
      case "packfigu":
      case "packfigurinhas":
        vF38(from);
        anu = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO946 = {
          sticker: anu
        };
        const vO947 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO946, vO947);
        anuu = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO948 = {
          sticker: anuu
        };
        const vO949 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO948, vO949);
        anuuu = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO950 = {
          sticker: anuuu
        };
        const vO951 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO950, vO951);
        anuuuu = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO952 = {
          sticker: anuuuu
        };
        const vO953 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO952, vO953);
        anuuuuu = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO954 = {
          sticker: anuuuuu
        };
        const vO955 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO954, vO955);
        fig = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO956 = {
          sticker: fig
        };
        const vO957 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO956, vO957);
        v470 = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO958 = {
          sticker: v470
        };
        const vO959 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO958, vO959);
        figuu = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO960 = {
          sticker: figuu
        };
        const vO961 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO960, vO961);
        figuuu = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO962 = {
          sticker: figuuu
        };
        const vO963 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO962, vO963);
        figuuuu = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO964 = {
          sticker: figuuuu
        };
        const vO965 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO964, vO965);
        stic = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO966 = {
          sticker: stic
        };
        const vO967 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO966, vO967);
        v494 = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO968 = {
          sticker: v494
        };
        const vO969 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO968, vO969);
        stick = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO970 = {
          sticker: stick
        };
        const vO971 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO970, vO971);
        sticke = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO972 = {
          sticker: sticke
        };
        const vO973 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO972, vO973);
        sticker = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO974 = {
          sticker: sticker
        };
        const vO975 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO974, vO975);
        const vO976 = {
          buttonId: prefix + "packfigu",
          buttonText: {
            displayText: "✰ۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐎-𝐏𝐀𝐂𝐎𝐓𝐄🎊"
          },
          type: 1
        };
        const vO977 = {
          buttonId: prefix + "packfinaliz",
          buttonText: {
            displayText: "✰ۜۜ͜͡𝐍𝐀̃𝐎-𝐆𝐄𝐑𝐀𝐑❌"
          },
          type: 1
        };
        buttonss = [vO976, vO977];
        const vO978 = {
          text: "➡️ Oiie gatinho(a), enviei 15 figurinhas e talvez eu acabe duplicando e enviando alguma repetida para você.\n• _O *pacote de figurinha* chegou ao fim, mais não fique triste neném, caso deseja mais um pack, clique no botão abaixo:_",
          footer: "By: " + NomeDoBot,
          buttons: buttonss,
          headerType: 1
        };
        buttonMessagse = vO978;
        const vO979 = {
          quoted: vVO27
        };
        sock.sendMessage(from, buttonMessagse, vO979);
        break;
      case "packfinaliz":
        await reply("Entendido chefe, não irei gerar outro pacote de figurinhas para você.");
        break;
      case "figaleatoria":
        v427 = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
        const vO980 = {
          sticker: v427
        };
        const vO981 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO980, vO981);
        const vO982 = {
          buttonId: prefix + "figaleatoria",
          buttonText: {
            displayText: "✰ۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐀-𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀🧧"
          },
          type: 1
        };
        buttonss = [vO982];
        const vO983 = {
          text: "Estou gerando sua figurinha, aguarde...\nCaso desejar outra, selecione abaixo:",
          footer: "By: " + NomeDoBot,
          buttons: buttonss,
          headerType: 1
        };
        buttonMessagse = vO983;
        const vO984 = {
          quoted: vVO27
        };
        sock.sendMessage(from, buttonMessagse, vO984);
        break;
      case "figurinhas":
        try {
          if (!Number(q)) {
            return reply("Digite a quantidade de figurinhas\nExemplo: " + (prefix + command) + " 7");
          }
          if (q >= 100) {
            return reply("Coloque abaixo de 100...");
          }
          if (m.isGroup) {
            m.reply("<❗> As figurinhas estão sendo enviada em seu privado.");
          }
          reply("Aguarde um pouco...");
          async function f10() {
            bala = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
            bass64 = "data:image/jpeg;base64," + bala.toString("base64");
            v493 = await convertSticker(bass64, sender.split("@")[0], "" + NomeDoBot);
            imageBuffer = new Buffer.from(v493, "base64");
            const vO985 = {
              sticker: imageBuffer
            };
            sock.sendMessage(sender, vO985);
          }
          for (i = 0; i < q; i++) {
            await sleep(2000);
            f10();
          }
        } catch (e96) {
          if (String(e96).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "fixar":
        if (!isPremium) {
          return reply("<❗> Somente meu dono pode usar esse comando.");
        }
        reply("Pronto, ja fixei esse chat.");
        sock.modifyChat(from, ChatModification.pin);
        break;
      case "desfixar":
        if (!isPremium) {
          return reply("<❗> Somente meu dono pode usar esse comando.");
        }
        reply("Pronto, ja desfixei esse chat.");
        sock.modifyChat(from, ChatModification.unpin);
        break;
      case "ytaudio3":
      case "play0":
        reply("Isso demora um minuto pq o fornecedor tá lento, agradeço a compreensão desde já!");
        anu = await fetchJson("https://p7api.xyz/api/ytmp3v2?link=" + res.all[0].url + "&apikey=" + keydop7);
        const vO986 = {
          url: anu.resultado.link
        };
        const vO987 = {
          audio: vO986,
          mimetype: "audio/mpeg",
          fileName: anu.título + ".mp3"
        };
        const vO988 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO987, vO988);
        break;
      case "hentai":
        {
          if (!v43) {
            return reply("É necessário que o comando seja ativado por um adm\nExemplo: " + prefix + "nsfw");
          }
          m.reply(enviar.espere);
          anu = await hentai();
          v384 = anu[Math.floor(Math.random(), anu.length)];
          const vO989 = {
            url: v384.video_1
          };
          const vO990 = {
            video: vO989,
            caption: "⊳ Título : " + v384.title + "\n⊳ Categoria : " + v384.category + "\n⊳ Mimetype : " + v384.type + "\n⊳ Visualizações : " + v384.views_count + "\n⊳ Compartilhamentos : " + v384.share_count + "\n⊳ Arquivo : " + v384.link + "\n⊳ Link da mídia : " + v384.video_1
          };
          const vO991 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vO990, vO991);
        }
        break;
      case "anime":
        {
          if (!q.length > 1) {
            return reply("Cade o título que deseja pesquisar?");
          }
          var vA21 = [];
          datab = await fetchJson("https://nezsab-apis.xyz/api/animes?q=" + q + "&apikey=" + keyapi);
          for (let v340 of datab.resultado) {
            const vO992 = {
              title: v340.titulo,
              description: "Link: " + v340.link,
              rowId: "inhaê"
            };
            vA21.push(vO992);
          }
          const vO993 = {
            text: "Selecione para ver as informações\ndetalhadas sobre o resultado!",
            footer: "By: " + NomeDoBot,
            title: "𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀: 𝐀𝐍𝐈𝐌𝐄",
            buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
            sections: [{
              title: "" + NomeDoBot,
              rows: vA21
            }]
          };
          vVO1334 = vO993;
          sock.sendMessage(from, vVO1334);
        }
        break;
      case "sfile":
        {
          if (!q.length > 1) {
            return reply("Cade o título que deseja pesquisar?");
          }
          var vA21 = [];
          datab = await fetchJson("https://nezsab-apis.xyz/api/sfile?q=" + q + "&apikey=" + keyapi);
          for (let v341 of datab.resultado) {
            const vO994 = {
              title: "➡️ Arquivo: " + v341.nome,
              description: "Icone: " + v341.icon + "\nLink: " + v341.link,
              rowId: "inhaê"
            };
            vA21.push(vO994);
          }
          const vO995 = {
            text: "Selecione para ver as informações\ndetalhadas sobre o resultado!",
            footer: "By: " + NomeDoBot,
            title: "𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀: 𝐒𝐅𝐈𝐋𝐄",
            buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
            sections: [{
              title: "" + NomeDoBot,
              rows: vA21
            }]
          };
          vVO1334 = vO995;
          sock.sendMessage(from, vVO1334);
        }
        break;
      case "anime1":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=" + teks + "&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6");
        const vO996 = {
          image: venomk
        };
        const vO997 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO996, vO997);
        break;
      case "ff1":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3");
        const vO998 = {
          image: venomk
        };
        const vO999 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO998, vO999);
        break;
      case "gam":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=" + teks + "&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18");
        const vO1000 = {
          image: venomk
        };
        const vO1001 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1000, vO1001);
        break;
      case "ff2":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61");
        const vO1002 = {
          image: venomk
        };
        const vO1003 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1002, vO1003);
        break;
      case "anime2":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20");
        const vO1004 = {
          image: venomk
        };
        const vO1005 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1004, vO1005);
        break;
      case "entardecer":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9");
        const vO1006 = {
          image: venomk
        };
        const vO1007 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1006, vO1007);
        break;
      case "indian":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21");
        const vO1008 = {
          image: venomk
        };
        const vO1009 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1008, vO1009);
        break;
      case "ffrose":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6");
        const vO1010 = {
          image: venomk
        };
        const vO1011 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1010, vO1011);
        break;
      case "ffgren":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21");
        const vO1012 = {
          image: venomk
        };
        const vO1013 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1012, vO1013);
        break;
      case "chufuyu":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16");
        const vO1014 = {
          image: venomk
        };
        const vO1015 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1014, vO1015);
        break;
      case "wolf":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33");
        const vO1016 = {
          image: venomk
        };
        const vO1017 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1016, vO1017);
        break;
      case "dragonred":
        if (args.length < 1) {
          return reply("erro");
        }
        teks = body.slice(7);
        if (teks.length > 10) {
          return reply("O texto é longo, até 10 caracteres");
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=" + teks + "&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66");
        const vO1018 = {
          image: venomk
        };
        const vO1019 = {
          quoted: vVO19
        };
        sock.sendMessage(from, vO1018, vO1019);
        break;
      case "purple":
        if (args.length < 1) {
          return reply("cade o texto?");
        }
        teks = "" + body.slice(8);
        const vO1020 = {
          quoted: vVO19
        };
        if (teks.length > 10) {
          return sock.sendMessage(from, "Teksnya kepanjangan Bambank", v21, vO1020);
        }
        reply("<❗> Estou realizando seu pedido, se der erro *tente novamente mais tarde.*");
        venomk = await getBuffer("https://docs-jojo.herokuapp.com/api/text3d?text=" + teks, {
          method: "get"
        });
        const vO1021 = {
          image: venomk
        };
        const vO1022 = {
          quoted: vVO19,
          caption: "" + teks
        };
        sock.sendMessage(from, vO1021, vO1022);
        break;
      case "avatar":
        try {
          textin = args.join(" ");
          v273 = textin.split("/")[0];
          v274 = textin.split("/")[1];
          if (!textin) {
            return reply("Cade o texto?");
          }
          if (!textin.includes("/")) {
            return reply("Cade a / precisa dela para a separação..\nExemplo: " + (prefix + command) + " Game/Play");
          }
          reply(enviar.espere);
          v427 = await fetchJson("https://nezsab-apis.xyz/api/mascoteavatar?texto=" + v273 + "&texto2=" + v274 + "&apikey=" + keyapi);
          blabla = await getBuffer(v427.resultado.imageUrl);
          const vO1023 = {
            image: blabla
          };
          const vO1024 = {
            quoted: m
          };
          sock.sendMessage(from, vO1023, vO1024).catch(p311 => {
            reply("ERROR!!");
          });
        } catch (e97) {
          if (String(e97).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "gpwhatsapp":
      case "gruposwhats":
      case "gruposwa":
        if (!q) {
          return reply("Cadê o título da pesquisa?");
        }
        axios.get("https://ayu.p7api.xyz/api/pesquisa/gpwhatsapp?nome=" + q + "&apikey=saladakk").then(p312 => {
          try {
            d = p312.data;
            v272 = "";
            no = 0;
            for (let v342 of d) {
              no += 1;
              v272 += "✓ 🏷 𝘕𝘰𝘮𝘦⧽ " + v342.nome + "\n× 🈹 𝘋𝘦𝘴𝘤𝘳𝘪𝘤̧𝘢̃𝘰⧽ " + v342.descrição + "\n× 🔗 𝘓𝘪𝘯𝘬⧽ " + v342.link + "\n\n";
            }
            const vO1025 = {
              url: "" + logo
            };
            const vO1026 = {
              image: vO1025,
              caption: v272
            };
            sock.sendMessage(from, vO1026);
          } catch (e98) {
            reply("Nenhum resultado foi encontrado.");
          }
        }).catch(p313 => {
          reply("Ops, eu acho que a api ou módulo caiu!");
          console.log(p313);
        });
        break;
      case "ephemeral":
        {
          vF38(from);
          if (!isGroup) {
            return reply(enviar.msg.grupo);
          }
          if (!v45) {
            return reply(mess.only.botadm);
          }
          if (!v21) {
            return reply("Insira os valores de ativação/desativação");
          }
          if (args[0] === "ativar") {
            reply("<❗> Mensagem temporária ativada com sucesso");
            const vO1027 = {
              disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL
            };
            await sock.sendMessage(m.chat, vO1027);
          } else if (args[0] === "desativar") {
            reply("<❗> Mensagem temporária desativada com sucesso");
            await sock.sendMessage(m.chat, {
              disappearingMessagesInChat: false
            });
          }
        }
        break;
      case "anagrama":
        if (!isGroup) {
          return reply("comando apenas para grupos");
        }
        const v343 = Math.floor(Math.random() * palavrasANA.length);
        if (!isGroupAdmins) {
          return reply("<❗> comando apenas para admins");
        }
        if (args.length == 0) {
          return reply("use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0");
        }
        if (args.join(" ") === "1") {
          if (fs.existsSync("./funções de cmd/anagrama-" + from + ".json")) {
            let v344 = JSON.parse(fs.readFileSync("./funções de cmd/anagrama-" + from + ".json"));
            reply("o jogo já foi iniciado neste grupo:\npalavra: " + v344.embaralhada + "\ndica: " + v344.dica + "\n");
          } else {
            fs.writeFileSync("./funções de cmd/anagrama-" + from + ".json", "" + JSON.stringify(palavrasANA[v343]));
            const vO1028 = {
              text: "\n╭─────≽「 [⚙️] 𝙰𝙽𝙰𝙶𝚁𝙰𝙼𝙰 [⚙️] 」\n│➽ 𝙳𝙴𝚂𝙲𝚄𝙱𝚁𝙰 𝙰 𝙿𝙰𝙻𝙰𝚅𝚁𝙰\n│➽ 𝙰𝙽𝙰𝙶𝚁𝙰𝙼𝙰: " + palavrasANA[v343].embaralhada + "\n│➽ 𝙳𝙸𝙲𝙰: " + palavrasANA[v343].dica + "\n╰────────────────────────\n"
            };
            sock.sendMessage(from, vO1028);
          }
        } else if (args.join(" ") === "0") {
          if (!fs.existsSync("./funções de cmd/anagrama-" + from + ".json")) {
            return reply("não tem como desativar o jogo do anagrama pôs ele não foi ativado");
          }
          fs.unlinkSync("./funções de cmd/anagrama-" + from + ".json");
          reply("desativado com sucesso");
        }
        await limitAdd(sender);
        break;
      case "perfil":
        try {
          ppimg = await sock.profilePictureUrl(sender.split("@")[0] + "@c.us", "image");
        } catch {
          ppimg = "https://telegra.ph/file/6659f0fb9a747b7dbaaaf.jpg";
        }
        var v345 = palavras[Math.floor(Math.random() * palavras.length)];
        const vA51 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const vA52 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const v346 = vA51[Math.floor(Math.random() * vA51.length)];
        const v347 = vA52[Math.floor(Math.random() * vA52.length)];
        const vA53 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const vA54 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const v348 = vA53[Math.floor(Math.random() * vA53.length)];
        const v349 = vA54[Math.floor(Math.random() * vA54.length)];
        const vA55 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const vA56 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const v350 = vA55[Math.floor(Math.random() * vA55.length)];
        const v351 = vA56[Math.floor(Math.random() * vA56.length)];
        gadop = "" + Math.floor(Math.random() * 100);
        const v352 = Math.ceil(Math.random() * 10000);
        const v353 = "    「 🗣𝐈𝐍𝐅𝐎 𝐃𝐎 𝐏𝐄𝐑𝐅𝐈𝐋🔥 」\n\n🥷🏻 Seu nome: " + pushname + "\n🪀 Número: wa.me/" + sender.split("@")[0] + "\n🐂 Nível de Chifres: " + v346 + v347 + "%\n📱 Seu dispositivo logado é: " + (m.key.id.length > 21 ? "Android 🌀" : m.key.id.substring(0, 2) == "3A" ? "iPhone ☔" : "Whatsapp Web 🪀") + "\n😈 Nível de safado(a): " + v348 + v349 + "%\n😋 Nível de gostosura: " + v350 + v351 + "%\n🍼 Valor do progama: R$" + v352 + "\n\n➻ ~*_CONSELHO:_*~\n" + v345;
        daftarimg = await getBuffer(ppimg);
        const vO1029 = {
          image: daftarimg,
          caption: v353
        };
        const vO1030 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1029, vO1030);
        break;
      case "conselhobiblico":
      case "conselhosbiblico":
      case "conselhosb":
      case "conselhob":
        var v354 = conselhob[Math.floor(Math.random() * conselhob.length)];
        jr = vLSBoaMadrugada + " " + pushname + " \n\nConselhos Bíblicos para você: \n\n- " + v354 + " \n\n> Bot: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿\n> Grupo: " + groupName;
        const vO1031 = {
          text: jr
        };
        const vO1032 = {
          mentionedJid: jr
        };
        const vO1033 = {
          quoted: vVO27,
          contextInfo: vO1032
        };
        await sock.sendMessage(from, vO1031, vO1033);
        break;
      case "biblia":
      case "bíblia":
        if (!v21) {
          return reply("Insira o capítulo da bíblia ex: João 4");
        }
        await reply("Aguarde....");
        try {
          apiuu = await fetchJson(encodeURI("https://bible-api.com/" + v21 + "?translation=almeida"));
          if (apiuu?.reference === undefined) {
            return reply("Insira o capítulo da bíblia válido ex: João 4");
          }
          let v355 = "*" + apiuu.reference + "*\n\n";
          v355 += apiuu.text;
          reply(v355);
        } catch {
          reply("Erro ao achar capítulo");
        }
        break;
      case "forestfaye":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/forestfaye.jpeg");
        v272 = "*Pack da ForestFayee* _(Google Fotos)_\n\nhttps://bit.ly/2ZmIwGi";
        const vO1034 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1034);
        break;
      case "leticia_shirayuki":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/leticia.jpeg");
        v272 = "*Pack da Leticia Shirayuki* _(Google Fotos)_\n\nhttps://bit.ly/3vOJsPZ";
        const vO1035 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1035);
        break;
      case "jenniie":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/jennie.jpeg");
        v272 = "*Pack da Jenniie__s* _(Google Fotos)_\n\nhttps://bit.ly/3EkmYts";
        const vO1036 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1036);
        break;
      case "alinefaria":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/alinefaria.jpeg");
        v272 = "*Pack da Aline Faria* _(Google Fotos)_\n\nhttps://bit.ly/3GqaUZd";
        const vO1037 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1037);
        break;
      case "honey69":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/honey.jpeg");
        v272 = "*Pack da oh_honey69* _(Google Fotos)_\n\nhttps://bit.ly/3CjMzCa";
        const vO1038 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1038);
        break;
      case "cclowniac":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/cclowniac.jpeg");
        v272 = "*Pack da Cclowniac* _(Google Fotos)_\n\nhttps://bit.ly/3mmeonT";
        const vO1039 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1039);
        break;
      case "sethi":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/ms.sethi.jpeg");
        v272 = "*Pack da ms.sethi* _(Google Fotos)_\n\nhttps://bit.ly/3GqQtM2";
        const vO1040 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1040);
        break;
      case "raychiel":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/raychiel.jpeg");
        v272 = "*Pack da Raychiel* _(Google Fotos)_\n\nhttps://bit.ly/3BaxgtT";
        const vO1041 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1041);
        break;
      case "lais":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/lais.jpeg");
        v272 = "*Pack da Lais Rodrigues* _(Google Fotos)_\n\nhttps://bit.ly/3jF5Oyu";
        const vO1042 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1042);
        break;
      case "alinefox":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/alinefox.jpeg");
        v272 = "*Pack da Aline Fox* _(Google Fotos)_\n\nhttps://bit.ly/3b8EnZm";
        const vO1043 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1043);
        break;
      case "beatrzz":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/beatrzzfonseca.jpeg");
        v272 = "*Pack da Beatrzzfonseca* _(Google Fotos)_\n\nhttps://bit.ly/3CjOCGm";
        const vO1044 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1044);
        break;
      case "bunni":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/bunni3png.jpeg");
        v272 = "*Pack da bunni3png* _(Google Fotos)_\n\nhttps://bit.ly/3mfl7j7";
        const vO1045 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1045);
        break;
      case "nivnixxi":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/nivnixxi.jpeg");
        v272 = "*Pack da nivnixxi* _(Google Fotos)_\n\nhttps://bit.ly/3En1j3P";
        const vO1046 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1046);
        break;
      case "angela":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Angela.jpeg");
        v272 = "*Pack da Angela Halee* _(Google Fotos)_\n\nhttps://bit.ly/30QIgQH";
        const vO1047 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1047);
        break;
      case "callmesloo":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/callmesloo.jpeg");
        v272 = "*Pack da callmesloo* _(Google Fotos)_\n\nhttps://bit.ly/3vJ5mEq";
        const vO1048 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1048);
        break;
      case "hannahowo":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Hannahowo.jpeg");
        v272 = "*Pack da Hannahowo* _(Google Fotos)_\n\nhttps://bit.ly/3mb8xS6";
        const vO1049 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1049);
        break;
      case "me1adinha":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Me1adinha.jpeg");
        v272 = "*Pack da Me1adinha* _(Google Fotos)_\n\nhttps://bit.ly/2ZyzfLP";
        const vO1050 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1050);
        break;
      case "cogumay":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Cogumay.jpeg");
        v272 = "*Pack da Cogumay* _(Google Fotos)_\n\nhttps://bit.ly/3GkVzsV";
        const vO1051 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1051);
        break;
      case "fabiola_mendoza":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Fabiola_mendoza.jpeg");
        v272 = "*Pack da Fabiola mendoza* _(Google Fotos)_\n\nhttps://bit.ly/3BcLY3D";
        const vO1052 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1052);
        break;
      case "missbrasilia":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/missbrasilia.jpeg");
        v272 = "*Pack da missbrasilia* _(Google Fotos)_\n\nhttps://bit.ly/3BdE2iv";
        const vO1053 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1053);
        break;
      case "fegalvao":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Fegalvao.jpeg");
        v272 = "*Pack da Fegalvao* _(Google Fotos)_\n\nhttps://bit.ly/3jEZwPv";
        const vO1054 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1054);
        break;
      case "vitacelestine":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/VitaCelestine.jpeg");
        v272 = "*Pack da Vita Celestine* _(Google Fotos)_\n\nhttps://bit.ly/316KeNf";
        const vO1055 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1055);
        break;
      case "belledelphine":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Belledelphine.jpeg");
        v272 = "*Pack da Belle delphine* _(Google Fotos)_\n\nhttps://bit.ly/3pAKY7p";
        const vO1056 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1056);
        break;
      case "mayakayagaia":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/mayakayagaia.jpeg");
        v272 = "*Pack da mayakayagaia* _(Google Fotos)_\n\nhttps://bit.ly/3CfKiI3";
        const vO1057 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1057);
        break;
      case "kittykum":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/KittyKum.jpeg");
        v272 = "*Pack da Kitty x Kum* _(Google Fotos)_\n\nhttps://bit.ly/3ClliiA";
        const vO1058 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1058);
        break;
      case "mackenzie":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Mackenzie.jpeg");
        v272 = "*Pack da Mackenzie* _(Google Fotos)_\n\nhttps://bit.ly/3GmKDLt";
        const vO1059 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1059);
        break;
      case "fulltimecrybaby":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/fulltimecrybaby.jpeg");
        v272 = "*Pack da fulltimecrybaby* _(Google Fotos)_\n\nhttps://bit.ly/3pDkOB1";
        const vO1060 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1060);
        break;
      case "dracuina":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/dracuina.jpeg");
        v272 = "*Pack da dracuina* _(Google Fotos)_\n\nhttps://bit.ly/3meqOhl";
        const vO1061 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1061);
        break;
      case "saekkico":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Saekkico.jpeg");
        v272 = "*Pack da Saekkico* _(Google Fotos)_\n\nhttps://bit.ly/3GpuWDa";
        const vO1062 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1062);
        break;
      case "lynienicole":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/lynienicole.jpeg");
        v272 = "*Pack da lynienicole* _(Google Fotos)_\n\nhttps://bit.ly/3meosz2";
        const vO1063 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1063);
        break;
      case "powrice":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Powrice.jpeg");
        v272 = "*Pack da Powrice* _(Google Fotos)_\nhttps://bit.ly/3mdkoin";
        const vO1064 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1064);
        break;
      case "wendy666":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Wendy666.jpeg");
        v272 = "*Pack da Wendy666* _(Google Fotos)_\nhttps://bit.ly/3Ei84DP";
        const vO1065 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1065);
        break;
      case "ShiroKitsune":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/ShiroKitsune.jpeg");
        v272 = "*Pack da Shiro Kitsune* _(Google Fotos)_\nhttps://bit.ly/3pFtIxM";
        const vO1066 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1066);
        break;
      case "moonfox":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/moonfox.jpeg");
        v272 = "*Pack da moonfox* _(Google Fotos)_\nhttps://bit.ly/3Cfypli";
        const vO1067 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1067);
        break;
      case "love_lilah":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/Love_Lilah.jpeg");
        v272 = "*Pack da Love Lilah* _(Google Fotos)_\nhttps://bit.ly/3mh8og8";
        const vO1068 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1068);
        break;
      case "mcmirella":
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/mcmirella.jpeg");
        v272 = "*Pack da mcmirella* _(Google Fotos)_\nhttps://bit.ly/3GhgmxH";
        const vO1069 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1069);
        break;
      case "joga-pedra":
      case "jogar":
        {
          this.suit = this.suit ? this.suit : {};
          let vLN10 = 10;
          let vLN102 = 10;
          let vLN60000 = 60000;
          if (Object.values(this.suit).find(p314 => p314.id.startsWith("suit") && [p314.p, p314.p2].includes(sender))) {
            reply("Complete seu terno anterior");
          }
          if (m.mentionedJid[0] === sender) {
            return reply("Não brincar com eu  !");
          }
          if (!m.mentionedJid[0]) {
            return reply("_Quem você quer desafiar?_\nTag a pessoa..\n\nExemplo : " + prefix + "suit @5521964523665");
          }
          if (Object.values(this.suit).find(p315 => p315.id.startsWith("suit") && [p315.p, p315.p2].includes(m.mentionedJid[0]))) {
            return reply("A pessoa que você desafiou está jogando um jogo com outra pessoa :(");
          }
          let v356 = "suit_" + new Date() * 1;
          let v357 = "_*SUIT PvP*_\n\n@" + m.sender.split`@`[0] + " Desafiador @" + m.mentionedJid[0].split`@`[0] + " para jogar o jogo\n\nPor favor @" + m.mentionedJid[0].split`@`[0] + " para digitar aceitar/rejeitar";
          this.suit[v356] = {
            chat: await sock.sendText(from, v357, m, {
              mentions: parseMention(v357)
            }),
            id: v356,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: "wait",
            waktu: setTimeout(() => {
              if (this.suit[v356]) {
                sock.sendText(from, "_O tempo do jogo acabou._", m);
              }
              delete this.suit[v356];
            }, 60000),
            poin: vLN10,
            poin_lose: vLN102,
            timeout: vLN60000
          };
        }
        break;
      case "nick":
      case "gerarnick":
      case "fazernick":
        try {
          nick = args.join(" ");
          if (!nick) {
            return reply("Escreva o Nick ou nome que você quer personalizar.");
          }
          axios.get("https://lz-screapers.herokuapp.com/fazernick?nome=" + nick).then(p316 => {
            var vLS2 = "🎯";
            nicks = p316.data.nicks;
            v274 = "🔥 Nicks Gerados Com Sucesso! 🔥\n\n";
            for (let vLN04 = 0; vLN04 < nicks.length; vLN04++) {
              v274 += vLS2 + " " + nicks[vLN04] + "\n";
            }
            v274 += "\n𝘾𝙤𝙥𝙮𝙧𝙞𝙜𝙝𝙩 𝙗𝙮 Nezuko-MD";
            reply("" + v274.trim());
          }).catch(p317 => {
            reply("Não pode incluir letras modificadas nem emojis, ou pode ser que a api caiu, mas volta logo logo...");
          });
        } catch (e99) {
          if (String(e99).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
            console.log(e99);
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "happymod2":
        if (!q) {
          return reply("Cadê o título da pesquisa?");
        }
        axios.get("https://lzmods-api.tk/api/pesquisar/happymod?q=" + q + "&apikey=Fbv44cNSG6IKLlz7VVKhNRnRm").then(p318 => {
          try {
            d = p318.data.resultado;
            v272 = "";
            no = 0;
            for (let v358 of d) {
              no += 1;
              v272 += "✓ 🏷️ 𝘕𝘰𝘮𝘦⧽ " + v358.title + "\n× 🔗 𝘓𝘪𝘯𝘬⧽ " + v358.link + "\n× ⭐ Avaliação⧽ " + v358.rating + "\n\n";
            }
            const vO1070 = {
              url: "" + logo
            };
            const vO1071 = {
              image: vO1070,
              caption: v272
            };
            sock.sendMessage(from, vO1071);
          } catch (e100) {
            reply("Nenhum resultado foi encontrado.");
          }
        }).catch(p319 => {
          reply("Ops, eu acho que a api ou módulo caiu!");
          console.log(p319);
        });
        break;
      case "apkmody":
        if (!q) {
          return reply("Cadê o título da pesquisa?");
        }
        axios.get("https://luffy-md-api-mek.herokuapp.com/api/api/apkmody?q=" + q + "&apikey=key-yoshi-2.0").then(p320 => {
          try {
            d = p320.data.resultado;
            v272 = "";
            no = 0;
            for (let v359 of d) {
              no += 1;
              v272 += "✓ 🏷️ 𝘕𝘰𝘮𝘦⧽ " + v359.nome + "\n× ⭐ Descrição⧽ " + v359.descrição + "\n× 🔗 link⧽ https:/" + v359.link + "\n\n";
            }
            const vO1072 = {
              url: "" + logo
            };
            const vO1073 = {
              image: vO1072,
              caption: v272
            };
            sock.sendMessage(from, vO1073);
          } catch (e101) {
            reply("Nenhum resultado foi encontrado.");
          }
        }).catch(p321 => {
          reply("Ops, eu acho que a api ou módulo caiu!");
          console.log(p321);
        });
        break;
      case "filmeapi":
        if (!q) {
          return reply("Cadê o título da pesquisa?");
        }
        axios.get("https://luffy-md-api-mek.herokuapp.com/api/api/filme?q=" + q + "&apikey=key-yoshi-2.0").then(p322 => {
          try {
            d = p322.data.resultado;
            v272 = "";
            no = 0;
            for (let v360 of d) {
              no += 1;
              v272 += "✓ 🏷️ 𝘕𝘰𝘮𝘦⧽ " + v360.titulo + "\n× ⭐ Sinopse⧽ " + v360.sinopse + "\n× 🔗 link⧽ " + v360.link + "\n\n";
            }
            const vO1074 = {
              url: "" + logo
            };
            const vO1075 = {
              image: vO1074,
              caption: v272
            };
            sock.sendMessage(from, vO1075);
          } catch (e102) {
            reply("Nenhum resultado foi encontrado.");
          }
        }).catch(p323 => {
          reply("Ops, eu acho que a api ou módulo caiu!");
          console.log(p323);
        });
        break;
      case "nerding":
        if (!q) {
          return reply("Cadê o título da pesquisa?");
        }
        axios.get("https://luffy-md-api-mek.herokuapp.com/api/api/nerding?q=" + q + "&apikey=key-yoshi-2.0").then(p324 => {
          try {
            d = p324.data.resultado;
            v272 = "";
            no = 0;
            for (let v361 of d) {
              no += 1;
              v272 += "✓ 🔥️ Titulo⧽ " + v361.titulo + "\n× ⭐ Descrição⧽ " + v361.descrição + "\n× 🌀 Review⧽ " + v361.review + "\n× 🔗 link⧽ " + v361.link + "\n\n";
            }
            const vO1076 = {
              url: "" + logo
            };
            const vO1077 = {
              image: vO1076,
              caption: v272
            };
            sock.sendMessage(from, vO1077);
          } catch (e103) {
            reply("Nenhum resultado foi encontrado.");
          }
        }).catch(p325 => {
          reply("Ops, eu acho que a api ou módulo caiu!");
          console.log(p325);
        });
        break;
      case "wikipedia2":
        if (!q) {
          return reply("Cadê o título da pesquisa?");
        }
        axios.get("https://luffy-md-api-mek.herokuapp.com/api/api/wikipedia?q=" + q + "&apikey=key-yoshi-2.0").then(p326 => {
          try {
            d = p326.data.resultado;
            v272 = "";
            no = 0;
            for (let v362 of d) {
              no += 1;
              v272 += "✓ 🔥️ Titulo⧽ " + v362.titulo + "\n\n× ⭐ Descrição⧽ " + v362.descrição + "\n\n× 🌀 Resultado⧽ " + v362.resultado + "\n\n× 🔗 link⧽ " + v362.link + "\n\n";
            }
            const vO1078 = {
              url: "" + logo
            };
            const vO1079 = {
              image: vO1078,
              caption: v272
            };
            sock.sendMessage(from, vO1079);
          } catch (e104) {
            reply("Nenhum resultado foi encontrado.");
          }
        }).catch(p327 => {
          reply("Ops, eu acho que a api ou módulo caiu!");
          console.log(p327);
        });
        break;
      case "petrobras":
        send = await fetchJson("https://lz-screapers.herokuapp.com/petrobrasInfo");
        teks = "✔️ INFO PETROBRAS\n🔱 Preço Medio: " + send.resultado.Preço_Medio + "\n⭐ Distribuição Revenda: " + send.resultado.Distribuiçao_Revenda + "\n☕ Etanol Anidro " + send.resultado.Etanol_Anidro + "\n🔥 Imposto Estadual: " + send.resultado.Imposto_Estadual + "\n🎯 Impostos Federais " + send.resultado.Impostos_Federais + "\n🌺 Parcela Petrobras " + send.resultado.Parcela_Petrobras;
        const vO1080 = {
          text: teks
        };
        const vO1081 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1080, vO1081);
        break;
      case "gprandom":
        {
          send = await fetchJson("https://lzmods-api.tk/api/tools/gruposdezap?apikey=Fbv44cNSG6IKLlz7VVKhNRnRm");
          teks = "🍷 GP RANDOM 🍷\n\nNome: " + send.resultado.nome + "\nLink: " + send.resultado.link + "\nDescrição: " + send.resultado.descrição + "\n";
          const vO1082 = {
            buttonId: prefix + "gprandom",
            buttonText: {
              displayText: "🔥 PRÓXIMO GRUPO 🔥"
            },
            type: 1
          };
          let vA57 = [vO1082];
          const vO1083 = {
            text: "🎯 " + teks + " 🎯",
            footer: "© Copyright by Nezuko-MD",
            buttons: vA57,
            headerType: 2
          };
          let vVO1083 = vO1083;
          const vO1084 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO1083, vO1084);
        }
        break;
      case "genshin":
        send = await fetchJson("https://luffy-md-api-v2.herokuapp.com/api/genshin?chara=" + q + "&apikey=key-yoshi-2.0");
        teks = "PERSONAGEM GENSHIN\nNome: " + send.resultado.name + "\nCitar: " + send.resultado.quote + "\nCv: " + send.resultado.cv + "\nDescrição: " + send.resultado.description + "\nImagem: " + send.resultado.image + "\nCidade: " + send.resultado.city + "\nLink: " + send.resultado.url + "\nElemento: " + send.resultado.element + "\nArma: " + send.resultado.weapon + "\nAvaliação: " + send.resultado.rating;
        const vO1085 = {
          text: teks
        };
        const vO1086 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1085, vO1086);
        break;
      case "frasemae":
        {
          pinto = await fetchJson("https://lz-screapers.herokuapp.com/frasesmae");
          const vA58 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"];
          randandan = vA58[Math.floor(Math.random() * vA58.length)];
          const v363 = pinto.frases[randandan];
          const vO1087 = {
            buttonId: prefix + "frasemae",
            buttonText: {
              displayText: "🔥 PRÓXIMA FRASE 🔥"
            },
            type: 1
          };
          let vA59 = [vO1087];
          const vO1088 = {
            text: "🎯 " + v363 + " 🎯",
            footer: "© Copyright by Nezuko-MD",
            buttons: vA59,
            headerType: 2
          };
          let vVO1088 = vO1088;
          const vO1089 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO1088, vO1089);
        }
        break;
      case "duelo":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        if (!isGroup) {
          return reply("O comando só pode ser usado em Grupos.");
        }
        if (args.length === 0) {
          return reply("Modo de usar...\n\n" + prefix + "duelo @tag / @tag2 / 1 (1 = 1 Minuto)");
        }
        v272 = args.join(" ");
        nmr = v272.split("/")[0].replace("@", "").replace(" ", "").replace(" ", "").replace(" ", "");
        nmr2 = v272.split("/")[1].replace("@", "").replace(" ", "").replace(" ", "").replace(" ", "");
        pergunta = "Qual dos dois duelou melhor ou deu as melhores respostas?";
        vLSBoaMadrugada = v272.split("/")[2];
        if (!Number(vLSBoaMadrugada)) {
          return reply("Ops, insira os minutos\n\n1 = 1 Minuto");
        }
        try {
          ppimg = await sock.profilePictureUrl(nmr + "@s.whatsapp.net");
        } catch (e105) {
          ppimg = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
        }
        try {
          ppimg2 = await sock.profilePictureUrl(nmr2 + "@s.whatsapp.net");
        } catch (e106) {
          ppimg2 = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
        }
        shortpc = await axios.get("https://tinyurl.com/api-create.php?url=" + ppimg);
        shortpc2 = await axios.get("https://tinyurl.com/api-create.php?url=" + ppimg2);
        blup = await getBuffer("http://api-exteam.herokuapp.com/api/duelo?foto=" + shortpc.data + "&foto2=" + shortpc2.data);
        await vF36(blup, "⚔️*Duelo de Stickers*⚔️\n\n@" + nmr + "  Vs  @" + nmr2 + "\n\nPergunta:  " + pergunta + "\n\nDigite:  um = Para votar em:  @" + nmr + "\nDigite:  dois = Para votar em:  @" + nmr2 + "\n\n⚠️ *Atenção*: só é permitido votar 1 única vez, portanto preste atenção em quem vai votar, pois não é possível alterar o voto.\n\n❗ _Não vote por afinidade, vote pela qualidade das respostas, assim você ajuda a melhorar a qualidade dos duelos..._", [nmr + "@s.whatsapp.net", nmr2 + "@s.whatsapp.net"], true);
        addVotoDuelo(from, pergunta, nmr, nmr2, vLSBoaMadrugada, reply);
        break;
      case "chance":
        var v364 = body.slice(7);
        if (args.length < 1) {
          return reply("Você precisa digitar da forma correta\nExemplo: /chance do " + pushname + " ser um trouxa");
        }
        random = "" + Math.floor(Math.random() * 100);
        hasil = "A CHANCE " + body.slice(7) + "\nE DE... " + random + "%";
        let vA60 = [{
          buttonId: "☔",
          buttonText: {
            displayText: "☔"
          },
          type: 1
        }];
        await sock.sendButtonText(from, vA60, hasil, sock.user.name, m);
        break;
      case "gado1":
      case "gadometro":
        var vA61 = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"];
        var v365 = vA61[Math.floor(Math.random() * vA61.length)];
        gadop = "" + Math.floor(Math.random() * 100);
        hisil = "VOCÊ É:\n\n" + v365;
        reply(hisil);
        break;
      case "gay1":
        if (args.length < 1) {
          return reply("marque o gay do gp!");
        }
        rate = body.slice(5);
        var vA62 = ["4", "9", "17", "28", "34", "48", "59", "62", "74", "83", "97", "100", "29", "94", "75", "82", "41", "39"];
        var v366 = vA62[Math.floor(Math.random() * vA62.length)];
        reply("COMO VOCÊ É GAY: *" + rate + "*\n\nSUA PORCENTAGEM GAY : " + v366 + "%\n ESSE AÍ AMA DÁ O CU");
        break;
      case "gay2":
        var vA62 = ["4", "9", "17", "28", "34", "48", "59", "62", "74", "83", "97", "100", "29", "94", "75", "82", "41", "39"];
        var v366 = vA62[Math.floor(Math.random() * vA62.length)];
        reply("COMO VOCÊ É GAY: *" + pushname + "*\n\nSUA PORCENTAGEM GAY : " + v366 + "%\n VOCÊ AMA DÁ O CU NÉ KKK");
        break;
      case "pau":
        random = "" + Math.floor(Math.random() * 35);
        const vRandom = random;
        if (vRandom < 13) {
          pp = "só a fimose";
        } else if (vRandom == 13) {
          pp = "passou da média😳";
        } else if (vRandom == 14) {
          pp = "passou da média😳";
        } else if (vRandom == 15) {
          pp = "eita, vai pegar manga?";
        } else if (vRandom == 16) {
          pp = "eita, vai pegar manga?";
        } else if (vRandom == 17) {
          pp = "calma man, a mina não é um poço😳";
        } else if (vRandom == 18) {
          pp = "calma man, a mina não é um poço😳";
        } else if (vRandom == 19) {
          pp = "calma man, a mina não é um poço😳";
        } else if (vRandom == 20) {
          pp = "você tem um poste no meio das pernas";
        } else if (vRandom == 21) {
          pp = "você tem um poste no meio das pernas";
        } else if (vRandom == 22) {
          pp = "você tem um poste no meio das pernas";
        } else if (vRandom == 23) {
          pp = "você tem um poste no meio das pernas";
        } else if (vRandom == 24) {
          pp = "você tem um poste no meio das pernas";
        } else if (vRandom > 25) {
          pp = "vai procurar petróleo com isso?";
        }
        hasil = "SEU PAU TEM " + random + "CM\n\n" + pp;
        reply(hasil);
        break;
      case "shipo":
        teks = args.join(" ");
        if (teks.length < 10) {
          return reply("Marque uma pessoa do grupo para encontrar o par dela");
        }
        membrr = [];
        const vV37 = v37;
        const vV372 = v37;
        const v367 = vV37[Math.floor(Math.random() * vV37.length)];
        const v368 = vV372[Math.floor(Math.random() * vV372.length)];
        var vA63 = ["1%", "2%", "3%", "4%", "5%", "6%", "7", "%", "9%", "10", "11%", "12%", "13%", "14%", "15%", "16%", "17%", "1%", "19%", "20%", "21%", "22", "23%", "24%", "25%", "26%", "27%", "2%", "27%", "2%", "29%", "30%", "31%", "32%", "33%", "34%", "35%", "36%", "37%", "3%", "39%", "40%", "41%", "42%", "43%", "44%", "45%", "46%", "47%", "4%", "49%", "50%", "51%", "52%", "53%", "54%", "55%", "56%", "57%", "5%", "59%", "60%", "61%", "62%", "63%", "64%", "65%", "66%", "67%", "6%", "69%", "70%", "71%", "72%", "73%", "74%", "75%", "76%", "77%", "7%", "79%", "0%", "1%", "2%", "5%", "4%", "5%", "6%", "7%", "%", "9%", "90%", "91%", "92%", "93%", "94%", "95%", "96%", "97%", "9%", "99%", "100%"];
        const v369 = vA63[Math.floor(Math.random() * vA63.length)];
        jet = "*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @" + v367.id.split("@")[0] + "\n && 2 = " + teks + " com uma porcentagem de: " + v369;
        membrr.push(v367.id);
        membrr.push(v368.id);
        vF22(jet, membrr, true);
        break;
      case "casal":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        membr = [];
        const vV373 = v37;
        const vV374 = v37;
        const v370 = vV373[Math.floor(Math.random() * vV373.length)];
        const v371 = vV374[Math.floor(Math.random() * vV374.length)];
        var vA63 = ["1%", "2%", "3%", "4%", "5%", "6%", "7", "%", "9%", "10", "11%", "12%", "13%", "14%", "15%", "16%", "17%", "1%", "19%", "20%", "21%", "22", "23%", "24%", "25%", "26%", "27%", "2%", "27%", "2%", "29%", "30%", "31%", "32%", "33%", "34%", "35%", "36%", "37%", "3%", "39%", "40%", "41%", "42%", "43%", "44%", "45%", "46%", "47%", "4%", "49%", "50%", "51%", "52%", "53%", "54%", "55%", "56%", "57%", "5%", "59%", "60%", "61%", "62%", "63%", "64%", "65%", "66%", "67%", "6%", "69%", "70%", "71%", "72%", "73%", "74%", "75%", "76%", "77%", "7%", "79%", "0%", "1%", "2%", "5%", "4%", "5%", "6%", "7%", "%", "9%", "90%", "91%", "92%", "93%", "94%", "95%", "96%", "97%", "9%", "99%", "100%"];
        const v372 = vA63[Math.floor(Math.random() * vA63.length)];
        jet = "*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @" + v370.id.split("@")[0] + "\ne esse\n2= @" + v371.id.split("@")[0] + "\ncom uma porcentagem de: " + v372;
        membr.push(v370.id);
        membr.push(v371.id);
        vF22(jet, membr, true);
        break;
      case "suic":
      case "suicui":
      case "suicidiuio":
      case "suicíuidio":
      case "suicídio":
      case "suicidio":
        if (!isGroup) {
          return reply("Este comando só deve ser utilizado em Grupo.");
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        reply("Lembre-se " + pushname + " Você sempre estara em nossos corações ☔😔");
        await sleep(3000);
        sock.groupParticipantsUpdate(from, [sender], "remove");
        await sleep(1000);
        reply("Agora que ja se foi vamos falar mal dele kkk😈");
        break;
      case "roleta":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        jds = [];
        A2 = v37;
        B2 = v37;
        TAMBOR = ["NA PERNA", "NA CABEÇA", "NO PESCOÇO", "NO PEITO", "NO OLHO", "NO ESTÔMAGO", "NA BOCA", "NA PERNA", "NA TESTA", "NO BRAÇO"];
        C2 = A2[Math.floor(Math.random() * A2.length)];
        if (C2 === sender || C2 === v19 + "@s.whatsapp.net") {
          return reply("Acertei @" + C2.id.split("@")[0] + " e não posso removê-lo 🥺");
        }
        tpa = TAMBOR[Math.floor(Math.random() * TAMBOR.length)];
        reply("😈 GIRANDO O TAMBOR, E SE PREPAREM PARA AS CONSEQUÊNCIAS!!! 😈");
        setTimeout(() => {
          D1 = "💥POW💥 O TAMBOR GIROU E ACERTOU O @" + C2.id.split("@")[0] + ", MORREU COM UM TIRO *" + tpa + "*";
          reply(D1);
        }, 5000);
        jds.push(C2.id);
        setTimeout(() => {
          jds.push(C2.id);
          sock.groupParticipantsUpdate(from, [C2.id], "remove");
        }, 6000);
        break;
      case "antiviewone":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("1 pra ligar / 0 pra desligar");
        }
        if (Number(args[0]) === 1) {
          if (v76) {
            return reply("Ja esta ativo");
          }
          antiview.push(from);
          fs.writeFileSync("./funções de cmd/antis/antiview.json", JSON.stringify(antiview));
          reply("🌀 Ativou com sucesso o recurso de antiviewone neste grupo 📝");
        } else if (Number(args[0]) === 0) {
          if (!v76) {
            return reply("Ja esta Desativado");
          }
          pesquisar = from;
          processo = antiview.indexOf(pesquisar);
          while (processo >= 0) {
            antiview.splice(processo, 1);
            processo = antiview.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/antis/antiview.json", JSON.stringify(antiview));
          reply("‼️ Desativou com sucesso o recurso de Antiviewone neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "blockcmd":
        if (!isPremium && !v42) {
          return reply(enviar.msg.donosmt);
        }
        tp = args.join(" ");
        if (tp.includes("blockcmd blockcmd") || tp.includes("blockcmd  blockcmd")) {
          return reply("Tá louco maluco?, Quer banir o comando de bloquear comando?");
        }
        if (getComandoBlock(from).includes(args[0])) {
          return reply("Este comando já está blockeado");
        }
        addComandos(from, args[0]);
        reply("O comando " + args[0] + " Foi blockeado");
        break;
      case "unblockcmd":
        if (!isPremium && !v42) {
          return reply(enviar.msg.donosmt);
        }
        tp = args.join(" ");
        if (tp.includes("blockcmd unblockcmd") || tp.includes("blockcmd  unblockcmd")) {
          return reply("Tá louco maluco?, Quer banir o comando de desbloquear comando?");
        }
        if (!getComandoBlock(from).includes(args[0])) {
          return reply("Este comando já está  desbloqueado");
        }
        deleteComandos(from, args[0]);
        reply("O comando " + args[0] + " Foi desblockeado");
        break;
      case "listacomandos":
        tkks = "╭─*「 *COMANDOS BLOCK* 」\n";
        for (let v373 of getComandoBlock(from)) {
          tkks += "│+  " + v373 + "\n";
        }
        tkks += "│+ Total : " + getComandoBlock(from).length + "\n╰──────*「 *" + NomeDoBot + "* 」*────";
        const vO1090 = {
          quoted: mek
        };
        await sock.sendMessage(from, tkks.trim(), extendedText, vO1090);
        break;
      case "alma-gemeas":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        membr = [];
        const vV375 = v37;
        const vV376 = v37;
        const v374 = vV375[Math.floor(Math.random() * vV375.length)];
        const v375 = vV376[Math.floor(Math.random() * vV376.length)];
        var vA64 = ["1%", "2%", "3%", "4%", "5%", "6%", "7", "%", "9%", "10", "11%", "12%", "13%", "14%", "15%", "16%", "17%", "1%", "19%", "20%", "21%", "22", "23%", "24%", "25%", "26%", "27%", "2%", "27%", "2%", "29%", "30%", "31%", "32%", "33%", "34%", "35%", "36%", "37%", "3%", "39%", "40%", "41%", "42%", "43%", "44%", "45%", "46%", "47%", "4%", "49%", "50%", "51%", "52%", "53%", "54%", "55%", "56%", "57%", "5%", "59%", "60%", "61%", "62%", "63%", "64%", "65%", "66%", "67%", "6%", "69%", "70%", "71%", "72%", "73%", "74%", "75%", "76%", "77%", "7%", "79%", "0%", "1%", "2%", "5%", "4%", "5%", "6%", "7%", "%", "9%", "90%", "91%", "92%", "93%", "94%", "95%", "96%", "97%", "9%", "99%", "100%"];
        const v376 = vA64[Math.floor(Math.random() * vA64.length)];
        jet = "*Hmmm....  alma-gemeas eles 2 💘💘*\n\n1= @" + v374.id.split("@")[0] + "\ne esse\n2= @" + v375.id.split("@")[0] + "\ncom uma porcentagem de: " + v376;
        membr.push(v374.id);
        membr.push(v375.id);
        vF22(jet, membr, true);
        break;
      case "menuart":
      case "listaart":
        const vO1091 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏⟦🤡⟧",
          rowId: prefix + "art1",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1092 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟐⟦🤡⟧",
          rowId: prefix + "art2",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1093 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟑⟦🤡⟧",
          rowId: prefix + "art3",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1094 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟒⟦🤡⟧",
          rowId: prefix + "art4",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1095 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟓⟦🤡⟧",
          rowId: prefix + "art5",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1096 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟔⟦🤡⟧",
          rowId: prefix + "art6",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1097 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟕⟦🤡⟧",
          rowId: prefix + "art7",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1098 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟖⟦🤡⟧",
          rowId: prefix + "art8",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1099 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟗⟦🤡⟧",
          rowId: prefix + "art9",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1100 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟎⟦🤡⟧",
          rowId: prefix + "art10",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1101 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟏⟦🤡⟧",
          rowId: prefix + "art11",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1102 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟐⟦🤡⟧",
          rowId: prefix + "art12",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1103 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟑⟦🤡⟧",
          rowId: prefix + "art13",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1104 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟒⟦🤡⟧",
          rowId: prefix + "art14",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1105 = {
          title: "⟦🤡⟧𝐀𝐑𝐓𝐄 𝟏𝟓⟦🤡⟧",
          rowId: prefix + "art15",
          description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
        };
        const vO1106 = {
          title: "",
          rows: [vO1091, vO1092, vO1093, vO1094, vO1095, vO1096, vO1097, vO1098, vO1099, vO1100, vO1101, vO1102, vO1103, vO1104, vO1105]
        };
        botaoale = [vO1106];
        vF24(from, "┏⧐┅┅⃟🤡┅┅⧏ ❀ ⧐┅┅🤡⃟⃟┅┅⧏┓\n┇            ⟦🤡⟧ 𝐀𝐑𝐓𝐄𝐒 ⟦🤡⟧           ┇\n┗⧐┅┅⃟🤡┅┅⧏ ❀ ⧐┅┅🤡⃟⃟┅┅⧏┛", "", "", "𝐂𝐋𝐈𝐂𝐀 𝐀𝐈 𝐏𝐀𝐋𝐇𝐀𝐂̧𝐎 ⟦🤡⟧ ", botaoale);
        break;
      case "art1":
        const vO1107 = {
          text: "\n . ___________________\n ▕╮╭┻┻╮╭┻┻╮╭▕╮╲\n ▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏\n ▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏\n ▕╰━━━┓┈┈┈╭╮▕╭╮▏\n ▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏\n ▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1107);
        break;
      case "art2":
        const vO1108 = {
          text: "\n░░╔══╗░░░░░░░░░░╔══╗░░\n ░╚╣▐▐╠╝░░╔══╗░░╚╣▐▐╠╝░\n ░░╚╦╦╝░░╚╣▌▌╠╝░░╚╦╦╝░░\n ░░░╚╚░░░░╚╦╦╝░░░░╚╚░░░\n ░░░░░░░░░░╝╝░░░░░░░░░░ ",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1108);
        break;
      case "art3":
        const vO1109 = {
          text: "\n▒▒▒▒▒▒▐███████▌\n ▒▒▒▒▒▒▐░▀░▀░▀░▌\n ▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌\n ▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄\n ▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐ ",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1109);
        break;
      case "art4":
        const vO1110 = {
          text: "\n░▄░█░░░▄▀▀▀▀▀▄░░░█░▄░\n ▄▄▀▄░░░█─▀─▀─█░░░▄▀▄▄\n ░░░░▀▄▒▒▒▒▒▒▒▒▒▄▀░░░░\n ░░░░░█────▀────█░░░░░\n ░░░░░█────▀────█░░░░░   ",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1110);
        break;
      case "art5":
        const vO1111 = {
          text: "\n ▒▒▒▒▒▒▒▒▒▒▒▒\n ▒▒▒▒▓▒▒▓▒▒▒▒\n ▒▒▒▒▓▒▒▓▒▒▒▒\n ▒▒▒▒▒▒▒▒▒▒▒▒\n ▒▓▒▒▒▒▒▒▒▒▓▒\n ▒▒▓▓▓▓▓▓▓▓▒▒\n ▒▒▒▒▒▒▒▒▒▒▒▒",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1111);
        break;
      case "art6":
        const vO1112 = {
          text: "\n┈┈┈╱▔▔▔▔▔▔╲┈╭━━━╮┈┈\n ┈┈▕┈╭━╮╭━╮┈▏┃ZALTS.┃┈┈\n ┈┈▕┈┃╭╯╰╮┃┈▏╰┳━━╯┈┈\n ┈┈▕┈╰╯╭╮╰╯┈▏┈┃┈┈┈┈┈\n ┈┈▕┈┈┈┃┃┈┈┈▏━╯┈┈┈┈┈\n ┈┈▕┈┈┈╰╯┈┈┈▏┈┈┈┈┈┈┈\n ┈┈▕╱╲╱╲╱╲╱╲▏┈┈┈┈┈┈┈",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1112);
        break;
      case "art7":
        const vO1113 = {
          text: "\n──▒▒▒▒▒────▄████▄─────\n ─▒─▄▒─▄▒──███▄█▀──────\n ─▒▒▒▒▒▒▒─▐████──█──█──\n ─▒▒▒▒▒▒▒──█████▄──────\n ─▒─▒─▒─▒───▀████▀─────\n ",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1113);
        break;
      case "art8":
        const vO1114 = {
          text: "\n╲╲╭━━━━━━━╮╱╱\n ╲╭╯╭━╮┈╭━╮╰╮╱\n ╲┃┈┃┈▊┈┃┈▊┈┃╱\n ╲┃┈┗━┛┈┗━┛┈┃╱\n ╱┃┈┏━━━━━┓┈┃╲\n ╱┃┈┃┈┈╭━╮┃┈┃╲\n ╱╰╮╰━━┻━┻╯╭╯╲\n ╱╱╰━━━━━━━╯╲╲",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1114);
        break;
      case "art9":
        const vO1115 = {
          text: "\n    ╭━━╮┈┈┈╭━━╮┈┈┈┈┈\n ┃╭╮┣━━━┫╭╮┃┈╭┳┳╮\n ╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃\n ┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃\n ┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃\n ╭━┻╮┗┻┛╭┻━╮╰┳━┳╯\n ┃┈┈╰━━━╯┈┈╰━┛┈┃┈",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1115);
        break;
      case "art10":
        const vO1116 = {
          text: "\n○ ＿＿＿＿\n \u3000\u3000   ∥\u3000\u3000\u3000\u3000|\n \u3000\u3000   DANIEL👨‍💻\n \u3000\u3000   ∥\u3000\u3000\u3000\u3000|\n \u3000\u3000   ∥￣￣￣￣\n  ∧＿∧\n ( ･ω･∥\n 丶\u3000つ０\n  しーＪ ",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1116);
        break;
      case "art11":
        const vO1117 = {
          text: "\nA____A\n |・ㅅ・|\n |っ\u3000ｃ|\n |\u3000\u3000\u3000|\n |\u3000\u3000\u3000|\n |\u3000\u3000\u3000|\n |\u3000\u3000\u3000|\n |\u3000\u3000\u3000|\n U￣￣U",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1117);
        break;
      case "art12":
        const vO1118 = {
          text: "\n╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭\n ╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯\n ┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║\n ╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝\n ╭┻╮╱╰╮╰━━╯╭╯╲┊   ║\n ╰┳┫▔╲╰┳━━┳╯╱▔┊   ║\n ┈┃╰━━╲▕╲╱▏╱━━━┬╨╮\n ┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯ ",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1118);
        break;
      case "art13":
        const vO1119 = {
          text: "\n.    ▼￣＞-―-＜￣▼\n \u3000\u3000Ｙ\u3000            Ｙ\n   /   / \u3000 ●    o  ●）\n ＼  ｜\u3000 つ\u3000    ヽ",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1119);
        break;
      case "art14":
        const vO1120 = {
          text: "\n👊🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👊🏿\n👉🏿👊🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👊🏾👈🏿\n👉🏿👉🏾👊🏽👇🏽👇🏽👇🏽👇🏽👇🏽👊🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👇🏼👇🏼👇🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👇🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👉🏻🏳️‍🌈?👈🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👉🏼👊🏻👆🏻👊🏻👈🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👉🏽👊🏼👆🏼👆🏼👆🏼👊🏼👈🏽👈🏾👈🏿\n👉🏿👉🏾👊🏽👆🏽👆🏽👆🏽👆🏽👆🏽👊🏽👈🏾👈🏿\n👉🏿👊🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👆🏾👊🏾👈🏿\n👊🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👆🏿👊🏿",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1120);
        break;
      case "art15":
        const vO1121 = {
          text: "\n  ┈┈▕╲▂▂▂▂╱▏┈┈┈┈┈┈\n┈┈┈╲╱╭╱╲╱╲┈┈┈┈┈┈\n┈╱▔▔┈┊▏▕▏▕┈┈┈┈┈┈\n▕▂╱▔╳▔╲▊▏▊╱▔╲▔╲┈\n┈┈┈┈▏▕▏▔▔▔▕▋▕▕▋▏\n┈┈┈┈╲┈╲▂▂▂▂▂▂▂╱┈\n┈┈┈┈▕╲▂▂▂▂▂╱┈┈┈┈\n┈┈┈╱▔╲▕┈┈┈┈┈┈┈┈┈\n┈┈┈╱▏┈┈┈┈┈╱▔▔▔▔╲┈┈┈┈\n┈┈┈▏▏┈┈┈┈┈▏╲▕▋▕▋▏┈┈┈\n┈┈┈╲╲┈┈┈┈┈▏┈▏┈▔▔▔▆┈┈\n┈┈┈┈╲▔▔▔▔▔╲╱┈╰┳┳┳╯┈┈\n┈╱╲╱╲▏┈┈┈┈┈┈▕▔╰━╯┈┈┈\n┈▔╲╲╱╱▔╱▔▔╲╲╲╲┈┈┈┈┈┈\n┈┈┈╲╱╲╱┈┈┈┈╲╲▂╲▂┈┈┈┈\n┈┈┈┈┈┈┈┈┈┈┈┈╲╱╲╱┈┈┈┈\n  ",
          quoted: vVO27
        };
        sock.sendMessage(from, vO1121);
        break;
      case "advertir":
      case "adv":
        if (!isGroup) {
          return reply("<❗> Só em grupo");
        }
        if (!isGroupAdmins) {
          return reply("<❗> Somente adm");
        }
        if (!isBotGroupAdmins) {
          return reply("<❗> Bot precisa ser adm");
        }
        if (type != "extendedTextMessage") {
          return reply("Marque a msg do usuario para dar uma advertencia");
        }
        advertir = mek.message.extendedTextMessage.contextInfo.participant;
        if (vF8(advertir, from) == undefined) {
          vF6(advertir, from);
        }
        vF7(advertir, from, 1);
        if (vF8(advertir, from) == 1) {
          vF22("Olá @" + advertir.split("@")[0] + " vc levou uma advertência, por desrespeito as regras do grupo", [advertir]);
        } else if (vF8(advertir, from) == 2) {
          vF22("Cuidado @" + advertir.split("@")[0] + " vc já tem " + vF8(advertir, from) + " advertencias, se você receber +1 será removida(o) do grupo", [advertir]);
        } else if (vF8(advertir, from) == 3) {
          vF22("Querido @" + advertir.split("@")[0] + " vejo q vc já levou " + vF8(advertir, from) + " advertencias por isto vc será removido do grupo", [advertir]);
          sock.groupParticipantsUpdate(from, [advertir], "remove");
          vF7(advertir, from, -3);
        }
        break;
      case "gay":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (budy.includes("@")) {
          mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          var vMention_id = mention_id;
        }
        if (!budy.includes("@")) {
          var vMention_id = sender;
        }
        sock.sendMessage(from, {
          text: "❰ Pesquisando a sua ficha de gay : @" + vMention_id.split("@")[0] + " aguarde... ❱",
          mentions: [vMention_id]
        });
        setTimeout(async () => {
          wew = await getBuffer("" + imggay);
          zxzz = random = "" + Math.floor(Math.random() * 110);
          feio = random;
          boiola = random;
          if (boiola < 20) {
            var vLSHmmVocHetero = "hmm... você é hetero😔";
          } else if (boiola == 21) {
            var vLSHmmVocHetero = "+/- boiola";
          } else if (boiola == 23) {
            var vLSHmmVocHetero = "+/- boiola";
          } else if (boiola == 24) {
            var vLSHmmVocHetero = "+/- boiola";
          } else if (boiola == 25) {
            var vLSHmmVocHetero = "+/- boiola";
          } else if (boiola == 26) {
            var vLSHmmVocHetero = "+/- boiola";
          } else if (boiola == 27) {
            var vLSHmmVocHetero = "+/- boiola";
          } else if (boiola == 2) {
            var vLSHmmVocHetero = "+/- boiola";
          } else if (boiola == 29) {
            var vLSHmmVocHetero = "+/- boiola";
          } else if (boiola == 30) {
            var vLSHmmVocHetero = "+/- boiola";
          } else if (boiola == 31) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 32) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 33) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 34) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 35) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 36) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 37) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 3) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 39) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 40) {
            var vLSHmmVocHetero = "tenho minha desconfiança...😑";
          } else if (boiola == 41) {
            var vLSHmmVocHetero = "você é né?😏";
          } else if (boiola == 42) {
            var vLSHmmVocHetero = "você é né?😏";
          } else if (boiola == 43) {
            var vLSHmmVocHetero = "você é né?😏";
          } else if (boiola == 44) {
            var vLSHmmVocHetero = "você é né?😏";
          } else if (boiola == 45) {
            var vLSHmmVocHetero = "você é né?😏";
          } else if (boiola == 46) {
            var vLSHmmVocHetero = "você é né?😏";
          } else if (boiola == 47) {
            var vLSHmmVocHetero = "você é né?😏";
          } else if (boiola == 4) {
            var vLSHmmVocHetero = "você é né?😏";
          } else if (boiola == 49) {
            var vLSHmmVocHetero = "você é né?😏";
          } else if (boiola == 50) {
            var vLSHmmVocHetero = "você é ou não?🧐";
          } else if (boiola > 51) {
            var vLSHmmVocHetero = "você é gay🙈";
          }
          const vO1122 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: wew,
            caption: "  O quanto você é gay? \n\n 「 @" + vMention_id.split("@")[0] + " 」Você é: ❰ " + random + "% ❱ gay 🏳️‍🌈\n\n" + vLSHmmVocHetero,
            mentions: [vMention_id],
            thumbnail: null
          }, vO1122);
        }, 7000);
        break;
      case "feio":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (budy.includes("@")) {
          mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          var vMention_id = mention_id;
        }
        if (!budy.includes("@")) {
          var vMention_id = sender;
        }
        sock.sendMessage(from, {
          text: "❰ Pesquisando a sua ficha de feio : @" + vMention_id.split("@")[0] + " aguarde... ❱",
          mentions: [vMention_id]
        });
        setTimeout(async () => {
          wew = await getBuffer("" + imgfeio);
          random = "" + Math.floor(Math.random() * 110);
          feio = random;
          if (feio < 20) {
            var vLSNoFeio = "É não é feio";
          } else if (feio == 21) {
            var vLSNoFeio = "+/- feio";
          } else if (feio == 23) {
            var vLSNoFeio = "+/- feio";
          } else if (feio == 24) {
            var vLSNoFeio = "+/- feio";
          } else if (feio == 25) {
            var vLSNoFeio = "+/- feio";
          } else if (feio == 26) {
            var vLSNoFeio = "+/- feio";
          } else if (feio == 27) {
            var vLSNoFeio = "+/- feio";
          } else if (feio == 2) {
            var vLSNoFeio = "+/- feio";
          } else if (feio == 29) {
            var vLSNoFeio = "+/- feio";
          } else if (feio == 30) {
            var vLSNoFeio = "+/- feio";
          } else if (feio == 31) {
            var vLSNoFeio = "Ainda tá na média";
          } else if (feio == 32) {
            var vLSNoFeio = "Da pra pegar umas(ns) novinha(o) ainda";
          } else if (feio == 33) {
            var vLSNoFeio = "Da pra pegar umas(ns) novinha(o) ainda";
          } else if (feio == 34) {
            var vLSNoFeio = "É fein, mas tem baum coração";
          } else if (feio == 35) {
            var vLSNoFeio = "Tá na média, mas não deixa de ser feii";
          } else if (feio == 36) {
            var vLSNoFeio = "Bonitin mas é feio com orgulho";
          } else if (feio == 37) {
            var vLSNoFeio = "Feio e preguiçoso(a), vai se arrumar praga feia";
          } else if (feio == 3) {
            var vLSNoFeio = "tenho ";
          } else if (feio == 39) {
            var vLSNoFeio = "Feio, mas um banho E se arrumar, deve resolver";
          } else if (feio == 40) {
            var vLSNoFeio = "FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity";
          } else if (feio == 41) {
            var vLSNoFeio = "você é Feio, mas é legal, continue assim";
          } else if (feio == 42) {
            var vLSNoFeio = "Nada que uma maquiagem e se arrumar, que não resolva 🥴";
          } else if (feio == 43) {
            var vLSNoFeio = "Feio que dói de ver, compra uma máscara que melhora";
          } else if (feio == 44) {
            var vLSNoFeio = "Feio mas nada que um saco na cabeça não resolva né!?";
          } else if (feio == 45) {
            var vLSNoFeio = "você é feio, mas tem bom gosto";
          } else if (feio == 46) {
            var vLSNoFeio = "Feio mas tem muitos amigos";
          } else if (feio == 47) {
            var vLSNoFeio = "Feio mas tem lábia pra pegar várias novinha";
          } else if (feio == 4) {
            var vLSNoFeio = "Feio e ainda não sabe se vestir, vixi";
          } else if (feio == 49) {
            var vLSNoFeio = "Feiooo";
          } else if (feio == 50) {
            var vLSNoFeio = "você é Feio, mas não se encherga 🧐";
          } else if (feio > 51) {
            var vLSNoFeio = "você é Feio demais 🙈";
          }
          const vO1123 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: wew,
            caption: "  O quanto você é feio? \n\n 「 @" + vMention_id.split("@")[0] + " 」Você é: ❰ " + random + "% ❱ feio 🙉\n\n" + vLSNoFeio,
            mentions: [vMention_id],
            thumbnail: null
          }, vO1123);
        }, 7000);
        break;
      case "matar":
      case "mata":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) {
          return reply("marque o alvo que você quer matar");
        }
        v567 = m.message.extendedTextMessage.contextInfo.mentionedJid;
        pru = ".\n";
        for (let v377 of v567) {
          pru += "@" + v377.split("@")[0] + "\n";
        }
        susp = "Você Acabou de matar o(a) @" + v567[0].split("@")[0] + " 😈👹";
        jrpp = await getBuffer("" + matarcmd);
        const vO1124 = {
          video: jrpp,
          gifPlayback: true,
          caption: susp,
          mentions: v567
        };
        const vO1125 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO1124, vO1125);
        break;
      case "corno":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (budy.includes("@")) {
          mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          var vMention_id = mention_id;
        }
        if (!budy.includes("@")) {
          var vMention_id = sender;
        }
        sock.sendMessage(from, {
          text: " ❰ Pesquisando a ficha de corno : @" + vMention_id.split("@")[0] + ", aguarde... ❱",
          mentions: [vMention_id]
        });
        setTimeout(async () => {
          wew = await getBuffer("" + imgcorno);
          random = "" + Math.floor(Math.random() * 110);
          const vO1126 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: wew,
            caption: " O quanto você é corno? \n\n 「 @" + vMention_id.split("@")[0] + " 」Você é: ❰ " + random + "% ❱  corno 🐃",
            mentions: [vMention_id]
          }, vO1126);
        }, 7000);
        break;
      case "vesgo":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (budy.includes("@")) {
          mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          var vMention_id = mention_id;
        }
        if (!budy.includes("@")) {
          var vMention_id = sender;
        }
        sock.sendMessage(from, {
          text: "❰ Pesquisando a ficha de vesgo : @" + vMention_id.split("@")[0] + ", aguarde... ❱",
          mentions: [vMention_id]
        });
        setTimeout(async () => {
          wew = await getBuffer("" + imgvesgo);
          random = "" + Math.floor(Math.random() * 110);
          const vO1127 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: wew,
            caption: "O quanto você é vesgo? \n\n「 @" + vMention_id.split("@")[0] + " 」Você é: ❰ '+random+'% ❱  Vesgo 🙄😆",
            mentions: [vMention_id]
          }, vO1127);
        }, 7000);
        break;
      case "bebado":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (budy.includes("@")) {
          mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          var vMention_id = mention_id;
        }
        if (!budy.includes("@")) {
          var vMention_id = sender;
        }
        sock.sendMessage(from, {
          text: "❰ Pesquisando a ficha de bebado : @" + vMention_id.split("@")[0] + " , aguarde... ❱",
          mentions: [vMention_id]
        });
        setTimeout(async () => {
          wew = await getBuffer("" + imgbebado);
          random = "" + Math.floor(Math.random() * 110);
          const vO1128 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: wew,
            caption: "O quanto você é bebado? \n\n「 @" + vMention_id.split("@")[0] + " 」Você é: ❰ " + random + "% ❱ Bêbado 🤢🥵🥴",
            mentions: [vMention_id]
          }, vO1128);
        }, 7000);
        break;
      case "gado":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (budy.includes("@")) {
          mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          var vMention_id = mention_id;
        }
        if (!budy.includes("@")) {
          var vMention_id = sender;
        }
        sock.sendMessage(from, {
          text: "❰ Pesquisando a ficha de gado : @" + vMention_id.split("@")[0] + ", aguarde... ❱",
          mentions: [vMention_id]
        });
        setTimeout(async () => {
          wew = await getBuffer("" + imggado);
          random = "" + Math.floor(Math.random() * 110);
          const vO1129 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: wew,
            caption: "O quanto você é gado? \n\n「 @" + vMention_id.split("@")[0] + " 」Você é: ❰ " + random + "% ❱  gado 🐂",
            mentions: [vMention_id]
          }, vO1129);
        }, 7000);
        break;
      case "gostoso":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (budy.includes("@")) {
          mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          var vMention_id = mention_id;
        }
        if (!budy.includes("@")) {
          var vMention_id = sender;
        }
        sock.sendMessage(from, {
          text: " ❰ Pesquisando a sua ficha de gostoso : @" + vMention_id.split("@")[0] + " aguarde... ❱",
          mentions: [vMention_id]
        });
        setTimeout(async () => {
          wew = await getBuffer("" + imggostoso);
          random = "" + Math.floor(Math.random() * 110);
          const vO1130 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: wew,
            caption: "O quanto você é gostoso? 😏\n\n「 @" + vMention_id.split("@")[0] + " 」Você é: ❰ " + random + "% ❱ gostoso 😝",
            gifPlayback: true,
            mentions: [vMention_id]
          }, vO1130);
        }, 7000);
        break;
      case "gostosa":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (budy.includes("@")) {
          mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          var vMention_id = mention_id;
        }
        if (!budy.includes("@")) {
          var vMention_id = sender;
        }
        sock.sendMessage(from, {
          text: "❰ Pesquisando a sua ficha de gostosa : @" + vMention_id.split("@")[0] + " aguarde... ❱",
          mentions: [vMention_id]
        });
        setTimeout(async () => {
          wew = await getBuffer("" + imggostosa);
          random = "" + Math.floor(Math.random() * 110);
          const vO1131 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: wew,
            caption: "O quanto você é gostosa? 😏\n\n「 @" + vMention_id.split("@")[0] + " 」Você é: ❰ " + random + "% ❱ gostosa 😳",
            mentions: [vMention_id]
          }, vO1131);
        }, 7000);
        break;
      case "beijo":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) {
          return reply("Marque alguém que vc quer da um beijo");
        }
        v567 = m.message.extendedTextMessage.contextInfo.mentionedJid;
        pru = ".\n";
        for (let v378 of v567) {
          pru += "@" + v378.split("@")[0] + "\n";
        }
        susp = "Você deu um beijo gostoso na(o) @" + v567[0].split("@")[0] + " 😁👉👈❤";
        wew = await getBuffer("" + beijocmd);
        const vO1132 = {
          video: wew,
          gifPlayback: true,
          caption: susp,
          mentions: v567
        };
        const vO1133 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO1132, vO1133);
        break;
      case "suporte":
        {
          const vO1134 = {
            title: "🇸\xA0🇺\xA0🇵\xA0🇴\xA0🇷\xA0🇹\xA0🇪 🇩\xA0🇦\xA0 🇳\xA0🇪\xA0🇿\xA0🇺\xA0🇰\xA0🇴\xA0 \xA0",
            rows: [{
              title: "[👥] Comandos de instalação do bot.",
              rowId: prefix + "suporte-termux",
              description: "Instalação da Nezuko-MD no Termux."
            }, {
              title: "[📝] Hospedagem do bot no Heroku.",
              rowId: prefix + "suporte-hospedar",
              description: "Comandos para hospedar no Heroku."
            }, {
              title: "[⚙️] Grupo para suporte da Nezuko.",
              rowId: prefix + "suporte-grupo",
              description: "Meu grupo para dúvidas e suporte."
            }, {
              title: "[💬] Aplicativos necessários do bot.",
              rowId: prefix + "suporte-apps",
              description: "Link dos aplicativos necessários do bot."
            }, {
              title: "[🚀] Como fazer as alterações no bot?",
              rowId: prefix + "suporte-alterar",
              description: "Ajuda na alteração de logos, dono e prefixo."
            }, {
              title: "<❗> Contato do meu desenvolvedor.",
              rowId: prefix + "suporte-dono",
              description: "Contato do criador ou link do whatsapp."
            }, {
              title: "[☔] Site da Nezuko-BOT.",
              rowId: prefix + "nezukosite",
              description: "Site para suportes e etc."
            }, {
              title: "[🎴] Download da Nezuko bot V1",
              rowId: prefix + "nezukolink",
              description: "Download Nezuko V1"
            }]
          };
          vA44 = [vO1134];
          const vO1135 = {
            text: "𝐚𝐪𝐮𝐢 𝐞𝐬𝐭𝐚́ 𝐮𝐦 𝐦𝐞𝐧𝐮 𝐝𝐞 𝐬𝐮𝐩𝐨𝐫𝐭𝐞 𝐝𝐚\n𝐍𝐞𝐳𝐮𝐤𝐨 𝐩𝐚𝐫𝐚 𝐚𝐣𝐮𝐝𝐚𝐫 𝐯𝐨𝐜𝐞̂ 𝐚 𝐚𝐥𝐭𝐞𝐫𝐚𝐫 𝐨 \n𝐝𝐨𝐧𝐨, 𝐩𝐫𝐞𝐟𝐢𝐱𝐨 𝐞 𝐞𝐧𝐭𝐫𝐞 𝐨𝐮𝐭𝐫𝐨𝐬......",
            footer: "",
            buttonText: "🔍 𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑 🔍",
            sections: vA44
          };
          const vVO1135 = vO1135;
          const vO1136 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO1135, vO1136);
        }
        break;
      case "sitenezuko":
      case "nezukosite":
        reply("http://Linktr.ee/NEZUKO_OFC");
        break;
      case "suporte-termux":
        reply("[👥] *INSTALAÇÃO DO BOT NO TERMUX:*\n\n*Primeiro comando:*\npkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs -y && pkg install nodejs-lts -y\n\n*Segundo comando:*\ntermux-setup-storage\n\n*Terceiro comando:*\ncd /sdcard/Nezuko-MD-V2 *ou* cd /sdcard/download/Nezuko-MD-V2\n\n*Quarto comando:*\npkg install ffmpeg -y && pkg install tesseract -y && pkg install python -y\n\n*Quinto comando:*\npkg install ffmpeg -y && pkg install wget -y \n\n*Chave para iniciar a Nezuko:*\nsh nezuko.sh");
        break;
      case "suporte-hospedar":
        reply("[📝] *HOSPEDAR BOT NO HEROKU:*\n\nPara hospedar de forma rápida e prática no heroku use o comando no termux: *sh hospedar.sh*\n\n*Tutorial de como hospedar seu bot no heroku:* https://youtu.be/a4PFeplGXsY");
        break;
      case "suporte-grupo":
        reply("[⚙️] https://chat.whatsapp.com/DTsrSH5CVF66Xvn9Ow61Yn");
        break;
      case "suporte-alterar":
        reply("[🚀] *ALTERAÇÕES NO BOT:*\n\n*Alterar prefixo:* Entre no arquivo *configurar.js* e procure por *global.prefix*, como padrão vai ter *\".\"*\nVocê só apaga isso o . e coloca o prefixo que você desejar.\n\n*Alterar número do dono:* Entre no arquivo *configurar.js* e procure por *global.numerodonoa* e coloque seu número entre às aspas.\n\n*Alterar logo:* Entre no arquivo *configurar.js*, procure por essas três definições: *global.err4r, global.log0, global.thumb*, Inicie o bot e mande a imagem que você deseja e mencione a foto enviada com o comando: " + prefix + "imgpralink, depois copie o link enviado e cole nas *\" \"* dessas 3 definições.");
        break;
      case "suporte-apps":
        reply("[💬] *APLICATIVOS NECESSÁRIOS:* \n\n*Download do Termux V0.119:* https://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com.apk/file\n\n*Download do MT-Manager V2.10:* https://www.mediafire.com/file/0fttexpjoe3j54h/MT_Manager_Version_%255B_2.10.3_%255D_.apk/file\n\n*Download do ColorNote V4.4.0:* https://play.google.com/store/apps/details?id=com.socialnmobile.dictapps.notepad.color.note");
        break;
      case "tapa":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) {
          return reply("marque o alvo que você quer dá o tapa");
        }
        v567 = m.message.extendedTextMessage.contextInfo.mentionedJid;
        pru = ".\n";
        for (let v379 of v567) {
          pru += "@" + v379.split("@")[0] + "\n";
        }
        susp = "Você Acabou de da um tapa na raba da😏 @" + v567[0].split("@")[0] + " 🔥";
        jrq = await getBuffer("" + tapacmd);
        const vO1137 = {
          video: jrq,
          gifPlayback: true,
          caption: susp,
          mentions: v567
        };
        const vO1138 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO1137, vO1138);
        break;
      case "chute":
      case "chutar":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) {
          return reply("marque o alvo que você quer dá um chute");
        }
        v567 = m.message.extendedTextMessage.contextInfo.mentionedJid;
        pru = ".\n";
        for (let v380 of v567) {
          pru += "@" + v380.split("@")[0] + "\n";
        }
        susp = "Você Acabou de da um chute em @" + v567[0].split("@")[0] + " 🤡";
        jry = await getBuffer("" + chutecmd);
        const vO1139 = {
          video: jry,
          gifPlayback: true,
          caption: susp,
          mentions: v567
        };
        const vO1140 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO1139, vO1140);
        break;
      case "dogolpe":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        const vO1141 = {
          quoted: vVO27
        };
        if (args.length < 1) {
          return await sock.sendMessage(from, {
            text: "coloca um nome"
          }, vO1141);
        }
        pkt = body.slice(9);
        v567 = m.message.extendedTextMessage.contextInfo.mentionedJid;
        random = "" + Math.floor(Math.random() * 100);
        jpr = "*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *" + args[0] + "*\n*PORCENTAGEM DO GOLPE* : " + random + "%😂\n\nEle(a) gosta de ferir sentimentos 😢";
        const vO1142 = {
          text: jpr,
          mentions: v567
        };
        sock.sendMessage(from, vO1142);
        break;
      case "nazista":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        rate = body.slice(9);
        sock.sendMessage(from, {
          text: " ❰ Pesquisando a sua ficha de nazista : " + rate + " aguarde... ❱"
        });
        setTimeout(async () => {
          wew = await getBuffer("" + imgnazista);
          random = "" + Math.floor(Math.random() * 110);
          const vO1143 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: wew,
            caption: "O quanto você é nazista? \n\n「 " + rate + " 」Você é: ❰ " + random + "% ❱  nazista 卐"
          }, vO1143);
        }, 7000);
        break;
      case "roubar-membro":
        if (!isPremium) {
          return reply("<❗> Somente meu dono pode usar esse comando.");
        }
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!v45) {
          return reply(mess.only.botadm);
        }
        if (!q) {
          return reply("falta algo");
        }
        let v381 = m.isGroup ? await sock.groupMetadata("" + q) : "";
        let v382 = m.isGroup ? v381.participants : "";
        setTimeout(() => {
          for (let v383 of v382) {
            members_id = [];
            if (v383.jid === sock.user.id) {
              return;
            }
            members_id.push(v383.id);
            sock.groupParticipantsUpdate(from, [v383.id], "add");
          }
        }, 10);
        break;
      case "idget":
        if (!v21) {
          return reply("Mande um link de um gp!");
        }
        if (!isUrl(args[0]) && !args[0].includes("whatsapp.com")) {
          return reply("Link Invalido!");
        }
        let v384 = args[0].split("https://chat.whatsapp.com/")[1];
        await sock.groupAcceptInvite(v384).then(p328 => {
          var v385 = p328.replace("\"\"", "");
          m.reply(v385);
        });
        break;
      case "id":
      case "idgp":
        reply(m.chat);
        break;
      case "soundcloud3":
        qd = args.join(" ");
        const vO1144 = {
          text: "🔍",
          key: m.key
        };
        const vO1145 = {
          react: vO1144
        };
        sock.sendMessage(from, vO1145);
        if (qd.length < 7) {
          return reply("Você deve pegar o link gerado do Soundcloud e usar com esse comando, e ele enviará seu áudio.");
        }
        anu = await fetchJson("https://ayu.p7api.xyz/api/dl/sound?link=" + q + "&apikey=" + keyapi2);
        pla = "🎶 *Música:* " + anu.resultado.titulo + "\n";
        pla += "🏷️ *Total de downloads:* " + anu.resultado.total_downloads + "\n";
        pla += "*_Aguarde, estou enviando o áudio!_*";
        img = await getBuffer(anu.resultado.capa);
        const vO1146 = {
          image: img,
          caption: "" + pla
        };
        const vO1147 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1146, vO1147);
        const vO1148 = {
          url: anu.resultado.link_dl
        };
        const vO1149 = {
          audio: vO1148,
          mimetype: "audio/mpeg",
          fileName: anu.resultado.titulo + ".mp3"
        };
        const vO1150 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1149, vO1150);
        break;
      case "pix1":
        reply("0f21bc37-8210-45c7-acec-24441b67c0ec");
        break;
      case "pix22":
        reply("5521964523665");
        break;
      case "doar":
      case "donate":
      case "doação":
        {
          let vA65 = [{
            buttonId: "/pix1",
            buttonText: {
              displayText: "Chave aleatória"
            },
            type: 1
          }, {
            buttonId: "/pix22",
            buttonText: {
              displayText: "Pix número"
            },
            type: 1
          }];
          const vO1151 = {
            text: "Olá, faça uma doação e contribua com que a Nezuko permanessa ativa\n\nQualquer valor e bem vindo, não existe\n\nquantia baixa!\n\nChave De Sua Escolha",
            footer: "©  _Copyright by Nezuko-MD_",
            buttons: vA65,
            headerType: 2
          };
          let vVO1151 = vO1151;
          const vO1152 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, vVO1151, vO1152);
        }
        break;
      case "infspam":
        reply(" Mande o Numero sem \" + - \" sem as aspas\nExemplo " + prefix + "spamenviar 559999999");
        break;
      case "spamenviar":
        {
          if (!isPremium && !isCmdy && !v42 && !issupre && !ischyt && !mek.key.fromMe) {
            return reply(enviar.msg.donosmt);
          }
          if (!q) {
            return reply("Texto onde?\n\nExemplo : " + (prefix + command) + " BOA VISTA ");
          }
          let v386 = await sock.groupFetchAllParticipating();
          let v387 = Object.entries(v386).slice(0).map(p329 => p329[1]);
          let v388 = v387.map(p330 => p330.id);
          for (let v389 of v388) {
            await sleep(1500);
            let v390 = "🔥ATK DE SPAM AGORA 🔥\nMande msg e depois bloqueia 6× \nwa.me/" + q;
            const vO1153 = {
              text: v390
            };
            sock.sendMessage(v389, vO1153);
          }
          reply("Enviando com sucesso🔥");
        }
        break;
      case "rankgay":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        try {
          d = [];
          ret = "🏳️‍🌈 Rank dos mais gays\n";
          for (i = 0; i < 5; i++) {
            r = Math.floor(Math.random() * v28.participants.length + 0);
            ret += "🏳️‍🌈❧ @" + v37[r].id.split("@")[0] + "\n";
            d.push(v37[r].id);
          }
          vF22(ret, d, true);
        } catch (e107) {
          console.log(e107);
          reply("Deu erro, tente novamente :/");
        }
        break;
      case "rankgado":
      case "rankgados":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        try {
          d = [];
          ret = "🐂🐂 Rank dos mais gados do grupo \n";
          for (i = 0; i < 5; i++) {
            r = Math.floor(Math.random() * v28.participants.length + 0);
            ret += "🐂❧ @" + v37[r].id.split("@")[0] + "\n";
            d.push(v37[r].id);
          }
          vF22(ret, d, true);
        } catch (e108) {
          console.log(e108);
          reply("Deu erro, tente novamente :/");
        }
        break;
      case "clima":
      case "tempo":
        if (args.length < 1) {
          return reply("*Sintaxe correta para uso:* " + (prefix + command) + " cidade\n• Caso tenha algum acento, retire ok?");
        }
        cidade = body.slice(7);
        clima = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=548b8266f19038cfd1f6d6f007d8bc58&units=metric&lang=pt_br");
        if (clima.error) {
          return reply(clima.error);
        }
        hora1 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
        jr = "\n╭━━━『 𝙏𝙀𝙈𝙋𝙊/𝘾𝙇𝙄𝙈𝘼 』━━━╮\n│⌁ 令 🌡️ Agora: " + clima.data.main.temp + "ºC\n│⌁ 令 🏙️ Cidade: " + clima.data.name + "\n│⌁ 令 🔺 Temp. Máxima: " + clima.data.main.temp_max + "°C\n│⌁ 令 🔻 Temp. Mínima: " + clima.data.main.temp_min + "°C\n│⌁ 令 🌦️ Clima: " + clima.data.weather[0].description + "\n│⌁ 令 💧 Umidade do Ar: " + clima.data.main.humidity + "%\n│⌁ 令 🌬️ Ventos: " + clima.data.wind.speed + "  \n╰━━━━━━━━━━〔 " + hora1 + " 〕\n";
        const vO1154 = {
          text: jr
        };
        const vO1155 = {
          mentionedJid: jr
        };
        const vO1156 = {
          quoted: mek,
          contextInfo: vO1155
        };
        await sock.sendMessage(from, vO1154, vO1156);
        break;
      case "clima2":
      case "tempo2":
        if (args.length < 1) {
          return reply("*Sintaxe correta para uso:* " + (prefix + command) + " cidade\n• Caso tenha algum acento, retire ok?");
        }
        cidade = body.slice(7);
        clima = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=548b8266f19038cfd1f6d6f007d8bc58&units=metric&lang=pt_br");
        if (clima.error) {
          return reply(clima.error);
        }
        hora1 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
        jr = "— Confira agora o clima em " + q + " 🌡☀️\n\n🌡️ Temperatura agora: " + clima.data.main.temp + "ºC\n🏙️ Cidade: " + clima.data.name + "\n\n🔺 Temperatura Máxima: " + clima.data.main.temp_max + "°C\n🔻 Temperatura Mínima: " + clima.data.main.temp_min + "°C\n\n🌦 Clima: " + clima.data.weather[0].description + "\n💧 Umidade de ar: " + clima.data.main.humidity + "%\n🌬️ Ventos: " + clima.data.wind.speed + "  \n\nSolicitado por: " + pushname + " às〔 " + hora1 + " 〕";
        const vO1157 = {
          text: jr
        };
        const vO1158 = {
          mentionedJid: jr
        };
        const vO1159 = {
          quoted: vVO27,
          contextInfo: vO1158
        };
        await sock.sendMessage(from, vO1157, vO1159);
        break;
      case "live":
        vF38(from);
        if (args.length < 1) {
          return reply("❌ Pesquise títulos de live do youtube.");
        }
        await reply("✔️ Espere... Pesquisando live no youtube.");
        await yts(v21).then(p331 => {
          teks = "No momento existe " + p331.live.length + " lives online.\n\n";
          for (let v391 of p331.live) {
            teks += "➡️ Tipo: *" + v391.type + "*\n✅ Nome: *" + v391.title + "*\n✅ Link: *" + v391.url + "*\n✅ Autor: *" + v391.author.name + "*\n✅ Canal: *" + v391.author.url + "*\n✅ Descrição: *" + v391.description + "*\n";
          }
          const vO1160 = {
            url: p331.live[0].image
          };
          const vO1161 = {
            image: vO1160,
            caption: teks
          };
          const vO1162 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1161, vO1162);
        }).catch(p332 => {
          console.log("Err: %s", color(p332, "red"));
          reply(p332 == "TypeError: Cannot read properties of undefined (reading 'image')" ? "No momento não existe live ao vivo." : p332);
        });
        break;
      case "menu-hentai":
      case "hentais":
      case "menuhentai":
        {
          const vO1163 = {
            title: "🇱\xA0🇮\xA0🇸\xA0🇹\xA0🇦\xA0  🇩\xA0🇪\xA0  🇭\xA0🇪\xA0🇳\xA0🇹\xA0🇦\xA0🇮\xA0🇸\xA0",
            rows: [{
              title: "✰ۜۜ͜͡𝐌𝐀𝐒𝐓𝐔𝐑𝐁𝐀𝐓𝐈𝐎𝐍🔞",
              rowId: prefix + "masturbation",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐉𝐀𝐇𝐘🔞",
              rowId: prefix + "jahy",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐆𝐋𝐀𝐒𝐒𝐄𝐒🔞",
              rowId: prefix + "glasses",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐆𝐀𝐍𝐆-𝐁𝐀𝐍𝐆🔞",
              rowId: prefix + "gangbang",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐅𝐎𝐎𝐓🔞",
              rowId: prefix + "foot",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐅𝐄𝐌𝐃𝐎𝐌🔞",
              rowId: prefix + "femdom",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐂𝐔𝐌🔞",
              rowId: prefix + "cum",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐄𝐑𝐎🔞",
              rowId: prefix + "ero",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐂𝐔𝐂𝐊𝐎𝐋𝐃🔞",
              rowId: prefix + "cuckold",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐁𝐋𝐎𝐖𝐉𝐎𝐁🔞",
              rowId: prefix + "blowjob",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐁𝐃𝐒𝐌🔞",
              rowId: prefix + "bdsm",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐀𝐇𝐄𝐆𝐀𝐎🔞",
              rowId: prefix + "ahegao",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐅𝐄𝐌𝐃𝐎𝐌🔞",
              rowId: prefix + "femdom",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐀𝐒𝐒🔞",
              rowId: prefix + "ass",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐎𝐑𝐆𝐘🔞",
              rowId: prefix + "orgy",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐏𝐀𝐍𝐓𝐈𝐄𝐒🔞",
              rowId: prefix + "panties",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐓𝐇𝐈𝐍𝐆𝐇𝐒🔞",
              rowId: prefix + "thinghs",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐘𝐔𝐑𝐈-𝐏𝐎𝐑𝐍🔞",
              rowId: prefix + "yuriporn",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐓𝐄𝐍𝐓𝐀𝐂𝐋𝐄𝐒🔞",
              rowId: prefix + "tentacles",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐍𝐒𝐅𝐖-𝐍𝐄𝐊𝐎🔞",
              rowId: prefix + "nsfwneko",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐏𝐔𝐒𝐒𝐘🔞",
              rowId: prefix + "pussy",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐒𝐅𝐖-𝐍𝐄𝐊𝐎🔞",
              rowId: prefix + "sfwneko",
              description: "" + NomeDoBot
            }, {
              title: "✰ۜۜ͜͡𝐙𝐄𝐓𝐓𝐀𝐈𝐑𝐘𝐎𝐔𝐈𝐊𝐈🔞",
              rowId: prefix + "zettairyouiki",
              description: "" + NomeDoBot
            }]
          };
          vA44 = [vO1163];
          const vO1164 = {
            text: "Todos os hentais serão enviados\nno pv do usuário que solicitar.",
            footer: "By: " + NomeDoBot,
            title: "ꪶ𝐌𝐄𝐍𝐔-𝐇𝐄𝐍𝐓𝐀𝐈𝐒ꫂ",
            buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
            sections: vA44
          };
          const vVO1164 = vO1164;
          const vO1165 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO1164, vO1165);
        }
        break;
      case "masturbation":
      case "jahy":
      case "glasses":
      case "gangbang":
      case "foot":
      case "femdom":
      case "cum":
      case "ero":
      case "cuckold":
      case "blowjob":
      case "bdsm":
      case "ahegao":
      case "ass":
      case "orgy":
      case "panties":
      case "thinghs":
      case "tentacles":
      case "pussy":
      case "sfwneko":
      case "zettairyouiki":
        reply("<❗️> Aguarde um pouco, realizando seu pedido! Caso seja em grupo, estou enviando no privado por segurança!");
        const vO1166 = {
          buttonId: "" + prefix + command,
          buttonText: {
            displayText: "✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞"
          },
          type: 1
        };
        buttonss = [vO1166];
        const vO1167 = {
          url: "https://www.nezsab-apis.xyz/nsfw/" + command + "?apikey=" + keyapi
        };
        const vO1168 = {
          image: vO1167,
          caption: "▢ ⌁ *Olá " + pushname + "*, aqui está o seu pedido!\n▢ ⌁ *Horário solicitado:* " + v123 + "\n▢ ⌁ Deseja mais hentai _*" + command + "*_? Clique no botão abaixo:",
          footer: "By: " + NomeDoBot,
          buttons: buttonss,
          headerType: 4
        };
        buttonMessagse = vO1168;
        const vO1169 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, buttonMessagse, vO1169);
        break;
      case "nsfwneko":
        reply("<❗️> Aguarde um pouco, realizando seu pedido! Caso seja em grupo, estou enviando no privado por segurança!");
        const vO1170 = {
          buttonId: "" + prefix + command,
          buttonText: {
            displayText: "✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞"
          },
          type: 1
        };
        buttonss = [vO1170];
        const vO1171 = {
          url: "https://www.nezsab-apis.xyz/nsfw/neko?apikey=" + keyapi
        };
        const vO1172 = {
          image: vO1171,
          caption: "▢ ⌁ *Olá " + pushname + "*, aqui está o seu pedido!\n▢ ⌁ *Horário solicitado:* " + v123 + "\n▢ ⌁ Deseja mais hentai _*" + command + "*_? Clique no botão abaixo:",
          footer: "By: " + NomeDoBot,
          buttons: buttonss,
          headerType: 4
        };
        buttonMessagse = vO1172;
        const vO1173 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, buttonMessagse, vO1173);
        break;
      case "yuri":
        reply("<❗️> Aguarde um pouco, realizando seu pedido! Caso seja em grupo, estou enviando no privado por segurança!");
        const vO1174 = {
          buttonId: "" + prefix + command,
          buttonText: {
            displayText: "✰ۜۜ͜͡𝐏𝐑𝐎𝐗𝐈𝐌𝐎-𝐇𝐄𝐍𝐓𝐀𝐈🔞"
          },
          type: 1
        };
        buttonss = [vO1174];
        const vO1175 = {
          url: "https://www.nezsab-apis.xyz/nsfw/" + command + "?apikey=" + keyapi
        };
        const vO1176 = {
          image: vO1175,
          caption: "▢ ⌁ *Olá " + pushname + "*, aqui está o seu pedido!\n▢ ⌁ *Horário solicitado:* " + v123 + "\n\nDeseja mais hentai de *" + command + "*? _Clique no botão abaixo e aguarde!_",
          footer: "By: " + NomeDoBot,
          buttons: buttonss,
          headerType: 4
        };
        buttonMessagse = vO1176;
        const vO1177 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, buttonMessagse, vO1177);
        break;
      case "covidbr":
        teks = args.join(" ");
        covidnb = await fetchJson("https://nezsab-apis.xyz/api/covidmundo?apikey=" + keyapi);
        anu = "ೋ❀ *💉𝐂𝐎𝐕𝐈𝐃-𝟏𝟗 𝐁𝐑🇧🇷* ❀ೋ\nೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘯𝘰 𝘉𝘳𝘢𝘴𝘪𝘭⧽ " + covidnb.casos + "\nೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘩𝘰𝘫𝘦⧽ " + covidnb.casos_hoje + "\nೋ❀ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘔𝘰𝘳𝘵𝘦𝘴⧽ " + covidnb.mortes + "\nೋ❀ 𝘔𝘰𝘳𝘵𝘦𝘴 𝘩𝘰𝘫𝘦⧽ " + covidnb.mortes_hojes + "\nೋ❀ 𝘙𝘦𝘤𝘶𝘱𝘦𝘳𝘢𝘥𝘰𝘴⧽ " + covidnb.recuperadosPorMilhao + "\nೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘢𝘵𝘪𝘷𝘰𝘴⧽ " + covidnb.active + "\nೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘤𝘳𝘪𝘵𝘪𝘤𝘰𝘴⧽ " + covidnb.criticos + "\nೋ❀ 𝘛𝘦𝘴𝘵𝘦𝘴 𝘵𝘰𝘵𝘢𝘪𝘴⧽ " + covidnb.testes;
        const vO1178 = {
          text: anu
        };
        const vO1179 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1178, vO1179);
        break;
      case "covid2":
        if (args.length < 1) {
          return env("Insira o código, exemplo.\n#covid RJ");
        }
        Ingrida = await fetchJson("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/" + args[0], {
          method: "get"
        });
        tristan = "✅Selecionado: " + Ingrida.state + "\n\n🗣️Pedido: " + Ingrida.uf + "\n\n🦠Infectados: " + Ingrida.cases + "\n\n☠️Mortes: " + Ingrida.deaths + "\n\n👥Não confirmado: " + Ingrida.suspects + "\n\n📅Data de atualização: " + Ingrida.datetime + "️️";
        reply(tristan);
        break;
      case "covidmundo":
        v427 = await fetchJson("https://nezsab-apis.xyz/api/covidmundo?apikey=" + keyapi);
        v427 = v427.resultado;
        pla = "ೋ❀ *💉𝐂𝐎𝐕𝐈𝐃-𝟏𝟗 𝐌𝐔𝐍𝐃𝐎🌎* ❀ೋ\n";
        pla += "ೋ❀ 𝘗𝘢𝘪́𝘴𝘦𝘴 𝘈𝘧𝘦𝘵𝘢𝘥𝘰𝘴⧽ " + v427.paisesAfetados + "\n";
        pla += "ೋ❀ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘊𝘢𝘴𝘰𝘴⧽ " + v427.casos + "\n";
        pla += "ೋ❀ 𝘊𝘢𝘴𝘰𝘴 𝘩𝘰𝘫𝘦⧽ " + v427.casos_hoje + "\n";
        pla += "️ೋ❀ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘖́𝘣𝘪𝘵𝘰𝘴⧽ " + v427.mortes + "\n";
        pla += "ೋ❀ 𝘖́𝘣𝘪𝘵𝘰𝘴 𝘩𝘰𝘫𝘦⧽ " + v427.mortes_hojes + "\n";
        pla += "ೋ❀ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘙𝘦𝘤𝘶𝘱𝘦𝘳𝘢𝘥𝘰𝘴⧽ " + v427.recuperados + "\n";
        pla += "ೋ❀ 𝘙𝘦𝘤𝘶𝘱𝘦𝘳𝘢𝘥𝘰𝘴 𝘩𝘰𝘫𝘦⧽ " + v427.recuperados_hoje + "\n";
        pla += "ೋ❀ 𝘗𝘰𝘱𝘶𝘭𝘢𝘤̧𝘢̃𝘰 𝘛𝘰𝘵𝘢𝘭⧽ " + v427.população + "\n";
        const vO1180 = {
          text: pla
        };
        const vO1181 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1180, vO1181);
        break;
      case "buscaimg":
      case "buscarimg":
        if (!q) {
          return reply("❎ Que imagem você quer que eu pesquise? ");
        }
        reply(mess.wait);
        let v392 = await hx.pinterest(q);
        let v393 = v392[Math.floor(Math.random() * v392.length)];
        let v394 = await getBuffer(v393);
        imgg = "Pronto";
        const vO1182 = {
          image: v394,
          caption: imgg
        };
        const vO1183 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1182, vO1183);
        break;
      case "block-tmp":
        if (!isPremium) {
          return reply(enviar.msg.donosmt);
        }
        if (!args[0]) {
          return reply("informe o numero do usuario");
        }
        if (!mek.message.extendedTextMessage) {
          return reply("mencione no @ ");
        }
        bv = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        if (vF14(from) && vF14(from).map(p333 => p333.userId).includes(bv)) {
          return reply("Este usuario já está bloqueado");
        }
        if (!args[1]) {
          return reply("Informe o tempo\nex: 31d = 31 dias");
        }
        vF12(from, {
          userId: bv,
          expired: toMs(args[1]) + Date.now()
        });
        reply("O usuario " + bv.split("@")[0] + " Foi bloqueado temporariamente");
        break;
      case "unblock-tmp":
        if (!isPremium) {
          return reply(enviar.msg.donosmt);
        }
        bv = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        if (!vF14(from).map(p334 => p334.userId).includes(bv)) {
          return reply("Este usuario não está bloqueado");
        }
        vF13(from, bv);
        reply("O usuario " + bv.split("@")[0] + " Foi desbloqueado");
        break;
      case "listablock-tmp":
        tkks = "╭─*「 *Usuarios BLOQUEADOS* 」\n";
        for (let v395 of vF14(from).map(p335 => p335.userId)) {
          tkks += "│+  " + v395 + "\n";
        }
        tkks += "│+ Total : " + vF14(from).map(p336 => p336.userId).length + "\n╰──────*「 *𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿* 」*────";
        const vO1184 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, {
          text: tkks.trim()
        }, vO1184);
        break;
      case "unblock-tmp2":
        if (!isPremium) {
          return reply(enviar.msg.donosmt);
        }
        bv = args[0] + "@s.whatsapp.net";
        if (!vF14(from).map(p337 => p337.userId).includes(bv)) {
          return reply("Este usuario não está bloqueado");
        }
        vF13(from, bv);
        reply("O usuario " + bv.split("@")[0] + " Foi desbloqueado");
        break;
      case "criartabela":
      case "criartbl":
      case "criartab":
        if (!isGroupAdmins && !isPremium) {
          return reply("Só adm ou dono pode utilizar este comando.");
        }
        msgz = args.join(" ");
        msgtmpol = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
        datinhaofc = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
        const vO1185 = {
          Horario: msgtmpol,
          Data: datinhaofc,
          Tabela: msgz
        };
        var vVO1185 = vO1185;
        if (!fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
          fs.writeFileSync("./func/tabela/tabela-" + from + ".json", JSON.stringify(vVO1185, null, 2));
        } else if (fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
          fs.unlinkSync("./func/tabela/tabela-" + from + ".json");
          fs.writeFileSync("./func/tabela/tabela-" + from + ".json", JSON.stringify(vVO1185, null, 2));
        }
        reply("Tabela do grupo foi criada com sucesso..");
        break;
      case "tabelagp":
      case "tabeladogp":
      case "tabelinha":
        if (!fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
          reply("Cade a tabela, cria ela com o comando\nExemplo : " + prefix + "criartabela cuzinho dotoso: e etc ..");
        }
        const v396 = JSON.parse(fs.readFileSync("./func/tabela/tabela-" + from + ".json"));
        blity = "- ⏰ Horário que criou a Tabela : " + v396.Horario + "\n\n- 🗓️ Data que criou a Tabela : " + v396.Data + "\n\n - Tabela : " + v396.Tabela;
        const vO1186 = {
          text: blity
        };
        const vO1187 = {
          quoted: mek
        };
        sock.sendMessage(from, vO1186, vO1187);
        break;
      case "anotar":
      case "tirar_nota":
      case "rmnota":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!isGroupAdmins) {
          return reply(mess.only.admin);
        }
        if (command == "anotar") {
          var [v397, v398] = q.trim().split("|");
          if (!v397 || !v398 || !q.includes("|")) {
            return reply("Digite o título da anotação e o texto que deseja anotar..\nExemplo: " + prefix + "anotar cachorro|Cachorros são bom pra comer na Venezuela...");
          }
          if (JSON.stringify(anotar).includes(from)) {
            var v399 = anotar.map(p338 => p338.grupo).indexOf(from);
            if (JSON.stringify(anotar[v399].puxar).includes(v397)) {
              var v400 = anotar[v399].puxar.map(p339 => p339.nota).indexOf(v397);
              if (anotar[v399].puxar[v400].nota == v397) {
                return reply("Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n" + prefix + "tirar_nota " + v397);
              }
            }
          }
          if (!JSON.stringify(anotar).includes(from)) {
            const vO1188 = {
              nota: v397,
              anotacao: v398
            };
            const vO1189 = {
              grupo: from,
              puxar: [vO1188]
            };
            anotar.push(vO1189);
            fs.writeFileSync("./func/tabela/anotar.json", JSON.stringify(anotar));
            reply("Anotação registrada com sucesso...");
          } else {
            const vO1190 = {
              nota: v397,
              anotacao: v398
            };
            anotar[v399].puxar.push(vO1190);
            fs.writeFileSync("./func/tabela/anotar.json", JSON.stringify(anotar));
            reply("Anotação registrada com sucesso...");
          }
        } else {
          if (!q) {
            return reply("Digite qual anotação deseja tirar pelo título..");
          }
          if (JSON.stringify(anotar).includes(from)) {
            var v399 = anotar.map(p340 => p340.grupo).indexOf(from);
            if (JSON.stringify(anotar[v399].puxar).includes(q)) {
              var v400 = anotar[v399].puxar.map(p341 => p341.nota).indexOf(q);
            }
          }
          if (anotar[v399].puxar.map(p342 => p342.nota).indexOf(q) < 0) {
            return reply("Esta nota não está inclusa, verifique com atenção...");
          }
          anotar[v399].puxar.splice(v400, 1);
          fs.writeFileSync("./func/tabela/anotar.json", JSON.stringify(anotar));
          reply("Anotação " + q + " tirada com sucesso...");
        }
        break;
      case "anotacao":
      case "anotacoes":
      case "nota":
      case "notas":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (command == "anotacao" || command == "nota") {
          if (!q) {
            return reply("Digite o título da anotação que deseja puxar..");
          }
          if (!JSON.stringify(anotar).includes(from)) {
            return reply("Este grupo não tem nenhuma anotação...");
          }
          var v399 = anotar.map(p343 => p343.grupo).indexOf(from);
          if (!JSON.stringify(anotar[v399].puxar).includes(q)) {
            return reply("Não contém nenhuma anotação com este título.");
          }
          var v400 = anotar[v399].puxar.map(p344 => p344.nota).indexOf(q);
          vF21("〈 " + anotar[v399].puxar[v400].anotacao + " 〉");
        } else {
          var v399 = anotar.map(p345 => p345.grupo).indexOf(from);
          if (anotar[v399].puxar.length == 0) {
            return reply("Este grupo não tem nenhuma anotação...");
          }
          var v399 = anotar.map(p346 => p346.grupo).indexOf(from);
          var v401 = anotar[v399].puxar;
          txtin = "──────────────────\n\n";
          for (i = 0; i < v401.length; i++) {
            txtin += "↝ Anotação: ⟮ " + anotar[v399].puxar[i].nota + " ⟯ - 〈 " + anotar[v399].puxar[i].anotacao + " 〉\n\n";
          }
          txtin += "──────────────────\n\n";
          vF21(txtin);
        }
        break;
      case "tabela":
        reply("\n𝐓𝐀𝐁𝐄𝐋𝐀 𝐁𝐘: ◈ 月⃟亮 ☾٭ 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿\n\n\n𝐓𝐀𝐁𝐄𝐋𝐀 𝐃𝐄 𝐋𝐄𝐓𝐑𝐀𝐒 🌀\n𝛢 𝛥 𝛬\xA0 𝜜 𝜟 𝜵 𝐴 𝐀 𝑨 𝙰 卂 么 入 刄 公\nB 𝛣 𝚩 𝜝 𝐵 ℬ 𝓑 𝕭 乃 岌 多仍 \nC 𝐂 𝑪 𝐶 𝓒\xA0 𝕮 匚 ር ℂ\nD𝐃\xA0\xA0 𝑫 𝐷 𝓓 ᗪ 𝕯 \nE 玄 𝐄 𝑬 𝐸 𝚬 𝚵 𝛴 𝛯 𝜮 𝜩 ℰ 乇 ꏂ \nF 𝐅 𝑭 𝐹 ℱ 𝕱 𝔉 千 \nG 𝐆 𝑮 𝐺 Ꮹ\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 \nH 𝐇 𝑯 𝐻 ℋ ℌ 卄 ꫝ ዘ\xA0\xA0 \nI 𝙸 𝕚 𝐈 𝑰 𝐼 𝔦 𝓲 | ቾ\nJ 𝔍 𝐉 𝑱 𝐽 𝒥\xA0 𝓳\xA0\xA0\xA0\xA0\xA0\xA0 \nK 𝐊 𝑲 𝐾 𝚱 𝛫 𝜥 𝒦 \nL 𝐋 𝑳 𝐿 ℒ 𝕷 ꪶ ㄥ廴\nM 𝐌 𝑴 𝑀 ℳ ᗰ 𝕸 𝔐 ꪑ 爪 𝛭\nN 𝐍 𝑵 𝑁 𝓝 ꪀ 𝚴 𝚴 ᜰ ꤾ ꡃ\nO 𝐎 𝑶 𝑂𝒪 ꪮ ㄖ 𝚯 𝚶 𝛳 𝛩 𝛷 ❍ 〄\nP 𝐏 𝑷 𝑃 𝙿 ℙ 𝕻 𝔓卩 𝛲 𝜬\nQ 𝐐 𝑸 𝑄 𝕼 Ҩ\nR\xA0 𝐑 𝑹 𝑅 ℛ ℜ 𝕽 尺\xA0\xA0\xA0\xA0 \nS 𝐒 𝑺 𝑆 丂 令\nT\xA0 𝑻 𝑇 ㄒፕ 𝚻 𝛵 亇\nU 𝐔 𝑼 𝑈𝒰\xA0 ᑌ 𝔘 𝖀 ꪊ ㄩび\nV\xA0 𝑽 𝑉 𝒱\xA0 ꪜ 𝛶 𝜰\nW 𝐖 𝑾 𝑊 ᗯ ᭙ 山 ሠ 𝜔 Ꮤ ꪡ ꪝ ꤿ\nX 𝕏 𝐗 𝑿 𝑋 𝒳\xA0 ᥊ 乂 ꉧ 𝛸 𝜲 ꪎ\nY 𝐘 𝕐 𝒀 𝑌 ꪗ ㄚ ሃ 𝜳 \n\nINÍCIOS🌀\nৡৢ͜͡\xA0\xA0 ঔৣ͜͡\xA0\xA0 ᬊ͜͡\xA0\xA0\xA0 ೈ፝͜͡\xA0\xA0 ꯴᩠ꦽꦼ\xA0 ░⃟⃛ ➮ ⏤͟͟͞͞ \n\nFIM PARA NICK🌀\n݈݇─\xA0 ͜〉⛧ ᭄ ⸸ ᭄ 𖤐⁩᭄ꦿ ᬏ᭄ ⛤⃗͜ᬏ᭄\xA0\xA0 \n\n𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 🌀\n\xA0\xA0\xA0\xA0 ⃟\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ⃤\xA0\xA0\xA0\xA0 ⃝\xA0\xA0\xA0\xA0\xA0 ᬽ ۝ ⛧ ᪤ ⸸ ᬛ ᭆ ᭩ །\xA0 ᬽ\n\xA0\xA0\xA0\xA0 ⃢\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ⚚ ♕ ♔ ⛥ ᭟\xA0 ֎ ◌ ⚝ ⅌ 𝆮 ۞ ༒ ༆ ༅ ༄ ༃ ༀ ༁ ༺ ༻ ࿐ ࿘ ࿕ ࿖ ࿗ ࿔ ࿓ ࿒ ࿑ ࿋ ࿉ ࿄\xA0 ࿅࿆\xA0 ░ ▒ ▓\xA0 ◍\xA0\xA0 ▸ ▹ ▿ ▾ ▵ ▴ ◊ ◔ ◕ ◖ ◗☙\xA0 ☥ ☤\xA0 ☻ ☼ ☽ ☾ ☿\xA0 ♁ ♃ ♘ ♡ ♞ ♱ ♰\xA0 ⚶ ✢ ✤\xA0 ✔ ✕ ✗ ✘ ✰ ❀ ❁ ❃ ✻\xA0 ✵ ✯ ✭ ✧ ✦ ❍ ❐ ❑\xA0 ❒\xA0 ❏ ⸙ ⸎ ꧁ ꧂ シ ツ ﭢ ღ ✞ ✟ ༈ ✄ ⊱ ⊰\xA0 இ ༎ 🝐 🝳 🝲 🜊 🜋 🜌 🜏 🜎 🜘 🜚 🜛 🜜 🜥 🜞 🜟 🜢 ᭁ 𝀶\xA0 ᬽ ᭪ ᭦ ᭝ ᭕ ᭘ ᬊ ᬉ ᬏ\xA0 ᬇ ᬠ ᬨ\xA0 ᭄ ❦ ⦚ ⧛ ⧚ ⿰ ⿱ ⿴ ⿻ 〄 々〆 〃 〮\xA0\xA0\xA0\xA0 ҈\xA0\xA0\xA0\xA0\xA0 ҉\xA0\xA0 ೠ ಝ ಋ ಊ ౾ ౠ ෴ ๛ ༗ ༖ ༕ 卐 ㌌\xA0\xA0 ͢\xA0\xA0 𝁮 𝀑 \n\n𝐈𝐍𝐈𝐂𝐈𝐎𝐒 𝐏𝐀𝐑𝐀 𝐍𝐈𝐂𝐊 🌀 \n\nᬊ͜͡\xA0\xA0 ঔৣ͜͡\xA0\xA0 ⏤͟͟͞͞🌻\xA0 𖥨֗\xA0 ೈ፝͜͡\xA0\xA0\xA0 🌾⃟ꦿ⸼\xA0 ✧͜͡҉\xA0\xA0\xA0 ঔৣ͜͡➳ ꧁͜͡\xA0\xA0\xA0 ৎ❥̤֟٭ۣۜ\xA0\xA0 ৡৢ͜͡\xA0\xA0\xA0 ঔৣ͜͡҉❅ۣ̤ۜ\xA0\xA0 ⿻ꦿꦂ\xA0 ❥ꦿꯧָ\xA0\xA0 ᭥ꩌ゚໋ ꯴᩠ꦽꦼ\xA0\xA0 ᭺ᮀฺ۪۟𖡎’￫ ࿂ꦿ๋͚ꪳ↛ ꪶ⚘࿆ꦿི ݈݇\xA0\xA0 ᥀·࣭࣪̇˖ ᠂࣭. ⃝༘⃕🍒 ✧༷ꦿ݈۟⸼͓۬࣪ꪶ\xA0 ནཹꦿ\xA0 ❀࿆⃧፝྅⃕ꦿ\xA0\xA0 ွဳ⃟ꦿ\xA0\xA0 \n🌹፝⃟༘┼ ᜴⃕\xA0 ░⃟⃛ ➮ ⿻͜͡\xA0\xA0 ꪶཷ୭͓ꦿ݉ᐧᨗ\xA0 ✞⃟❐͜͡ \n\n𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 𝐄𝐒𝐓𝐑𝐀𝐍𝐇𝐎𝐒 🌀\n𒁂𒀽𒁖𒁯𒁮𒂄𒂷𒇲𒈝𒈞𒈟𒈩𒉂𒉁𒈑𒈒𒉫𒉜𒉴𒉰𒊊𒊋𒊓𒊫𒊺𒊻𒊼𒊽𒋦𒋨𒌄𒌃𒌅𒌜𒌢𒌵𒍥𒍤𒍣𒍓𒍟𒐦𒐪𒑓𒊹𒇫𒇋𒆖𒆕𒄬 \n\n𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 𝐄𝐆𝐈𝐏𝐂𝐈𝐎𝐒 🌀\n𓁹𓁺𓁻𓁼𓁽𓁾𓁿𓂔𓂓𓂛𓂜𓂞𓂠𓂢𓂣𓂤𓁵𓁴𓁤𓁜𓁳𓁣𓁪𓁢𓁱𓁡𓁑𓁊𓁍𓁎𓁌𓂓𓂑𓃚𓃙𓃚𓃛𓃜𓃝𓃟𓃟𓃨𓃪𓃬𓃭𓃸𓃶𓃾𓅉𓅂𓅄𓅆𓅙𓅓𓅌𓅖𓅗𓅢𓅱𓅪𓅭𓅮𓆈𓆂𓆅𓆔𓆖𓆖𓆠𓆛𓆜𓆞𓆞𓆣𓆤𓆦𓆟𓆺𓆳𓆵𓆶𓇈𓇓𓇒𓇥𓇣𓇭𓉡𓉢𓉦𓉦𓉸𓉻𓉔𓊢𓊞𓊭𓋐𓋖𓋸𓌆𓌱𓌺𓍙𓍢𓏱𓏲𓏵𓏠𓏤𓏑𓏎𓂸 \n\n𝐃𝐄𝐂𝐎𝐑𝐀𝐂𝐎𝐄𝐒 🌀\n❒᭄꥓〭🌹 ᠂࣭. ⃝༘⃕🍒 ⸵░⃟🌻𖥨ํ∘̥⃟⸽⃟🌹 ｡˚༷🌸｡˚༷￫ 🌙ꪾ〬ꩌ۪٬ླྀ\xA0 ❑ꦽꦷ🌻⏤͟͟͞͞🍹⁖ฺ۟̇࣪·֗٬̤⃟🌸 \n\n𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒\xA0 𝐂𝐇𝐈𝐍𝐄𝐒𝐄𝐒🌀\n㌀ ㌁ ㌂ ㌄ ㌇ ㌚ ㍃ ㍈ ㍖ ㌭ ㌡ ㌠ ㌙ ボ テ ス ツ ガ カ オ ぼ ⽔ ⽃ ⼪ ⼢ ⼒ ⻰ ㋒ ㋚ ㋔ ㋛ ㋘ ㋠ ㋡㐌 㐈 㐲 㐳 㑂 㑄 㐱 㒊 㑱 㓛 㓘 㓗 㓆㕣 㕚 㕛 㘪 㘦 㘶 㠫 㡍 㡴 㡲 㡰 㡱 㣊 㣍 㣻 丈 丕 \n\nOutros símbolos🌀\nϟ ↯ ⛧ ⸸\xA0 ♞\xA0 ♘\xA0 ࿗\xA0 ࿕\xA0 ⛥\xA0 ツ\xA0 シ\xA0 ♰\xA0 ♱\xA0 卐 ✟\xA0 ✞ \n\nSímbolos pra colocar no meio do nick🌀\n\xA0\xA0\xA0 ⃢\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ⃤\xA0\xA0 ⃟\xA0\xA0\xA0\xA0\xA0\xA0 ⃝\xA0\xA0\xA0\xA0 - SETAS -\xA0\xA0\xA0 ͢\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ⃮\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ⃖\xA0\xA0\xA0\xA0\xA0\xA0 ⃯\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ͍ ↠ ↡ ↢ ↚ ↛ ↜ ↝ ↞ ↟ ↣↤↥↦↧↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇖⇕⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿ \n\nCOISAS PRA BOTAR NO INÍCIO E FIM DO NOME\n〈〉\xA0 《》 「」『』【】〔〕〖〗〘〙〚〛⟬⟭ ⟦⟧ ⟨⟩ ⟪⟫ ⟮⟯ \n\nNÚMEROS🌀\n➊\xA0➋\xA0➌\xA0➍\xA0➎\xA0➏\xA0➐\xA0➑\xA0➒\xA0⓿\n𝟏\xA0𝟐\xA0𝟑\xA0𝟒\xA0𝟓\xA0𝟔\xA0𝟕\xA0𝟖\xA0𝟗\xA0𝟎 \n\nᱹ▻\xA0\xA0\xA0\xA0\xA0 ҂͓꣣۫۫🍉۫ꢁ\xA0\xA0\xA0\xA0 ᯢ❁⃪ ◗\xA0\xA0\xA0\xA0 ░⃟⃛🍎༘݊➮ \n\n꒰১°᳝ꯥ‧ٓ➭\xA0\xA0\xA0 ꒰ෑ᪲꒱\xA0\xA0\xA0\xA0 ░ෆෑ\xA0\xA0\xA0 ❒᭄꥓〭🍌\xA0\xA0 ᠂⸱ེ̀.𖧷 \n\n\xA0 ᩠░⃟⃜🍏ꪳ۫₎۬۟〬\xA0\xA0\xA0\xA0\xA0 ᭥ꩌ゚໋ ꯴̸᩠🍩⭛\xA0\xA0\xA0\xA0\xA0 ❀࿆⃧፝྅⃕ꦿ\xA0\xA0\xA0\xA0\xA0 〭〭〬〬⿻❥〬〬〬ꦿ[ \n\n\xA0 ᩠ ꣣ʹ͚🍣\xA0\xA0\xA0\xA0 𖦹҉ २꫶\xA0\xA0 ╰៚݈݇\xA0\xA0\xA0\xA0\xA0 ⸵░⃟🐛̸꙰\xA0\xA0\xA0\xA0 ᱸᱹ𖠳𖣻 \n\n᭥ꩌ゚໋ ꯴᩠ꦽꦼ💌↦\xA0\xA0\xA0\xA0 ꔛ⃟⿻⃕⸵ࣻ꒰🍉꒱\xA0\xA0 ❨᯽ᨘ‛᩠⋆ꣻ\xA0\xA0\xA0\xA0 𖨮𖡎｡ \n\n㇀🐿 ۬.͜˖-\xA0\xA0\xA0 ⸾〬۝ꦿ҂⃨\xA0\xA0\xA0\xA0 ཷ꒱⸼\xA0\xA0 🌙ꪾ〬ꩌ۪٬ླྀ\xA0\xA0 ▩݅͜𖨌•.̇ \n\n᭥ꩌ゚໋ ꯴̸᩠🍩⭛\xA0\xA0\xA0\xA0\xA0 '꩖࿆͜͡𖡜•↣\xA0\xA0\xA0 ∎🚀\xA0\xA0\xA0 ࿂ꦿ๋͚ꪳ↛ \n\n\xA0 ᠌᠍᠍᠌᠎᠋᠎᠎ᤧᱸᱹ༊↯🍄\xA0\xA0\xA0\xA0\xA0\xA0 ᠌᠍᠍᠌᠎᠋᠎᠎ᤧᱸᱹ༊⇝\xA0\xA0\xA0\xA0 ꔷ㆒⸼݇҉ֻ᠂⃟🍉\xA0\xA0\xA0 ╰꫶ ࿉۟࣪࣪᭝ \n\nꔛ⃟⿻ྀ⃕🍒\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ⃝༘⃕🍒´݈\xA0\xA0\xA0\xA0\xA0\xA0 ᠂࣭.\xA0\xA0 ⃝༘⃕🍒↳\xA0\xA0\xA0 🎐·۪۫ˑ݈↷ \n\n᥀───🍰ٜᩦ୭\xA0\xA0\xA0\xA0 ꒰───🍰·ٜ۬･\xA0\xA0\xA0\xA0 🎡⿻ꦿꪳ։ \n\n🍩ꪶཷ୭͓ꦿ݉ᐧᨗ\xA0\xA0\xA0\xA0\xA0 ✧༷ꦿ݈۟⸼͓۬࣪ꪶ🌹\xA0\xA0\xA0\xA0 🍧.ᩦ୭✧ࣶᭂ\xA0\xA0\xA0\xA0 𖠵꩜⭟ \n\n╶ 🦔 ❪❥ꦿꯧָ❫\xA0\xA0\xA0\xA0\xA0 •.̇𖥨֗🍓⭟\xA0\xA0\xA0\xA0\xA0\xA0 ๋𖡜 ݈݈-݇\xA0\xA0\xA0\xA0 ─ ࿊⃨१ \n\n❥.ᨘ۫.ꪶ\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 .ᨘ۫.ꪶ🍧 ۪→\xA0\xA0\xA0\xA0\xA0 ᭥⃕꙰҉ ◍̤￫ 🌹࣭࣭◗\xA0\xA0 ❪🍑ꦿེ≭•۟.❫\xA0\xA0\xA0\xA0\xA0 ❪🛸ꦿꯧ⸼❫\xA0\xA0\xA0 𖣠ᮬ·̣̇꧈\xA0\xA0\xA0 ꪶ⚘࿆ꦿི ݈݇- \n\n𖧹⸻𖠚ꪴ۟〬\xA0 ╶ 🦔 ❪❥ꦿꯧָ❫\xA0\xA0\xA0\xA0\xA0 ❪̣࣭̇࣪·ฺ۪۟𖡎｡\xA0\xA0\xA0\xA0 𖣠ᮬ·̣̇͜᭺ \n\n⁖ฺ۟̇࣪·֗٬̤⃟🌻\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ░░۟⃟🌻༘⸻\xA0\xA0\xA0\xA0\xA0\xA0 ·᳝∴̣࣭🌻·᳝∴̣࣭ \n\n⸻⿻ꦿꯧ๛\xA0\xA0\xA0 •.̇𖠵⃯🍧\xA0\xA0\xA0 ‡𖧱১\xA0\xA0 ᥀·࣭࣪̇˖💌◗ \n\n❪°·ꯥ̣ꩍ🍉↣\xA0\xA0\xA0 ๛ᤢ᪴🍑↯\xA0\xA0\xA0\xA0 ꪖ⚘⃯\xA0\xA0\xA0\xA0 𖠵⃕⁖\xA0\xA0\xA0\xA0\xA0 ❑ꦽꦷ꧈ \n\n────🛸°·ꯥ̣ꩍ\xA0\xA0\xA0 ─────̥˚᳝᳝𖥻🍧̇⸱ \n\nꓻ┼\xA0\xA0\xA0\xA0\xA0\xA0 ꦽꦽꦼ➮\xA0\xA0\xA0\xA0 ꦽꦽꦶ꧈\xA0\xA0\xA0\xA0 ຊ✏\xA0\xA0\xA0\xA0 ❀ꦿ꩟ \n\n───𖡜̸｡᭭\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ꫶─────୬۟◍⭟\xA0\xA0\xA0\xA0\xA0 ꨴ◍⸱￫ \n\n▩⃕͜ꦿ૰￫\xA0\xA0\xA0\xA0 ‡ᮀ১🌹；\xA0\xA0\xA0 ᭥ꙮ•̇‡ꪳ͢⠂ᨗ\xA0\xA0\xA0 🍓ꦽ᪱ꩍ \n\n᳝'꩖͜͡•꙰─»\xA0\xA0\xA0\xA0 ───𖡜ꦽ̸ོ˚￫\xA0\xA0\xA0\xA0 ▩⃪ꦽꦶ̸꧇\xA0\xA0\xA0\xA0\xA0 ᭺ᮀฺ۪۟𖡎’￫\xA0\xA0\xA0 \n\n\xA0 ꓸ᭄ꦿ⃔⸙\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ⿻ꦿꦂ🍑\xA0\xA0\xA0\xA0\xA0\xA0 ░༵۟🍉ֻ͛➜\xA0\xA0\xA0\xA0\xA0\xA0 ⎝❑⃕ཷ🍟 \n\n‹‹❑ౄ🍒\xA0\xA0\xA0 ླ🍑❜︧༷︧➭\xA0\xA0\xA0 ꪶ🍄 ⃦⭛\xA0\xA0\xA0\xA0 ❍⃕⃟᎒⃟̀🍬ི૪ \n\n｡˚༷ᮀ｡˚༷￫\xA0\xA0\xA0\xA0 ｡˚༷｡˚༷🍒➮\xA0\xA0 ꓻ┼ꦽ᪱ꩍ🦔꧈\xA0\xA0\xA0 ⚘๋࿆.•۟ \n\n۝\xA0\xA0\xA0\xA0 ❪.🚀᪽̩¡❫\xA0\xA0\xA0\xA0 ๛·࣭̣࣪̇⸱🍩◗\xA0\xA0\xA0\xA0 ❒𖥻ꦼꦽ➮\xA0\xA0 \n\nꕥꦿོ꧈\xA0\xA0\xA0 ───ཹ🌹 ݇-݈\xA0\xA0\xA0 ❪১°᳝ꯥ‧ٓ↵❫\xA0\xA0\xA0\xA0\xA0 ১°᳝ꯥ‧ٓ🛸 \n\n꒰🍒১°᳝ꯥ‧ٓ⭝\xA0\xA0\xA0\xA0\xA0\xA0 ꦽꦁ১︧.۪̇〬°⃟᮪݇⃟⃟🍧\xA0\xA0\xA0\xA0\xA0\xA0 ⃦ꦦꪳ՚𖦹\xA0\xA0\xA0\xA0\xA0\xA0 ⃦ꦦꪳ՚☕\xA0\xA0 \n\n◖🍑ནཹꦿ◗\xA0\xA0\xA0 ◖🍒ནཹꦿ↣\xA0\xA0\xA0 𖣠’᪵১↣\xA0\xA0\xA0\xA0 ᳝'꩖͜͡𖧷𖦝\xA0\xA0\xA0 \n\n────𖦹५ॱ\xA0\xA0\xA0\xA0 ᳝'꩖͜͡ꦿꦼ🍣\xA0\xA0\xA0\xA0 ◍ཻꢀ᮪⸱ᨗᨗᨗ🛸\xA0\xA0\xA0\xA0 ◍ཻꢀ🌹૰ \n\n惢🍑҂\xA0\xA0\xA0\xA0\xA0\xA0 惢🍉’݆￫\xA0\xA0\xA0\xA0 🌹ꦽꦼ̷১\xA0\xA0\xA0\xA0\xA0 ’٬࿊⃟☽ᝦ\xA0\xA0\xA0 \n\nꛒ੭〭۬🍒ᨘ₎\xA0\xA0\xA0\xA0\xA0 ᨆᨘ᭲.˚🍓྆≭\xA0\xA0\xA0\xA0 ◦ᮀᨘ۬․ٰ৴🍚੭\xA0\xA0\xA0\xA0\xA0 🍉⃟᮪〭۬̇〬⃟˖ꪶ\xA0\xA0\xA0 \n\n᳝'꩖͜͡⚘࿆ํ·ٜꪶ\xA0\xA0\xA0\xA0\xA0 ⚘࿆꯴˖࣭̣᪽̇ ๋──\xA0\xA0\xA0\xA0\xA0\xA0 ꫶ ⃙◌⃙◍\xA0\xA0\xA0\xA0 ❪̣࣭̇࣪·ฺ۪۟࿃❫̣࣭̇࣪·ฺ۪۟ \n\n🍒 ⃟᮪〭۬̇〬⃟˖⸱ೇ\xA0\xA0\xA0 🌺ꦽꦼ̷•ˑ˒\xA0\xA0\xA0\xA0 🥥ꦽꦼ̷ꪶ\xA0\xA0\xA0\xA0 𖥕𖠗∙۟ᱹ۫↻ \n\n﹎૰ཾ⋅ꩌꦿ🍧｡\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ❪𖦄͟𖦉̤۪᭮.↣\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ៍ོ⃨̇𖦖🍑⭟\xA0\xA0\xA0\xA0 \n\n✎․ೇ︨︧ཾ✾▹\xA0\xA0\xA0\xA0 𖤃·۪۫ˑ݈↷\xA0\xA0\xA0\xA0\xA0 ⸻⌔☐❜｡۪۪۫۫↛ \n\n｟𖠲۪۫ᮀ〭⑇⃨᪽᪴｠ ╰ํ⃝̸〭∙۬·𖤃\xA0\xA0\xA0 ❪🍧ฺ࣭࣪͘ꕸ▸\xA0\xA0\xA0 𖥨ํ∘̥⃟⸽⃟💌৴▸ \n\n𖥨ํ∘̥⃟⸽⃟🎐㇀\xA0\xA0\xA0\xA0\xA0 🌵ฺ࣭࣪͘◞,〬⎼\xA0\xA0\xA0\xA0\xA0 ꗏฺ࣭̇͘.㇀🍣\xA0\xA0\xA0\xA0\xA0 ─◍᳝࣪.⋕𖥾ᤢ۪.۫ \n\n▧⃯⃟৴ํฺ͘.•🍣”\xA0\xA0\xA0\xA0 ▧⃯⃟৴ํฺ͘.•🛸 ݈݇─\xA0\xA0\xA0\xA0 ▧⃟╳⃟ೇ̖ \n\n\n就像模像ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ ₡₢₣₤₥₦₩₪₫₭₯₾₽₻₺₸₷₶₶₵₴₴₲₰₱₳⸿⸚⸛ⶬ⻞⸙ㆃ㑹䡤 ▒░▓ ҉ ҈ ℳℴℵ℥ℤℨ℘ℜ\n♔♕♖♖♗♘♚♝♟♠♢♢♣♤♦♨⚀⚂⚃⚅❧❥❥❤❣❠❠❑❒❁❃❅❔❔❖❆❇❈❙❙❋❜❝❞❏❎❍❌❊❊❉❈❇❅❄❂❀❀✰✱✳✳✴✵✷✷✸✹✺✻✼✽✿✯✮✫✫✪✧✦✥✤✤✣✢✡✡✠✟✞✜✛✚✙✘✘✖✖✗✕✔✓✒✑✍✎✏ ೈ፝͜͡࿇ ঔৣ͜͡➳ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎ ঔৣ͜͡➳ೈ፝͜͡࿇↭ৢۜ͜͡✟✙✚✛✠✟✞✜✢✦✧꧁ᵗᶤᵃ ᵇᵘᶰᶰʸ꧂ ✦✮✭✬✫✪✩✯✰✺✹✸✷✶✵❂❧❦ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎🔴⚪⚫\n๖ۣۜۜ͜͡ ۣۜ\xA0\xA0\xA0ஓீ͜ ፝͡ৎ✞̤֟٭\xA0 ৎ❥̤֟٭\xA0 ৎ̤✙֟٭\xA0 ஓீۣ̤֟͜٭̤֟ ঔ\xA0 ፝͡ৎ\xA0\xA0 ፝͡ৎ✞̤֟٭\xA0 ⸎✞ \n\n\xA0 ৎ❥̤֟٭ۣۜ ஓீ፝͜͡\xA0\xA0 ✦ۣۜۜ☆ۣۜۜ͜͡\xA0\xA0 ঔৣֳ᷌᷈͜͡❀ ్మాై\xA0 ू ፝͜❥ ೈ፝͜͡๖ۣۜ\xA0\xA0 ৎ✿̤֟٭ ೈ፝ \n\n✦҈͜͡➳ ீ͜ৡৢ͜͡\xA0\xA0 ๖ۣۜۜ͜͡ீ͜\xA0\xA0 ೈ፝͜͡\xA0\xA0\xA0 ঔৣ͜͡\xA0\xA0 ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ\nᢁ♾႘႙လၼဏ☍ᨖ∾⏦∞ზ⚪⚫⚬⭕🔴🔵๏༚ᢀᨔ⌻⌼⌽⌾⍉⍛⍜⎉⎊⎋⏀⏁⏂⏣◉○◌◍◎●◐◑◒◓◔◕◦◯◴◵◶◷☌⚭⚮⚯⛢❍⬤⬮⬯⭖⭗⭘⭙〄ʘஃ་჻᎒᎓᠁᠂᠃᠅᨞⁕⁑⁂⁖⁘⁙․‥…‧⁚⁛⁜⁝⁞※┄┅┆┇┈┉┊┋⛬⌗⌸⌹⍁⍂⍃⍄⍞⍯⎕⏍⏥▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▕▖▗▘▙▚▛▜▝▞▟■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱◘◙◧◨◩◪◫◰◱◲◳◻◼◽◾⚼⛝⛞❏❐❑❒❘❙❚⬚⬛⬜🔲🔳⌧❖⌺⍋⍍⍒⍔⍙⍚⎏⎐⎑⎒⏃⏄⏅▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅◆◇◈◊◢◣◤◥◬◭◮◸◹◺◿⛋⛛⛡⟐🔶🔷🔸🔹🔺🔻🔼🔽இ༓࿉།༎ᔗᔘᔚᔙᓬᕫᕬᕭᕮᖗᖘᖙᖚᖰᖱᖲᖳᖼᖽᖾᖿᗤᗥᗦᗧᗡᗠᗢᗣᗞᗟᗜᗝᗘᗛᗗᗖᗐᗑᗒᗕᘜᘝᘞᘛᘮᘯᘰᘳᙀᙁᙂᙅᙈᙉᙊᙍᙷᙸᙼᙺᨀᨁᨂᨃᨄᨅᨇᨋᨌᨍᨎᨏ᨟ᨐᨑᨒᨓᨕᱤᱥᱦᱧᱨᱩᱫᱬᱭᱮᱯᱰᱵᱜᱝ⌌⌍⌎⌏⌜⌝⌞⌟⌓⌔⌖⌘⌬⍊⍌⍎⍑⍓⍕⍝⍭⍱⍲⎄⎅⎆⎇⎈⎌⎍⎎⍽⍾⎓⎔⎗⎘⏆⏇⏈⏉⏊⏋⏌─━│┃┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋╌╍╎╏═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╴╵╶╷╸╹╺╻╼╽╾╿◖◗◚◛◜◝◞◟◠◡☰☱☲☳☴☵☶☷⚊⚋⚌⚍⚎⚏⚞⚟⚶⚷⚹⚺⚻⛘⛚⛻彡❡۩ண⌦⌫ਊ〽〰\n\n\nA=Δ꙰ Λ λ Ⱥ ₳ ą å ส สั ล α ค ศ Ⴉ 🇦 🇦ศ ₳ ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹ⓐ Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ\nम स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ A҉ 岚 ๖ۣۜA ꬍꬅ 刄 㞩 \n\nB=多🇧 乃 ঔৣ͜͡岌 в ฿ ß β ცⓑ ხ ɮ β ß ฿ Ъ طß в β ხ ฿ в ␢ ๒ Ъ ъ ь Ɓ ß ฿ Þ 乃 邦 ぶ ✇ 及 в Ⴊ 🇧 ๖ۣۜB 夃 ଷ\nゐßѢƀЪЬβϐбБъьわゎらね ♭ ɓ B҉ ㄢ \n\nC=¢ ₡ ₢ C ς ⊂ 匚 ㄷ ど に 二仁 🇨 ɕ ૮ C҉ ๖ۣۜC Շ 🇨 ¢ ₡ ᄃ c̈̈ ɔ ς ©C¢ ς © ζ Ƈ Ɔ ʗ ₡ ૮ ح¢ Ĉ č Č © ĉ Ć ૮ \n\nD=ↁ Đ ɗ đ δ ɖ わ 力 ⊅ ⊅໓ 🇩 ∌ D҉ 刀 Ɗ\n๖ۣۜD ಖ 🇩đ Đ ɖ ⓓ ∂ ժÐ ∂ đ ۜÐ ₫Ð ∂ ð đ ๔ მ ძ ժ ɗ \n\nE=Ɇ € ℮ ㉫ ∉ ∈ Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を\nﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ 🇪 E҉ 亥 ૯ ๖ۣۜE も ƎƏ Ɛ ؏៩ 🇪 乇 Є є Σ ε ξ ⓔ 玄 ៩ ₤ ჰ პ℮£ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē € ξ έ ℮ ë Э ۼ \n\nF=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 🇫 F҉. ๖ۣۜF\xA0 🇫 ｷ ₣ ʃ ғ ⓕ f Ғƒ Բ ๖ۣۜF ₣ƒ ₣ ﬄ ךּ דּ Ғ ક \n\nG=₲ ǥ Ⴚ Ǥ ❡ ሬ 🇬 Ԍ G҉ ๖ۣۜG ໔ ໕ ផ ௹\n🇬 Ĝ Ģ g G̈̈ ⓖ ₲ ௹ ğ G๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ ₢ ɠ ૬ ǥ \n\nH=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ 🇭 ╠╣ H み ђ ๖ۣۜH ਮ 🇭 ん ħ н ђ அ ჩ ħ ╠╣ ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ╠╣ \n\nI=፤ ɨ ៛ í ∣ ழェ エ ｪ ｴ 工讠 辶 เ ቾ 🇮 ҉ I҉ \n๖ۣۜI ⶇⷀ 🇮 ί Ξ រ ł ιΐ ι ║ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ \n\nJ=ʝĲ ｊ Ｊ ʲქ ჟ 🇯 J ℑ ๖ۣۜJ 🇯ʝ ქ J Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ \n\nK=Ҝ Ҟ Ӄ ₭ Ҝ 长 ҟ Ҡ ҡ ӄ ҝ\xA0 🇰 Ƙ K ઝ ๖ۣۜK🇰 ₭ Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ ₭ К қ ҝ \n\nL=Ł Լ ℓ ∟ ﾚ し ̽ſ ʆ ไ ₰ 🇱よ๊レ 廴 L҉ ㄥ ๖ۣۜL โ Ն ₺ 🇱 Ł ₰ ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ ┘£ ไŁ ℓ Ļ ๋╝Լ \n\nM=ℳ ๓ ற м რ ო ɱ ₥ Ӎ ポ ボ /V 水 ണ Ӎ 🇲 M҉ 爪 ๖ۣۜM\n🇲 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V ๓ ๖ۣۜM Щ๓ ற м ₥ რ ო ɱ \n\nN=₦ Ń ņ ரŋИ ภй מ Ň หฑ иη∩ ல ₪ ൯ Ŋ N҉ れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л🇳и ₦ Π ₪ η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦ \n\nO=Ѻ θ Θ ❍ ◯ 〇Ծ҉ ゆ ∅ Ø Ծ Օ ס ⊗ ₴ Θ ΦϕФ Ω θ๑ ๏ ο ๐ σ ø ѳ Ѻ Ѳ Ө ०\nの 🇴 ۝ O 口 ๖ۣۜO 汩 ଠ 🇴Ø๏σǿ⊕ƠФץםץ₴ΘԾøΩ❍ტიბθ❂ ø σ Ø ૭ Ǿ ö ♂ ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻☺ θ Ө ɵҨ \n\nP=℘ ₱ 了 ァ户 ㄕ尸 卩卫 ƿ ρ م թ ｱ ק ¶ や ゃ ア マ ャ ヤ ヹ ｱ\xA0 🇵 伊 ҉ P҉ ㄗ ๖ۣۜP 尹 🇵ρ ק թ þ φÞ ╠╝קּ թ φ þ քק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ \n\nQ=φ Ҩ ҩ. 🇶 ϑ Q҉ ๖ۣۜQ🇶q ๖ۣۜQǪ ǫ գ \n\nR=ℜ Ԅ रै₹Я 訳 尺 㞍尻尺 尼 尽 Ի ʀ ɾ я Я 民 🇷 R҉ 屁 ૨ ๖ۣۜR ฯ ণ 尺 尻 я ℜ Γ я ® л Я Ř ř ર ŗ ѓ ל гг ŗ я ® Я Ŗ \n\nS= ฐ ร ຮ ธ ऽ ₷ ֆ ى ک উ ঊ Տ હ ៜ 🇸 ട\n乌马 写 ㄅ ㄘㄎ 亐令 S҉ Ｓ ๖ۣۜS ঙ ຣ ଌ 🇸ঊ ₷ ន ѕ ร ₴ ஜى § ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ \n\nT=┳ 〒 Ԏ Ŧ ₮ ৳ ॠ ŧ ჭ ⊥ 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ 🇹\n平 亇 T҉ す ๖ۣۜT ক ፐ ፓ 弋 字 🇹т † է Ե ｲ Ŧ ৳ჯ ₮ क も ł ┼ † т Ŧ Ţ Ť ŧ 〶〒ł Ŧ ♰ Ƭ τ † \n\nU=น Ü บ ป ย ษ ข μ い ų น บ ป∪ リ ㄩ凵びひ სυʉ 🇺 Ҵ ચ થ ს U҉ む ષ ๖ۣۜU Ⴎ ษ 🇺 ひ υ ს ∪ચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц \n\nV=√ 讠 🇻 V҉ ∨ ๖ۣۜV ง 🇻ν∇√ ૪√ ٧ ს \n\nW= ₩ ฬ ผ ฝ พ ฟ ௰ ឃ ω 🇼 W҉ ખ 山 ๖ۣۜW ຟ 🇼 Ѡ Ш ₩ ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ \n\nX =× 区×义冈区囟ҳ̸Ҳ̸ҳ✘✗ χ 🇽 乂 X҉. メ ๖ۣۜX 🇽χ Ҳ ҳ ✖χ Ж ჯ ×א ﭏ Ҳ ҳ χ × \n\nY = ƴ ¥ 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у Y ﻻ ㄚ Ⴤ 🇾 ψ Ψ Y҉. ๖ۣۜY ⼬ Ƴ🇾у Ψ ყ γμ¥ ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ ¥ У ұ ץ \n\nΖั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ 🇿 Z҉ 🇿 z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ \n\nᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ᵈˡᶜ ᶤ ᶫᵒᵛᵉ ʸᵒᵘ \n\nᴬ ᴮ ՟ ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ ⁵ ᵀ ᵁ ᵛ ᵂ ᵡ ᵞ ᶻ \n\n⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ \n\n✦҈͜͡ ➳ ீ͜ৡৢ͜͡ ๖ۣۜۜ͜͡ீ͜ ೈ፝͜͡ ঔৣ͜͡ ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ\xA0\xA0\xA0\xA0 ፝͡ৎ❥̤֟٭ \n\nA⃟🌸\xA0 B⃟🌸 C⃟🌸 D⃟🌸E⃟🌸 F⃟🌸 G⃟🌸 H⃟🌸\nI⃟🌸\xA0 J⃟🌸 K⃟🌸 L⃟🌸M⃟🌸N⃟🌸O⃟🌸 P⃟🌸\nQ⃟🌸 R⃟🌸 S⃟🌸 T⃟🌸\xA0 U⃟🌸\xA0 V⃟🌸 X⃟🌸 Y⃟🌸 W⃟🌸 Z⃟🌸\nれ ₡ ₩ ₤ ₦ ₱ ₲ ₰ ₳ ₷ ₸ ₹ ℐ ℑ ℒ ℊ ℋ ℌ ℍす や ⼳ ひ ቻ ঊ ֆ ℘ ℙ ℚ ℛ ℜ ℝ ℣ ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ Ǥ 㞩 ↁ Ҩ む ⷀ ₦ み ↁ ؏ 亇 ł ❍\nｷ Ⱥ 多 及 Δ̸ 弋 ៩ ൬̸ 岌 ₮ ቾ ❍̸ 岌 \n\n\n🇲🇾⃟༒🇹🇰⃟༒ᙶ⃢: ➤\xA0\xA0 ⿴⃟ٍࣽ❖᪶۫۫\xA0\xA0 🌺⃢❈❥\xA0 ▢ 🌹፝⃟༘┼⃢ᵉᵥ✦\xA0𖣘⃟ᗒ\xA0\xA0\xA0\xA0 ፝⃟༘❍፝⃟༘\xA0➀፝⃟༘ᵉᵥ\xA0\xA0\xA0\xA0\xA0 𖡹⃢⃟ᗒᵉᵥᗕ⃢⃟𖡹̤\xA0\xA0 ◆ ⃟ ⃟ ⃟\xA0 ⃟ ⃟◆\xA0\xA0\xA0\xA0 ༺〄༻\n*🌹፝⃟༘┼\xA0U࿆\xA0,࿆P⃟⸙ᵉᵥ✵*\xA0 \n\n᭒𝔄𒆭𒂩𒃳⃟۝⏣ᙵ༒꧁꧂鬒ȴ𒉼𒍮𝔍𝓲𝔜𝔒𒃩ᙴ𒉣𒉐𒆜𒅴𒅌𒅄𒄘𒄖𒃿𒃾𒃸𒃹𒃣𒂤𒂥ޥ᙭☬ᭅ᭟𑋭𒂻𒂵亶❷ݳँᬒᬻޙ𑱖𐃌ऀ⇜ᬼᭁ֎⤳❷ᬽာ⭧ᭃ⠕⃞❨ः亹⠿☛௵𒴇乤⤠仓༻࿐ⲫට༺֍\n𗅤𗄹𓀀𓀂𓀄𓀆𓀇𓀐𓀖𓀌𓀠𓀫𓀞𓀮𓀺𓁀𓀬𓁡𓁣𓁦𓁳𓁺𓁸𓁻𓁹𓁼𓁽𓁿𓂄𓂆𓂐𓂋𓂕𓂛𓂙𓂞𓂤𓂠𓂏𓂥𓂨𓂣𓂞𓂰𓂴𓂹𓃄𓃐𓃖𓃤𓃾𓄈𓄔𓄞𓄩𓄫𓄮𓅅𓅘𓅦𓇬𓈌𖦤𖦘𖦋𖦀𖦦𖦂𖧈𖧃𖧖𖧌𖧨𖧳𖧮𖨬𖨪𖨦𝟖𝟡𞤴𞤨𞤞🈤🈞🈠\nݡݞݴݩތޑޥޣޖޡࠌࠆࠑࢤࢦୃୁଶஅஇஊஔᴕᴡᶘᶓᶎḭ⁃⁀⁆⁓ⅆ⅑⊅⊤⋭⋱⏤⏠⏄⎾⏜\n☣☬☞☌☋☍☈♆♅♄⚟⚝⚛⚪⚮⚮⚻⛬⛮⛥⛨⛛⛚⛜✮❁✳➲➭⟌⟘⟞⟣⟱⟶⟼⠮⡄⡆⡔⢫⢥⢩⦫⦝⦽⦻⦹⥡⥳⩄⩙⩣⪀⪋⪆⫛⫎⫡⭃⬸⭄ⶣⶨⶋⶅⶐⶄⵜⵘⵎ⸠⻤⻞⻫⻖けぎご〠れゑフラ㇕\n䷨䷦世丨世亀乴亓亖亡仍仠仦渹渻湆꧅꧄ꪜꪦꩵꩦꬌꬬꬩꬣꮹꮽꯌ𐅊𐅑𐅒𐅌𐊔𐊴𐎫𐎝𐎝𒋐𒋬𒍫𒍨𝓨𝔄𝖀𝖕𝟍𝟘\n⸙⋆ͤ℣⋆ͦ⸙\n\xA0\xA0ৢۜ͜͡\xA0 -\xA0๖ۣۜ͡ஓீ͜͜͡❥ - ঔৣ͜͡ீ͜❥͜\xA0 -\xA0 ू ፝͜❥\xA0- ৎ❥̤֟٭ۣۜ\xA0 -\xA0 ঔৣֳ᷌᷈͜͡❀\xA0 -\xA0 ৎ✿̤֟٭\xA0-\xA0✦҈͜͡➳\xA0 -\xA0 ঔৣ͜͡➳ -\xA0๖ۣۜ͡ஓீ͜͡\xA0\xA0 - ஓீ͜͡\xA0\xA0 - ஓீ፝͜͡ \xA0\xA0-ஓீ͜\xA0 -\xA0 ్మాై\xA0 -\xA0ೈ፝͜͡๖ۣۜ\xA0\xA0 -\xA0 ೈ ፝\xA0 -\xA0\xA0ீ͜ৡৢ͜͡\xA0\xA0 -\xA0๖ۣۜۜ͜͡ீ͜\xA0\xA0 -\xA0ঔৣ͜͡ \xA0 -\xA0 ೈ፝͜͡卐\xA0 *-* ✦ۣۜۜ☆ۣۜۜ͜͡\xA0\xA0\xA0\xA0 ۣۜۜ͜͡☆ۣۜۜ✦ۣۜۜ *-* ✧͜͡҉\xA0\xA0\xA0\xA0\xA0 ҉̶͜͡✧ - ঔৣ͜͡҉❅ۣ̤ۜ❥̤̤֟֟\nA⃟༻ B⃟༻ C⃟༻ D⃟༻ E⃟༻ F⃟༻G⃟\nH⃟༻ I⃟༻ J⃟༻K⃟༻ L⃟༻M⃟༻ N⃟༻O⃟༻ P⃟༻ Q⃟༻R⃟༻S⃟༻T⃟༻U⃟༻V⃟༻X⃟༻Y⃟༻W⃟༻ \n\n༈ ࿗᭄🌀 ᭨ ஓீᤢ✧͢⃟ᤢ🌸 🌹፝⃟༘┼ ᜴⃕🌹 ⿴⃟ٍࣽ❖᪶۫۫ \n\nৢۜ͜͡\xA0 -\xA0 ๖ۣۜ͡ஓீ͜͜͡❥\xA0 -\xA0 ঔৣ͜͡ீ͜❥͜\xA0 -\xA0\xA0 ू ፝͜❥\xA0 -\xA0 ৎ❥̤֟٭ۣۜ\xA0 -\xA0 ✦ۣۜۜ☆ۣۜۜ͜͡\xA0\xA0 -\xA0 ঔৣֳ᷌᷈͜͡❀\xA0 -\xA0\xA0 ৎ✿̤֟٭\xA0 -\xA0 ✦҈͜͡➳\xA0 -\xA0 ঔৣ͜͡➳\xA0 -\xA0 ๖ۣۜ͡ஓீ͜͡\xA0\xA0 -\xA0 ஓீ͜͡\xA0\xA0 -\xA0\xA0\xA0 - ஓீ͜\xA0 -\xA0 ్మాై\xA0 -\xA0\xA0 ೈ፝͜͡๖ۣۜ\xA0\xA0 -\xA0\xA0 ೈ ፝\xA0 -\xA0\xA0 ீ͜ৡৢ͜͡\xA0\xA0\xA0 -\xA0\xA0 ๖ۣۜۜ͜͡ீ͜\xA0\xA0 -\xA0 ঔৣ͜͡\xA0\xA0 -\xA0 ৢۜ͜͡⍣\xA0\xA0 -\xA0 🔥፝⃟\xA0\xA0\xA0 -\xA0\xA0 ꦿ⃟ۜ✯\xA0 -\xA0\xA0\xA0\xA0 ⃟ۣ❃ -\xA0 ༻⃟༆\xA0 -\xA0 ༆⃟᠁\xA0 -\xA0 ွဳ⃟ꦿ\xA0 -\xA0 💸⃟ꦿ⸼\xA0 -\xA0 ⋆⃟ۣۜ᭪➣\xA0 -\xA0\xA0\xA0 ⃘⃤꙰ \n\n𝐁𝐘: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿");
        break;
      case "audiomeme":
        const vO1191 = {
          text: "✅️",
          key: mek.key
        };
        const vO1192 = {
          react: vO1191
        };
        sock.sendMessage(from, vO1192);
        try {
          if (args.length < 1) {
            return reply("Uso incorreto do comando!\nExemplo: *" + (prefix + command) + " Bolsonaro*");
          }
          anu = await fetchJson("https://nezsab-apis.xyz/api/audiomeme?text=" + q + "&apikey=" + keyapi);
          const vO1193 = {
            url: "" + anu.resultado.audio
          };
          const vO1194 = {
            audio: vO1193,
            mimetype: "audio/mp4",
            ptt: true
          };
          const vO1195 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1194, vO1195);
          setTimeout(() => {
            const vO1196 = {
              quoted: vVO27
            };
            sock.sendMessage(from, {
              text: "— ⸙͎۪۫ ⊰ Olá *" + pushname + "*, " + piroca + "! ♡\n*Deseja outro áudio?* Clique no botão \"Próximo Áudio\".",
              footer: "Por: " + NomeDoBot,
              buttons: [{
                buttonId: prefix + command + " " + q,
                buttonText: {
                  displayText: "✰ۜۜ͜͡𝐏𝐑𝐎́𝐗𝐈𝐌𝐎-𝐀𝐔𝐃𝐈𝐎💢"
                },
                type: 1
              }]
            }, vO1196);
          }, 2090);
        } catch (e109) {
          console.log(e109);
          const vO1197 = {
            text: "❌️",
            key: mek.key
          };
          const vO1198 = {
            react: vO1197
          };
          nezukosendMessage(from, vO1198);
          reply("Nenhum resultado foi encontrado, tente novamente!");
        }
        break;
      case "mute":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!isGroupAdmins) {
          return reply(mess.only.admin);
        }
        if (!isBotGroupAdmins) {
          return reply("O Bot Precisa ser ADM pra executar essa ação.");
        }
        if (args.length < 1) {
          return reply("*Marque o número que deseja mutar*");
        }
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
          return reply("*Marque o número que deseja mutar*");
        }
        v567 = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (v133) {
          var v186 = vA8.indexOf(from);
          teks = "Usuários mutados:\n";
          for (let v402 of v567) {
            teks += "@" + v402.split("@")[0] + "\n";
            muted[v186].numbers.push(v402);
          }
          fs.writeFileSync("./funções de cmd/usuarios/muted.json", JSON.stringify(muted, null, 2) + "\n");
          teks += "Se eles dizerem um piu, meto o martelo do ban neles 😡";
          vF22(teks, v567, true);
        } else {
          const vO1199 = {
            jid: from,
            numbers: v567
          };
          const vVO1199 = vO1199;
          muted.push(vVO1199);
          fs.writeFileSync("./funções de cmd/usuarios/muted.json", JSON.stringify(muted, null, 2) + "\n");
          teks = "Usuários mutados:\n";
          for (let v403 of v567) {
            teks += "@" + v403.split("@")[0] + "\n";
          }
          teks += "Se eles dizerem um piu, meto o martelo do ban neles 😡";
          vF22(teks, v567, true);
        }
        break;
      case "desmute":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!isGroupAdmins) {
          return reply(mess.only.admin);
        }
        if (!isBotGroupAdmins) {
          return reply("O Bot Precisa ser ADM pra executar essa ação.");
        }
        if (args.length < 1) {
          return reply("*Marque o número que deseja desmutar*");
        }
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
          return reply("*Marque o número que deseja desmutar*");
        }
        v567 = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var v186 = vA8.indexOf(from);
        if (v133) {
          for (let v404 of v567) {
            if (muted[v186].numbers.indexOf(v404) >= 0) {
              var v405 = muted[v186].numbers.indexOf(v404);
              muted[v186].numbers.splice(v405, 1);
            }
          }
          fs.writeFileSync("./funções de cmd/usuarios/muted.json", JSON.stringify(muted, null, 2) + "\n");
          teks = "Usuários desmutados:\n";
          for (let v406 of v567) {
            teks += "@" + v406.split("@")[0] + "\n";
          }
          teks += "Agr eles podem falar a vontade ☔";
          vF22(teks, v567, true);
        } else {
          const vO1200 = {
            jid: from,
            numbers: []
          };
          const vVO1200 = vO1200;
          muted.push(vVO1200);
          fs.writeFileSync("./funções de cmd/usuarios/muted.json", JSON.stringify(muted, null, 2) + "\n");
          teks = "Usuários desmutados:\n";
          for (let v407 of v567) {
            teks += "@" + v407.split("@")[0] + "\n";
          }
          teks += "Agr eles podem falar a vontade ☔";
          vF22(teks, v567, true);
        }
        break;
      case "rankcorno":
      case "rankcornos":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        membr = [];
        const vV377 = v37;
        const vV378 = v37;
        const vV379 = v37;
        const vV3710 = v37;
        const vV3711 = v37;
        const v408 = vV377[Math.floor(Math.random() * vV377.length)];
        const v409 = vV378[Math.floor(Math.random() * vV378.length)];
        const v410 = vV379[Math.floor(Math.random() * vV379.length)];
        const v411 = vV3710[Math.floor(Math.random() * vV3710.length)];
        const v412 = vV3711[Math.floor(Math.random() * vV3711.length)];
        var vA66 = ["1%", "2%", "3%", "4%", "5%", "6%", "7", "%", "9%", "10", "11%", "12%", "13%", "14%", "15%", "16%", "17%", "1%", "19%", "20%", "21%", "22", "23%", "24%", "25%", "26%", "27%", "2%", "27%", "2%", "29%", "30%", "31%", "32%", "33%", "34%", "35%", "36%", "37%", "3%", "39%", "40%", "41%", "42%", "43%", "44%", "45%", "46%", "47%", "4%", "49%", "50%", "51%", "52%", "53%", "54%", "55%", "56%", "57%", "5%", "59%", "60%", "61%", "62%", "63%", "64%", "65%", "66%", "67%", "6%", "69%", "70%", "71%", "72%", "73%", "74%", "75%", "76%", "77%", "7%", "79%", "0%", "1%", "2%", "5%", "4%", "5%", "6%", "7%", "%", "9%", "90%", "91%", "92%", "93%", "94%", "95%", "96%", "97%", "9%", "99%", "O chifre desse ai bate na lua ksksksk"];
        const v413 = vA66[Math.floor(Math.random() * vA66.length)];
        const v414 = vA66[Math.floor(Math.random() * vA66.length)];
        const v415 = vA66[Math.floor(Math.random() * vA66.length)];
        const v416 = vA66[Math.floor(Math.random() * vA66.length)];
        const v417 = vA66[Math.floor(Math.random() * vA66.length)];
        const v418 = vA66[Math.floor(Math.random() * vA66.length)];
        ytb = "\nEsses são os cornos do grupo " + groupName + "\n@" + v408.id.split("@")[0] + "\nCom uma porcentagem de " + v415 + "\n@" + v409.id.split("@")[0] + "\nCom uma porcentagem de " + v414 + "\n@" + v410.id.split("@")[0] + "\nCom uma porcentagem de " + v416 + "\n@" + v411.id.split("@")[0] + "\nCom uma porcentagem de " + v417 + "\n@" + v412.id.split("@")[0] + "\nCom uma porcentagem de " + v418 + "\n\n⚡ " + NomeDoBot + " ⚡";
        membr.push(v408.id);
        membr.push(v409.id);
        membr.push(v410.id);
        membr.push(v411.id);
        membr.push(v412.id);
        vF22(ytb, membr, true);
        break;
      case "criebot":
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!v44) {
          return reply(mess.premium);
        }
        reply("Link do termux 119:\nhttps://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com\n\nlink do MT-manager V2.10:\nhttps://www.mediafire.com/file/0fttexpjoe3j54h/MT_Manager_Version_%255B_2.10.3_%255D_.apk/file\n\nlink do ColorNote V4.4.0:\nhttps://play.google.com/store/apps/details?id=com.socialnmobile.dictapps.notepad.color.note\n\nLink da base:\nhttps://seulink.net/Base_Bot_Do_Zero\n\nComandos do termux:\ntermux-setup-storage \ncd é para abrir alguma pasta no termux \nsdcard é a memória interna do seu celular\ncd /sdcard/download/pasta do seu bot\nOu\ncd /sdcard/pasta do seu bot\nsh install.sh\nnpm start ou sh start.sh");
        break;
      case "termux":
        await reply("\nOlá " + pushname + ", aqui está o seu termux!\n☔ *Número:* @" + sender.split("@")[0] + "\n\nhttps://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com\n");
        break;
      case "bases":
      case "bases-bot":
        const vO1201 = {
          title: "⟦✨⟧𝐁𝐀𝐒𝐄𝐒 𝐃𝐄 𝐁𝐎𝐓⟦💫⟧",
          rows: [{
            title: "✨҉̶⃟➜ 𝐋𝐎𝐋𝐈𝐙𝐈𝐓𝐀 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/mtzk8nzelv2kltk/%25F0%259D%2590%258B%25F0%259D%2590%258E%25F0%259D%2590%258B%25F0%259D%2590%2588%25F0%259D%2590%2599%25F0%259D%2590%2588%25F0%259D%2590%2593%25F0%259D%2590%2580_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐒𝐀𝐊𝐔𝐑𝐀 𝐕𝟓 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/41u17i3w5evesql/%25F0%259D%2590%2592%25F0%259D%2590%2580%25F0%259D%2590%258A%25F0%259D%2590%2594%25F0%259D%2590%2591%25F0%259D%2590%2580_%25F0%259D%2590%25955_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐒𝐀𝐁𝐑𝐈𝐍𝐀 𝐕𝟏 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/k01cjw7erlz7j25/%25F0%259D%2590%2592%25F0%259D%2590%2580%25F0%259D%2590%2581%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258D%25F0%259D%2590%2580_%25F0%259D%2590%25951_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐍𝐄𝐙𝐔𝐊𝐎 𝐕𝟏 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/c8qb9dc2jbdsiky/%25F0%259D%2590%258D%25F0%259D%2590%2584%25F0%259D%2590%2599%25F0%259D%2590%2594%25F0%259D%2590%258A%25F0%259D%2590%258E_%25F0%259D%2590%25951_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐅𝐎𝐗 𝐕𝟑 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/kc7faw3im6bk3c8/%25F0%259D%2590%2585%25F0%259D%2590%258E%25F0%259D%2590%2597_%25F0%259D%2590%25953_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐄𝐒𝐃𝐄𝐀𝐓𝐇 𝐕𝟏 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/154phxb4a9107wv/%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2580%25F0%259D%2590%2593%25F0%259D%2590%2587_%25F0%259D%2590%25951_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐕𝐄𝐍𝐎𝐌 𝐂𝐎𝐍𝐒𝐎𝐋𝐄 𝐕𝟏 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/wu89s40073auq4m/%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%258D%25F0%259D%2590%258E%25F0%259D%2590%258C_%25F0%259D%2590%2582%25F0%259D%2590%258E%25F0%259D%2590%258D%25F0%259D%2590%2592%25F0%259D%2590%258E%25F0%259D%2590%258B%25F0%259D%2590%2584_%25F0%259D%2590%25951_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐕𝐄𝐍𝐎𝐌 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/fh9n54p14z36b5w/%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%258D%25F0%259D%2590%258E%25F0%259D%2590%258C_%25F0%259D%2590%258F%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%2595%25F0%259D%2590%2580%25F0%259D%2590%2593%25F0%259D%2590%2584_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐘𝐀𝐄𝐆𝐄𝐑 𝐕𝟐 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/h7evdhtco54wvq8/%25F0%259D%2590%2598%25F0%259D%2590%2580%25F0%259D%2590%2584%25F0%259D%2590%2586%25F0%259D%2590%2584%25F0%259D%2590%2591_%25F0%259D%2590%25952_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐘 𝐕𝟑 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/o0vjvegj90jxcqc/%25F0%259D%2590%2580%25F0%259D%2590%258B%25F0%259D%2590%2584%25F0%259D%2590%2580%25F0%259D%2590%2593%25F0%259D%2590%258E%25F0%259D%2590%2591%25F0%259D%2590%2598_%25F0%259D%2590%25953_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐌𝐀𝐍𝐔𝐄𝐋𝐀 𝐕𝟕 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/mxfcx4t309knl6h/%25F0%259D%2590%258C%25F0%259D%2590%2580%25F0%259D%2590%258D%25F0%259D%2590%2594%25F0%259D%2590%2584%25F0%259D%2590%258B%25F0%259D%2590%2580_%25F0%259D%2590%25957_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐀𝐐𝐔𝐀 𝐕𝟑 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/su53h7q9ed7x87a/%25F0%259D%2590%2580%25F0%259D%2590%2590%25F0%259D%2590%2594%25F0%259D%2590%2580_%25F0%259D%2590%25953_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐒𝐀𝐊𝐔𝐑𝐀 𝐕𝟔 𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/c9buvsucsmzppvj/%25F0%259D%2590%2592%25F0%259D%2590%2580%25F0%259D%2590%258A%25F0%259D%2590%2594%25F0%259D%2590%2591%25F0%259D%2590%2580_%25F0%259D%2590%25956_%25F0%259D%2590%2582%25F0%259D%2590%2591%25F0%259D%2590%2588%25F0%259D%2590%258F.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐃𝐎𝐂𝐓𝐎 𝐕𝟐 𝐃𝐄𝐒𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/a72mnuukzrmc1py/%25F0%259D%2590%2583%25F0%259D%2590%258E%25F0%259D%2590%2582%25F0%259D%2590%2593%25F0%259D%2590%258E_%25F0%259D%2590%25952_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.7z/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐃𝐄𝐌𝐎𝐍 𝐕𝟑 𝐃𝐄𝐒𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/32t24e8v3l5a27u/%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%258C%25F0%259D%2590%258E%25F0%259D%2590%258D-%25F0%259D%2590%2581%25F0%259D%2590%2580%25F0%259D%2590%2592%25F0%259D%2590%2584_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591_%25F0%259D%2590%25953.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐃𝐄𝐒𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/xn97zzou5aw7uaa/%25F0%259D%2590%2583%25F0%259D%2590%2580%25F0%259D%2590%2591%25F0%259D%2590%258B%25F0%259D%2590%2588%25F0%259D%2590%258D%25F0%259D%2590%2586_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐃𝐀𝐑𝐊 𝐃𝐄𝐒𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/esvm1zzkj2dnd3z/%25F0%259D%2590%2583%25F0%259D%2590%2580%25F0%259D%2590%2591%25F0%259D%2590%258A_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐂𝐋𝐎𝐕𝐄𝐑 𝐃𝐄𝐒𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/oersab3akdabkcy/%25F0%259D%2590%2582%25F0%259D%2590%258B%25F0%259D%2590%258E%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%2591_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐕𝐄𝐍𝐎𝐌 𝐂𝐎𝐍𝐒𝐎𝐋𝐄 𝐕𝟐 𝐃𝐄𝐒𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/l1qk7s8ijmqg3qz/%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%258D%25F0%259D%2590%258E%25F0%259D%2590%258C_%25F0%259D%2590%2582%25F0%259D%2590%258E%25F0%259D%2590%258D%25F0%259D%2590%2592%25F0%259D%2590%258E%25F0%259D%2590%258B%25F0%259D%2590%2584_%25F0%259D%2590%25952_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐕𝐄𝐍𝐎𝐌 𝐁𝐀𝐒𝐄 𝐃𝐄𝐒𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/0on30ejpwvvkohl/%25F0%259D%2590%2595%25F0%259D%2590%2584%25F0%259D%2590%258D%25F0%259D%2590%258E%25F0%259D%2590%258C_%25F0%259D%2590%2581%25F0%259D%2590%2580%25F0%259D%2590%2592%25F0%259D%2590%2584_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐒𝐎𝐏𝐇𝐘 𝐃𝐄𝐒𝐂𝐑𝐈𝐏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/hzigqo8rdlcch2p/%25F0%259D%2590%2592%25F0%259D%2590%258E%25F0%259D%2590%258F%25F0%259D%2590%2587%25F0%259D%2590%2598_%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2592%25F0%259D%2590%2582%25F0%259D%2590%2591.zip/file\n",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐀𝐂𝐎𝐃𝐄",
            rowId: prefix + "mediafire https://www.mediafire.com/file/h0osdxk3k458t5w/%25F0%259D%2590%2580%25F0%259D%2590%2582%25F0%259D%2590%258E%25F0%259D%2590%2583%25F0%259D%2590%2584.apk/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐓𝐄𝐑𝐌𝐔𝐗 𝟏.𝟏𝟏𝟗.𝟏",
            rowId: prefix + "mediafire https://www.mediafire.com/file/gfjxfd2pl1v7l2n/%25F0%259D%2590%2593%25F0%259D%2590%2584%25F0%259D%2590%2591%25F0%259D%2590%258C%25F0%259D%2590%2594%25F0%259D%2590%2597_1.119.1..apk/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐓𝐄𝐌𝐏 𝐌𝐀𝐈𝐋",
            rowId: prefix + "mediafire https://www.mediafire.com/file/ew4lzgpqc8doy71/Temp_Mail_mek.10_%255BAdfree%255D.apk/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐇𝐌𝐀𝐍𝐀𝐆𝐄𝐑",
            rowId: prefix + "mediafire https://www.mediafire.com/file/7raouyyq9lm1ekl/HManager.apk/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐄𝐗 𝐅𝐈𝐋𝐄 𝐄𝐗𝐏𝐋𝐎𝐑𝐄",
            rowId: prefix + "mediafire https://www.mediafire.com/file/z414ksjtoiha5ey/Es_File_Explore_Premium.apk/file",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }, {
            title: "✨҉̶⃟➜ 𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋",
            rowId: prefix + "tutorial-termux",
            description: "◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸̶ >3"
          }]
        };
        botaoale = [vO1201];
        vF24(from, "\n┏⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┓\n┃      ⟦✨⟧𝐁𝐀𝐒𝐄𝐒 𝐃𝐄 𝐁𝐎𝐓⟦💫⟧      ┃\n┗⧐┅┅┅⃟🌺┅┅⧏ ❀ ⧐┅┅🌺⃟┅┅┅⧏┛", "", "", "⟦🤩⟧𝐇𝐔𝐌 𝐇𝐔𝐌, 𝐂𝐋𝐈𝐂𝐀⟦🤩⟧", botaoale);
        break;
      case "tutorial-termux":
        reply("\n🇱\xA0🇪\xA0🇮\xA0🇦\xA0 🇹\xA0🇺\xA0🇩\xA0🇴\xA0\n\nBOA SORTE<3  \nTERMUX = ()\nHEROKU = []\n\nEsse primeiro comando geralmente aparece algo vermelho escrito \"ERRO\", isso é normal, não se preocupe,mas se caso, em qualquer comando aparecer algo escrito \"FAILED\" isso quer dizer que deu erro mesmo, ai só fazendo tuuudo de novo ok! Boa sorte!\n\n(1° COMANDO) Esse comando é usado apenas uma vez no termux, só se vc desinstalar ou limpar os dados do Termux, ai você terá que usar ele novamente.\n\npkg upgrade -y && pkg update -y && pkg install python -y && pkg install nodejs-lts -y && pkg install nodejs -y && pkg install git -y && pkg install ffmpeg -y && pkg install wget -y\n\n[1° COMANDO DE HOSPEDAGEM] Usado para fazer o termux ser compatível com o heroku para hospedagem.\n\nnpm i -g npm@6 && npm i heroku -g\n\n(2° COMANDO) Usado para dar permissão ao termux acessar a memória interna do celular.\n\ntermux-setup-storage\n\n(3° COMANDO) (PASTA DO BOT) = Nome da pasta aonde está o seu bot. Exemplo; cd /sdcard/ESDEATHBOT ou cd /sdcard/download/ESDEATHBOT.\nPode ocorrer que quando você extrair o arquivo, pode ser que ele esteja em mais de uma pasta, ai você terá que tirar ele de lá ou dar o comando do exemplo; cd /sdcard/ESDEATHBOT/ESDEATHBOT ou cd /sdcard/download/ESDEATHBOT/ESDEATHBOT\n\ncd /sdcard/(pasta do bot)\n\n(4° COMANDO) Aqui é o ultimo comando que é a chave de ligar o bot. Dependendo do bot, pode ser que a chave seja o nome do bot;\n\nsh start.sh      <----|Essa é a geral, todos usam|<\nsh sheyot.sh\nsh nezuko.sh\nsh tatsumaki.sh\nsh evolution.sh\nsh sabrina.sh\nsh venom.sh\n\nFIM.....^-^\n\n2° Criar conta no heroku\nACESSE O LINK; https://signup.heroku.com/login\n\nLogo em seguida, coloque um nome e um sobre nome;\ndepois um email;{vc pode usar o app \"Temp Mail\" para gerar email}\nCompany name deixe branco;\nRoly selecione o \"Hobbyist\";\nContry/Região coloque o seu país;\nLinguage coloque \"NodeJs\"\nVerifique se vc é humano, depois confirme no botão.\nVá para o \"Temp Mail\" e confirme o Email;\ncrie uma senha;\nE selecione as caixinhas que vão aparecer como confirmação de que você leu os termos;\nE pronto, vá para o termux dar os seguintes comandos\n\n[3° Para Hospedar o bot] esse comando só funciona, se você tiver um arquivo com esse nome abaixo.\n\nsh hospedar.sh\n\ndepois é só dar enter, logar a conta do heroku e voltar para o termux, em seguida você digitará o nome exato da pasta do bot, e dé enter, e logo em seguida você irá criar o nome do app do bot, sugiro usar um nome que só você imagina colocar,e tem que ser minúsculo, mais um número ex; kokushibu16 Depois é só dar enter, se der erro cole esse comando lá no termux;\n\ngit config --global --add safe.directory/storage/emulated/0/PASTA DO bot\n\nou \n\ngit config --global --add safe.directory/storage/emulated/0/download/PASTA DO BOT\n\nSe caso você repetir o mesmo processo e der erro na hora de criar um nome pro app do heroku, vá para o heroku e apague os APPs que você criou antes, pois o heroku tem limite de app. Tente novamente sempre com um nome diferente.\n\nse você não consegue usar o heroku por ele ser pago, fale com esses dois desenvolvedores de bot, eles alugam uma VPS muito boa pra você usar.\nby Lotus; wa.me/5521995400244\nby Daniel; wa.me/5521964523665\n\n❏ Personalizado por 𝑻𝚯𝛭𝑰𝚯𝜥𝛥 𝑵𝜩𝑻\n");
        break;
      case "dadosfake":
        if (!v44) {
          return reply(mess.premium);
        }
        send = await fetchJson("https://api.brizaloka-api.tk/gerador/pessoa?apikey=brizaloka");
        teks = "✔️ DADOS GERADO\n\nNome: " + send.resultado.nome + "\nMãe: " + send.resultado.mae + "\nPai: " + send.resultado.pai + "\nRg: " + send.resultado.RG + "\nCpf: " + send.resultado.CPF + "\nTelefone: " + send.resultado.telefonde + "\nSigno: " + send.resultado.signo + "\nAltura: " + send.resultado.altura + "\nPeso: " + send.resultado.peso + "\nTipo Sanguíneo: " + send.resultado.tipoSanguineo + "\nCep: " + send.resultado.endereco.cep + "\nLagradouro: " + send.resultado.endereco.logradouro + "\nComplemento: " + send.resultado.endereco.complemento + "\nNúmero: " + send.resultado.endereco.numero + "\nBairro: " + send.resultado.endereco.bairro + "\nCidade: " + send.resultado.endereco.cidade + "\nEstado: " + send.resultado.endereco.estado + "\nSigla do estado: " + send.resultado.endereco.estadoSigla;
        const vO1202 = {
          text: teks
        };
        const vO1203 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1202, vO1203);
        break;
      case "rankgostosos":
      case "rankgostoso":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        member = [];
        const vV3712 = v37;
        const vV3713 = v37;
        const vV3714 = v37;
        const vV3715 = v37;
        const vV3716 = v37;
        const v419 = vV3712[Math.floor(Math.random() * vV3712.length)];
        const v420 = vV3713[Math.floor(Math.random() * vV3713.length)];
        const v421 = vV3714[Math.floor(Math.random() * vV3714.length)];
        const v422 = vV3715[Math.floor(Math.random() * vV3715.length)];
        const v423 = vV3716[Math.floor(Math.random() * vV3716.length)];
        luy = "\nParados!🤚🤚\n\n1=🤚🤭@" + v419.id.split("@")[0] + "🤚🤭\n\n\n2=🤚🤭@" + v420.id.split("@")[0] + "🤚🤭\n\n\n3=🤚🤭@" + v421.id.split("@")[0] + "🤚🤭\n\n\n4=🤚🤭@" + v422.id.split("@")[0] + "🤚🤭\n\n\n5=🤚🤭@" + v423.id.split("@")[0] + "🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿";
        member.push(v419.id);
        member.push(v420.id);
        member.push(v421.id);
        member.push(v422.id);
        member.push(v423.id);
        vF22(luy, member, true);
        break;
      case "caracoroa":
        const v424 = fs.readFileSync("./base de dados/database/figurinhas/cara.webp");
        const v425 = fs.readFileSync("./base de dados/database/figurinhas/coroa.webp");
        cararo = ["cara", "coroa"];
        fej = cararo[Math.floor(Math.random() * cararo.length)];
        reply("você conseguiu: " + fej);
        const vO1204 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          sticker: fs.readFileSync("./base de dados/database/figurinhas/" + fej + ".webp")
        }, vO1204);
        break;
      case "carta":
        var v272 = body.slice(6);
        var v426 = args.join(" ");
        var v273 = v272.split("/")[0];
        var v274 = v426.split("/")[1];
        if (!v272) {
          return reply("Cade o número da pessoa?");
        }
        if (!v426) {
          return reply("Cade a mensagem do correio??");
        }
        if (v272.includes("@")) {
          return reply("So o número sem @ pfvr");
        }
        if (v272.includes("-")) {
          return reply("Tem que ser o número junto sem +, e não pode tá separado da /");
        }
        if (v426.includes("+")) {
          return reply("Tem que ser o número junto sem +, e não pode tá separado da /");
        }
        if (!v426.includes("/")) {
          return reply("Exemplo: " + prefix + "correio 558198923680/Eae cade o pix de 50 que tu ta me devendo?");
        }
        reply("Se você fez tudo certo, logo será entregue!, não pego número fake! ");
        var v427 = "╭────────────────⪨\n│      💌 𝓒𝓪𝓻𝓽𝓪 💌\n├────────────────\n│👤Carta do " + pushname + "\n│📞Renviar: " + sender.split("@")[0] + "\n│🔗Link: wa.me/" + sender.split("@")[0] + " \n╰────────────────⪨\n" + v274 + " ";
        const vO1205 = {
          text: v427
        };
        sock.sendMessage(v273 + "@s.whatsapp.net", vO1205);
        break;
      case "rankgostosas":
      case "rankgostosa":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        member = [];
        const vV3717 = v37;
        const vV3718 = v37;
        const vV3719 = v37;
        const vV3720 = v37;
        const vV3721 = v37;
        const v428 = vV3717[Math.floor(Math.random() * vV3717.length)];
        const v429 = vV3718[Math.floor(Math.random() * vV3718.length)];
        const v430 = vV3719[Math.floor(Math.random() * vV3719.length)];
        const v431 = vV3720[Math.floor(Math.random() * vV3720.length)];
        const v432 = vV3721[Math.floor(Math.random() * vV3721.length)];
        luy = "\nParadas!🤚🤚\n\n1=🤚🤭@" + v428.id.split("@")[0] + "🤚🤭\n\n\n2=🤚🤭@" + v429.id.split("@")[0] + "🤚🤭\n\n\n3=🤚🤭@" + v430.id.split("@")[0] + "🤚🤭\n\n\n4=🤚🤭@" + v431.id.split("@")[0] + "🤚🤭\n\n\n5=🤚🤭@" + v432.id.split("@")[0] + "🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot";
        member.push(v428.id);
        member.push(v429.id);
        member.push(v430.id);
        member.push(v431.id);
        member.push(v432.id);
        vF22(luy, member, true);
        break;
      case "ranknazista":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        try {
          if (!isGroup) {
            return reply(enviar.msg.grupo);
          }
          d = [];
          teks = "💂‍♂️Rank dos mais nazistas do gp\n";
          for (i = 0; i < 5; i++) {
            r = Math.floor(Math.random() * v28.participants.length + 0);
            teks += "💂‍♂️❧ @" + v37[r].id.split("@")[0] + "\n";
            d.push(v37[r].id);
          }
          vF22(teks, d, true);
        } catch (e110) {
          console.log(e110);
          reply("Deu erro, tente novamente :/");
        }
        break;
      case "rankotakus":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        membr = [];
        const vV3722 = v37;
        const vV3723 = v37;
        const vV3724 = v37;
        const vV3725 = v37;
        const vV3726 = v37;
        const vV3727 = v37;
        const vV3728 = v37;
        const vV3729 = v37;
        const vV3730 = v37;
        const vV3731 = v37;
        const v433 = vV3722[Math.floor(Math.random() * vV3722.length)];
        const v434 = vV3723[Math.floor(Math.random() * vV3723.length)];
        const v435 = vV3724[Math.floor(Math.random() * vV3724.length)];
        const v436 = vV3725[Math.floor(Math.random() * vV3725.length)];
        const v437 = vV3726[Math.floor(Math.random() * vV3726.length)];
        const v438 = vV3727[Math.floor(Math.random() * vV3727.length)];
        const v439 = vV3728[Math.floor(Math.random() * vV3728.length)];
        const v440 = vV3729[Math.floor(Math.random() * vV3729.length)];
        const v441 = vV3730[Math.floor(Math.random() * vV3730.length)];
        const v442 = vV3731[Math.floor(Math.random() * vV3731.length)];
        ytb = "esses são os otakus fedidos do grupo\n@" + v433.id.split("@")[0] + "\n@" + v434.id.split("@")[0] + "\n@" + v435.id.split("@")[0] + "\n@" + v436.id.split("@")[0] + "\n@" + v437.id.split("@")[0] + "\n@" + v438.id.split("@")[0] + "\n@" + v439.id.split("@")[0] + "\n@" + v440.id.split("@")[0] + "\n@" + v441.id.split("@")[0] + "\n@" + v442.id.split("@")[0] + "\n\n⚡ 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ⚡";
        membr.push(v433.id);
        membr.push(v434.id);
        membr.push(v435.id);
        membr.push(v436.id);
        membr.push(v437.id);
        membr.push(v438.id);
        membr.push(v439.id);
        membr.push(v440.id);
        membr.push(v441.id);
        membr.push(v442.id);
        vF22(ytb, membr, true);
        break;
      case "rankpau":
        if (!isGroup) {
          return reply("Só pode ser utilizado este comando, em grupo.");
        }
        membr = [];
        const vV3732 = v37;
        const vV3733 = v37;
        const vV3734 = v37;
        const vV3735 = v37;
        const vV3736 = v37;
        const v443 = vV3732[Math.floor(Math.random() * vV3732.length)];
        const v444 = vV3733[Math.floor(Math.random() * vV3733.length)];
        const v445 = vV3734[Math.floor(Math.random() * vV3734.length)];
        const v446 = vV3735[Math.floor(Math.random() * vV3735.length)];
        const v447 = vV3736[Math.floor(Math.random() * vV3736.length)];
        var vA67 = ["Minuscúlo", "Pequenino", "Pequeno", "Médio", "Grandinho", "Grande", "Grandão", "Gigante", "Gigantesco", "Enorme", "BATENDO NA LUA", "QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk"];
        var vA68 = ["Minuscúlo", "Pequenino", "Pequeno", "Médio", "Grandinho", "Grande", "Grandão", "Gigante", "Gigantesco", "Enorme", "BATENDO NA LUA", "QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk"];
        var vA69 = ["Minuscúlo", "Pequenino", "Pequeno", "Médio", "Grandinho", "Grande", "Grandão", "Gigante", "Gigantesco", "Enorme", "BATENDO NA LUA", "QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk"];
        var vA70 = ["Minuscúlo", "Pequenino", "Pequeno", "Médio", "Grandinho", "Grande", "Grandão", "Gigante", "Gigantesco", "Enorme", "BATENDO NA LUA", "QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk"];
        var vA71 = ["Minuscúlo", "Pequenino", "Pequeno", "Médio", "Grandinho", "Grande", "Grandão", "Gigante", "Gigantesco", "Enorme", "BATENDO NA LUA", "QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk"];
        const v448 = vA67[Math.floor(Math.random() * vA67.length)];
        const v449 = vA68[Math.floor(Math.random() * vA68.length)];
        const v450 = vA69[Math.floor(Math.random() * vA69.length)];
        const v451 = vA70[Math.floor(Math.random() * vA70.length)];
        const v452 = vA71[Math.floor(Math.random() * vA71.length)];
        pdr = "Esses são os caras com o menor e maior pau do Grupo\n" + groupName + "\n\n@" + v443.id.split("@")[0] + "\n" + v448 + "\n@" + v444.id.split("@")[0] + "\n" + v449 + "\n@" + v445.id.split("@")[0] + "\n" + v450 + "\n@" + v446.id.split("@")[0] + "\n" + v451 + "\n@" + v447.id.split("@")[0] + "\n" + v452 + "\n\n " + NomeDoBot;
        membr.push(v443.id);
        membr.push(v444.id);
        membr.push(v445.id);
        membr.push(v446.id);
        membr.push(v447.id);
        vF22(pdr, membr, true);
        break;
      case "lyrics":
        if (args.length < 1) {
          return reply("Qual é o nome da música?");
        }
        teks = body.slice(7);
        res = await lirikLagu(teks);
        reply("\n┏━━━━━━[👥]━━━━━━━━\n⚙️ *música: ➤ " + teks + "*\n⚙️ *Letra:* ☟︎︎︎\n┗━━━━━━[👥]━━━━━━━━\n\n*" + res[0].result + "*");
        break;
      case "ptlyrics":
        try {
          reply(mess.wait);
          teks = body.slice(10);
          anu = await fetchJson("https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=" + teks, {
            method: "get"
          });
          dated = "*Nome da música: " + teks + "*\n*Letras:*\n*" + anu.lyrics + "*";
        } catch (e111) {
          console.log(e111);
          reply("erro!!");
        }
        break;
      case "ibere":
        if (args.length < 1) {
          return reply("Escreva o texto de deseje que fale");
        }
        teks = body.slice(7);
        uber.getAudioUrl("pub_mgqgxwvhxsukcqqawy", "pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f", "ibere", teks).then(async p347 => {
          buff = await getBuffer(p347);
          const vO1206 = {
            audio: buff,
            mimetype: "audio/mpeg"
          };
          const vO1207 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1206, vO1207);
        });
        break;
      case "eminem":
        if (args.length < 1) {
          return reply("Escreva o texto de deseje que fale");
        }
        teks = body.slice(7);
        uber.getAudioUrl("pub_mgqgxwvhxsukcqqawy", "pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f", "eminem", teks).then(async p348 => {
          buff = await getBuffer(p348);
          const vO1208 = {
            audio: buff,
            mimetype: "audio/mpeg"
          };
          const vO1209 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1208, vO1209);
        });
        break;
      case "chapolin":
        if (args.length < 1) {
          return reply("Escreva o texto de deseje que fale");
        }
        teks = body.slice(7);
        uber.getAudioUrl("pub_mgqgxwvhxsukcqqawy", "pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f", "chapolin-br", teks).then(async p349 => {
          buff = await getBuffer(p349);
          const vO1210 = {
            audio: buff,
            mimetype: "audio/mpeg"
          };
          const vO1211 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1210, vO1211);
        });
        break;
      case "patolino":
        if (args.length < 1) {
          return reply("Escreva o texto de deseje que fale");
        }
        teks = body.slice(7);
        uber.getAudioUrl("pub_mgqgxwvhxsukcqqawy", "pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f", "patolino", teks).then(async p350 => {
          buff = await getBuffer(p350);
          const vO1212 = {
            audio: buff,
            mimetype: "audio/mpeg"
          };
          const vO1213 = {
            quoted: m
          };
          sock.sendMessage(from, vO1212, vO1213);
        });
        break;
      case "faustao":
        if (args.length < 1) {
          return reply("Escreva o texto de deseje que fale");
        }
        teks = body.slice(7);
        uber.getAudioUrl("pub_mgqgxwvhxsukcqqawy", "pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f", "faustao", teks).then(async p351 => {
          buff = await getBuffer(p351);
          const vO1214 = {
            audio: buff,
            mimetype: "audio/mpeg"
          };
          const vO1215 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1214, vO1215);
        });
        break;
      case "mulheres":
      case "pesquisar-mulheres":
        reply(mess.wait);
        var vA72 = ["cecan hd", "cecan indo", "cewe cantik", "cewe aesthetic", "cecan aesthetic"];
        var v453 = await pinterest(vF20(vA72));
        const vO1216 = {
          buttonId: "" + prefix + command,
          buttonText: {
            displayText: "<❗> PRÓXIMO <❗> "
          },
          type: 1
        };
        var vA73 = [vO1216];
        const vO1217 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          caption: "AQUI ESTÁ!!!",
          image: {
            url: vF20(v453.result)
          },
          buttons: vA73,
          footer: "PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO"
        }, vO1217);
        break;
      case "foto-cria":
      case "foto-de-cria":
        reply(mess.wait);
        var vA72 = ["foto de cria", "cria rj", "foto de cria perfil", "cria do rj", "'foto-cria", "'foto cria", "'foto-de-cria", "foto de cria"];
        var v453 = await pinterest(vF20(vA72));
        const vO1218 = {
          buttonId: "" + prefix + command,
          buttonText: {
            displayText: "<❗> PRÓXIMO <❗> "
          },
          type: 1
        };
        var vA73 = [vO1218];
        const vO1219 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          caption: "AQUI ESTÁ!!",
          image: {
            url: vF20(v453.result)
          },
          buttons: vA73,
          footer: "PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO"
        }, vO1219);
        break;
      case "pesquisar":
        try {
          reply(enviar.espere);
          blar = Math.floor(Math.random() * 5);
          v427 = await fetchJson("http://aleatory-api.xyz:8080/api/gimage?txt=" + q + "&apikey=key-do_jose-carlos-2.5-");
          blabla = await getBuffer(v427.resultado.result["" + blar].url);
          const vO1220 = {
            image: blabla
          };
          const vO1221 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1220, vO1221).catch(p352 => {
            reply("ERROR, não foi encontrado, tente novamente...");
          });
        } catch (e112) {
          if (String(e112).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "noticias":
        var {
          TodaNoticias: noticiasFunc
        } = require("./armor/scraper");
        await noticiasFunc().then(async p353 => {
          await reply(p353.resultado.map(p354 => "📍 *Noticia*: " + p354.noticia + "\n📰 *Descrição*: " + (p354.desc || "Não tem") + "\n🔗 *Link*: " + p354.link).join("\n\n•••••••••••••••••••••••••••••\n\n"));
        }).catch(async p355 => {
          console.log(p355);
          reply("ERROR");
        });
        break;
      case "amazon":
        var {
          AmazonSearch: _0x3d6a79
        } = require("./armor/scraper");
        if (!q) {
          return reply("O que você está procurando?");
        }
        _0x3d6a79(q).then(async ({
          resultado: _0x1fc522
        }) => {
          const vO1222 = {
            url: _0x1fc522[0].imagem
          };
          const vO1223 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: vO1222,
            caption: _0x1fc522.map(p356 => "🛍️ *Produto*: " + p356.produto + "\n💸 *Preço*: " + p356.valor + "\n🔗 *Link*: " + p356.link).join("\n\n••••••••••••••••••••••••\n\n")
          }, vO1223);
        }).catch(p357 => {
          console.log(p357);
          reply("ERROR");
        });
        break;
      case "submarino":
        var {
          SubmarinoSearch: _0x4fc827
        } = require("./armor/scraper");
        if (!q) {
          return reply("O que você está procurando?");
        }
        _0x4fc827(q).then(async ({
          resultado: _0x13bc03
        }) => {
          const vO1224 = {
            url: _0x13bc03[0].imagem
          };
          const vO1225 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: vO1224,
            caption: _0x13bc03.map(p358 => "🛍️ *Produto*: " + p358.produto + "\n💸 *Preço*: " + p358.valor + "\n🔗 *Link*: " + p358.link).join("\n\n••••••••••••••••••••••••\n\n")
          }, vO1225);
        }).catch(p359 => {
          console.log(p359);
          reply("ERROR");
        });
        break;
      case "americanas":
        var {
          AmericanasSearch: _0x177418
        } = require("./armor/scraper");
        if (!q) {
          return reply("O que você está procurando?");
        }
        _0x177418(q).then(async ({
          resultado: _0xa23311
        }) => {
          const vO1226 = {
            url: _0xa23311[0].imagem
          };
          const vO1227 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: vO1226,
            caption: _0xa23311.map(p360 => "🛍️ *Produto*: " + p360.produto + "\n💸 *Preço*: " + p360.valor + "\n🔗 *Link*: " + p360.link).join("\n\n••••••••••••••••••••••••\n\n")
          }, vO1227);
        }).catch(p361 => {
          console.log(p361);
          reply("ERROR");
        });
        break;
      case "meme2":
        var {
          memesDroid: _0xd9ac39
        } = require("./armor/funcoes/scraper.js");
        _0xd9ac39().then(async p362 => {
          if (p362.resultado.length == 0) {
            return await reply("Não consegui encontrar tente novamente");
          }
          teks = vF20(p362.resultado);
          const vO1228 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: await getBuffer(teks.imagem),
            caption: teks.titulo,
            buttons: [{
              buttonId: "" + (prefix + command),
              buttonText: {
                displayText: "proximo ☔"
              },
              type: 1
            }]
          }, vO1228);
        }).catch(async p363 => {
          console.log(p363);
          await reply("ERROR");
        });
        break;
      case "globo":
      case "poder360":
      case "jovempan":
      case "uol":
      case "cnnbrasil":
      case "estadao":
        try {
          var vA21 = [];
          v453 = await fetchJson("https://nezsab-apis.xyz/api/noticias/" + command + "?apikey=" + keyapi);
          for (let v454 of v453.pesquisa.resultado) {
            const vO1229 = {
              title: "" + v454.noticia,
              description: "> Veja a matéria completa no site abaixo:\n" + v454.link,
              rowId: "UP"
            };
            vA21.push(vO1229);
          }
          const vO1230 = {
            title: "" + NomeDoBot,
            rows: vA21
          };
          const vO1231 = {
            text: "Confira agora algumas das notícias de hoje no " + command + " na íntegra!!\n>> *Fonte:* " + v453.pesquisa.fonte,
            footer: "",
            title: "",
            buttonText: "🗞𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🗞️",
            sections: [vO1230]
          };
          vVO1334 = vO1231;
          sock.sendMessage(from, vVO1334);
        } catch (e113) {
          reply("<❌️> Erro! Nenhuma atualização no site!");
        }
        break;
      case "playstore":
        if (!q.length > 2) {
          return reply("Cade o título do apk que deseja pesquisar?");
        }
        async function f11() {
          var vA74 = [];
          v453 = await fetchJson("https://nezsab-apis.xyz/api/playstore?nome=" + q + "&apikey=" + keyapi);
          for (let v455 of v453.pesquisa.resultado) {
            const vO1232 = {
              title: "" + v455.nome,
              description: "Desenvolvedor do App: " + v455.desenvolvedor + "\nAvaliação do Aplicativo: " + v455.estrelas + "\nLink do Aplicativo: " + v455.link + "\nLink da Imagem: " + v455.imagem,
              rowId: "a"
            };
            vA74.push(vO1232);
          }
          const vO1233 = {
            text: "> Buscando por: " + q + "\nClique para ver as informações!",
            footer: "By: " + NomeDoBot,
            title: "⸺͟͞ꪶ𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀: 𝐏𝐋𝐀𝐘-𝐒𝐓𝐎𝐑𝐄ꫂ ✰✰",
            buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
            sections: [{
              title: "" + NomeDoBot,
              rows: vA74
            }]
          };
          vVO1334 = vO1233;
          sock.sendMessage(from, vVO1334);
        }
        f11().catch(p364 => {
          reply("<❌️> Não encontrei o aplicativo ou api caiu!");
        });
        break;
      case "ifunny":
      case "meme3":
        var {
          iFunny: _0x25cc7e
        } = require("./armor/funcoes/scraper.js");
        _0x25cc7e().then(async p365 => {
          if (p365.imagens.length == 0) {
            return await reply("Não consegui encontrar tente novamente");
          }
          teks = vF20(p365.imagens);
          const vO1234 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            image: await getBuffer(teks.imagem),
            caption: teks.titulo,
            buttons: [{
              buttonId: "" + (prefix + command),
              buttonText: {
                displayText: "proximo ☔"
              },
              type: 1
            }]
          }, vO1234);
        }).catch(async p366 => {
          console.log(p366);
          await reply("ERROR");
        });
        break;
      case "memevid":
        var {
          iFunny: _0x25cc7e
        } = require("./armor/funcoes/scraper.js");
        for (i = 0; i < 10; i++) {
          res = await _0x25cc7e();
          if (res.videos.length == 0) {
            continue;
          }
          teks = vF20(res.videos);
          const vO1235 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            video: await getBuffer(teks.video),
            caption: teks.titulo,
            buttons: [{
              buttonId: "" + (prefix + command),
              buttonText: {
                displayText: "proximo ☔"
              },
              type: 1
            }]
          }, vO1235);
          break;
        }
        break;
      case "sugestão":
      case "sugestao":
        const v456 = body.slice(10);
        if (args.length <= 1) {
          return reply("Exemplo: " + prefix + "sugestao \"Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso...\"");
        }
        const vO1236 = {
          quoted: vVO27
        };
        if (args.length >= 800) {
          return sock.sendMessage(from, {
            text: "Máximo 800 caracteres"
          }, vO1236);
        }
        var v457 = mek.participant;
        sug = "*[👥️] SUGESTÕES DE CMDS [👥]*\nEnviado por: wa.me/" + sender.split("@s.whatsapp.net")[0] + "\nMensagem: " + v456;
        const vO1237 = {
          text: sug
        };
        const vO1238 = {
          quoted: mek
        };
        await sock.sendMessage(numerodonoa + "@s.whatsapp.net", vO1237, vO1238);
        reply("Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.");
        break;
      case "yaoi":
        reply(mess.wait);
        var vA72 = ["yaoi", "yaoi aesthetic", "yaoi hd", "yaoi ganteng"];
        var v453 = await pinterest(vF20(vA72));
        const vO1239 = {
          buttonId: "" + prefix + command,
          buttonText: {
            displayText: "<❗> PRÓXIMO <❗> "
          },
          type: 1
        };
        var vA73 = [vO1239];
        const vO1240 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          caption: "AQUI ESTÁ!!! ",
          image: {
            url: vF20(v453.result)
          },
          buttons: vA73,
          footer: "PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO"
        }, vO1240);
        break;
      case "waifu":
        reply(mess.wait);
        var vA72 = ["waifu", "waifu aesthetic", "waifu hd"];
        var v453 = await pinterest(vF20(vA72));
        const vO1241 = {
          buttonId: prefix + "waifu",
          buttonText: {
            displayText: "<❗> PRÓXIMO <❗> "
          },
          type: 1
        };
        var vA73 = [vO1241];
        const vO1242 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          caption: "AQUI ESTÁ!!!",
          image: {
            url: vF20(v453.result)
          },
          buttons: vA73,
          footer: "PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO"
        }, vO1242);
        break;
      case "husbu":
        reply(mess.wait);
        var vA72 = ["husbu anime", "husbu hd", "husbu aesthetic"];
        var v453 = await pinterest(vF20(vA72));
        const vO1243 = {
          buttonId: prefix + "husbu",
          buttonText: {
            displayText: "<❗> PRÓXIMO <❗> "
          },
          type: 1
        };
        var vA73 = [vO1243];
        const vO1244 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          caption: "AQUI ESTÁ!!!",
          image: {
            url: vF20(v453.result)
          },
          buttons: vA73,
          footer: "PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO"
        }, vO1244);
        break;
      case "loli":
        reply(enviar.espere);
        {
          buffer = "https://nezsab-apis.xyz/api/loli";
          const vA75 = [{
            buttonId: "" + (prefix + command),
            buttonText: {
              displayText: "<❗> PRÓXIMO <❗>"
            },
            type: 1
          }];
          const vO1245 = {
            url: buffer
          };
          const vO1246 = {
            image: vO1245,
            caption: "AQUI ESTÁ!",
            footer: "👁️",
            buttons: vA75,
            headerType: 4
          };
          const vVO1246 = vO1246;
          const vO1247 = {
            quoted: m
          };
          sock.sendMessage(from, vVO1246, vO1247);
        }
        break;
      case "cosplay":
        reply(enviar.espere);
        {
          buffer = "https://api.zacros.my.id/randomimg/cosplay";
          const vA76 = [{
            buttonId: "" + (prefix + command),
            buttonText: {
              displayText: "<❗> PRÓXIMO <❗>"
            },
            type: 1
          }];
          const vO1248 = {
            url: buffer
          };
          const vO1249 = {
            image: vO1248,
            caption: "AQUI ESTÁ!",
            footer: "PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO️",
            buttons: vA76,
            headerType: 4
          };
          const vVO1249 = vO1249;
          const vO1250 = {
            quoted: m
          };
          sock.sendMessage(from, vVO1249, vO1250);
        }
        break;
      case "juice":
        {
          let vLSHttpstextpromefruitj = "https://textpro.me/fruit-juice-text-effect-861.html";
          let v458 = await textpro(vLSHttpstextpromefruitj, q);
          vF39("Espere um minuto está fazendo o criador cerca de 1 minuto a menos");
          console.log(v458);
          const vO1251 = {
            url: v458
          };
          const vO1252 = {
            image: vO1251,
            caption: "PRONTO!"
          };
          const vO1253 = {
            quoted: m
          };
          sock.sendMessage(from, vO1252, vO1253);
        }
        break;
      case "avalie":
        const v459 = body.slice(8);
        if (args.length <= 1) {
          return reply("Exemplo: " + prefix + "avaliar Bot muito bom, parabéns.");
        }
        if (args.length >= 400) {
          return reply("Máximo 400 caracteres");
        }
        tdptls = "[<❗> Avaliação ]\nDe: wa.me/" + sender.split("@s.whatsapp.net")[0] + "\n: " + v459;
        const vO1254 = {
          mentionedJid: [sender]
        };
        const vO1255 = {
          text: "" + tdptls,
          contextInfo: vO1254
        };
        const vO1256 = {
          quoted: vVO27
        };
        await sock.sendMessage(numerodonoa + "@s.whatsapp.net", vO1255, vO1256);
        reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.");
        break;
      case "neko2":
        reply(enviar.espere);
        waifud = await axios.get("https://waifu.pics/api/sfw/neko");
        const vO1257 = {
          buttonId: prefix + "neko2",
          buttonText: {
            displayText: "<❗> PRÓXIMO <❗>"
          },
          type: 1
        };
        var vA77 = [vO1257];
        const vO1258 = {
          url: waifud.data.url
        };
        const vO1259 = {
          image: vO1258,
          caption: "Aqui está...",
          footer: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
          buttons: vA77,
          headerType: 4
        };
        let vVO1259 = vO1259;
        const vO1260 = {
          quoted: m
        };
        await sock.sendMessage(from, vVO1259, vO1260).catch(p367 => {
          return "Error!";
        });
        break;
      case "zoro":
      case "luffy":
      case "sanji":
      case "ussop":
      case "nami":
      case "copper":
      case "naruto":
      case "minato":
      case "sasuke":
      case "sakura":
      case "boruto":
      case "sarada":
      case "mitsuki":
      case "orochimaru":
      case "tsunade":
      case "kakashi":
      case "killua":
      case "gon":
      case "rimuru":
      case "sagiri":
      case "natsu":
      case "tanjirou":
      case "nezuko":
      case "senku":
        const vO1261 = {
          text: "👋",
          key: m.key
        };
        const vO1262 = {
          react: vO1261
        };
        sock.sendMessage(from, vO1262);
        const vV11 = command;
        hx.pinterest(vV11).then(p368 => {
          angka = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          const v460 = angka[Math.floor(Math.random() * angka.length)];
          const vA78 = [{
            buttonId: "" + (prefix + command),
            buttonText: {
              displayText: "<❗> PRÓXIMO <❗>"
            },
            type: 1
          }];
          const vO1263 = {
            url: p368[v460]
          };
          const vO1264 = {
            image: vO1263,
            caption: "AQUI ESTÁ!!",
            footer: "PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO",
            buttons: vA78,
            headerType: 4
          };
          const vVO1264 = vO1264;
          const vO1265 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO1264, vO1265);
        });
        break;
      case "cotacao":
      case "cotação":
        {
          if (!v44) {
            return reply(mess.premium);
          }
          const vO1266 = {
            text: " Óla " + pushname + "!! como posso te ajudar?",
            footer: "entre em meu grupo para novidades!",
            buttonText: "Clique Aqui!!",
            sections: [{
              title: "Selecione a moeda que voce deseja saber o valor.",
              rows: [{
                title: "EURO 💶",
                description: "\n\n_Valor do Euro_",
                rowId: prefix + "euro"
              }, {
                title: "DÓLAR 💵",
                description: "\n\n_Valor do Dólar_",
                rowId: prefix + "dolar"
              }, {
                title: "LIBRA 💷",
                description: "\n\n_Valor da Libra_",
                rowId: prefix + "libra"
              }, {
                title: "BITCOIN 🪙",
                description: "\n\n_Valor do Bitcoin_",
                rowId: prefix + "bitcoin"
              }, {
                title: "ETHEREUM ⬨",
                description: "\n\n_Valor do Ethereum_",
                rowId: prefix + "ethereum"
              }]
            }],
            listType: 1
          };
          const vVO1266 = vO1266;
          sock.sendMessage(m.chat, vVO1266, {
            quoted: m
          });
        }
        break;
      case "dolar":
      case "euro":
      case "libra":
        {
          if (!v44) {
            return reply(mess.premium);
          }
          if (command == "dolar") {
            var vLSUSDBRL = "USD-BRL";
          } else if (command == "euro") {
            var vLSUSDBRL = "EUR-BRL";
          } else if (command == "bitcoin") {
            var vLSUSDBRL = "BTC-BRL";
          } else if (command == "libra") {
            var vLSUSDBRL = "GBP-BRL";
          } else if (command == "ethereum") {
            var vLSUSDBRL = "ETH-BRL";
          }
          axios.get("https://economia.awesomeapi.com.br/last/" + vLSUSDBRL).then(p369 => {
            if (command == "dolar") {
              var v461 = p369.data.USDBRL;
            } else if (command == "euro") {
              var v461 = p369.data.EURBRL;
            } else if (command == "libra") {
              var v461 = p369.data.GBPBRL;
            }
            reply("*Cotação nas ultimas 24H* 💱 \nMoeda: " + v461.name + "\nValor mais alto: " + Number(v461.high).toFixed(2) + "\nValor mais baixo: " + Number(v461.low).toFixed(2) + "\nValor atual: " + Number(v461.bid).toFixed(2));
          }).catch(p370 => {
            console.log("erro");
          });
        }
        break;
      case "bitcoin":
      case "ethereum":
        {
          if (!v44) {
            return reply(mess.premium);
          }
          if (command == "bitcoin") {
            var vLSUSDBRL = "BTC-BRL";
          } else {
            var vLSUSDBRL = "ETH-BRL";
          }
          axios.get("https://economia.awesomeapi.com.br/last/" + vLSUSDBRL).then(p371 => {
            if (command == "bitcoin") {
              var v462 = p371.data.BTCBRL;
            } else {
              var v462 = p371.data.ETHBRL;
            }
            reply(" *Cotação nas ultimas 24H* 💱\nMoeda: " + v462.name + "\nValor mais alto: " + v462.high + "\nValor mais baixo: " + v462.low + "\nValor atual: " + v462.bid);
          }).catch(p372 => {
            console.log("erro");
          });
        }
        break;
      case "dolarhoje":
        if (!v44) {
          return reply(mess.premium);
        }
        try {
          dolar = await fetchJson("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json");
          reply(dolar.brl + " R$");
        } catch {
          reply("Erro ao obter informação");
        }
        break;
      case "eurohoje":
        if (!v44) {
          return reply(mess.premium);
        }
        try {
          dolar = await fetchJson("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/brl.json");
          reply(dolar.brl + " R$");
        } catch {
          reply("Erro ao obter informação");
        }
        break;
      case "bitcoinhoje":
        if (!v44) {
          return reply(mess.premium);
        }
        try {
          dolar = await fetchJson("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc/brl.json");
          reply(dolar.brl + " R$");
        } catch {
          reply("Erro ao obter informação");
        }
        break;
      case "ethereumhoje":
        if (!v44) {
          return reply(mess.premium);
        }
        try {
          dolar = await fetchJson("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eth/brl.json");
          reply(dolar.brl + " R$");
        } catch {
          reply("Erro ao obter informação");
        }
        break;
      case "xvd":
      case "xvds":
      case "xvideo":
        if (!v44) {
          return reply(mess.premium);
        }
        try {
          if (args.length < 1) {
            return reply("Você precisa colocar um link!\n Use: *_xvdss mia khalifa* (por exemplo) e use o link.");
          }
          if (!isUrl(args[0]) && !args[0].includes("https://xvideos.com/")) {
            return reply("O link está errado, verifique e tente novamente");
          }
          const vO1267 = {
            text: "👋",
            key: m.key
          };
          const vO1268 = {
            react: vO1267
          };
          sock.sendMessage(from, vO1268);
          res = await fetchJson("https://mnazria.herokuapp.com/api/porndownloadxvideos?url=" + args[0], {
            method: "get"
          });
          buffer = await getBuffer(res.mp4);
          const vO1269 = {
            audio: buffer,
            mimetype: "audio/mp4"
          };
          const vO1270 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1269, vO1270);
          const vO1271 = {
            video: buffer,
            mimetype: "video/mp4"
          };
          const vO1272 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1271, vO1272);
        } catch (e114) {
          console.log("Erro:", color(e114, "red"));
          console.log("" + e114);
        }
        break;
      case "xvideos":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          const vO1273 = {
            text: "🔞",
            key: m.key
          };
          const vO1274 = {
            react: vO1273
          };
          sock.sendMessage(from, vO1274);
          if (!q.length > 2) {
            return reply("Cade o título do porno que deseja pesquisar?");
          }
          var vA21 = [];
          datab = await fetchJson("https://nezsab-apis.xyz/api/xvideos?q=" + q + "&apikey=" + keyapi);
          for (let v463 of datab.resultado) {
            const vO1275 = {
              title: v463.nome,
              description: "Duração: " + v463.tempo + " > Qualidade do Vídeo: " + v463.qualidade + "\nLink: " + v463.link,
              rowId: prefix + "xvideos-dw " + v463.link
            };
            vA21.push(vO1275);
          }
          const vO1276 = {
            text: "Aqui está o resultado da sua\npesquisa: " + q + "\nSelecione para baixar o vídeo.",
            footer: "By: " + NomeDoBot,
            title: "⸺͟͞ꪶ𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀: 𝐗𝐕𝐈𝐃𝐄𝐎𝐒ꫂ ✰✰✰",
            buttonText: "🧧𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑🧧️",
            sections: [{
              title: "" + NomeDoBot,
              rows: vA21
            }]
          };
          listMessagse = vO1276;
          sock.sendMessage(from, listMessagse);
        }
        break;
      case "xvideos-dw":
        if (!v44 && !isGroupAdmins) {
          return reply(enviar.msg.premium);
        }
        const vO1277 = {
          text: "✅",
          key: mek.key
        };
        const vO1278 = {
          react: vO1277
        };
        sock.sendMessage(from, vO1278);
        anu = await fetchJson("https://www.nezsab-apis.xyz/download/xvideos?url=" + q + "&apikey=" + keyapi);
        reply("*⬇️ Baixando, aguarde um instante...*");
        const vO1279 = {
          url: anu.resultado.link
        };
        const vO1280 = {
          video: vO1279,
          mimetype: "video/mp4",
          fileName: NomeDoBot + ".mp4",
          caption: "Aqui está o vídeo seu humano punheteiro, boa punheta pra você! <3"
        };
        const vO1281 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1280, vO1281);
        break;
      case "pornovid":
        {
          if (!v44) {
            return reply(enviar.msg.premium);
          }
          reply("Já estou enviando no pv " + pushname);
          const vO1282 = {
            text: "😈",
            key: mek.key
          };
          const vO1283 = {
            react: vO1282
          };
          await sock.sendMessage(from, vO1283);
          v427 = JSON.parse(fs.readFileSync("./armor/sexv.json"));
          const vO1284 = {
            buttonId: prefix + "pornovid",
            buttonText: {
              displayText: "😈[suivant]😈"
            },
            type: 1
          };
          button = [vO1284];
          buttonMessage = {
            video: {
              url: v427[Math.floor(Math.random() * v427.length)],
              quoted: mek
            },
            caption: "(⁠\xA0⁠˘⁠\xA0⁠³⁠˘⁠)⁠♥",
            footer: "@" + pushname,
            button: button,
            headerType: 1
          };
          sock.sendMessage(sender, buttonMessage);
        }
        break;
      case "forestfaye":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        reply("<❗> Enviando no seu pv, aguarde...");
        buffer = fs.readFileSync("funções de cmd/imgs/packs/forestfaye.jpeg");
        v272 = "*Pack da ForestFayee* _(Google Fotos)_\n\nhttps://bit.ly/2ZmIwGi";
        const vO1285 = {
          image: buffer,
          quoted: mek,
          caption: v272
        };
        await sock.sendMessage(sender, vO1285);
        break;
      case "hentai-neko":
      case "hneko":
        reply("<❗> Enviando no seu pv, aguarde.");
        if (!v44 && !isGroupAdmins) {
          return reply(enviar.msg.premium);
        }
        reply(enviar.espere);
        waifudd = await axios.get("https://waifu.pics/api/nsfw/neko");
        const vO1286 = {
          buttonId: "" + prefix + command,
          buttonText: {
            displayText: "<❗> PRÓXIMO <❗>"
          },
          type: 1
        };
        let vA79 = [vO1286];
        const vO1287 = {
          url: waifudd.data.url
        };
        const vO1288 = {
          image: vO1287,
          caption: "AKI ESTÁ PUNHETEIRO...",
          buttons: vA79,
          headerType: 1
        };
        let vVO1288 = vO1288;
        const vO1289 = {
          quoted: m
        };
        await sock.sendMessage(sender, vVO1288, vO1289).catch(p373 => {
          return "Error!";
        });
        break;
      case "mia":
        {
          const vO1290 = {
            text: "👋",
            key: m.key
          };
          const vO1291 = {
            react: vO1290
          };
          sock.sendMessage(from, vO1291);
          let {
            pinterest: _0x2fab42
          } = require("./funções de cmd/funções/scraper");
          const vA80 = ["mia khalifa", "mia khalifa hd", "khalifa", "mia khalifa 2022", "porno xvideo"];
          let v464 = vA80[Math.floor(Math.random() * vA80.length)];
          let v465 = await _0x2fab42("mia khalifa");
          let v466 = v465[Math.floor(Math.random() * v465.length)];
          const v467 = await getBuffer(v466);
          buffer = await imageToWebp(v467);
          let v468 = await sock.sendVideoAsSticker(from, v466, m, {
            packname: "NEZUKO BOT",
            author: "MIA KHALIFA"
          });
          await fs.unlinkSync(v468);
        }
        break;
      case "hentai":
        {
          if (!v44 && !isGroupAdmins) {
            return reply(enviar.msg.premium);
          }
          reply(enviar.espere);
          anu = await hentai();
          v384 = anu[Math.floor(Math.random() * anu.length)];
          const vO1292 = {
            url: v384.video_1
          };
          const vO1293 = {
            video: vO1292,
            caption: "⭔ Título : " + v384.title + "\n⭔ Views : " + v384.views_count + "\n⭔ compartilhamentos : " + v384.share_count
          };
          const vO1294 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1293, vO1294);
        }
        break;
      case "serpremium":
      case "serprem":
        if (!isPremium && !m.key.fromMe) {
          return reply(mess.donosmt);
        }
        premium.push(numerodonoa + "@s.whatsapp.net");
        fs.writeFileSync("./funções de cmd/usuarios/premium.json", JSON.stringify(premium));
        reply("Pronto " + numerodonoa + " você foi adicionado na lista premium.");
        break;
      case "addpremium":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium && !mek.key.fromMe) {
          return reply(enviar.msg.donosmt);
        }
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
          return;
        }
        if (!budy.includes("@55")) {
          v567 = mek.message.extendedTextMessage.contextInfo.participant;
          v427 = premium.includes(v567);
          if (v427) {
            return reply("*Este número já está incluso..*");
          }
          premium.push("" + v567);
          fs.writeFileSync("./funções de cmd/usuarios/premium.json", JSON.stringify(premium));
          const vO1295 = {
            quoted: mek
          };
          sock.sendMessage(from, {
            text: "👑@" + v567.split("@")[0] + " foi adicionado à lista de usuários premium com sucesso👑"
          }, vO1295);
        } else {
          v567 = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          v427 = premium.includes(v567);
          if (v427) {
            return reply("*Este número já está incluso..*");
          }
          premium.push("" + v567);
          fs.writeFileSync("./funções de cmd/usuarios/premium.json", JSON.stringify(premium));
          tedtp = args.join(" ").replace("@", "");
          const vO1296 = {
            text: "👑@" + tedtp + " foi adicionado à lista de usuários premium com sucesso👑",
            mentions: [v567]
          };
          const vO1297 = {
            quoted: mek
          };
          sock.sendMessage(from, vO1296, vO1297);
        }
        break;
      case "delpremium":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium && !mek.key.fromMe) {
          return reply(enviar.msg.donosmt);
        }
        if (!budy.includes("@55")) {
          num = mek.message.extendedTextMessage.contextInfo.participant;
          v427 = premium.includes(num);
          if (!v427) {
            return reply("*Este número não está incluso na lista premium..*");
          }
          pesquisar = num;
          processo = premium.indexOf(pesquisar);
          while (processo >= 0) {
            premium.splice(processo, 1);
            processo = premium.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/usuarios/premium.json", JSON.stringify(premium));
          const vO1298 = {
            quoted: mek
          };
          sock.sendMessage(from, {
            text: " " + num.split("@")[0] + " foi tirado da lista premium com sucesso.."
          }, vO1298);
        } else {
          v567 = args.join(" ").replace("@", "") + "@s.whatsapp.net";
          v427 = premium.includes(v567);
          if (!v427) {
            return reply("*Este número não está incluso na lista premium..*");
          }
          pesquisar = v567;
          processo = premium.indexOf(pesquisar);
          while (processo >= 0) {
            premium.splice(processo, 1);
            processo = premium.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/usuarios/premium.json", JSON.stringify(premium));
          const vO1299 = {
            quoted: mek
          };
          sock.sendMessage(from, {
            text: " @" + v567.split("@")[0] + " foi tirado da lista premium com sucesso.."
          }, vO1299);
        }
        break;
      case "premiumlist":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        tkks = "╭────「 𝐔𝐒𝐔𝐀́𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌𝐒 」\n";
        for (let v469 of premium) {
          tkks += "│+  @" + v469.split("@")[0] + "\n";
        }
        tkks += "│+ Total : " + premium.length + "\n╰──────「 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 」────";
        reply(tkks.trim());
        break;
      case "checarprem":
        if (!v44) {
          reply("Não, você não tem Premium.");
        } else {
          reply("Sim, você tem premium!");
        }
        break;
      case "getquoted":
      case "getinfo":
      case "get":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3));
        break;
      case "id":
      case "figuid":
        if (!isPremium && !mek.key.fromMe) {
          return;
        }
        if (v110) {
          var v470 = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
          reply(v470);
        }
        break;
      case "autoban":
        if (!isGroup) {
          return reply(enviar.msg.adm);
        }
        if (!isGroupAdmins && !isPremium) {
          return reply("Precisa ser Dono");
        }
        if (args.length < 1) {
          return reply("Hmmmm");
        }
        if (Number(args[0]) === 1) {
          if (v56) {
            return reply("Já está ativado.");
          }
          var v186 = vA16.indexOf(from);
          if (v56) {
            v53[v186].actived = true;
          } else {
            const vO1300 = {
              groupId: from,
              actived: true,
              number: []
            };
            v53.push(vO1300);
          }
          fs.writeFileSync("./funções de cmd/grupos/adeuscara.json", JSON.stringify(v53, null, 2) + "\n");
          reply("Ativou com sucesso o recurso de autoban neste grupo✔️");
        } else if (Number(args[0]) === 0) {
          if (!v56) {
            return reply("Já está Desativado.");
          }
          var v186 = vA16.indexOf(from);
          if (v56) {
            v53[v186].actived = false;
          } else {
            const vO1301 = {
              groupId: from,
              actived: false,
              number: []
            };
            v53.push(vO1301);
          }
          fs.writeFileSync("./funções de cmd/grupos/adeuscara.json", JSON.stringify(v53, null, 2) + "\n");
          reply("Desativou com sucesso o recurso de autoban neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "listban":
        if (!isGroup) {
          return reply(enviar.msg.adm);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        var v186 = vA16.indexOf(from);
        if (!v56) {
          return reply("*Nenhum Número não foi adicionado*");
        }
        teks = "*Números que vou moer na porrada se voltar 😡:*\n";
        for (i = 0; i < v53[v186].number.length; ++i) {
          teks += "➤ *" + v53[v186].number[i] + "*\n";
        }
        teks += "*Esses ai vou descer meu martelo do ban 🥵*";
        reply(teks);
        break;
      case "reagir":
        {
          if (!isPremium) {
            return reply("<❗> Somente meu dono pode usar esse comando.");
          }
          const vO1302 = {
            remoteJid: m.chat,
            fromMe: true,
            id: quoted.id
          };
          const vO1303 = {
            text: args[0],
            key: vO1302
          };
          const vO1304 = {
            react: vO1303
          };
          reactionMessage = vO1304;
          sock.sendMessage(m.chat, reactionMessage);
        }
        break;
      case "opentime":
      case "abrirtime":
        vF38(from);
        if (!m.isGroup) {
          return reply(mess.only.group);
        }
        if (!v45) {
          return reply(mess.only.botadm);
        }
        if (!batdmins) {
          return m.reply(mess.only.gcadmin);
        }
        if (args[1] == "segundos") {
          var v471 = args[0] + "000";
        } else if (args[1] == "minutos") {
          var v471 = args[0] + "0000";
        } else if (args[1] == "horas") {
          var v471 = args[0] + "00000";
        } else {
          return m.reply("*Selecionar :*\nsegundos\nminuto\nhora\n\n*Exemplo*\n10 segundos");
        }
        setTimeout(() => {
          sock.groupSettingUpdate(m.chat, "not_announcement").then(p374 => reply("Grupo aberto com sucesso"));
        }, v471);
        break;
      case "closetime":
        vF38(from);
        if (!m.isGroup) {
          return reply(mess.only.group);
        }
        if (!v45) {
          return reply(mess.only.botadm);
        }
        if (!batdmins) {
          return m.reply(mess.only.gcadmin);
        }
        if (args[1] == "segundos") {
          var v471 = args[0] + "000";
        } else if (args[1] == "minutos") {
          var v471 = args[0] + "0000";
        } else if (args[1] == "horas") {
          var v471 = args[0] + "00000";
        } else {
          return reply("*Selecionar:*\nsegundos\nminutos\nhora\n\n*Exemplo*\n10 segundos");
        }
        setTimeout(() => {
          sock.groupSettingUpdate(m.chat, "announcement").then(p375 => reply("Grupo fechado com sucesso"));
        }, v471);
        break;
      case "listagp":
        try {
          if (!isPremium) {
            return reply(enviar.msg.donosmt);
          }
          let v472 = await sock.groupFetchAllParticipating();
          let v473 = Object.entries(v472).slice(0).map(p376 => p376[1]);
          if (q.includes("-l") || q.includes("--list")) {
            array_gps = [];
            for (let v474 of v473) {
              try {
                array_gps.push({
                  title: "‍𝗡𝗼𝗺𝗲: " + v474.subject,
                  description: "𝗜𝗱: " + v474.id + "\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: " + v474.participants.length,
                  rowId: prefix + command + " " + v474.id
                });
              } catch {}
            }
            const vO1305 = {
              rows: array_gps
            };
            const vO1306 = {
              title: "Lista de grupos",
              text: "Selecione um grupo para mais detalhes",
              buttonText: "Selecionar",
              sections: [vO1305]
            };
            buttonmessage02 = vO1306;
            const vO1307 = {
              quoted: mek
            };
            sock.sendMessage(from, buttonmessage02, vO1307);
          } else if (q && args[0].endsWith("g.us")) {
            try {
              let v475 = await sock.groupMetadata("" + args[0]);
              try {
                ppUrl = await sock.profilePictureUrl("" + args[0], "image");
              } catch {
                ppUrl = "https://telegra.ph/file/41634a68c48c40189dbf7.jpg";
              }
              try {
                linkgc = await sock.groupInviteCode(v475.id);
                linkgp = "https://chat.whatsapp.com/" + linkgc;
              } catch {
                linkgp = "Bot não é admin";
              }
              v272 = "𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: " + v475.subject + "\n𝗗𝗼𝗻𝗼: " + (v475.owner ? v475.owner : "Não tem") + "\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: " + v475.participants.length + "\n𝗜𝗱: " + v475.id + "\n𝗟𝗶𝗻𝗸: " + linkgp + "\n";
              const vO1308 = {
                url: ppUrl
              };
              const vO1309 = {
                image: vO1308,
                caption: v272,
                thumbnail: null,
                mentions: [sender]
              };
              const vO1310 = {
                quoted: mek
              };
              await sock.sendMessage(from, vO1309, vO1310);
            } catch {}
          } else {
            v272 = "━━━━━━━━━━━━━━━━━━\n";
            array_owners = [];
            for (let v476 of v473) {
              v272 += "𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: " + v476.subject + "\n𝗗𝗼𝗻𝗼 / 𝗰𝗿𝗶𝗮𝗱𝗼𝗿: @" + (v476.owner ? v476.owner.split("@")[0] : "Não tem") + "\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: " + v476.participants.length + "\n𝗜𝗱: " + v476.id + "\n━━━━━━━━━━━━━━━━━━\n\n";
              if (v476.owner !== undefined) {
                array_owners.push("" + v476.owner);
              }
            }
            const vO1311 = {
              text: v272,
              mentions: array_owners
            };
            sock.sendMessage(from, vO1311);
          }
        } catch {
          reply("Hmm deu erro");
        }
        break;
      case "addautorm":
      case "addautoban":
      case "listanegra":
        if (!isGroupAdmins && !isPremium) {
          return reply("Precisa ser Dono");
        }
        if (args.length < 1) {
          return reply("Cade o número?");
        }
        var v186 = vA16.indexOf(from);
        if (v56) {
          listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "");
          var v477 = v53[v186].number.indexOf(listng);
          if (v477 >= 0) {
            return reply("*Esse Número ja esta incluso*");
          }
          v53[v186].number.push(listng);
        } else {
          listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "");
          const vO1312 = {
            groupId: from,
            actived: false,
            number: [listng]
          };
          v53.push(vO1312);
        }
        fs.writeFileSync("./funções de cmd/grupos/adeuscara.json", JSON.stringify(v53, null, 2) + "\n");
        reply("*Número adicionado a lista de autoban*");
        break;
      case "delremover":
      case "delautorm":
      case "delautoban":
      case "tirardalista":
        if (!isGroup) {
          return reply(enviar.msg.adm);
        }
        if (!isGroupAdmins && !isPremium) {
          return reply("Precisa ser Dono");
        }
        if (args.length < 1) {
          return reply("Diga o numero sem espaço, + ou traço");
        }
        if (isNaN(args[0])) {
          return reply("Diga o numero sem espaço, + ou traço");
        }
        var v186 = vA16.indexOf(from);
        if (!v56) {
          return reply("*Nenhum Número não foi adicionado*");
        }
        var v477 = v53[v186].number.indexOf(args[0]);
        if (v477 < 0) {
          return reply("*Esse número não está incluso*");
        }
        v53[v186].number.splice(v477, 1);
        fs.writeFileSync("./funções de cmd/grupos/adeuscara.json", JSON.stringify(v53, null, 2) + "\n");
        reply("*Número removido a lista de autoban*");
        break;
      case "banghost":
      case "banghosts":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium) {
          return reply("Só dono pode executar este comando..");
        }
        if (!isBotGroupAdmins) {
          return reply("Bot precisa ser ADM, para executar esta função.");
        }
        if (q.length < 1) {
          return reply("Exemplo: " + prefix + "banghosts 0\n\nEle vai banir todos aqueles que tá com 0 mensagens, mas faça isso apenas se passou um tempo com o bot armazenando mensagem dos membros ativos do grupo.");
        }
        async function f12() {
          if (vA14.indexOf(from) >= 0) {
            for (let v478 of v37) {
              if (vA15.indexOf(v478.id) >= 0) {
                var v479 = vA15.indexOf(v478.id);
                if (countMessage[v186].numbers[v479].messages <= args[0]) {
                  if (v38.includes(v478.id)) {
                    return vF22("@" + v478.id + " ta liberado da inspeção por ser admin", [v478.id], true);
                  }
                  if (v39.includes(v478.id)) {
                    return vF22("@" + v478.id + " ta liberado da inspeção por ser dono", [v478.id], true);
                  }
                  sock.groupParticipantsUpdate(from, [v478.id], "remove");
                }
              }
            }
          }
        }
        setInterval(f12, 1000);
        break;
      case "convite":
        if (!budy.includes("chat.whatsapp.com")) {
          return reply("Cadê o link do grupo que você deseja que eu entre?");
        }
        cnvt = args.join(" ");
        reply("O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..");
        sendButtons(numerodonoa + "@s.whatsapp.net", "☔ Convite para entrar em um Grupo\n\nLink : " + cnvt + "\n\nNúmero dele(a) : wa.me/" + sender.split("@")[0], "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿️", [{
          buttonId: prefix + "entrar " + cnvt,
          buttonText: {
            displayText: "Aceitar"
          },
          type: 1
        }, {
          buttonId: prefix + "recusar " + sender,
          buttonText: {
            displayText: "Recusar"
          },
          type: 1
        }], selo);
        break;
      case "recusar":
        if (!isPremium) {
          return reply("Só dono...");
        }
        sock.sendMessage(q, {
          text: "Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺"
        });
        break;
      case "join":
      case "entrar":
        if (!isPremium) {
          return reply(enviar.msg.donosmt);
        }
        if (!q) {
          return reply("Coloque o link");
        }
        if (!isUrl(args[0]) || !args[0].includes("whatsapp.com")) {
          return reply("Link inválido");
        }
        try {
          let v480 = args[0].split("chat.whatsapp.com/")[1];
          await sock.groupAcceptInvite(v480);
          reply("Prontinho, fiz o que você pediu");
        } catch (e115) {
          if (String(e115).includes("resource-limit")) {
            reply("O bot não pode entrar nesse grupo porque ele está lotado");
          } else if (String(e115).includes("not-authorized")) {
            reply("O bot não pode entrar nesse grupo porque ele foi removido");
          } else if (String(e115).includes("gone")) {
            reply("O bot não pode entrar nesse grupo porque o link foi redefinido");
          } else if (String(e115).includes("not-acceptable")) {
            reply("Esse grupo não existe");
          } else {
            reply("Hmm não consegui entrar no grupo");
          }
        }
        break;
      case "correio":
        {
          v272 = args.join(" ");
          if (!v272) {
            return reply("Exemplo: " + (prefix + command) + " +55 00.../Oi amor, sdds");
          }
          let v481 = v272.split("/")[0].replace(/\D/g, "");
          let v482 = v272.split("/")[1];
          if (!v481) {
            return reply("Cadê o número da pessoa?");
          }
          if (!v482) {
            return reply("Cadê a mensagem do correio?");
          }
          let [v483] = await sock.onWhatsApp(v481);
          if (!v483) {
            return reply("Número inválido");
          }
          v427 = "╭┄━┄━┄━┄━┄━╮\n┞┧\xA0⸙. ͎۪۫\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0💌\xA0\xA0ː͡₊ꞋꞌꞋꞌ\n┞┧Correio anônimo\n┞┧Msg: " + v482 + "\n┞┧\n╰┄━┄━┄━┄━┄━╮";
          const vO1313 = {
            text: v427
          };
          sock.sendMessage(v483.jid, vO1313);
          reply("Mensagem enviada com sucesso para wa.me/" + v483.jid.split("@")[0]);
        }
        break;
      case "legendabv":
        if (!isGroup) {
          return m.reply("Só em Grupo");
        }
        if (!isGroupAdmins) {
          return m.reply("Você Não é Adm");
        }
        if (q.length < 5) {
          return reply("Coloca um bem vindo maior!");
        }
        if (isGroup && vA5.indexOf(from) >= 0) {
          var v484 = vA5.indexOf(from);
          v78[v484].mensagembv = q ? q : "Bem Vindo!";
          await fs.writeFileSync("./funções de cmd/grupos/bvmsg.json", JSON.stringify(v78, null, 2) + "\n");
          reply("Trocou a mensagem de bem vindo para: " + v78[v484].mensagembv);
        } else {
          reply("Não Consegui colocar a descricão!");
        }
        break;
      case "legenda2":
        {
          if (!/image/.test(mime)) {
            return reply("Enviar/responder imagem/adesivo com legenda " + (prefix + command) + " texto1|text2");
          }
          if (!v21) {
            return reply("Enviar/responder imagem/adesivo com legenda " + (prefix + command) + " texto1|text2");
          }
          const vO1314 = {
            text: "👋",
            key: m.key
          };
          const vO1315 = {
            react: vO1314
          };
          sock.sendMessage(from, vO1315);
          atas = v21.split("|")[0] ? v21.split("|")[0] : "-";
          bawah = v21.split("|")[1] ? v21.split("|")[1] : "-";
          let v485 = await quoted.download();
          let {
            floNime: _0x19a074
          } = require("./funções/uploader");
          let v486 = await _0x19a074(v485);
          let v487 = "https://api.memegen.link/images/custom/" + encodeURIComponent(atas) + "/" + encodeURIComponent(bawah) + ".png?background=" + v486.result.url;
          const vO1316 = {
            packname: global.packname,
            author: global.auhor
          };
          let v488 = await sock.sendImageAsSticker(from, v487, m, vO1316);
          await fs.unlinkSync(v488);
        }
        break;
      case "legenda":
        {
          if (!/image/.test(mime)) {
            return reply("Enviar/responder imagem/adesivo com legenda " + (prefix + command) + " |text2");
          }
          if (!v21) {
            return reply("Enviar/responder imagem/adesivo com legenda " + (prefix + command) + " |text2");
          }
          const vO1317 = {
            text: "👋",
            key: m.key
          };
          const vO1318 = {
            react: vO1317
          };
          sock.sendMessage(from, vO1318);
          atas = v21.split("|")[0] ? v21.split("|")[0] : "-";
          bawah = v21.split("|")[1] ? v21.split("|")[1] : "-";
          let v489 = await quoted.download();
          let {
            floNime: _0x459e85
          } = require("./funções/uploader");
          let v490 = await _0x459e85(v489);
          let v491 = "https://api.memegen.link/images/custom/" + encodeURIComponent(atas) + "/" + encodeURIComponent(bawah) + ".png?background=" + v490.result.url;
          const vO1319 = {
            packname: global.packname,
            author: global.auhor
          };
          let v492 = await sock.sendImageAsSticker(from, v491, m, vO1319);
          await fs.unlinkSync(v492);
        }
        break;
      case "figfundo":
      case "figvideo":
      case "figusemfundo":
      case "sfundo":
        if (!v106) {
          return reply("Marque uma imagem");
        }
        if ((v104 && !mek.message.videoMessage || v106) && args.length == 0) {
          manu = v106 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage;
          reply(enviar.espere);
          buff = await vF16(manu, "image");
          bas64 = "data:image/jpeg;base64," + buff.toString("base64");
          anu = args.join(" ").split("|");
          satu = anu[0] !== "" ? anu[0] : "" + pushname;
          sd = "📍Criado por↓𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿";
          dua = typeof anu[1] !== "undefined" ? anu[1] : "" + sd;
          var v493 = await convertSticker(bas64, "" + dua, "" + satu);
          var v494 = new Buffer.from(v493, "base64");
          const vO1320 = {
            sticker: v494
          };
          const vO1321 = {
            quoted: mek
          };
          sock.sendMessage(from, vO1320, vO1321);
        } else {
          return reply("So imagem mn -_-");
        }
        break;
      case "sc":
      case "c":
      case "csticker":
      case "cstiker":
      case "stcirculo":
      case "circlesticker":
        if (v104 && !mek.message.videoMessage || v106) {
          post = v106 ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : mek;
          imagem = await downloadContentFromMessage(post, "image");
          base64 = Buffer.from([]);
          for await (const v495 of imagem) {
            base64 = Buffer.concat([base64, v495]);
          }
          reply(enviar.espere);
          v314 = await upload(base64);
          ranp = getRandom(".gif");
          rano = getRandom(".webp");
          ini_buffer = "https://api-exteam.herokuapp.com/api/circle?img=" + v314;
          exec("wget " + ini_buffer + " -O " + ranp + " && ffmpeg -i " + ranp + " -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 " + rano, p377 => {
            fs.unlinkSync(ranp);
            if (p377) {
              return reply("DEU ERROR 😞");
            }
            buff = fs.readFileSync(rano);
            const vO1322 = {
              sticker: buff
            };
            const vO1323 = {
              quoted: mek
            };
            sock.sendMessage(from, vO1322, vO1323);
            fs.unlinkSync(rano);
          });
        } else {
          reply("Você precisa marcar ou enviar uma imagem para isso");
        }
        break;
      case "sticker":
      case "s":
      case "stickergif":
      case "sgif":
      case "figu":
      case "st":
      case "stk":
        {
          (async function () {
            var v496 = q ? q?.split("/")[0] : "[🤖] 𝗦𝗢𝗟𝗜𝗖𝗜𝗧𝗔𝗗𝗢 𝗣𝗢𝗥:\n[🚀] 𝗕𝗢𝗧:\n[👥] 𝗗𝗢𝗡𝗢:";
            var v497 = q ? q?.split("/")[1] : q?.split("/")[0] ? "" : pushname + "\n𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿\n" + NickDono;
            if (v104 && !mek.message.videoMessage || v106) {
              var v498 = v106 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage;
              rane = getRandom("." + (await getExtension(v498.mimetype)));
              buffimg = await vF16(v498, "image");
              fs.writeFileSync(rane, buffimg);
              rano = getRandom(".webp");
              exec("ffmpeg -i " + rane + " -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 " + rano, p378 => {
                fs.unlinkSync(rane);
                const vO1324 = {
                  "sticker-pack-name": v496,
                  "sticker-pack-publisher": v497
                };
                var vVO1324 = vO1324;
                var v499 = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
                var v500 = Buffer.from(JSON.stringify(vVO1324), "utf-8");
                var v501 = Buffer.concat([v499, v500]);
                v501.writeUIntLE(v500.length, 14, 4);
                let v502 = Math.floor(Math.random() * 88889 + 11111) + ".temp.exif";
                fs.writeFileSync("./" + v502, v501);
                exec("webpmux -set exif " + v502 + " " + rano + " -o " + rano, () => {
                  const vO1325 = {
                    quoted: mek
                  };
                  sock.sendMessage(from, {
                    sticker: fs.readFileSync(rano)
                  }, vO1325);
                  fs.unlinkSync(v502);
                  fs.unlinkSync(rano);
                });
              });
            } else if (v104 && mek.message.videoMessage.seconds < 11 || v107 && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
              var v498 = v107 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage;
              rane = getRandom("." + (await getExtension(v498.mimetype)));
              buffimg = await vF16(v498, "video");
              fs.writeFileSync(rane, buffimg);
              rano = getRandom(".webp");
              await ffmpeg("./" + rane).inputFormat(rane.split(".")[1]);
              exec("ffmpeg -i " + rane + " -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 " + rano, p379 => {
                fs.unlinkSync(rane);
                const vO1326 = {
                  "sticker-pack-name": v496,
                  "sticker-pack-publisher": v497
                };
                let vVO1326 = vO1326;
                let v503 = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
                let v504 = Buffer.from(JSON.stringify(vVO1326), "utf-8");
                let v505 = Buffer.concat([v503, v504]);
                v505.writeUIntLE(v504.length, 14, 4);
                let vLSTempexif = "temp.exif";
                fs.writeFileSync("./" + vLSTempexif, v505);
                exec("webpmux -set exif " + vLSTempexif + " " + rano + " -o " + rano, () => {
                  const vO1327 = {
                    quoted: mek
                  };
                  sock.sendMessage(from, {
                    sticker: fs.readFileSync(rano)
                  }, vO1327);
                  fs.unlinkSync(vLSTempexif);
                  fs.unlinkSync(rano);
                });
              });
            } else {
              reply("Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos");
            }
          })().catch(p380 => {
            console.log(p380);
            reply("Hmm deu erro");
            try {
              if (fs.existsSync("temp.exif")) {
                fs.unlinkSync("temp.exif");
              }
              if (fs.existsSync(rano)) {
                fs.unlinkSync(rano);
              }
              if (fs.existsSync(media)) {
                fs.unlinkSync(media);
              }
            } catch {}
          });
        }
        break;
      case "f":
      case "f":
        {
          if (/image/.test(mime)) {
            media = await quoted.download();
            const vO1328 = {
              packname: global.packname,
              author: global.packname2
            };
            let v506 = await sock.sendImageAsSticker(from, media, m, vO1328);
            await fs.unlinkSync(v506);
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 40) {
              return reply("Máximo 40 segundo!");
            }
            media = await quoted.download();
            const vO1329 = {
              packname: global.packname,
              author: global.packname2
            };
            let v507 = await sock.sendVideoAsSticker(from, media, m, vO1329);
            await fs.unlinkSync(v507);
          } else {
            reply("Enviar imagem/vídeo com legenda " + (prefix + command) + "\nDuração Video 1/40 segundo");
          }
        }
        break;
      case "nomefig":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        if (!q) {
          return reply("Use assim: " + (prefix + command) + " Criada por/bla");
        }
        var v508 = JSON.parse(fs.readFileSync("./datab/usuarios/figurinhas.json"));
        v508[sender] = {
          legenda: "" + q?.split("/")[0],
          autor: "" + q?.split("/")[1]
        };
        fs.writeFileSync("./datab/usuarios/figurinhas.json", JSON.stringify(v508, null, 2));
        reply("Sucesso, agora suas figurinhas serão feitas com a sua descrição");
        break;
      case "roubarfigu":
        if (!v44 && !isPremium) {
          return reply(enviar.msg.premium);
        }
        if (!v110) {
          return reply("Marque uma figurinha...");
        }
        var v508 = JSON.parse(fs.readFileSync("./datab/usuarios/figurinhas.json"));
        if (v508[sender] && !q) {
          var {
            autor: v510,
            legenda: v509
          } = v508[sender];
        } else {
          var v509 = q ? q?.split("/")[0] : "";
          var v510 = q ? q?.split("/")[1] : "";
        }
        await sock.sendMessage(from, {
          sticker: await addExif(await vF16(mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker"), v509, v510)
        }, {
          quoted: mek
        });
        break;
      case "figurinhas22":
        try {
          if (!Number(q)) {
            return reply("Digite a quantidade de figurinhas\nExemplo: " + (prefix + command) + " 7");
          }
          if (q >= 100) {
            return reply("Coloque abaixo de 100...");
          }
          reply("AMOR TO ENVIANDO EM SEU PV");
          async function f13() {
            bala = await getBuffer("https://nezsab-apis.xyz/api/stickera?apikey=" + keyapi);
            bass64 = "data:image/jpeg;base64," + bala.toString("base64");
            v493 = await convertSticker(bass64, sender.split("@")[0], "" + NomeDoBot);
            imageBuffer = new Buffer.from(v493, "base64");
            const vO1330 = {
              sticker: imageBuffer
            };
            sock.sendMessage(sender, vO1330);
          }
          for (i = 0; i < q; i++) {
            await sleep(2000);
            f13();
          }
        } catch (e116) {
          if (String(e116).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "figs":
      case "figus":
      case "figurinha":
      case "figurinhas":
        {
          const vO1331 = {
            title: "[☔] ◈ 机⃝𐰷𑁈𝚴𝚬𝐙𝐔̴𝚱𝚯 𝚩𝚹𝚻⃝🌸 >3 [☔] ",
            rows: [{
              title: "[☔] 1 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀 [☔]",
              rowId: prefix + "figurinhas22 1"
            }, {
              title: "[☔] 2 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 2"
            }, {
              title: "[☔] 3 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 3"
            }, {
              title: "[☔] 4 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 4"
            }, {
              title: "[☔] 5 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 5"
            }, {
              title: "[☔] 6 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 6"
            }, {
              title: "[☔] 7 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 7"
            }, {
              title: "[☔] 8 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 8"
            }, {
              title: "[☔] 9 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 9"
            }, {
              title: "[☔] 1 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 10"
            }, {
              title: "[☔] 11 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 11"
            }, {
              title: "[☔] 12 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 12"
            }, {
              title: "[☔] 13 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 13"
            }, {
              title: "[☔] 14 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 14"
            }, {
              title: "[☔] 15 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 15"
            }, {
              title: "[☔] 16 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 16"
            }, {
              title: "[☔] 17 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 17"
            }, {
              title: "[☔] 18 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 18"
            }, {
              title: "[☔] 19 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 19"
            }, {
              title: "[☔] 20 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒 [☔]",
              rowId: prefix + "figurinhas22 20"
            }]
          };
          vA44 = [vO1331];
          const vO1332 = {
            text: "\n\n𝐎𝐥𝐚́  " + pushname + " \n\n𝐄𝐬𝐜𝐨𝐥𝐡𝐚 𝐀 𝐐𝐮𝐚𝐧𝐭𝐢𝐝𝐚𝐝𝐞 𝐃𝐞 𝐅𝐢𝐠𝐮𝐫𝐢𝐧𝐡𝐚𝐬 \n",
            footer: "〘 " + NomeDoBot + " 〙",
            title: "",
            buttonText: "𝐐𝐮𝐚𝐧𝐭𝐢𝐝𝐚𝐝𝐞",
            sections: vA44
          };
          const vVO1332 = vO1332;
          const vO1333 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO1332, vO1333);
        }
        break;
      case "semoji":
        if (!q) {
          return reply("Qual emoji?");
        }
        var vA44 = [{
          title: "Emojis:",
          rows: [{
            title: "Emoji \"" + q + "\" da Apple.",
            rowId: "" + (prefix + "emooji              " + q + "/apple")
          }, {
            title: "Emoji \"" + q + "\" do Google.",
            rowId: "" + (prefix + "emooji              " + q + "/google")
          }, {
            title: "Emoji \"" + q + "\" da Samsung.",
            rowId: "" + (prefix + "emooji              " + q + "/samsung")
          }, {
            title: "Emoji \"" + q + "\" da Microsoft.",
            rowId: "" + (prefix + "emooji              " + q + "/microsoft")
          }, {
            title: "Emoji \"" + q + "\" do Whatsapp.",
            rowId: "" + (prefix + "emooji              " + q + "/whatsapp")
          }, {
            title: "Emoji \"" + q + "\" do Twitter.",
            rowId: "" + (prefix + "emooji              " + q + "/twitter")
          }, {
            title: "Emoji \"" + q + "\" do Facebook.",
            rowId: "" + (prefix + "emooji              " + q + "/facebook")
          }, {
            title: "Emoji \"" + q + "\" do Joypixels.",
            rowId: "" + (prefix + "emooji              " + q + "/joypixels")
          }, {
            title: "Emoji \"" + q + "\" do Openmoji.",
            rowId: "" + (prefix + "emooji              " + q + "/openmoji")
          }, {
            title: "Emoji \"" + q + "\" do Skype(Emoji Animado).",
            rowId: "" + (prefix + "emooji              " + q + "/skype")
          }, {
            title: "Emoji \"" + q + "\" do Emojidex.",
            rowId: "" + (prefix + "emooji              " + q + "/emojidex")
          }, {
            title: "Emoji \"" + q + "\" do Emojipedia.",
            rowId: "" + (prefix + "emooji              " + q + "/Emojipedia")
          }, {
            title: "Emoji \"" + q + "\" do LG.",
            rowId: "" + (prefix + "emooji              " + q + "/lg")
          }, {
            title: "Emoji \"" + q + "\" do Noto Emoji.",
            rowId: "" + (prefix + "emooji              " + q + "/notoemoji")
          }]
        }];
        const vO1334 = {
          text: "Escolha um tema de figurinha.",
          footer: "Selecione o tema abaixo.",
          buttonText: "Escolha o tema da sua Figurinha.",
          sections: vA44
        };
        var vVO1334 = vO1334;
        const vO1335 = {
          quoted: vVO27
        };
        const v511 = await sock.sendMessage(from, vVO1334, vO1335);
        break;
      case "emooji              ":
        if (!q) {
          return reply("Exemplo: " + prefix + "emoji ☹️/whatsapp");
        }
        emot = q.split("/")[0];
        jemot = q.split("/")[1];
        if (jemot == "") {
          idemot = 0;
        } else if (jemot == "") {
          idemot = 1;
        } else if (jemot == "") {
          idemot = 2;
        } else if (jemot == "") {
          idemot = 3;
        } else if (jemot == "") {
          idemot = 4;
        } else if (jemot == "") {
          idemot = 5;
        } else if (jemot == "") {
          idemot = 6;
        } else if (jemot == "") {
          idemot = 7;
        } else if (jemot == "") {
          idemot = 8;
        } else if (jemot == "") {
          idemot = 9;
        } else if (jemot == "") {
          idemot = 10;
        } else if (jemot == "") {
          idemot = 11;
        } else if (jemot == "lg") {
          idemot = 12;
        } else {
          return reply("....");
        }
        reply("Aguarde...");
        if (idemot == undefined) {
          return;
        }
        emoji.get(emot).then(p381 => {
          console.log(p381.images[idemot]);
          vF32(from, p381.images[idemot].url, vVO27);
        });
        break;
      case "letra":
        try {
          if (!q) {
            return reply(" e o nome da música? Exemplo: " + (prefix + command) + " the perfect girl ");
          }
          p = await fetchJson("https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=brizaloka&query=" + q, {
            method: "get"
          });
          ll = "" + p.lyrics;
          reply("\n👨‍💻Nome ➪ " + q + "\n⚡Letra ☟︎︎︎☟︎︎︎☟︎︎︎\n -----------------------------\n" + ll + "\n -----------------------------");
        } catch (e117) {
          if (String(e117).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "letra2":
        try {
          reply(mess.wait);
          teks = body.slice(8);
          anu = await fetchJson("http://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=" + teks, {
            method: "get"
          });
          reply("*Nome da música: " + teks + "*\n\n" + anu.lyrics + "*");
        } catch (e118) {
          console.log(e118);
          reply("erro!!");
        }
        break;
      case "emoji":
        {
          if (!args.join(" ")) {
            return reply("Cadê o emoji?");
          }
          emoji.get(args.join(" ")).then(async p382 => {
            const vO1336 = {
              url: p382.images[4].url
            };
            const vO1337 = {
              image: vO1336,
              caption: "PRONTO!"
            };
            const vO1338 = {
              quoted: m
            };
            let v512 = await sock.sendMessage(from, vO1337, vO1338);
            const vO1339 = {
              quoted: v512
            };
            await sock.sendMessage(from, {
              text: "!s"
            }, vO1339);
          }).catch(p383 => {
            reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI AÍ...");
          });
        }
        break;
      case "emoji2":
      case "emoji-mix":
      case "emojimix":
        {
          if (!q) {
            return reply("Exemplo : " + (prefix + command) + " 😅+🤔");
          }
          reply("SER NÃO FOR TENTA COM OUTRO...?");
          let [v513, v514] = q.split`+`;
          let v515 = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_type&q=" + encodeURIComponent(v513) + "_" + encodeURIComponent(v514));
          for (let v516 of v515.results) {
            let v517 = await sock.sendImageAsSticker(from, v516.url, m, {
              packname: global.packname,
              author: global.author,
              categories: v516.tags
            });
            await fs.unlinkSync(v517);
          }
        }
        break;
      case "rename":
      case "roubar":
        if (!v110) {
          return reply("Marque uma figurinha...");
        }
        encmediats = await vF16(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
        var vV8 = q;
        var v518 = vV8.split("/")[0];
        var v519 = vV8.split("/")[1];
        if (!q) {
          return reply("*E o autor e o nome do pacote?*");
        }
        if (!v518) {
          return reply("*por favor escreve o formato certo: " + (prefix + command) + " sad/bla*");
        }
        if (!v519) {
          return reply("*por favor escreve o formato certo: " + (prefix + command) + " sad/dms*");
        }
        reply(enviar.espere);
        bas64 = "data:image/jpeg;base64," + encmediats.toString("base64");
        var v493 = await convertSticker(bas64, "" + v519, "" + v518);
        var v494 = new Buffer.from(v493, "base64");
        const vO1340 = {
          sticker: v494,
          contextInfo: {}
        };
        vO1340.contextInfo.externalAdReply = {};
        vO1340.contextInfo.externalAdReply.title = v518 + "|" + v519;
        vO1340.contextInfo.externalAdReply.body = "";
        vO1340.contextInfo.externalAdReply.previewType = "PHOTO";
        vO1340.contextInfo.externalAdReply.thumbnail = v494;
        const vO1341 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1340, vO1341).catch(p384 => {
          reply("❎ Error, tenta mais tarde");
        });
        break;
      case "rename2":
      case "roubar2":
        {
          let v520 = q.split("|")[0];
          let v521 = q.split("|")[1];
          if (!v110) {
            return reply("Responder a um adesivo com legenda ext|text\n\nExemplo: " + (prefix + command) + " Nezuko|domina");
          }
          if (!v520) {
            return reply("Exemplo! : !roubar Nezuko|domina");
          }
          if (!v521) {
            return reply("Exemplo! : !roubar Nezuko|domina");
          }
          let v522 = await vF16(mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
          console.log(v522);
          const vO1342 = {
            packname: v520,
            author: v521
          };
          let v523 = await writeExifStc(v522, vO1342);
          const vO1343 = {
            url: v523
          };
          const vO1344 = {
            sticker: vO1343
          };
          const vO1345 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, vO1344, vO1345);
          await fs.unlinkSync(v523);
        }
        break;
      case "togif":
        if (!v110) {
          return reply("*[ ❗ ] Marque a figurinha animada!*");
        }
        if ((v104 && !m.message.videoMessage || v110) && args.length == 0) {
          buff = await vF16(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
          reply("*「 ❗ 」 Aguarde, convertendo a figu em gif...*");
          a = await webp_mp4(buff);
          mp4 = await getBuffer(a);
          const vO1346 = {
            video: mp4,
            gifPlayback: true,
            filename: "stick.gif"
          };
          const vO1347 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1346, vO1347);
          fs.unlinkSync(buff);
        }
        break;
      case "toimg":
        if (!v110) {
          return reply("❌ adesivo de resposta um ❌");
        }
        reply(enviar.espere);
        buff = await vF16(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
        const vO1348 = {
          image: buff
        };
        const vO1349 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1348, vO1349).catch(p385 => {
          console.log(p385);
          reply("ERROR!!");
        });
        break;
      case "tomp3":
        if (v104 && !mek.message.imageMessage || v107) {
          post = v106 ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : mek.message.videoMessage;
          reply(enviar.espere);
          encmedia = v107 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage;
          rane = getRandom("." + (await getExtension(encmedia.mimetype)));
          buffimg = await vF16(encmedia, "video");
          fs.writeFileSync(rane, buffimg);
          media = rane;
          ran = getRandom(".mp4");
          exec("ffmpeg -i " + media + " " + ran, p386 => {
            fs.unlinkSync(media);
            if (p386) {
              return reply("❌ Falha ao converter vídeo para mp3 ❌");
            }
            buffer = fs.readFileSync(ran);
            const vO1350 = {
              audio: buffer,
              mimetype: "audio/mp4"
            };
            const vO1351 = {
              quoted: mek
            };
            sock.sendMessage(from, vO1350, vO1351);
            fs.unlinkSync(ran);
          });
        } else {
          reply("Marque o vídeo para transformar em áudio por favor..");
        }
        break;
      case "exx1":
        if (args.length < 1) {
          return reply("Use dessa forma:\nComando: " + prefix + "attp " + pushname + " gado");
        }
        reply("𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹");
        uuu = await getBuffer("https://api.brizaloka-api.tk/ttp/attp1?apikey=brizaloka&text=" + encodeURIComponent(body.slice(6)));
        const vO1352 = {
          sticker: uuu
        };
        const vO1353 = {
          quoted: mek
        };
        await sock.sendMessage(from, vO1352, vO1353);
        break;
      case "exx2":
        if (args.length < 1) {
          return reply("Use dessa forma:\nComando: " + prefix + "attp " + pushname + " gado");
        }
        reply("𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹");
        uuu = await getBuffer("https://api.brizaloka-api.tk/ttp/attp2?apikey=brizaloka&text=" + encodeURIComponent(body.slice(6)));
        const vO1354 = {
          sticker: uuu
        };
        const vO1355 = {
          quoted: mek
        };
        await sock.sendMessage(from, vO1354, vO1355);
        break;
      case "exx3":
        if (args.length < 1) {
          return reply("Use dessa forma:\nComando: " + prefix + "attp " + pushname + " gado");
        }
        reply("𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹");
        uuu = await getBuffer("https://api.brizaloka-api.tk/ttp/attp3?apikey=brizaloka&text=" + encodeURIComponent(body.slice(6)));
        const vO1356 = {
          sticker: uuu
        };
        const vO1357 = {
          quoted: mek
        };
        await sock.sendMessage(from, vO1356, vO1357);
        break;
      case "exx4":
        if (args.length < 1) {
          return reply("Use dessa forma:\nComando: " + prefix + "attp " + pushname + " gado");
        }
        reply("𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹");
        uuu = await getBuffer("https://api.brizaloka-api.tk/ttp/attp4?apikey=brizaloka&text=" + encodeURIComponent(body.slice(6)));
        const vO1358 = {
          sticker: uuu
        };
        const vO1359 = {
          quoted: mek
        };
        await sock.sendMessage(from, vO1358, vO1359);
        break;
      case "exx5":
        if (args.length < 1) {
          return reply("Use dessa forma:\nComando: " + prefix + "attp " + pushname + " gado");
        }
        reply("𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹");
        uuu = await getBuffer("https://api.brizaloka-api.tk/ttp/attp5?apikey=brizaloka&text=" + encodeURIComponent(body.slice(6)));
        const vO1360 = {
          sticker: uuu
        };
        const vO1361 = {
          quoted: mek
        };
        await sock.sendMessage(from, vO1360, vO1361);
        break;
      case "exx6":
        if (args.length < 1) {
          return reply("Use dessa forma:\nComando: " + prefix + "attp " + pushname + " gado");
        }
        reply("𝐄𝐒𝐓𝐎𝐔 𝐅𝐀𝐙𝐄𝐍𝐃𝐎 𝐒𝐄𝐔 𝐀𝐓𝐓𝐏 🌹");
        uuu = await getBuffer("https://api.brizaloka-api.tk/ttp/attp6?apikey=brizaloka&text=" + encodeURIComponent(body.slice(6)));
        const vO1362 = {
          sticker: uuu
        };
        const vO1363 = {
          quoted: mek
        };
        await sock.sendMessage(from, vO1362, vO1363);
        break;
      case "ttp":
        try {
          sendTemplateButtons(from, "Fazendo ttp...", "" + NomeDoBot, [{
            index: 5,
            quickReplyButton: {
              displayText: "[🌹] obrigado [🌹]",
              id: ""
            }
          }], mek);
          string = args.join(" ") || "Texto indefinido";
          post = "https://api.brizaloka-api.tk/ttp/ttp1?apikey=brizaloka&text=" + string;
          const vO1364 = {
            sticker: post
          };
          const vO1365 = {
            quoted: mek
          };
          vF32(from, vO1364, vO1365);
        } catch {
          reply("ERROR!!");
        }
        break;
      case "attp":
        const vO1366 = {
          title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 1 [🌹] ",
          rowId: prefix + "exx1 " + q
        };
        const vO1367 = {
          title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 2 [🌹] ",
          rowId: prefix + "exx2 " + q
        };
        const vO1368 = {
          title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 3 [🌹] ",
          rowId: prefix + "exx3 " + q
        };
        const vO1369 = {
          title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 4 [🌹] ",
          rowId: prefix + "exx4 " + q
        };
        const vO1370 = {
          title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 5 [🌹] ",
          rowId: prefix + "exx5 " + q
        };
        const vO1371 = {
          title: "[🌹] 𝙀𝙨𝙩𝙞𝙡𝙤 6 [🌹] ",
          rowId: prefix + "exx6 " + q
        };
        const vO1372 = {
          title: "🌹 " + NomeDoBot,
          rows: [vO1366, vO1367, vO1368, vO1369, vO1370, vO1371]
        };
        vA44 = [vO1372];
        const vO1373 = {
          text: "Resultados Para [  " + q + "  ]",
          footer: "",
          title: "Estilos de Attp's",
          buttonText: " 🌹 ESCOLHER 🌹 ",
          sections: vA44
        };
        vVO1334 = vO1373;
        const vO1374 = {
          quoted: mek
        };
        sock.sendMessage(from, vVO1334, vO1374);
        break;
      case "packstickers":
      case "carrinhofig":
        const vO1375 = {
          title: "🇫 🇮 🇬 🇺 🇷 🇮 🇳 🇭 🇦 🇸",
          rows: [{
            title: "[😆] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐌𝐄𝐌𝐄𝐒",
            rowId: prefix + "figmeme"
          }, {
            title: "[🎎] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐀𝐍𝐈𝐌𝐄𝐒",
            rowId: prefix + "fig-anime"
          }, {
            title: "[📺] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐃𝐄𝐒𝐄𝐍𝐇𝐎𝐒",
            rowId: prefix + "fig-desenho"
          }, {
            title: "[🇰🇷] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐀 𝐂𝐎𝐑𝐄𝐀𝐍𝐀",
            rowId: prefix + "fig-coreana"
          }, {
            title: "[🤪] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐄𝐌𝐎𝐉𝐈𝐒",
            rowId: prefix + "fig-emoji"
          }, {
            title: "[🤬] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐃𝐄 𝐑𝐀𝐈𝐕𝐀",
            rowId: prefix + "fig-raiva"
          }, {
            title: "[🤣] 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐄𝐍𝐆𝐑𝐀𝐂𝐀𝐃𝐎𝐒",
            rowId: prefix + "figuengracado"
          }]
        };
        vA44 = [vO1375];
        vF24(from, "© _Copyright by NEZUKO-MD_", "", "[🛒] 𝐂𝐀𝐑𝐑𝐈𝐍𝐇𝐎 𝐃𝐄 𝐅𝐈𝐆𝐔 [🛒]", "🔍 𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑: 🔍", vA44);
        break;
      case "fig-meme":
      case "figmeme":
      case "fig-memes":
      case "figumeme":
        const v524 = "" + Math.floor(Math.random() * 130);
        const v525 = "" + Math.floor(Math.random() * 130);
        const v526 = "" + Math.floor(Math.random() * 130);
        const v527 = "" + Math.floor(Math.random() * 130);
        popopoc = fs.readFileSync("./FIGURINHAS/Figurinha-meme/" + v524 + ".webp");
        const vO1376 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1376);
        popopoc = fs.readFileSync("./FIGURINHAS/Figurinha-meme/" + v525 + ".webp");
        const vO1377 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1377);
        popopoc = fs.readFileSync("./FIGURINHAS/Figurinha-meme/" + v526 + ".webp");
        const vO1378 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1378);
        popopoc = fs.readFileSync("./FIGURINHAS/Figurinha-meme/" + v527 + ".webp");
        const vO1379 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1379);
        setTimeout(() => {
          const vO1380 = {
            text: "Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.",
            footer: "© _Copyright by NEZUKO-MD_",
            buttons: [{
              buttonId: prefix + "fig-meme",
              buttonText: {
                displayText: "『🦄 Mais Figurinhas 💜』"
              },
              type: 1
            }]
          };
          const vO1381 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1380, vO1381);
        }, 2090);
        break;
      case "figudesenho":
      case "fig-desenho":
      case "fig-desenhos":
        const v528 = "" + Math.floor(Math.random() * 102);
        const v529 = "" + Math.floor(Math.random() * 102);
        const v530 = "" + Math.floor(Math.random() * 102);
        const v531 = "" + Math.floor(Math.random() * 102);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-desenho/" + v528 + ".webp");
        const vO1382 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1382);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-desenho/" + v529 + ".webp");
        const vO1383 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1383);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-desenho/" + v530 + ".webp");
        const vO1384 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1384);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-desenho/" + v531 + ".webp");
        const vO1385 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1385);
        setTimeout(() => {
          const vO1386 = {
            quoted: vVO27
          };
          sock.sendMessage(from, {
            text: "Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.",
            footer: "© _Copyright by NEZUKO-MD_",
            buttons: [{
              buttonId: "" + (prefix + command),
              buttonText: {
                displayText: "『🦄 Mais Figurinhas 💜』"
              },
              type: 1
            }]
          }, vO1386);
        }, 2090);
        break;
      case "fig-emoji":
        const v532 = "" + Math.floor(Math.random() * 40);
        const v533 = "" + Math.floor(Math.random() * 40);
        const v534 = "" + Math.floor(Math.random() * 40);
        const v535 = "" + Math.floor(Math.random() * 102);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-emoji/" + v532 + ".webp");
        const vO1387 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1387);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-emoji/" + v533 + ".webp");
        const vO1388 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1388);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-emoji/" + v534 + ".webp");
        const vO1389 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1389);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-emoji/" + v535 + ".webp");
        const vO1390 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1390);
        setTimeout(() => {
          const vO1391 = {
            quoted: vVO27
          };
          sock.sendMessage(from, {
            text: "Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.",
            footer: "© _Copyright by NEZUKO-MD_",
            buttons: [{
              buttonId: "" + (prefix + command),
              buttonText: {
                displayText: "『🦄 Mais Figurinhas 💜』"
              },
              type: 1
            }]
          }, vO1391);
        }, 2090);
        break;
      case "figuanime":
      case "fig-anime":
      case "fig-animes":
        const v536 = "" + Math.floor(Math.random() * 77);
        const v537 = "" + Math.floor(Math.random() * 77);
        const v538 = "" + Math.floor(Math.random() * 77);
        const v539 = "" + Math.floor(Math.random() * 77);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-anime/" + v536 + ".webp");
        const vO1392 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1392);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-anime/" + v537 + ".webp");
        const vO1393 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1393);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-anime/" + v538 + ".webp");
        const vO1394 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1394);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-anime/" + v539 + ".webp");
        const vO1395 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1395);
        setTimeout(() => {
          const vO1396 = {
            quoted: vVO27
          };
          sock.sendMessage(from, {
            text: "Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.",
            footer: "© _Copyright by NEZUKO-MD_",
            buttons: [{
              buttonId: "" + (prefix + command),
              buttonText: {
                displayText: "『🦄 Mais Figurinhas 💜』"
              },
              type: 1
            }]
          }, vO1396);
        }, 2090);
        break;
      case "figuraiva":
      case "fig-raiva":
      case "figraiva":
        const v540 = "" + Math.floor(Math.random() * 29);
        const v541 = "" + Math.floor(Math.random() * 29);
        const v542 = "" + Math.floor(Math.random() * 29);
        const v543 = "" + Math.floor(Math.random() * 29);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-raiva/" + v540 + ".webp");
        const vO1397 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1397);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-raiva/" + v541 + ".webp");
        const vO1398 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1398);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-raiva/" + v542 + ".webp");
        const vO1399 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1399);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-raiva/" + v543 + ".webp");
        const vO1400 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1400);
        setTimeout(() => {
          const vO1401 = {
            quoted: vVO27
          };
          sock.sendMessage(from, {
            text: "Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.",
            footer: "© _Copyright by NEZUKO-MD_",
            buttons: [{
              buttonId: "" + (prefix + command),
              buttonText: {
                displayText: "『🦄 Mais Figurinhas 💜』"
              },
              type: 1
            }]
          }, vO1401);
        }, 2090);
        break;
      case "figubb":
      case "fig-coreana":
        const v544 = "" + Math.floor(Math.random() * 21);
        const v545 = "" + Math.floor(Math.random() * 21);
        const v546 = "" + Math.floor(Math.random() * 21);
        const v547 = "" + Math.floor(Math.random() * 21);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-coreana/" + v544 + ".webp");
        const vO1402 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1402);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-coreana/" + v545 + ".webp");
        const vO1403 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1403);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-coreana/" + v546 + ".webp");
        const vO1404 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1404);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-coreana/" + v547 + ".webp");
        const vO1405 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1405);
        setTimeout(() => {
          const vO1406 = {
            quoted: vVO27
          };
          sock.sendMessage(from, {
            text: "Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.",
            footer: "© _Copyright by NEZUKO-MD_",
            buttons: [{
              buttonId: "" + (prefix + command),
              buttonText: {
                displayText: "『🦄 Mais Figurinhas 💜』"
              },
              type: 1
            }]
          }, vO1406);
        }, 2090);
        break;
      case "figuengracado":
      case "fig-engracada":
      case "fig-engraçada":
        const v548 = "" + Math.floor(Math.random() * 25);
        const v549 = "" + Math.floor(Math.random() * 25);
        const v550 = "" + Math.floor(Math.random() * 25);
        const v551 = "" + Math.floor(Math.random() * 25);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-engracadas/" + v548 + ".webp");
        const vO1407 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1407);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-engracadas/" + v549 + ".webp");
        const vO1408 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1408);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-engracadas/" + v550 + ".webp");
        const vO1409 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1409);
        popopoc = fs.readFileSync("./FIGURINHAS/figurinha-engracadas/" + v551 + ".webp");
        const vO1410 = {
          sticker: popopoc
        };
        sock.sendMessage(from, vO1410);
        setTimeout(() => {
          const vO1411 = {
            quoted: vVO27
          };
          sock.sendMessage(from, {
            text: "Olá, você deseja mais *figurinhas*? Clique na opção abaixo e aguarde um pouco.",
            footer: "© _Copyright by NEZUKO-MD_",
            buttons: [{
              buttonId: "" + (prefix + command),
              buttonText: {
                displayText: "『🦄 Mais Figurinhas 💜』"
              },
              type: 1
            }]
          }, vO1411);
        }, 2090);
        break;
      case "validar-key":
        if (!isPremium && mek.key.fromMe) {
          return reply(enviar.msg.donosmt);
        }
        reply("Validando suas credenciais no site, aguarde!");
        anu = await fetchJson("https://nezsab-apis.xyz/api/keyerrada?apikey=" + keyapi);
        reply("*Resposta do site:* " + anu.msg);
        break;
      case "status":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins && !isPremium && !m.key.fromMe) {
          return reply(enviar.msg.adm);
        }
        statuszada = "╭╼╼╾❲ S T A T U S ❳╼╼╾╮\n┃❖│\n┃❖│➱ Antiaudio: " + (v67 ? "✓" : "✕") + "\n┃❖│➱ Antidocumento: " + (v72 ? "✓" : "✕") + "\n┃❖│➱ Antifake: " + (v58 ? "✓" : "✕") + "\n┃❖│➱ Antiimg: " + (v69 ? "✓" : "✕") + "\n┃❖│➱ AntiContato " + (v59 ? "✓" : "✕") + "\n┃❖│➱ AntiSticker: " + (v70 ? "✓" : "✕") + "\n┃❖│➱ Antiligação: " + (v88 ? "✓" : "✕") + "\n┃❖│➱ AntiPv-Block: " + (v87 ? "✓" : "✕") + "\n┃❖│➱ AntilinkHard: " + (v62 ? "✓" : "✕") + "\n┃❖│➱ LimiteCaracteres: " + (v61 ? "✓" : "✕") + "\n┃❖│➱ AntiCatalogo: " + (v60 ? "✓" : "✕") + "\n┃❖│➱ AntiPalavrão: " + (v66 ? "✓" : "✕") + "\n┃❖│➱ Antivideo: " + (v74 ? "✓" : "✕") + "\n┃❖│➱ AntiLocalização: " + (v73 ? "✓" : "✕") + "\n┃❖│➱ Simih: " + (v40 ? "✓" : "✕") + "\n┃❖│\n╰╼╾❲ 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ❳╼╾╯";
        wew = await getBuffer("" + logo29);
        const vO1412 = {
          image: wew,
          caption: statuszada,
          thumbnail: null
        };
        sock.sendMessage(from, vO1412);
        break;
      case "leveling":
        if (!isGroup) {
          return reply("Só em Grupo");
        }
        if (!isGroupAdmins) {
          return reply("Você precisa ser adm");
        }
        if (args.length < 1) {
          return reply("Ative pressione 1, Desativar pressione 0");
        }
        if (Number(args[0]) === 1) {
          if (v50) {
            return reply("*O recurso de nível já estava ativo antes*");
          }
          leveling.push(from);
          fs.writeFileSync("./funções de cmd/usuarios/leveling.json", JSON.stringify(leveling));
          reply(enviar.levelon);
        } else if (Number(args[0]) === 0) {
          if (!v50) {
            return reply("O recurso de level já está Desativado neste grupo.");
          }
          leveling.splice(from, 1);
          fs.writeFileSync("./funções de cmd/usuarios/leveling.json", JSON.stringify(leveling));
          reply(enviar.leveloff);
        } else {
          reply("「* Adicionar parâmetro 1 ou 0 ");
        }
        break;
      case "ganharlevel":
        if (!isPremium) {
          return reply("Você não é dono para utilizar este comando...");
        }
        addLevelingLevel(sender, 5000);
        reply("Olá chefe, foi adicionado 5000 mil Level para você 🙂");
        break;
      case "ganharxp":
        if (!isPremium) {
          return reply("Você não é dono para utilizar este comando...");
        }
        addLevelingXp(sender, 5000);
        reply("Foi adicionado 5000 mil de XP para você 🙂");
        break;
      case "level":
        if (!v50) {
          return reply("*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : " + prefix + "leveling 1");
        }
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        const vGetLevelingLevel4 = getLevelingLevel(sender);
        const vGetLevelingXp = getLevelingXp(sender);
        if (vGetLevelingLevel4 === undefined && vGetLevelingXp === undefined) {
          return reply(enviar.levelnol);
        }
        sem = sender.replace("@s.whatsapp.net", "");
        resul = "     \n╭━─━───[🌹️️]────━─━╮\n              𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎\n╰━─━───[🌹️️]────━─━╯\n\n├─ [👥️] 𝐮𝐬𝐮𝐚́𝐫𝐢𝐨: " + pushname + "\n├─ [🚀] 𝐧𝐮́𝐦𝐞𝐫𝐨 : " + sender.split("@")[0] + "\n├─ [🔱] 𝐩𝐚𝐭𝐞𝐧𝐭𝐞: " + vLSBronzeI + " \n├─ [🗣️] 𝐱𝐩: " + vGetLevelingXp + "\n└─ [🏓] 𝐥𝐞𝐯𝐞𝐥: " + vGetLevelingLevel4;
        const vO1413 = {
          text: resul
        };
        const vO1414 = {
          quoted: vVO27
        };
        await sock.sendMessage(from, vO1413, vO1414).catch(async p387 => {
          console.error(p387);
          await reply("Error!\n" + p387);
        });
        break;
      case "ranklevel":
      case "rl":
      case "rank":
        _level.sort((p388, p389) => p388.xp < p389.xp ? 1 : -1);
        let vLSRankNiveis = "🏆《 Rank Niveis 》🏆\n\n";
        let vLN05 = 0;
        try {
          for (let vLN06 = 0; vLN06 < 10; vLN06++) {
            vLN05++;
            vLSRankNiveis += "\n┏ ✘🌖 " + NomeDoBot + " 🌘✘┓\n┃•────•───────•───•\n┣❲🏆❳ [" + vLN05 + "] ϟ➠ " + _level[vLN06].id.replace("@s.whatsapp.net", "") + "\n┣❲🏆❳「xp」: ϟ" + _level[vLN06].xp + "\n┣❲🏆❳「Level」 :ϟ➠ " + _level[vLN06].level + "\n┗ ──────「★」──────┚\n";
          }
          vLSRankNiveis += "×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×";
          const vO1415 = {
            text: vLSRankNiveis,
            sendEphemeral: true
          };
          const vO1416 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1415, vO1416);
        } catch (e119) {
          console.error(e119);
          await reply("Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações");
        }
        break;
      case "linkgc":
      case "linkgroup":
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        linkgc = await sock.groupInviteCode(from);
        reply("https://chat.whatsapp.com/" + linkgc);
        break;
      case "modonsfw":
      case "nsfw":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (args.length < 1) {
          return reply("Hmmmm");
        }
        if (Number(args[0]) === 1) {
          if (v43) {
            return reply("O modo nsfw já está ativo");
          }
          nsfw.push(from);
          fs.writeFileSync("./funções de cmd/grupos/nsfw.json", JSON.stringify(nsfw));
          reply("```✓Ativado com sucesso o modo nsfw +18 no grupo``` *" + v28.subject + "*");
        } else if (Number(args[0]) === 0) {
          if (!v43) {
            return reply("O modo nsfw já está Desativado");
          }
          nsfw.splice(from, 1);
          fs.writeFileSync("./funções de cmd/grupos/nsfw.json", JSON.stringify(nsfw));
          reply("```✓Modo Nsfw +18 desativado com sucesso no grupo``` *" + v28.subject + "*");
        } else {
          reply("1 para ativar, 0 para desligar");
        }
        break;
      case "game":
      case "modobrincadeira":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (!isGroup) {
          return reply(mensagem[0].grupo);
        }
        if (Number(args[0]) === 1) {
          if (v84) {
            return reply("Modo " + command + " já está habilitado!");
          }
          game.push(from);
          fs.writeFileSync("./funções de cmd/funções/game.json", JSON.stringify(game));
          reply("Modo *" + command + " habilitado* 🟢\n\nTodos os jogos foram liberados!");
        } else if (Number(args[0]) === 0) {
          if (!v84) {
            return reply(command + " já está desabilitado!");
          }
          pesquisar = from;
          processo = game.indexOf(pesquisar);
          while (processo >= 0) {
            game.splice(processo, 1);
            processo = v54.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/funções/game.json", JSON.stringify(v54));
          reply("Modo *" + command + " desabilitado!* 🔴\n\nOs jogos foram bloqueados, para jogar é preciso que o ADM libere.");
        } else {
          reply("Use " + (prefix + command) + " 1 para ligar ou " + (prefix + command) + " 0 para desligar");
        }
        break;
      case "delete":
      case "d":
        {
          if (!quoted) {
            return;
          }
          let {
            chat: _0x514c80,
            fromMe: _0x3973c9,
            id: _0x112582
          } = m.quoted;
          sock.sendMessage(from, {
            delete: {
              remoteJid: from,
              fromMe: true,
              id: m.quoted.id,
              participant: m.quoted.sender
            }
          });
        }
        reply("MSG APAGADA!!");
        break;
      case "listonline":
      case "lista-online":
        {
          if (!isGroup) {
            return reply(mess.group);
          }
          let v552 = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from;
          let vA81 = [...Object.keys(store.presences[v552]), v19];
          let vLN12 = 1;
          sock.sendText(from, "     「 lista Online 」\n\n" + vA81.map(p390 => vLN12++ + " . @" + p390.replace(/@.+/, "")).join`\n`, m, {
            mentions: vA81
          });
        }
        break;
      case "msg":
        {
          if (!isPremium) {
            return reply(mess.owner);
          }
          if (!args.join(" ")) {
            return reply("Exemplo :\n" + (prefix + command) + " 21958xxxx|olá");
          }
          const v553 = args.join(" ");
          const v554 = v553.split("|")[0];
          const v555 = v553.split("|")[1];
          lolh = "*| MSG DO MEU DONO |*\n\nMensagem do administrador de bots\nNúmero : wa.me/" + m.sender.split("@")[0] + "\nMensagem : " + v555;
          const vO1417 = {
            text: lolh,
            mentions: [sender]
          };
          const vO1418 = {
            quoted: m
          };
          sock.sendMessage(v554 + "@s.whatsapp.net", vO1417, vO1418);
        }
        await reply("Sucesso");
        break;
      case "criargp":
        if (!isPremium) {
          return reply("Este comando é somente pro meu criador");
        }
        const v556 = args.join(" ");
        if (!v556) {
          return reply("*Escreva o nome do grupo que vc quer criar....*");
        }
        await sock.groupCreate("" + v556, [sender]);
        reply("*Grupo criado com sucesso!*\n*Nome:* " + v556);
        break;
      case "tagall":
      case "marcar":
        {
          if (!isGroup) {
            return reply(mess.group);
          }
          if (!isGroupAdmins && !isPremium) {
            return reply(mess.admin);
          }
          let v557 = await sock.groupMetadata(from);
          let v558 = "\n〘 *👥 MARCANDO TODOS 👥* 〙\n\n " + (v557.participants.length ? v557.participants.length : "undefined") + " participantes do grupo\n\n ➲ *Mensagem : " + (args.join(" ") ? args.join(" ") : "kosong") + "*\n\n";
          for (let v559 of v29) {
            v558 += "┃❖│ @" + v559.id.split("@")[0] + "\n";
          }
          const vO1419 = {
            quoted: vVO27
          };
          sock.sendMessage(from, {
            text: v558,
            mentions: v29.map(p391 => p391.id)
          }, vO1419);
        }
        break;
      case "marcarwa":
        try {
          if (!isGroup) {
            return reply("Este comando só deve ser utilizado em Grupo.");
          }
          if (!isGroupAdmins && !isPremium) {
            return reply("Você precisa ser ADM pra utilizar este comando");
          }
          if (q.includes("" + prefix)) {
            return reply("Não pode utilizar comandos nesse comando");
          }
          members_id = [];
          let v560 = await sock.groupMetadata(from);
          teks = args.length > 1 ? body.slice(10).trim() : "";
          teks += "\n\n";
          for (let v561 of v37) {
            teks += "〘 *👥 MARCANDO TODOS 👥* 〙\n\n " + (v560.participants.length ? v560.participants.length : "undefined") + " participantes do grupo\n\n ╠➥ https://wa.me/" + v561.id.split("@")[0] + "\n";
            members_id.push(v561.id);
          }
          const vO1420 = {
            text: teks
          };
          const vO1421 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1420, vO1421);
        } catch {
          reply("ERROR!!");
        }
        break;
      case "cita":
      case "hidetag":
        if (!isGroup) {
          return reply("Este comando só deve ser utilizado em Grupo.");
        }
        if (!isGroupAdmins && !isPremium) {
          return reply("Você precisa ser ADM pra utilizar este comando");
        }
        membros = (p392, p393) => {
          array = [];
          for (let vLN07 = 0; vLN07 < p393.length; vLN07++) {
            array.push(p393[vLN07].id);
          }
          return array;
        };
        var vMembros = membros(from, v37);
        if ((v104 && !m.message.videoMessage || v110) && args.length == 0) {
          media = v110 ? m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : m.message.stickerMessage;
          rane = getRandom("." + (await getExtension(media.mimetype)));
          img = await vF16(media, "sticker");
          fs.writeFileSync(rane, img);
          fig = fs.readFileSync(rane);
          const vO1422 = {
            sticker: fig,
            mentions: vMembros
          };
          var vVO1422 = vO1422;
          sock.sendMessage(from, vVO1422);
        } else if ((v104 && !m.message.videoMessage || v106) && args.length == 0) {
          media = v106 ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage;
          rane = getRandom("." + (await getExtension(media.mimetype)));
          img = await vF16(media, "image");
          fs.writeFileSync(rane, img);
          buff = fs.readFileSync(rane);
          const vO1423 = {
            image: buff,
            mentions: vMembros
          };
          const vO1424 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1423, vO1424);
        } else if ((v104 && !m.message.videoMessage || v107) && args.length == 0) {
          media = v107 ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage;
          rane = getRandom("." + (await getExtension(media.mimetype)));
          vid = await vF16(media, "video");
          fs.writeFileSync(rane, vid);
          buff = fs.readFileSync(rane);
          const vO1425 = {
            video: buff,
            mimetype: "video/mp4",
            mentions: vMembros
          };
          const vO1426 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1425, vO1426);
        } else if ((v104 && !m.message.videoMessage || v109) && args.length == 0) {
          media = v109 ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage;
          rane = getRandom("." + (await getExtension(media.mimetype)));
          aud = await vF16(media, "audio");
          fs.writeFileSync(rane, aud);
          buff = fs.readFileSync(rane);
          const vO1427 = {
            audio: buff,
            mimetype: "audio/mp4",
            ptt: true,
            mentions: vMembros
          };
          const vO1428 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1427, vO1428);
        } else if ((v104 && !m.message.videoMessage || v108) && args.length == 0) {
          media = v108 ? m.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : m.message.documentMessage;
          rane = getRandom("." + (await getExtension(media.mimetype)));
          doc = await vF16(media, "document");
          fs.writeFileSync(rane, doc);
          buff = fs.readFileSync(rane);
          const vO1429 = {
            document: buff,
            mimetype: "text/plain",
            mentions: vMembros
          };
          const vO1430 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1429, vO1430);
        } else if (body) {
          if (q.length < 1) {
            return reply("Citar oq vey?");
          }
          sock.sendMessage(from, {
            text: body.slice(command.length + 2),
            mentions: vMembros
          });
        } else {
          reply("Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda " + (prefix + command));
        }
        break;
      case "aviso":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("Coloque seu aviso após o comando");
        }
        let vParticipantess = participantess(from, v37);
        tag = "📢 *AVISO DO ADMINISTRADOR* 📢\n📍 @" + sender.split("@")[0] + "\n\n" + body.slice(command.length + 2).toUpperCase() + "\n\n" + "=".repeat(20) + "\n" + "​".repeat(2000);
        for (let vLN08 = 0; vLN08 < vParticipantess.length; vLN08++) {
          tag += "❧ @" + vParticipantess[vLN08].split("@")[0] + "\n";
        }
        const vO1431 = {
          text: tag,
          mentions: vParticipantess,
          quoted: m
        };
        vVO1422 = vO1431;
        sock.sendMessage(from, vVO1422);
        break;
      case "tagdivulga":
        {
          if (!isGroup) {
            return reply("SÓ EM GRUPO");
          }
          if (!isGroupAdmins) {
            return reply("PRECISA SER ADMINISTRADOR");
          }
          if (!isBotGroupAdmins) {
            return reply("BOT PREPRECISA SER ADMINISTRADOR");
          }
          let v562 = "_⚠️atenção🛑_\n\n*Nós, administradores do grupo :\n" + groupName + "*\n\n" + (q ? q : "em branco") + "\n\n";
          for (let v563 of v29) {
            v562 += "° @" + v563.id.split("@")[0] + "\n";
          }
          sock.sendMessage(m.chat, {
            text: v562,
            mentions: v29.map(p394 => p394.id)
          }, {
            quoted: m
          });
        }
        break;
      case "promover":
      case "promote":
        if (!isGroupAdmins && !isPremium) {
          return reply("Só ADM pode utilizar este comando.");
        }
        if (!isBotGroupAdmins) {
          return reply("O Bot Precisa ser ADM pra executar essa ação.");
        }
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
          return reply("Marque ou responda a mensagem de quem você quer promover");
        }
        v567 = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] ? mek.message.extendedTextMessage.contextInfo.mentionedJid[0] : mek.message.extendedTextMessage.contextInfo.participant;
        if (v19.includes(v567)) {
          return reply("😑");
        }
        let v564 = await sock.groupParticipantsUpdate(from, [v567], "promote");
        if (v564[0].status === "200") {
          sock.sendMessage(from, {
            text: "@" + v567.split("@")[0] + " agora é um fiscal do bar.️",
            mentions: [v567, sender],
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          });
        } else if (v564[0].status === "404") {
          sock.sendMessage(from, {
            text: "@" + v567.split("@")[0] + " não está no grupo️",
            mentions: [v567, sender],
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          });
        } else {
          sock.sendMessage(from, {
            text: "Parece que deu erro️",
            mentions: [sender],
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          });
        }
        break;
      case "rebaixar":
      case "demote":
        if (!isGroupAdmins && !isPremium) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
          return reply("Marque ou responda a mensagem de quem você quer tirar de admin");
        }
        v567 = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] ? mek.message.extendedTextMessage.contextInfo.mentionedJid[0] : mek.message.extendedTextMessage.contextInfo.participant;
        if (v19.includes(v567)) {
          return reply("😑 marque outra pessoa");
        }
        if (v19.includes(v567)) {
          return reply("😑");
        }
        let v565 = await sock.groupParticipantsUpdate(from, [v567], "demote");
        if (v565[0].status === "406") {
          sock.sendMessage(from, {
            text: "@" + v567.split("@")[0] + " criou esse grupo e não pode ser removido(a) da lista de admins.️",
            mentions: [v567, sender],
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          });
        } else if (v565[0].status === "200") {
          sock.sendMessage(from, {
            text: "@" + v567.split("@")[0] + " perdeu seu cargo de fiscal do bar.️",
            mentions: [v567, sender],
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          });
        } else if (v565[0].status === "404") {
          sock.sendMessage(from, {
            text: "@" + v567.split("@")[0] + " não está no grupo️",
            mentions: [v567, sender],
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          });
        } else {
          sock.sendMessage(from, {
            text: "Parece que deu erro️",
            mentions: [sender],
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          });
        }
        break;
      case "tiktok":
        {
          if (!q) {
            return reply("Cadê o link do vídeo?");
          }
          reply(mess.wait);
          const vO1432 = {
            buttonId: prefix + "tiktok_audio " + q,
            buttonText: {
              displayText: "🎶 Baixar [ Formato: Áudio ]"
            },
            type: 1
          };
          const vO1433 = {
            buttonId: prefix + "tiktok_video " + q,
            buttonText: {
              displayText: "🎦 Baixar [ Formato: Vídeo ]"
            },
            type: 1
          };
          const vO1434 = {
            buttonId: prefix + "tiktok_doc " + q,
            buttonText: {
              displayText: "📄 Baixar [ Formato: Doc ]"
            },
            type: 1
          };
          let vA82 = [vO1432, vO1433, vO1434];
          let vLSTIKTOKEscolhaUmaDasO = "⚠︎ 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘥𝘦 𝘔𝘪́𝘥𝘪𝘢⧽ *[ TIKTOK ]*\n• Escolha uma das opções desejada:";
          blabla = await getBuffer("https://telegra.ph/file/edd91441c8182dc539df1.jpg");
          const vO1435 = {
            image: blabla,
            caption: "" + vLSTIKTOKEscolhaUmaDasO,
            footer: "By: " + NomeDoBot,
            buttons: vA82,
            headerType: 4
          };
          buttonMessage = vO1435;
          const vO1436 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage, vO1436);
        }
        break;
      case "tiktok_audio":
        const vO1437 = {
          text: "✅",
          key: mek.key
        };
        const vO1438 = {
          react: vO1437
        };
        sock.sendMessage(from, vO1438);
        anu = await fetchJson("https://ayu.p7api.xyz/api/dl/tiktok?link=" + q + "&apikey=saladakk");
        reply("*⬇️ Baixando, aguarde um instante...*");
        const vO1439 = {
          url: anu.resultado.audio
        };
        const vO1440 = {
          audio: vO1439,
          mimetype: "audio/mp4",
          fileName: anu.resultado.criador + ".mp3"
        };
        const vO1441 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1440, vO1441);
        break;
      case "tiktok_video":
        const vO1442 = {
          text: "✅",
          key: mek.key
        };
        const vO1443 = {
          react: vO1442
        };
        sock.sendMessage(from, vO1443);
        anu = await fetchJson("https://ayu.p7api.xyz/api/dl/tiktok?link=" + q + "&apikey=saladakk");
        reply("*⬇️ Baixando, aguarde um instante...*");
        const vO1444 = {
          url: anu.resultado.videoSemWt
        };
        const vO1445 = {
          video: vO1444,
          mimetype: "video/mp4",
          fileName: anu.resultado.criador + ".mp4"
        };
        const vO1446 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1445, vO1446);
        break;
      case "tiktok_doc":
        const vO1447 = {
          text: "✅",
          key: mek.key
        };
        const vO1448 = {
          react: vO1447
        };
        sock.sendMessage(from, vO1448);
        anu = await fetchJson("https://ayu.p7api.xyz/api/dl/tiktok?link=" + q + "&apikey=saladakk");
        reply("*⬇️ Baixando, aguarde um instante...*");
        const vO1449 = {
          url: anu.resultado.audio
        };
        const vO1450 = {
          document: vO1449,
          mimetype: "audio/mp3",
          fileName: anu.resultado.criador + ".mp3"
        };
        const vO1451 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1450, vO1451);
        break;
      case "facevideo":
      case "instavideo":
      case "tiktokvideo":
      case "twittervideo":
      case "youtubevideo":
        try {
          reply(mess.wait);
          const {
            savefrom: _0x3f3f3a
          } = require("./lib/savefrom.js");
          wew = await _0x3f3f3a(q);
          const vO1452 = {
            url: wew.url[0].url
          };
          jet = vO1452;
          const vO1453 = {
            video: jet,
            mimetype: "video/mp4",
            caption: "Pronto!"
          };
          const vO1454 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1453, vO1454);
        } catch {
          reply("Não foi possível baixar este vídeo 😔");
        }
        break;
      case "reviverqr":
      case "sairdoaguarde":
      case "sairaguarde":
      case "reiniciar":
        if (!isPremium) {
          return;
        }
        try {
          setTimeout(async () => {
            reply("Aguarde estou Reiniciando...");
          }, 0);
          setTimeout(async () => {
            const v566 = JSON.parse(fs.readFileSync("./qr-code.json"));
            v566.keys.preKeys = {};
            v566.keys.sessions = {};
            v566.keys.senderKeyMemory = {};
            fs.writeFileSync("./qr-code.json", JSON.stringify(v566, null, 2));
            process.exit();
          }, 1000);
        } catch {
          reply("Erro");
        }
        break;
      case "add":
      case "reviver":
        if (!isPremium) {
          return reply("Só meu Mestre");
        }
        if (!isGroup) {
          return reply("Comando apenas para grupo");
        }
        if (!isGroupAdmins) {
          return reply(mess.only.admin);
        }
        if (!isBotGroupAdmins) {
          return reply("O Bot Precisa ser ADM pra executar essa ação.");
        }
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
          return reply("informe quem devo adicionar no grupo novamente, marcado a mensagem da pessoa...");
        }
        num = "" + body.slice(9);
        if (num.length < 1) {
          var v567 = mek.message.extendedTextMessage.contextInfo.participant;
          sock.groupParticipantsUpdate(from, ["" + v567], "add");
        } else {
          _0x555ffc = [num.replace("@", "") + "@s.whatsapp.net"];
          sock.groupParticipantsUpdate(from, _0x555ffc, "add");
        }
        reply("*Adicionado Com Sucesso 👏🦆✅*");
        break;
      case "sairgp":
        if (isGroup && !isPremium && !m.key.fromMe) {
          return reply("Este comando só o bot ou o dono pode executar..");
        }
        try {
          sock.groupLeave(from);
        } catch (e120) {
          reply(String(e120));
        }
        break;
      case "membros":
        mem = "× 𝘘𝘶𝘢𝘯𝘵𝘪𝘥𝘢𝘥𝘦 𝘥𝘦 𝘈𝘥𝘮𝘪𝘯𝘴⧽ " + v38.length + "\n× 𝘘𝘶𝘢𝘯𝘵𝘪𝘥𝘢𝘥𝘦 𝘥𝘦 𝘗𝘢𝘳𝘵𝘪𝘤𝘪𝘱𝘢𝘯𝘵𝘦𝘴⧽ " + v29.length;
        const vO1455 = {
          text: mem
        };
        const vO1456 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1455, vO1456);
        break;
      case "rankativo":
      case "rankativos":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(mess.only.admin);
        }
        if (vA14.indexOf(from) < 0) {
          return reply("O bot não tem ainda dados sobre o grupo");
        }
        var v186 = vA14.indexOf(from);
        if (countMessage[v186].numbers.length < 3) {
          return reply("Necessita do registro de 3 usuarios");
        }
        countMessage[v186].numbers.sort((p395, p396) => p395.messages < p396.messages ? 1 : -1);
        mentioned_jid = [];
        boardi = "🗣 *Ranking dos membros mais ativos:*\n\n";
        try {
          for (let vLN09 = 0; vLN09 < 5; vLN09++) {
            if (vLN09 == 0) {
              boardi += "*" + (vLN09 + 1) + "º 🥇:  @" + countMessage[v186].numbers[vLN09].id.split("@")[0] + "*\n× Mensagens Enviadas⧽ " + countMessage[v186].numbers[vLN09].messages + "\n× Comandos Realizados⧽ " + countMessage[v186].numbers[vLN09].cmd_messages + "\n";
            } else if (vLN09 == 1) {
              boardi += "*" + (vLN09 + 1) + "º 🥈: @" + countMessage[v186].numbers[vLN09].id.split("@")[0] + "*\n× Mensagens Enviadas⧽ " + countMessage[v186].numbers[vLN09].messages + "\n× Comandos Realizados⧽ " + countMessage[v186].numbers[vLN09].cmd_messages + "\n";
            } else if (vLN09 == 2) {
              boardi += "*" + (vLN09 + 1) + "º 🥉: @" + countMessage[v186].numbers[vLN09].id.split("@")[0] + "*\n× Mensagens Enviadas⧽ " + countMessage[v186].numbers[vLN09].messages + "\n× Comandos Realizados⧽ " + countMessage[v186].numbers[vLN09].cmd_messages + "\n";
            } else if (vLN09 == 3) {
              boardi += "*" + (vLN09 + 1) + "º 🥉: @" + countMessage[v186].numbers[vLN09].id.split("@")[0] + "*\n× Mensagens Enviadas⧽ " + countMessage[v186].numbers[vLN09].messages + "\n× Comandos Realizados⧽ " + countMessage[v186].numbers[vLN09].cmd_messages + "\n";
            } else if (vLN09 == 4) {
              boardi += "*" + (vLN09 + 1) + "º 🥉: @" + countMessage[v186].numbers[vLN09].id.split("@")[0] + "*\n× Mensagens Enviadas⧽ " + countMessage[v186].numbers[vLN09].messages + "\n× Comandos Realizados⧽ " + countMessage[v186].numbers[vLN09].cmd_messages + "\n";
            }
            mentioned_jid.push(countMessage[v186].numbers[vLN09].id);
          }
          vF22(boardi, mentioned_jid, true);
        } catch (e121) {
          console.log(e121);
          const vO1457 = {
            quoted: mek
          };
          await sock.sendMessage(from, {
            text: "É necessário 5 jogadores para se construir um ranking"
          }, vO1457);
        }
        break;
      case "atividade":
      case "atividades":
        try {
          if (!isGroupAdmins && !issupre && !ischyt) {
            return reply(enviar.msg.adm);
          }
          if (isGroup && vA14.indexOf(from) >= 0) {
            var v186 = vA14.indexOf(from);
            teks = "🗣 *Atividade dos membros do grupo:*\n\n";
            mem = [];
            for (let v568 of v37) {
              if (vA15.indexOf(v568.id) >= 0) {
                var v188 = vA15.indexOf(v568.id);
                teks += "× Nº. do Participante⧽ @" + v568.id.split("@")[0] + "\n× Comandos realizados no grupo⧽ " + countMessage[v186].numbers[v188].cmd_messages + "\n× Mensagens enviadas no grupo⧽ " + countMessage[v186].numbers[v188].messages + "\n\n";
              } else {
                teks += "× Nº. do Participante⧽ @" + v568.id.split("@")[0] + "\n× Comandos realizados no grupo⧽ 0\n× Mensagens enviadas no grupo⧽ 0\n\n";
              }
              mem.push(v568.id);
            }
            const vO1458 = {
              mentionedJid: mem
            };
            const vO1459 = {
              text: teks,
              contextInfo: vO1458
            };
            const vO1460 = {
              quoted: mek
            };
            sock.sendMessage(from, vO1459, vO1460);
          } else {
            return reply("*Nada foi encontrado*");
          }
        } catch (e122) {
          console.log(e122);
        }
        break;
      case "checkativo":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(mess.only.admin);
        }
        if (vA14.indexOf(from) < 0) {
          return reply("O bot não tem ainda dados sobre o grupo");
        }
        var v186 = vA14.indexOf(from);
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
          return reply("Marque o número que deseja puxar a atividade!");
        }
        v567 = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (vA15.indexOf(v567[0]) >= 0) {
          var v188 = vA15.indexOf(v567[0]);
          const vO1461 = {
            displayText: "Obrigado " + NomeDoBot + "!"
          };
          const vO1462 = {
            buttonId: "tchau",
            buttonText: vO1461,
            type: 1
          };
          let vA83 = [vO1462];
          let v569 = "🏌🏻 Consulta da atividade de participante no grupo:\n\n× Nome do Grupo⧽ " + groupName + "\n× Nº. Camponês⧽ @" + v567[0].split("@")[0] + "\n× Mensagens enviadas no gp⧽ " + countMessage[v186].numbers[v188].messages + "\n× Comandos realizados no gp⧽ " + countMessage[v186].numbers[v188].cmd_messages;
          blabla = await getBuffer("" + logo);
          const vO1463 = {
            image: blabla,
            caption: "" + v569,
            footer: "Solicitado por: " + pushname,
            buttons: vA83,
            headerType: 4
          };
          buttonMessage = vO1463;
          const vO1464 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage, vO1464);
        }
        break;
      case "ban":
      case "kick":
      case "b":
        {
          if (!isGroup) {
            return reply(enviar.msg.grupo);
          }
          if (!isGroupAdmins) {
            return reply(enviar.msg.adm);
          }
          if (!isBotGroupAdmins) {
            return reply(enviar.msg.Badmin);
          }
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
            return reply("Responda a mensagem ou marque as pessoas que você quer remover do grupo");
          }
          if (mek.message.extendedTextMessage.contextInfo.participant !== null && mek.message.extendedTextMessage.contextInfo.participant != undefined && mek.message.extendedTextMessage.contextInfo.participant !== "") {
            v567 = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] ? mek.message.extendedTextMessage.contextInfo.mentionedJid[0] : mek.message.extendedTextMessage.contextInfo.participant;
            if (sender.includes(v567)) {
              return reply("😑");
            }
            if (v19.includes(v567)) {
              return reply("Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você");
            }
            if (numerodn.includes(v567)) {
              return reply("Não posso remover meu dono 😑");
            }
            let v570 = await sock.groupParticipantsUpdate(from, [v567], "remove");
            if (v570[0].status === "200") {
              sock.sendMessage(from, {
                text: "@" + v567.split("@")[0] + " foi removido do grupo com sucesso.️",
                mentions: [v567, sender],
                contextInfo: {
                  forwardingScore: 999,
                  isForwarded: true
                }
              });
            } else if (v570[0].status === "406") {
              sock.sendMessage(from, {
                text: "@" + v567.split("@")[0] + " criou esse grupo e não pode ser removido(a) do grupo️",
                mentions: [v567, sender],
                contextInfo: {
                  forwardingScore: 999,
                  isForwarded: true
                }
              });
            } else if (v570[0].status === "404") {
              sock.sendMessage(from, {
                text: "@" + v567.split("@")[0] + " já foi removido(a) ou saiu do grupo",
                mentions: [v567, sender],
                contextInfo: {
                  forwardingScore: 999,
                  isForwarded: true
                }
              });
            } else {
              sock.sendMessage(from, {
                text: "Hmm parece que deu erro️",
                mentions: [sender],
                contextInfo: {
                  forwardingScore: 999,
                  isForwarded: true
                }
              });
            }
          } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid != null && mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
            v567 = mek.message.extendedTextMessage.contextInfo.mentionedJid;
            if (v567.includes(sender)) {
              return reply("😑");
            }
            if (v567.includes(numerodonoa)) {
              return reply("Não pode remover meu dono 😠");
            }
            if (v567.includes(v19)) {
              return reply("😑");
            }
            if (v567.length > 1) {
              if (v567.length > v37.length || v567.length === v37.length || v567.length > v37.length - 3) {
                return reply("Vai banir todo mundo mesmo?");
              }
              sexocomrato = 0;
              for (let v571 of v567) {
                await sleep(100);
                let v572 = await sock.groupParticipantsUpdate(from, [v571], "remove");
                if (v572[0].status === "200") {
                  sexocomrato = sexocomrato + 1;
                }
              }
              const vO1465 = {
                text: sexocomrato + " participantes removido do grupo",
                mentions: [sender],
                contextInfo: {
                  forwardingScore: 999,
                  isForwarded: true
                }
              };
              sock.sendMessage(from, vO1465);
            } else {
              let v573 = await sock.groupParticipantsUpdate(from, [v567[0]], "remove");
              if (v573[0].status === "200") {
                sock.sendMessage(from, {
                  text: "@" + v567[0].split("@")[0] + " foi removido do grupo com sucesso.️",
                  mentions: [v567[0], sender],
                  contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true
                  }
                });
              } else if (v573[0].status === "406") {
                sock.sendMessage(from, {
                  text: "@" + v567[0].split("@")[0] + " criou esse grupo e não pode ser removido(a) do grupo️",
                  mentions: [v567[0], sender],
                  contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true
                  }
                });
              } else if (v573[0].status === "404") {
                sock.sendMessage(from, {
                  text: "@" + v567[0].split("@")[0] + " já foi removido(a) ou saiu do grupo",
                  mentions: [v567[0], sender],
                  contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true
                  }
                });
              } else {
                sock.sendMessage(from, {
                  text: "Hmm parece que deu erro️",
                  mentions: [sender],
                  contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true
                  }
                });
              }
            }
          }
        }
        break;
      case "groupname":
      case "nomegp":
        {
          if (!isGroup) {
            return reply(enviar.msg.grupo);
          }
          if (!isGroupAdmins) {
            return reply(enviar.msg.adm);
          }
          if (!isBotGroupAdmins) {
            return reply(enviar.msg.Badmin);
          }
          blat = args.join(" ");
          sock.groupUpdateSubject(from, "" + blat);
          const vO1466 = {
            quoted: mek
          };
          sock.sendMessage(from, {
            text: "Sucesso, alterou o nome do grupo"
          }, vO1466).catch(p397 => {
            reply("Ocorreu um erro");
          });
        }
        break;
      case "descgp":
      case "descriçãogp":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        blabla = args.join(" ");
        sock.groupUpdateDescription(from, "" + blabla);
        const vO1467 = {
          quoted: mek
        };
        sock.sendMessage(from, {
          text: "Sucesso, alterou a descrição do grupo"
        }, vO1467);
        break;
      case "setfotogp":
      case "fotogp":
        vF38(from);
        if (!isGroup) {
          return reply("Só pode ser utilizado em Grupo");
        }
        if (!isGroupAdmins) {
          return reply("Você precisa ser ADM");
        }
        if (!isBotGroupAdmins) {
          return reply("O bot Precisa ser ADM");
        }
        if (!v106) {
          return reply("Use: " + (prefix + command) + " <Marque uma foto>");
        }
        ftgp = v106 ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage;
        rane = getRandom("." + (await getExtension(ftgp.mimetype)));
        buffimg = await vF16(ftgp, "image");
        fs.writeFileSync(rane, buffimg);
        medipp = rane;
        const vO1468 = {
          url: medipp
        };
        await sock.updateProfilePicture(from, vO1468);
        reply("Foto do grupo alterada com sucesso");
        break;
      case "fotobot":
        if (!isPremium && !mek.key.fromMe) {
          return reply(enviar.msg.donosmt);
        }
        if (!v106) {
          return reply("Envie fotos com legendas " + prefix + "fotobot ou tags de imagem que já foram enviadas");
        }
        buff = await vF16(mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, "image");
        await sock.updateProfilePicture(v19, buff);
        reply("Obrigado pelo novo perfil amor vlw");
        break;
      case "clonar":
        if (!isPremium && !ischyt) {
          return reply("Você quem é o proprietário?");
        }
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (args.length < 1) {
          return reply("Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @");
        }
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
          return reply("Tag cvk");
        }
        v567 = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        let {
          jid: _0x2c4a17,
          id: _0x555ffc,
          notify: _0x5070ba
        } = v37.find(p398 => p398.id === v567);
        try {
          pp = await sock.profilePictureUrl(_0x555ffc);
          buffer = await getBuffer(pp);
          sock.updateProfilePicture(v19, buffer);
          vF22("Foto do perfil atualizada com sucesso, usando a foto do perfil @" + _0x555ffc.split("@")[0], [_0x555ffc], true);
        } catch (e123) {
          reply("Putz, deu erro, a pessoa deve estar sem foto 😔");
        }
        break;
      case "docfake":
        try {
          sprd = "|";
          if (!q) {
            let vA84 = [{
              buttonId: "wkwwk",
              buttonText: {
                displayText: "Ok"
              },
              type: 1
            }];
            let vO1469 = {
              document: fs.readFileSync("./funções/docf.txt"),
              mimetype: "application/vnd.android.package-archive",
              fileName: "exemplo",
              fileLength: 500000000,
              caption: prefix + command + " exemplo" + sprd + "500" + sprd + "apk\n\nOs tipos aceitos por enquanto são:\n\n> pdf\n> xml\n> zip\n> jpg\n> ppt\n> apk\n> txt\n> aac\n> pptx\n> aac\n> m4a\n> mp4\n> mp3\n> svg\n> png\n\n",
              buttons: vA84,
              headerType: 4
            };
            const vO1470 = {
              quoted: mek
            };
            return sock.sendMessage(from, vO1469, vO1470);
          }
          vV8 = args.join(" ");
          let v574 = vV8.split(sprd)[0] || "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿";
          let v575 = vV8.split(sprd)[1] * 1000000 || "1000000";
          let v576 = vV8.split(sprd)[2].replace(" ", "") || "gif";
          let v577 = vV8.split(sprd)[3] || "https://google.com/";
          if (v576.toLowerCase() == "pdf") {
            v576 = "application/pdf";
          }
          if (v576.toLowerCase() == "apk") {
            v576 = "application/vnd.android.package-archive";
          }
          if (v576.toLowerCase() == "aac") {
            v576 = "audio/aac";
          }
          if (v576.toLowerCase() == "xml") {
            v576 = "application/xml";
          }
          if (v576.toLowerCase() == "zip") {
            v576 = "application/zip";
          }
          if (v576.toLowerCase() == "jpg") {
            v576 = "image/jpeg";
          }
          if (v576.toLowerCase() == "ppt") {
            v576 = "application/vnd.ms-powerpoint";
          }
          if (v576.toLowerCase() == "pptx") {
            v576 = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
          }
          if (v576.toLowerCase() == "mp4") {
            v576 = "video/mp4";
          }
          if (v576.toLowerCase() == "m4a") {
            v576 = "audio/mp4";
          }
          if (v576.toLowerCase() == "mp3") {
            v576 = "audio/mpeg";
          }
          if (v576.toLowerCase() == "gif") {
            v576 = "image/gif";
          }
          if (v576.toLowerCase() == "png") {
            v576 = "image/png";
          }
          if (v576.toLowerCase() == "svg") {
            v576 = "image/svg+xml";
          }
          if (v576.toLowerCase() == "txt") {
            v576 = "text/plain";
          }
          let vO1471 = {
            document: fs.readFileSync("./funções/docf.txt"),
            mimetype: v576,
            jpegThumbnail: await getBuffer(v577),
            fileName: v574,
            fileLength: v575,
            headerType: 4,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          };
          const vO1472 = {
            quoted: mek
          };
          sock.sendMessage(from, vO1471, vO1472);
        } catch (e124) {
          console.log(e124);
          reply("<❗> Ops ocorreu um erro");
        }
        break;
      case "clonegp":
      case "clonargp":
      case "clonagp":
      case "cg":
        try {
          if (!isGroup) {
            return;
          }
          if (!isPremium) {
            return;
          }
          if (!isBotGroupAdmins) {
            return reply(enviar.msg.Badmin);
          }
          if (!q) {
            let v578 = await sock.groupFetchAllParticipating();
            let v579 = Object.entries(v578).slice(0).map(p399 => p399[1]);
            array_gps = [];
            array_gps2 = [];
            for (let v580 of v579) {
              try {
                if (v580.id !== from) {
                  const vO1473 = {
                    title: "‍𝗡𝗼𝗺𝗲: " + v580.subject,
                    description: "𝗜𝗱: " + v580.id + "\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: " + v580.participants.length,
                    rowId: prefix + "clonargp " + v580.id
                  };
                  array_gps.push(vO1473);
                  const vO1474 = {
                    title: "‍𝗡𝗼𝗺𝗲: " + v580.subject,
                    description: "𝗜𝗱: " + v580.id + "\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: " + v580.participants.length,
                    rowId: prefix + "clonargp " + v580.id + " -m"
                  };
                  array_gps2.push(vO1474);
                }
              } catch (e125) {}
            }
            const vO1475 = {
              title: "Clonar Grupos ",
              text: "Selecione um grupo da lista",
              buttonText: "Selecionar",
              sections: [{
                title: "𝗔𝗱𝗶𝗰𝗶𝗼𝗻𝗮 𝘀𝗼́ 𝗼𝘀 𝗺𝗲𝗺𝗯𝗿𝗼𝘀",
                rows: array_gps2
              }, {
                title: "𝗠𝘂𝗱𝗮 𝗼 𝗻𝗼𝗺𝗲 𝗲 𝗮 𝗱𝗲𝘀𝗰𝗿𝗶𝗰̧𝗮̃𝗼 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼",
                rows: array_gps
              }]
            };
            buttonmessage02 = vO1475;
            const vO1476 = {
              quoted: mek
            };
            sock.sendMessage(from, buttonmessage02, vO1476);
            return;
          }
          if (args[0] === from) {
            return reply("Oxi? Kkkk");
          }
          let v581 = isGroup ? await sock.groupMetadata("" + args[0]) : "";
          let v582 = isGroup ? v581.participants : "";
          let v583 = isGroup ? v581.subject : "";
          let v584 = isGroup ? v581.desc : "";
          if (args[1] !== "-m" && args[1] !== "--membros" && args[1] !== "-membros") {
            await sock.groupUpdateSubject(from, "" + v583);
            await sock.groupUpdateDescription(from, "" + v584);
            await sock.groupSettingUpdate(from, "locked");
          }
          members_id = [];
          members_from = [];
          for (let v585 of v37) {
            members_from.push(v585.id);
          }
          for (let v586 of v582) {
            if (v586.id !== v19 && !members_from.includes(v586.id)) {
              members_id.push(v586.id);
            }
          }
          if (members_id.length < 220) {
            if (v37.length + members_id.length >= 257) {
              a = members_id.length + v37.length - 257;
              members_id.splice(a);
            }
            console.log(members_id);
            let v587 = await sock.groupParticipantsUpdate(from, members_id, "add");
            t = 0;
            for (let v588 of v587) {
              if (v588.status === "200") {
                t = t + 1;
              }
            }
            const vO1477 = {
              text: t + " membros adicionados"
            };
            const vO1478 = {
              quoted: mek
            };
            sock.sendMessage(setting.numerodono + "@s.whatsapp.net", vO1477, vO1478);
          } else {
            t = 0;
            for (let v589 of members_id) {
              await sleep(1000);
              let v590 = await sock.groupParticipantsUpdate(from, [v589], "add");
              if (v590.status === "200") {
                t = t + 1;
              }
            }
            const vO1479 = {
              text: t + " membros adicionados"
            };
            const vO1480 = {
              quoted: mek
            };
            sock.sendMessage(setting.numerodono + "@s.whatsapp.net", vO1479, vO1480);
          }
        } catch (e126) {
          if (String(e126).includes("item-not-found")) {
            reply("Só tem como clonar grupos que o bot esteja nele");
          } else if (String(e126).includes("not-authorized")) {
            reply(enviar.msg.Badm);
          } else {
            console.log(e126);
            reply("<❗> Sucesso.");
          }
        }
        break;
      case "nuke":
      case "arquivargp":
        if (!isPremium) {
          return reply("<❗> Apenas meu Mestre.");
        }
        if (!isBotGroupAdmins) {
          return reply("Bot precisa ser ADM, para executar esta função.");
        }
        if (mek.key.fromMe) {
          return;
        }
        function f14() {
          var v591 = Math.floor(Math.random() * v37.length + 0);
          nmrbot = v19.split("@")[0];
          var v592 = "" + v37[v591].id.split("@")[0];
          if (v592 === numerodonoa || v592 === v19) {
            return;
          } else {
            sock.groupParticipantsUpdate(from, [v592 + "@s.whatsapp.net"], "remove");
          }
          if (v37.length <= 2) {
            process.exit();
          }
        }
        setInterval(f14, 1000);
        break;
      case "bangp":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium && !v42 && !issupre && !ischyt && !mek.key.fromMe) {
          return reply(enviar.msg.donosmt);
        }
        if (v68) {
          return reply("Este grupo ja está banido");
        }
        bancht.push(from);
        fs.writeFileSync("./datab/grupos/banchat.json", JSON.stringify(bancht));
        reply("Grupo banido com sucesso");
        break;
      case "unbangp":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium && !v42 && !issupre && !ischyt && !mek.key.fromMe) {
          return reply(enviar.msg.donosmt);
        }
        let v593 = bancht.indexOf(from);
        bancht.splice(v593, 1);
        fs.writeFileSync("./datab/grupos/banchat.json", JSON.stringify(bancht));
        reply("Grupo desbanido...");
        break;
      case "nuke2":
        if (!isGroup) {
          return reply("somente em grupos");
        }
        if (!isGroupAdmins) {
          return reply("membros comuns não podem usar este comando");
        }
        if (!v45) {
          return reply("meu adm primeiro");
        }
        membr = v28.participants;
        membroos = [];
        for (k of membr) {
          if (k.admin === null) {
            membroos.push(k.id);
          }
        }
        for (l of membroos) {
          sock.groupParticipantsUpdate(from, [l], "remove");
        }
        const vO1481 = {
          text: "arquivado",
          mentions: [m.sender]
        };
        const vO1482 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1481, vO1482);
        break;
      case "kickfake":
      case "banfake":
        {
          if (!isGroupAdmins && !isPremium) {
            return reply(enviar.msg.adm);
          }
          array_fake = [];
          for (let v594 of v37) {
            if (!v594.id.startsWith("55") && v594.id !== v19 && v594.admin === null) {
              array_fake.push(v594.id);
            }
          }
          if (array_fake.length === 0) {
            return reply("Nenhum número fake encontrado no grupo");
          }
          for (let v595 of array_fake) {
            await sleep(100);
            sock.groupParticipantsUpdate(from, [v595], "remove");
          }
          teks = array_fake.length + " números fake removido do grupo";
          const vO1483 = {
            text: teks,
            mentions: array_fake
          };
          sock.sendMessage(from, vO1483);
        }
        break;
      case "ddd":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        if (args.length < 1) {
          return reply("Use " + (prefix + command) + " 21");
        }
        ddd = body.slice(5);
        ddds = await axios.get("https://brasilapi.com.br/api/ddd/v1/" + ddd);
        dddlist = "Lista de Cidades de " + ddds.data.state + " com este DDD " + q + ">\n\n";
        for (let vLN010 = 0; vLN010 < ddds.data.cities.length; vLN010++) {
          dddlist += vLN010 + 1 + " ⪧ *" + ddds.data.cities[vLN010] + "*\n";
        }
        const vO1484 = {
          text: dddlist
        };
        const vO1485 = {
          quoted: mek
        };
        sock.sendMessage(from, vO1484, vO1485);
        break;
      case "listaddd":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!isGroupAdmins) {
          return reply(mess.only.admin);
        }
        if (args.length < 1) {
          return reply("*FALE O CÓDIGO DO PAÍS*");
        }
        if (isNaN(args[0])) {
          return reply("*FALE O CÓDIGO DO PAÍS*");
        }
        teks = "NÚMEROS COM CÓDIGO DE PAÍS +" + args[0] + " REGISTRADOS NO GRUPO:\n";
        men = [];
        for (let v596 of v37) {
          if (v596.id.startsWith(args[0])) {
            teks += "➤ @" + v596.id.split("@")[0] + "\n";
            men.push(v596.id);
          }
        }
        if (teks.indexOf("➤") < 0) {
          return reply("*NENHUM NÚMERO +" + args[0] + " FOI ENCONTRADO*");
        }
        const vO1486 = {
          text: teks,
          mentions: men
        };
        sock.sendMessage(from, vO1486);
        break;
      case "listafake":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!isGroupAdmins) {
          return reply(mess.only.admin);
        }
        teks = "<❗> 𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n";
        men = [];
        for (let v597 of v37) {
          if (!v597.id.startsWith(55)) {
            teks += "➤ @" + v597.id.split("@")[0] + "\n";
            men.push(v597.id);
          }
        }
        if (teks.indexOf("➤") < 0) {
          return reply("<❗> 𝗡𝗲𝗻𝗵𝘂𝗺 𝗙𝗮𝗹𝘀𝗼 𝗗𝗲𝘁𝗲𝗰𝘁𝗮𝗱𝗼");
        }
        const vO1487 = {
          text: teks,
          mentions: men
        };
        sock.sendMessage(from, vO1487);
        break;
      case "listabr":
        if (!isGroup) {
          return reply(mess.only.group);
        }
        if (!isGroupAdmins) {
          return reply(mess.only.admin);
        }
        teks = "<❗> 𝗕𝗥𝗔𝗦𝗜𝗟𝗘𝗜𝗥𝗢𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢 \n";
        men = [];
        for (let v598 of v37) {
          if (v598.id.startsWith(55)) {
            teks += "➤ @" + v598.id.split("@")[0] + "\n";
            men.push(v598.id);
          }
        }
        if (teks.indexOf("➤") < 0) {
          return reply("🇧🇷 *<❗> NENHUM NÚMERO BR FOI ENCONTRADO* 🇧🇷");
        }
        const vO1488 = {
          text: teks,
          mentions: men
        };
        sock.sendMessage(from, vO1488);
        break;
      case "encurtalink":
        if (!v44) {
          return reply(enviar.msg.premium);
        }
        if (args.length < 1) {
          return reply("Exemplo:\n" + prefix + "encurtalink [link]");
        }
        try {
          v314 = args[0];
          anu = await axios.get("https://tinyurl.com/api-create.php?url=" + v314);
          reply("" + anu.data);
        } catch (e127) {
          emror = String(e127);
          reply("" + e127);
        }
        await limitAdd(sender);
        break;
      case "celular":
        if (!q) {
          return reply("Qual celular você está procurando?");
        }
        ane = await fetchJson("http://apis.bronxyshost.com/api-bronxys/info_celular?celular=galaxy%20a9%202018&apikey=daniel_dzn");
        busca_celular = "📝 Titulo: " + ane.judul + "\n❗ Última atualização: " + ane.rilis + "\n📱 Tamanho do celular: " + ane.ukuran + "\n⚡ Tipo: " + ane.type + "\n🗃️ Armazenamento: " + ane.storage + "\n📴 Tela: " + ane.display + "\n📳 Polegada: " + ane.inchi + "\n🔰 Resolução da câmera: " + ane.pixel + "\n📲 Resolução do video: " + ane.videoPixel + "\n💭 Ram do celular: " + ane.ram + "\n👤 Hardware do celular: " + ane.chipset + "\n⚠️ Bateria: " + ane.batrai + "\n🔋 Tipo da bateria: " + ane.merek_batre;
        const vO1489 = {
          url: "" + ane.thumb
        };
        const vO1490 = {
          image: vO1489,
          caption: "" + busca_celular
        };
        const vO1491 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1490, vO1491);
        break;
      case "tinderhelp":
        const vO1492 = {
          quoted: mek
        };
        await luffy.sendMessage(from, {
          text: Tinderhelp(prefix, pushname)
        }, vO1492);
        break;
      case "cassino":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        if (!isGroup) {
          return reply("Comando apenas para grupo");
        }
        const vA85 = ["🍊 : 🍒 : 🍐", "🍒 : 🔔 : 🍊", "🍇 : 🍇 : 🍇", "🍊 : 🍋 : 🔔", "🔔 : 🍒 : 🍐", "🔔 : 🍒 : 🍊", "🍊 : 🍋 : ??", "🍐 : 🍒 : 🍋", "🍐 : 🍐 : 🍐", "🍊 : 🍒 : 🍒", "🔔 : 🔔 : 🍇", "🍌 : 🍒 : 🔔", "🍐 : 🔔 : 🔔", "🍊 : 🍋 : 🍒", "🍋 : 🍋 : 🍌", "🔔 : 🔔 : 🍇", "🔔 : 🍐 : 🍇", "🔔 : 🔔 : 🔔", "🍒 : 🍒 : 🍒", "🍌 : 🍌 : 🍌"];
        const v599 = sotoy[Math.floor(Math.random() * sotoy.length)];
        if (v599 == "🥑 : 🥑 : 🥑" || v599 == "🍉 : 🍉 : 🍉" || v599 == "🍓 : 🍓 : 🍓" || v599 == "🍎 : 🍎 : 🍎" || v599 == "🍍 : 🍍 : 🍍" || v599 == "🥝 : 🥝 : 🥝" || v599 == "🍑 : 🍑 : 🍑" || v599 == "🥥 : 🥥 : 🥥" || v599 == "🍋 : 🍋 : 🍋" || v599 == "🍐 : 🍐 : 🍐" || v599 == "🍌 : 🍌 : 🍌" || v599 == "🍒 : 🍒 : 🍒" || v599 == "🔔 : 🔔 : 🔔" || v599 == "🍊 : 🍊 : 🍊" || v599 == "🍇 : 🍇 : 🍇") {
          var vLSVocGanhou = "Você ganhou!!!";
        } else {
          var vLSVocGanhou = "Você perdeu...";
        }
        const v600 = "\n┏━━━━❪🎰❫━━━━\n┣► " + v599 + "◄┛\n┗━━━━❪💰❫━━━━\n\n*" + vLSVocGanhou + "*";
        const vO1493 = {
          buttonId: prefix + "cassino",
          buttonText: {
            displayText: "Proximo"
          },
          type: 1
        };
        sendButtons(from, "" + v600, "" + vLSVocGanhou, [vO1493], vVO27);
        break;
      case "cassino2":
      case "slot2":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        if (!isGroup) {
          return reply("Comando apenas para grupo");
        }
        var vA86 = ["🦫 : 🐿️ : 🐓", "🐿️ : 🐬 : 🦫", "🐇 : 🐇 : 🐇", "🦫 : 🦭 : 🐬", "🐬 : 🐿️ : 🐓", "🐬 : 🐿️ : 🦫", "🦫 : 🦭 : 🐬", "🐓 : 🐿️ : 🦭", "🐓 : 🐓 : 🐓", "🦫 : 🐿️ : 🐿️", "🐬 : 🐬 : 🐇", "🐒 : 🐿️ : 🐬", "🐓 : 🐬 : 🐬", "🦫 : 🦭 : 🐿️", "🦭 : 🦭 : 🐒", "🐬 : 🐬 : 🐇", "🐬 : 🐓 : 🐇", "🐬 : 🐬 : 🐬", "🐿️ : 🐿️ : 🐿️", "🐒 : 🐒 : 🐒"];
        var v601 = vA86[Math.floor(Math.random() * vA86.length)];
        var v602 = "[ CASSINO ANIMAL ]\n-----------------\n🦭 : 🐒 : 🐬\n" + v601 + "<=====\n🦭 : 🐒 : 🐬\n[  🎰 | SLOTS ]\n\nInformaçoes : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🐒 : 🐒 : 🐒<=====";
        const vO1494 = {
          quoted: mek
        };
        sock.sendMessage(from, {
          text: v602,
          footer: "Caso você queira jogar novamente, aperte o botão a baixo!.",
          buttons: [{
            buttonId: "" + (prefix + command),
            buttonText: {
              displayText: "Jogar novamente ️"
            },
            type: 1
          }]
        }, vO1494);
        break;
      case "tagme":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        vF38(from);
        if (!isGroup) {
          return reply(mess.group());
        }
        const v603 = "@" + sender.split("@")[0] + " 🧙‍♂️";
        const vO1495 = {
          text: v603,
          mentions: [sender]
        };
        const vO1496 = {
          quoted: mek
        };
        sock.sendMessage(from, vO1495, vO1496);
        break;
      case "tac":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        if (!isGroup) {
          return reply("Comando apenas para grupo");
        }
        var vA87 = ["Tac... Não disparou", "Tac... Não disparou,ainda...", "Tac💥 Disparou e você morreu", "Tac💥Disparou mas a bala pegou de raspão", "A arma falhou", "Tac... Por pouco que não dispara...", "Tac... A arma estava descarregada"];
        const v604 = vA87[Math.floor(Math.random() * vA87.length)];
        pinga = "" + v604;
        const vO1497 = {
          quoted: mek
        };
        sock.sendMessage(from, {
          text: pinga,
          footer: "Hora do ocorrido: " + v122 + ",\nDia do acontecimento: " + v122,
          buttons: [{
            buttonId: "" + (prefix + command),
            buttonText: {
              displayText: "TENTA NOVAMENTE"
            },
            type: 1
          }]
        }, vO1497);
        break;
      case "round6":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        if (!isGroup) {
          return reply("Comando apenas para grupo");
        }
        jogadorround = "" + Math.floor(Math.random() * 456);
        pinga = "Escolha qual forma você quer jogar.";
        const vO1498 = {
          buttonId: prefix + "round6_formas",
          buttonText: {
            displayText: "Guarda-chuva ☔"
          },
          type: 1
        };
        const vO1499 = {
          buttonId: prefix + "round7_formas",
          buttonText: {
            displayText: "Bola ⭕"
          },
          type: 1
        };
        const vO1500 = {
          buttonId: prefix + "round8_formas",
          buttonText: {
            displayText: "Estrela ⭐"
          },
          type: 1
        };
        const vO1501 = {
          text: pinga,
          footer: "Você e o jogador número: " + jogadorround,
          buttons: [vO1498, vO1499, vO1500]
        };
        const vO1502 = {
          quoted: mek
        };
        sock.sendMessage(from, vO1501, vO1502);
        break;
      case "round6_formas":
      case "round7_formas":
      case "round8_formas":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        if (!isGroup) {
          return reply("Comando apenas para grupo");
        }
        var vA88 = ["Você quebrou o biscoito e morreu", "Você demorou para entregar seu biscoito e morreu", "Você foi o primeiro a morrer", " Você foi o último a morrer", "Você não conseguiu entregar o biscoito a tempo, e morreu", "Você entregou o biscoito faltando 5 segundos", "Você foi o primeiro a entregar o biscoito", "Você usou o isqueiro para queimar a agulha e cortar o biscoito e passou", "Você morreu pq demorou para entregar o biscoito"];
        const v605 = vA88[Math.floor(Math.random() * vA88.length)];
        pinga = v605 + "\n";
        const vO1503 = {
          buttonId: prefix + "round6",
          buttonText: {
            displayText: "TENTA NOVAMENTE"
          },
          type: 1
        };
        const vO1504 = {
          text: pinga,
          footer: "Hora do ocorrido:" + v124 + "\nDia do acontecimento: " + v122,
          buttons: [vO1503]
        };
        const vO1505 = {
          quoted: mek
        };
        sock.sendMessage(from, vO1504, vO1505);
        break;
      case "rr":
        if (!v84) {
          return reply(mensagem[0].game);
        }
        if (!isGroup) {
          return reply("Comando apenas para grupo");
        }
        if (!isBotGroupAdmins) {
          return reply("O Bot Precisa ser ADM pra executar essa ação.");
        }
        let vO1506 = {
          key: {
            participant: "0@s.whatsapp.net",
            remoteJid: "0@g.us"
          },
          message: {
            conversation: "MORREU"
          }
        };
        words = ["A ARMA ESTAVA DESCARREGADA", "O TIRO PASSOU DE RASPÃO", "A ARMA FALHOU", "A ARMA ESTAVA DESCARREGADA", "BOOM VOCÊ MORREU💥", "O TIRO PASSOU DE RASPÃO", "A ARMA FALHOU", "BOOM VOCÊ MORREU💥", "A ARMA ESTAVA DESCARREGADA", "O TIRO PASSOU DE RASPÃO", "A ARMA FALHOU", "BOOM VOCÊ MORREU💥"];
        random = words[Math.floor(Math.random() * words.length)];
        if (random == "BOOM VOCÊ MORREU💥") {
          reply(random, "💥");
          sock.groupParticipantsUpdate(from, [sender], "remove");
          conn.sendMessage(owner[0], {
            text: "    [ *_ALERTA_* ]\n\n → esse maluko aqui levou ban no jogo \".rr\"\ncaso ele não volte esse é o numero dele: " + sender.split("@")[0]
          });
          const vO1507 = {
            quoted: vO1506
          };
          sock.sendMessage(sender, {
            text: "🔫"
          }, vO1507);
        } else {
          reply(random);
        }
        break;
      case "minerar":
        if (!isGroup) {
          return reply("Comando apenas para grupo");
        }
        let v606 = Math.floor(Math.random() * 30);
        let vA89 = ["Você minerando nas ilhas savitas encontrou " + v606 + " Coins!👷⛏️", "Você minerando no seu quintal achou " + v606 + " Coins", "Parabéns você achou " + v606 + " Coin no quintal da vizinha?;-;", "Você invadiu mina proibida, e quando tava fazendo mineração achou " + v606 + " Coins!⛏️", "Você roubou " + v606 + " Coins na mina de Minas gerais!👷⛏️💰"];
        const v607 = vA89[Math.floor(Math.random() * vA89.length)];
        const vO1508 = {
          quoted: vVO27
        };
        sock.sendMessage(from, {
          text: "" + v607,
          footer: "Deseja jogar novamente? Clica abaixo e tente novamente a sorte!",
          buttons: [{
            buttonId: prefix + command + " " + q,
            buttonText: {
              displayText: "𝐉𝐎𝐆𝐀𝐑 𝐍𝐎𝐕𝐀𝐌𝐄𝐍𝐓𝐄️"
            },
            type: 1
          }]
        }, vO1508);
        break;
      case "setnamewpp":
      case "mudarnomewpp":
        query = args.join(" ");
        if (!query) {
          return env("Exemplo:\n\n*" + prefixo + "nome...*");
        }
        if (!isPremium) {
          return reply("Somente meu dono.");
        }
        const vV9 = query;
        await sock.updateProfileName(vV9);
        reply("*Pronto! Meu Nome do whatsapp foi alterado.*");
        break;
      case "setrecado":
      case "setbio":
        if (!isPremium) {
          return reply(mess.owner);
        }
        if (!q) {
          return reply("manda exemplo *" + prefix + "setbio text*");
        }
        sock.setStatus("" + q);
        const vO1509 = {
          quoted: mek
        };
        sock.sendMessage(from, {
          text: "Sucesso, alterou o nome da bio"
        }, vO1509).catch(p400 => {
          reply("Ocorreu um erro");
        });
        break;
      case "seradm":
        {
          if (!isPremium && !m.key.fromMe) {
            return reply(mess.owner);
          }
          reply("Agora vc é adm do grupo.");
          kiceed = sender;
          sock.groupParticipantsUpdate(from, [kiceed], "promote");
        }
        break;
      case "sermembro":
        {
          if (!isPremium && !m.key.fromMe) {
            return reply(mess.owner);
          }
          reply("Agora vc não é mais adm do grupo.");
          kicee = sender;
          await sock.groupParticipantsUpdate(from, [kicee], "demote");
        }
        break;
      case "speed":
      case "ping2":
        let vSpeed = speed();
        let v608 = speed() - vSpeed;
        neww = performance.now();
        oldd = performance.now();
        reply("𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝑨𝑫𝑬: " + ("" + v608.toFixed(4)) + "𝑴𝑺");
        break;
      case "ping3":
      case "status":
        {
          let vSpeed2 = speed();
          let v609 = speed() - vSpeed2;
          neww = performance.now();
          oldd = performance.now();
          respon = ("🏓𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱𝗲 𝗱𝗲 𝗿𝗲𝘀𝗽𝗼𝘀𝘁𝗮 " + v609.toFixed(4) + "  _Segundos_\n\n\n⏰𝗧𝗲𝗺𝗽𝗼 𝗼𝗻𝗹𝗶𝗻𝗲 " + runtime(process.uptime())).trim();
          reply(respon);
        }
        break;
      case "ping":
        if (!isPremium) {
          return reply(enviar.msg.donosmt);
        }
        timestampe = speed();
        latensie = speed() - timestampe;
        uptime = process.uptime();
        hora1 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
        const vO1510 = {
          buttonId: prefix + "ping",
          buttonText: {
            displayText: "[🏓] Reiniciar [🏓]"
          },
          type: 1
        };
        const vO1511 = {
          buttonId: prefix + "criador",
          buttonText: {
            displayText: "[🔱] Dono [🔱]"
          },
          type: 1
        };
        sendButtons(from, "\n╭ ⋟ Rᴇsᴘᴏɴᴅɪ Eᴍ: 0.00" + speedB + " Sᴇɢᴜɴᴅᴏs\n│ Aᴛɪᴠɪᴅᴀᴅᴇ : " + runtime(process.uptime()) + "\n│\n└━━━─「🌹」─━━━━\n", "© Cᴏᴘʏʀɪɢʜᴛ Bʏ Nᴇᴢᴜᴋᴏ-MD ", [vO1510, vO1511]);
        break;
      case "speedtest":
        {
          reply("Testing Speed...");
          let child_process = require("child_process");
          let {
            promisify: _0x93d29d
          } = require("util");
          let v610 = _0x93d29d(child_process.exec).bind(child_process);
          let v611;
          try {
            v611 = await v610("python speed.py");
          } catch (e128) {
            v611 = e128;
          } finally {
            let {
              stdout: _0x56c712,
              stderr: _0x581d98
            } = v611;
            if (_0x56c712.trim()) {
              reply(_0x56c712);
            }
            if (_0x581d98.trim()) {
              reply(_0x581d98);
            }
          }
        }
        break;
      case "sup":
        const vO1512 = {
          buttonId: prefix + "criador",
          buttonText: {
            displayText: "☔ 𝐃𝐎𝐍𝐎 ☔"
          },
          type: 1
        };
        const vO1513 = {
          buttonId: prefix + "menu",
          buttonText: {
            displayText: "🌹 𝐌𝐄𝐍𝐔 🌹"
          },
          type: 1
        };
        sendButtons(from, "Olá " + pushname + ",\naqui está seu comando, clique no botão abaixo para falar com meu dono.\n", "月⃟亮 ☾٭ 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿", [vO1512, vO1513]);
        break;
      case "gtts":
        if (args.length < 1) {
          return reply("Cade o texto?, digite algo Exemplo:\n" + prefix + "gtts PT Oi");
        }
        const vRequire = require("./funções de cmd/funções/gtts")(args[0]);
        if (args.length < 2) {
          return reply("Falta colocar o código do idioma!");
        }
        dtt = body.slice(8);
        ranm = getRandom(".mp3");
        rano = getRandom(".ogg");
        if (dtt.length > 4000) {
          return reply("Para reduzir spam o máximo de letras permitidas são 4000!");
        }
        vRequire.save(ranm, dtt, function () {
          exec("ffmpeg -i " + ranm + " -ar 48000 -vn -c:a libopus " + rano, p401 => {
            fs.unlinkSync(ranm);
            buffer = fs.readFileSync(rano);
            const vO1514 = {
              audio: buffer,
              ptt: true
            };
            const vO1515 = {
              quoted: vVO27
            };
            sock.sendMessage(from, vO1514, vO1515);
            fs.unlinkSync(rano);
          });
        });
        break;
      case "gerarlink":
      case "imgpralink":
        try {
          if (v106) {
            reply(enviar.espere);
            boij = v106 ? JSON.parse(JSON.stringify(m).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : m;
            owgi = await vF16(boij, "image");
            res = await upload(owgi);
            reply(res);
          } else {
            reply("Mande uma imagem com a legenda " + (prefix + command));
          }
        } catch {
          reply("Ocorreu algum Error, desculpe 😔");
        }
        break;
      case "videourl":
      case "videopralink":
        try {
          if (v107 && args.length == 0) {
            reply(enviar.espere);
            boij = v107 ? JSON.parse(JSON.stringify(m).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.videoMessage : m;
            owgi = await vF16(boij, "video");
            res = await upload(owgi);
            reply(res);
          } else {
            reply("Mande vídeo com a legenda " + (prefix + command));
          }
        } catch {
          reply("Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.");
        }
        break;
      case "mediafire":
        try {
          if (!q) {
            return reply("Coloque um link");
          }
          if (!isUrl(q) || !q.includes("mediafire.com")) {
            return reply("Link inválido!");
          }
          mfdw = await mediafire("" + args[0]);
          const vO1516 = {
            displayText: "LINK DOWNLOAD",
            url: mfdw[0].link
          };
          const vO1517 = {
            urlButton: vO1516
          };
          buttons02 = [vO1517];
          if (mfdw[0].peso.split("MB")[0] >= 250) {
            buttonMessage02 = {
              document: fs.readFileSync("./funções/docf.txt"),
              mimetype: "application/pdf",
              mentions: [sender],
              fileName: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ✅",
              fileLength: 665999000000,
              caption: "*Mediafire Downloader*\n\nNome: " + mfdw[0].nome + "\nPeso: " + mfdw[0].peso + "\nTipo: " + mfdw[0].tipo,
              footer: "Arquivo muito pesado para ser enviado pelo WhatsApp.",
              templateButtons: buttons02,
              headerType: 4
            };
            sock.sendMessage(from, buttonMessage02);
          } else {
            buttonMessage02 = {
              document: fs.readFileSync("./funções/docf.txt"),
              mimetype: "application/pdf",
              mentions: [sender],
              fileName: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ✅",
              fileLength: 665999000000,
              caption: "*Mediafire Downloader*\n\nNome: " + mfdw[0].nome + "\nPeso: " + mfdw[0].peso + "\nTipo: " + mfdw[0].tipo,
              footer: "Aguarde, estou enviando...",
              templateButtons: buttons02,
              headerType: 4
            };
            sock.sendMessage(from, buttonMessage02);
            await sleep(1000);
            const vO1518 = {
              url: mfdw[0].link
            };
            const vO1519 = {
              document: vO1518,
              fileName: mfdw[0].nome,
              mimetype: mfdw[0].tipo,
              mentions: [sender]
            };
            const vO1520 = {
              quoted: mek
            };
            sock.sendMessage(from, vO1519, vO1520);
          }
        } catch (e129) {
          console.log(e129);
          reply("Ocorreu um erro.");
        }
        break;
      case "mediafire2":
        v272 = args.join(" ");
        if (!v272) {
          return reply("Cade o Link?");
        }
        v427 = await fetchJson("https://nezsab-apis.xyz/api/mediafire?url=" + v272 + "&apikey=" + keyapi);
        reply("*ꪶ͢͜🎗️𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄² 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃🎗️ꫂ*\n๖ۣ• *Arquivo:* " + v427.resultado.nama + "\n๖ۣ• *Tamanho:* " + v427.resultado.size);
        blabla = await getBuffer(v427.resultado.link);
        const vO1521 = {
          document: blabla,
          fileName: "" + v427.resultado.nama,
          mimetype: v427.resultado.mime
        };
        const vO1522 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1521, vO1522);
        break;
      case "covidst":
        teks = args.join(" ");
        if (!q) {
          return reply("Use apenas a sigla do estado e, apenas uma sigla por consulta.");
        }
        anu = await fetchJson("https://www.luc4rio-rest-api.tk/api/consultas/covid/brasil?estado=" + q);
        covid1 = "🌐 *COVID-19 NO ESTADO:* " + anu.Sigla_Do_Estado + "\n➩ Sigla do estado: " + anu.Sigla_Do_Estado + "\n➩ Estado: " + anu.Estado_Informado + "\n➩ Casos desconhecidos: " + anu.Casos_Desconhecidos + "\n➩ Casos encontrados: " + anu.Casos_Encontrados + "\n➩ Mortes encontradas: " + anu.Mortes_Encontradas + "\n➩ Previsões Econtradas: " + anu.Previsoes_Encontradas;
        const vO1523 = {
          text: covid1
        };
        const vO1524 = {
          quoted: mek
        };
        sock.sendMessage(from, vO1523, vO1524);
        break;
      case "covidbr":
        teks = args.join(" ");
        covidnb = await fetchJson("https://coronavirus-19-api.herokuapp.com/countries/brazil");
        anu = "🇧🇷 *COVID-19 NO BRASIL:*\n➩ Casos no Brasil: " + covidnb.cases + "\n➩ Casos hoje: " + covidnb.todayCases + "\n➩️ Total de Mortes: " + covidnb.deaths + "\n➩️ Mortes hoje: " + covidnb.todayDeaths + "\n➩ Recuperados: " + covidnb.recovered + "\n➩ Casos ativos: " + covidnb.active + "\n➩ Casos criticos: " + covidnb.critical + "\n➩ Testes totais: " + covidnb.totalTests;
        const vO1525 = {
          text: anu
        };
        const vO1526 = {
          quoted: mek
        };
        sock.sendMessage(from, vO1525, vO1526);
        break;
      case "tm":
      case "transmitir":
      case "bcgroup":
      case "bcgp":
        if (!isPremium && !isCmd && !v42 && !issupre && !ischyt && !mek.key.fromMe) {
          return reply(enviar.msg.donosmt);
        }
        if (!q) {
          return reply("Texto onde?\n\nExemplo : " + (prefix + command) + " Nᴇᴢᴜᴋᴏ Dᴏᴍɪɴᴀ");
        }
        let v612 = await sock.groupFetchAllParticipating();
        let v613 = Object.entries(v612).slice(0).map(p402 => p402[1]);
        let v614 = v613.map(p403 => p403.id);
        for (let v615 of v614) {
          await sleep(1500);
          let v616 = "「 Tʀᴀɴsᴍɪssᴀ̃ᴏ Dᴀ Nᴇᴢᴜᴋᴏ 」\n\n\n" + q + "\n\n\n「 Tᴍ Nᴇᴢᴜᴋᴏ 」";
          const vO1527 = {
            buttonId: prefix + "avaliar",
            buttonText: {
              displayText: "⭐ Aᴠᴀʟɪᴀʀ"
            },
            type: 1
          };
          const vO1528 = {
            buttonId: prefix + "ping2",
            buttonText: {
              displayText: "🏓 Pɪɴɢ"
            },
            type: 1
          };
          const vO1529 = {
            buttonId: prefix + "menulist",
            buttonText: {
              displayText: "📋 ᴍᴇɴᴜ Lɪsᴛᴀ"
            },
            type: 1
          };
          const vO1530 = {
            text: v616,
            footer: NomeDoBot,
            buttons: [vO1527, vO1528, vO1529]
          };
          const vO1531 = {
            quoted: vVO27
          };
          sock.sendMessage(v615, vO1530, vO1531);
        }
        reply("Transmissão enviada com sucesso para " + v614.length + " chats.", "✅");
        break;
      case "bcpv":
      case "bcgc":
      case "tmpv":
        if (!isPremium && !v42 && !issupre && !ischyt && !mek.key.fromMe) {
          return reply(enviar.msg.donosmt);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (args.length < 1) {
          return reply(".......");
        }
        fgp = await v37;
        var v457 = mek.participant;
        if (v104 && !mek.message.videoMessage || v106) {
          encmedia = await vF16(mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, "image");
          for (let v617 of fgp) {
            const vO1532 = {
              image: buff
            };
            sock.sendMessage(v617.id, vO1532, {
              caption: "*「 Tʀᴀɴsᴍɪssᴀ̃ᴏ 」*\n\nGrupo: " + groupName + "\n Número: wa.me/" + sender.split("@")[0] + "\nMensagem : " + body.slice(6)
            });
          }
          reply("");
        } else {
          for (let v618 of fgp) {
            vF19(v618.id, "*「 Tʀᴀɴsᴍɪssᴀ̃ᴏ 」*\n\nGrupo : " + groupName + "\n Número : wa.me/" + sender.split("@")[0] + "\nMensagem : " + body.slice(6));
          }
          reply("<❗> Transmissão enviada com sucesso.");
        }
        break;
      case "rgtm":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium) {
          return reply("<❗> Apenas meu mestre pode executar esse comando.");
        }
        rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"));
        if (JSON.stringify(rgp).includes(from)) {
          return reply("Este grupo ja está registrado na lista de transmissão");
        }
        rgp.push(from);
        fs.writeFileSync("./func/TMGP.json", JSON.stringify(rgp));
        reply("Grupo registrado com sucesso, quando for realizada as transmissões, esse grupo estará na lista.");
        break;
      case "tirardatm":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium) {
          return reply("<❗> Apenas meu mestre pode executar esse comando.");
        }
        rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"));
        if (!JSON.stringify(rgp).includes(from)) {
          return reply("Este grupo não está registrado para ser tirado da lista de transmissão");
        }
        var v619 = rgp.indexOf(from);
        rgp.splice(v619, 1);
        fs.writeFileSync("./func/TMGP.json", JSON.stringify(rgp));
        reply("Grupo tirado da lista de transmissão com sucesso");
        break;
      case "fazertm":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium) {
          return reply("<❗> Apenas meu mestre pode executar esse comando.");
        }
        rgp = JSON.parse(fs.readFileSync("./func/TMGP.json"));
        if (rgp.lengh == 0) {
          return reply("Não contém nenhum grupo registrado para realizar transmissão");
        }
        reply("Transmissão enviada com sucesso");
        for (i = 0; i < rgp.length; i++) {
          await sleep(1000);
          const vO1533 = {
            text: q
          };
          sock.sendMessage(rgp[i], vO1533);
        }
        break;
      case "recrutargp":
        if (!isPremium) {
          return reply(enviar.msg.donosmt);
        }
        var [v620, v621] = q.split("/");
        rcrt = v620.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
        const vO1534 = {
          url: logo
        };
        sock.sendMessage(from, {
          image: vO1534,
          mimetype: "image/jpeg",
          caption: "Clique no símbolo a cima da imagem para entrar no grupo...",
          contextInfo: {
            externalAdReply: {
              title: "- Clique aqui para participar do grupo",
              body: "",
              reviewType: "PHOTO",
              thumbnailUrl: logo,
              sourceUrl: v621,
              mediaType: 2
            },
            mentions: v37.map(p404 => p404.id)
          }
        });
        break;
      case "recrutar":
        if (!isGroupAdmins && !v44) {
          return reply("Só ADM ou premium");
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
        linkgc = await sock.groupInviteCode(from);
        const vO1535 = {
          url: logo
        };
        sock.sendMessage(rcrt, {
          image: vO1535,
          mimetype: "image/jpeg",
          caption: "Clique no símbolo a cima da imagem para entrar no grupo...",
          contextInfo: {
            externalAdReply: {
              title: "- Clique aqui para participar do grupo",
              body: "",
              reviewType: "PHOTO",
              thumbnailUrl: logo,
              sourceUrl: "https://chat.whatsapp.com/" + linkgc,
              mediaType: 2
            }
          }
        });
        reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso.");
        break;
      case "gitclone":
        reply("loading...");
        let v622 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
        if (!args[0]) {
          reply("Use " + prefix + "gitclone repo link\nExemplo: https://github.com/NuevaGeneracionALB/aleatory-md");
        }
        if (!v622.test(args[0])) {
          return reply("Aguarde");
        }
        let [, v623, v624] = args[0].match(v622) || [];
        v624 = v624.replace(/.git$/, "");
        let v625 = "https://api.github.com/repos/" + v623 + "/" + v624 + "/zipball";
        let v626 = (await fetch(v625, {
          method: "HEAD"
        })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[1];
        const vO1536 = {
          url: v625
        };
        const vO1537 = {
          quoted: selo
        };
        sock.sendMessage(from, {
          document: vO1536,
          fileName: v626 + ".zip",
          mimetype: "application/zip"
        }, vO1537).catch(p405 => reply("ERROR!!"));
        break;
      case "gitdobot2":
        wew = fs.readFileSync("./funções de cmd/mídia-ft-vd/fotos/nezuko.jpg");
        const vO1538 = {
          image: wew,
          caption: "No Momento só comprando com meu dono https://wa.me/5521964523665"
        };
        const vO1539 = {
          quoted: vVO27
        };
        sock.sendMessage(m.chat, vO1538, vO1539);
        break;
      case "abrirgp":
      case "fechargp":
        if (!isGroup) {
          return reply("Só em grupo");
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args[0] === "a") {
          reply("*GRUPO ABERTO COM SUCESSO*");
          await sock.groupSettingUpdate(from, "not_announcement");
        } else if (args[0] === "f") {
          reply("*GRUPO FECHADO COM SUCESSO*");
          await sock.groupSettingUpdate(from, "announcement");
        } else {
          buttons02 = [{
            buttonId: prefix + command + " a",
            buttonText: {
              displayText: "Abrir"
            },
            type: 1
          }, {
            buttonId: prefix + command + " f",
            buttonText: {
              displayText: "Fechar"
            },
            type: 1
          }];
          const vO1540 = {
            text: "╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⚡️❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮\n         𝐀𝐁𝐑𝐈𝐑/𝐅𝐄𝐂𝐇𝐀𝐑 𝐆𝐑𝐔𝐏𝐎\n╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⚡️❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯",
            footer: "Aperte no botão abaixo para abrir ou fechar o grupo.\n",
            buttons: buttons02,
            headerType: 4,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          };
          buttonMessage02 = vO1540;
          const vO1541 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage02, vO1541);
        }
        break;
      case "grupoinfo":
      case "infogrupo":
      case "infogp":
      case "gpinfo":
      case "regras":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        ppUrl = await sock.profilePictureUrl(from, "image");
        buffer = await getBuffer(ppUrl);
        const v627 = await sock.groupMetadata(from);
        const vO1542 = {
          image: buffer,
          caption: "*NOME* : " + groupName + "\n*MEMBROS* : " + v37.length + "\n*ADMINS* : " + v38.length + "\n*DESCRIÇÃO* : " + v627.desc,
          thumbnail: null
        };
        const vO1543 = {
          quoted: mek
        };
        sock.sendMessage(from, vO1542, vO1543);
        break;
      case "novolink":
      case "redefinir":
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        try {
          await sock.groupRevokeInvite(from);
          reply("<❗> Link do grupo redefinido com sucesso!");
        } catch (e130) {
          console.log(e130);
          enviar("ERRO");
        }
        break;
      case "linkgp":
        {
          vF38(from);
          if (!m.isGroup) {
            return reply(mess.group);
          }
          if (!v45) {
            return reply(mess.only.botadm);
          }
          try {
            pic = await sock.profilePictureUrl(m.chat, "image");
          } catch (e131) {
            pic = "https://telegra.ph/file/d61d4c82512ea3fb9588c.jpg";
          }
          ds = await getBuffer(pic);
          const vO1544 = {
            buttonId: prefix + "linkgc",
            buttonText: {
              displayText: "👥 Link do grupo"
            },
            type: 1
          };
          const vO1545 = {
            buttonId: prefix + "linkgppv",
            buttonText: {
              displayText: "⚙️ Link do grupo no pv"
            },
            type: 1
          };
          const vO1546 = {
            buttonId: prefix + "redefinir",
            buttonText: {
              displayText: "❗ Redefinir o link"
            },
            type: 1
          };
          let vA90 = [vO1544, vO1545, vO1546];
          let vLSAquiEst_EscolhaUmaDa = "aqui está!\n_Escolha uma das opções abaixo._";
          const vO1547 = {
            image: ds,
            caption: "" + vLSAquiEst_EscolhaUmaDa,
            footer: "© _Copyright by Nezuko-MD_",
            buttons: vA90,
            headerType: 4
          };
          buttonMessage = vO1547;
          const vO1548 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1548);
        }
        break;
      case "modos":
        {
          vF38(from);
          if (!m.isGroup) {
            return reply(mess.group);
          }
          if (!v45) {
            return reply(mess.only.botadm);
          }
          try {
            pic = await sock.profilePictureUrl(m.chat, "image");
          } catch (e132) {
            pic = "https://telegra.ph/file/d61d4c82512ea3fb9588c.jpg";
          }
          ds = await getBuffer(pic);
          const vO1549 = {
            buttonId: prefix + "privado",
            buttonText: {
              displayText: "🌹 Bangp"
            },
            type: 1
          };
          const vO1550 = {
            buttonId: prefix + "publico",
            buttonText: {
              displayText: "🌹 Unbangp"
            },
            type: 1
          };
          const vO1551 = {
            buttonId: prefix + "contratar",
            buttonText: {
              displayText: "🔰 Criador"
            },
            type: 1
          };
          let vA91 = [vO1549, vO1550, vO1551];
          let vLSAquiEstMestre = "Aqui está Mestre!";
          const vO1552 = {
            image: ds,
            caption: "" + vLSAquiEstMestre,
            footer: "© _Copyright by Nezuko-MD_",
            buttons: vA91,
            headerType: 4
          };
          buttonMessage = vO1552;
          const vO1553 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1553);
        }
        break;
      case "privado":
      case "muteallon":
        if (!isPremium) {
          return m.reply("<❗> Somente meu dono pode usar esse comando.");
        }
        if (banChatss) {
          return await m.reply("O modo privado já está ativo.");
        }
        banChatss = true;
        v15.banChatss = banChatss;
        fs.writeFileSync("./funções de cmd/nescessario.json", JSON.stringify(v15, null, "\t"));
        await sock.sendMessage(from, {
          text: "Mudança bem-sucedida para uso privado - apenas meu dono pode me usar."
        });
        break;
      case "publico":
      case "mutealloff":
        if (!isPremium) {
          return m.reply("<❗> Somente meu dono pode usar esse comando.");
        }
        if (!banChatss) {
          return await m.reply("Não está ativado ainda.");
        }
        banChatss = false;
        v15.banChatss = banChatss;
        fs.writeFileSync("./funções de cmd/nescessario.json", JSON.stringify(v15, null, "\t"));
        await sock.sendMessage(from, {
          text: "Mudança bem-sucedida para o uso público - todos podem usar meus comandos.*"
        });
        break;
      case "linkgppv":
      case "linkgrupopv":
        reply("<❗> Enviando link no seu pv, aguarde. ");
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        linkgc = await sock.groupInviteCode(from);
        const vO1554 = {
          quoted: vVO27
        };
        sock.sendMessage(sender, {
          text: "https://chat.whatsapp.com/" + linkgc
        }, vO1554);
        break;
      case "wallpapers4k":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpapers4k.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1555 = {
            buttonId: prefix + "wallpapers4k",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA92 = [vO1555];
          let v628 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1556 = {
            image: imagem,
            caption: "" + v628,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA92,
            headerType: 4
          };
          buttonMessage = vO1556;
          const vO1557 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1557);
        }
        break;
      case "wallpaperdark":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpaperdark.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1558 = {
            buttonId: prefix + "wallpaperdark",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA93 = [vO1558];
          let v629 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1559 = {
            image: imagem,
            caption: "" + v629,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA93,
            headerType: 4
          };
          buttonMessage = vO1559;
          const vO1560 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1560);
        }
        break;
      case "wallpaperanimes":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpaperanimes.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1561 = {
            buttonId: prefix + "wallpaperanimes",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA94 = [vO1561];
          let v630 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1562 = {
            image: imagem,
            caption: "" + v630,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA94,
            headerType: 4
          };
          buttonMessage = vO1562;
          const vO1563 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1563);
        }
        break;
      case "wallpaperbranco":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpapersbranco.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1564 = {
            buttonId: prefix + "wallpapersbranco",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA95 = [vO1564];
          let v631 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1565 = {
            image: imagem,
            caption: "" + v631,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA95,
            headerType: 4
          };
          buttonMessage = vO1565;
          const vO1566 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1566);
        }
        break;
        l;
      case "wallpapervermelho":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpapervermelho.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1567 = {
            buttonId: prefix + "wallpapervermelho",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA96 = [vO1567];
          let v632 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1568 = {
            image: imagem,
            caption: "" + v632,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA96,
            headerType: 4
          };
          buttonMessage = vO1568;
          const vO1569 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1569);
        }
        break;
      case "wallpaperverde":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpaperverde.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1570 = {
            buttonId: prefix + "wallpaperverde",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA97 = [vO1570];
          let v633 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1571 = {
            image: imagem,
            caption: "" + v633,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA97,
            headerType: 4
          };
          buttonMessage = vO1571;
          const vO1572 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1572);
        }
        break;
      case "wallpaperazul":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpaperazul.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1573 = {
            buttonId: prefix + "wallpaperazul",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA98 = [vO1573];
          let v634 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1574 = {
            image: imagem,
            caption: "" + v634,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA98,
            headerType: 4
          };
          buttonMessage = vO1574;
          const vO1575 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1575);
        }
        break;
      case "wallpaperroxo":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpaperoxo.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1576 = {
            buttonId: prefix + "wallpaperoxo",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA99 = [vO1576];
          let v635 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1577 = {
            image: imagem,
            caption: "" + v635,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA99,
            headerType: 4
          };
          buttonMessage = vO1577;
          const vO1578 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1578);
        }
        break;
      case "wallpaperamarelo":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpaperamarelo.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1579 = {
            buttonId: prefix + "wallpaperamarelo",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA100 = [vO1579];
          let v636 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1580 = {
            image: imagem,
            caption: "" + v636,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA100,
            headerType: 4
          };
          buttonMessage = vO1580;
          const vO1581 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1581);
        }
        break;
      case "wallpaperrosa":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/wallpaperosa.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1582 = {
            buttonId: prefix + "wallpaperosa",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA101 = [vO1582];
          let v637 = "" + v215;
          blabla = await getBuffer("https://telegra.ph/file/0e2989e6947b464fa66b8.jpg");
          const vO1583 = {
            image: imagem,
            caption: "" + v637,
            footer: "© _Copyright By Nezuko-MD",
            buttons: vA101,
            headerType: 4
          };
          buttonMessage = vO1583;
          const vO1584 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1584);
        }
        break;
      case "outroshitpost":
        reply("<❗> " + command + " enviado no seu pv");
        v453 = fs.readFileSync("./funções de cmd/imgs/memes/outroshitpost.js");
        jsonData = JSON.parse(v453);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];
        imagem = await getBuffer(randKey.result);
        const vO1585 = {
          image: imagem,
          caption: "aqui está o seu " + command + " " + pushname + "\n\ngostou?"
        };
        const vO1586 = {
          quoted: vVO27
        };
        sock.sendMessage(m.sender, vO1585, vO1586);
        break;
      case "memesdasam":
        reply("<❗> " + command + " enviado no seu pv");
        v453 = fs.readFileSync("./funções de cmd/imgs/memes/memesdasam.js");
        jsonData = JSON.parse(v453);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];
        imagem = await getBuffer(randKey.result);
        const vO1587 = {
          image: imagem,
          caption: "aqui está o seu " + command + " " + pushname + "\n\ngostou?"
        };
        const vO1588 = {
          quoted: vVO27
        };
        sock.sendMessage(m.sender, vO1587, vO1588);
        break;
      case "shitpost":
        reply("<❗> " + command + " enviado no seu pv");
        v453 = fs.readFileSync("./funções de cmd/imgs/memes/shitpost.js");
        jsonData = JSON.parse(v453);
        randIndex = Math.floor(Math.random() * jsonData.length);
        randKey = jsonData[randIndex];
        imagem = await getBuffer(randKey.result);
        const vO1589 = {
          image: imagem,
          caption: "aqui está o seu " + command + " " + pushname + "\n\ngostou?"
        };
        const vO1590 = {
          quoted: vVO27
        };
        sock.sendMessage(m.sender, vO1589, vO1590);
        break;
      case "wallpapershinobu":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/shinobu.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1591 = {
            buttonId: prefix + "wallpapershinobu",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA102 = [vO1591];
          let v638 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/SHINOBU/fb10ed54c286b52d7e5f22f5b465274c.jpg");
          const vO1592 = {
            image: imagem,
            caption: "" + v638,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA102,
            headerType: 4
          };
          buttonMessage = vO1592;
          const vO1593 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1593);
        }
        break;
      case "wallpaperobanai":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/obanai.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1594 = {
            buttonId: prefix + "wallpaperobanai",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA103 = [vO1594];
          let v639 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/OBANAI/f437d7615e55a1804f637f7151769ee9.jpg");
          const vO1595 = {
            image: imagem,
            caption: "" + v639,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA103,
            headerType: 4
          };
          buttonMessage = vO1595;
          const vO1596 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1596);
        }
        break;
      case "wallpapergyutaro":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/gyutaro.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1597 = {
            buttonId: prefix + "wallpapergyutaro",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA104 = [vO1597];
          let v640 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/GYUTARO/fdcde69d36595bfd6b7671adcd510761.jpg");
          const vO1598 = {
            image: imagem,
            caption: "" + v640,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA104,
            headerType: 4
          };
          buttonMessage = vO1598;
          const vO1599 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1599);
        }
        break;
      case "wallpaperaoi":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/aoi.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1600 = {
            buttonId: prefix + "wallpaperaoi",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA105 = [vO1600];
          let v641 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/AOI/ffd8282a82aece8ce698a343a0790f3d.jpg");
          const vO1601 = {
            image: imagem,
            caption: "" + v641,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA105,
            headerType: 4
          };
          buttonMessage = vO1601;
          const vO1602 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1602);
        }
        break;
      case "wallpapertomioka":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/tomioka.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1603 = {
            buttonId: prefix + "wallpapertomioka",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA106 = [vO1603];
          let v642 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/TOMIOKA/f9572e842eb8b67f089c259459394b35.jpg");
          const vO1604 = {
            image: imagem,
            caption: "" + v642,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA106,
            headerType: 4
          };
          buttonMessage = vO1604;
          const vO1605 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1605);
        }
        break;
      case "wallpaperuzui":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/uzui.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1606 = {
            buttonId: prefix + "wallpaperuzui",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA107 = [vO1606];
          let v643 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/UZUI/f67c5a0a822808ac770ad49472ccc14f.jpg");
          const vO1607 = {
            image: imagem,
            caption: "" + v643,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA107,
            headerType: 4
          };
          buttonMessage = vO1607;
          const vO1608 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1608);
        }
        break;
      case "wallpapermitsuri":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/mitsuri.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1609 = {
            buttonId: prefix + "wallpapermitsuri",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA108 = [vO1609];
          let v644 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/MITSURI/fd16399b5c80072c8deee4f87bf5993e.jpg");
          const vO1610 = {
            image: imagem,
            caption: "" + v644,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA108,
            headerType: 4
          };
          buttonMessage = vO1610;
          const vO1611 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1611);
        }
        break;
      case "wallpaperdaki":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/daki.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1612 = {
            buttonId: prefix + "wallpaperdaki",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA109 = [vO1612];
          let v645 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/DAKI/fb8d18f68edd43d1ef752337784cf98f.jpg");
          const vO1613 = {
            image: imagem,
            caption: "" + v645,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA109,
            headerType: 4
          };
          buttonMessage = vO1613;
          const vO1614 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1614);
        }
        break;
      case "wallpaperkanao":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/kanao.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1615 = {
            buttonId: prefix + "wallpaperkanao",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA110 = [vO1615];
          let v646 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/KANAO/fbe10876319abaabc0a63f53f2121904.jpg");
          const vO1616 = {
            image: imagem,
            caption: "" + v646,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA110,
            headerType: 4
          };
          buttonMessage = vO1616;
          const vO1617 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1617);
        }
        break;
      case "wallpapergyenia":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/gyenia.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1618 = {
            buttonId: prefix + "wallpapergyenia",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA111 = [vO1618];
          let v647 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/GYENIA/fe251cb53add17e1aa7509d59d8490f9.jpg");
          const vO1619 = {
            image: imagem,
            caption: "" + v647,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA111,
            headerType: 4
          };
          buttonMessage = vO1619;
          const vO1620 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1620);
        }
        break;
      case "wallpapertamayo":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/tamayo.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1621 = {
            buttonId: prefix + "wallpapertamayo",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA112 = [vO1621];
          let v648 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/TAMAYO/ffb690c3d847c4e7bd539b5bd81d2271.jpg");
          const vO1622 = {
            image: imagem,
            caption: "" + v648,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA112,
            headerType: 4
          };
          buttonMessage = vO1622;
          const vO1623 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1623);
        }
        break;
      case "wallpaperdouma":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/douma.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1624 = {
            buttonId: prefix + "wallpaperdouma",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA113 = [vO1624];
          let v649 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/DOUMA/f75946301ba1edd8934d50aa8b1ffc58.jpg");
          const vO1625 = {
            image: imagem,
            caption: "" + v649,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA113,
            headerType: 4
          };
          buttonMessage = vO1625;
          const vO1626 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1626);
        }
        break;
      case "wallpapersanemi":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/sanemi.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1627 = {
            buttonId: prefix + "wallpapersanemi",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA114 = [vO1627];
          let v650 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/SANEMI/ffcb83d47e6fcaad697077c139a37890.jpg");
          const vO1628 = {
            image: imagem,
            caption: "" + v650,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA114,
            headerType: 4
          };
          buttonMessage = vO1628;
          const vO1629 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1629);
        }
        break;
      case "wallpapertokito":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/tokito.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1630 = {
            buttonId: prefix + "wallpapertokito",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA115 = [vO1630];
          let v651 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/TOKITO/ffac2e76c9de3818aca9c4032a109084.jpg");
          const vO1631 = {
            image: imagem,
            caption: "" + v651,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA115,
            headerType: 4
          };
          buttonMessage = vO1631;
          const vO1632 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1632);
        }
        break;
      case "wallpapernezuko":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/nezuko.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1633 = {
            buttonId: prefix + "wallpapernezuko",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA116 = [vO1633];
          let v652 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/NEZUKO/e4f78ec55881a632e4e1cc3948a970c9.jpg");
          const vO1634 = {
            image: imagem,
            caption: "" + v652,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA116,
            headerType: 4
          };
          buttonMessage = vO1634;
          const vO1635 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1635);
        }
        break;
      case "wallpaperenmu":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/enmu.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1636 = {
            buttonId: prefix + "wallpaperenmu",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA117 = [vO1636];
          let v653 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/ENMU/ff9f048986711075883534c60efb3787.jpg");
          const vO1637 = {
            image: imagem,
            caption: "" + v653,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA117,
            headerType: 4
          };
          buttonMessage = vO1637;
          const vO1638 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1638);
        }
        break;
      case "wallpaperinosuke":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/inosuke.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1639 = {
            buttonId: prefix + "wallpaperinosuke",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA118 = [vO1639];
          let v654 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/INOSUKE/f8ecfcc2bb25199ad05f83586517adc1.jpg");
          const vO1640 = {
            image: imagem,
            caption: "" + v654,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA118,
            headerType: 4
          };
          buttonMessage = vO1640;
          const vO1641 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1641);
        }
        break;
      case "wallpapermuzan":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/muzan.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1642 = {
            buttonId: prefix + "wallpapermuzan",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA119 = [vO1642];
          let v655 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/MUZAN/f4c5e0ea5adc28e758506648e1f08107.jpg");
          const vO1643 = {
            image: imagem,
            caption: "" + v655,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA119,
            headerType: 4
          };
          buttonMessage = vO1643;
          const vO1644 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1644);
        }
        break;
      case "wallpaperkokushibou":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/kokushibou.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1645 = {
            buttonId: prefix + "wallpaperkokushibou",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA120 = [vO1645];
          let v656 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/KOKUSHIBOU/fdebc314e66ab36f00eb5f8705f21d2b.jpg");
          const vO1646 = {
            image: imagem,
            caption: "" + v656,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA120,
            headerType: 4
          };
          buttonMessage = vO1646;
          const vO1647 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1647);
        }
        break;
      case "wallpaperzenitsu":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/zenitsu.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1648 = {
            buttonId: prefix + "wallpaperzenitsu",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA121 = [vO1648];
          let v657 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/ZENITSU/fda6066353d57465fac5b029a6afa082.jpg");
          const vO1649 = {
            image: imagem,
            caption: "" + v657,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA121,
            headerType: 4
          };
          buttonMessage = vO1649;
          const vO1650 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1650);
        }
        break;
      case "wallpapertanjiro":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/tanjiro.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1651 = {
            buttonId: prefix + "wallpapertanjiro",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA122 = [vO1651];
          let v658 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/TANJIRO/0ee8d9c8ab5e795f4cc6d96dd5c65e8f.jpg");
          const vO1652 = {
            image: imagem,
            caption: "" + v658,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA122,
            headerType: 4
          };
          buttonMessage = vO1652;
          const vO1653 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1653);
        }
        break;
      case "wallpaperakaza":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/akaza.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1654 = {
            buttonId: prefix + "wallpaperakaza",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA123 = [vO1654];
          let v659 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/AKAZA/f637dd31731a8117a33ec5da8e335352.jpg");
          const vO1655 = {
            image: imagem,
            caption: "" + v659,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA123,
            headerType: 4
          };
          buttonMessage = vO1655;
          const vO1656 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1656);
        }
        break;
      case "wallpapergyomei":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/gyomei.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1657 = {
            buttonId: prefix + "wallpapergyomei",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA124 = [vO1657];
          let v660 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/GYOMEI/f4369b05134a1b3c2da0b548b876c112.jpg");
          const vO1658 = {
            image: imagem,
            caption: "" + v660,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA124,
            headerType: 4
          };
          buttonMessage = vO1658;
          const vO1659 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1659);
        }
        break;
      case "wallpaperkyonjuro":
        {
          v453 = fs.readFileSync("./funções de cmd/imgs/wallpapers/kyonjuro.js");
          jsonData = JSON.parse(v453);
          randIndex = Math.floor(Math.random() * jsonData.length);
          var vA35 = ["aqui está o seu " + command + " " + pushname];
          var v215 = vA35[Math.floor(Math.random() * vA35.length)];
          randKey = jsonData[randIndex];
          imagem = await getBuffer(randKey.result);
          const vO1660 = {
            buttonId: prefix + "wallpaperkyonjuro",
            buttonText: {
              displayText: "☔ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐎 ☔"
            },
            type: 1
          };
          let vA125 = [vO1660];
          let v661 = "" + v215;
          blabla = await getBuffer("https://github.com/TomiokaNet/WALLPAPER/raw/main/KYONJURO/f8d355a9b7b68cebe6f3212c604617d3.jpg");
          const vO1661 = {
            image: imagem,
            caption: "" + v661,
            footer: "© Copyright By Nezuko-MD",
            buttons: vA125,
            headerType: 4
          };
          buttonMessage = vO1661;
          const vO1662 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, buttonMessage, vO1662);
        }
        break;
      case "menuwall":
      case "menuwallpaper":
        {
          timestampe = speed();
          latensie = speed() - timestampe;
          uptime = process.uptime();
          const vO1663 = {
            title: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
            rows: [{
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐒𝐇𝐈𝐍𝐎𝐁𝐔",
              rowId: prefix + "wallpapershinobu",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐎𝐁𝐀𝐍𝐀𝐈",
              rowId: prefix + "wallpaperobanai",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐆𝐘𝐔𝐓𝐀𝐑𝐎",
              rowId: prefix + "wallpapergyutaro",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐎𝐈",
              rowId: prefix + "wallpaperaoi",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐓𝐎𝐌𝐈𝐎𝐊𝐀",
              rowId: prefix + "wallpapertomioka",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐌𝐈𝐓𝐒𝐔𝐑𝐈",
              rowId: prefix + "wallpapermitsuri",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐃𝐀𝐊𝐈",
              rowId: prefix + "wallpaperdaki",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐊𝐀𝐍𝐀𝐎",
              rowId: prefix + "wallpaperkanao",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐆𝐘𝐄𝐍𝐈𝐀",
              rowId: prefix + "wallpapergyenia",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐓𝐀𝐌𝐀𝐘𝐎",
              rowId: prefix + "wallpapertamayo",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐃𝐎𝐔𝐌𝐀",
              rowId: prefix + "wallpaperdouma",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐒𝐀𝐍𝐄𝐌𝐈",
              rowId: prefix + "wallpapersanemi",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐓𝐎𝐊𝐈𝐓𝐎",
              rowId: prefix + "wallpapertokito",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐍𝐄𝐙𝐔𝐊𝐎",
              rowId: prefix + "wallpapernezuko",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐄𝐍𝐌𝐔",
              rowId: prefix + "wallpaperenmu",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐈𝐍𝐎𝐒𝐔𝐊𝐄",
              rowId: prefix + "wallpaperinosuke",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐌𝐔𝐙𝐀𝐍",
              rowId: prefix + "wallpaparmuzan",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐊𝐎𝐊𝐔𝐒𝐇𝐈𝐁𝐎𝐔",
              rowId: prefix + "wallpaperkokushibou",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐙𝐄𝐍𝐈𝐓𝐒𝐔",
              rowId: prefix + "wallpaperzenitsu",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐓𝐀𝐍𝐉𝐈𝐑𝐎",
              rowId: prefix + "wallpapertanjiro",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐊𝐀𝐙𝐀",
              rowId: prefix + "wallpaperakaza",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐆𝐘𝐎𝐌𝐄𝐈",
              rowId: prefix + "wallpapergyomei",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐊𝐘𝐎𝐍𝐉𝐔𝐑𝐎",
              rowId: prefix + "wallpaperkyonjuro",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐌𝐀𝐑𝐄𝐋𝐎",
              rowId: prefix + "wallpaperamarelo",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐍𝐈𝐌𝐄𝐒",
              rowId: prefix + "wallpaperanimes",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐙𝐔𝐋",
              rowId: prefix + "wallpaperazul",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐃𝐀𝐑𝐊",
              rowId: prefix + "wallpaperdark",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐑𝐎𝐒𝐀",
              rowId: prefix + "wallpaperrosa",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐑𝐎𝐗𝐎",
              rowId: prefix + "wallpaperroxo",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 4𝐊",
              rowId: prefix + "wallpapers4k",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐁𝐑𝐀𝐍𝐂𝐎",
              rowId: prefix + "wallpaperbranco",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐕𝐄𝐑𝐃𝐄",
              rowId: prefix + "wallpaperverde",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐕𝐄𝐑𝐌𝐄𝐋𝐇𝐎",
              rowId: prefix + "wallpapervermelho",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }]
          };
          vA44 = [vO1663];
          const vO1664 = {
            text: "\n𝐌𝐞𝐧𝐮 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫",
            footer: "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨-𝐌𝐃",
            title: "",
            buttonText: "[☔] 𝐂𝐥𝐢𝐪𝐮𝐞 𝐀𝐪𝐮𝐢 [☔]",
            sections: vA44
          };
          const vVO1664 = vO1664;
          const vO1665 = {
            quoted: mek
          };
          sock.sendMessage(from, vVO1664, vO1665);
        }
        break;
      case "recadoprowhatsapp":
        rate = body.slice(6);
        var vA35 = ["Felicidade é só questão de ser.", "Acredite: sempre tem algo bom guardado para você", "Concentre-se no que está buscando, não no que está deixando para trás.", "A vida é muito curta pra não viver sorrindo por aí!", "Onde há vontade, há chance de dar certo!", "Dance no seu ritmo! 💃", "Só você sabe o que te deixará feliz.", "Não se estresse com o que está fora do seu controle.", "Aprenda a apreciar as voltas que o mundo dá.", "Comece a se amar. O resto virá depois.", "Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!", "Reciprocidade, para as coisa boas. Imunidade, para as coisas ruins.", "Coragem, a vida gosta de pessoas destemidas.", "Compartilhe seus sentimentos. Nem todas as pessoas sabem adivinhar", "Continue caminhando, não tem problema se for devagar.", "Melhor amar do que ser amargo!", "Não corrigir nossas falhas é o mesmo que cometer novos erros", "Quando o caminho se torna duro, só os duros continuam caminhando", "Florescer exige passar por todas as estações!", "Quando as coisas simples parecem especiais, você percebe como a vida pode ser boa.", "Os aprendizados deixam a vida especial.", "Feliz daquele que encontra o verdadeiro amor sem as cicatrizes da decepção"];
        var v215 = vA35[Math.floor(Math.random() * vA35.length)];
        reply(" " + v215 + " ");
        break;
      case "frasecriativas":
        rate = body.slice(6);
        var vA35 = ["Não conte os dias, viva-os! ☀️😎", "Tudo que vem, vem com algum propósito. Assim como tudo que vai, vai por uma razão. 🌸🌀", "Eu não gosto de cobrar atitude de ninguém porque eu tenho de sobra. 😉", "Gostar, eu gosto de muita gente, mas a minha prioridade sempre será eu mesma. ✨", "As pessoas que criticam, são as mesmas que copiam. 👀", "Aprendi que meu único limite é a minha mente. 🌎", "Fazendo dos meus sonhos, um objetivo. 💭"];
        var v215 = vA35[Math.floor(Math.random() * vA35.length)];
        reply(" " + v215 + " ");
        break;
      case "frasebonita":
        rate = body.slice(6);
        var vA35 = ["Viver em paz é um luxo. É saber que, apesar dos pesares, ficar bem é prioridade. ✨", "Somos ferramentas para a vida seguir em frente. 🌎", "Ao invés de pensar nas marcas que a vida deixa em você, reflita: Quais as marcas você está deixando na vida? 💭", "Segue seu coração, tudo vai dar certo. ♥️", "Permita-se sentir tudo que está dentro de você! ✨", "Cada etapa da vida, lhe demandará uma versão mais forte de você. 🍃", "A vida é como uma rosa, cada pétala um sonho, cada espinho uma realidade🌷🙉", "A arma dos fracos é criticar os fortes. A arma dos fortes é ignorar os fracos!👌", "Pare de olhar para trás. Você já sabe onde esteve, agora precisa saber pra onde vai🌙🍃", "Só faz sentido o que te faz sentir."];
        var v215 = vA35[Math.floor(Math.random() * vA35.length)];
        reply(" " + v215 + " ");
        break;
      case "stickeralet":
        {
          if (mek.key.fromMe) {
            return;
          }
          var vA126 = ["aguarde", "logo logo enviarei", "calma ai", "enquanto isso vai um café?☕️", "aguarde um pouco"];
          var v662 = vA126[Math.floor(Math.random() * vA126.length)];
          var vA127 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55"];
          var v663 = vA127[Math.floor(Math.random() * vA127.length)];
          reply("" + v662);
          const vO1666 = {
            quoted: vVO27
          };
          sock.sendMessage(m.chat, {
            sticker: fs.readFileSync("./funções de cmd/imgs/pack/" + v663 + ".webp")
          }, vO1666);
        }
        break;
      case "configp":
      case "configuração":
      case "ajuda":
      case "grupo":
        {
          if (!isGroup) {
            return reply(mess.group);
          }
          if (!v45) {
            return reply(mess.botAdmin);
          }
          if (!isGroupAdmins && !isPremium) {
            return reply(mess.admin);
          }
          timestampe = speed();
          latensie = speed() - timestampe;
          uptime = process.uptime();
          const vO1667 = {
            title: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
            rows: [{
              title: "𝐀𝐁𝐑𝐈𝐑 𝐎 𝐆𝐑𝐔𝐏𝐎 ",
              rowId: prefix + "abrirgp a",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐅𝐄𝐂𝐇𝐀𝐑 𝐎 𝐆𝐑𝐔𝐏𝐎",
              rowId: prefix + "abrirgp f",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐀𝐓𝐈𝐕𝐀𝐑 𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 ",
              rowId: prefix + "autofig-gp 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐑 𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑",
              rowId: prefix + "autofig-gp 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐈𝐍𝐅𝐎 𝐃𝐎𝐍𝐎",
              rowId: prefix + "infodono",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐑𝐄𝐒𝐄𝐓𝐀𝐑 𝐋𝐈𝐍𝐊 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎",
              rowId: prefix + "novolink",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐂𝐑𝐈𝐀𝐃𝐎𝐑",
              rowId: prefix + "dono",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎",
              rowId: prefix + "infogp",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }]
          };
          vA44 = [vO1667];
          const vO1668 = {
            text: "\nCᴏɴғɪɢᴜʀᴀᴄ̧ᴏ̃ᴇs Dᴏ Gʀᴜᴘᴏ ",
            footer: "Cᴏᴘʏʀɪɢʜᴛ Bʏ Nᴇᴢᴜᴋᴏ Bᴏᴛ >3 ",
            title: "Cᴏɴᴛʀᴏʟᴇ Sᴇᴜ Gʀᴜᴘᴏ Aϙᴜɪ.",
            buttonText: "[⚜️] Cʟɪϙᴜᴇ Aϙᴜɪ [⚜️]",
            sections: vA44
          };
          const vVO1668 = vO1668;
          const vO1669 = {
            quoted: mek
          };
          sock.sendMessage(from, vVO1668, vO1669);
        }
        break;
      case "ativações":
      case "ativacoes":
        {
          if (!isGroup) {
            return reply(mess.group);
          }
          if (!v45) {
            return reply(mess.botAdmin);
          }
          if (!isGroupAdmins && !isPremium) {
            return reply(mess.admin);
          }
          timestampe = speed();
          latensie = speed() - timestampe;
          uptime = process.uptime();
          const vO1670 = {
            title: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
            rows: [{
              title: "Ativar autofigu",
              rowId: prefix + "autofig-gp 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "desativar autofigu",
              rowId: prefix + "autofig-gp 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar antidocumento",
              rowId: prefix + "antidocumento 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar antidocumento",
              rowId: prefix + "antidocumento 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar antilink",
              rowId: prefix + "antilink 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar antilink",
              rowId: prefix + "antilink 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar antilinkhard",
              rowId: prefix + "antilinkhard 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar antilinkhard",
              rowId: prefix + "antilinkhard 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar antiloc",
              rowId: prefix + "antiloc 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar antiloc",
              rowId: prefix + "antiloc 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar anticontato",
              rowId: prefix + "ct1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar anticontato",
              rowId: prefix + "ct0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar antiaudio",
              rowId: prefix + "antiaudio 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar antiaudio",
              rowId: prefix + "antiaudio 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar antivideo",
              rowId: prefix + "antivideo 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar antivideo",
              rowId: prefix + "antivideo 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar antifake",
              rowId: prefix + "varfake 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar antifake",
              rowId: prefix + "varfake 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar antiimg",
              rowId: prefix + "antiimg 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar antiimg",
              rowId: prefix + "antiimg 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar anticatalogo",
              rowId: prefix + "anticatalogo 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar anticatalogo",
              rowId: prefix + "anticatalogo 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar antisticker",
              rowId: prefix + "antisticker 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar antisticker",
              rowId: prefix + "antisticker 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar nsfw",
              rowId: prefix + "nsfw 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar nsfw",
              rowId: prefix + "nsfw 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar leveling",
              rowId: prefix + "leveling 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar leveling",
              rowId: prefix + "leveling 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar anagrama",
              rowId: prefix + "anagrama 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar anagrama",
              rowId: prefix + "anagrama 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Ativar bemvindo",
              rowId: prefix + "varbemvindo 1",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "Desativar bemvindo",
              rowId: prefix + "varbemvindo 0",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }]
          };
          vA44 = [vO1670];
          const vO1671 = {
            text: "\nConfigurações do grupo",
            footer: "Copyright By Nezuko-MD ",
            title: "Ativações do grupo aqui.",
            buttonText: "[🌺] Clique aqui [🌺]",
            sections: vA44
          };
          const vVO1671 = vO1671;
          const vO1672 = {
            quoted: mek
          };
          sock.sendMessage(from, vVO1671, vO1672);
        }
        break;
      case "edits":
        {
          timestampe = speed();
          latensie = speed() - timestampe;
          uptime = process.uptime();
          const vO1673 = {
            title: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
            rows: [{
              title: "☔ 𝐄𝐃𝐈𝐓 𝐍𝐀𝐑𝐔𝐓𝐎 ☔",
              rowId: prefix + "narutoedits",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "☔ 𝐄𝐃𝐈𝐓 𝐉𝐔𝐉𝐔𝐓𝐒𝐔 ☔",
              rowId: prefix + "jujutsuedits",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "☔ 𝐄𝐃𝐈𝐓 𝐈𝐓𝐀𝐂𝐇𝐈 ☔",
              rowId: prefix + "itachiedits",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }]
          };
          vA44 = [vO1673];
          const vO1674 = {
            text: "      ☔ 𝐌𝐞𝐧𝐮 𝐞𝐝𝐢𝐭𝐬 ☔",
            footer: "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 𝐁𝐲 𝐍𝐞𝐳𝐮𝐤𝐨-𝐌𝐃",
            title: "𝐂𝐨𝐧𝐭𝐫𝐨𝐥𝐞 𝐒𝐮𝐚𝐬 𝐄𝐝𝐢𝐭𝐬 𝐀𝐪𝐮𝐢",
            buttonText: "[☔] 𝐂𝐥𝐢𝐪𝐮𝐞 𝐀𝐪𝐮𝐢 [☔]",
            sections: vA44
          };
          const vVO1674 = vO1674;
          const vO1675 = {
            quoted: mek
          };
          sock.sendMessage(from, vVO1674, vO1675);
        }
        break;
      case "ytaudio2":
        reply(enviar.espere);
        let {
          yta: _0x5b3d0d
        } = require("./funções de cmd/funções/y2.js");
        teks = args[0];
        if (!teks) {
          return reply("Cadê o link mzr?");
        }
        yts(teks).then(async p406 => {
          const v664 = p406.all.find(p407 => p407.type === "video");
          _0x5b3d0d(v664.url).then(async p408 => {
            const vO1676 = {
              url: p408.dl_link
            };
            const vO1677 = {
              quoted: vVO27
            };
            sock.sendMessage(from, {
              audio: vO1676,
              contextInfo: {
                externalAdReply: {
                  title: "Música: " + p408.title + "\n",
                  body: "Duração: " + v664.duration.timestamp,
                  mediaType: 2,
                  showAdAttribution: true,
                  thumbnail: await getBuffer(v664.image),
                  mediaUrl: v664.url
                }
              },
              mimetype: "audio/mp4"
            }, vO1677);
          }, p409 => {
            reply("Deu erro aq em");
          });
        }, p410 => {
          reply("Deu erro aq em");
        });
        break;
      case "autofig-gp":
      case "autofig":
        if (!isGroup) {
          return reply(mess.group);
        }
        if (!v45) {
          return reply(mess.botAdmin);
        }
        if (!isGroupAdmins && !isPremium) {
          return reply(mess.admin);
        }
        if (args.length < 1) {
          return reply("tipo autofig-gp 1 para ativar \ntipo autofig-gp 1 para desativar");
        }
        if (args[0] === "1") {
          if (v52) {
            return reply("Já ativo");
          }
          autosticker.push(from);
          fs.writeFileSync("./funções de cmd/funções/autosticker.json", JSON.stringify(autosticker));
          reply("autofig-gp ativo");
        } else if (args[0] === "0") {
          let v665 = autosticker.indexOf(from);
          autosticker.splice(v665, 1);
          fs.writeFileSync("./funções de cmd/funções/autosticker.json", JSON.stringify(autosticker));
          reply("autofig-gp Desligado");
        }
        break;
      case "autofig-pv":
      case "autofig-geral":
        if (args.length < 1) {
          return reply("autofig-pv 1 para ativar \n autofig-pv 0 para desativar");
        }
        if (args[0] === "1") {
          if (v51) {
            return reply("Já ativo");
          }
          autostick.push(from);
          fs.writeFileSync("./funções de cmd/funções/autostickpc.json", JSON.stringify(autosticker));
          reply("autofig-pv ativo");
        } else if (args[0] === "0") {
          let v666 = autosticker.indexOf(from);
          autostick.splice(v666, 1);
          fs.writeFileSync("./funções de cmd/funções/autostickpc.json", JSON.stringify(autosticker));
          reply("autofig-pv Desligado");
        }
        break;
      case "antiligar":
      case "antiligacao":
      case "antiligação":
        try {
          if (!isPremium && !m.key.fromMe) {
            return reply(mess.owner);
          }
          if (args.length < 1) {
            return reply("Hmmmm");
          }
          if (Number(args[0]) === 1) {
            if (v88) {
              return reply("Ja esta ativo");
            }
            anticall.push("Ativado");
            fs.writeFileSync("./funções de cmd/usuarios/anticall.json", JSON.stringify(anticall));
            reply("Ativou com sucesso o recurso de antiligação no bot✔️");
          } else if (Number(args[0]) === 0) {
            if (!v88) {
              return reply("Ja esta Desativado");
            }
            fs.writeFileSync("./funções de cmd/usuarios/anticall.json", JSON.stringify([]));
            reply("Desativou com sucesso o recurso de antiligação no bot✔️");
          } else {
            reply("1 para ativar, 0 para desativar");
          }
        } catch {
          reply("Falha ao ativar");
        }
        break;
      case "anticallblock":
      case "anticallaviso":
      case "anticallcrash":
        const vO1678 = {
          buttonId: prefix + "tchau",
          buttonText: {
            displayText: "Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
          },
          type: 1
        };
        if (!isPremium) {
          return sendButtons(from, "❗PARADO Ai❗", pushname + " Você não pode executar este comando!", [vO1678], mek);
        }
        if (command == "anticallblock") {
          await sock.updateBlockStatus("" + q, "block");
        } else if (command == "anticallaviso") {
          const vO1679 = {
            buttonId: prefix + "tchau",
            buttonText: {
              displayText: "Ok 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            },
            type: 1
          };
          sendButtons("" + q, "\t『❗𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙈 𝘿𝘼 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘾̧𝘼̃𝙊 』\n\t𝘙𝘌𝘔𝘌𝘛𝘌𝘕𝘛𝘌: " + pushname.toUpperCase() + "\n", "📨𝗘𝗶𝘁𝗮, 𝗰𝗵𝗲𝗴𝗼𝘂 𝘂𝗺 𝗮𝘃𝗶𝘀𝗼 𝗽𝗮𝗿𝗮 𝘃𝗼𝗰𝗲̂.\n@" + q.replace("@s.whatsapp.net", "") + " ligações para a Nezuko são proibidas e você podendo ser BANIDO ou até mesmo DEIXARÁ DE UTILIZAR NOSSOS SERVIÇOS❗Pedimos que não ligue novamente.", [vO1679], mek);
          const vO1680 = {
            text: "📨",
            key: mek.key
          };
          const vO1681 = {
            react: vO1680
          };
          const vVO1681 = vO1681;
          sock.sendMessage(from, vVO1681);
        } else if (command == "anticallcrash") {
          let vO1682 = {
            key: {
              participant: "0@s.whatsapp.net",
              remoteJid: "0@g.us"
            },
            message: {
              conversation: "nada haver isso aí animal"
            }
          };
          const vO1683 = {
            quoted: vO1682
          };
          sock.sendMessage("" + q, {
            text: "Presentinho😘"
          }, vO1683);
        }
        break;
      case "fakemsg":
        if (args.length == 2) {
          return reply("Use assim: " + (prefix + command) + " @5521964523665|Daniel Domina|Já sabemos\n\nObs: Pode usar qualquer coisa");
        }
        k = "" + body.slice(10);
        v273 = k.split("|")[0];
        v274 = k.split("|")[1];
        txt3 = k.split("|")[2];
        const vO1684 = {
          text: "" + txt3
        };
        const vO1685 = {
          fromMe: false,
          participant: v273 + "@s.whatsapp.net"
        };
        const vO1686 = {
          text: "" + v274,
          title: "Hmm"
        };
        const vO1687 = {
          extendedTextMessage: vO1686
        };
        const vO1688 = {
          key: vO1685,
          message: vO1687
        };
        const vO1689 = {
          quoted: vO1688
        };
        sock.sendMessage(from, vO1684, vO1689);
        break;
      case "antipv":
        if (!isPremium) {
          return reply("Apenas dono pode ativar/desativar essa função..");
        }
        if (Number(args[0]) === 1) {
          if (v87) {
            return reply("<❗> Já esta ativo.");
          }
          antipv.push("Ativado");
          fs.writeFileSync("./funções de cmd/usuarios/antipv.json", JSON.stringify(antipv));
          reply("<❗> Ativado com sucesso.");
        } else if (Number(args[0]) === 0) {
          if (!v87) {
            return reply("Já está desativado");
          }
          fs.writeFileSync("./funções de cmd/usuarios/antipv.json", JSON.stringify([]));
          reply("<❗> Desativado com sucesso.");
        } else {
          if (v87) {
            buttons02 = [{
              buttonId: prefix + command + " 0",
              buttonText: {
                displayText: "Desativar ✘"
              },
              type: 1
            }];
          } else {
            buttons02 = [{
              buttonId: prefix + command + " 1",
              buttonText: {
                displayText: "Ativar ✓"
              },
              type: 1
            }];
          }
          const vO1690 = {
            text: "[🔒] 𝐀𝐍𝐓𝐈-𝐏𝐕 𝐁𝐋𝐎𝐂𝐊 [🔒]",
            footer: "Status: " + (v87 ? "ativado" : "desativado") + "\n",
            buttons: buttons02,
            headerType: 4,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          };
          buttonMessage02 = vO1690;
          const vO1691 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage02, vO1691);
        }
        break;
      case "autoreação":
      case "autoreacao":
      case "autoreact":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (Number(args[0]) === 1) {
          if (v75) {
            return reply("Já está ativado");
          }
          autoreact.push(from);
          fs.writeFileSync("./funções de cmd/funções/autoreact.json", JSON.stringify(autoreact));
          reply("[⚡️] Ativou com sucesso o recurso de auto reação neste grupo 📝");
        } else if (Number(args[0]) === 0) {
          if (!v75) {
            return reply("Já está desativado");
          }
          pesquisar = from;
          processo = autoreact.indexOf(pesquisar);
          while (processo >= 0) {
            autoreact.splice(processo, 1);
            processo = autoreact.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/funções/autoreact.json", JSON.stringify(autoreact));
          reply("<❗> Desativou com sucesso o recurso de auto reação neste grupo.️");
        } else {
          if (v75) {
            buttons02 = [{
              buttonId: prefix + command + " 0",
              buttonText: {
                displayText: "Desativar ✘"
              },
              type: 1
            }];
          } else {
            buttons02 = [{
              buttonId: prefix + command + " 1",
              buttonText: {
                displayText: "Ativar ✓"
              },
              type: 1
            }];
          }
          const vO1692 = {
            text: "[🛑] 𝐀𝐔𝐓𝐎-𝐑𝐄𝐀𝐂̧𝐀̃𝐎 [🛑]",
            footer: "O auto react está " + (v75 ? "ativado" : "desativado") + "\n",
            buttons: buttons02,
            headerType: 4,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          };
          buttonMessage02 = vO1692;
          const vO1693 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage02, vO1693);
        }
        break;
      case "anticontatos":
      case "antictt":
      case "anticontato":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium && !isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        const vO1694 = {
          buttonId: prefix + "ct1",
          buttonText: {
            displayText: "Ligar"
          },
          type: 1
        };
        const vO1695 = {
          buttonId: prefix + "ct0",
          buttonText: {
            displayText: "Desligar"
          },
          type: 1
        };
        buttons22 = [vO1694, vO1695];
        const vO1696 = {
          text: "[⚜️] 𝐀𝐍𝐓𝐈-𝐂𝐎𝐍𝐓𝐀𝐓𝐎 [⚜️]",
          footer: "⚡️ 𝙰𝙽𝚃𝙸 𝙲𝙾𝙽𝚃𝙰𝚃𝙾\n𝚌𝚘𝚖 𝚎𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚊𝚝𝚒𝚟𝚘,\n𝚚𝚞𝚎𝚖 𝚎𝚗𝚟𝚒𝚊𝚛 𝚌𝚘𝚗𝚝𝚊𝚝𝚘 𝚗𝚘 𝚐𝚛𝚞𝚙𝚘 \n𝚂𝚎𝚛𝚊́ 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚊𝚖𝚎𝚗𝚝𝚎 𝚛𝚎𝚖𝚘𝚟𝚒𝚍𝚘",
          buttons: buttons22,
          headerType: 1
        };
        buttonMessage22 = vO1696;
        const vO1697 = {
          quoted: vVO27
        };
        v308 = await sock.sendMessage(from, buttonMessage22, vO1697);
        break;
      case "ct1":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium && !isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (v59) {
          return reply("Ja esta ativo");
        }
        antictt.push(from);
        fs.writeFileSync("./funções de cmd/antis/antictt.json", JSON.stringify(antictt));
        reply("🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝");
        break;
      case "ct0":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium && !isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (!v59) {
          return reply("Ja esta Desativado");
        }
        pesquisar = from;
        processo = antictt.indexOf(pesquisar);
        while (processo >= 0) {
          antictt.splice(processo, 1);
          processo = antictt.indexOf(pesquisar);
        }
        fs.writeFileSync("./funções de cmd/antis/antictt.json", JSON.stringify(antictt));
        reply("‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️");
        break;
      case "anticatalogo":
      case "anticatalg":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (Number(args[0]) === 1) {
          if (v60) {
            return reply("Ja esta ativo");
          }
          anticatalogo.push(from);
          fs.writeFileSync("./funções de cmd/antis/anticatalogo.json", JSON.stringify(anticatalogo));
          reply("[🌹️] Ativou com sucesso o recurso de anticatalogo neste grupo.");
        } else if (Number(args[0]) === 0) {
          if (!v60) {
            return reply("Ja esta Desativado");
          }
          pesquisar = from;
          processo = anticatalogo.indexOf(pesquisar);
          while (processo >= 0) {
            anticatalogo.splice(processo, 1);
            processo = anticatalogo.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/antis/anticatalogo.json", JSON.stringify(anticatalogo));
          reply("‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️");
        } else {
          if (v60) {
            buttons02 = [{
              buttonId: prefix + command + " 0",
              buttonText: {
                displayText: "Desativar ✘"
              },
              type: 1
            }];
          } else {
            buttons02 = [{
              buttonId: prefix + command + " 1",
              buttonText: {
                displayText: "Ativar ✓"
              },
              type: 1
            }];
          }
          const vO1698 = {
            text: "[👥] 𝐀𝐍𝐓𝐈-𝐂𝐀𝐓𝐀́𝐋𝐎𝐆𝐎 [👥]",
            footer: "O anti catálogo está " + (v60 ? "ativado" : "desativado") + "\n",
            buttons: buttons02,
            headerType: 4,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          };
          buttonMessage02 = vO1698;
          const vO1699 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage02, vO1699);
        }
        break;
      case "botoff":
      case "boton":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isPremium) {
          return reply("<❗> Apenas meu mestre pode executar esse comando.");
        }
        if (args.length < 1) {
          return reply("1 pra ligar / 0 pra desligar");
        }
        if (Number(args[0]) === 1) {
          if (botoff.includes(from)) {
            return reply("Ja esta ativo");
          }
          botoff.push(from);
          fs.writeFileSync("./funções de cmd/grupos/botoff.json", JSON.stringify(botoff));
          reply("Desativando funções e parando a execução de comandos por membros com sucesso...");
        } else if (Number(args[0]) === 0) {
          if (!botoff.includes(from)) {
            return reply("Ja esta Desativado");
          }
          pesquisar = from;
          processo = botoff.indexOf(pesquisar);
          while (processo >= 0) {
            botoff.splice(processo, 1);
            processo = botoff.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/grupos/botoff.json", JSON.stringify(botoff));
          reply("Ativando todos os funcionamentos do bot novamente...");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "antifake":
        if (!m.isGroup) {
          return m.reply("Só em Grupo");
        }
        if (!isGroupAdmins) {
          return m.reply("Você Não é Adm");
        }
        if (!isBotGroupAdmins) {
          return m.reply("o bot precisa ser adm");
        }
        const vO1700 = {
          buttonId: prefix + "varfake 0",
          buttonText: {
            displayText: "🔑 DESATIVAR"
          },
          type: 1
        };
        const vO1701 = {
          buttonId: prefix + "varfake 1",
          buttonText: {
            displayText: "🔒 ATIVAR"
          },
          type: 1
        };
        buttonsi = [vO1700, vO1701];
        const vO1702 = {
          text: "Atualmente o Antifake Está " + (v58 ? "Ativo" : "Desativado"),
          footer: "Bᥡ: " + NomeDoBot,
          buttons: buttonsi,
          headerType: 1
        };
        buttonMessageiu = vO1702;
        await sock.sendMessage(m.chat, buttonMessageiu, {
          quoted: m
        });
        break;
      case "varfake":
        if (!m.isGroup) {
          return m.reply("Só em Grupo");
        }
        if (!isGroupAdmins) {
          return m.reply("Você Não é Adm");
        }
        if (!isBotGroupAdmins) {
          return m.reply("o bot precisa ser adm");
        }
        if (args.length < 1) {
          return m.reply("Ative pressione 1, Desativar pressione 0");
        }
        if (Number(args[0]) === 1) {
          if (v58) {
            return m.reply("O recurso de  Anti fake já está Ativado neste grupo: " + groupName);
          }
          if (v58) {
            return m.reply("*O recurso de Anti fake já estava ativo antes*");
          }
          antifake.push(m.chat);
          fs.writeFileSync("./funções de cmd/antis/antifake.json", JSON.stringify(antifake));
          reply("Antifake foi ativado com sucesso neste grupo - : " + groupName);
        } else if (Number(args[0]) === 0) {
          if (!v58) {
            return reply("O recurso de  Anti fake já está Desativado neste grupo.");
          }
          antifake.splice(m.chat, 1);
          fs.writeFileSync("./funções de cmd/antis/antifake.json", JSON.stringify(antifake));
          reply("Antifake foi Desativado com sucesso neste grupo - : " + groupName);
        } else {
          reply("「* Adicionar parâmetro 1 ou 0 ");
        }
        break;
      case "sn":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        const vA128 = ["sim", "não", "com certeza", "com certeza não"];
        gosto = q;
        if (args.length < 1) {
          return reply("Você deve fazer uma pergunta...\nExemplo: " + prefix + "sn O " + pushname + " é um baiano preguiçoso?");
        }
        const v667 = vA128[Math.floor(Math.random() * vA128.length)];
        hasil = gosto + "\n\nSegundo meus cálculos, eu acredito que... " + v667;
        reply(hasil);
        break;
      case "antiloc":
        if (!isGroup) {
          return reply(" SOMENTE EM GRUPOS");
        }
        if (!isGroupAdmins) {
          return reply("PRECISA SER ADMIN");
        }
        if (!isBotGroupAdmins) {
          return reply(" O BOT PRECISA SER ADMIN");
        }
        try {
          if (args.length < 1) {
            return reply("1 pra ativar, 0 pra desligar");
          }
          if (Number(args[0]) === 1) {
            if (v73) {
              return reply("Já está Ativo.");
            }
            antiloc.push(from);
            fs.writeFileSync("./funções de cmd/antis/antiloc.json", JSON.stringify(antiloc));
            reply("Ativou com sucesso o recurso de anti loc neste grupo✔️");
          } else if (Number(args[0]) === 0) {
            if (!v73) {
              return reply("Já está Desativado.");
            }
            antiloc.splice(from, 1);
            fs.writeFileSync("./funções de cmd/antis/antiloc.json", JSON.stringify(antiloc));
            reply("Desativou com sucesso o recurso de anti loc neste grupo✔️");
          } else {
            reply("1 para ativar, 0 para desativar");
          }
        } catch {
          reply("Deu erro, tente novamente :/");
        }
        break;
      case "antidocumento":
      case "antidoc":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("1 pra ligar / 0 pra desligar");
        }
        if (Number(args[0]) === 1) {
          if (v72) {
            return reply("Ja esta ativo");
          }
          antidoc.push(from);
          fs.writeFileSync("./funções de cmd/antis/antidoc.json", JSON.stringify(antidoc));
          reply("⚡ Ativou com sucesso o recurso de anti documento neste grupo 📝");
        } else if (Number(args[0]) === 0) {
          if (!v72) {
            return reply("Ja esta Desativado");
          }
          pesquisar = from;
          processo = antidoc.indexOf(pesquisar);
          while (processo >= 0) {
            antidoc.splice(processo, 1);
            processo = antidoc.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/antis/antidoc.json", JSON.stringify(antidoc));
          reply("‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "antiimg":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("Hmmmm");
        }
        if (Number(args[0]) === 1) {
          if (v69) {
            return reply("Já Esta ativo");
          }
          antiimg.push(from);
          fs.writeFileSync("./funções de cmd/antis/antiimg.json", JSON.stringify(antiimg));
          reply("Ativou com sucesso o recurso de anti imagem neste grupo✔️");
        } else if (Number(args[0]) === 0) {
          if (!v69) {
            return reply("Ja esta Desativado.");
          }
          antiimg.splice(from, 1);
          fs.writeFileSync("./funções de cmd/antis/antiimg.json", JSON.stringify(antiimg));
          reply("Desativou com sucesso o recurso de anti imagem neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "antisticker":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("Hmmmm");
        }
        if (Number(args[0]) === 1) {
          if (v70) {
            return reply("Já Esta ativo");
          }
          antisticker.push(from);
          fs.writeFileSync("./funções de cmd/antis/antisticker.json", JSON.stringify(antisticker));
          reply("Ativou com sucesso o recurso de anti sticker neste grupo✔️");
        } else if (Number(args[0]) === 0) {
          if (!v70) {
            return reply("Ja esta Desativado.");
          }
          antisticker.splice(from, 1);
          fs.writeFileSync("./funções de cmd/antis/antisticker.json", JSON.stringify(antisticker));
          reply("Desativou com sucesso o recurso de anti sticker neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "antinotas":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("Hmmmm");
        }
        if (Number(args[0]) === 1) {
          if (v71) {
            return reply("Já Esta ativo");
          }
          antinotas.push(from);
          fs.writeFileSync("./funções de cmd/antis/antinotas.json", JSON.stringify(antinotas));
          reply("Ativou com sucesso o recurso de anti notas neste grupo✔️");
        } else if (Number(args[0]) === 0) {
          if (!v71) {
            return reply("Ja esta Desativado.");
          }
          antinotas.splice(from, 1);
          fs.writeFileSync("./funções de cmd/antis/antinotas.json", JSON.stringify(antinotas));
          reply("Desativou com sucesso o recurso de anti notas neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "antivideo":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("Hmmmm");
        }
        if (Number(args[0]) === 1) {
          if (v74) {
            return reply("Ja esta ativo");
          }
          antivid.push(from);
          fs.writeFileSync("./funções de cmd/antis/antivideo.json", JSON.stringify(antivid));
          reply("Ativou com sucesso o recurso de anti video neste grupo✔️");
        } else if (Number(args[0]) === 0) {
          if (!v74) {
            return reply("Ja esta Desativado");
          }
          antivid.splice(from, 1);
          fs.writeFileSync("./funções de cmd/antis/antivideo.json", JSON.stringify(antivid));
          reply("Desativou com sucesso o recurso de anti video neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "antiaudio":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("Hmmmm");
        }
        if (Number(args[0]) === 1) {
          if (v67) {
            return reply("Ja esta ativo");
          }
          antiaudio.push(from);
          fs.writeFileSync("./funções de cmd/antis/antiaudio.json", JSON.stringify(antiaudio));
          reply("Ativou com sucesso o recurso de anti audio neste grupo✔️");
        } else if (Number(args[0]) === 0) {
          if (!v67) {
            return reply("Ja esta Desativado");
          }
          antiaudio.splice(from, 1);
          fs.writeFileSync("./funções de cmd/antis/antiaudio.json", JSON.stringify(antiaudio));
          reply("Desativou com sucesso o recurso de anti audio neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "limitecaracteres":
      case "limiteflood":
        if (!isGroup) {
          return reply(enviar.msg.adm);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("Digite " + (prefix + command) + " 1 para ativar");
        }
        if (Number(args[0]) === 1) {
          if (v61) {
            return reply("⚡ O recurso limite de caracteres até " + v163 + " já está ativo no grupo ⚡");
          }
          antiflood.push(from);
          fs.writeFileSync("./funções de cmd/usuarios/antiflood.json", JSON.stringify(antiflood));
          reply("<❗> ️O recurso limite de caracteres " + v163 + " foi ativado nesse grupo.");
        } else if (Number(args[0]) === 0) {
          if (!v61) {
            return reply("<❗> O recurso limite de caracteres não está ativado no grupo .");
          }
          let v668 = false;
          Object.keys(antiflood).forEach(p411 => {
            if (antiflood[p411] === from) {
              v668 = p411;
            }
          });
          if (v668 !== false) {
            antiflood.splice(v668, 1);
            fs.writeFileSync("./funções de cmd/usuarios/antiflood.json", JSON.stringify(antiflood));
          }
          reply("O recurso limite de caracteres foi desativado nesse grupo ✔️");
        } else {
          reply("Digite " + (prefix + command) + " 1 para ativar, 0 para desativar o recurso");
        }
        break;
      case "resetarttt":
      case "rvttt":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        daily.splice([]);
        fs.writeFileSync("./funções de cmd/usuarios/diario.json", JSON.stringify(daily));
        reply("<❗> O jogo da velha TTT foi resetado com sucesso..✔️");
        reply(prefix + "reiniciar");
        break;
      case "antipalavrão":
      case "antipalavrao":
      case "antipalavra":
        if (!isGroup) {
          return reply("<❗> SOMENTE EM GRUPOS");
        }
        if (!isGroupAdmins) {
          return reply("<❗> O PRECISA SER ADMIN");
        }
        if (!isBotGroupAdmins) {
          return reply("<❗> O BOT PRECISA SER ADMIN");
        }
        if (args.length < 1) {
          return reply("<❗> 1 / 0, Exemplo " + (prefix + command) + " 1");
        }
        if (Number(args[0]) === 1) {
          if (v66) {
            return reply("Ja esta ativo.");
          }
          palavrao.push(from);
          fs.writeFileSync("./funções de cmd/grupos/palavrao.json", JSON.stringify(palavrao));
          reply("⚡ Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo.");
        } else if (Number(args[0]) === 0) {
          if (!v66) {
            return reply("Ja esta Desativado");
          }
          pesquisar = from;
          processo = palavrao.indexOf(pesquisar);
          while (processo >= 0) {
            palavrao.splice(processo, 1);
            processo = palavrao.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/grupos/palavrao.json", JSON.stringify(palavrao));
          reply("<❗> Desativou com sucesso o recurso de Anti Palavra harcore neste grupo.");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "antilinkhard":
      case "antilink":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (Number(args[0]) === 1) {
          if (v62) {
            return reply("Ja esta ativo");
          }
          antilinkhard.push(from);
          fs.writeFileSync("./funções de cmd/antis/antilinkhard.json", JSON.stringify(antilinkhard));
          reply("[⚡️] Ativou com sucesso o recurso de antilink hardcore neste grupo.");
        } else if (Number(args[0]) === 0) {
          if (!v62) {
            return reply("Ja esta Desativado");
          }
          pesquisar = from;
          processo = antilinkhard.indexOf(pesquisar);
          while (processo >= 0) {
            antilinkhard.splice(processo, 1);
            processo = antilinkhard.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/antis/antilinkhard.json", JSON.stringify(antilinkhard));
          reply("<❗> Desativou com sucesso o recurso de antilink harcore neste grupo.");
        } else {
          if (v62) {
            buttons02 = [{
              buttonId: prefix + command + " 0",
              buttonText: {
                displayText: "Desativar ✘"
              },
              type: 1
            }];
          } else {
            buttons02 = [{
              buttonId: prefix + command + " 1",
              buttonText: {
                displayText: "Ativar ✓"
              },
              type: 1
            }];
          }
          const vO1703 = {
            text: "[🌹] 𝐀𝐍𝐓𝐈-𝐋𝐈𝐍𝐊 𝐇𝐀𝐑𝐃 [🌹]",
            footer: "O anti link está " + (v62 ? "ativado" : "desativado") + "\n",
            buttons: buttons02,
            headerType: 4,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          };
          buttonMessage02 = vO1703;
          const vO1704 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage02, vO1704);
        }
        break;
      case "antilinkgp":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (Number(args[0]) === 1) {
          if (v64) {
            return reply("Ja esta ativo");
          }
          antilinkgp.push(from);
          fs.writeFileSync("./funções de cmd/antis/antilinkgp.json", JSON.stringify(antilinkgp));
          reply("[⚡️] Ativou com sucesso o recurso de antilinkgp.");
        } else if (Number(args[0]) === 0) {
          if (!v64) {
            return reply("Ja esta Desativado");
          }
          pesquisar = from;
          processo = antilinkgp.indexOf(pesquisar);
          while (processo >= 0) {
            antilinkgp.splice(processo, 1);
            processo = antilinkgp.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/antis/antilinkgp.json", JSON.stringify(antilinkgp));
          reply("<❗> Desativou com sucesso o recurso de antilink de grupo.️");
        } else {
          if (v64) {
            buttons02 = [{
              buttonId: prefix + command + " 0",
              buttonText: {
                displayText: "Desativar ✘"
              },
              type: 1
            }];
          } else {
            buttons02 = [{
              buttonId: prefix + command + " 1",
              buttonText: {
                displayText: "Ativar ✓"
              },
              type: 1
            }];
          }
          const vO1705 = {
            text: "[🏓] 𝐀𝐍𝐓𝐈-𝐋𝐈𝐍𝐊 [🏓]",
            footer: "O anti link grupo está " + (v64 ? "ativado" : "desativado") + "\n",
            buttons: buttons02,
            headerType: 4,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true
            }
          };
          buttonMessage02 = vO1705;
          const vO1706 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage02, vO1706);
        }
        break;
      case "adeuscara":
      case "tchau":
        if (!isGroup) {
          return reply("Só em Grupo");
        }
        if (!isGroupAdmins) {
          return reply("Você Não é Adm");
        }
        if (!isBotGroupAdmins) {
          return reply("o bot precisa ser adm");
        }
        const vO1707 = {
          buttonId: prefix + "varadeus 0",
          buttonText: {
            displayText: "🔑 DESATIVAR"
          },
          type: 1
        };
        const vO1708 = {
          buttonId: prefix + "varadeus 1",
          buttonText: {
            displayText: "🔒 ATIVAR"
          },
          type: 1
        };
        buttonsi = [vO1707, vO1708];
        const vO1709 = {
          text: "Atualmente o AdeusCara Está " + (v56 ? "Ativo" : "Desativado"),
          footer: "By: " + NomeDoBot,
          buttons: buttonsi,
          headerType: 1
        };
        buttonMessageiu = vO1709;
        const vO1710 = {
          quoted: mek
        };
        await sock.sendMessage(from, buttonMessageiu, vO1710);
        break;
      case "varadeus":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("1 pra ligar / 0 pra desligar");
        }
        if (Number(args[0]) === 1) {
          if (v56) {
            return reply("Ja esta ativo");
          }
          v53.push(from);
          fs.writeFileSync("./funções de cmd/grupos/adeus.json", JSON.stringify(v53));
          reply("🌀 Ativou com sucesso o recurso de adeuscara neste grupo 📝");
        } else if (Number(args[0]) === 0) {
          if (!v56) {
            return reply("Ja esta Desativado");
          }
          pesquisar = from;
          processo = v53.indexOf(pesquisar);
          while (processo >= 0) {
            v53.splice(processo, 1);
            processo = v53.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/grupos/adeus.json", JSON.stringify(v53));
          reply("‼️ Desativou com sucesso o recurso de adeuscara neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "bemvindo":
      case "welcome":
        if (!isGroup) {
          return reply("Só em Grupo");
        }
        if (!isGroupAdmins) {
          return reply("Você Não é Adm");
        }
        if (!isBotGroupAdmins) {
          return reply("o bot precisa ser adm");
        }
        const vO1711 = {
          buttonId: prefix + "varbemvindo 0",
          buttonText: {
            displayText: "🔑 DESATIVAR"
          },
          type: 1
        };
        const vO1712 = {
          buttonId: prefix + "varbemvindo 1",
          buttonText: {
            displayText: "🔒 ATIVAR"
          },
          type: 1
        };
        buttonsi = [vO1711, vO1712];
        const vO1713 = {
          text: "Atualmente o Bemvindo Está " + (v55 ? "Ativo" : "Desativado"),
          footer: "By: " + NomeDoBot,
          buttons: buttonsi,
          headerType: 1
        };
        buttonMessageiu = vO1713;
        const vO1714 = {
          quoted: mek
        };
        await sock.sendMessage(from, buttonMessageiu, vO1714);
        break;
      case "varbemvindo":
        if (!isGroup) {
          return reply(enviar.msg.grupo);
        }
        if (!isGroupAdmins) {
          return reply(enviar.msg.adm);
        }
        if (!isBotGroupAdmins) {
          return reply(enviar.msg.Badmin);
        }
        if (args.length < 1) {
          return reply("1 pra ligar / 0 pra desligar");
        }
        if (Number(args[0]) === 1) {
          if (v55) {
            return reply("Ja esta ativo");
          }
          v54.push(from);
          fs.writeFileSync("./funções de cmd/grupos/bemvindo.json", JSON.stringify(v54));
          reply("🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝");
        } else if (Number(args[0]) === 0) {
          if (!v55) {
            return reply("Ja esta Desativado");
          }
          pesquisar = from;
          processo = v54.indexOf(pesquisar);
          while (processo >= 0) {
            v54.splice(processo, 1);
            processo = v54.indexOf(pesquisar);
          }
          fs.writeFileSync("./funções de cmd/grupos/bemvindo.json", JSON.stringify(v54));
          reply("‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️");
        } else {
          reply("1 para ativar, 0 para desativar");
        }
        break;
      case "pinterest":
        if (!q) {
          return reply("Digite o nome da imagem que vc quer buscar\nExemplo: " + (prefix + command) + " cat");
        }
        reply(enviar.espere);
        hx.pinterest(q).then(p412 => {
          angkaa = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          const v669 = angkaa[Math.floor(Math.random() * angkaa.length)];
          const vA129 = [{
            buttonId: prefix + command + " " + q,
            buttonText: {
              displayText: "<❗> PRÓXIMO <❗>"
            },
            type: 1
          }];
          const vO1715 = {
            url: p412[v669]
          };
          const vO1716 = {
            image: vO1715,
            caption: "AQUI ESTÁ!!",
            footer: "PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO",
            buttons: vA129,
            headerType: 4
          };
          const vVO1716 = vO1716;
          const vO1717 = {
            quoted: m
          };
          sock.sendMessage(from, vVO1716, vO1717).catch(p413 => {
            reply("Erro, nenhuma imagem recebida.");
          });
        });
        break;
      case "wallpaper":
        {
          if (!q) {
            return reply("Digite o nome da imagem que vc quer buscar\nExemplo: " + (prefix + command) + " fotos");
          }
          reply(enviar.espere);
          let v670 = await wallpaper(q);
          v384 = v670[Math.floor(Math.random() * v670.length)];
          const vO1718 = {
            buttonId: prefix + "wallpaper " + q,
            buttonText: {
              displayText: "<❗> PRÓXIMO <❗>"
            },
            type: 1
          };
          let vA130 = [vO1718];
          const vO1719 = {
            url: v384.image[0]
          };
          const vO1720 = {
            image: vO1719,
            caption: "AQUI ESTÁ!!",
            footer: "PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO",
            buttons: vA130
          };
          const vO1721 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1720, vO1721).catch(p414 => {
            reply("Erro, nenhuma imagem recebida.");
          });
        }
        break;
      case "tiktok2":
        try {
          if (!q) {
            return reply("Cadê o link?");
          }
          if (!isUrl(args[0]) || !args[0].includes("tiktok")) {
            return reply("Link inválido");
          }
          reply(enviar.espere);
          sex = await xfar.downloader.tiktok(args[0]);
          plsexual = [];
          for (let v671 of sex.media) {
            if (v671.quality === "hd") {
              plsexual.push(v671.url);
            }
          }
          if (plsexual.length === 0) {
            return reply("<❗> Não consegui encontrar o vídeo.");
          }
          plviado = await getBuffer("" + plsexual[Math.floor(Math.random() * plsexual.length)]);
          const vO1722 = {
            video: plviado,
            caption: "" + sex.title
          };
          const vO1723 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1722, vO1723);
        } catch {
          reply("<❗> Deu um erro.");
        }
        break;
      case "pinterest2":
        try {
          if (!q) {
            return reply("Digite o nome da imagem que vc quer buscar\nExemplo: " + (prefix + command) + " cat");
          }
          reply(enviar.espere);
          blap = await getBuffer("https://nezsab-apis.xyz/api/pinterest?text=" + q + "&apikey=" + keyapi);
          const vO1724 = {
            image: blap,
            thumbnail: null
          };
          const vO1725 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, vO1724, vO1725).catch(p415 => {
            reply("ERROR!!");
          });
        } catch (e133) {
          if (String(e133).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "tradutor":
      case "traduzir":
        try {
          if (!q) {
            return reply("Exemplo : " + prefix + "tradutor HI");
          }
          v427 = await fetchJson("https://nezsab-apis.xyz/api/tradutor?text=" + args.join(" ") + "&idioma=pt&apikey=" + keyapi);
          blatxt = " [🎴] Olá " + pushname + " [🎴️] \n\n seu texto " + q + " foi traduzida pra ->\n\n " + v427.bla;
          blalogo = await getBuffer("" + logo);
          const vO1726 = {
            title: "[🎴️] TRADUZIDO [🎴️] ",
            body: "",
            previewType: "PHOTO",
            thumbnail: blalogo
          };
          const vO1727 = {
            externalAdReply: vO1726
          };
          const vO1728 = {
            text: blatxt,
            contextInfo: vO1727
          };
          const vO1729 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1728, vO1729).catch(p416 => {
            reply("ERROR!!");
            console.log(p416);
          });
        } catch (e134) {
          if (String(e134).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!!");
          }
        }
        break;
      case "gimage":
      case "":
        try {
          if (!q) {
            return reply("O que você está procurando?\n\nEx.: " + (prefix + command) + " gatinhos fofinhos");
          }
          let funçõesDeCmdFunçõesGimageJs = require("./funções de cmd/funções/gimage.js");
          funçõesDeCmdFunçõesGimageJs(args.join(" "), async (p417, p418) => {
            if (p417) {
              return sendButtons(from, "Ocorreu um erro", "Aperte no botão abaixo para tentar novamente.", [{
                buttonId: prefix + command + " " + q,
                buttonText: {
                  displayText: "Tentar Novamente"
                },
                type: 1
              }], mek);
            }
            n = p418;
            try {
              images = n[Math.floor(Math.random() * n.length)];
              let vA131 = [{
                buttonId: prefix + "gimage " + args.join(" "),
                buttonText: {
                  displayText: "Proximo"
                },
                type: 1
              }];
              const vO1730 = {
                url: images.url
              };
              const vO1731 = {
                image: vO1730,
                caption: "Pronto!",
                buttons: vA131,
                headerType: 4
              };
              let vVO1731 = vO1731;
              const vO1732 = {
                quoted: mek
              };
              sock.sendMessage(from, vVO1731, vO1732);
            } catch {
              sendButtons(from, "Nenhuma imagem recebida.", "Aperte no botão abaixo para tentar novamente.", [{
                buttonId: prefix + command + " " + q,
                buttonText: {
                  displayText: "Tentar Novamente"
                },
                type: 1
              }], mek);
            }
          });
        } catch {
          sendButtons(from, "Ocorreu um erro", "Aperte no botão abaixo para tentar novamente.", [{
            buttonId: prefix + command + " " + q,
            buttonText: {
              displayText: "Tentar Novamente"
            },
            type: 1
          }], mek);
          console.log("O MODULO caiu ou não foi possivel executar esta ação., espere retornar");
        }
        break;
      case "avaliar":
        const vO1733 = {
          title: "★☆☆☆☆",
          rowId: prefix + "avaliar2 1",
          description: "Péssimo 😡"
        };
        const vO1734 = {
          title: "★★☆☆☆",
          rowId: prefix + "avaliar2 2",
          description: "Ruim 😒"
        };
        const vO1735 = {
          title: "★★★☆☆",
          rowId: prefix + "avaliar2 3",
          description: "Regular 😐"
        };
        const vO1736 = {
          title: "★★★★☆",
          rowId: prefix + "avaliar2 4",
          description: "Bom 😊"
        };
        const vO1737 = {
          title: "★★★★★",
          rowId: prefix + "avaliar2 5",
          description: "Excelente 😄"
        };
        const vO1738 = {
          title: "Aᴠᴀʟɪᴀᴄ̧ᴀ̃ᴏ " + NomeDoBot,
          rows: [vO1733, vO1734, vO1735, vO1736, vO1737]
        };
        const vO1739 = {
          title: "𝗦𝗜𝗦𝗧𝗘𝗠𝗔𝗦⬇️",
          rows: [{
            title: "Contratar",
            rowId: prefix + "contratar",
            description: "Política De Privacidade"
          }, {
            title: "Bug ⛔",
            rowId: prefix + "bug",
            description: "Informar Sobre Bugs"
          }]
        };
        const vO1740 = {
          title: "=================",
          rows: [{
            title: "↩️ Voltar ao menu",
            rowId: prefix + "menu"
          }]
        };
        var vA44 = [vO1738, vO1739, vO1740];
        const vO1741 = {
          text: "*Sᴜᴀ Aᴠᴀʟɪᴀᴄ̧ᴀ̃ᴏ Sᴇʀᴀ́ Eɴᴠɪᴀᴅᴀ Pᴀʀᴀ O Sᴜᴘᴏʀᴛᴇ Dᴏ Bᴏᴛ ❗*\n",
          title: "",
          footer: "Seu Feedback É Muito Importante Para Podermos Saber Se Você Está Gostando Da " + NomeDoBot + ", Estamos Em Contante Evolução Para Dar O Melhor Bot Para Todos Os Usuários(as)...",
          buttonText: "𝘼𝙫𝙖𝙡𝙞𝙖𝙧 ☕",
          sections: vA44
        };
        const vVO1741 = vO1741;
        const vO1742 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vVO1741, vO1742);
        break;
      case "bug":
      case "reporte":
      case "reporta":
        if (!query) {
          return reply("Cadê o a mensagem do bug");
        }
        if (query.length > 500) {
          return reply("Até 500 características");
        }
        try {
          let v672 = "[❗𝐑𝐄𝐏𝐎𝐑𝐓❗]\n👤 Reportado por @" + sender.split("@")[0] + " \n✏️ Mensagem: " + query;
          const vO1743 = {
            text: v672,
            mentions: [sender]
          };
          sock.sendMessage("120363027726655541@g.us", vO1743);
        } catch (e135) {
          reply("Falha ao fazer suporte❗");
        }
        break;
      case "avaliar2":
        var v457 = mek.participant;
        tristan = args + " Estrelas";
        teks1 = "「 Aᴠᴀʟɪᴀᴄ̧ᴀ̃ᴏ 」\n\nUsuário(a): " + pushname + "\n\nNumero: wa.me/" + sender.split("@s.whatsapp.net")[0] + "\n\nChat: " + groupName + "\n\nFeedback: " + tristan;
        const vO1744 = {
          text: teks1
        };
        const vO1745 = {
          quoted: vVO27
        };
        await sock.sendMessage(numerodonoa + "@s.whatsapp.net", vO1744, vO1745);
        reply("Ola " + pushname + ", obrigado Por Avaliar! O Seu Feedback é muito importante para podermos saber se você está gostando da 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿, estaremos melhorando a cada dia! 🐱");
        break;
      case "igdl":
      case "instadw":
        try {
          v314 = args.join(" ");
          if (!v314) {
            return reply("Ops, insira o link de um video/foto do instagram.");
          }
          post = await fetchJson("https://nezsab-apis.xyz/api/instagram?url=" + v314 + "&apikey=" + keyapi);
          s_video = await getBuffer(post.resultado[0].downloadUrl);
          const vO1746 = {
            video: s_video
          };
          const vO1747 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vO1746, vO1747);
        } catch (e136) {
          if (String(e136).includes("invalid json response body at")) {
            console.log("A api caiu ou não foi possivel executar esta ação., espere retornar");
          } else {
            reply("ERROR!");
          }
        }
        break;
      case "ytshorts":
      case "shorts":
        {
          teks = args.join(" ");
          if (!teks) {
            return reply("Cadê o link?");
          }
          if (isUrl(teks[0]) && !teks[0].includes("youtube.com/shorts/")) {
            return reply("Link precisa ser do YouTube Shorts!");
          }
          buffer = await fetchJson("https://nezsab-apis.xyz/api/ytmp4-2?url=" + teks + "&apikey=" + keyapi);
          imagemT = await getBuffer(buffer.resultado.thumb);
          const vO1748 = {
            buttonId: prefix + "shorts_audio " + q,
            buttonText: {
              displayText: "🎶 Baixar [ Formato: Áudio ]"
            },
            type: 1
          };
          const vO1749 = {
            buttonId: prefix + "shorts_video " + q,
            buttonText: {
              displayText: "🎦 Baixar [ Formato: Vídeo ]"
            },
            type: 1
          };
          const vO1750 = {
            buttonId: prefix + "shorts_docvid " + q,
            buttonText: {
              displayText: "📄 Baixar [ Formato: Doc ]"
            },
            type: 1
          };
          let vA132 = [vO1748, vO1749, vO1750];
          let v673 = "ೋ🔖️️ 𝘛𝘪́𝘵𝘶𝘭𝘰⧽ " + buffer.resultado.título + "\nೋ📁 𝘊𝘢𝘯𝘢𝘭⧽ " + buffer.resultado.canal + "\nೋ📬 𝘗𝘶𝘣𝘭𝘪𝘤𝘢𝘥𝘰⧽ " + buffer.resultado.publicado + "\nೋ📊️️ 𝘝𝘪𝘴𝘶𝘢𝘭𝘪𝘻𝘢𝘤̧𝘰̃𝘦𝘴⧽ " + buffer.resultado.visualizações;
          const vO1751 = {
            image: imagemT,
            caption: "" + v673,
            footer: "Escolha o formato que você deseja! <3",
            buttons: vA132,
            headerType: 4
          };
          buttonMessage = vO1751;
          const vO1752 = {
            quoted: vVO27
          };
          sock.sendMessage(from, buttonMessage, vO1752);
        }
        break;
      case "shorts_docvid":
        teks = args.join(" ");
        if (!teks) {
          return enviar("Cade o link?");
        }
        if (isUrl(teks[0]) && !teks[0].includes("youtube.com/shorts/")) {
          return reply("Link precisa ser do YouTube Shorts!");
        }
        reply(enviar.espere);
        buffer = await fetchJson("https://nezsab-apis.xyz/api/ytmp4-2?url=" + teks + "&apikey=" + keyapi);
        videokk = await getBuffer(buffer.resultado.link);
        const vO1753 = {
          document: videokk,
          mimetype: "video/mp4",
          fileName: buffer.resultado.título + ".mp4"
        };
        const vO1754 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1753, vO1754).catch(p419 => {
          console.log(p419);
          reply("ERRO!");
        });
        break;
      case "shorts_audio":
        teks = args.join(" ");
        if (!teks) {
          return enviar("Cade o link?");
        }
        if (isUrl(teks[0]) && !teks[0].includes("youtube.com/shorts/")) {
          return reply("Link precisa ser do YouTube Shorts!");
        }
        reply(enviar.espere);
        buffer = await fetchJson("https://nezsab-apis.xyz/api/ytmp4-2?url=" + teks + "&apikey=" + keyapi);
        videokk = await getBuffer(buffer.resultado.link);
        const vO1755 = {
          audio: videokk,
          mimetype: "audio/mp4",
          fileName: buffer.resultado.título + ".m4a"
        };
        const vO1756 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1755, vO1756).catch(p420 => {
          console.log(p420);
          reply("ERRO!");
        });
        break;
      case "shorts_video":
        teks = args.join(" ");
        if (!teks) {
          return enviar("Cadê o link?");
        }
        if (isUrl(teks[0]) && !teks[0].includes("youtube.com/shorts/")) {
          return reply("Link precisa ser do YouTube Shorts!");
        }
        reply(enviar.espere);
        buffer = await fetchJson("https://nezsab-apis.xyz/api/ytmp4-2?url=" + teks + "&apikey=" + keyapi);
        videokk = await getBuffer(buffer.resultado.link);
        const vO1757 = {
          video: videokk,
          mimetype: "video/mp4",
          fileName: buffer.resultado.título + ".mp3"
        };
        const vO1758 = {
          quoted: vVO27
        };
        sock.sendMessage(from, vO1757, vO1758).catch(p421 => {
          console.log(p421);
          reply("ERRO!");
        });
        break;
      default:
        if (isBotGroupAdmins && v59 && type === "contactMessage") {
          const vO1759 = {
            quoted: vVO27
          };
          if (isGroupAdmins) {
            return sock.sendMessage(from, {
              text: "Contato detectado, você é adm, então não irei ti remover"
            }, vO1759);
          }
          const vO1760 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm."
          }, vO1760);
          await sock.groupSettingUpdate(from, "announcement");
          await sleep(2000);
          v674 = sender.split("@")[0] + "@s.whatsapp.net";
          sock.groupParticipantsUpdate(from, [sender], "remove");
          await sleep(2000);
          const vO1761 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "o grupo sera limpado para evitar fazer efeito da trava"
          }, vO1761);
          await sleep(3000);
          clear = "🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅";
          const vO1762 = {
            text: clear
          };
          const vO1763 = {
            quoted: vVO27,
            contextInfo: {
              forwardingScore: 500,
              isForwarded: true
            }
          };
          sock.sendMessage(from, vO1762, vO1763);
          await sleep(3000);
          const vO1764 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "agora enviarei destrava aguarde "
          }, vO1764);
          await sleep(2000);
          const vO1765 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: destrava(prefix)
          }, vO1765);
          await sleep(2000);
          const vO1766 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: destrava(prefix)
          }, vO1766);
          await sleep(2000);
          const vO1767 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "reporte ao adm o ocorrido "
          }, vO1767);
          await sleep(5000);
          await sock.groupSettingUpdate(from, "not_announcement");
          await sleep(2000);
          const vO1768 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "Aberto nao marque a trava ou levara ban✅"
          }, vO1768);
        }
        if (isBotGroupAdmins && v59 && type === "contactsArrayMessage") {
          const vO1769 = {
            quoted: vVO27
          };
          if (isGroupAdmins) {
            return sock.sendMessage(from, {
              text: "Contato detectado, você é adm, então não irei ti remover"
            }, vO1769);
          }
          const vO1770 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "opa fechado pelo bot detectado trava contatos"
          }, vO1770);
          await sock.groupSettingUpdate(from, "announcement");
          await sleep(2000);
          v674 = sender.split("@")[0] + "@s.whatsapp.net";
          sock.groupParticipantsUpdate(from, [sender], "remove");
          await sleep(2000);
          const vO1771 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "o grupo sera limpado para evitar fazer efeito da trava"
          }, vO1771);
          await sleep(3000);
          clear = "🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅";
          const vO1772 = {
            text: clear
          };
          const vO1773 = {
            quoted: vVO27,
            contextInfo: {
              forwardingScore: 500,
              isForwarded: true
            }
          };
          sock.sendMessage(from, vO1772, vO1773);
          await sleep(3000);
          const vO1774 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "agora enviarei destrava aguarde "
          }, vO1774);
          await sleep(2000);
          const vO1775 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: destrava(prefix)
          }, vO1775);
          await sleep(2000);
          const vO1776 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: destrava(prefix)
          }, vO1776);
          await sleep(2000);
          const vO1777 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "reporte ao adm o ocorrido "
          }, vO1777);
          await sleep(5000);
          await sock.groupSettingUpdate(from, "not_announcement");
          await sleep(2000);
          const vO1778 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "Aberto nao marque a trava ou levara ban✅"
          }, vO1778);
        }
        if (isBotGroupAdmins && v73 && type === "locationMessage") {
          const vO1779 = {
            quoted: vVO27
          };
          if (isGroupAdmins) {
            return sock.sendMessage(from, {
              text: "Localização detectada, você é adm, então não irei ti remover"
            }, vO1779);
          }
          const vO1780 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm."
          }, vO1780);
          await sock.groupSettingUpdate(from, "announcement");
          await sleep(2000);
          v674 = sender.split("@")[0] + "@s.whatsapp.net";
          sock.groupParticipantsUpdate(from, [sender], "remove");
          await sleep(2000);
          const vO1781 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "o grupo sera limpado para evitar fazer efeito da trava"
          }, vO1781);
          await sleep(3000);
          clear = "🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅";
          const vO1782 = {
            text: clear
          };
          const vO1783 = {
            quoted: vVO27,
            contextInfo: {
              forwardingScore: 500,
              isForwarded: true
            }
          };
          sock.sendMessage(from, vO1782, vO1783);
          await sleep(3000);
          const vO1784 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "agora enviarei destrava aguarde "
          }, vO1784);
          await sleep(2000);
          const vO1785 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: destrava(prefix)
          }, vO1785);
          await sleep(2000);
          const vO1786 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: destrava(prefix)
          }, vO1786);
          await sleep(2000);
          const vO1787 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "reporte ao adm o ocorrido "
          }, vO1787);
          await sleep(5000);
          await sock.groupSettingUpdate(from, "not_announcement");
          await sleep(2000);
          const vO1788 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "Aberto não marque a trava ou levará ban✅"
          }, vO1788);
        }
        if (isBotGroupAdmins && v60 && type === "productMessage") {
          const vO1789 = {
            quoted: vVO27
          };
          if (isGroupAdmins) {
            return sock.sendMessage(from, {
              text: "Catalogo detectado, você é adm, então não irei ti remover"
            }, vO1789);
          }
          const vO1790 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm."
          }, vO1790);
          await sock.groupSettingUpdate(from, "announcement");
          await sleep(2000);
          v674 = sender.split("@")[0] + "@s.whatsapp.net";
          sock.groupParticipantsUpdate(from, [sender], "remove");
          await sleep(2000);
          const vO1791 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "o grupo sera limpado para evitar fazer efeito da trava"
          }, vO1791);
          await sleep(3000);
          clear = "🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅";
          const vO1792 = {
            text: clear
          };
          const vO1793 = {
            quoted: vVO27,
            contextInfo: {
              forwardingScore: 500,
              isForwarded: true
            }
          };
          sock.sendMessage(from, vO1792, vO1793);
          await sleep(3000);
          const vO1794 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "agora enviarei destrava aguarde "
          }, vO1794);
          await sleep(2000);
          const vO1795 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: destrava(prefix)
          }, vO1795);
          await sleep(2000);
          const vO1796 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: destrava(prefix)
          }, vO1796);
          await sleep(2000);
          const vO1797 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "reporte ao adm o ocorrido "
          }, vO1797);
          await sleep(5000);
          await sock.groupSettingUpdate(from, "not_announcement");
          await sleep(2000);
          const vO1798 = {
            quoted: vVO27
          };
          await sock.sendMessage(from, {
            text: "Aberto nao marque a trava ou levara ban✅"
          }, vO1798);
        }
        if (body.length >= v163) {
          if (!v61) {
            return;
          }
          if (v61 && isGroupAdmins && isBotGroupAdmins && v44) {
            if (v16) {
              return;
            }
            reply("*Link detectado, porém usuário é admin*");
          } else {
            if (isPremium) {
              return;
            }
            if (isGroupAdmins) {
              return;
            }
            if (v44) {
              return;
            }
            var v674 = sender.split("@")[0] + "@s.whatsapp.net";
            setTimeout(() => {
              if (!isPremium && !m.key.fromMe && !isGroupAdmins) {
                return reply("Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.");
              }
              console.log(color("deram Spam", "red"));
            }, 100);
            setTimeout(() => {
              sock.groupParticipantsUpdate(from, [sender], "remove");
            }, 1000);
            setTimeout(() => {}, 0);
          }
        }
        hora2 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
        if (isCmd) {
          r = Date.now() / 1000 - mek.messageTimestamp;
          uptime = process.uptime();
          const vO1799 = {
            title: " 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿 ",
            rows: [{
              title: "[🌺️] 𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎 [🌺️]",
              rowId: prefix + "menu",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "[🌹️] 𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎 [🌹️]",
              rowId: prefix + "menudono",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "[👥️] 𝐈𝐍𝐅𝐎 𝐃𝐎𝐍𝐎 [👥]",
              rowId: prefix + "infodono",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "[⚙️] 𝐃𝐎𝐍𝐎 [⚙️]",
              rowId: prefix + "dono",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "[🏓] 𝐏𝐈𝐍𝐆 [🏓]",
              rowId: prefix + "ping2",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }, {
              title: "[💸️] 𝐑𝐄𝐃𝐄𝐒 [💸️]",
              rowId: prefix + "redes",
              description: "𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿"
            }]
          };
          vA44 = [vO1799];
          const vO1800 = {
            text: "┏⧐┅⃟┅┅⧏ ❀ ⧐┅┅⃟┅⧏┓\n╎│⋟ 『 𝐂𝐌𝐃 𝐍𝐀̃𝐎 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎 』\n╎│⋟ " + pushname + " \n╎│⋟ 𝐂𝐥𝐢𝐪𝐮𝐞 𝐧𝐨 𝐛𝐨𝐭𝐚̃𝐨 𝐚𝐛𝐚𝐢𝐱𝐨\n╎│⋟ © 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 𝐛𝐲 𝐍𝐞𝐳𝐮𝐤𝐨-𝐌𝐃\n┗⧐┅⃟┅┅⧏ ❀ ⧐┅┅⃟┅⧏┛\n  ",
            title: "",
            buttonText: "<❗> 𝐥𝐢𝐬𝐭𝐚 𝐦𝐞𝐧𝐮 <❗>",
            sections: vA44
          };
          const vVO1800 = vO1800;
          const vO1801 = {
            quoted: vVO27
          };
          sock.sendMessage(from, vVO1800, vO1801);
        }
        if (isCmd) {
          if (command == "play" || command == "play2" || command == "ytmp3" || command == "gtts" || command == "yta" || command == "play3") {
            sock.sendPresenceUpdate("recording", from);
          } else {
            sock.sendPresenceUpdate("composing", from);
          }
        }
        switch (vV62) {}
        if (isGroup && v66) {
          if (palavra.includes(v12)) {
            if (!isGroupAdmins) {
              const vO1802 = {
                quoted: vVO27
              };
              sock.sendMessage(from, {
                text: "SEM PALAVRÃO!! 😠!!"
              }, vO1802);
              setTimeout(() => {
                sock.groupParticipantsUpdate(from, [sender], "remove");
              }, 2000);
              reply("2");
              setTimeout(() => {
                reply("1");
              }, 1000);
              setTimeout(() => {
                const vO1803 = {
                  quoted: m
                };
                sock.sendMessage(from, {
                  text: "「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!"
                }, vO1803).catch(p422 => {
                  const vO1804 = {
                    quoted: m
                  };
                  sock.sendMessage(from, {
                    text: "InFelizmente, não sou um administrador, entt não posso te banir!!"
                  }, vO1804);
                });
              }, 0);
            } else {
              return reply("VOCÊ PODE " + pushname + " 😇");
            }
          }
        }
        if (!isCmd && v41 && isGroup) {
          if (isCmd || isUrl(v12)) {
            return;
          }
          if (budy.length >= 500) {
            return;
          }
          if (budy.includes("@55")) {
            return;
          }
          if (mek.key.fromMe) {
            return;
          }
          if (type == "extendedTextMessage" && prefix.includes(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) {
            return;
          }
          insert(type, mek);
          const v675 = await response(budy);
          console.log(v675);
          const vO1805 = {
            quoted: mek
          };
          if (v675) {
            sock.sendMessage(from, {
              text: v675,
              thumbnail: logo
            }, vO1805);
          }
        }
        if (isGroup && v40 && bady != undefined) {
          if (type == "imageMessage") {
            return;
          }
          if (type == "audioMessage") {
            return;
          }
          if (type == "stickerMessage") {
            return;
          }
          if (mek.key.fromMe) {
            return;
          }
          console.log(bady);
          muehe = await vF33(bady);
          console.log(muehe);
          reply(muehe);
        }
        if (body.startsWith(">")) {
          if (!isPremium) {
            return;
          }
          try {
            let v676 = await eval(body.slice(2));
            if (typeof v676 !== "string") {
              v676 = require("util").inspect(v676);
            }
            await reply(v676);
          } catch (e137) {
            await reply("erro");
          }
        }
        if (budy.match("Bot fecha o gp")) {
          if (!isPremium) {
            return reply("" + mess.owner);
          }
          reply("Ok mestre");
          sock.groupSettingUpdate(m.chat, "announcement").then;
        }
        if (budy.match("Nezuko limpa o chat ai")) {
          if (!isGroup) {
            throw "comando bloqueado🚫 \nentre no grupo para usá-lo:\n\nhttps://chat.whatsapp.com/DTsrSH5CVF66Xvn9Ow61Yn";
          }
          if (!v45) {
            throw "preciso ser adm primeiro";
          }
          let vA133 = [{
            buttonId: "@null",
            buttonText: {
              displayText: "obrigado por limpar meu chat Nezuko >3"
            },
            type: 1
          }];
          const vO1806 = {
            text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
            footer: "SEU CHAT FOI LIMPO PELA 𝙉𝙚𝙯𝙪𝙠𝙤 𝙗𝙤𝙩 𝙈𝘿",
            buttons: vA133,
            headerType: 2
          };
          let vVO1806 = vO1806;
          sock.sendMessage(m.chat, vVO1806);
        }
        if (budy.match("Bot abre o gp")) {
          if (!isPremium) {
            return reply("" + mess.owner);
          }
          reply("Ok mestre");
          sock.groupSettingUpdate(m.chat, "not_announcement").then;
        }
        if (budy.match("@5521964523665")) {
          if (mek.key.fromMe) {
            return;
          }
          var vA126 = ["jájá ele vai ver sua msg", "pare de marcar meu dono🖐😐", "só tô vendo vc marcar meu criador", "pare de marcar doido", "já já ele aparece, enquanto isso vai um café?☕️", "aguarde que logo logo ele estará aqui"];
          var v662 = vA126[Math.floor(Math.random() * vA126.length)];
          var vA127 = ["1", "2", "3", "@5521964523665"];
          var v663 = vA127[Math.floor(Math.random() * vA127.length)];
          reply("" + v662);
          sock.sendMessage(m.chat, {
            sticker: fs.readFileSync("./funções de cmd/imgs/menções/3.webp")
          }, {
            quoted: m
          });
        }
        if (budy.match("Ban")) {
          const vO1807 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/banido.webp")
          }, vO1807);
        }
        if (budy.match("Gay")) {
          const vO1808 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/gay.webp")
          }, vO1808);
        }
        if (budy.match("Pix")) {
          const vO1809 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/pix.webp")
          }, vO1809);
        }
        if (budy.match("Fdp")) {
          const vO1810 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/fdp.webp")
          }, vO1810);
        }
        if (budy.match("Arrombado")) {
          const vO1811 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/fdp.webp")
          }, vO1811);
        }
        if (budy.match("Makako")) {
          const vO1812 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/fdp.webp")
          }, vO1812);
        }
        if (budy.match("Macaco")) {
          const vO1813 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/fdp.webp")
          }, vO1813);
        }
        if (budy.match("Noia")) {
          const vO1814 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/fdp.webp")
          }, vO1814);
        }
        if (budy.match("Bot gay")) {
          const vO1815 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/botgay.webp")
          }, vO1815);
        }
        if (budy.match("Bot chato")) {
          const vO1816 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/botgay.webp")
          }, vO1816);
        }
        if (budy.match("Mama")) {
          const vO1817 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/mama.webp")
          }, vO1817);
        }
        if (budy.match("Matuê")) {
          const vO1818 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/matue.webp")
          }, vO1818);
        }
        if (budy.match("Festa")) {
          const vO1819 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/festa.webp")
          }, vO1819);
        }
        if (budy.match("Festinha")) {
          const vO1820 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/festa.webp")
          }, vO1820);
        }
        if (budy.match("Não gostei")) {
          const vO1821 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/naogostei.webp")
          }, vO1821);
        }
        if (budy.match("Gostei")) {
          const vO1822 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/naogostei.webp")
          }, vO1822);
        }
        if (budy.match("Oi Nezuko")) {
          const vO1823 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/oi.webp")
          }, vO1823);
        }
        if (budy.match("Boa tarde nezuko")) {
          const vO1824 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/boa tarde.webp")
          }, vO1824);
        }
        if (budy.match("Boa noite nezuko")) {
          const vO1825 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/boa noite.webp")
          }, vO1825);
        }
        if (budy.match("Vai se fude nezuko")) {
          const vO1826 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/fdp.webp")
          }, vO1826);
        }
        if (budy.match("Elon musk")) {
          const vO1827 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/gosar.webp")
          }, vO1827);
        }
        if (budy.match("Em pleno 2022")) {
          const vO1828 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/2022.webp")
          }, vO1828);
        }
        if (budy.match("Bot ruim")) {
          const vO1829 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/ruim.webp")
          }, vO1829);
        }
        if (budy.match("negao")) {
          const vO1830 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/figu60.webp")
          }, vO1830);
        }
        if (budy.match("real")) {
          const vO1831 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/figu44.webp")
          }, vO1831);
        }
        if (budy.match("xandao")) {
          const vO1832 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/figu12.webp")
          }, vO1832);
        }
        if (budy.match("oi bot")) {
          const vO1833 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/17.webp")
          }, vO1833);
        }
        if (budy.match("stutis")) {
          const vO1834 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/47.webp")
          }, vO1834);
        }
        if (budy.match("te amo")) {
          const vO1835 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/61.webp")
          }, vO1835);
        }
        if (budy.match("pato")) {
          const vO1836 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/figu9.webp")
          }, vO1836);
        }
        if (budy.match("cabeleleiro")) {
          const vO1837 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/figu11.webp")
          }, vO1837);
        }
        if (budy.match("fake")) {
          const vO1838 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/figu45.webp")
          }, vO1838);
        }
        if (budy.match("flamengo")) {
          const vO1839 = {
            quoted: m
          };
          sock.sendMessage(from, {
            sticker: fs.readFileSync("./sticker/figu14.webp")
          }, vO1839);
        }
        if (budy.includes("apagar") || budy.includes("Apagar") || budy.includes("apaga") || budy.includes("apagar") || budy.includes("Apaga")) {
          if (!isPremium) {
            return;
          }
          if (!quoted) {
            return;
          }
          let {
            chat: _0x2df3a2,
            fromMe: _0xbd6a3b,
            id: _0xab06f
          } = quoted;
          sock.sendMessage(from, {
            delete: {
              remoteJid: from,
              fromMe: false,
              id: m.quoted.id,
              participant: m.quoted.sender
            }
          });
        }
        if (budy.includes("Qual prefixo") || budy.includes("qual e seu prefixo") || budy.includes("nezuko seu prefixo") || budy.includes("Prefix")) {
          await reply("ᴀϙᴜɪ ᴇsᴛᴀ́ sᴇᴜ ᴘʀᴇғɪxᴏ:『 " + prefix + " 』");
        }
        if (body.startsWith(">")) {
          donoprincipal = "5521964523665@s.whatsapp.net";
          if (!donoprincipal.includes(sender) && !mek.key.fromMe) {
            return;
          }
          if (budy.includes("keyapi")) {
            return reply("fofinho, você hein😏");
          }
          try {
            console.log("[", color("EVAL", "silver"), "]", color(moment(mek.messageTimestamp * 1000).format("DD/MM HH:mm:ss"), "yellow"), color(budy));
            return reply(JSON.stringify(eval(budy.slice(2)), null, "\t"));
          } catch (e138) {
            reply(e138);
          }
        }
    }
  } catch (e139) {
    if (String(e139).includes("rate-overlimit")) { // ✅ Correção Bug 3: String(e139) em vez de String()
      console.log(color("Ignore esta mensagem..", "gray"));
    } else if (String(e139).includes("at async groupMetadata")) {
      console.log(color("Ignore esta mensagem..", "gray"));
    } else if (String(e139).includes("Session error")) {
      console.log(color("Ignore esta mensagem..", "gray"));
    } else if (String(e139).includes("rate-overlimit")) {
      console.log(color("Ignore esta mensagem..", "gray"));
    } else if (String(e139).includes("Bad MAC Error")) {
      console.log(color("Ignore esta mensagem..", "gray"));
    } else if (String(e139).includes("Key used already or never")) {
      console.log(color("Ignore esta mensagem..", "gray"));
    } else {
      console.log(color("" + e139, "red"));

    }
  }
};