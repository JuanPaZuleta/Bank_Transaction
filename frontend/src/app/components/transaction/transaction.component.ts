import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [TransactionService]
})
export class TransactionComponent implements OnInit {

  constructor(public transactionService: TransactionService) { }

  ngOnInit() {
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

  addTransaction(form: NgForm){
    this.transactionService.postTransaction(form.value)
      .subscribe(res => {
        console.log(res);
        M.toast({html: 'Transacción realizada.'});
      })
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.transactionService.selectedTransaction = new Transaction();
    }
  }

}
