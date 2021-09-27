import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { ProfileComponent } from './profile/profile.component';


// const routes: Routes = [ 
//   { path: 'register-customer', component: RegisterCustomerComponent} , 
//   { path: 'login-customer', component: LoginCustomerComponent },
//   { path: 'profile', component: ProfileComponent } ];
const routes: Routes = [];
@NgModule( {
  declarations: [],
  imports: [ CommonModule, RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class CustomerRoutingModule { }
