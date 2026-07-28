// src/app/interceptors/error-handler.interceptor.ts
// Hands-On 8, Task 3, Step 90: Global error handling interceptor

import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Unauthorized — redirect to home/login
        console.error('Unauthorized request. Redirecting to home.');
        router.navigate(['/']);
      } else if (error.status === 500) {
        // Server error — show global notification
        console.error('Server error occurred:', error.message);
      }
      return throwError(() => error);
    })
  );
};
