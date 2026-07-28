// src/app/pages/reactive-enrollment-form/reactive-enrollment-form.component.ts
// Hands-On 5: Reactive Forms — FormBuilder, FormGroup, FormArray & Custom Validators

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

// Hands-On 5, Task 2, Step 53: Custom synchronous validator
// Returns { noCourseCode: true } if the control value starts with 'XX' (a disallowed prefix).
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  if (control.value && typeof control.value === 'string' && control.value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Hands-On 5, Task 2, Step 55: Custom async validator
// Async validators fire after all sync validators pass (to avoid unnecessary API calls).
// They return Observable<ValidationErrors | null> or Promise<ValidationErrors | null>.
function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (control.value && control.value.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  // ReactiveFormsModule must be imported to enable FormBuilder, FormGroup, and FormControl.
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  // Hands-On 5, Task 1, Step 49: Build the form using FormBuilder
  // In reactive forms, the form model lives entirely in TypeScript — the template just binds to it.
  // This makes the form logic fully unit-testable without a DOM.
  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // Hands-On 5, Task 2, Step 55: Async validator as third argument
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      // Hands-On 5, Task 2, Step 53: Custom validator alongside Validators.required
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      // Validators.requiredTrue specifically validates that a checkbox is checked —
      // Validators.required only checks for a non-empty/non-null value.
      agreeToTerms: [false, Validators.requiredTrue],
      // Hands-On 5, Task 2, Step 56: FormArray for additional courses
      // FormArray is Angular's answer to dynamic, repeating form sections — like
      // enrolling in multiple courses at once.
      additionalCourses: this.fb.array([])
    });
  }

  // Hands-On 5, Task 2, Step 57: Typed getter for FormArray
  // This getter is better than casting in the template because it provides type safety,
  // is reusable across multiple template expressions, and keeps the template clean.
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Hands-On 5, Task 2, Step 56: Add another course to the FormArray
  addCourse(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  // Remove a course from the FormArray
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Hands-On 5, Task 1, Step 51: Submit handler
  onSubmit(): void {
    // enrollForm.value excludes disabled controls
    console.log('Form Value:', this.enrollForm.value);
    // enrollForm.getRawValue() includes ALL controls (even disabled ones)
    console.log('Raw Value:', this.enrollForm.getRawValue());
    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }
}
