import { TestBed } from '@angular/core/testing';

import { DokmeService } from './dokme.service';

describe('DokmeService', () => {
  let service: DokmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DokmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
