import { UserService } from './../../api/services/user.service';
import { map, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';

const TOKEN_INFO_KEY = 'com.cargodrom.token-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private tokenInfo?: {
    token: string;
    token_expire: string;
    refresh_token: string;
    refresh_token_expire: string;
  };

  constructor(
    private userService: UserService
  ) {
    this.loadTokenFromLocalStorage();
  }


  login(login: string, password: string): Observable<void> {
    return this.userService.userLogin({ body: { login, password } })
      .pipe(
        tap(res => this.tokenInfo = res),
        tap(() => this.saveTokenToLocalStorage()),
        map(() => undefined)
      );
  }
  
  isAuthenticated(): boolean {
    return typeof this.tokenInfo?.token !== 'undefined';
  }

  logout(): Observable<void> {
    this.tokenInfo = undefined;
    this.removeTokenFromLocalStorage();
    return of(undefined);
  }
  
  getToken(): string | undefined {
    return this.tokenInfo?.token;
  }
  
  private loadTokenFromLocalStorage(): void {
    const tokenInfoString = window.localStorage.getItem(TOKEN_INFO_KEY);
    if (!tokenInfoString) {
      return;
    }
    try {
      const tokenInfo = JSON.parse(tokenInfoString);
      if (tokenInfo) {
        this.tokenInfo = tokenInfo;
      }
    } catch(e) {
      console.log(`unable to load token from local storage`, e);
    }
  }
  
  private saveTokenToLocalStorage(): void {
    window.localStorage.setItem(TOKEN_INFO_KEY, JSON.stringify(this.tokenInfo));
  }
  
  private removeTokenFromLocalStorage(): void {
    window.localStorage.removeItem(TOKEN_INFO_KEY);
  }

}
