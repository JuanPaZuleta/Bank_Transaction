import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  selectedTransaction: Transaction;
  transactions: Transaction[] | undefined;
  readonly URL_API = 'http://localhost:4000/api/transactions';

  constructor(public http: HttpClient){
    this.selectedTransaction = new Transaction();
  }

  getTransaction(){
    return this.http.get(this.URL_API);
  }
  postTransaction(Transaction: Transaction){
    return this.http.post(this.URL_API, Transaction);
  }

  putTransaction(transaction: Transaction){
    return this.http.put(this.URL_API + `/${transaction._id}`, transaction);
  }

  deleteTransaction(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
