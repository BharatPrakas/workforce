import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceComponent } from './components/absence/absence.component';
import { MaterialModule } from '../material/material.module';
import { LeaveComponent } from './components/leave/leave.component';
import { WorklistComponent } from './components/worklist/worklist.component';
import { AvailableComponent } from './components/available/available.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AbsenceComponent,
    LeaveComponent,
    WorklistComponent,
    AvailableComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    AbsenceComponent
  ]
})
export class AbsenceManagementModule { }
