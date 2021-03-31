import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from '../models/Config';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private  httpClient: HttpClient) {
  }

  getPortfolios(): Observable<any> {
    return this.httpClient.get(Config.apiUrl() + '/trade/portfolio/all/' + Config.getId());
  }

  addPortfolio(name: string): Observable<any> {
    return this.httpClient.post(Config.apiUrl() + '/trade/portfolio/add', {portfolioName: name, clientId: Config.getId()});
  }
}
