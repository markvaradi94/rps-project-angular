import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import {FormsModule} from "@angular/forms";
import { Player1HandComponent } from './player1-hand/player1-hand.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { Player2HandComponent } from './player2-hand/player2-hand.component';
import { ResultComponent } from './result/result.component';
import { EndGameComponent } from './end-game/end-game.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    Player1HandComponent,
    JoinGameComponent,
    Player2HandComponent,
    ResultComponent,
    EndGameComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
