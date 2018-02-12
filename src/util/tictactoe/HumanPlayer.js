import Player from 'util/tictactoe/Player.js';

class HumanPlayer extends Player {
  constructor(mark) {
    super(mark, true);
  }
}

export default HumanPlayer;
