// src/app/components/course-card/course-card.component.spec.ts
// Hands-On 10, Task 1: Unit tests for CourseCardComponent

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';
import { provideMockStore } from '@ngrx/store/testing';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  // Hands-On 10, Task 1, Step 101: Configure TestBed
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [
        provideMockStore({
          initialState: {
            enrollment: { enrolledCourseIds: [] }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  // Hands-On 10, Task 1, Step 102: Verify component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Hands-On 10, Task 1, Step 103: Test @Input rendering
  // fixture.detectChanges() triggers Angular's change detection — always call it after
  // changing component properties before querying the DOM.
  it('should display the course name', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    // By.css() from @angular/platform-browser is the Angular way to query the rendered DOM
    // in tests — use it instead of document.querySelector to stay within the component's scope.
    const nameElement = fixture.debugElement.query(By.css('h3'));
    expect(nameElement.nativeElement.textContent).toContain('Data Structures');
  });

  // Hands-On 10, Task 1, Step 104: Test @Output event
  it('should emit enrollRequested when Enroll button is clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');
    const enrollButton = fixture.debugElement.query(By.css('.btn-enroll'));
    enrollButton.nativeElement.click();
    fixture.detectChanges();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Hands-On 10, Task 1, Step 105: Test ngOnChanges
  it('should log previous and current values on ngOnChanges', () => {
    spyOn(console, 'log');
    const newCourse: Course = { id: 2, name: 'Algorithms', code: 'CS201', credits: 3, gradeStatus: 'pending' };
    component.ngOnChanges({
      course: new SimpleChange(mockCourse, newCourse, false)
    });
    expect(console.log).toHaveBeenCalled();
  });
});
