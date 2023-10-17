import { Component } from '@angular/core';
// import { TableComponent } from './components/table/table.component';
import { FilterableTableComponent } from '../../components/filterable-table/filterable-table.component';

@Component({
  selector: 'app-pao',
  templateUrl: './pao.component.html',
  styleUrls: ['./pao.component.scss'],
  standalone: true,
  imports: [FilterableTableComponent],
})
export class PaoComponent {}
