import { TestBed, inject } from '@angular/core/testing';

import { CabMovimentoService } from './cab-movimento.service';

describe('CabMovimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CabMovimentoService]
    });
  });

  it('should be created', inject([CabMovimentoService], (service: CabMovimentoService) => {
    expect(service).toBeTruthy();
  }));
});
