import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-glass',
  standalone: true,
  templateUrl: './glass.component.html',
  styleUrls: []
})
export class GlassComponent {
  // Signals for water height and Y position
  public waterHeight = signal(0); // Current water height
  public waterY = signal(280); // Y-coordinate for the water's top edge

  private readonly maxFillHeight = 270; // Total height of the glass
  private readonly step = this.maxFillHeight / 8; // Height increment per click

  public cupCounter = computed(() => Math.round(this.waterHeight() / this.step)); // Number of clicks (cups)

  increaseWaterLevel(): void {
    if (this.waterHeight() < this.maxFillHeight) {
      this.waterHeight.update((height) => height + this.step);
      this.waterY.update((y) => y - this.step);
    }
  }

  decreaseWaterLevel(): void {
    if (this.waterHeight() > 0) {
      this.waterHeight.update((height) => height - this.step);
      this.waterY.update((y) => y + this.step);
    }
  }

  getWaterPath(): string {
    const glassTopWidth = 120; // Width of the glass at the top
    const glassBottomWidth = 60; // Width of the glass at the bottom

    // Calculate the width of the water at the top based on the current water height
    const topWidth =
      glassBottomWidth +
      (this.waterHeight() / this.maxFillHeight) * (glassTopWidth - glassBottomWidth);
    const topX1 = 100 - topWidth / 2;
    const topX2 = 100 + topWidth / 2;
    const bottomX1 = 100 - glassBottomWidth / 2;
    const bottomX2 = 100 + glassBottomWidth / 2;

    // Define the path for the water
    return `M ${bottomX1},280 L ${bottomX2},280 L ${topX2},${this.waterY()} L ${topX1},${this.waterY()} Z`;
  }
}
