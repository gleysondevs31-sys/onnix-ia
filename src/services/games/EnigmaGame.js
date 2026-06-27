/**
 * EnigmaGame.js — Serviço de Enigmas e Charadas
 * 
 * Banco de enigmas adaptado do bot-model Nezuko_V5.
 * Respostas são normalizadas (sem acento, sem case).
 */

const ENIGMAS = [
    {
        charada: '🕯️ Imagine que você está em uma sala escura. Nela há um fósforo, uma lâmpada de querosene, uma vela e uma lareira. O que você acenderia *primeiro*?',
        resposta: 'fosforo',
        dica: '💡 A resposta é o que você usa para acender tudo o mais...'
    },
    {
        charada: '"Se você me tem, quer me compartilhar; se você me compartilha, você me perdeu. O que eu sou?"',
        resposta: 'segredo',
        dica: '🤫 É algo que as pessoas guardam a sete chaves...'
    },
    {
        charada: '🐒 Um macaco, um esquilo e um pássaro estão correndo para o topo de um coqueiro. Quem pegará a banana primeiro?',
        resposta: 'nenhum',
        dica: '🌴 Preste atenção no que está no topo do coqueiro...'
    },
    {
        charada: '🌬️ Eu falo, mas não tenho boca. Ouço, mas não tenho ouvidos. Não tenho corpo, mas vivo com o vento. Quem sou eu?',
        resposta: 'eco',
        dica: '🏔️ Acontece muito em montanhas e cavernas...'
    },
    {
        charada: '⏳ Quanto mais ela sobe, mais linda fica. Engana algumas pessoas. Jamais para. Quem sou eu?',
        resposta: 'idade',
        dica: '🎂 Todo aniversário você ganha uma...'
    },
    {
        charada: '🌞 Tenho apenas uma cor, mas posso ter vários tamanhos. Estou presente quando faz sol, mas na chuva, nunca apareço. Quem sou eu?',
        resposta: 'sombra',
        dica: '☀️ Você me carrega para todo canto em dias ensolarados...'
    },
    {
        charada: '🌑 Quanto mais houver de mim, menos você verá. Quem sou eu?',
        resposta: 'escuridao',
        dica: '🕯️ O que faz você ligar a luz?'
    },
    {
        charada: '🧽 Sou cheio de buracos, mas ainda assim consigo reter muita água. Quem sou eu?',
        resposta: 'esponja',
        dica: '🫧 Você pode me usar para lavar a louça...'
    },
    {
        charada: '⚓ Quando precisam de mim, me atiram longe. Quando não precisam mais, me trazem de volta. Quem sou eu?',
        resposta: 'ancora',
        dica: '⛵ Os barcos não ficam sem mim...'
    },
    {
        charada: '📝 Nós podemos machucar sem fazer um único movimento. Podemos envenenar sem tocar. Carregamos verdade e mentira. Quem somos nós?',
        resposta: 'palavras',
        dica: '🗣️ Estou usando elas agora mesmo...'
    },
    {
        charada: '✂️ Ponha os dedos nos meus olhos que eu abrirei minhas potentes mandíbulas e devorarei tudo o que vier pela frente. Quem sou eu?',
        resposta: 'tesoura',
        dica: '🪡 Muito útil para cortar papel e tecido...'
    },
    {
        charada: '💰 Quem me faz não diz que faz. Quem me tem não sabe que tem. Quem sabe não me quer ter. Quem sou eu?',
        resposta: 'dinheiro falso',
        dica: '🏦 Tem a ver com falsificação...'
    },
    {
        charada: '🖐️ O que você pode segurar com a mão *esquerda*, mas jamais com a *direita*?',
        resposta: 'cotovelo direito',
        dica: '💪 Pense no seu próprio corpo...'
    },
    {
        charada: '🌊 Sempre entra pela porta mas nunca chega a entrar. Bate na sua cara mas você nunca o vê. O que é?',
        resposta: 'vento',
        dica: '🍃 Você sente mas não consegue pegar...'
    },
    {
        charada: '🔤 Posso guardar tudo dentro de mim: o vento, as florestas, o mundo, o universo e até Deus — tudo o que você imaginar. Quem sou eu?',
        resposta: 'alfabeto',
        dica: '📚 Com meus blocos você constrói todas as palavras...'
    }
];

function normalize(str) {
    return str.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9 ]/g, '')
        .trim();
}

export default class EnigmaGame {
    constructor(player) {
        this.player = player;
        const idx = Math.floor(Math.random() * ENIGMAS.length);
        this._enigma = ENIGMAS[idx];
        this.startTime = Date.now();
        this.maxTime = 90 * 1000; // 90 segundos
        this.usedHint = false;
        this.attempts = 0;
    }

    get charada() { return this._enigma.charada; }
    get dica() { return this._enigma.dica; }

    /**
     * Tenta responder ao enigma.
     * @returns {-2|-1|0|1}
     * - `-2` Tempo esgotado
     * - ` 0` Resposta errada
     * - ` 1` Resposta correta
     */
    guess(answer) {
        if (Date.now() - this.startTime > this.maxTime) return -2;
        this.attempts++;
        const norm = normalize(answer);
        const expected = normalize(this._enigma.resposta);
        // Aceita resposta exata ou se contém a resposta esperada
        if (norm === expected || norm.includes(expected)) return 1;
        return 0;
    }

    get timeRemaining() {
        const elapsed = Date.now() - this.startTime;
        return Math.max(0, Math.floor((this.maxTime - elapsed) / 1000));
    }

    get correctAnswer() { return this._enigma.resposta; }
}
