import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionformComponent } from './submissionform.component';

describe('SubmissionformComponent', () => {
  let component: SubmissionformComponent;
  let fixture: ComponentFixture<SubmissionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
