import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMovimentoComponent } from './item-movimento.component';

describe('ItemMovimentoComponent', () => {
  let component: ItemMovimentoComponent;
  let fixture: ComponentFixture<ItemMovimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMovimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
