import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employments',
  templateUrl: './employments.component.html',
  styleUrls: ['./employments.component.scss']
})
export class EmploymentsComponent {
  isDataAvailable = false;
  isDataGeted = true;
  ELEMENT_DATA = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator

  Displayedref: string[] = ['Employer', 'Job Title', 'Employment Type', 'From', 'City', 'To', 'Action'];
  datasource = new MatTableDataSource(this.ELEMENT_DATA);

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
