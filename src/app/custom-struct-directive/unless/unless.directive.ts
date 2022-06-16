import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  /*this input binds the setter for the corresponding
    unless property to run every time the condition we pass
    to the directive changes
  */
  @Input() set appUnless(propertyValueCondition: boolean) {
    if(!propertyValueCondition) {
      //here we want to show the content like opposite of ngIf  
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  //here we need the template we have to render 
  //and the point in the document where it has to be added
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

   }

}
