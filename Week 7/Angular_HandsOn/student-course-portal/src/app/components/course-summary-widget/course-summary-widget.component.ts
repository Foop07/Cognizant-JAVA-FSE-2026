// src/app/components/course-summary-widget/course-summary-widget.component.ts
// Hands-On 6, Task 1, Step 62: Widget that also injects CourseService to verify singleton
// Both this component and CourseListComponent share the same CourseService instance.
// Adding a course in one component is reflected in the other's count — confirming singleton.

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="widget">
      <h4>Course Summary</h4>
      <p>Total courses: {{ courseCount }}</p>
    </div>
  `,
  styles: [`
    .widget {
      background: #3498db;
      color: white;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
    }
    .widget h4 { margin-bottom: 5px; }
  `]
})
export class CourseSummaryWidgetComponent implements OnInit {
  courseCount = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseCount = this.courseService.getCourses().length;
  }
}
