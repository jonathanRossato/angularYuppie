import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPulsoComponent } from './form-pulso.component';

describe('FormPulsoComponent', () => {
  let component: FormPulsoComponent;
  let fixture: ComponentFixture<FormPulsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPulsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPulsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
