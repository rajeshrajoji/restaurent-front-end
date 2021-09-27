import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuItemsService } from 'src/app/services/menu-items.service';
import { MenuItem } from 'src/app/model/menu-item.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  
  action:string;
  local_data:any;
  errorMessage: string | undefined;
  updateForm!: FormGroup;
  menuItem: MenuItem = new MenuItem();


  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,  
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private menuItemsService: MenuItemsService,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MenuItem) {
    console.log(data);
    this.menuItem = data;
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit(): void {
      this.buildLoginForm();
  }   

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  buildLoginForm() {
    this.updateForm = this.formBuilder.group({
      name: [this.menuItem.name, [Validators.required]],
      type: [this.menuItem.type, [Validators.required]],
      price: [this.menuItem.price, [Validators.required]],
    })

  }

  update(updateForm: FormGroup) {
    if(!this.updateForm.invalid) {
      this.menuItem.name = updateForm.value.name;
      this.menuItem.type = updateForm.value.type;
      this.menuItem.price = updateForm.value.price;
      this.menuItemsService.updateMenuItem(this.menuItem); 
      this.closeDialog();
    }   
  }

}
