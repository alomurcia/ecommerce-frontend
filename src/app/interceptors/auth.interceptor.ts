import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const credentials = this.authService.getCredentials();
    console.log("credentials"+credentials);
    if (credentials) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Basic ' + btoa(credentials.username + ':' + credentials.password))
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
