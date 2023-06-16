import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserviceService } from 'src/app/shared/services/formdatabase/formservice.service';

@Component({
  selector: 'app-emergencycontact',
  templateUrl: './emergencycontact.component.html',
  styleUrls: ['./emergencycontact.component.scss']
})
export class EmergencycontactComponent {
  Emergencyaddress! : FormGroup;
  constructor(public database : FormserviceService){}

ngOnInit(){

  this.Emergencyaddress = new FormGroup({
    Addressline1: new FormControl(null),
    Addressline2: new FormControl(null),
    City: new FormControl(null),
    Country: new FormControl(null),
    State: new FormControl(null),
    Zipcode: new FormControl(null),
    Contactnumber: new FormControl(null),
    Contactname: new FormControl(null),
    Email: new FormControl(null),
    Relationship: new FormControl(null),
  });
  this.Emergencyaddress.get('Addressline1')?.setValue(this.database.database.EmergencyAddress.Address1);
  this.Emergencyaddress.get('Addressline2')?.setValue(this.database.database.EmergencyAddress.Address2);
  this.Emergencyaddress.get('City')?.setValue(this.database.database.EmergencyAddress.City);
  this.Emergencyaddress.get('Country')?.setValue(this.database.database.EmergencyAddress.Country);
  this.Emergencyaddress.get('State')?.setValue(this.database.database.EmergencyAddress.State);
  this.Emergencyaddress.get('Zipcode')?.setValue(this.database.database.EmergencyAddress.Zipcode);
  this.Emergencyaddress.get('Contactnumber')?.setValue(this.database.database.EmergencyAddress.Contactnumber);
  this.Emergencyaddress.get('Contactname')?.setValue(this.database.database.EmergencyAddress.Contactname);
  this.Emergencyaddress.get('Relationship')?.setValue(this.database.database.EmergencyAddress.Relationship);
  this.Emergencyaddress.get('Email')?.setValue(this.database.database.EmergencyAddress.Email);
}
}
