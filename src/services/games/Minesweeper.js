/**
 * Minesweeper.js — Campo Minado (5×5, 5 minas)
 * 
 * Coordenadas via letra+número: A1 a E5
 * A = linha 0, B = linha 1... | 1 = col 0, 2 = col 1...
 */
export default class Minesweeper {
    static ROWS = 5;
    static COLS = 5;
    static MINES = 5;

    static COL_LABELS = ['A', 'B', 'C', 'D', 'E'];
    static ROW_LABELS = ['1', '2', '3', '4', '5'];

    constructor(player) {
        this.player = player;
        this.startTime = Date.now();
        this.maxTime = 5 * 60 * 1000; // 5 minutos
        this.moves = 0;
        this.isOver = false;
        this.won = false;

        // Inicializa tabuleiros
        this._mines = this._placeMines();
        this._revealed = Array.from({ length: Minesweeper.ROWS }, () => Array(Minesweeper.COLS).fill(false));
        this._numbers = this._calcNumbers();
    }

    _placeMines() {
        const mines = Array.from({ length: Minesweeper.ROWS }, () => Array(Minesweeper.COLS).fill(false));
        let placed = 0;
        while (placed < Minesweeper.MINES) {
            const r = Math.floor(Math.random() * Minesweeper.ROWS);
            const c = Math.floor(Math.random() * Minesweeper.COLS);
            if (!mines[r][c]) {
                mines[r][c] = true;
                placed++;
            }
        }
        return mines;
    }

    _calcNumbers() {
        const nums = Array.from({ length: Minesweeper.ROWS }, () => Array(Minesweeper.COLS).fill(0));
        for (let r = 0; r < Minesweeper.ROWS; r++) {
            for (let c = 0; c < Minesweeper.COLS; c++) {
                if (this._mines[r][c]) {
                    nums[r][c] = -1;
                    continue;
                }
                let count = 0;
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < Minesweeper.ROWS && nc >= 0 && nc < Minesweeper.COLS && this._mines[nr][nc]) {
                            count++;
                        }
                    }
                }
                nums[r][c] = count;
            }
        }
        return nums;
    }

    /**
     * Revela uma célula. Retorna:
     * - `-2` Tempo esgotado
     * - `-1` Mina! Perdeu
     * - ` 0` Já revelado
     * - ` 1` Revelado com sucesso (continua)
     * - ` 2` Vitória! Todas as seguras reveladas
     */
    reveal(row, col) {
        if (Date.now() - this.startTime > this.maxTime) {
            this.isOver = true;
            return -2;
        }
        if (this._revealed[row][col]) return 0;

        this._revealed[row][col] = true;
        this.moves++;

        if (this._mines[row][col]) {
            this.isOver = true;
            return -1;
        }

        // Se zero vizinhos, revela em cascata
        if (this._numbers[row][col] === 0) {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    const nr = row + dr, nc = col + dc;
                    if (nr >= 0 && nr < Minesweeper.ROWS && nc >= 0 && nc < Minesweeper.COLS && !this._revealed[nr][nc]) {
                        this.reveal(nr, nc);
                    }
                }
            }
        }

        // Verificar vitória
        const totalSafe = Minesweeper.ROWS * Minesweeper.COLS - Minesweeper.MINES;
        let revealedSafe = 0;
        for (let r = 0; r < Minesweeper.ROWS; r++) {
            for (let c = 0; c < Minesweeper.COLS; c++) {
                if (this._revealed[r][c] && !this._mines[r][c]) revealedSafe++;
            }
        }
        if (revealedSafe >= totalSafe) {
            this.isOver = true;
            this.won = true;
            return 2;
        }

        return 1;
    }

    /**
     * Converte coordenada string (ex: "A3") para [row, col]
     * Retorna null se inválido
     */
    static parseCoord(input) {
        input = input.toUpperCase().trim();
        if (input.length < 2 || input.length > 3) return null;
        const letter = input[0];
        const num = input.slice(1);
        const row = Minesweeper.COL_LABELS.indexOf(letter);
        const col = parseInt(num) - 1;
        if (row === -1 || isNaN(col) || col < 0 || col >= Minesweeper.COLS) return null;
        return [row, col];
    }

    /** Renderiza o tabuleiro com emojis, mostrando ou não as minas */
    render(revealAll = false) {
        const numEmojis = ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣'];
        const colHeader = '     ' + Minesweeper.ROW_LABELS.join('  ');
        const rows = [];
        for (let r = 0; r < Minesweeper.ROWS; r++) {
            let line = `*${Minesweeper.COL_LABELS[r]}*  `;
            for (let c = 0; c < Minesweeper.COLS; c++) {
                if (revealAll && this._mines[r][c]) {
                    line += '💣 ';
                } else if (this._revealed[r][c]) {
                    if (this._mines[r][c]) {
                        line += '💥 ';
                    } else {
                        const n = this._numbers[r][c];
                        line += (n === 0 ? '🟩' : numEmojis[n]) + ' ';
                    }
                } else {
                    line += '⬛ ';
                }
            }
            rows.push(line.trimEnd());
        }
        return colHeader + '\n' + rows.join('\n');
    }

    get timeRemaining() {
        const elapsed = Date.now() - this.startTime;
        return Math.max(0, Math.floor((this.maxTime - elapsed) / 1000));
    }

    get safeRevealed() {
        let count = 0;
        for (let r = 0; r < Minesweeper.ROWS; r++)
            for (let c = 0; c < Minesweeper.COLS; c++)
                if (this._revealed[r][c] && !this._mines[r][c]) count++;
        return count;
    }

    get totalSafe() {
        return Minesweeper.ROWS * Minesweeper.COLS - Minesweeper.MINES;
    }
}
