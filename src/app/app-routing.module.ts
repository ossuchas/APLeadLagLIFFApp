import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadlagComponent } from './leadlag/leadlag.component';
import { LeadlagsubbgComponent } from './leadlagsubbg/leadlagsubbg.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/leadlag', pathMatch: 'full'},
  { path: 'leadlag', component: LeadlagComponent},
  { path: 'subbg', component: LeadlagsubbgComponent},
  { path: '**', component: PageNotFoundComponent}
  // { path: '', loadChildren: () => import('./leadlag/leadlag.module').then(m => m.LeadlagModule) },
  // { path: '', redirectTo: 'leadlag', pathMatch: 'full' },
  // { path: 'leadlag', loadChildren: () => import('./leadlag/leadlag.module').then(m => m.LeadlagModule) },
  // { path: 'subbg', loadChildren: () => import('./leadlagsubbg/leadlagsubbg.module').then(m => m.LeadlagsubbgModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
