import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryActionComponent } from './sub-category-action.component';

describe('SubCategoryComponent', () => {
  let component: SubCategoryActionComponent;
  let fixture: ComponentFixture<SubCategoryActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
