import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { DialogpasswordComponent } from 'src/app/shared/dialog/dialogpassword/dialogpassword.component';

@Component({
  selector: 'app-confidential',
  templateUrl: './confidential.component.html',
  styleUrls: ['./confidential.component.scss']
})
export class ConfidentialComponent {
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.dialog.open(DialogpasswordComponent, {
        width: "400px", autoFocus: true,
    });
  }

}
