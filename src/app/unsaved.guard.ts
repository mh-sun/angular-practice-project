import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirstComponent } from './first/first.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<FirstComponent> {
  canDeactivate(component: FirstComponent): boolean {
    return window.confirm('Are you sure?')
  }
}
