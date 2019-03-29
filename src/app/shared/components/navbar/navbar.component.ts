import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() mudouQuery: EventEmitter<string> = new EventEmitter<string>();
  @Output() side: EventEmitter<any> = new EventEmitter<any>();
  private search: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSide(value){
    this.side.emit(value)
  }

  toggleSearch(){
    this.search = !this.search;
  }

  alterar(value) {
    //console.log(value)
    this.mudouQuery.emit(value);
  }

}
