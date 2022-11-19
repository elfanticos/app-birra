import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BevandaService } from '../services/bevanda.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  page = 1;
  length = 25;
  searchControl = new FormControl();
  birres: any[] = [];
  constructor(
    private _bevandaService: BevandaService
  ) { }

  ngOnInit(): void {
    this.loadBirres();
  }

  loadBirres(): void {
    const body = {
      page: this.page,
      length: this.length,
      search: this.searchControl.value
    };

    this._bevandaService.birraList(body).subscribe((list: any[]) => {
      console.log(list);
      this.birres = list;
    }, err => {
      console.log(err);
    });
  }

  prevPage(): void {
    this.page--;
    this.loadBirres();
  }

  nextPage(): void {
    this.page++;
    this.loadBirres();
  }

}
