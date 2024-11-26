import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { StatsComponent } from '../stats/stats.component';
import { GlassComponent } from '../glass/glass.component';
import { MealsListComponent } from '../meals-list/meals-list.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service'; // Import UserService

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    FormsModule,
    CommonModule,
    NavbarComponent,
    StatsComponent,
    GlassComponent,
    HttpClientModule,
    MealsListComponent,
  ],
})
export class DashboardComponent implements OnInit {
  isAddFoodModalOpen = false;

  // New food item model
  newFood = {
    name: '',
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    userId: 0, // Dynamically assigned from UserService
  };

  meals: any[] = []; // Meals list
  stats = {
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFats: 0,
  };

  private addFoodApiUrl: string = 'http://localhost:8080/api/foods/addfood';
  private getFoodApiUrl: string = 'http://localhost:8080/api/foods';

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    this.newFood.userId = this.userService.getUserId() || 0; // Fetch userId from UserService
    if (this.newFood.userId === 0) {
      console.error('User ID not set. Redirecting to login.');
      alert('Session expired. Please log in again.');
      return; // Optionally, redirect to login if userId is missing
    }
    this.fetchMealsForToday();
  }

  onDateChange(newDate: string) {
    console.log('Date changed to:', newDate);
    this.fetchMealsForDate(newDate);
  }

  fetchMealsForToday() {
    const currentDate = new Date().toISOString().split('T')[0];
    this.fetchMealsForDate(currentDate);
  }

  fetchMealsForDate(date: string) {
    const endpoint = `${this.getFoodApiUrl}/${this.newFood.userId}/${date}`;
    this.http.get(endpoint).subscribe(
      (response: any) => {
        console.log('Meals fetched:', response);
        this.meals = response;
        this.calculateStats(); // Update stats after fetching meals
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching meals:', error);
        alert('Failed to fetch meals. Please try again.');
      }
    );
  }

  calculateStats() {
    this.stats = this.meals.reduce(
      (totals, meal) => {
        totals.totalCalories += meal.calories || 0;
        totals.totalProtein += meal.protein || 0;
        totals.totalCarbs += meal.carbs || 0;
        totals.totalFats += meal.fats || 0;
        return totals;
      },
      { totalCalories: 0, totalProtein: 0, totalCarbs: 0, totalFats: 0 }
    );
    console.log('Updated stats:', this.stats);
  }

  openAddFoodModal() {
    this.isAddFoodModalOpen = true;
  }

  closeAddFoodModal() {
    this.isAddFoodModalOpen = false;
  }

  addFood() {
    if (!this.newFood.name || this.newFood.calories <= 0) {
      alert('Please provide valid food details.');
      return;
    }

    this.http.post(this.addFoodApiUrl, this.newFood).subscribe(
      (response: any) => {
        console.log('Food added:', response);
        this.meals.push(response);
        this.calculateStats(); // Update stats after adding a new meal
        alert('Food added successfully!');
        this.closeAddFoodModal();
        this.resetNewFood();
      },
      (error: HttpErrorResponse) => {
        console.error('Error saving food:', error);
        alert('Failed to save food. Please try again.');
      }
    );
  }

  private resetNewFood() {
    this.newFood = {
      name: '',
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      userId: this.userService.getUserId() || 0, // Reset userId from UserService
    };
  }
}
