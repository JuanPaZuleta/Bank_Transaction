import { Component, OnInit } from '@angular/core';
import { Receiver } from 'src/app/models/receiver';
import { Banks } from 'src/app/models/bank';
import { ReceiverService } from 'src/app/services/receiver.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';

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

  editReceiver(receiver: Receiver){
    this.receiverService.selectedReceiver = receiver;
  }

  getReceivers(): Receiver[]{
    let receivers: Receiver[] = [];
    this.receiverService.getReceivers().subscribe(
      res => {
        receivers = res as Receiver[]
        this.receiverService.receivers = res as Receiver[];
        console.log(res);
      },
      err => console.log(err)
    )
    return receivers;
  }

  addReceiver(form: NgForm){
    if(form.value._id){
      this.receiverService.putReceiver(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Destinatario actualizado.'});
        this.getReceivers();
        console.log(res);
      })
    }else{
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
  }

  deleteReceiver(_id: string){
    if(confirm('??estas seguro?')){
      this.receiverService.deleteReceiver(_id)
      .subscribe(res => {
        this.getReceivers();
      });
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
        this.receiverService.banks = res as Banks[];
        console.log(this.receiverService.banks);
      },
      err => console.log(err)
    )
  }
}
