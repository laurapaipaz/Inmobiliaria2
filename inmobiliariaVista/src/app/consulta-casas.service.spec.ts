import { TestBed } from '@angular/core/testing';

import { ConsultaCasasService } from './consulta-casas.service';

describe('ConsultaCasasService', () => {
  let service: ConsultaCasasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaCasasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
