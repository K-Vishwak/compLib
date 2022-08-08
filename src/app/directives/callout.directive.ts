import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostListener, Input, NgZone, OnChanges, OnDestroy, Optional, SimpleChanges, ViewContainerRef } from '@angular/core';
import { CalloutComponent } from './callout/callout.component';

class Point {
  constructor(public x: number, public y: number) { };
}

@Directive({
  selector: '[appCallout]',
})
export class CalloutDirective implements OnDestroy {
  @Input() appCallout: string = '';

  private element: HTMLElement;
  private calloutRef: ComponentRef<CalloutComponent>;

  constructor(
    private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }

  ngOnInit() {
    this.element = this.elementRef.nativeElement;
  }

  ngOnDestroy() {
    this.hideCallout();
    // super.onDestroy();
  }

  @HostListener('mouseenter')
  showCallout() {
    this.calloutRef = this.createCallout(this.appCallout);
    let calloutEl = this.calloutRef.location.nativeElement;
    let targetPos = this.getTargetCalloutLocation();
    calloutEl.style.left = targetPos.x + 'px';
    calloutEl.style.top = targetPos.y + 'px';
  }

  @HostListener('mouseleave')
  hideCallout() {
    if (this.calloutRef) {
      this.calloutRef.destroy();
      this.calloutRef = null;
    }
  }

  private createCallout(content: string): ComponentRef<CalloutComponent> {
    this.viewContainer.clear();

    let calloutComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(CalloutComponent);
    let calloutComponentRef = this.viewContainer.createComponent(calloutComponentFactory);

    calloutComponentRef.instance.content = content;

    return calloutComponentRef;
  }

  private getTargetCalloutLocation(): Point {
    let box = this.element.getBoundingClientRect();
    return new Point(box.left + box.width / 2, box.bottom + 5);
  }
}