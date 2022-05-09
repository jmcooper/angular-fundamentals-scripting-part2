import { TestBed } from '@angular/core/testing';

import { CartRouteActivatorGuard } from './cart-route-activator.guard';

describe('CartRouteActivatorGuard', () => {
  let guard: CartRouteActivatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CartRouteActivatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
