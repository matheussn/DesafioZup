import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendedUsersComponent } from './attended-users.component';

describe('AttendedUsersComponent', () => {
  let component: AttendedUsersComponent;
  let fixture: ComponentFixture<AttendedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
