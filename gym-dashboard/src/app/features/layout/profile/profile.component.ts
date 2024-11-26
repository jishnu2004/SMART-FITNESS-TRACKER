import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; // Import NavbarComponent

@Component({
  selector: 'app-profile',
  standalone: true, // Mark it as standalone
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [NavbarComponent], // Import NavbarComponent here
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '1234 Elm Street, Springfield, USA',
  };
}
