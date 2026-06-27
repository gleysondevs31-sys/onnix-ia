const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const WhatsAppName = (lid) => `./database/users/${lid}.json`

function pushnames() {
    const folderPath = './database/users/'
    const allData = []
    try {
        const files = fs.readdirSync(folderPath)
        const jsonFiles = files.filter(file => file.endsWith('.json'))
        jsonFiles.forEach(file => {
            const filePath = path.join(folderPath, file)
            const fileContent = fs.readFileSync(filePath, 'utf8')
            try {
                const jsonData = JSON.parse(fileContent)
                allData.push(jsonData)
            } catch(e) {}
        })
        return allData
    } catch (err) {
        return []
    }
}

const existsLidData = (lid, type = 'lid') => {
    if(type === 'lid') {
        return fs.existsSync(WhatsAppName(lid))
    } else if(type === 'jid') {
        let list = pushnames()
        return list.some(push => push.jid === lid)
    }
    return false
}

const userLid = (lid, type = 'lid') => {
    if(type === 'lid') {
        return JSON.parse(fs.readFileSync(WhatsAppName(lid)))
    } else if(type === 'jid') {
        let list = pushnames()
        return list.find(push => push.jid === lid) || {}
    }
    return {}
}

const convertWhatsAppUser = (testArray, type = 'jid') => {
    if(testArray == undefined) return
    let lidArray = Array.isArray(testArray) ? testArray : [testArray]
    let finish = []
    
    // Carrega cache de grupos para busca rápida
    const allGroups = fs.existsSync('./temp/grupos.json') ? JSON.parse(fs.readFileSync('./temp/grupos.json')) : []
    let onlyid = allGroups.flatMap(flat => flat.participants || [])
    let someid = [...new Map(onlyid.map(o => [o.jid, o])).values()]

    lidArray.forEach(lid => {
        let detection = lid.endsWith('@lid') ? 'lid' : 'jid'
        let datauser = detection === 'lid'
            ? someid.filter(m => m.lid === lid)
            : someid.filter(m => m.jid === lid)

        if(datauser.length > 0) {
            finish.push(type === 'lid' ? datauser[0].lid : datauser[0].jid)
        } else {
            let fromFile = existsLidData(lid, detection) ? userLid(lid, detection) : { jid: lid, lid: lid }
            finish.push(type === 'lid' ? fromFile.lid : fromFile.jid)
        }
    })
    return Array.isArray(testArray) ? finish : finish[0]
}

function saveUserID(data, lid) {
    let user = convertWhatsAppUser(lid, 'lid')
    if (!fs.existsSync('./database/users')) fs.mkdirSync('./database/users', { recursive: true });
    fs.writeFileSync(WhatsAppName(user), JSON.stringify(data, null, 2))
}

async function AddWhatsAppuser(conn, m, restart = 1000 * 60 * 60) {
    try {
        if (!m?.sender) return;
        
        let senderjid = m.sender;
        let senderlid = m.senderLid || (m.key?.participantLid); // Depende da versão do baileys
        
        // Se não tiver LID direto, tenta buscar via onWhatsApp (com cache temporário)
        if (!senderlid) {
            let infoWA = await conn.onWhatsApp(senderjid);
            if (infoWA?.length > 0) senderlid = infoWA[0]?.lid;
        }

        if (!senderjid || !senderlid) return;

        let jid = senderjid.split(':')[0].split('@')[0] + '@s.whatsapp.net';
        let lid = senderlid.split(':')[0].split('@')[0] + '@lid';
        let name = m.pushName || 'usuário';
        let dateNow = Date.now();

        let data = { jid, lid, name, date: dateNow + restart };

        if (!existsLidData(lid)) {
            console.log(chalk.green(`[+] NOVO USUÁRIO: ${jid} / ${lid}`));
            saveUserID(data, lid);
        } else {
            let old = userLid(lid);
            if (dateNow >= old.date) {
                saveUserID(data, lid);
            }
        }
    } catch (e) {}
}

module.exports = {
    pushnames,
    existsLidData,
    userLid,
    convertWhatsAppUser,
    saveUserID,
    AddWhatsAppuser
}
