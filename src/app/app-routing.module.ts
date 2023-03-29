import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/component/dashboard/dashboard.component';
import { ContactComponent } from './info/componentsinfo/contact/contact.component';
import { DocumentsComponent } from './info/componentsinfo/documents/documents.component';
import { EducationComponent } from './info/componentsinfo/education/education.component';
import { EmploymentsComponent } from './info/componentsinfo/employments/employments.component';
import { GeneralComponent } from './info/componentsinfo/general/general.component';
import { InfoComponent } from './info/componentsinfo/info/info.component';
import { LeaveComponent } from './info/componentsinfo/leave/leave.component';
import { MyJobsComponent } from './info/componentsinfo/my-jobs/my-jobs.component';
import { SkillsComponent } from './info/componentsinfo/skills/skills.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
  {
    path: 'app', component: NavbarComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      {path:'info',component:InfoComponent,children:[
        {path:'general',component:GeneralComponent},
        {path:'contact',component:ContactComponent},
        {path:'education',component:EducationComponent},
        {path:'skills',component:SkillsComponent},
        {path:'my-jobs',component:MyJobsComponent},
        {path:'employments',component:EmploymentsComponent},
        {path:'confidential',component:LeaveComponent},
        {path:'documents',component:DocumentsComponent}

      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
