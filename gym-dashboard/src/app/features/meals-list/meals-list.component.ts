import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MealCardComponent } from '../meal-card/meal-card.component'; // Import MealCardComponent

@Component({
  selector: 'app-meals-list',
  standalone: true,
  imports: [CommonModule, MealCardComponent], // Include CommonModule here
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent {
  meals = [
    { name: 'Meal 1', calories: 500, carbs: 50, fats: 20, protein: 30 },
    { name: 'Meal 2', calories: 400, carbs: 40, fats: 15, protein: 25 },
    { name: 'Meal 3', calories: 300, carbs: 30, fats: 10, protein: 20 },
    { name: 'Meal 3', calories: 300, carbs: 30, fats: 10, protein: 20 },
    { name: 'Meal 3', calories: 300, carbs: 30, fats: 10, protein: 20 },
    { name: 'Meal 3', calories: 300, carbs: 30, fats: 10, protein: 20 }
  ];
}
