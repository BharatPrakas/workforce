import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  leavetype: string;
  startdate: string;
  enddate: string;
  total: string;
  document: string;
  status: string;
}

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})

export class LeaveComponent {
  search!: boolean;

  ELEMENT_DATA: PeriodicElement[] = [
    { leavetype: 'Permission', startdate: 'Mar 1,2023', enddate: 'Mar 1,2023', total: '1 Hour(s)', document: '+ Documents', status: 'Approved' },
    { leavetype: 'Personel', startdate: 'Mar 5,2023', enddate: 'Mar 5,2023', total: '1 Day(s)', document: '+ Documents', status: 'Approved' },
    { leavetype: 'Personel', startdate: 'Mar 10,2023', enddate: 'Mar 10,2023', total: '1 Day(s)', document: '+ Documents', status: 'Approved' },
  ];
  displayedColumns: string[] = ['leavetype', 'startdate', 'enddate', 'total', 'document', 'status', 'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private opendialog: MatDialog) { }
  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  opensearch() {
    this.search = !this.search;
  }
}
