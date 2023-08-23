import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsForm } from './base-form.component';

describe('NgdsForm', () => {
  let component: NgdsForm;
  let fixture: ComponentFixture<NgdsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdsForm ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
