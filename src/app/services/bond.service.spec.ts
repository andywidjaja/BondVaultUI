import { TestBed } from '@angular/core/testing';

import { BondService } from './bond.service';

describe('BondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BondService = TestBed.get(BondService);
    expect(service).toBeTruthy();
  });
});
