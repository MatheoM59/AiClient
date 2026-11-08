import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { inject } from '@angular/core';

export const guestGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  const router = inject(Router);

  return !service.isLoggedIn() ? true : router.createUrlTree(['conversations']);
};
