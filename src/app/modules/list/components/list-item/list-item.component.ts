import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { UserStatus } from 'src/app/shared/enums/user-status.enum';
import { AlterUserStatus } from 'src/app/shared/interfaces/alterUserStatus.interface';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: any;
  @Input() url: string;
  @Output() update: EventEmitter<AlterUserStatus> = new EventEmitter<AlterUserStatus>();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  setUser(userName: string, status: UserStatus){
    this.update.emit({ userName, status });
  }

}
