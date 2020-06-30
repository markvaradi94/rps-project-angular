import {Component, OnInit, Output} from '@angular/core';
import {GameService} from "../game.service";
import {Player} from "../player.model";
import {PlayerService} from "../player.service";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Output() hand1: string = '';
  @Output() hand2: string = '';
  @Output() player1status = '';
  @Output() player2status = '';
  player1: Player;
  player2: Player;

  constructor(private gameService: GameService, private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.hand1 = this.playerService.getPlayer1().hand;
    this.hand2 = this.playerService.getPlayer2().hand;
    this.player1Status();
    this.player2Status();
    this.player1 = this.playerService.getPlayer1();
    this.player2 = this.playerService.getPlayer2();
  }

  player1Status() {
    let opponent = this.hand2;
    if (this.hand1 === 'ROCK' && opponent === 'SCISSORS' || this.hand1 === 'PAPER' && opponent === 'ROCK' ||
      this.hand1 === 'SCISSORS' && opponent === 'PAPER') {
      this.player1status = 'WINNER';
      this.gameService.player1.addWin();
    } else if (this.hand1 === opponent) {
      this.player1status = 'DRAW';
      this.gameService.player1.addDraw();
    } else {
      this.player1status = 'LOSER';
      this.gameService.player1.addLoss();
    }
    this.gameService.player1Status(this.player1status);
  }

  player2Status() {
    let opponent = this.hand1;
    if (this.hand2 === 'ROCK' && opponent === 'SCISSORS' || this.hand2 === 'PAPER' && opponent === 'ROCK' ||
      this.hand2 === 'SCISSORS' && opponent === 'PAPER') {
      this.player2status = 'WINNER';
      this.gameService.player2.addWin();
    } else if (this.hand2 === opponent) {
      this.player2status = 'DRAW';
      this.gameService.player2.addDraw();
    } else {
      this.player2status = 'LOSER';
      this.gameService.player2.addLoss();
    }
    this.gameService.player2Status(this.player2status);
  }
}
