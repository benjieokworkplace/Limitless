// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


// Trade Routing
import { TradingOptionsComponent } from './tradingOptions.component';
import { TradingRoutingModule } from './trade-routing.module';
import {MakeTradeComponent} from './make-trade.component';

@NgModule({
  imports: [
    CommonModule,
    TradingRoutingModule
  ],
  declarations: [
    TradingOptionsComponent,
    MakeTradeComponent
  ]
})
export class TradeModule { }
