import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { ReceiverService } from 'src/app/services/receiver.service';
import { Receiver } from 'src/app/models/receiver';
import { Transaction } from 'src/app/models/transaction';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import 'src/assets/smtp.js';

declare var M: any;

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [TransactionService]
})
export class TransactionComponent implements OnInit {

  model: Transaction = new Transaction();

  constructor(public transactionService: TransactionService,
              public receiverService: ReceiverService,
              private _router: Router) { }

  filterReceiver = '';

  ngOnInit() {
    this.getTransactions();
    this.getReceivers();
  }

  sendMail(form: NgForm){
    console.log('ENVIANDO CORREO')
    console.log(form.value)
    Email.send({
      SecureToken: '8cbf1f68-182b-4fde-9681-fb4db431b0df',
      To : `${form.value.mail}`,
      From : `juanpablozuleta@gmail.com`,
      Subject : 'Mensaje Banco jpzg',
      Body : `
      <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${form.value.nameReceiver} <br /> <b>Email: </b>${form.value.mail}<br /> <b>Subject: </b>Mensaje Banco jpzg<br /> <b>Message:</b> <br /> Usted recibió una transferencia de Juan Pablo a su cuenta en ${form.value.bankName} por un monto de $ ${form.value.amount} <br><br> <ul><b>Detalle:</b> <li class="no-bullets"> Banco: ${form.value.bankName} <br> Monto: ${form.value.amount} <br> </li> </ul>  <b>Saludos!</b> <b>~End of Message.~</b> `
      }).then( (message: any) => {alert(message); } );
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
    console.log(this.transactionService.selectedTransaction);
  }

  addTransaction(form: NgForm){
    if(this.transactionService.selectedTransaction.nameReceiver == '' || this.transactionService.selectedTransaction.rut == '' ||
    this.transactionService.selectedTransaction.mail == '' || this.transactionService.selectedTransaction.bankName == '' ||
    this.transactionService.selectedTransaction.accountType == ''){
      M.toast({html: 'Debe seleccionar un destinatario.'})
    }else{
      if(Number(this.transactionService.selectedTransaction.amount) <= 0){
        M.toast({html: 'El monto es incorrecto.'})
      }else{
        this.transactionService.postTransaction(form.value)
        .subscribe(res => {
        console.log(res);
        M.toast({html: 'Transacción realizada.'});
        this.resetForm(form);
      })
      }
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
      /**form.reset();*/
      this.filterReceiver = ''
      this._router.navigate(['transaction']);
      this.transactionService.selectedTransaction = new Transaction();
    }
  }

}
