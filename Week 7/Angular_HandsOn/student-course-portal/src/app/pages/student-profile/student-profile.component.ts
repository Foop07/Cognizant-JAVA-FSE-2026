// src/app/pages/student-profile/student-profile.component.ts
// Hands-On 6, Task 2, Step 66: Display enrolled courses from EnrollmentService

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses: Course[] = [];
  studentName = 'John Doe';
  studentEmail = 'john.doe@university.edu';

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}
