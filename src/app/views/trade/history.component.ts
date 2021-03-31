import { Component } from '@angular/core';
import {HistoryService} from '../../services/history.service';

@Component({
  templateUrl: 'history.component.html'
})
export class HistoryComponent {

  histories: any[] = [];

  constructor(private historyService : HistoryService) { }

  getHistory(){
    this.historyService.history().subscribe(response=>{
      console.log(response)
      this.histories= response
    },error => {
      console.log(error)
    });
  }

}
