import { TestBed, inject } from '@angular/core/testing';

import { ItemMovimentoService } from './item-movimento.service';

describe('ItemMovimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemMovimentoService]
    });
  });

  it('should be created', inject([ItemMovimentoService], (service: ItemMovimentoService) => {
    expect(service).toBeTruthy();
  }));
});
