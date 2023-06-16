import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
@Component({
  selector: 'app-dialogpassword',
  templateUrl: './dialogpassword.component.html',
  styleUrls: ['./dialogpassword.component.scss']
})
export class DialogpasswordComponent {
  constructor(private router:Router){}
  passkey!: FormGroup;
ngOnInit(){
  console.log('arul');
  // this.passkey=[
  //   {}
  // ]
}
  onNoClick() {
    this.router.navigate(['/app/info/general']);
  }
}
