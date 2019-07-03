import { Pipe, PipeTransform } from '@angular/core';
import {Player} from "../list-players/model/Player";

@Pipe({
  name: 'playerNameFilter'
})
export class PlayerNameFilterPipe implements PipeTransform {

  transform(players: Player[], name: string): Player[] {
    if(name == null || name === ""){
      return players;
    }
    return players.filter(n => n.name.includes(name) || n.phone.includes(name));
  }

}
