import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistsComponent } from './worklists.component';

describe('WorklistsComponent', () => {
  let component: WorklistsComponent;
  let fixture: ComponentFixture<WorklistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorklistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
