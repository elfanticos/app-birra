import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, tap } from 'rxjs';
import { BevandaService } from '../services/bevanda.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  page = 1;
  length = 20;
  searchControl = new FormControl();
  birres: any[] = [];
  service = false;
  constructor(
    private _bevandaService: BevandaService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.loadBirres();

    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      tap(() => this.page = 1)
    ).subscribe(() => {
      this.loadBirres();
    });
  }

  loadBirres(): void {

    if (this.service) return;
    this.service = true;

    const body = {
      page: this.page,
      length: this.length,
      search: this.searchControl.value
    };

    this._bevandaService.birraList(body).subscribe((list: any[]) => {
      this.birres = list;
      this.service = false;
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.service = false;
    });
  }

  prevPage(): void {
    if (this.service) return;
    this.page--;
    this.loadBirres();
  }

  nextPage(): void {
    if (this.service) return;
    this.page++;
    this.loadBirres();
  }

  logout(): void {
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }

}
