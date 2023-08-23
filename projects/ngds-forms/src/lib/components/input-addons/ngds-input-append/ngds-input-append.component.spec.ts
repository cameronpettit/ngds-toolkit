import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsInputAppendComponent } from './ngds-input-append.component';

describe('NgdsInputAppendComponent', () => {
  let component: NgdsInputAppendComponent;
  let fixture: ComponentFixture<NgdsInputAppendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgdsInputAppendComponent]
    });
    fixture = TestBed.createComponent(NgdsInputAppendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
