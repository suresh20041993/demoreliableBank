import { TestBed } from '@angular/core/testing';

import { LeadcreateserviceService } from './leadcreateservice.service';

describe('LeadcreateserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadcreateserviceService = TestBed.get(LeadcreateserviceService);
    expect(service).toBeTruthy();
  });
});
