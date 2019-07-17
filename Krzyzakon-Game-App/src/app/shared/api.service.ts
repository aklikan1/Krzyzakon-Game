import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {PlayerViewModel} from "../player/player.component";
import {Player} from "../list-players/model/Player";
import {Fraction} from "../fraction-battle/Model/fraction";
import {PointsPlayer} from "../list-players/model/PointsPlayer";
import {FractionPoints} from "../points/pointsModel/fraction-points";
import {AllFractionPoints} from "../points/pointsModel/all-fraction-points";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "http://192.168.43.197:8080/api";
  private ALL_PLAYERS_URL = `${this.BASE_URL}\\player\\all`;
  private ALL_PLAYERS_BY_FRACTION_URL = `${this.BASE_URL}\\player\\byFraction\\`;
  private PLAYER_BY_ID_URL = `${this.BASE_URL}\\player\\`;
  private PLAYER_BY_NAME_URL = `${this.BASE_URL}\\player\\name\\`;
  private ADD_NEW_PLAYER_URL = `${this.BASE_URL}\\player\\save`;
  private DELETE_PLAYER_URL = `${this.BASE_URL}\\player\\delete\\`;
  private FRACTION_URL = `${this.BASE_URL}\\fraction`;
  private FRACTION_ID_URL = `${this.FRACTION_URL}\\`;
  private PLAYER_POINTS_ALL_URL = `${this.BASE_URL}\\points\\player`;
  private TOP_10_POINTS_PLAYERS_URL = `${this.BASE_URL}\\points\\player\\top10`;
  private ADD_POINTS_PLAYER_URL = `${this.BASE_URL}\\points\\player`;
  private ADD_POINTS_FRACTION_URL = `${this.BASE_URL}\\points\\fraction`;
  private FRACTION_POINTS_GROUP_URL = `${this.BASE_URL}\\points\\fraction\\battle`;

  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllPlayers() : Observable<Player[]> {
    return this.http.get<Player[]>(this.ALL_PLAYERS_URL);
  }

  getAllPlayerByFraction(id:number) : Observable<Player[]> {
    return this.http.get<Player[]>(this.ALL_PLAYERS_BY_FRACTION_URL+id);
  }

  getPlayerById(id:number) : Observable<Player> {
    return this.http.get<Player>(this.PLAYER_BY_ID_URL+id);
  }

  getPlayerByName(name:string) : Observable<Player>{
    return this.http.get<Player>(this.PLAYER_BY_NAME_URL+name);
  }

  postNewPlayer(player: PlayerViewModel) : Observable<PlayerViewModel> {
    return this.http.post<PlayerViewModel>(this.ADD_NEW_PLAYER_URL, player);
  }

  deletePlayer (id:number) : Observable<any> {
    return this.http.delete(this.DELETE_PLAYER_URL + id);
  }

  getAllFractions() : Observable<Fraction[]> {
    return this.http.get<Fraction[]>(this.FRACTION_URL);
  }

  getFractionById (id:number) : Observable<Fraction> {
    return this.http.get<Fraction>(this.FRACTION_ID_URL + id);
  }

  getAllPointsPlayer () : Observable<PointsPlayer[]> {
    return this.http.get<PointsPlayer[]>(this.PLAYER_POINTS_ALL_URL);
  }

  getTop10PlayersByPoints() :Observable<any> {
    return this.http.get<any>(this.TOP_10_POINTS_PLAYERS_URL);
  }

  postPointsPlayer(pointsPlayer: PointsPlayer) : Observable <any> {
    return this.http.post<PointsPlayer>(this.ADD_POINTS_PLAYER_URL, pointsPlayer);
  }

  postPointsFraction(pointsFraction: FractionPoints) : Observable <any> {
    return this.http.post<FractionPoints>(this.ADD_POINTS_FRACTION_URL, pointsFraction)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  getPointsFractionGroupByFraction() : Observable<AllFractionPoints[]>{
    return this.http.get<AllFractionPoints[]>(this.FRACTION_POINTS_GROUP_URL);
  }
}
