import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  Education: string;
  Institution: string;
  StartDate: string;
  EndDate: string;
  City: string;
  Action: string;
}
const ELEMENT_DATA: PeriodicElement[] =[]
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  isDataAvailable = false;
  isDataGeted = true;
  ELEMENT_DATA = [];
  
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator

  Displayedref: string[] = ['Education', 'Institution', 'StartDate','EndDate','City','Action'];
  datasource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    console.log(this.ELEMENT_DATA.length);
    if (this.ELEMENT_DATA.length > 0) {
      this.isDataAvailable = true;
      this.isDataGeted = !this.isDataGeted;
    }
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
}
