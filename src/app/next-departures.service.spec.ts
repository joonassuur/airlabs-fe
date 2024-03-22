import { TestBed } from '@angular/core/testing';

import { NextDeparturesService } from './next-departures.service';

describe('NextDeparturesService', () => {
  let service: NextDeparturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextDeparturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
