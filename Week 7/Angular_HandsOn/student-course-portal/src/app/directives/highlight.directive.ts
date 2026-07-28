// src/app/directives/highlight.directive.ts
// Hands-On 3, Task 3, Steps 33-37: Custom attribute directive with configurable colour

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Hands-On 3, Task 3, Step 37: Configurable highlight colour via @Input
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef) {}

  // @HostListener('mouseenter') binds to host element events without needing to manually
  // add/remove event listeners — Angular handles cleanup automatically.
  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('');
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
