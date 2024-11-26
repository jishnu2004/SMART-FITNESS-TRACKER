import { Component } from '@angular/core';

@Component({
  selector: 'app-glass',
  standalone: true,
  templateUrl: './glass.component.html',
  styleUrls: []  // No separate CSS needed since we're using Tailwind classes directly
})
export class GlassComponent {
  public waterHeight: number = 20; // Initial height of the water in pixels
  public waterY: number = 170; // Initial Y position of the water

  fillGlass(): void {
    const maxFillHeight = 160; // Maximum height for the water fill
    const interval = setInterval(() => {
      if (this.waterHeight < maxFillHeight) {
        this.waterHeight += 5; // Increase water height
        this.waterY -= 5; // Adjust the Y position upwards
      } else {
        clearInterval(interval); // Stop when the max fill height is reached
      }
    }, 100); // Speed of the fill, adjust as needed
  }
}
