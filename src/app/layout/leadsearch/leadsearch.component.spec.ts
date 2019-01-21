import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsearchComponent } from './leadsearch.component';

describe('LeadsearchComponent', () => {
  let component: LeadsearchComponent;
  let fixture: ComponentFixture<LeadsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
