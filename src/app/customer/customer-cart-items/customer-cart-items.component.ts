import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { MatTableDataSource } from '@angular/material/table';
import { CartItem } from 'src/app/model/cart-item.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-customer-cart-items',
  templateUrl: './customer-cart-items.component.html',
  styleUrls: ['./customer-cart-items.component.css']
})
export class CustomerCartItemsComponent implements OnInit {

  displayedColumns = [ 'position', 'name', 'type', 'price'];
  dataSource: MatTableDataSource<CartItem> | undefined;
  currentUser: any;

  constructor(private dataSharingService: DataSharingService, private commonService: CommonService) { }

  ngOnInit(): void {
    //let userId = "1";
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser.id);
    this.commonService.getCartItems(this.currentUser.id).subscribe(items=> {
        console.log("dataShare Itmes:"+items);
        this.dataSource = new MatTableDataSource<CartItem>(items);
    });
    //dataSource = new MatTableDataSource<Element>(this.data);
  }


  removeSelectedRows() {

  }
}
