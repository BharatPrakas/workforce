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

  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator

  Displayedref: string[] = ['Education', 'Institution', 'StartDate','EndDate','City','Action'];
  datasource = new MatTableDataSource(ELEMENT_DATA);

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
}
