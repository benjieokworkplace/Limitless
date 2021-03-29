import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from '../models/Config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: any): Observable<any> {
    return this.httpClient.post(Config.apiUrl() + '/auth/signin', {username: email, password: password});
  }

  register(data: object) {
    return this.httpClient.post(Config.apiUrl() + '/auth/signup', data);
  }
}
