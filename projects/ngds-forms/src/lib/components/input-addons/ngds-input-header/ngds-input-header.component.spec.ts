import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsInputHeaderComponent } from './ngds-input-header.component';

describe('NgdsInputHeaderComponent', () => {
  let component: NgdsInputHeaderComponent;
  let fixture: ComponentFixture<NgdsInputHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdsInputHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdsInputHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
