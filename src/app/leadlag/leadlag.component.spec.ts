import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadlagComponent } from './leadlag.component';

describe('LeadlagComponent', () => {
  let component: LeadlagComponent;
  let fixture: ComponentFixture<LeadlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
