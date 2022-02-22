import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges, DoCheck {

  constructor() {
    console.log('Parent Constructor')
   }
  ngDoCheck(): void {
    console.log('Parent doCheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent Onchange')
  }

  ngOnInit(): void {
    console.log('Parent OnInit')
  }

}
