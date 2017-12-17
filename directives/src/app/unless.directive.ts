import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // makes a setter property for the property
  @Input() set appUnless(condition: boolean){
    if (!condition) {
      // creates view in view container
      this.vcRef.createEmbeddedView(this.templateRef);
    }else {
      this.vcRef.clear();
    }
  }
  // vcRef: marks the place that we put the directive in the document
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
