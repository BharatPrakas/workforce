import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserviceService } from 'src/app/shared/services/formdatabase/formservice.service';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  todayDate = new Date();
  generalinfo!: FormGroup;
  constructor(public db: FormserviceService) { }
  ngOnInit() {
    console.log(this.db.database.EmployeeCode);
    this.generalinfo = new FormGroup({
      EmployeeCode: new FormControl(null),
      Firstname: new FormControl(null),
      MiddleName: new FormControl(null),
      LastName: new FormControl(null),
      Email: new FormControl(null),
      AlternateEmail: new FormControl(null),
      Gender: new FormControl(null),
      MaritalStatus: new FormControl(null),
      Department: new FormControl(null),
      Designation: new FormControl(null),
      DateOfBirth: new FormControl(null),
      DateOfJoining: new FormControl(null),
      EmploymentType: new FormControl(null),
      EmployeeCategory: new FormControl(null),
      Role: new FormControl(null),
      ReportingManager: new FormControl(null),
      OfficeLocation: new FormControl(null),
      HolidayCalender: new FormControl(null),
      Ethinicity: new FormControl(null),
      Veteran: new FormControl(null),
      NoticePeriod: new FormControl(null),
    });
    this.generalinfo.get('EmployeeCode')?.setValue(this.db.database.EmployeeCode);
    this.generalinfo.get('Firstname')?.setValue(this.db.database.Firstname);
    this.generalinfo.get('LastName')?.setValue(this.db.database.LastName);
    this.generalinfo.get('Email')?.setValue(this.db.database.Email);
    this.generalinfo.get('AlternateEmail')?.setValue(this.db.database.AlternateEmail);
    this.generalinfo.get('Gender')?.setValue(this.db.database.Gender);
    this.generalinfo.get('MaritalStatus')?.setValue(this.db.database.MaritalStatus);
    this.generalinfo.get('Department')?.setValue(this.db.database.Department);
    this.generalinfo.get('Designation')?.setValue(this.db.database.Designation);
    this.generalinfo.get('DateOfBirth')?.setValue(this.db.database.DateOfBirth);
    this.generalinfo.get('DateOfJoining')?.setValue(this.db.database.DateOfJoining);
    this.generalinfo.get('EmploymentType')?.setValue(this.db.database.EmploymentType);
    this.generalinfo.get('EmployeeCategory')?.setValue(this.db.database.EmployeeCategory);
    this.generalinfo.get('Role')?.setValue(this.db.database.Role);
    this.generalinfo.get('ReportingManager')?.setValue(this.db.database.ReportingManager);
    this.generalinfo.get('OfficeLocation')?.setValue(this.db.database.OfficeLocation);
    this.generalinfo.get('HolidayCalender')?.setValue(this.db.database.HolidayCalender);
    this.generalinfo.get('Ethinicity')?.setValue(this.db.database.Ethinicity);
    this.generalinfo.get('Veteran')?.setValue(this.db.database.Veteran);
    this.generalinfo.get('NoticePeriod')?.setValue(this.db.database.NoticePeriod);

  }
}
