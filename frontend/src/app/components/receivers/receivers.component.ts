import { Component, OnInit } from '@angular/core';
import { Receiver } from 'src/app/models/receiver';
import { Bank } from 'src/app/models/bank';
import { ReceiverService } from 'src/app/services/receiver.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-receivers',
  templateUrl: './receivers.component.html',
  styleUrls: ['./receivers.component.css'],
  providers: [ReceiverService]
})
export class ReceiversComponent implements OnInit {

  constructor(public receiverService: ReceiverService,
              private _router: Router ) { }

  ngOnInit() {
    this.getBanks();
    this.getReceivers();
  }

  getReceiver(_id: string){
    this.receiverService.getReceiver(_id).subscribe(
      res => { 
        this.receiverService.receivers = res as Receiver[];
        console.log(res);
      },
      err => console.log(err)
    )
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

  addReceiver(form: NgForm){
    if(this.receiverService.selectedReceiver.accountNumber == '' || this.receiverService.selectedReceiver.accountType == ''
      || this.receiverService.selectedReceiver.destinationBank == '' || this.receiverService.selectedReceiver.mail == ''
      || this.receiverService.selectedReceiver.name == '' || this.receiverService.selectedReceiver.phone == ''
      || this.receiverService.selectedReceiver.rut == ''){
        M.toast({html: 'Debe ingresar todos los datos.'});
    }else{
      console.log(form.value);
      this.receiverService.postReceiver(form.value)
      .subscribe(res => {
        console.log(res);
        M.toast({html: 'Destinatario creado.'});
        this._router.navigate(['transaction'])
      })
    }
    
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.receiverService.selectedReceiver = new Receiver();
    }
  }

  getBanks(){
    this.receiverService.getBanks().subscribe(
      res => {
        this.receiverService.banks = res as Bank[];
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
