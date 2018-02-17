import Player from 'util/tictactoe/Player.js';

class ComputerPlayer extends Player {
  constructor(mark) {
    super(mark, false);
  }

  choosePosition(game) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!game.board[i][j]) {
          game.makeMove([i, j]);
          return;
        }
      }
    }
  }
}

export default ComputerPlayer;
