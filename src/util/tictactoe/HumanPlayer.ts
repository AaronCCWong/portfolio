import { ValidGameBoardMark } from './Board';
import { Player } from './Player';

export class HumanPlayer extends Player {
  constructor(mark: ValidGameBoardMark) {
    super(mark, true);
  }
}
