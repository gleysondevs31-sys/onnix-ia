export default class Anagrama {
    constructor(player, originalWord) {
        this.player = player;
        this.originalWord = originalWord.toUpperCase();
        this.scrambledWord = this._shuffle(this.originalWord);
        this.startTime = Date.now();
        this.maxTime = 60000; // 60s max time
        this.turns = 0;
    }

    _shuffle(word) {
        let arr = word.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join(' ').toUpperCase();
    }

    /**
     * @returns {-2|-1|1}
     * - `-2` `Tempo Excedido / Timeout / Perdeu`
     * - `-1` `Palavra errada`
     * - ` 1` `Acertou a palavra / Ganhou`
     */
    turn(guess) {
        if (Date.now() - this.startTime > this.maxTime) {
            return -2;
        }

        this.turns++;
        guess = guess.toUpperCase();

        if (guess === this.originalWord) {
            return 1;
        }

        return -1;
    }

    get timeRemaining() {
        const elapsed = Date.now() - this.startTime;
        return Math.max(0, Math.floor((this.maxTime - elapsed) / 1000));
    }
}
