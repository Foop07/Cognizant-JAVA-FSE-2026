# Student Course Portal — Angular (v20.0) Hands-On Project

## Digital Nurture 5.0 — Angular Hands-On Exercises (1–10)

This is a unified Angular application — a **Student Course Portal** — built incrementally across 10 hands-on exercises.

## Project Structure

```
student-course-portal/
├── angular.json              # Workspace configuration
├── package.json              # Dependencies & scripts
├── tsconfig.json             # Root TypeScript config
├── tsconfig.app.json         # App-specific TS config
├── tsconfig.spec.json        # Test-specific TS config
├── db.json                   # JSON Server mock data (Hands-On 8)
├── notes.txt                 # File explanations (Hands-On 1)
├── .gitignore
└── src/
    ├── index.html
    ├── main.ts               # App entry point (bootstraps standalone)
    ├── styles.css             # Global styles
    └── app/
        ├── app.config.ts     # Standalone app configuration
        ├── app.routes.ts     # Route definitions
        ├── app.component.*   # Root component
        ├── models/
        │   └── course.model.ts
        ├── components/
        │   ├── header/
        │   ├── course-card/
        │   ├── course-summary-widget/
        │   └── notification/
        ├── pages/
        │   ├── home/
        │   ├── course-list/
        │   ├── course-detail/
        │   ├── courses-layout/
        │   ├── student-profile/
        │   ├── enrollment-form/
        │   ├── reactive-enrollment-form/
        │   └── not-found/
        ├── directives/
        │   └── highlight.directive.ts
        ├── pipes/
        │   └── credit-label.pipe.ts
        ├── services/
        │   ├── course.service.ts
        │   ├── enrollment.service.ts
        │   ├── auth.service.ts
        │   ├── loading.service.ts
        │   └── notification.service.ts
        ├── guards/
        │   ├── auth.guard.ts
        │   └── unsaved-changes.guard.ts
        ├── interceptors/
        │   ├── auth.interceptor.ts
        │   ├── error-handler.interceptor.ts
        │   └── loading.interceptor.ts
        ├── features/
        │   └── enrollment/
        │       └── enrollment.module.ts
        └── store/
            ├── course/
            │   ├── course.actions.ts
            │   ├── course.reducer.ts
            │   ├── course.selectors.ts
            │   └── course.effects.ts
            └── enrollment/
                ├── enrollment.actions.ts
                ├── enrollment.reducer.ts
                └── enrollment.selectors.ts
```

## Hands-On Exercise Mapping

| Hands-On | Topic | Key Files |
|----------|-------|-----------|
| 1 | Environment Setup & Components | `notes.txt`, `app.component.*`, `header/`, `home/`, `course-list/`, `student-profile/` |
| 2 | Data Binding, Lifecycle Hooks | `home.component.ts`, `course-card.component.ts` |
| 3 | Directives & Pipes | `highlight.directive.ts`, `credit-label.pipe.ts`, `course-card.component.*` |
| 4 | Template-Driven Forms | `enrollment-form/` |
| 5 | Reactive Forms & Custom Validators | `reactive-enrollment-form/` |
| 6 | Services & DI | `course.service.ts`, `enrollment.service.ts`, `notification.service.ts` |
| 7 | Routing, Guards, Lazy Loading | `app.routes.ts`, `auth.guard.ts`, `unsaved-changes.guard.ts`, `enrollment.module.ts` |
| 8 | HTTP Client & Interceptors | `course.service.ts` (HTTP methods), `interceptors/`, `db.json` |
| 9 | NgRx State Management | `store/course/`, `store/enrollment/` |
| 10 | Unit Testing | `*.spec.ts` files |

## Quick Start

```bash
# Install dependencies
npm install

# Start the dev server
ng serve

# Start JSON Server (for Hands-On 8)
json-server --watch db.json --port 3000

# Run tests (Hands-On 10)
ng test
```

## Submission Notes
- Exclude `node_modules` — it's in `.gitignore`
- All exercises build on the same project — do not create separate projects
- Push to GitHub and share the URL with your POC
