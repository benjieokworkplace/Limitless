import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Config} from '../models/Config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private httpClient: HttpClient) {
  }

  makeTrade(data: object): Observable<any> {
    return this.httpClient.post(Config.apiUrl() + '/trade/order', data);
  }
}
