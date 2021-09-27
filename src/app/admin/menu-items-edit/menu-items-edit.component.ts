import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MenuItem } from 'src/app/model/menu-item.model';
import { MenuItemsService } from 'src/app/services/menu-items.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';



@Component({
  selector: 'app-menu-items-edit',
  templateUrl: './menu-items-edit.component.html',
  styleUrls: ['./menu-items-edit.component.css']
})
export class MenuItemsEditComponent implements OnInit {

  displayedColumns = [ 'position', 'name', 'type', 'price', 'action'];
  dataSource: MatTableDataSource<MenuItem> | undefined;

  constructor(private menuItemsService: MenuItemsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.menuItemsService.getAllMenuItems().subscribe(items=> {
        console.log("dataShare Itmes:"+items);
        this.dataSource = new MatTableDataSource<MenuItem>(items);
    });
  }

  @ViewChild(MatTable,{static:true}) table: MatTable<any> | undefined;

  openDialog(action: any,obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(result.data);
        //this.updateRowData(result.data);
    });
  }

}
