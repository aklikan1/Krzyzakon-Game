import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../shared/navbar.service";
import {Tournament} from "./model/tournament";

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  public currentTime: Date = new Date();
  tournaments: Tournament[] = [];

  constructor(public nav: NavbarService) {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.nav.hide();
    this.allTournaments();
  }

  allTournaments() {
    this.tournaments.push(SpecialEventsComponent.createTournament(
      "Turniej Splendor",
      "13:00 - 15:30",
      "W komnacie gier planszowych odbędzie się wspaniały turniej w grze Splendor!\n" +
      "Wciel się w renesansowego kupca, który próbuje nabyć kopalnie klejnotów, środki transportu, " +
      "sklepy - wszystko to w celu zdobycia jak największego prestiżu!",
      13*60,
      10*60));

    this.tournaments.push(SpecialEventsComponent.createTournament(
      "Turniej Elekt",
      "16:00 - 19:30",
      "W komnacie gier planszowych odbędzie się wspaniały turniej w grze Elekt!\n" +
      "Zanurz się w świat szalonych fantazji i zakazanych używek. Poznaj życie Dominatu z innej, " +
      "kolorowej strony - jako świat groteskowych rozrywek i hipnotyzującego piękna.",
      16*60,
      13*60));

    this.tournaments.push(SpecialEventsComponent.createTournament(
      "Turniej Munchkin",
      "19:30 - 21:00",
      "W komnacie gier planszowych odbędzie się wspaniały turniej w grze Munchkin!\n" +
      "Schodzisz do podziemi. Zabijasz wszystko, co spotkasz na swojej drodze. Oszukujesz kumpli i kradniesz ich ekwipunek. " +
      "Zabierasz tyle skarbów, ile się da i zwiewasz. Przyznaj, że to kochasz!",
      19*60+30,
      16*60));
  }

  static createTournament(name: string, date: string, desc: string, startTime: number,
                          beforeEventTime:number) : Tournament {
    return {
      name: name,
      date: date,
      description: desc,
      startTime: startTime,
      beforeEventTime: beforeEventTime,
    };
  }
}
