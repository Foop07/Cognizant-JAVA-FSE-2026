// src/app/pages/courses-layout/courses-layout.component.ts
// Hands-On 7, Task 1, Step 72: Nested routes layout with <router-outlet>

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="courses-layout">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .courses-layout {
      padding: 10px;
    }
  `]
})
export class CoursesLayoutComponent {}
