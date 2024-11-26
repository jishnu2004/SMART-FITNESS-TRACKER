import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';  // Import ng-circle-progress module

import { routes } from './app.routes';  // Import your routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NgCircleProgressModule.forRoot({
        // Global configuration for circle progress
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: "#78C000",
        innerStrokeColor: "#C7E596",
        animationDuration: 300,
        showUnits: false,
        showBackground: false,
        backgroundPadding: 0,
      })
    )
  ]
};
