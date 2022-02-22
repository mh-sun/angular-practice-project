import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css', "../test/test.component.css"]
})
export class TestChildComponent implements OnInit, OnChanges, DoCheck{

  simpleText:string = ''

  constructor() {
    console.log('Child Constructor')
   }
  ngDoCheck(): void {
    console.log('Child Do check')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child Onchange')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('Child OnInit')
  }

}
