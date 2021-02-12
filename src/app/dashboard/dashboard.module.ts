import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecordComponent } from './add-record/add-record.component';
import { ResultsComponent } from './results/results.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddRecordComponent, ResultsComponent, DashboardComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
