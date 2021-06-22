import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryFormHandlerComponent } from './sub-category-form-handler.component';

describe('SubCategoryFormHandlerComponent', () => {
  let component: SubCategoryFormHandlerComponent;
  let fixture: ComponentFixture<SubCategoryFormHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryFormHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryFormHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
