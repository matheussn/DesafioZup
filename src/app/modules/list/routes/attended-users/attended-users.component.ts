import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attended-users',
  templateUrl: './attended-users.component.html',
  styleUrls: ['./attended-users.component.scss']
})
export class AttendedUsersComponent implements OnInit {
  private users = []

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.users = this.userService.getUsersType("attended");
  }

}
