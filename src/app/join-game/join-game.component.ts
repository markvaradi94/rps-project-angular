import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  @Input() player2Name: string = '';

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
  }

  onAddPlayer2() {
    this.gameService.addPlayer2(this.player2Name, '');
  }

}
