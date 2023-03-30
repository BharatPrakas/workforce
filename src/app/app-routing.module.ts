import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenceComponent } from './absence-management/components/absence/absence.component';
import { DashboardComponent } from './dashboard/component/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
  {
    path: 'app', component: NavbarComponent, children: [
      { path: 'dashboard', component: DashboardComponent},
      { path:'absence',component:AbsenceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
