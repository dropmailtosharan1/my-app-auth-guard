import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SAuthService {

  constructor() { }

  public getToken(): boolean {
    return true;
  }
}
