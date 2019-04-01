import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { PeopleList } from 'src/app/shared/interfaces/peopleList.interface';

@Component({
  selector: 'app-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  sideOpen: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  setSide(event) {
    this.sideOpen = !this.sideOpen;
  }

}
