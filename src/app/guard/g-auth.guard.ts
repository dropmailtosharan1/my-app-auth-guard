import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { SAuthService } from '../service/s-auth.service';

@Injectable({
  providedIn: 'root',
})
export class GAuthGuard implements CanActivate {
  constructor (private authService:SAuthService){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(!this.authService.getToken())
    return false;
    else
    return true;
  }
}
