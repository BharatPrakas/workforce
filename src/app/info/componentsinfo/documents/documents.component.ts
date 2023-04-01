import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  isDataAvailable = false;
  isDataGeted = true;
  ELEMENT_DATA = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator

  Displayedref: string[] = ['Name', 'Document Type', 'Effective Date', 'Expiry Date', 'Action'];
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
