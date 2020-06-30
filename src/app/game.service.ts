import {Injectable, Input} from "@angular/core";
import {Player} from "./player.model";
import {Subject} from "rxjs";
import {PlayerService} from "./player.service";
import {Game} from "./game.model";

@Injectable()
export class GameService {
  playerAdded = new Subject<Player[]>();
  games: Game[] = [];
  player1: Player;
  player2: Player;
  player1status: string;
  player2status: string;

  constructor(private playerService: PlayerService) {
  }

  addPlayer1(username: string, hand: string) {
    this.playerService.addPlayer1(new Player(username, hand));
    this.player1 = this.playerService.getPlayer1();
  }

  addPlayer2(username: string, hand: string) {
    this.playerService.addPlayer2(new Player(username, hand));
    this.player2 = this.playerService.getPlayer2();
  }

  player1Status(status: string) {
    this.player1status = status;
  }

  player2Status(status: string) {
    this.player2status = status;
  }
}
