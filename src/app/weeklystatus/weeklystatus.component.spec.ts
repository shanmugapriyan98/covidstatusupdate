import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklystatusComponent } from './weeklystatus.component';

describe('WeeklystatusComponent', () => {
  let component: WeeklystatusComponent;
  let fixture: ComponentFixture<WeeklystatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklystatusComponent]
    });
    fixture = TestBed.createComponent(WeeklystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
