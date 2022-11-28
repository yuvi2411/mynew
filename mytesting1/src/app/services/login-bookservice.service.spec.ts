import { TestBed } from '@angular/core/testing';

import { LoginBookserviceService } from './login-bookservice.service';

describe('LoginBookserviceService', () => {
  let service: LoginBookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginBookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
