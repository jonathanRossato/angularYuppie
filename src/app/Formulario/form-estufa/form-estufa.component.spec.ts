import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstufaComponent } from './form-estufa.component';

describe('FormEstufaComponent', () => {
  let component: FormEstufaComponent;
  let fixture: ComponentFixture<FormEstufaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEstufaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstufaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
