import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DokmeDto, FireSiktirDto, MySiktirsDto } from '../dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SiktirService {
  constructor(private api: ApiService) {}

  FireSiktir(dto: FireSiktirDto) {
    return this.api.put<DokmeDto>(`${environment.apiUrl}/api/siktir/fire`, dto);
  }

  GetUserSiktir() {
    return this.api.get<MySiktirsDto[]>(`${environment.apiUrl}/api/siktir/my`);
  }
}
