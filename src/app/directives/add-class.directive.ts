import { Directive,ElementRef,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective implements OnInit {
  @Input() appAddClass = ''
  constructor(private elem:ElementRef) { 
  }
  ngOnInit(): void {
    // console.log(this.appAddClass)
    this.elem.nativeElement.classList.add(this.appAddClass)
  }
  
}
