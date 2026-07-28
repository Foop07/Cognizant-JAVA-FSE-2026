// src/app/app.routes.ts - Application route configuration
// The ** wildcard route must always be the last route — Angular matches routes
// in order, and a wildcard before specific routes would catch everything.

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [
  // Hands-On 7: Route configuration
  { path: '', component: HomeComponent },

  // Nested routes under /courses
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseListComponent },
      { path: ':id', component: CourseDetailComponent }
    ]
  },

  // Protected routes with AuthGuard
  { path: 'profile', canActivate: [authGuard], component: StudentProfileComponent },

  // Enrollment routes with lazy loading alternative
  { path: 'enroll', canActivate: [authGuard], component: EnrollmentFormComponent },
  {
    path: 'enroll-reactive',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    component: ReactiveEnrollmentFormComponent
  },

  // Lazy loaded enrollment feature module
  {
    path: 'enrollment',
    loadChildren: () =>
      import('./features/enrollment/enrollment.module').then(m => m.EnrollmentModule)
  },

  // Wildcard route — must be last
  { path: '**', component: NotFoundComponent }
];
