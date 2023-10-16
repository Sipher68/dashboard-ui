import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { data } from 'src/data/mockdata';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class CardsComponent {
  public cardData = data.Bulletin;

  public cardValue: any;

  ngOnInit() {
    this.cardValue = Object.values(this.cardData);
  }
}
