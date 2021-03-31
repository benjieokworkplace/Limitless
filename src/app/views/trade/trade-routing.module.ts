import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradingOptionsComponent } from './tradingOptions.component';
import { HistoryComponent } from './history.component';
import { MakeTradeComponent } from './make-trade.component';
import {TradeDetailsComponent} from './trade-details/trade-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Trading Options'
    },
    children: [
      {
        path: '',
        redirectTo: 'trade'
      },
      {
        path: 'market',
        component: TradingOptionsComponent,
        data: {
          title: 'Market Data'
        }
      },
      {
        path: 'trade',
        component: MakeTradeComponent,
        data: {
          title: 'Trade'
        }
      },
      {
        path: 'history',
        component: HistoryComponent,
        data: {
          title: 'History'
        }
      },
      {
        path: 'history/:id/details',
        component: TradeDetailsComponent,
        data: {
          title: 'History Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule {}
