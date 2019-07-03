import {Component, OnInit} from '@angular/core';
import {Player} from "./model/Player";
import {ApiService} from "../shared/api.service";
import {Fraction} from "../fraction-battle/Model/fraction";

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  listPlayers: Player[] = [];
  fractions: Fraction[] = [];
  selectedFraction: Fraction;
  searchName: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllPlayers();
    this.getAllFractions();
  }

  public getAllPlayers(){
    this.apiService.getAllPlayers().subscribe(
      res => {
        this.listPlayers = res;
      },
      err => {
        alert("An error has occurred")
      }
    );
  }

  public getAllFractions() {
    this.apiService.getAllFractions().subscribe(
      res => {
        this.fractions = res;
      },
      err => {
        alert("An error has occured on GetAllFractions")
      }
    );
  }

  updatePlayer(updatePlayer: Player) {
    this.apiService.postNewPlayer(updatePlayer).subscribe(
      res => {
      },
      err => {
        alert("An error has occurred while update the player")
      }
    );
  }

  deletePlayer(player: Player) {
    if(confirm("Czy usunac uczestnika?")){
      this.apiService.deletePlayer(player.id).subscribe(
        res => {
          let indexOfPlayer = this.listPlayers.indexOf(player);
          this.listPlayers.splice(indexOfPlayer, 1);
        },
        err => {
          alert("Could not delete player")
        }
      );
    }
  }

  selectFraction(fraction: Fraction) {
    this.selectedFraction = fraction;
    this.apiService.getAllPlayerByFraction(fraction.id).subscribe(
      res => {
        this.listPlayers = res;
      },
      err => {
        alert("An error has occurred on getAllPlayerByFraction");
      }
    );
  }

  selectAllFraction() {
    this.selectedFraction = null;
    this.getAllPlayers();
  }
}
