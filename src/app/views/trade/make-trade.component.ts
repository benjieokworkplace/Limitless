import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {TradeService} from '../../services/trade.service';
import {PortfolioService} from '../../services/portfolio.service';
import {Config} from '../../models/Config';

@Component({
  selector: 'make-trade',
  templateUrl: 'make-trade.component.html'
})
export class MakeTradeComponent implements OnInit {

  trades: [] = [];
  portfolios: [] = [];
  portfolioName: string="";

  constructor(private toastr: ToastrService, private tradeService: TradeService, private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.getPortfolios();
  }

  getPortfolios(){
    this.portfolioService.getPortfolios().subscribe(response=>{
      console.log(response);
      this.portfolios = response;
    },error => {
      console.log(error)
    });
  }

  addPortfolio(name: string){
    console.log(this.portfolioName);
    return this.portfolioService.addPortfolio(this.portfolioName,).subscribe(response =>{
      console.log(response)
    }, error=>{
      console.log(error)
    });
  }

  sendToTrade() {
    this.tradeService.trades().subscribe(response => {
      console.log(response);
      this.trades = response;
    }, error => {
      console.log(error);
    });
  }

}
