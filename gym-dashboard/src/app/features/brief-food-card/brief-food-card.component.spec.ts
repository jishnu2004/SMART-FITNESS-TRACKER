import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefFoodCardComponent } from './brief-food-card.component';

describe('BriefFoodCardComponent', () => {
  let component: BriefFoodCardComponent;
  let fixture: ComponentFixture<BriefFoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BriefFoodCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefFoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
