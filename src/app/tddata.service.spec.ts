import { TestBed, inject } from '@angular/core/testing';

import { TddataService } from './tddata.service';

describe('TddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TddataService]
    });
  });

  it('should be created', inject([TddataService], (service: TddataService) => {
    expect(service).toBeTruthy();
  }));
});
