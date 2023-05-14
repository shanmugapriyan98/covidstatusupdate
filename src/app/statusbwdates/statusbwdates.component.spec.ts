import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusbwdatesComponent } from './statusbwdates.component';

describe('StatusbwdatesComponent', () => {
  let component: StatusbwdatesComponent;
  let fixture: ComponentFixture<StatusbwdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusbwdatesComponent]
    });
    fixture = TestBed.createComponent(StatusbwdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
