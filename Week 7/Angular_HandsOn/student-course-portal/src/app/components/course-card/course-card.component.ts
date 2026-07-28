// src/app/components/course-card/course-card.component.ts
// Hands-On 2, Task 2, Step 18: ngOnChanges lifecycle hook
// Hands-On 2, Task 3: @Input and @Output for parent-child communication
// Hands-On 3, Task 2: ngClass and ngStyle attribute directives
// Hands-On 3, Task 1, Step 27: *ngSwitch for grade status badge

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  // Hands-On 2, Task 3, Step 20: @Input for receiving course data from parent
  @Input() course!: Course;

  // Hands-On 2, Task 3, Step 21: @Output for emitting enrollment events to parent
  // @Output with EventEmitter<T> where T is the payload type — using the generic type
  // makes the event strongly typed.
  @Output() enrollRequested = new EventEmitter<number>();

  // Hands-On 3, Task 2, Step 31: Expandable card details
  isExpanded = false;

  // Hands-On 9: NgRx enrollment state
  enrolledIds$: Observable<number[]>;

  constructor(
    private enrollmentService: EnrollmentService,
    private store: Store
  ) {
    // Hands-On 9, Task 2, Step 100: Use selectEnrolledIds to show/hide Unenroll button
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  // Hands-On 2, Task 2, Step 18: ngOnChanges lifecycle hook
  // Logs the previous and current value of the course input whenever it changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log(
        'CourseCard ngOnChanges — Previous:',
        changes['course'].previousValue,
        'Current:',
        changes['course'].currentValue
      );
    }
  }

  // Hands-On 3, Task 2, Step 32: Getter to keep templates clean
  // Using a getter for ngClass keeps the template clean and moves logic to the component class.
  // This is better than inline expressions because it's reusable and testable.
  get cardClasses(): { [key: string]: boolean } {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  // Hands-On 3, Task 2, Step 30: Dynamic border colour based on grade status
  get borderStyle(): { [key: string]: string } {
    const colorMap: { [key: string]: string } = {
      passed: '#27ae60',
      failed: '#e74c3c',
      pending: '#95a5a6'
    };
    return { 'border-left': `4px solid ${colorMap[this.course.gradeStatus] || '#95a5a6'}` };
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Hands-On 6, Task 2, Step 65: Enroll/Unenroll toggle using EnrollmentService
  onEnroll(): void {
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.enrollmentService.enroll(this.course.id);
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
    }
    this.enrollRequested.emit(this.course.id);
  }

  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }
}
