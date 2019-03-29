import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  private users = [];

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.users = this.userService.getUsersType("all");
  }
}
