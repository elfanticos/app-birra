/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BevandaService } from './bevanda.service';

describe('Service: Bevanda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BevandaService]
    });
  });

  it('should ...', inject([BevandaService], (service: BevandaService) => {
    expect(service).toBeTruthy();
  }));
});
