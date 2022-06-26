import { UserService } from './../../api/services/user.service';
import { map, mapTo, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private tokenInfo?: {
    token: string;
    token_expire: string;
    refresh_token: string;
    refresh_token_expire: string;
  } = {
    token: 'dummy',
    refresh_token: 'dummy',
    token_expire: 'today',
    refresh_token_expire: 'today',
  };

  constructor(
    private userService: UserService
  ) {
  }


  login(login: string, password: string): Observable<void> {
    return this.userService.userLogin({ body: { login, password } })
      .pipe(
        tap(res => this.tokenInfo = res),
        map(() => undefined)
      );
  }
  
  isAuthenticated(): boolean {
    return typeof this.tokenInfo?.token !== 'undefined';
  }

  logout(): Observable<void> {
    this.tokenInfo = undefined;
    return of(undefined);
  }
  
  getToken(): string | undefined {
    return this.tokenInfo?.token;
  }

}
