import { Game } from "./Game";
import { Player } from "./Player";

export type ValidGameBoardMark = 'x' | 'o';
export type AllGameBoardMarks = '' | 'x' | 'o';
export type GameBoardRow = [AllGameBoardMarks, AllGameBoardMarks, AllGameBoardMarks];
export type GameBoard = [GameBoardRow, GameBoardRow, GameBoardRow];
export type GamePosition = [number, number];

export class Board {
  static generateSimBoard(board: GameBoard, pos: GamePosition, mark: ValidGameBoardMark) {
    const newBoard: GameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        newBoard[i][j] = board[i][j];
      }
    }
    newBoard[pos[0]][pos[1]] = mark;
    const simBoard = new Board(newBoard);
    return simBoard;
  }

  public board: GameBoard;

  constructor(board?: GameBoard) {
    this.board = board ||
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  placeMark(pos: [number, number], player: Player) {
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

  winner(game: Game) {
    if (this.verticalWin(game.humanPlayer.mark) ||
      this.horizontalWin(game.humanPlayer.mark) ||
      this.diagonalWin(game.humanPlayer.mark)) {
      return game.humanPlayer;
    }
    return game.computerPlayer;
  }

  won(mark: ValidGameBoardMark) {
    if (!this.isEmpty() && (this.verticalWin(mark) || this.horizontalWin(mark) || this.diagonalWin(mark))) {
      return true;
    }
    return false;
  }

  tie() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.board[i][j]) {
          return false;
        }
      }
    }
    if (!(this.won('x') || this.won('o'))) {
      return true;
    }
  }

  gameOver() {
    if (this.won('x') || this.won('o') || this.tie()) {
      return true;
    }
    return false;
  }

  verticalWin(mark: ValidGameBoardMark) {
    if ((mark === this.board[0][0] && this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2]) ||
      (mark === this.board[1][0] && this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2]) ||
      (mark === this.board[2][0] && this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2])) {
      return true;
    }
    return false;
  }

  horizontalWin(mark: ValidGameBoardMark) {
    if ((mark === this.board[0][0] && this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0]) ||
      (mark === this.board[0][1] && this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1]) ||
      (mark === this.board[0][2] && this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2])) {
      return true;
    }
    return false;
  }

  diagonalWin(mark: ValidGameBoardMark) {
    if ((mark === this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) ||
      (mark === this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0])) {
      return true;
    }
    return false;
  }
}
