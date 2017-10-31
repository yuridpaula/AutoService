import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCabMovimentoComponent } from './form-cab-movimento.component';

describe('FormCabMovimentoComponent', () => {
  let component: FormCabMovimentoComponent;
  let fixture: ComponentFixture<FormCabMovimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCabMovimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCabMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
