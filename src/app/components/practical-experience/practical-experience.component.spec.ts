import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalExperienceComponent } from './practical-experience.component';

describe('PracticalExperienceComponent', () => {
  let component: PracticalExperienceComponent;
  let fixture: ComponentFixture<PracticalExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
