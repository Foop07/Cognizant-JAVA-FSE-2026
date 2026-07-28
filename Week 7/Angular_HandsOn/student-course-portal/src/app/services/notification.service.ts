// src/app/services/notification.service.ts
// Hands-On 6, Task 2, Step 67: NotificationService for component-level providing demo
// When provided at component level using providers: [NotificationService] in @Component,
// this creates a new, separate instance scoped to that component and its children.
// This is useful when you need isolated state per component instance.

import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private notifications: string[] = [];

  addNotification(message: string): void {
    this.notifications.push(message);
  }

  getNotifications(): string[] {
    return [...this.notifications];
  }

  clearNotifications(): void {
    this.notifications = [];
  }
}
