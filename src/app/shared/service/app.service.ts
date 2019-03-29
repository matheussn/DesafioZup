import { Injectable } from '@angular/core';
import { MOCK } from '../mocks/app.mock';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private itemSide = MOCK

  constructor() { }

  getItemsSide() {
    return this.itemSide;
  }
}
