import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemMovimentoComponent } from './form-item-movimento.component';

describe('FormItemMovimentoComponent', () => {
  let component: FormItemMovimentoComponent;
  let fixture: ComponentFixture<FormItemMovimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormItemMovimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
