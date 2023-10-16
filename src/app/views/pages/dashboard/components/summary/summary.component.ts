import { Component, OnInit } from '@angular/core';
import { data } from 'src/data/mockdata';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: true,
})
export class SummaryComponent implements OnInit {
  public TO = data.Operators;

  public TOcount = Object.keys(this.TO).length;

  public jeepCount;

  public paoCount;

  ngOnInit(): void {}

  constructor() {
    this.jeepCount =
      this.TO[1].Jeepney_Count +
      this.TO[2].Jeepney_Count +
      this.TO[3].Jeepney_Count +
      this.TO[4].Jeepney_Count +
      this.TO[5].Jeepney_Count +
      this.TO[6].Jeepney_Count +
      this.TO[7].Jeepney_Count +
      this.TO[8].Jeepney_Count;

    this.paoCount = 1;
  }
}
