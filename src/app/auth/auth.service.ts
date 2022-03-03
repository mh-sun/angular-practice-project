import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  childLoggedIn = false

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  ChildLogin(): void {
    this.childLoggedIn = true;
  }

  ChildLogout(): void {
    this.childLoggedIn = false;
  }
}