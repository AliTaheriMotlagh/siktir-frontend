import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private route: Router) {}

  GoToHome() {
    return this.route.navigate(['/', 'home']);
  }

  GoToRegister() {
    return this.route.navigate(['/', 'register']);
  }

  GoToNewDokme() {
    return this.route.navigate(['/', 'dokmes', 'create']);
  }

  goToDokmeUrl(url: string) {
    window.open(url);
  }
}
