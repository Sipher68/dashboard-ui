import { Component } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-action-center',
  templateUrl: './action-center.component.html',
  styleUrls: ['./action-center.component.scss'],
  standalone: true,
  imports: [CardsComponent],
})
export class ActionCenterComponent {}
