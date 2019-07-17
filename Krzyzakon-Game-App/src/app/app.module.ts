import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlayerComponent } from './player/player.component';
import { PointsComponent } from './points/points.component';
import { FractionBattleComponent } from './fraction-battle/fraction-battle.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListPlayersComponent } from './list-players/list-players.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { ListComponent } from './list-players/list/list.component';
import { PlayerNameFilterPipe } from './shared/player-name-filter.pipe';
import { LowerCaseDirectiveDirective } from './shared/directives/lower-case-directive.directive';
import { UpperCaseDirectiveDirective } from './shared/directives/upper-case-directive.directive';
import { InputListDirectiveDirective } from './shared/directives/input-list-directive.directive';
import { UniquePlayerDirectiveDirective } from './shared/directives/unique-player-directive.directive';
import {ChartsModule} from "ng2-charts";
import 'chartjs-plugin-labels';
import { SpecialEventsComponent } from './special-events/special-events.component';

const appRoutes :Routes = [
  {
    path:'player',
    component:PlayerComponent
  },
  {
    path:'list',
    component:ListPlayersComponent
  },
  {
    path:'points',
    component:PointsComponent
  },
  {
    path:'top',
    component:TopPlayersComponent
  },
  {
    path:'battle',
    component:FractionBattleComponent
  },
  {
    path:'special',
    component:SpecialEventsComponent
  },
  {
    path:'',
    component:ListPlayersComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlayerComponent,
    PointsComponent,
    FractionBattleComponent,
    NotFoundComponent,
    ListPlayersComponent,
    TopPlayersComponent,
    ListComponent,
    PlayerNameFilterPipe,
    LowerCaseDirectiveDirective,
    UpperCaseDirectiveDirective,
    InputListDirectiveDirective,
    UniquePlayerDirectiveDirective,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
