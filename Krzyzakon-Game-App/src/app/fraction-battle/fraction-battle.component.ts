import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../shared/navbar.service";
import {AllFractionPoints} from "../points/pointsModel/all-fraction-points";
import {ApiService} from "../shared/api.service";
import * as Chart from 'chart.js';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-fraction-battle',
  templateUrl: './fraction-battle.component.html',
  styleUrls: ['./fraction-battle.component.css']
})
export class FractionBattleComponent implements OnInit {

  allFractionPoints: AllFractionPoints[] = [];
  fractionPointsChart: Chart;
  private update: Subscription;

  constructor(public nav: NavbarService, private apiService: ApiService) { }

  ngOnInit() {
    this.nav.hide();
    this.update = interval(1000).subscribe(
      (val) => {this.getAllFractionPoints();}
    );
    this.getAllFractionPoints();
  }

  getAllFractionPoints() {
    this.apiService.getPointsFractionGroupByFraction().subscribe(
      res => {
        this.allFractionPoints = res;
        console.log(res);
        let teutonicPoints = this.allFractionPoints[0].points;
        let polishPoints = this.allFractionPoints[1].points;
        this.createFractionPointsChart(teutonicPoints, polishPoints);
      },
      err => {alert("An error while download data getAllFractionPoints")}
    );
  }

  createFractionPointsChart(teutonicPoints: number, polishPoints: number) {
    this.fractionPointsChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        datasets: [{
          data: [teutonicPoints, polishPoints],
          backgroundColor: ['black', 'red'],
        }],
        labels: [
          'Zakon Krzyzacki', 'Krolestwo Polskie'
        ]
      },
      options: {
        animation: {
          animateRotate: false
        },
        responsive: true,
        legend: {
          display: true,
          labels: {
            fontSize: 25
          }
        },
        plugins: {
          labels: {
            render: 'percentage',
            fontColor: ['white', 'white'],
            precision: 2,
            fontSize: 50
          }
        }
      }
    });
  }

}
