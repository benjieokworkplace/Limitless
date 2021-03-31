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
  portfolios: any = [];
  portfolioName: string = '';
  products = [
    'GOOGL',
    'MSFT',
    'TSLA',
    'AMZN',
    'IBM',
    'YAHO',
    'SUNW',
    'AAPL'
  ];

  //make trade parameters
  product: string = '';
  quantity: any;
  price: any;
  portfolioId: any;

  constructor(private toastr: ToastrService, private tradeService: TradeService, private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.getPortfolios();
  }

  getPortfolios() {
    this.portfolioService.getPortfolios().subscribe(response => {
      console.log(response);
      this.portfolios = response;
    }, error => {
      console.log(error);
    });
  }

  addPortfolio() {
    console.log(this.portfolioName);
    return this.portfolioService.addPortfolio(this.portfolioName).subscribe(response => {
      console.log('response', response);
      //add the updated portfolio to the current list
      this.portfolios = response;
      this.toastr.success('Portfolio added successfully');

      this.closeModal();
    }, error => {
      console.log(error);
    });
  }

  closeModal() {
    document.getElementById('closeButton').click();
    this.portfolioName = ' ';
  }

  makeTrade(side: string) {
    if (this.formIsInvalid()) {
      this.toastr.error('Provide all form details', 'Error');
      return;
    }

    let data = {
      'product': this.product,
      'quantity': this.quantity,
      'price': this.price,
      'side': side,
      'customerId': Config.getId(),
      'portfolioId': this.portfolioId
    };

    console.log('data', data);
    this.tradeService.makeTrade(data).subscribe(response => {
      console.log('response', response);
      this.toastr.success(response['message']);
    }, error => {
      console.log(error);
    });
  }


  formIsInvalid() {
    return (this.product === undefined || this.product === ''
      || this.quantity === undefined || this.quantity === ''
      || this.price === undefined || this.price === '');
  }
}
