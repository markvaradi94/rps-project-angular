import {Injectable} from "@angular/core";
import {Player} from "./player.model";

@Injectable()
export class PlayerService {

  private players: Player[] = [];
  player1: Player;
  player2: Player;

  getAllPlayers() {
    return this.players.slice();
  }

  getPlayer1() {
    return this.player1;
  }

  getPlayer2() {
    return this.player2;
  }

  addPlayer1(player: Player) {
    this.player1 = new Player(player.username, player.hand);
    localStorage.setItem('player1', JSON.stringify(this.player1));
    this.players.push(this.player1);
  }

  addPlayer2(player: Player) {
    this.player2 = new Player(player.username, player.hand);
    localStorage.setItem('player2', JSON.stringify(this.player2));
    this.players.push(this.player2);
  }

}
