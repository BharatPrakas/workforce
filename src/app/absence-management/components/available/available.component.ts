import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  leavetype: string;
  totalused: string;
  totalbalance: string;
}

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.scss']
})
export class AvailableComponent {
  ELEMENT_DATA: PeriodicElement[] = [
    { leavetype: 'permission', totalused: '1.00 Hour(s)', totalbalance: '0.00 Hours' },
    { leavetype: 'personel', totalused: '1.00 Day(s)', totalbalance: '0.00 Days' }];
  displayedColumns: string[] = ['leavetype', 'totalused', 'totalbalance'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() { }
  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
