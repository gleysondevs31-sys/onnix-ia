export default class Forca {
    constructor(player, word) {
        this.player = player;
        this.word = word.toUpperCase();
        this.guessedChars = [];
        this.lives = 6;
        this.turns = 0;
    }

    /**
     * @returns {-3|-2|-1|0|1}
     * - `-3` `Sucesso, Letra revelou a palavra toda / Ganhou`
     * - `-2` `Game Over / Enforcado / Perdeu`
     * - `-1` `Sucesso, Letra incorreta (Ainda tem vidas)`
     * - ` 0` `Letra ja tentada antes`
     * - ` 1` `Sucesso, Letra correta (Ainda falta letras)`
     * - ` 2` `Sucesso, Chutou palavra incorreta (Perdeu 1 vida)`
     */
    turn(guess) {
        guess = guess.toUpperCase();
        if (guess.length > 1) {
            // Chutou palavra inteira
            if (guess === this.word) {
                return -3;
            } else {
                this.lives--;
                if (this.lives <= 0) return -2;
                return 2;
            }
        }

        const letter = guess[0];
        if (this.guessedChars.includes(letter)) return 0;

        this.guessedChars.push(letter);
        this.turns++;

        if (this.word.includes(letter)) {
            // Verifica se completou
            const isWin = !this.word.split('').some(char => !this.guessedChars.includes(char));
            if (isWin) return -3;
            return 1;
        } else {
            this.lives--;
            if (this.lives <= 0) return -2;
            return -1;
        }
    }

    renderWord() {
        return this.word.split('').map(char => this.guessedChars.includes(char) ? char : '_').join(' ');
    }

    renderHangman() {
        const states = [
            `\n  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========`, // 0 lives
            `\n  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========`, // 1 life
            `\n  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========`, // 2 lives
            `\n  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========`, // 3 lives
            `\n  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========`, // 4 lives
            `\n  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========`, // 5 lives
            `\n  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========`  // 6 lives
        ];
        return states[this.lives];
    }
}
