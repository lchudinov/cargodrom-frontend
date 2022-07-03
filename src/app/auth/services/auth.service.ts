import { TokenInfo } from './../../api/custom_models/token-info';
import { UserService } from './../../api/services/user.service';
import { map, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';

const TOKEN_INFO_KEY = 'com.cargodrom.token-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenInfo?: TokenInfo;

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
    } catch (e) {
      console.log(`unable to load token from local storage`, e);
    }
  }

  private saveTokenToLocalStorage(): void {
    window.localStorage.setItem(TOKEN_INFO_KEY, JSON.stringify(this.tokenInfo));
  }

  private removeTokenFromLocalStorage(): void {
    window.localStorage.removeItem(TOKEN_INFO_KEY);
  }

  isTokenExpired(): boolean {
    if (this.tokenInfo?.token_expire) {
      try {
        const expireDate = new Date(this.tokenInfo?.token_expire);
        const now = new Date();
        return (expireDate.getTime() - now.getTime()) < 10000;
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  refreshToken(): Observable<void> {
    const body = { refresh_token: this.tokenInfo!.refresh_token };
    return this.userService.userUpdateToken({body}).pipe(
      tap(res => this.tokenInfo = res as TokenInfo),
      tap(() => this.saveTokenToLocalStorage()),
      map(() => undefined)
    );
  }

}
