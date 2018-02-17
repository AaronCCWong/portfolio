import Player from 'util/tictactoe/Player.js';
import Board from 'util/tictactoe/Board.js';

class ComputerPlayer extends Player {
  constructor(mark) {
    super(mark, false);
    this.humanMark = mark === 'x' ? 'o' : 'x';
  }

  choosePosition(game) {
    const bestMove = this.minimax(game.board);
    game.makeMove(bestMove.pos);
  }

  minimax(board) {
    let bestMove = { utility: Number.NEGATIVE_INFINITY };
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!board[i][j]) {
          const simulatedBoard = Board.generateSimBoard(
            board,
            [i, j],
            this.mark
          );
          const move = this.minVal(simulatedBoard);
          if (move > bestMove.utility) {
            bestMove.utility = move;
            bestMove.pos = [i, j];
          }
        }
      }
    }
    return bestMove;
  }

  minVal(board) {
    if (board.gameOver()) {
      if (board.won(this.mark)) {
        return 1;
      } else if (board.tie()) {
        return 0;
      }
      return -1;
    }
    let utility = Number.MAX_VALUE;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!board.board[i][j]) {
          const simulatedBoard = Board.generateSimBoard(
            board.board,
            [i, j],
            this.humanMark
          );
          const move = this.maxVal(simulatedBoard);
          if (move < utility) {
            utility = move;
          }
        }
      }
    }
    return utility;
  }

  maxVal(board) {
    if (board.gameOver()) {
      if (board.won(this.humanMark)) {
        return -1;
      } else if (board.tie()) {
        return 0;
      }
      return 1;
    }
    let utility = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!board.board[i][j]) {
          const simulatedBoard = Board.generateSimBoard(
            board.board,
            [i, j],
            this.mark
          );
          const move = this.minVal(simulatedBoard);
          if (move > utility) {
            utility = move;
          }
        }
      }
    }
    return utility;
  }
}

export default ComputerPlayer;
