// src/app/services/course.service.ts
// Hands-On 6, Task 1: CourseService providing course data to multiple components
// Hands-On 8, Task 1: Refactored to use HttpClient for real HTTP calls
// Hands-On 8, Task 2: RxJS operators for error handling

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';
import { Course } from '../models/course.model';

// providedIn: 'root' makes the service a singleton — one instance shared across
// the entire application. All injectors up the tree share the same instance.
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  // Hands-On 6: Private courses array (fallback data)
  private courses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Algorithms', code: 'CS201', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Web Development', code: 'CS301', credits: 3, gradeStatus: 'passed' },
    { id: 4, name: 'Database Systems', code: 'CS401', credits: 4, gradeStatus: 'failed' },
    { id: 5, name: 'Machine Learning', code: 'CS501', credits: 2, gradeStatus: 'pending' }
  ];

  constructor(private http: HttpClient) {}

  // Hands-On 6 version (synchronous, used by components that don't need HTTP)
  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  // Hands-On 8, Task 1: HTTP-based methods returning Observables
  // HttpClient methods return cold Observables — they do not execute until subscribed.
  // Always unsubscribe or use the async pipe to avoid memory leaks.
  getCoursesHttp(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // Hands-On 8, Task 2, Step 83: map operator to filter courses
      map(courses => courses.filter(c => c.credits > 0)),
      // Hands-On 8, Task 2, Step 85: tap for side effects (logging)
      // tap is for side effects (logging, analytics) that should not alter the stream.
      // Never modify data inside tap — use map for transformations.
      tap(courses => console.log('Courses loaded:', courses.length)),
      // Hands-On 8, Task 2, Step 86: retry strategy
      retry(2),
      // Hands-On 8, Task 2, Step 84: catchError for error handling
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseByIdHttp(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  // Hands-On 8, Task 1, Step 81: POST method
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  // Hands-On 8, Task 1, Step 82: PUT and DELETE methods
  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
