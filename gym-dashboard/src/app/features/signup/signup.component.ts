import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [FormsModule, CommonModule], // Add CommonModule and FormsModule
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  validationErrors: { [key: string]: string } = {};

  constructor(private router: Router) {}

  onSignup(): void {
    this.validateField('username');
    this.validateField('email');
    this.validateField('password');
    this.validateField('confirmPassword');

    if (Object.values(this.validationErrors).some((error) => error)) {
      alert('Please fix the errors in the form.');
      return;
    }

    alert('Signup successful!');
    // Redirect to Medicalfill Component after successful signup
    this.router.navigate(['/medicalfill']);
  }

  validateField(field: string): void {
    switch (field) {
      case 'username':
        this.validationErrors['username'] =
          !this.username || this.username.trim() === ''
            ? 'Username is required.'
            : '';
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.validationErrors['email'] = !this.email
          ? 'Email is required.'
          : !emailRegex.test(this.email)
          ? 'Invalid email format.'
          : '';
        break;

      case 'password':
        this.validationErrors['password'] =
          !this.password || this.password.trim() === ''
            ? 'Password is required.'
            : this.password.length < 6
            ? 'Password must be at least 6 characters long.'
            : '';
        break;

      case 'confirmPassword':
        this.validationErrors['confirmPassword'] =
          !this.confirmPassword || this.confirmPassword.trim() === ''
            ? 'Confirm Password is required.'
            : this.password !== this.confirmPassword
            ? 'Passwords do not match.'
            : '';
        break;

      default:
        break;
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
