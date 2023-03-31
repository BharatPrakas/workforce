import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentaddressComponent } from './presentaddress.component';

describe('PresentaddressComponent', () => {
  let component: PresentaddressComponent;
  let fixture: ComponentFixture<PresentaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
