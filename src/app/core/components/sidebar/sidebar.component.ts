import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [
    {
      name: 'Todos',
      route: '',
      icon: {
        categorie: 'brands',
        size: 'tiny',
        name: 'dashcube'
      }
    },
    {
      name: 'Atendidos',
      route: '',
      icon: {
        categorie: 'brands',
        size: 'tiny',
        name: 'dashcube'
      }
    },
    {
      name: 'Lixeira',
      route: '',
      icon: {
        categorie: 'brands',
        size: 'tiny',
        name: 'dashcube'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
