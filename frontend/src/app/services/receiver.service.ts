import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Receiver } from '../models/receiver';
import { Bank } from '../models/bank';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  selectedReceiver: Receiver;
  receivers: Receiver[] | undefined;
  banks: Bank[] | undefined;
  readonly URL_API = 'http://localhost:4000/api/receivers';
  readonly URL_APIBANK = 'https://bast.dev/api/banks.php';


  constructor(public http: HttpClient) {
    this.selectedReceiver = new Receiver();
  }

  getReceivers(){
    return this.http.get(this.URL_API);
  }

  getReceiver(_id: string){
    return this.http.get(this.URL_API + `/${_id}`);
  }

  postReceiver(Receiver: Receiver){
    return this.http.post(this.URL_API, Receiver);
  }

  putReceiver(receiver: Receiver){
    return this.http.put(this.URL_API + `/${receiver._id}`, receiver);
  }

  deleteReceiver(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  getBanks(){
    return this.http.get(this.URL_APIBANK);
  }


}
