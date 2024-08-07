import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective {

  @Input() colorWhenHover : string = '';
  //we can declare name in input & assign to different name too.
  @Input('colorWhenLeave') onLeaveColor : string = '';
  //we can pass just the directivename in html element and assign it to different name too.
  @Input('appCustomAttributeDirective') buttonColor : string = '';

  constructor(private er : ElementRef) { 
  }

  @HostListener('mouseover')
  onMouseOver(){
    this.er.nativeElement.style.backgroundColor = this.colorWhenHover;
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.er.nativeElement.style.backgroundColor = this.onLeaveColor;
  }

  @HostListener('click')
  onClick(){
    this.er.nativeElement.style.color = this.buttonColor;
  }
  

}
