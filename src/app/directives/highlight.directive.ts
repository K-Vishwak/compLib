import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseover')
  public mouseOver() {
    this.element.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave')
  public mouseLeave() {
    this.element.nativeElement.style.color = 'black';
  }

  @HostBinding('style.border') color =  '1px solid pink';

  ngOnInit() {
    this.element.nativeElement.style.color = 'green';
  }

}
