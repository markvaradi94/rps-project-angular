import {Component, OnInit} from '@angular/core';
import {GameService} from "../game.service";
import {Player} from "../player.model";
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player2-hand',
  templateUrl: './player2-hand.component.html',
  styleUrls: ['./player2-hand.component.css']
})
export class Player2HandComponent implements OnInit {
  private chosenHand: string = '';
  player2: Player;

  constructor(private gameService: GameService, private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.player2 = this.playerService.getPlayer2();
  }

  onChooseHand(hand: string) {
    if (hand === 'rock') {
      this.chosenHand = 'ROCK';
    } else if (hand === 'paper') {
      this.chosenHand = 'PAPER';
    } else if (hand === 'scissors') {
      this.chosenHand = 'SCISSORS';
    } else {
      this.chosenHand = 'NONE';
    }
    this.afterChoice();
  }

  afterChoice() {
    this.gameService.addPlayer2(this.gameService.player2.username, this.chosenHand);
    console.log(localStorage.getItem('player2'));
  }
}
