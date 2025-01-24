import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryScoresComponent } from './category-scores.component';

describe('CategoryScoresComponent', () => {
  let component: CategoryScoresComponent;
  let fixture: ComponentFixture<CategoryScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryScoresComponent]
    });
    fixture = TestBed.createComponent(CategoryScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
