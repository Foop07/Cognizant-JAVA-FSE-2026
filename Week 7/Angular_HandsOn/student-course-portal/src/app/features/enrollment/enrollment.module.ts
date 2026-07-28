// src/app/features/enrollment/enrollment.module.ts
// Hands-On 7, Task 2, Step 73: Lazy loaded feature module for enrollment
// Lazy loading splits the application into chunks that are downloaded on demand —
// critical for large applications. Without it, all code is bundled into one large file.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const enrollmentRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../pages/enrollment-form/enrollment-form.component').then(
        m => m.EnrollmentFormComponent
      )
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('../../pages/reactive-enrollment-form/reactive-enrollment-form.component').then(
        m => m.ReactiveEnrollmentFormComponent
      )
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(enrollmentRoutes)
  ]
})
export class EnrollmentModule {}
