// src/app/services/loading.service.ts
// Hands-On 8, Task 3, Step 91: LoadingService with BehaviorSubject for global loading spinner

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // BehaviorSubject emits the current value to new subscribers immediately
  isLoading$ = new BehaviorSubject<boolean>(false);

  show(): void {
    this.isLoading$.next(true);
  }

  hide(): void {
    this.isLoading$.next(false);
  }
}
