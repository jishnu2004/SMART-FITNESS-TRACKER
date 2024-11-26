import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Correct import for CommonModule

@Component({
  selector: 'app-medicalfill',
  standalone: true,
  templateUrl: './medicalfill.component.html',
  styleUrls: ['./medicalfill.component.css'],
  imports: [FormsModule, CommonModule], // Ensure CommonModule is included here
})
export class MedicalfillComponent {
  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', form.value);

      // Show success message
      alert('Welcome! Your medical information has been successfully submitted.');

      // Redirect to login
      this.router.navigate(['/login']);
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
