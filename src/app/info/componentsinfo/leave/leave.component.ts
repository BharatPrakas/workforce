import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface leaveManagement {
  Date: string;
  Description: string;
  Used: string;
  Accrued: string;
  Balance: string;
}

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})

export class LeaveComponent {
  ELEMENT_DATA: leaveManagement[] =
    [{ Date: '01 Mar,2023', Description: 'personal', Used: 'none', Accrued: '1.00 Days', Balance: '0.00 Days' }];
  holiday = [
    { day: 'Apr 7,2023', theme: 'Good Friday' },
    { day: 'Apr 8,2023', theme: 'Easter' },
    { day: 'Apr 14,2023', theme: 'Tamil New Year' },
    { day: 'May 1,2023', theme: 'May Day' }
  ];
  request = [
    { value: '1', theme: 'Earned/Used' },
    { value: '2', theme: 'Requested' }
  ];
  type = [
    { value: '1', type: 'Personel' },
    { value: '2', type: 'Permission' }
  ]
  time = [
    { value: '1', type: '2023' },
    { value: '2', type: 'All' }
  ]
  selected = new FormControl('1', Validators.required)
  displayedColumns = ['Date', 'Description', 'Used', 'Accrued', 'Balance'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) Paginator!:MatPaginator;

  ngAfterViewInit(){
    this.dataSource.paginator=this.Paginator;
  }
}
