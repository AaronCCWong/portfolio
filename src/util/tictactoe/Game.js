import Board from 'util/tictactoe/Board.js';
import ComputerPlayer from 'util/tictactoe/ComputerPlayer.js';
import HumanPlayer from 'util/tictactoe/HumanPlayer.js';

class Game {
  constructor() {
    this.tttboard = new Board();
    this.humanPlayer = new HumanPlayer('x');
    this.computerPlayer = new ComputerPlayer('o');
    this.currentPlayer = this.humanPlayer;
  }

  get board() {
    return this.tttboard.board;
  }

  get won() {
    return this.tttboard.won();
  }

  makeMove(pos) {
    this.tttboard.placeMark(pos, this.currentPlayer);
    if (this.won) {
      return;
    }
    if (this.currentPlayer === this.humanPlayer) {
      this.currentPlayer = this.computerPlayer;
      this.computerPlayer.choosePosition(this);
      this.currentPlayer = this.humanPlayer;
    }
  }
}

export default Game;
