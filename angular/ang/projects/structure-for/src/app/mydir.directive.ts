import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(el:ElementRef,rn:Renderer2) {
    console.log(el);
    rn.setStyle(el.nativeElement,'backgroundcolor','blue');
   }

}
