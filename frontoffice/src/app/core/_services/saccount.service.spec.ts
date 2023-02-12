import { TestBed } from '@angular/core/testing';

import { SaccountService } from './saccount.service';

describe('SaccountService', () => {
  let service: SaccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
