import { TestBed } from '@angular/core/testing';

import { ScanServService } from './scan-serv.service';

describe('ScanServService', () => {
  let service: ScanServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScanServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
