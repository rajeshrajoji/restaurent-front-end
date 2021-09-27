import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { MenuItem } from 'src/app/model/menu-item.model';
import { trigger, transition, animate, style, stagger, animateChild, query } from '@angular/animations';
import { CartItem } from 'src/app/model/cart-item.model';
import { UserCartItem } from 'src/app/model/user-cart-item.model';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-view-menu-items',
  templateUrl: './view-menu-items.component.html',
  styleUrls: ['./view-menu-items.component.css'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(60, animateChild()))
      ])
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('0.350s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class ViewMenuItemsComponent implements OnInit {

  menuItems:MenuItem[]=[];
  cartItems: CartItem[] = [];
  currentUser: User | undefined;
  quantity = 0;
  itemsForm!: FormGroup;
  
  
  constructor(public commonService : CommonService, public dataSharingService: DataSharingService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log("menu items is getting called****");
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}') as User;
    this.commonService.getAllMenuItems().subscribe(m => {
      console.log("this.menuItems:::"+JSON.stringify(m));
        this.menuItems = m as MenuItem[];
        ///this.menuItems.forEach(menuItem => {           
         //let qtyFormControlName = menuItem.id;
         //console.log("qtyFormControlName::"+qtyFormControlName);
         //this.itemsForm = this.formBuilder.group({qtyFormControlName: ['', [Validators.required]]});
        //});
    });

  }



  addToCart(menuItem: MenuItem) {
   //let id  = menuItem.id as string;
   //let x = this.itemsForm.get(id)?.value;
    
   console.log("this.currentUser::"+JSON.stringify(this.currentUser));
   console.log("user:"+this.currentUser?.userName)
    console.log("his.currentUser.userName"+this.currentUser?.userName);
    const newContent = <UserCartItem>({
      user: this.currentUser,
      menuItemId: menuItem.id,
      quantity:1,
    });

    this.commonService.addToCart(newContent).subscribe(cartItems => {
          this.cartItems = cartItems;
         // this.dataSharingService.cartItems.next(cartItems);
    });
  }

  

}
