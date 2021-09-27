import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Router, NavigationExtras } from '@angular/router';
import { Customer } from 'src/app/customer/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  admin: Admin = new Admin();
  errorMessage: string | undefined;
  loginForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private adminService: AdminService,
    private authService: AuthService,
    private dataSharingService: DataSharingService,
    private router:Router) { }

  ngOnInit() {
    console.log("ng on init***");
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
    })
  }

  login(submittedForm: FormGroup) {
    this.admin.password = submittedForm.value.password;
    this.admin.username = submittedForm.value.username;
        this.adminService.loginAdmin(this.admin).subscribe(data => {
          let admminResult = data as Admin;
          
          let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": admminResult.username ,
                "isAdmin": true
            }
        };
        localStorage.setItem('currentUser', JSON.stringify(admminResult));
        this.dataSharingService.isUserLoggedIn.next(true);
        this.router.navigate(['/profile'], navigationExtras);
        //this.router.navigate(['/profile'], navigationExtras);
  },  err => {
    console.log(err);
    this.errorMessage = 'user does not exist';
  });

}

}

