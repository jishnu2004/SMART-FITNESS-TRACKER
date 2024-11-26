import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brief-food-card',
  standalone: true,
  templateUrl: './brief-food-card.component.html',
  styleUrls: ['./brief-food-card.component.css'],
  imports: [CommonModule]
})
export class BriefFoodCardComponent {
  // Dynamic inputs for the card
  @Input() title: string = 'Basic Design';
  @Input() subtitle: string = 'Introduction to Graphics Design';
  @Input() icon: string = '';  // Icon URL or SVG path if you need it dynamically
}
