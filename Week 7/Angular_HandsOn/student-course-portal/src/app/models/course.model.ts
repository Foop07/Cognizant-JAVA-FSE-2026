// src/app/models/course.model.ts
// Hands-On 6, Task 1, Step 59: Define Course interface in a separate file
// Defining a TypeScript interface for data models gives compile-time type checking
// across the entire application — always prefer this over using 'any'.

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
}
