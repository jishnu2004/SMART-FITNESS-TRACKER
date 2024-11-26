import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service'; // Import UserService

@Component({
  selector: 'app-login',
  standalone: true, 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule], 
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  private apiUrl: string = 'http://localhost:8080/api/users/login';

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  onLogin(): void {
    // Validate form fields
    if (!this.username || !this.password) {
      alert('Username and password are required.');
      return;
    }

    const loginPayload = {
      username: this.username.trim(),
      password: this.password.trim(),
    };

    console.log('Sending login payload:', loginPayload);

    // Call backend API
    this.http.post(this.apiUrl, loginPayload).subscribe(
      (response: any) => {
        console.log('API Response:', response);

        if (response.message === 'Login successful') {
          alert('Login successful!');
          // Store the user ID globally
          this.userService.setUserId(response.userId);
          console.log('User ID:', response.userId);
          this.router.navigate(['/dashboard']);
        } else {
          alert('Unexpected response from server.');
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error occurred during login:', error);

        // Display appropriate error message
        const errorMessage =
          error.error?.message || 'Unable to connect to the server. Please try again.';
        alert(errorMessage);
      }
    );
  }

  redirectToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
