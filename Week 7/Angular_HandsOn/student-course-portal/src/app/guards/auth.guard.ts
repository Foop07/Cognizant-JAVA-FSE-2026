// src/app/guards/auth.guard.ts
// Hands-On 7, Task 2, Step 75: CanActivate guard using AuthService

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  } else {
    // Navigate to home and prevent access
    router.navigate(['/']);
    return false;
  }
};
