import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Component({
    // selector: 'app-parent',
    // selector: '.app-parent',
    selector: "app-parent",
    templateUrl: "./parent.component.html"
})
export class ParentComponent implements 
    OnInit, 
    OnChanges, 
    DoCheck,
    OnDestroy
{
    ngDoCheck(): void {
        console.log("DoCheck called")
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("OnChange called")
    }
    ngOnInit(): void {
        console.log("OnInit called")
    }
    ngOnDestroy(): void {
        console.log("onDestroy called")
    }
    name:string = 'Mehedi Hasan Sun'
    isShown:boolean = true
    toggle(){
        this.isShown = !this.isShown
    }
}