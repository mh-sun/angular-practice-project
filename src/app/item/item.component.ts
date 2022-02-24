import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(){
    this.currItem = null
  }
  
  currItem:any = {
    id:100,
    name:"Books",
  }
  items = [
    {id:100,name:"book"},
    {id:200,name:"pen"},
    {id:300,name:"notebook"},
  ]
  color = ""
}
