import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from "../model/Player";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() listPlayers:Player[];
  @Input() searchName:string;
  @Output() playerUpdated : EventEmitter<Player> = new EventEmitter<Player>();
  @Output() playerDeleted: EventEmitter<Player> = new EventEmitter<Player>();

  constructor() { }

  ngOnInit() {
  }

  updatePlayer(player: Player) {
    this.playerUpdated.emit(player);
  }

  deletePlayer(player: Player) {
    this.playerDeleted.emit(player);
  }
}
