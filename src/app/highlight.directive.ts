import { Directive, ElementRef, Input, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  elem: any;

  constructor(el: ElementRef) {
      this.elem.nativeElement.style.backgroundColor = 'red';
    
   }


}
