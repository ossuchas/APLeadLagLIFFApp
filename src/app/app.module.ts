import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeadlagComponent } from './leadlag/leadlag.component';

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
import { LeadlagsubbgComponent } from './leadlagsubbg/leadlagsubbg.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadlagComponent,
    LeadlagsubbgComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
