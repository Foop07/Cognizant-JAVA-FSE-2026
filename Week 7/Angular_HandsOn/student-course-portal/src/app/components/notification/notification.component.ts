// src/app/components/notification/notification.component.ts
// Hands-On 6, Task 2, Step 67: Component-level providing demonstration
// This creates a new, separate NotificationService instance scoped to this component
// and its children. This is useful when you need isolated state per component instance,
// such as a form wizard with multiple steps.

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  // Component-level provider — creates a new instance for this component tree only
  providers: [NotificationService],
  template: `
    <div class="notification-panel">
      <h4>Notifications</h4>
      <ul>
        <li *ngFor="let note of notificationService.getNotifications()">{{ note }}</li>
      </ul>
      <p *ngIf="notificationService.getNotifications().length === 0">No notifications.</p>
    </div>
  `,
  styles: [`
    .notification-panel {
      background: #fff3cd;
      padding: 15px;
      border-radius: 8px;
      border: 1px solid #ffc107;
    }
    .notification-panel h4 { color: #856404; margin-bottom: 8px; }
    .notification-panel li { color: #856404; margin: 4px 0; }
    .notification-panel p { color: #856404; font-style: italic; }
  `]
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {}
}
