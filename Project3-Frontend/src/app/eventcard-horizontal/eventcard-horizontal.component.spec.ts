import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardHorizontalComponent } from './eventcard-horizontal.component';

describe('EventcardHorizontalComponent', () => {
  let component: EventcardHorizontalComponent;
  let fixture: ComponentFixture<EventcardHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
