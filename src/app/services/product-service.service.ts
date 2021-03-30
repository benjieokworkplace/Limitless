import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from '../models/Config';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) {
  }

  product(): Observable<any> {
    return this.httpClient.get(Config.apiUrl() + '/trade/order');
  }
}
