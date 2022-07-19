import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  post<T>(endpoint: string, body?: any) {
    return this.http.post<T>(endpoint, body);
  }
  get<T>(endpoint: string, params?: any) {
    return this.http.get<T>(endpoint, { params });
  }
}
