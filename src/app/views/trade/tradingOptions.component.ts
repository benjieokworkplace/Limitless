import { Component, Inject, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ProductServiceService } from '../../services/product-service.service'

@Component({
  templateUrl: './tradingOptions.component.html'
})
export class TradingOptionsComponent implements OnInit{

products:[] = [];

  constructor(private toastr: ToastrService, private productService: ProductServiceService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.product().subscribe(response=> {
      console.log(response);
      this.products = response
    }, error => {
      console.log(error)
    });
  }

}
