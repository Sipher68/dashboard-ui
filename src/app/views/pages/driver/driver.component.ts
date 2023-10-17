import { Component } from '@angular/core';
import { FilterableTableComponent } from '../../components/filterable-table/filterable-table.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
  standalone: true,
  imports: [FilterableTableComponent],
})
export class DriverComponent {}
