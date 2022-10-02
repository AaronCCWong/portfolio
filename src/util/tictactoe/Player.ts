export class Player {
  public mark: 'x' | 'o';
  public humanPlayer: boolean;

  constructor(mark: 'x' | 'o', humanPlayer: boolean) {
    this.mark = mark;
    this.humanPlayer = humanPlayer;
  }
}
