// src/app/services/course.service.spec.ts
// Hands-On 10, Task 2: Testing CourseService with HttpClientTestingModule

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Algorithms', code: 'CS201', credits: 3, gradeStatus: 'pending' }
  ];

  // Hands-On 10, Task 2, Step 106: Configure TestBed with HttpClientTestingModule
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // HttpTestingController.verify() asserts that there are no outstanding (unsatisfied)
    // HTTP requests after each test — critical for catching tests that make unintended HTTP calls.
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Hands-On 10, Task 2, Step 107: Test getCourses HTTP call
  it('should fetch courses via GET', () => {
    service.getCoursesHttp().subscribe(courses => {
      expect(courses.length).toBe(2);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // Hands-On 10, Task 2, Step 108: Test error handling
  it('should handle HTTP error', () => {
    service.getCoursesHttp().subscribe({
      next: () => fail('should have failed'),
      error: (error) => {
        expect(error.message).toBe('Failed to load courses. Please try again.');
      }
    });

    // Flush 500 errors for initial + 2 retries = 3 total
    const requests = httpMock.match('http://localhost:3000/courses');
    requests.forEach(req => {
      req.flush('Server Error', { status: 500, statusText: 'Internal Server Error' });
    });
  });
});
