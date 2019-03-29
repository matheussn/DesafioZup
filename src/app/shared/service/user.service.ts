import { Injectable } from '@angular/core';
import { USER_MOCK } from '../mocks/users.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: any;

  constructor() { }

  getUsers(){
    USER_MOCK.results.map(user => user["type"] = "all")
    this.users = USER_MOCK
  }

  getUsersType(type: string){
    return this.users.results.filter(user => user.type == type);
  }

  setUser(name: string, type: string){
    this.users.results.map(user => user.login.username == name ? user.type = type : user)
  }
}
