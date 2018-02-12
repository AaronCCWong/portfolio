import Board from 'util/tictactoe/Board.js';
import ComputerPlayer from 'util/tictactoe/ComputerPlayer.js';
import HumanPlayer from 'util/tictactoe/HumanPlayer.js';

class Game {
  constructor() {
    this.tttboard = new Board();
    this.humanPlayer = new HumanPlayer('x');
    this.computerPlayer = new ComputerPlayer('o');
  }

  get board() {
    return this.tttboard.board;
  }

  makeMove(pos) {
    this.tttboard.placeMark(pos, this.humanPlayer);
    if (this.tttboard.won()) {
      return;
    }
    this.computerPlayer.choosePosition(this);
  }
}

export default Game;
