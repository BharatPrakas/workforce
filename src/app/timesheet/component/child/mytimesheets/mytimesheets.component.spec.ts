import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytimesheetsComponent } from './mytimesheets.component';

describe('MytimesheetsComponent', () => {
  let component: MytimesheetsComponent;
  let fixture: ComponentFixture<MytimesheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytimesheetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
