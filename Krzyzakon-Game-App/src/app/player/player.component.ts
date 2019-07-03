import {Component, OnInit} from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Player} from "../list-players/model/Player";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players:Player[] = [];

  model:PlayerViewModel = {
    name:'',
    phone:null,
    fraction:null
  };

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.apiService.getAllPlayers().subscribe(
      res => {this.players = res;},
      err => {alert('An error occurred while getAllPlayers');}
    );
  }

  addPlayer() : void {
    this.apiService.getFractionById(this.model.fraction).subscribe(
      res => {
        this.model.fraction = res;
        this.apiService.postNewPlayer(this.model).subscribe(
          res => {
            location.reload();
          },
          err => {
            alert("Error while add player");
          }
        );
      },
      err => {
        alert("Error on getFractionById")
      }
    );


  }
}

export interface PlayerViewModel {
  name:string;
  phone:string;
  fraction:any;
}
