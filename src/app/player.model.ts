export class Player {
  public username: string;
  public hand: string;
  public wins = 0;
  public losses = 0;
  public draws = 0;

  constructor(username: string, hand: string) {
    this.username = username;
    this.hand = hand;
  }

  addWin() {
    this.wins++;
  }

  addLoss() {
    this.losses++;
  }

  addDraw() {
    this.draws++;
  }
}
