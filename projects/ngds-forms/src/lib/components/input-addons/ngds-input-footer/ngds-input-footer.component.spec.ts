import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdsInputFooterComponent } from './ngds-input-footer.component';

describe('NgdsInputFooterComponent', () => {
  let component: NgdsInputFooterComponent;
  let fixture: ComponentFixture<NgdsInputFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdsInputFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgdsInputFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
