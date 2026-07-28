// src/main.ts - Application entry point
// This is the bootstrap file that initializes the Angular application.
// In standalone mode (Angular 17+/20), it bootstraps the root component directly
// using the application configuration defined in app.config.ts.

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
