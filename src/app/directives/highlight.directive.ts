import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HightlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.fontSize = "20px"
  }

  @Input() appHighlight = ''

  @HostListener('mouseenter') onMouseEnter(){
    // console.log(this.appHighlight)
    this.elem.nativeElement.style.backgroundColor = this.appHighlight === ''?'red':this.appHighlight
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elem.nativeElement.style.backgroundColor = ''
  }
}
