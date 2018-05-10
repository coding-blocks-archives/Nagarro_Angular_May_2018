import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(el: ElementRef) {
     el.nativeElement.style.color = 'red';
  }
}
