import {Component, Injectable, Input, OnInit} from '@angular/core';
import {GameService} from "../game.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

@Injectable()
export class StartComponent implements OnInit {
  @Input() player1username: string = '';

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
  }

  onAddPlayer1() {
    this.gameService.addPlayer1(this.player1username, '');
  }

}
