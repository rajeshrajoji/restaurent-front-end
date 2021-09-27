import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart-item.model';

@Injectable()
export class DataSharingService {
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
}
