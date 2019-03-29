import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desafio';

  sideOpen: boolean;

  setQuery(event){
    console.log(event)
  }

  setSide(event) {
    console.log(event)
    this.sideOpen = !this.sideOpen;
  }
}
