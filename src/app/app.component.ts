import {Component, OnInit} from '@angular/core';
import {Player} from "./player.model";
import {GameService} from "./game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'rps-app';
}
