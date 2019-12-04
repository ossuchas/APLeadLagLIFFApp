import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadlagsubbgComponent } from './leadlagsubbg.component';

describe('LeadlagsubbgComponent', () => {
  let component: LeadlagsubbgComponent;
  let fixture: ComponentFixture<LeadlagsubbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadlagsubbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadlagsubbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
