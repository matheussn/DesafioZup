import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/peopleList.interface';
import { UserStatus } from 'src/app/shared/enums/user-status.enum';
import { AlterUserStatus } from 'src/app/shared/interfaces/alterUserStatus.interface';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  private users: User[];

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUserList().subscribe(res => {
      this.users = res.results.filter( user => !user.status || user.status === UserStatus.ALL )
      this.userService.setAllUsers(res)
    });
  }

  alterUserStatus(userStatus: AlterUserStatus){
    // Remover da lista local this.users
    

    // Service, alterar valor do item


    console.log(userStatus);
  }
}
