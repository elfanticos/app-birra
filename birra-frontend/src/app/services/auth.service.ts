import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  PATH_BASE = 'http://localhost:3000/auth';
  constructor(
    private _httpClient: HttpClient
  ) { }

  login(user: string, password: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { user, password };

    return this._httpClient.post(`${this.PATH_BASE}/login`, body, { headers });
  }

}
