import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CartItem } from 'src/app/model/cart-item.model';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { MenuItem } from 'src/app/model/menu-item.model';
import { MenuItemsService } from 'src/app/services/menu-items.service';

@Component({
  selector: 'app-menu-items-view',
  templateUrl: './menu-items-view.component.html',
  styleUrls: ['./menu-items-view.component.css']
})
export class MenuItemsViewComponent implements OnInit {

  displayedColumns = [ 'position', 'name', 'type', 'price'];
  dataSource: MatTableDataSource<MenuItem> | undefined;

  constructor(private menuItemsService: MenuItemsService) { }

  ngOnInit(): void {
    this.menuItemsService.getAllMenuItems().subscribe(items=> {
        console.log("dataShare Itmes:"+items);
        this.dataSource = new MatTableDataSource<MenuItem>(items);
    });
  }

}
