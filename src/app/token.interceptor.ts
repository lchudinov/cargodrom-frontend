import { AuthService } from './auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfiguration } from './api/api-configuration';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  apiUrl: string;

  constructor(
    private auth: AuthService,
    apiConfig: ApiConfiguration
  ) {
    this.apiUrl = apiConfig.rootUrl;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.injectToken(request));
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
}
