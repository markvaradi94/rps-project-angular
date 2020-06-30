import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StartComponent} from './start/start.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Player1HandComponent} from './player1-hand/player1-hand.component';
import {JoinGameComponent} from './join-game/join-game.component';
import {Player2HandComponent} from './player2-hand/player2-hand.component';
import {ResultComponent} from './result/result.component';
import {EndGameComponent} from './end-game/end-game.component';
import {AppRoutingModule} from "./app-routing.module";
import {GameFinishedComponent} from './game-finished/game-finished.component';
import {GameService} from "./game.service";
import {PlayerService} from "./player.service";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    Player1HandComponent,
    JoinGameComponent,
    Player2HandComponent,
    ResultComponent,
    EndGameComponent,
    GameFinishedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GameService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
