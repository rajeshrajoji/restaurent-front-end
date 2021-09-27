import { Component } from '@angular/core';
import { Customer } from '../customer/models/customer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charlie-online-foodchain-app';
  static API_URL = 'http://localhost:8080';
  currentUser: any | undefined;
  isUserLoggedIn: boolean | undefined;
  isAdmin:boolean = false;

  constructor(public router: Router,
              private route:ActivatedRoute,
              private dataSharingService: DataSharingService) {
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
          console.log("value logged in:"+value);
          this.isUserLoggedIn = value;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
          console.log("this.currentUser"+this.currentUser.role);
          this.isAdmin = this.currentUser && this.currentUser.role === 'ADMIN' ? true: false;
          console.log("this.isAdmin::"+this.isAdmin);
    });
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.dataSharingService.isUserLoggedIn.next(false);
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
          this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
          this.isUserLoggedIn = value;
          this.isAdmin = this.currentUser && this.currentUser.role === 'ADMIN' ? true: false;
    });
  }

  register(){
    this.router.navigateByUrl('/register-customer');
  }

  menu() {
    this.router.navigateByUrl('/menu-items');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  cartItems() {
    this.router.navigateByUrl('/cart-items');
  }

  registerAdmin() {
    this.router.navigateByUrl('/register-admin');
  }

  loginAdmin() {
    this.router.navigateByUrl('/login-admin');
  }

  addMenuItems() {
    this.router.navigateByUrl('/menu-items-add');
  }

  editMenuItems() {
    this.router.navigateByUrl('/menu-items-edit');
  }

  viewMenuItems() {
    this.router.navigateByUrl('/menu-items-view');
  }

}