import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../../services/history.service';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-trade-details',
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.scss']
})
export class TradeDetailsComponent implements OnInit {
  executions: any = [];

  constructor(private historyService: HistoryService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    let orderId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('orderId', orderId);
    if (orderId !== 'null') {
      this.getExecutions(orderId);
    } else {
      this.toastr.error('There are no executions for this trade');
    }
  }

  getExecutions(orderId: any) {
    this.historyService.executions(orderId).subscribe(response => {
      console.log('response', response);
      this.executions = response;
    }, error => {
      console.log(error);
    });
  }

}
