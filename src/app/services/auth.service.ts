import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthDto } from '../dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  Register(dto: AuthDto) {
    return this.api.post(`${environment.apiUrl}/auth/register`, dto);
  }
}
