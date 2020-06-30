import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../game.service";
import {Player} from "../player.model";
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player1-hand',
  templateUrl: './player1-hand.component.html',
  styleUrls: ['./player1-hand.component.css']
})
export class Player1HandComponent implements OnInit {
  @Input() public chosenHand = '';
  player1: Player;

  constructor(private gameService: GameService, private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.player1 = this.playerService.getPlayer1();
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
  }

  onInvitePlayer() {
    this.gameService.addPlayer1(this.gameService.player1.username, this.chosenHand);
    console.log(localStorage.getItem('player1'));
  }
}
