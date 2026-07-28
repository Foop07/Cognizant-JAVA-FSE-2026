// src/app/store/enrollment/enrollment.selectors.ts
// Hands-On 9, Task 2, Step 99: Enrollment selectors
// Cross-slice selectors (combining course and enrollment state) are a powerful NgRx pattern —
// use createSelector with multiple input selectors to derive joined data without duplicating state.

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(
  selectEnrollmentState,
  (state) => state.enrolledCourseIds
);

// Cross-slice selector: combine course and enrollment state to get full Course objects
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses, enrolledIds) => courses.filter(course => enrolledIds.includes(course.id))
);
