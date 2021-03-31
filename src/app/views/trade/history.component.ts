import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../services/history.service';

@Component({
  templateUrl: 'history.component.html'
})
export class HistoryComponent implements OnInit {

  histories: any[] = [];

  constructor(private historyService: HistoryService) {
  }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.historyService.history().subscribe(response => {
      console.log(response);
      this.histories = response;
    }, error => {
      console.log(error);
    });
  }


}
