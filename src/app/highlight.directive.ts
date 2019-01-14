import { Directive, ElementRef, Input, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }
@HostListener("click") Upvote() {
  this.highlight("highlight")
}
@HostListener("dblclick") onDoubleClick() {
  this.highlight("highlight")
} 
private highlight(highlight: string) {
  this.elem.nativeElement.style.backgroundColor = 'red';
}
}
