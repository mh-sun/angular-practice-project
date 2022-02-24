import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(
    private tempRef:TemplateRef<any>, 
    private view:ViewContainerRef
  ) 
  { }

  hasView:boolean = false
  @Input() set appUnless(condition:boolean){
    if(!condition && !this.hasView){
      this.view.createEmbeddedView(this.tempRef)
      this.hasView = true
    }
    else if(condition && this.hasView){
      this.view.clear()
      this.hasView = false
    }
  }
}
