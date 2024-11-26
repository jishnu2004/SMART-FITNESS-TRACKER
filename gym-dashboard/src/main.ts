import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/features/login/login.component';
import { SignupComponent } from './app/features/signup/signup.component';
import { DashboardComponent } from './app/features/dashboard/dashboard.component';
import { ProfileComponent } from './app/features/layout/profile/profile.component';
import { MedicalfillComponent } from './app/features/medicalfill/medicalfill.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'medicalfill', component: MedicalfillComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to the login page
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Set up routing
    provideHttpClient(withFetch()),   // Enable HttpClientModule for HTTP requests
  ],
}).catch((err) => console.error(err));
