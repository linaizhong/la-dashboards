import { TestBed } from '@angular/core/testing';

import { LaApiService } from './la-api.service';

describe('LaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaApiService = TestBed.get(LaApiService);
    expect(service).toBeTruthy();
  });
});
