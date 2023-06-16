import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormserviceService } from 'src/app/shared/services/formdatabase/formservice.service';


@Component({
  selector: 'app-presentaddress',
  templateUrl: './presentaddress.component.html',
  styleUrls: ['./presentaddress.component.scss']
})
export class PresentaddressComponent{
  presentaddress! : FormGroup;
  constructor(public database : FormserviceService){}

ngOnInit(){

  this.presentaddress = new FormGroup({
    Addressline1: new FormControl(null),
    Addressline2: new FormControl(null),
    City: new FormControl(null),
    Country: new FormControl(null),
    State: new FormControl(null),
    Zipcode: new FormControl(null),
    Mobilenumber: new FormControl(null),
    Phonenumber: new FormControl(null),
  });
  this.presentaddress.get('Addressline1')?.setValue(this.database.database.Address.Address1);
  this.presentaddress.get('Addressline2')?.setValue(this.database.database.Address.Address2);
  this.presentaddress.get('City')?.setValue(this.database.database.Address.City);
  this.presentaddress.get('Country')?.setValue(this.database.database.Address.Country);
  this.presentaddress.get('State')?.setValue(this.database.database.Address.State);
  this.presentaddress.get('Zipcode')?.setValue(this.database.database.Address.Zipcode);
  this.presentaddress.get('Mobilenumber')?.setValue(this.database.database.Address.Mobilenumber);
}
}
