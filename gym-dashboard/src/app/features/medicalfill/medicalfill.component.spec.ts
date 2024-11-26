import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalfillComponent } from './medicalfill.component';

describe('MedicalfillComponent', () => {
  let component: MedicalfillComponent;
  let fixture: ComponentFixture<MedicalfillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalfillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
