import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './component/timesheet/timesheet.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    TimesheetComponent
  ]
})
export class TimesheetModule { }
