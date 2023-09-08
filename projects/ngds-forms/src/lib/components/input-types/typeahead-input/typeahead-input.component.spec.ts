import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadInputComponent } from './typeahead-input.component';

describe('TypeaheadInputComponent', () => {
  let component: TypeaheadInputComponent;
  let fixture: ComponentFixture<TypeaheadInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeaheadInputComponent]
    });
    fixture = TestBed.createComponent(TypeaheadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
