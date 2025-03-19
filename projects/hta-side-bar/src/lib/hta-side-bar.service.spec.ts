import { TestBed } from '@angular/core/testing';

import { HtaSideBarService } from './hta-side-bar.service';

describe('HtaSideBarService', () => {
  let service: HtaSideBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtaSideBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
