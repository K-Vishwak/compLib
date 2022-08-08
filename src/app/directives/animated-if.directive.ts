import { NgIf } from '@angular/common';
import { Directive, EmbeddedViewRef, EventEmitter, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';

function animationEndSafe(el: Element, maxWait: number) {
  return new Promise((resolve) => {
    el.addEventListener('animationend', resolve);
    setTimeout(resolve, maxWait);
  });
}

@Directive({
  selector: '[appAnimatedIf]'
})
export class AnimatedIfDirective extends NgIf {

  private visible = false;

  @Input()
  set appAnimatedIf(val: boolean) {
    if(this.visible && !val) {
      this.hide();
    }else if(!this.visible && val) {
      this.show();
    }
    this.visible = val;
  }

  @Output() animatedIfOnShow = new EventEmitter<any>(false);
  @Output() animatedIfOnHide = new EventEmitter<any>(false);

  constructor(private viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>) {
    super(viewContainerRef, templateRef);
  }

  private getContainer(): HTMLElement | null {
    if (this.viewContainerRef.length > 0) {
      return (this.viewContainerRef.get(0) as EmbeddedViewRef<any>).rootNodes[0];
    } else {
      return null;
    }
  }

  private hide() {
    let container = this.getContainer();
    if(!!container) {
      container.classList.remove('showing');
      container.classList.add('hiding');
      animationEndSafe(container, 1000).then(() => {
        this.ngIf = this.visible;
        container.classList.remove('hiding');
      })
      this.animatedIfOnHide.emit();
    }
  }

  private show() {
    this.ngIf = true;
    let container = this.getContainer();
    if(!!container) {
      container.classList.remove('hiding');
      container.classList.add('showing');
      animationEndSafe(container, 1000).then(() => {
        this.ngIf = this.visible;
        container.classList.remove('showing');
      })
      this.animatedIfOnShow.emit();
    }
  }

}
