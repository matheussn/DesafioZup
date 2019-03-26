import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'core-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name: string;
  @Input() categorie: string;
  @Input() size: string;

  constructor() { }

  getCategorie(){
    return {
      'solid': 's',
      'regular': 'r',
      'light': 'l',
      'brands': 'b'
    }[this.categorie]
  }

  ngOnInit() {
    this.categorie = this.getCategorie()
  }

}
