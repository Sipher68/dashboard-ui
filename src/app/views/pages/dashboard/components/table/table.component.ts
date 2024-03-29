import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { data } from 'src/data/mockdata';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class TableComponent {
  public operators = Object.values(data.Operators);
}
