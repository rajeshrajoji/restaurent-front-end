import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menu-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCartItem } from '../model/user-cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  static API_URL = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  getAllMenuItems(): Observable<any> {
    return this.http.get(CommonService.API_URL + '/menu/items');
  }

  addToCart(userCartItem: UserCartItem): Observable<any> {
    return this.http.post(CommonService.API_URL + '/cart/itemAdd', userCartItem);
  } 
  
  getCartItems(userId: string): Observable<any> {
    return this.http.get(CommonService.API_URL + '/cart/items/'+userId);
  }

}
