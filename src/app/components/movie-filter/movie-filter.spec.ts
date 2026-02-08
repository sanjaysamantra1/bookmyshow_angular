import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFilter } from './movie-filter';

describe('MovieFilter', () => {
  let component: MovieFilter;
  let fixture: ComponentFixture<MovieFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
