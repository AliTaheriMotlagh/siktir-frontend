import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, NavigationService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const toUrl = state.url;
    if (this.authService.isAuthenticated()) {
      if (toUrl.indexOf('/register') === 0) {
        return this.navigationService.goToHome();
      }
      return true;
    } else {
      if (toUrl.indexOf('/register') === 0) {
        return true;
      }
    }

    return this.navigationService.goToRegister();
  }
}
