// src/app/guards/unsaved-changes.guard.ts
// Hands-On 7, Task 2, Step 77: CanDeactivate guard for dirty form warning
// CanDeactivate guards prevent accidental loss of form data — one of the most
// user-friendly features you can add to any form-heavy application.

import { CanDeactivateFn } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from '../pages/reactive-enrollment-form/reactive-enrollment-form.component';

export const unsavedChangesGuard: CanDeactivateFn<ReactiveEnrollmentFormComponent> = (component) => {
  if (component.enrollForm && component.enrollForm.dirty) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
