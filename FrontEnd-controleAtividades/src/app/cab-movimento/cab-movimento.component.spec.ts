import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabMovimentoComponent } from './cab-movimento.component';

describe('CabMovimentoComponent', () => {
  let component: CabMovimentoComponent;
  let fixture: ComponentFixture<CabMovimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabMovimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
