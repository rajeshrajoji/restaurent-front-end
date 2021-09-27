import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { CustomerRoutingModule } from './customer-routing.module';

import { HttpClientModule } from '@angular/common/http';
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
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ViewMenuItemsComponent } from './view-menu-items/view-menu-items.component';
import { CustomerCartItemsComponent } from './customer-cart-items/customer-cart-items.component';



@NgModule({
  declarations: [
    RegisterCustomerComponent,
    LoginCustomerComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    ViewMenuItemsComponent,
    CustomerCartItemsComponent
  ],
  imports: [
    MatCheckboxModule,
    CommonModule,
    CustomerRoutingModule,
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
  ]
})
export class CustomerModule { }
