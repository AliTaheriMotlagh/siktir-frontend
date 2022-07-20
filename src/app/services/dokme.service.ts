import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DokmeDto } from '../dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DokmeService {
  constructor(private api: ApiService) {}

  createDokme(dto: DokmeDto) {
    return this.api.post(`${environment.apiUrl}/api/dokmes/create`, dto);
  }

  getAllDokme() {
    return this.api.get(`${environment.apiUrl}/api/dokmes`);
  }
}
