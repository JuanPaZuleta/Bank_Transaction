import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [TransactionService]
})
export class HistoryComponent implements OnInit {

  constructor(public transactionService: TransactionService) { }

  ngOnInit(){
    this.getTransactions();
  }

  getTransactions(){
    this.transactionService.getTransaction().subscribe(
      res => {
        this.transactionService.transactions = res as Transaction[];
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getDate(fulldate: String){
    return fulldate = fulldate.substring(0, 10);
  }

}
