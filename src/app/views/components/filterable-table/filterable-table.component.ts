import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { data } from 'src/data/mockdata';

@Component({
  selector: 'app-filterable-table',
  templateUrl: './filterable-table.component.html',
  styleUrls: ['./filterable-table.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class FilterableTableComponent {
  @Input() tableType!: string;

  public table: any;

  ngOnInit() {
    if (this.tableType == 'pao') {
      this.table = Object.values(data.PAO);
    } else if (this.tableType == 'drivers') {
      this.table = Object.values(data.Drivers);
    }
  }
}
