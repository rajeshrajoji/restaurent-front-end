import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './core/app.component';
import { HomeComponent } from './core/home/home.component';
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { RegisterCustomerComponent } from './customer/register-customer/register-customer.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { ProfileUpdateComponent } from './customer/profile-update/profile-update.component';
import { LoginCustomerComponent } from './customer/login-customer/login-customer.component';
import { ViewMenuItemsComponent } from './customer/view-menu-items/view-menu-items.component';
import { CustomerCartItemsComponent } from './customer/customer-cart-items/customer-cart-items.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { AdminModule } from './admin/admin.module';
import { AdminAppComponent } from './admin/admin-app/admin-app.component';
import { MenuItemsAddComponent } from './admin/menu-items-add/menu-items-add.component';
import { MenuItemsEditComponent } from './admin/menu-items-edit/menu-items-edit.component';
import { MenuItemsViewComponent } from './admin/menu-items-view/menu-items-view.component';

// const routes: Routes = [{
//   children: [
//     {
//       path: 'admin',
//       loadChildren: () => import( './admin/admin.module' )
//         .then( m => m.AdminModule )
//     },
//     {
//       path: 'customer',
//       loadChildren: () => import( './customer/customer.module' )
//         .then( m => m.CustomerModule )
//     },
//     {
//       path: 'core',
//       loadChildren: () => import( './core/core.module' )
//         .then( m => m.CoreModule )
//     }
//   ]
// }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


//
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register-customer', component: RegisterCustomerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'update-profile', component: ProfileUpdateComponent },
  { path: 'login', component: LoginCustomerComponent },
  { path: 'menu-items', component: ViewMenuItemsComponent },
  { path: 'cart-items', component: CustomerCartItemsComponent },


  { path: 'register-admin', component: RegisterAdminComponent } , 
  { path: 'login-admin', component: LoginAdminComponent } ,
  { path: 'menu-items-add', component: MenuItemsAddComponent },
  { path: 'menu-items-edit', component: MenuItemsEditComponent },
  { path: 'menu-items-view', component: MenuItemsViewComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'my-courses', component: MyCoursesComponent },
//   { path: 'my-course-info', component: MyCourseInfoComponent },
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   { path: 'admin', component: AdminAppComponent } ,
//   { path: 'main', component: AppComponent  },
//   { path: 'courses', component: CoursesComponent},
//   { path: 'view', component: CourseInfoComponent },
//   { path: 'enroll', component: RegisterComponent },
//   { path: 'course-section', component: CourseSectionComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }