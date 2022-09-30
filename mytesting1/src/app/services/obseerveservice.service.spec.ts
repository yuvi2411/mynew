import { TestBed } from '@angular/core/testing';

import { ObseerveserviceService } from './obseerveservice.service';

describe('ObseerveserviceService', () => {
  let service: ObseerveserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObseerveserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
