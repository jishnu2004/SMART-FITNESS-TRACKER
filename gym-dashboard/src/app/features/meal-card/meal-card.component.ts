import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent {
  @Input() name: string = '';
  @Input() calories: number = 0;
  @Input() carbs: number = 0;
  @Input() fats: number = 0;
  @Input() protein: number = 0;
}
