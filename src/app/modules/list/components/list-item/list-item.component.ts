import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: any;
  @Input() url: string;
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  setUser(name: string, type: string){
    this.userService.setUser(name, type);
    this.update.emit("update");
  }

}
