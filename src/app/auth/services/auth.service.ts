import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user = undefined;
  
  logout(): Observable<void> {
    this.user = undefined;
    return of(undefined);
  }

  constructor() { }
}
