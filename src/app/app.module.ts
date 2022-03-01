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
import { FirstOneComponent } from './first/first-one/first-one.component';
import { FirstTwoComponent } from './first/first-two/first-two.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HightlightDirective,
    UnlessDirective,
    AddClassDirective,
    FirstComponent,
    SecondComponent,
    FirstOneComponent,
    FirstTwoComponent,
    PageNotFoundComponent,
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
