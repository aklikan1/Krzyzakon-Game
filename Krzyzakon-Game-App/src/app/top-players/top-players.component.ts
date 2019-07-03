import { Component, OnInit } from '@angular/core';
import {PointsPlayerList} from "./model/points-player-list";
import {ApiService} from "../shared/api.service";
import {Player} from "../list-players/model/Player";

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {

  topTenPlayersList: PointsPlayerList[] = [];
  players: Player[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTenTopPlayersList();
  }

  getTenTopPlayersList() {
    this.apiService.getTop10PlayersByPoints().subscribe(
      res => {
        this.topTenPlayersList = res;
        let index = 0;
        for (let player of this.topTenPlayersList) {
          this.getPlayerByPlayerId(player.name, index);
          index++;
        }
      },
      err => {
        alert("An error occurred on getTenTopPlayersList")
      }
    );
  }

  getPlayerByPlayerId (id: number, index:number){
    this.apiService.getPlayerById(id).subscribe(
      res => {
          this.topTenPlayersList[index].name = res.name;
          this.topTenPlayersList[index].fraction = res.fraction.id;
        }
      );
  }
}
