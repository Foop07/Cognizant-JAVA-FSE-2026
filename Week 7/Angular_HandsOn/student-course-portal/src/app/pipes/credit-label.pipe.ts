// src/app/pipes/credit-label.pipe.ts
// Hands-On 3, Task 3, Steps 35-36: Custom pipe to transform credits to human-readable string
// Pipes are pure by default (only re-run when the input reference changes). If your pipe
// needs to re-run on mutable data changes, set pure: false in the @Pipe decorator —
// but use this sparingly as it impacts performance.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || value === 0) {
      return 'No Credits';
    }
    return value === 1 ? '1 Credit' : `${value} Credits`;
  }
}
