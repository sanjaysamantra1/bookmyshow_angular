import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousal } from './carousal';

describe('Carousal', () => {
  let component: Carousal;
  let fixture: ComponentFixture<Carousal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carousal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carousal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
