import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { ReceiverService } from 'src/app/services/receiver.service';
import { Receiver } from 'src/app/models/receiver';
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

  constructor(public transactionService: TransactionService,
              public receiverService: ReceiverService) { }

  filterReceiver = '';

  ngOnInit() {
    this.getTransactions();
    this.getReceivers();
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

  loadTransactionReceiver(receiver: Receiver){
    this.transactionService.selectedTransaction.nameReceiver = receiver.name,
    this.transactionService.selectedTransaction.mail = receiver.mail,
    this.transactionService.selectedTransaction.bankName = receiver.destinationBank,
    this.transactionService.selectedTransaction.accountType = receiver.accountType,
    this.transactionService.selectedTransaction.rut = receiver.rut
  }

  addTransaction(form: NgForm){
    if(this.transactionService.selectedTransaction.amount <= 0){
      M.toast({html: 'El monto debe ser superor a 0.'})
    }else{
      this.transactionService.postTransaction(form.value)
      .subscribe(res => {
        console.log(res);
        M.toast({html: 'Transacción realizada.'});
      })
    }
  }

  getReceivers(){
    this.receiverService.getReceivers().subscribe(
      res => {
        this.receiverService.receivers = res as Receiver[];
        console.log(res);
      },
      err => console.log(err)
    )
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.transactionService.selectedTransaction = new Transaction();
    }
  }

}
