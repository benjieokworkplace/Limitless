import { Component, Inject, OnInit } from '@angular/core';

@Component({
  templateUrl: './tradingOptions.component.html'
})
export class TradingOptionsComponent {
  
products:string[] = [
  "GOOGL",
  "AMAZON",
  "APPLE",
  "SAMSUNG",
  "DELL"
] 

}
