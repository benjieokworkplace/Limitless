import { Component, Inject, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ProductServiceService } from '../../services/product-service.service'

@Component({
  templateUrl: './tradingOptions.component.html'
})
export class TradingOptionsComponent implements OnInit{

marketData:[] = [];

  constructor(private toastr: ToastrService, private productService: ProductServiceService) {
  }

  ngOnInit(): void {
    this.getMarketData()
  }

  getMarketData(){
    this.productService.marketData().subscribe(response=> {
      console.log(response);
      this.marketData = response
    }, error => {
      console.log(error)
    });
  }

}
