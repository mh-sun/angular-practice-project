import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { FirstOneComponent } from '../first/first-one/first-one.component';
import { FirstTwoComponent } from '../first/first-two/first-two.component';
import { FirstComponent } from '../first/first.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SecondComponent } from '../second/second.component';


const routes: Routes = [
  {path: '', redirectTo:'first', pathMatch: 'full'},
  {path:'first', component:FirstComponent, canActivate:[AuthGuard], children:[
      {path:'one', component:FirstOneComponent},
      {path:'two', component:FirstTwoComponent},
    ]},
  {path:'second', component:SecondComponent},
  {path: '**', component:PageNotFoundComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
