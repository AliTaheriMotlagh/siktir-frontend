import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, NavigationService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
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
        return this.navigationService.GoToHome();
      }
      return true;
    } else {
      if (toUrl.indexOf('/register') === 0) {
        return true;
      }
    }

    return this.navigationService.GoToRegister();
  }
}
