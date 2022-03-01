import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component'
import { HightlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AddClassDirective } from './directives/add-class.directive';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HightlightDirective,
    UnlessDirective,
    AddClassDirective,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
