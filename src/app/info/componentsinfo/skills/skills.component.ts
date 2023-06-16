import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  isDataAvailable = false;
  isDataGeted = true;
  ELEMENT_DATA = []


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator
  source: string[] = ['SkillName', 'YearsOfExperience', 'Comments', 'Document', 'Action'];
  datasource = new MatTableDataSource(this.ELEMENT_DATA);

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
  ngOnInit() {
    console.log(this.ELEMENT_DATA.length);
    if (this.ELEMENT_DATA.length > 0) {
      this.isDataAvailable = true;
      this.isDataGeted = !this.isDataGeted;
    }

  }



}
