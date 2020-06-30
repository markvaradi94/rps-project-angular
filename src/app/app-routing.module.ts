import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StartComponent} from "./start/start.component";
import {Player1HandComponent} from "./player1-hand/player1-hand.component";
import {JoinGameComponent} from "./join-game/join-game.component";
import {Player2HandComponent} from "./player2-hand/player2-hand.component";
import {ResultComponent} from "./result/result.component";
import {EndGameComponent} from "./end-game/end-game.component";
import {GameFinishedComponent} from "./game-finished/game-finished.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'game/1/player/1/hand', component: Player1HandComponent},
  {path: 'player2Url', redirectTo: '/player/2'},
  {path: 'player/2', component: JoinGameComponent},
  {path: 'game/1/player/2/hand', component: Player2HandComponent},
  {path: 'result', component: ResultComponent},
  {path: 'end', component: EndGameComponent},
  {path: 'finish', component: GameFinishedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
