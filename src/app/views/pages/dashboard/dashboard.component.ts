import { Component } from '@angular/core';
import { SummaryComponent } from './components/summary/summary.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [SummaryComponent, ChartsComponent, TableComponent],
  standalone: true,
})
export class DashboardComponent {}
