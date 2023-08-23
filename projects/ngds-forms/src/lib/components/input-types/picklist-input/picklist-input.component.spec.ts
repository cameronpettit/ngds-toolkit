import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicklistInputComponent } from './picklist-input.component';

describe('PicklistInputComponent', () => {
  let component: PicklistInputComponent;
  let fixture: ComponentFixture<PicklistInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicklistInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicklistInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
