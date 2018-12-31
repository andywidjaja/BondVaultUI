import { TestBed, async, inject } from '@angular/core/testing';

import { BondDetailGuard } from './bond-detail.guard';

describe('BondDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BondDetailGuard]
    });
  });

  it('should ...', inject([BondDetailGuard], (guard: BondDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
