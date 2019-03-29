import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() open: boolean;

  items = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.items = this.appService.getItemsSide()
  }

}
