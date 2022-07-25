import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private route: Router, private domSanitizer: DomSanitizer) {}

  GoToHome() {
    return this.route.navigate(['/', 'home']);
  }

  GoToRegister() {
    return this.route.navigate(['/', 'register']);
  }

  GoToNewDokme() {
    return this.route.navigate(['/', 'dokmes', 'create']);
  }

  GoToDokme(dokmeId: string) {
    return this.route.navigate(['/', 'dokme', dokmeId]);
  }

  goToDokmeUrl(url: string) {
    window.open(url);
  }

  transformToSafeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
