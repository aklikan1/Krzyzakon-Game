import {Component, OnInit, Output} from '@angular/core';
import {Player} from "../list-players/model/Player";
import {ApiService} from "../shared/api.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PointsPlayer} from "../list-players/model/PointsPlayer";
import {FractionPoints} from "./pointsModel/fraction-points";

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  playerName:string;
  playerPoints:number;
  fractionPoints:number;

  players: Player[] = [];
  player: Player;

  pointsPlayer: PointsPlayer = {
    id:null,
    points:0,
    player:null
  };

  pointsFraction: FractionPoints = {
    id:null,
    points:0,
    fraction:null
  };

  constructor(private apiService: ApiService) {}


  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.apiService.getAllPlayers().subscribe(
      res => {
        this.players = res;
      },
      err => {alert("An error occurred while download all players")}
    );
  }

  addPoints(playerName: string) {
    this.apiService.getPlayerByName(playerName).subscribe(
      res => {
        this.pointsPlayer.player = res;
        this.pointsPlayer.points=this.playerPoints;
        this.apiService.postPointsPlayer(this.pointsPlayer).subscribe();

        this.apiService.getFractionById(res.fraction.id).subscribe(
          res=>{
            this.pointsFraction.fraction = res;
            this.pointsFraction.points = this.fractionPoints;
            this.apiService.postPointsFraction(this.pointsFraction).subscribe();
          }
        );

        location.reload();
      },
      err => {alert("An error occurred while getPlayerByName in addPoints")}
    );
  }
}
