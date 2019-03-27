import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() mudouQuery: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  alterar(value) {
    //console.log(value)
    this.mudouQuery.emit(value);
  }

}
