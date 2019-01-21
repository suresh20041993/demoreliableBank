import { TestBed } from '@angular/core/testing';

import { LeadsearchService } from './leadsearch.service';

describe('LeadsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadsearchService = TestBed.get(LeadsearchService);
    expect(service).toBeTruthy();
  });
});
