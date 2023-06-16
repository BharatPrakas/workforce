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
    LastName: 'Prakash',
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
    NoticePeriod: '30',
    Address:{
      Address1: 'NGO New colony',
      Address2: 'Near RTO Office',
      City: 'Tirunelveli',
      Country: 'India',
      State: 'Tamilnadu',
      Zipcode:'627007',
      Mobilenumber: '9585972183',
    },
    EmergencyAddress:{
      Contactname: 'Ramesh',
      Relationship: 'Father',
      Contactnumber: '9585972183',
      Address1: 'NGO New colony',
      Address2: 'Near RTO Office',
      City: 'Tirunelveli',
      Country: 'India',
      State: 'Tamilnadu',
      Zipcode:'627007',
      Email: 'bharathram@gmail.com'
    }
  }
  Gender=[{sno:1, value:'Male'},{sno:2, value:'Female'}];
  MaritalStatus=[{sno:1,value:'Unmarried'},{sno:2,value:'Married'}];
  Department = [{ sno: 1, value: 'Developement' }, { sno: 2, value: 'FrontEnd' }, { sno: 3, value: 'BackEnd' }];
  Designation = [{ sno: 1, arul: 'Software Engineer' }, { sno: 2, arul:'SeniorSoftware Engineer'}, { sno: 3, arul:'Project Manager'}];
  EmploymentType = [{ sno: 1, value: 'Internal Employee' }, { sno: 2, value: 'External Employee' }, { sno: 3, value: 'Contract Employee' }];
  EmployeeCategory = [{ sno: 1, value: 'Centizen' }, { sno: 2, value: 'centizen-Partner' }];
  Role = [{ sno: 1, value: 'Employee' }];
  ReportingManager=[{ sno: 1, value: 'Boopathi Raja K' }, { sno: 2, value: 'Andrew Rayan' }];
  OfficeLocation = [{ sno: 1, value: 'Tirunelveli' }, { sno: 2, value: 'Chennai' }, { sno: 3, value: 'Washington DC' }];
  HolidayCalender = [{ sno: 1, value: 'Centizen-TN' }, { sno: 2, value: 'Centizen-US' }];
  Ethinicity = [{ sno: 1, value: 'Asian' }, { sno: 2, value: 'South-American' }];
  Veteran = [{ sno: 1, value: 'Yes' }, { sno: 2, value: 'No'}];
  NoticePeriod = [{ sno: 1, value: '30' }, { sno: 2, value: '90' }];
}
