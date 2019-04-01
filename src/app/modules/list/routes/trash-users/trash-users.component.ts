import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/interfaces/peopleList.interface';
import { UserStatus } from 'src/app/shared/enums/user-status.enum';

@Component({
  selector: 'app-trash-users',
  templateUrl: './trash-users.component.html',
  styleUrls: ['./trash-users.component.scss']
})
export class TrashUsersComponent implements OnInit {

  private users :User[];

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUserList().subscribe(res => {
      this.users = res.results.filter( user => user.status === UserStatus.TRASH )
      this.userService.setAllUsers(res)
      console.log(res)
    });
  }

}
