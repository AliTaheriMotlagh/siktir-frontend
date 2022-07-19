import { Injectable } from '@angular/core';
import { FingerprintjsProAngularService } from '@fingerprintjs/fingerprintjs-pro-angular';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthDto, TokenDto } from '../dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo = new BehaviorSubject({});
  fingerprint: string = '';
  constructor(
    private api: ApiService,
    private fingerprintjsProAngularService: FingerprintjsProAngularService
  ) {
    this.getFingerprint();
  }

  Register(dto: AuthDto) {
    return this.api
      .post<TokenDto>(`${environment.apiUrl}/auth/register`, dto)
      .pipe(tap((data) => this.userInfo.next(data.access_token)));
  }

  private async getFingerprint() {
    const data = await this.fingerprintjsProAngularService.getVisitorData();
    this.fingerprint = data.visitorId;
  }
}
