import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [NgIf],
})
export class NavbarComponent {
  isMenuOpen = false; // To toggle the mobile menu
  isDropdownOpen = false; // To toggle the Settings dropdown menu

  constructor(public router: Router) {} // Inject Router

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle dropdown state
  }

  onSignOut(): void {
    this.isDropdownOpen = false; // Close dropdown when signing out
    this.router.navigate(['/login']); // Navigate to the login page
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']); // Navigate to the profile page
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']); // Navigate to the dashboard page
  }
}
