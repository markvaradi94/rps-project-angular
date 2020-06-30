import {Component, OnInit} from '@angular/core';
import {GameService} from "../game.service";
import {Player} from "../player.model";
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {
  player1: Player;
  player2: Player;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.player1 = this.playerService.getPlayer1();
    this.player2 = this.playerService.getPlayer2();
  }

}
