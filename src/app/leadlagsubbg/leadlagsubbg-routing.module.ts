import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadlagsubbgComponent } from './leadlagsubbg.component';


const routes: Routes = [
  { path: '', component: LeadlagsubbgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadlagsubbgRoutingModule { }
