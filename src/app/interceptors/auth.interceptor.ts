import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newReq = request.clone({
      headers: request.headers.set(
        'Authorization',
        'bearer ' + this.authService.GetToken()
      ),
    });
    return next.handle(newReq);
  }
}
