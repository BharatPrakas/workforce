import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbsenceManagementModule } from './absence-management/absence-management.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { InfoModule } from './info/info.module';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TimesheetModule } from './timesheet/timesheet.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AbsenceManagementModule,
    DashboardModule,
    InfoModule,
    MaterialModule,
    TimesheetModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
