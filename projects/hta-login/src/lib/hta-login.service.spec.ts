import { TestBed } from '@angular/core/testing';

import { HtaLoginService } from './hta-login.service';

describe('HtaLoginService', () => {
  let service: HtaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
