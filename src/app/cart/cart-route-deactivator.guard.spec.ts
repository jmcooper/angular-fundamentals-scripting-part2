import { TestBed } from '@angular/core/testing';

import { CartRouteDeactivatorGuard } from './cart-route-deactivator.guard';

describe('CartRouteDeactivatorGuard', () => {
  let guard: CartRouteDeactivatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CartRouteDeactivatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
