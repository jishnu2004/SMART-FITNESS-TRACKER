// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,     // Mark as standalone
  imports: [RouterModule] // Import RouterModule to enable routing in the template
})
export class AppComponent {}
