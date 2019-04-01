import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleList } from '../interfaces/peopleList.interface';
import { Observable, of } from 'rxjs';
import { UserStatus } from '../enums/user-status.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private allUsers: PeopleList;

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<PeopleList>{
    return this.http.get<PeopleList>(
      'https://randomuser.me/api/?exc=gender,registered,cell,id,nat&results=5&noinfo')
  }

  getUserList(): Observable<PeopleList> {
    if(this.allUsers) {
      return of(this.allUsers);
    }

    console.log(this.allUsers)
    return this.fetchUsers();
  }

  setAllUsers(userList: PeopleList) {
    this.allUsers = userList;
  }

  // getUsersType(type: string){
  //   //return this.users.results.filter(user => user.type == type);
  // }

  toggleType(name: string, status: UserStatus){
    return this.allUsers.results.map(user => user.login.username == name ? user.status = status : user)
  }
}
