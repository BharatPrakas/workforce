import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer!: TemplateRef<any>
  private mediaSubscription !: Subscription;
  isSmallDevice = false;
  toggler = true;
  constructor(private mediaObserver: MediaObserver) { }
  ngOnInit(): void {
    this.mediaSubscription = this.mediaObserver.asObservable().subscribe((x) => {
      x.forEach(element => {
        if (element.mqAlias == 'sm' || element.mqAlias == 'lt-sm') {
          this.isSmallDevice = true;
        }
        if (element.mqAlias == 'gt-sm') {
          this.isSmallDevice = false;
        }
      });
    });
  }

}