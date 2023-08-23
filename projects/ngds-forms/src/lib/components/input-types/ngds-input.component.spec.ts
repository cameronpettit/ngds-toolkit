import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsInput } from './ngds-input.component';

describe('NgdsInput', () => {
  let component: NgdsInput;
  let fixture: ComponentFixture<NgdsInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdsInput ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdsInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
