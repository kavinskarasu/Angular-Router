import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';

const routes: Routes = [
  // we will create all our routes here
  // and we will export them
  {
    path:'loans',
    component:LoansComponent,
    outlet:"loan"
  },
  {
    path:'loantypes',
    component:LoantypesComponent
  },{
    path:'loans/add-loans',
    component:AddLoansComponent,
    outlet:"add-loan"

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
