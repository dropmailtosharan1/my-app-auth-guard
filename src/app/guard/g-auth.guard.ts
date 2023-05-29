import { CanActivateFn } from '@angular/router';

export const gAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
