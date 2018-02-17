class Board {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  placeMark(pos, player) {
    this.board[pos[0]][pos[1]] = player.mark;
  }

  isEmpty() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  won() {
    if (!this.isEmpty() && (this.verticalWin() || this.horizontalWin() || this.diagonalWin())) {
      return true;
    }
    return false;
  }

  verticalWin() {
    if ((this.board[0][0] && this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2]) ||
      (this.board[1][0] && this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2]) ||
      (this.board[2][0] && this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2])) {
      return true;
    }
    return false;
  }

  horizontalWin() {
    if ((this.board[0][0] && this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0]) ||
      (this.board[0][1] && this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1]) ||
      (this.board[0][2] && this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2])) {
      return true;
    }
    return false;
  }

  diagonalWin() {
    if ((this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) ||
      (this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0])) {
      return true;
    }
    return false;
  }
}

export default Board;
