import { Component } from '@angular/core';
import { DataserviceService } from 'src/app/shared/services/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  name!: any;
  constructor(public db: DataserviceService) { }

  ngOnInit() {


  }
}
