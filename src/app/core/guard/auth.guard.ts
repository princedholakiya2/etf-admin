import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import {CustomLocalStorage} from '../helpers/localStorage';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!CustomLocalStorage.checkToken()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
