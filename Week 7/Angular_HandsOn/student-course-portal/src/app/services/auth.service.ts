// src/app/services/auth.service.ts
// Hands-On 7, Task 2, Step 75: Simple AuthService for guards

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Hardcoded for now — in a real app this would check JWT tokens or session state
  isLoggedIn = true;

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
