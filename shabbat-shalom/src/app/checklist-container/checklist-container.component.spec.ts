import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistContainerComponent } from './checklist-container.component';

describe('ChecklistContainerComponent', () => {
  let component: ChecklistContainerComponent;
  let fixture: ComponentFixture<ChecklistContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
