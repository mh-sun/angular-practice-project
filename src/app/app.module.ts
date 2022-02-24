import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component'
import { NgIfAttributeDirective } from './directives/ng-if-attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NgIfAttributeDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
