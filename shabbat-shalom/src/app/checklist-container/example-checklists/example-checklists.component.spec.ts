import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleChecklistsComponent } from './example-checklists.component';

describe('ExampleChecklistsComponent', () => {
  let component: ExampleChecklistsComponent;
  let fixture: ComponentFixture<ExampleChecklistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleChecklistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleChecklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
