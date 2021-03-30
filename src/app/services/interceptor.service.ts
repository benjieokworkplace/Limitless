import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable, throwError} from 'rxjs';
import {Config} from '../models/Config';
import {catchError, retry} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //get the token
    let token = Config.getToken();
    console.log('token', token);

    let request;
    //clone the request and add authentication header
    if (token === null || token === undefined) {
      request = req;
    } else {
      request = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
    }


    return next.handle(request).pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        //handle token expiration or unauthenticated messages here
        if (err.status === 401 || err.status === 403) {
          //send user to the login page - forced logout
          this.authService.logout();
        }
        return throwError(err);
      })
    );
  }
}
