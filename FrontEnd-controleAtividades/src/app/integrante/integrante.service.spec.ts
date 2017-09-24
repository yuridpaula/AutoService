import { TestBed, inject } from '@angular/core/testing';

import { IntegranteService } from './integrante.service';

describe('IntegranteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntegranteService]
    });
  });

  it('should be created', inject([IntegranteService], (service: IntegranteService) => {
    expect(service).toBeTruthy();
  }));
});
