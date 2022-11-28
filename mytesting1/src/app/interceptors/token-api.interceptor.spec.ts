import { TestBed } from '@angular/core/testing';

import { TokenApiInterceptor } from './token-api.interceptor';

describe('TokenApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenApiInterceptor = TestBed.inject(TokenApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
