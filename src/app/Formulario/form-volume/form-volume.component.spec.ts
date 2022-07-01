import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVolumeComponent } from './form-volume.component';

describe('FormVolumeComponent', () => {
  let component: FormVolumeComponent;
  let fixture: ComponentFixture<FormVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
