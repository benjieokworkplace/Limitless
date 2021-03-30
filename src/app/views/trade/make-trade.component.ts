import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ProductServiceService} from '../../services/product-service.service';
import {TradeService} from '../../services/trade.service';

@Component({
  selector:'make-trade',
  templateUrl: 'make-trade.component.html'
})
export class MakeTradeComponent implements OnInit {

  trades:[]=[];


  constructor(private toastr: ToastrService, private tradeService: TradeService ) {
  }

  ngOnInit(): void {
    this.sendToTrade()
  }

  sendToTrade(){
    this.tradeService.trades().subscribe(response=> {
      console.log(response);
      this.trades = response
    }, error => {
      console.log(error)
    });
  }

}
