import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadlagComponent } from './leadlag.component';

const routes: Routes = [
  { path: '', component: LeadlagComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadlagRoutingModule { }
