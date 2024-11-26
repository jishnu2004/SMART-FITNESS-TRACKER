import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularProgressBarComponent } from '../circular-progress-bar/circular-progress-bar.component';

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  imports: [CommonModule, CircularProgressBarComponent],
})
export class StatsComponent {
  @Input() stats: any = {
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFats: 0,
  }; // Accept updated stats from parent
  @Output() dateChange = new EventEmitter<string>(); // Emit date changes

  formattedDate: string = ''; // ISO formatted date for backend
  displayDate: string = ''; // Readable date for UI

  // Metrics will be updated dynamically based on `stats` input
  metrics = [
    { label: 'Calories', current: 0, total: 2000, color: '#FF9800' },
    { label: 'Protein', current: 0, total: 150, color: '#9C27B0' },
    { label: 'Carbs', current: 0, total: 300, color: '#2196F3' },
    { label: 'Fats', current: 0, total: 70, color: '#FF5722' },
  ];

  constructor() {
    this.setDateToToday();
  }

  ngOnChanges() {
    this.updateMetrics(); // Update metrics whenever `stats` changes
  }

  private setDateToToday(): void {
    const today = new Date();
    this.formattedDate = today.toISOString().split('T')[0]; // ISO format
    this.displayDate = this.formatDisplayDate(today);
    this.emitDateChange();
  }

  private formatDisplayDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    }).format(date);
  }

  goToPreviousDay(): void {
    const currentDate = new Date(this.formattedDate);
    currentDate.setDate(currentDate.getDate() - 1);
    this.updateDate(currentDate);
  }

  goToNextDay(): void {
    const currentDate = new Date(this.formattedDate);
    currentDate.setDate(currentDate.getDate() + 1);
    this.updateDate(currentDate);
  }

  private updateDate(date: Date): void {
    const newFormattedDate = date.toISOString().split('T')[0];
    if (newFormattedDate !== this.formattedDate) {
      this.formattedDate = newFormattedDate;
      this.displayDate = this.formatDisplayDate(date);
      this.emitDateChange();
    }
  }

  private emitDateChange(): void {
    this.dateChange.emit(this.formattedDate); // Emit ISO formatted date
  }

  private updateMetrics(): void {
    this.metrics = [
      { label: 'Calories', current: this.stats.totalCalories, total: 2000, color: '#FF9800' },
      { label: 'Protein', current: this.stats.totalProtein, total: 150, color: '#9C27B0' },
      { label: 'Carbs', current: this.stats.totalCarbs, total: 300, color: '#2196F3' },
      { label: 'Fats', current: this.stats.totalFats, total: 70, color: '#FF5722' },
    ];
  }
}
