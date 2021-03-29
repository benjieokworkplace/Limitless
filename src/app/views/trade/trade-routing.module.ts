import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradingOptionsComponent } from './tradingOptions.component';
import { HistoryComponent } from './history.component';
import { MakeTradeComponent } from './make-trade.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule {}
