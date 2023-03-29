import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/component/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TimesheetComponent } from './timesheet/component/timesheet/timesheet.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
  {
    path: 'app', component: NavbarComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'timesheet', component: TimesheetComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
