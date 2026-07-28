// src/app/store/course/course.actions.ts
// Hands-On 9, Task 1, Step 93: Define course actions
// The [Course] prefix in action type strings is a convention that groups actions by feature —
// it makes the Redux DevTools timeline readable.

import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);
