import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardVerticalComponent } from './eventcard-vertical.component';

describe('EventcardVerticalComponent', () => {
  let component: EventcardVerticalComponent;
  let fixture: ComponentFixture<EventcardVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcardVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
