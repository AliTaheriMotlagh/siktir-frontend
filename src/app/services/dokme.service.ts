import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DokmeDto } from '../dto';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DokmeService {
  constructor(private api: ApiService) {}

  createDokme(dto: DokmeDto) {
    return this.api.post(`${environment.apiUrl}/dokme/create`, dto);
  }
}
