import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private username: String;

  constructor(private route: ActivatedRoute) {
    this.username = this.route.snapshot.params['name'];
  }

  ngOnInit() {
  }

}
