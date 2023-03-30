import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './component/timesheet/timesheet.component';
import { MaterialModule } from '../material/material.module';
import { MytimesheetsComponent } from './component/child/mytimesheets/mytimesheets.component';
import { WorklistsComponent } from './component/child/worklists/worklists.component';
import { DefaultersComponent } from './component/child/defaulters/defaulters.component';
import { PendingComponent } from './component/child/pending/pending.component';
import { CompletedComponent } from './component/child/completed/completed.component';




@NgModule({
  declarations: [
    TimesheetComponent,
    MytimesheetsComponent,
    WorklistsComponent,
    DefaultersComponent,
    PendingComponent,
    CompletedComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    TimesheetComponent,
    MytimesheetsComponent,
    WorklistsComponent,
    DefaultersComponent,
    PendingComponent,
    CompletedComponent
  ]
})
export class TimesheetModule { }
