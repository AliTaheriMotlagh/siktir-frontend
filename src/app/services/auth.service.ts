import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthDto, TokenDto } from '../dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo = new BehaviorSubject({});
  jwtHelper = new JwtHelperService();
  access_token = '';
  isLoggedIn = false;
  fpPromise: Promise<any>;
  constructor(private api: ApiService) {
    this.loadUserInfo();
    this.fpPromise = FingerprintJS.load();
  }

  async GetFingerprint() {
    const fp = await this.fpPromise;
    const result = await fp.get();
    return result.visitorId;
  }

  Register(dto: AuthDto) {
    return this.api
      .post<TokenDto>(`${environment.apiUrl}/api/auth/register`, dto)
      .pipe(tap((data) => this.setUser(data.access_token)));
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  GetToken() {
    return localStorage.getItem('access_token');
  }

  RemoveToken() {
    localStorage.removeItem('access_token');
  }

  private setUser(access_token: string) {
    if (!this.jwtHelper.isTokenExpired(access_token)) {
      this.isLoggedIn = true;
      localStorage.setItem('access_token', access_token);
      const token = this.jwtHelper.decodeToken(access_token);
      this.userInfo.next({ token });
    }
  }

  private loadUserInfo() {
    if (this.userInfo.getValue()) {
      const access_token = this.GetToken();
      if (access_token) {
        this.setUser(access_token);
      }
    }
  }
}
