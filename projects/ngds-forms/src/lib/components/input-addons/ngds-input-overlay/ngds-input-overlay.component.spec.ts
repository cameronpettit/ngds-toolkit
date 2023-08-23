import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsInputOverlayComponent } from './ngds-input-overlay.component';

describe('NgdsInputOverlayComponent', () => {
  let component: NgdsInputOverlayComponent;
  let fixture: ComponentFixture<NgdsInputOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgdsInputOverlayComponent]
    });
    fixture = TestBed.createComponent(NgdsInputOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
