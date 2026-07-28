// src/app/interceptors/auth.interceptor.ts
// Hands-On 8, Task 3, Step 88: Auth interceptor adding Authorization header
// Interceptors run in the order they are registered. The request goes through
// interceptors in registration order; the response travels back in reverse order.

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request and add the Authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345'
    }
  });
  return next(authReq);
};
