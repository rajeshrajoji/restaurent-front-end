import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';


//const routes: Routes = [ { path: 'register-admin', component: RegisterAdminComponent } , { path: 'login-admin', component: LoginAdminComponent } ];

@NgModule( {
  declarations: [],
 // imports: [ CommonModule, RouterModule.forChild( routes ) ],
  imports: [ CommonModule ],
  exports: [ RouterModule ]
} )
export class AdminRoutingModule { }
