import { AuthService } from './auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, tap, finalize, map, BehaviorSubject, Subject } from 'rxjs';
import { ApiConfiguration } from './api/api-configuration';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  apiUrl: string;
  private refreshTokenSubject?: Subject<void>;

  constructor(
    private auth: AuthService,
    apiConfig: ApiConfiguration
  ) {
    this.apiUrl = apiConfig.rootUrl;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.requestNotNeedToken(request)) {
      return next.handle(request);
    }
    if (!this.auth.isTokenExpired()) {
      return next.handle(this.injectToken(request))
    }
    if (!this.refreshTokenSubject) {
      this.refreshTokenSubject = new Subject();
      this.auth.refreshToken().subscribe(
        () => {
          this.refreshTokenSubject!.next();
          this.refreshTokenSubject!.complete();
          this.refreshTokenSubject = undefined;
        }
      )
    }
    return this.refreshTokenSubject.pipe(
      switchMap(() => next.handle(this.injectToken(request))),
    );
  }

  private injectToken(request: HttpRequest<any>) {
    const token = this.auth.getToken();
    if (token && request.url.startsWith(this.apiUrl)) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
    }
    return request;
  }

  requestNotNeedToken(request: HttpRequest<any>): boolean {
    const whiteList = ['/user_update_token', '/user_logout'];
    return whiteList.some(path => request.url.endsWith(path))
  }

}
