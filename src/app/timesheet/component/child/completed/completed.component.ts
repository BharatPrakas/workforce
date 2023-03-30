import { AfterViewInit, Component, ViewChild, OnInit,} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  EmployeeName: any;
  StartDate: any;
  EndDate: any;
  TotalDuration: any;
  Status:any;
}

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements AfterViewInit, OnInit {
  ELEMENT_DATA: PeriodicElement[] = [];
    // { StartDate: 'Mar 27,2023' , EndDate: 'Apr 02,2023', TotalDuration: '58:00:00' ,EmployeeName:'Arul' },
    // { StartDate: 'Mar 20,2023' , EndDate: 'Mar 26,2023', TotalDuration: '58:00:00' ,EmployeeName:'Bharath' },
    // { StartDate: 'Mar 13,2023' , EndDate: 'Mar 19,2023', TotalDuration: '50:00:00' ,EmployeeName:'Alex' },
    // { StartDate: 'Mar 06,2023' , EndDate: 'Mar 12,2023', TotalDuration: '58:00:00' ,EmployeeName:'Ram' },
    // { StartDate: 'Feb 27,2023' , EndDate: 'Mar 05,2023', TotalDuration: '50:00:00' ,EmployeeName:'Boopathi' },
    // { StartDate: 'Feb 20,2023' , EndDate: 'Feb 26,2023', TotalDuration: '58:00:00' ,EmployeeName:'Salma' },
    // { StartDate: 'Feb 13,2023' , EndDate: 'Feb 19,2023', TotalDuration: '50:00:00' ,EmployeeName:'Ashwini'

  displayedColumns: string[] = ['EmployeeName','StartDate', 'EndDate','Status', 'TotalDuration', 'Action'];
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
