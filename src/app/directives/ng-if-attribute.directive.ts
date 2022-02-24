import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgIfAttribute]'
})
export class NgIfAttributeDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.fontSize = "20px"
  }

  @Input() bgColor = ''

  @HostListener('mouseenter') onMouseEnter(){
    // console.log(this.bgColor)
    this.elem.nativeElement.style.backgroundColor = this.bgColor === ''?'red':this.bgColor
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elem.nativeElement.style.backgroundColor = ''
  }
}
