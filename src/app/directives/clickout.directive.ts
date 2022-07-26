import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickout]'
})
export class ClickoutDirective {

  @Output() clickOutSide = new EventEmitter<any>();

  constructor(private ele: ElementRef) {

  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.ele.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutSide.emit();
    }
  }
}
