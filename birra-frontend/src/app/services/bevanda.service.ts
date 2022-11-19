import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BevandaService {
  private PATH_BASE = 'http://localhost:3000/bevanda';
  constructor(
    private _httpClient: HttpClient
  ) { }

  birraList(body: { page: number, length: number, search: string }): Observable<any> {
    const params = new HttpParams()
      .set('page', body.page || 0)
      .set('length', body.length || 0)
      .set('search', body.search || '')
    return this._httpClient.get(`${this.PATH_BASE}/birraList`, { params });
  }
}
