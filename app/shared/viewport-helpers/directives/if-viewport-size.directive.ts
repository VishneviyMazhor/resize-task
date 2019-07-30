import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ViewportHelperService, ViewportSize} from "../services/viewport-helper.service";

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective implements OnInit{

  private viewRendered: boolean;

  @Input() ifViewportSize: ViewportSize;


  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef,
      private viewportHelper: ViewportHelperService
  ) {
  }

  ngOnInit(): void {
    this.viewportHelper.viewportSize.subscribe((size: ViewportSize) => {
      if (size === this.ifViewportSize && !this.viewRendered) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.viewRendered = true;
      } else if (size !== this.ifViewportSize && this.viewRendered) {
        this.viewContainerRef.clear();
        this.viewRendered = false;
      }
    });
  }


}
