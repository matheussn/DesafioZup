import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [];

  constructor(private appService: AppService) {
    this.items = this.appService.getItemsSide()
  }

  ngOnInit() {
  }

}
