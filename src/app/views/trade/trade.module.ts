// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


// Trade Routing
import { TradingOptionsComponent } from './tradingOptions.component';
import { TradingRoutingModule } from './trade-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TradingRoutingModule
  ],
  declarations: [
    TradingOptionsComponent,
  ]
})
export class TradeModule { }
