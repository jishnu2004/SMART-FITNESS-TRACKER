import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-progress-bar',
  standalone: true,
  templateUrl: './circular-progress-bar.component.html',
  styleUrls: ['./circular-progress-bar.component.css'],
  imports: [CommonModule]
})
export class CircularProgressBarComponent {
  @Input() current: number = 0;
  @Input() total: number = 100;
  @Input() radius: number = 50;
  @Input() strokeWidth: number = 8;
  @Input() outerStrokeColor: string = '#4CAF50';
  @Input() innerStrokeColor: string = '#e0e0e0';

  get percentage(): number {
    return (this.current / this.total) * 100;
  }

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  get strokeDashOffset(): number {
    return this.circumference - (this.percentage / 100) * this.circumference;
  }
}
