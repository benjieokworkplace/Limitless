import { Component } from '@angular/core';

@Component({
  selector:'transactions',
  templateUrl: 'transactions.component.html'
})
export class TransactionsComponent {
//    products :any  = [
//     {id: 1, name:'Superman'},
//     {id: 2, name:'Batman'},
//     {id: 5, name:'BatGirl'},
//     {id: 3, name:'Robin'},
//     {id: 4, name:'Flash'}
// ];
  products:string[] = [
    "GOOGL",
    "AMAZON",
    "APPLE",
    "SAMSUNG",
    "DELL"
  ] 
  


}
