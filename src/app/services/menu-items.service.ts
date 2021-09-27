import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../core/app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  static API_URL = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  registerMenuItem(menuItem: any) : Observable<any> {
    return this.http.post(MenuItemsService.API_URL + '/menu/items-add', menuItem);
  }

  getAllMenuItems(): Observable<any> {
    return this.http.get(MenuItemsService.API_URL + '/menu/items');
  }
  
  updateMenuItem(menuItem : any) : Observable<any> {
    return this.http.post(MenuItemsService.API_URL+ '/menu/item-update', menuItem);
  }
  
}
