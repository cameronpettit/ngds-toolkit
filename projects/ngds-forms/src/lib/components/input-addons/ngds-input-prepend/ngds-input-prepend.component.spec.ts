import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsInputPrependComponent } from './ngds-input-prepend.component';

describe('NgdsInputPrependComponent', () => {
  let component: NgdsInputPrependComponent;
  let fixture: ComponentFixture<NgdsInputPrependComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgdsInputPrependComponent]
    });
    fixture = TestBed.createComponent(NgdsInputPrependComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
