import { TestBed, inject } from '@angular/core/testing';

import { RegistrarEntradaService } from './registrar-entrada.service';

describe('RegistrarEntradaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrarEntradaService]
    });
  });

  it('should be created', inject([RegistrarEntradaService], (service: RegistrarEntradaService) => {
    expect(service).toBeTruthy();
  }));
});
