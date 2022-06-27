import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private route: Router) {}

  goToHome() {
    return this.route.navigate(['/', 'home']);
  }

  goToNewDokme() {
    return this.route.navigate(['/', 'dokme', 'new']);
  }
}
