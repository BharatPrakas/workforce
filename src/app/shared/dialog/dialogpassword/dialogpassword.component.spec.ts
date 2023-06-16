import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogpasswordComponent } from './dialogpassword.component';

describe('DialogpasswordComponent', () => {
  let component: DialogpasswordComponent;
  let fixture: ComponentFixture<DialogpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
