import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadcreationComponent } from './leadcreation.component';

describe('LeadcreationComponent', () => {
  let component: LeadcreationComponent;
  let fixture: ComponentFixture<LeadcreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadcreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
