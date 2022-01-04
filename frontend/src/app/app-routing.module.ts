import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ReceiversComponent } from './components/receivers/receivers.component';
import { HistoryComponent } from './components/history/history.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'receiver',
    component: ReceiversComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: "",
    redirectTo: '/transaction', 
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
