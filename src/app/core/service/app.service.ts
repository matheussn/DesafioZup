import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private itemSide = [
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

  getItemsSide() {
    return this.itemSide;
  }
}
