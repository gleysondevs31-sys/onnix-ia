export default class TicTacToe {
    constructor(playerX, playerO) {
        this.playerX = playerX;
        this.playerO = playerO;
        this._currentTurn = false;
        this._x = 0;
        this._o = 0;
        this.turns = 0;
    }

    get board() {
        return this._x | this._o;
    }

    get currentTurn() {
        return this._currentTurn ? this.playerO : this.playerX;
    }

    get enemyTurn() {
        return this._currentTurn ? this.playerX : this.playerO;
    }

    static check(state) {
        for (let combo of [7, 56, 73, 84, 146, 273, 292, 448]) {
            if ((state & combo) === combo) return !0;
        }
        return !1;
    }

    /**
     * @param player `0` is `X`, `1` is `O`
     * 
     * - `-3` `Game Ended`
     * - `-2` `Invalid`
     * - `-1` `Invalid Position`
     * - ` 0` `Position Occupied`
     * - ` 1` `Sucess`
     */
    turn(player = 0, index = 0) {
        if (this.board === 511) return -3;
        
        let pos = 0;
        if (index < 0 || index > 8) return -1;
        pos = 1 << index;
        
        // Fix: was using XOR (^) which is unreliable for boolean vs int comparison
        if ((this._currentTurn ? 1 : 0) !== player) return -2;
        if (this.board & pos) return 0;
        
        if (this._currentTurn) {
            this._o |= pos;
        } else {
            this._x |= pos;
        }
        
        this._lastPlayer = this._currentTurn ? this.playerO : this.playerX;
        this._currentTurn = !this._currentTurn;
        this.turns++;
        return 1;
    }

    /** Returns the JID of the player who made the last move */
    get lastPlayer() {
        return this._lastPlayer || null;
    }

    static render(boardX = 0, boardO = 0) {
        let x = parseInt(boardX.toString(2), 4);
        let y = parseInt(boardO.toString(2), 4) * 2;
        let arr = [...(x + y).toString(4).padStart(9, '0')].reverse();
        return arr.map((value, index) => value === '1' ? 'X' : value === '2' ? 'O' : (index + 1));
    }
    
    renderEmojis() {
        const board = TicTacToe.render(this._x, this._o);
        const mapPos = (val, i) => {
            if (val === 'X') return '❌';
            if (val === 'O') return '⭕';
            const numEmojis = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣'];
            return numEmojis[i];
        };
        return `
 ${mapPos(board[0], 0)} │ ${mapPos(board[1], 1)} │ ${mapPos(board[2], 2)}
 ───────────
 ${mapPos(board[3], 3)} │ ${mapPos(board[4], 4)} │ ${mapPos(board[5], 5)}
 ───────────
 ${mapPos(board[6], 6)} │ ${mapPos(board[7], 7)} │ ${mapPos(board[8], 8)}
`;
    }

    get winner() {
        let x = TicTacToe.check(this._x);
        let o = TicTacToe.check(this._o);
        return x ? this.playerX : o ? this.playerO : false;
    }
    
    get isDraw() {
        return this.board === 511 && !this.winner;
    }
}
