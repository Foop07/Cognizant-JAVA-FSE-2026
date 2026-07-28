// src/app/pages/course-list/course-list.component.ts
// Hands-On 2, Task 3: Parent component rendering CourseCardComponents with @Input/@Output
// Hands-On 3, Task 1: Structural directives (*ngIf, *ngFor, trackBy)
// Hands-On 8, Task 1: HttpClient integration with subscribe
// Hands-On 9, Task 1: NgRx store integration with async pipe

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';
import { loadCourses } from '../../store/course/course.actions';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // Hands-On 3, Task 1, Step 25: Loading state for *ngIf
  isLoading = true;

  // Local courses array (used before NgRx migration)
  courses: Course[] = [];

  // Hands-On 9: NgRx store observables
  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  // Hands-On 2, Task 3, Step 23: Selected course tracking
  selectedCourseId: number | null = null;

  // Hands-On 7, Task 1, Step 71: Search term with query params
  searchTerm = '';

  // Hands-On 8: Error message for HTTP error handling
  errorMessage = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    // Hands-On 9, Task 1, Step 96: Replace service subscription with store select
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    // Hands-On 9, Task 1, Step 96: Dispatch load action
    this.store.dispatch(loadCourses());

    // Hands-On 8, Task 1, Step 80: Subscribe to HTTP service (pre-NgRx approach)
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.courses = courses),
      error: (err) => (this.errorMessage = err.message),
      complete: () => (this.isLoading = false)
    });

    // Hands-On 3, Task 1, Step 25: Simulate loading with setTimeout
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    // Hands-On 7, Task 1, Step 71: Read search query param
    const searchParam = this.route.snapshot.queryParamMap.get('search');
    if (searchParam) {
      this.searchTerm = searchParam;
    }
  }

  // Hands-On 3, Task 1, Step 26: trackBy function for *ngFor performance
  // trackBy is essential for large lists — without it, Angular re-renders every list item
  // on any array change. With trackBy, only changed items are updated.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  // Hands-On 2, Task 3, Step 23: Handle enrollment request from child
  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // Hands-On 7, Task 1, Step 70: Navigate to course detail
  onCourseClick(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  // Hands-On 7, Task 1, Step 71: Update URL with search query param
  onSearch(): void {
    this.router.navigate(['courses'], {
      queryParams: { search: this.searchTerm }
    });
  }
}
