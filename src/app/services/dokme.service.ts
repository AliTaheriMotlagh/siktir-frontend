import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateDokmeDto, DokmeDto } from '../dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DokmeService {
  constructor(private api: ApiService) {}

  createDokme(dto: CreateDokmeDto) {
    return this.api.post<DokmeDto>(`${environment.apiUrl}/api/dokmes/create`, dto);
  }

  getAllDokme() {
    return this.api.get<DokmeDto[]>(`${environment.apiUrl}/api/dokmes`);
  }
}
