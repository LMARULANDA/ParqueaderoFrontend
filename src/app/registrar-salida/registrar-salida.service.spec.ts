import { TestBed, inject } from '@angular/core/testing';

import { RegistrarSalidaService } from './registrar-salida.service';

describe('RegistrarSalidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrarSalidaService]
    });
  });

  it('should be created', inject([RegistrarSalidaService], (service: RegistrarSalidaService) => {
    expect(service).toBeTruthy();
  }));
});
