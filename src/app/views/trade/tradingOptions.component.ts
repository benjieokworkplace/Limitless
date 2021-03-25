import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';

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
