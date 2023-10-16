import { Component } from '@angular/core';
import { data } from 'src/data/mockdata';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class CardComponent {
  public cardData = data.Operators;

  public cardValue: any;

  ngOnInit() {
    this.cardValue = Object.values(this.cardData);
    for (let i = 0; i < this.cardValue.length; i++) {
      console.log(this.cardValue[i]);
    }

    console.log(this.cardValue[1]['Operator_Name']);
  }
}
