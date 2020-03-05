import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShabbatAlertComponent } from './shabbat-alert.component';

describe('ShabbatAlertComponent', () => {
  let component: ShabbatAlertComponent;
  let fixture: ComponentFixture<ShabbatAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShabbatAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShabbatAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
