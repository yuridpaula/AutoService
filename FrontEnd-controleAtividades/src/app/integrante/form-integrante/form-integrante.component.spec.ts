import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIntegranteComponent } from './form-integrante.component';

describe('FormIntegranteComponent', () => {
  let component: FormIntegranteComponent;
  let fixture: ComponentFixture<FormIntegranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIntegranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
