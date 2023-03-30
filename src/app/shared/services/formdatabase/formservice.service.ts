import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor() { }
  database = {
    EmployeeCode: 306,
    Firstname: 'Bharathvaj',
    MiddleName: '',
    LastName: 'P',
    Email: 'bharathvaj1312@gmail.com',
    AlternateEmail: 'bharathvaj@gmail.com',
    Gender: 'Male',
    MaritalStatus: 'Unmarried',
    Department: 'FrontEnd',
    Designation: 'Software Engineer',
    DateOfBirth: '2001-12-08',
    DateOfJoining: '2023-01-02',
    EmploymentType: 'Internal Employee',
    EmployeeCategory: 'Centizen',
    Role: 'Employee',
    ReportingManager: 'Boopathi Raja K',
    OfficeLocation: 'Tirunelveli',
    HolidayCalender: 'Centizen-TN',
    Ethinicity: 'Asian',
    Veteran: 'No',
    NoticePeriod: '30'
  }
  Gender=[{sno:1, value:'Male'},{sno:2, value:'Female'}];
  MaritalStatus=[{sno:1,value:'Unmarried'},{sno:2,value:'Married'}];
  Department = [{ sno: 1, value: 'Developement' }, { sno: 2, value: 'FrontEnd' }, { sno: 3, value: 'BackEnd' }];
  Designation = [{ sno: 1, arul: 'Software Engineer' }, { sno: 2, arul:'SeniorSoftware Engineer'}, { sno: 3, arul:'Project Manager'}];
  EmploymentType = [{ sno: 1, value: 'Internal Employee' }, { sno: 2, value: 'External Employee' }, { sno: 3, value: 'Contract Employee' }];
  EmployeeCategory = [{ sno: 1, value: 'Centizen' }, { sno: 2, value: 'centizen-Partner' }, { sno: 3, value: 'BackEnd' }];

}
