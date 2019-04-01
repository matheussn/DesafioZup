import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trash-users',
  templateUrl: './trash-users.component.html',
  styleUrls: ['./trash-users.component.scss']
})
export class TrashUsersComponent implements OnInit {

  private users = [];

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    //this.users = this.userService.getUsersType("trash");
  }

}
