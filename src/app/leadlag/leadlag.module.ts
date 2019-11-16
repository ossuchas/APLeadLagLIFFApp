import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadlagRoutingModule } from './leadlag-routing.module';

import { FormsModule } from '@angular/forms';

import {
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatSortModule,
  MatDialogModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatCardModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LeadlagRoutingModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class LeadlagModule { }
