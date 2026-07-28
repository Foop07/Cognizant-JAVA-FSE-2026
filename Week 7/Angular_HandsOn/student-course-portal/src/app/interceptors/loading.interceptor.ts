// src/app/interceptors/loading.interceptor.ts
// Hands-On 8, Task 3, Step 91: Loading interceptor with LoadingService
// finalize in RxJS runs whether the Observable completes or errors — it is the correct
// place to hide a loading spinner, equivalent to a try/catch/finally block.

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
};
