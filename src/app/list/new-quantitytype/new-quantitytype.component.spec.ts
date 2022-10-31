import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuantitytypeComponent } from './new-quantitytype.component';

describe('NewQuantitytypeComponent', () => {
  let component: NewQuantitytypeComponent;
  let fixture: ComponentFixture<NewQuantitytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQuantitytypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewQuantitytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
