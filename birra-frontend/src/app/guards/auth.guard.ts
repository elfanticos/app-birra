import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
  ) { }
  async canActivate() {
    let retu = true;
    const token = localStorage.getItem('token');

    if (token) {
      this._router.navigate(['main']);
    }

    return retu;
  }

}
