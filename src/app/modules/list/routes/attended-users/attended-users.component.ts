import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/interfaces/peopleList.interface';
import { UserStatus } from 'src/app/shared/enums/user-status.enum';

@Component({
  selector: 'app-attended-users',
  templateUrl: './attended-users.component.html',
  styleUrls: ['./attended-users.component.scss']
})
export class AttendedUsersComponent implements OnInit {
  private users:User[]

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUserList().subscribe(res => {
      this.users = res.results.filter( user => user.status === UserStatus.ATTENDED )
      this.userService.setAllUsers(res)
    });
  }

}
