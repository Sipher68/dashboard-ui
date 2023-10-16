import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-transport-operators',
  templateUrl: './transport-operators.component.html',
  styleUrls: ['./transport-operators.component.scss'],
  standalone: true,
  imports: [CardComponent],
})
export class TransportOperatorsComponent {}
