// src/app/pages/enrollment-form/enrollment-form.component.ts
// Hands-On 4: Template-Driven Forms & Validation

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  // FormsModule must be imported for ngModel and ngForm to work
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  // Form model properties for two-way binding
  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;

  // Hands-On 4, Task 2, Step 46: Submission success tracking
  submitted = false;

  // Hands-On 4, Task 1, Step 40: Form submission handler
  // The #enrollForm='ngForm' template reference variable gives you access to the NgForm
  // directive instance — use it to check form validity, reset the form, or access
  // individual control states.
  onSubmit(form: NgForm): void {
    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }

  // Hands-On 4, Task 2, Step 47: Reset form
  onReset(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
  }
}
