import { Component } from '@angular/core';
import { data } from 'src/data/mockdata';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class BlacklistComponent {
  public blackLists = Object.values(data.Blacklisted);
}
