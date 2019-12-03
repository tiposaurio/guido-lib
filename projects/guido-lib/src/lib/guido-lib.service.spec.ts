import { TestBed } from '@angular/core/testing';

import { GuidoLibService } from './guido-lib.service';

describe('GuidoLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuidoLibService = TestBed.get(GuidoLibService);
    expect(service).toBeTruthy();
  });
});
