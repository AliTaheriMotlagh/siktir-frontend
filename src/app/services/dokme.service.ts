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

  CreateDokme(dto: CreateDokmeDto) {
    return this.api.post<DokmeDto>(
      `${environment.apiUrl}/api/dokmes/create`,
      dto
    );
  }

  GetAllDokme() {
    return this.api.get<DokmeDto[]>(`${environment.apiUrl}/api/dokmes/all`);
  }

  GetDokmeById(id: string) {
    return this.api.get<DokmeDto>(`${environment.apiUrl}/api/dokmes/one/${id}`);
  }
}
