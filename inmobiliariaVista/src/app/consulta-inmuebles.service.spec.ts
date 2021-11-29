import { TestBed } from '@angular/core/testing';

import { ConsultaInmueblesService } from './consulta-inmuebles.service';

describe('ConsultaInmueblesService', () => {
  let service: ConsultaInmueblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaInmueblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
