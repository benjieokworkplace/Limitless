import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Config} from '../models/Config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private httpClient: HttpClient) { }

  trades() : Observable<any>{
    return this.httpClient.get(Config.apiUrl()+"/trade/order")
  }
}
