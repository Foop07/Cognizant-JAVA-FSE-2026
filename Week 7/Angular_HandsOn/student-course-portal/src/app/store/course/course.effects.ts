// src/app/store/course/course.effects.ts
// Hands-On 9, Task 2, Step 97: NgRx Effects for async HTTP calls
// Effects are the only place in NgRx where side effects (HTTP calls, navigation,
// localStorage) should happen — reducers must remain pure functions.

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CourseService } from '../../services/course.service';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure } from './course.actions';

@Injectable()
export class CourseEffects {
  // Hands-On 9, Task 2, Step 97: loadCourses$ effect
  // Flow: dispatching loadCourses → Effect fires HTTP → loadCoursesSuccess dispatched
  //       → reducer updates state → selector emits new value → component re-renders
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      // switchMap is essential for dependent HTTP calls — it cancels the previous request
      // if a new one arrives before the first completes, preventing out-of-order responses.
      switchMap(() =>
        this.courseService.getCoursesHttp().pipe(
          map(courses => loadCoursesSuccess({ courses })),
          catchError(error => of(loadCoursesFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}
}
