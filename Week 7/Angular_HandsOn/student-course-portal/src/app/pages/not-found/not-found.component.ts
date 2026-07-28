// src/app/pages/not-found/not-found.component.ts
// Hands-On 7, Task 1, Step 68: Wildcard route 404 page

import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <div class="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a routerLink="/">Go Home</a>
    </div>
  `,
  styles: [`
    .not-found {
      text-align: center;
      padding: 80px 20px;
    }
    .not-found h1 {
      font-size: 6rem;
      color: #e74c3c;
      margin-bottom: 0;
    }
    .not-found h2 {
      color: #2c3e50;
      margin-bottom: 10px;
    }
    .not-found p {
      color: #7f8c8d;
      margin-bottom: 20px;
    }
    .not-found a {
      color: #3498db;
      text-decoration: none;
      font-weight: bold;
    }
  `]
})
export class NotFoundComponent {}
