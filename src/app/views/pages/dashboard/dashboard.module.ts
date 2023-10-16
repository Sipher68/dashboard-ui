import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [DashboardComponent, SummaryComponent, ChartsComponent, TableComponent],
})
export class DashboardModule {}
