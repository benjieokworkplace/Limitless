import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from '../models/Config';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  login(email: string, password: any): Observable<any> {
    return this.httpClient.post(Config.apiUrl() + '/auth/signin', {username: email, password: password});
  }

  register(data: object) {
    return this.httpClient.post(Config.apiUrl() + '/auth/signup', data);
  }

  logout() {
    Config.clear();
    this.router.navigateByUrl("/login")
  }
}
