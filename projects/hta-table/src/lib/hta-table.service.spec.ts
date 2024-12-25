import { TestBed } from '@angular/core/testing';

import { HtaTableService } from './hta-table.service';

describe('HtaTableService', () => {
  let service: HtaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
