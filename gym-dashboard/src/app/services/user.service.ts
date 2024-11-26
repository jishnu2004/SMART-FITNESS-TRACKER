import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Ensures this service is available globally
})
export class UserService {
  private userId: number | null = null; // Store the user ID

  // Set user ID
  setUserId(id: number): void {
    this.userId = id;
  }

  // Get user ID
  getUserId(): number | null {
    return this.userId;
  }

  // Clear user ID (e.g., on logout)
  clearUserId(): void {
    this.userId = null;
  }
}
