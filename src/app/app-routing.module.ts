import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./leadlag/leadlag.module').then(m => m.LeadlagModule) },
  { path: 'leadlag', loadChildren: () => import('./leadlag/leadlag.module').then(m => m.LeadlagModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
