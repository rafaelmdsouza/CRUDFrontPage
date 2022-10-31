import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoodgroupComponent } from './new-foodgroup.component';

describe('NewFoodgroupComponent', () => {
  let component: NewFoodgroupComponent;
  let fixture: ComponentFixture<NewFoodgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFoodgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFoodgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
