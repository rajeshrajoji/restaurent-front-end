import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminAppComponent } from './admin-app/admin-app.component';

import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import{MatSortModule} from '@angular/material/sort';
import{MatTableModule} from '@angular/material/table'
import{ MatCheckboxModule} from '@angular/material/checkbox';


import {MatInputModule} from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MenuItemsAddComponent } from './menu-items-add/menu-items-add.component';
import { MenuItemsViewComponent } from './menu-items-view/menu-items-view.component';
import { MenuItemsEditComponent } from './menu-items-edit/menu-items-edit.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    RegisterAdminComponent,
    LoginAdminComponent,
    AdminAppComponent,
    MenuItemsAddComponent,
    MenuItemsViewComponent,
    MenuItemsEditComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCheckboxModule,
    CommonModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
  ]
})
export class AdminModule { }
