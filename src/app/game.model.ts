import {Player} from "./player.model";
import {Injectable} from "@angular/core";

@Injectable()
export class Game {
  player1: Player;
  player2: Player;
  status: string;

}
