import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermentaddressComponent } from './permentaddress.component';

describe('PermentaddressComponent', () => {
  let component: PermentaddressComponent;
  let fixture: ComponentFixture<PermentaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermentaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermentaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
