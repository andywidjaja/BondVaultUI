import { BondModule } from './bond.module';

describe('BondModule', () => {
  let bondModule: BondModule;

  beforeEach(() => {
    bondModule = new BondModule();
  });

  it('should create an instance', () => {
    expect(bondModule).toBeTruthy();
  });
});
