import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cloneIf]'
})
export class CustomStructuralDirective {

  @Input() set cloneIf(x: boolean){
    this.renderElement(x);
  }

  constructor(private tempRef : TemplateRef<unknown>, private viewRef : ViewContainerRef, private er : ElementRef) { }

  renderElement(x : boolean){
    if(x){
      this.viewRef.createEmbeddedView(this.tempRef); 
    } 
    else {
       this.viewRef.clear();
    }
  }

}
