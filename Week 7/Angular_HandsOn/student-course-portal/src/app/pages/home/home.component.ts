// src/app/pages/home/home.component.ts
// Hands-On 1, Task 2, Step 8: Home page with welcome content and stats
// Hands-On 2, Task 1: All four binding types (interpolation, property, event, two-way)
// Hands-On 2, Task 2: Lifecycle hooks (ngOnInit, ngOnDestroy)

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Hands-On 2, Task 1, Step 11: String interpolation
  portalName = 'Student Course Portal';

  // Hands-On 2, Task 1, Step 12: Property binding
  isPortalActive = true;

  // Hands-On 2, Task 1, Step 13: Event binding
  message = '';

  // Hands-On 2, Task 1, Step 14: Two-way binding
  // [property] is one-way binding (component → DOM): data flows from the component class to the template.
  // [(ngModel)] is two-way binding (DOM ↔ component): data flows in both directions — changes in the
  // template (user input) update the component, and changes in the component update the template.
  searchTerm = '';

  // Stats
  coursesAvailable = 0;
  enrolled = 3;
  gpa = 3.8;

  constructor(private courseService: CourseService) {}

  // Hands-On 2, Task 2, Step 16: ngOnInit lifecycle hook
  // ngOnInit fires once after the component's inputs are first set — use it for data fetching,
  // not the constructor (which fires before inputs are set).
  ngOnInit(): void {
    this.coursesAvailable = this.courseService.getCourses().length;
    console.log('HomeComponent initialised — courses loaded');
  }

  // Hands-On 2, Task 2, Step 17: ngOnDestroy lifecycle hook
  // ngOnDestroy is critical for unsubscribing from Observables and clearing timers —
  // forgetting it causes memory leaks in long-running SPAs.
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Hands-On 2, Task 1, Step 13: Event binding handler
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
