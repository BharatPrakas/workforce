import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './componentsinfo/info/info.component';
import { GeneralComponent } from './componentsinfo/general/general.component';
import { ContactComponent } from './componentsinfo/contact/contact.component';
import { EducationComponent } from './componentsinfo/education/education.component';
import { SkillsComponent } from './componentsinfo/skills/skills.component';
import { MyJobsComponent } from './componentsinfo/my-jobs/my-jobs.component';
import { EmploymentsComponent } from './componentsinfo/employments/employments.component';
import { ConfidentialComponent } from './componentsinfo/confidential/confidential.component';
import { LeaveComponent } from './componentsinfo/leave/leave.component';
import { DocumentsComponent } from './componentsinfo/documents/documents.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { PresentaddressComponent } from './componentsinfo/contact/address/presentaddress/presentaddress.component';
import { PermentaddressComponent } from './componentsinfo/contact/address/permentaddress/permentaddress.component';
import { EmergencycontactComponent } from './componentsinfo/contact/address/emergencycontact/emergencycontact.component';



@NgModule({
  declarations: [
    InfoComponent,
    GeneralComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    MyJobsComponent,
    EmploymentsComponent,
    ConfidentialComponent,
    LeaveComponent,
    DocumentsComponent,
    PresentaddressComponent,
    PermentaddressComponent,
    EmergencycontactComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatNativeDateModule
  ],
  exports: [
    InfoComponent,
    GeneralComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    MyJobsComponent,
    EmploymentsComponent,
    ConfidentialComponent,
    LeaveComponent,
    DocumentsComponent

  ]
})
export class InfoModule { }
