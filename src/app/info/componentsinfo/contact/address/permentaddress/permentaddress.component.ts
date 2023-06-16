import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserviceService } from 'src/app/shared/services/formdatabase/formservice.service';

@Component({
  selector: 'app-permentaddress',
  templateUrl: './permentaddress.component.html',
  styleUrls: ['./permentaddress.component.scss']
})
export class PermentaddressComponent {
  permanentAddress! : FormGroup;
  constructor(public database : FormserviceService){}

ngOnInit(){

  this.permanentAddress = new FormGroup({
    Addressline1: new FormControl(null),
    Addressline2: new FormControl(null),
    City: new FormControl(null),
    Country: new FormControl(null),
    State: new FormControl(null),
    Zipcode: new FormControl(null),
    Mobilenumber: new FormControl(null),
    Phonenumber: new FormControl(null),
  });
  // this.permanentAddress.get('Addressline1')?.setValue(this.database.database.Address.Address1);
  // this.permanentAddress.get('Addressline2')?.setValue(this.database.database.Address.Address2);
  // this.permanentAddress.get('City')?.setValue(this.database.database.Address.City);
  // this.permanentAddress.get('Country')?.setValue(this.database.database.Address.Country);
  // this.permanentAddress.get('State')?.setValue(this.database.database.Address.State);
  // this.permanentAddress.get('Zipcode')?.setValue(this.database.database.Address.Zipcode);
  // this.permanentAddress.get('Mobilenumber')?.setValue(this.database.database.Address.Mobilenumber);
}
}
