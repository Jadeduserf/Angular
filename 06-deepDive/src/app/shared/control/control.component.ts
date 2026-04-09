import { Component, HostBinding, HostListener, inject, Input, input, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
     class: 'control',
    '(click)': 'onClick()'
   }
})
export class ControlComponent {

  // Alternative to using @HostBinding and @HostListener decorators
  // @HostBinding('class') className = 'control';
  //  @HostListener('click') onClick() {
  //   console.log('Control clicked!');
  // }

  label = input.required<string>();

  // Using inject to get ElementRef instead of constructor injection to demonstrate the new inject function in Angular 16
  private el = inject(ElementRef);

  onClick() {
    console.log('Control clicked!');
    console.log('Element:', this.el.nativeElement);
  }
}
