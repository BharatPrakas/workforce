import { AfterViewInit, Component, ViewChild, OnInit,} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  Status: string;
  StartDate: any;
  EndDate: any;
  Duration: any;
}
@Component({
  selector: 'app-mytimesheets',
  templateUrl: './mytimesheets.component.html',
  styleUrls: ['./mytimesheets.component.scss']
})
export class MytimesheetsComponent implements AfterViewInit, OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { StartDate: 'Mar 27,2023' , EndDate: 'Apr 02,2023', Duration: '58:00:00' ,Status:'Approved' },
    { StartDate: 'Mar 20,2023' , EndDate: 'Mar 26,2023', Duration: '58:00:00' ,Status:'Approved' },
    { StartDate: 'Mar 13,2023' , EndDate: 'Mar 19,2023', Duration: '50:00:00' ,Status:'Approved' },
    { StartDate: 'Mar 06,2023' , EndDate: 'Mar 12,2023', Duration: '58:00:00' ,Status:'Approved' },
    { StartDate: 'Feb 27,2023' , EndDate: 'Mar 05,2023', Duration: '50:00:00' ,Status:'Approved' },
    { StartDate: 'Feb 20,2023' , EndDate: 'Feb 26,2023', Duration: '58:00:00' ,Status:'Approved' },
    { StartDate: 'Feb 13,2023' , EndDate: 'Feb 19,2023', Duration: '50:00:00' ,Status:'Approved' }
  ];

  displayedColumns: string[] = ['StartDate', 'EndDate', 'Duration', 'Action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(){}

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
}
