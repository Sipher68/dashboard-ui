import { Component, Input } from '@angular/core';
import { data } from 'src/data/mockdata';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class ProfileCardComponent {
  @Input() type: string = 'PAO';
  @Input() license!: any;

  // Get data for different tables
  public dataTable: any;

  ngOnInit() {
    if (this.type === 'PAO') {
      this.dataTable = Object.values(data.PAO);
    } else if (this.type === 'Drivers') {
      this.dataTable = Object.values(data.Drivers);
    } else if (this.type === 'Blacklister') {
      this.dataTable = Object.values(data.Blacklisted);
    }
  }
}
