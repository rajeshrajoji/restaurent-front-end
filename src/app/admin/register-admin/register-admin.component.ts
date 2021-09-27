import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  admin: Admin = new Admin();
  errorMessage: string | undefined;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private adminService: AdminService,
    private authService: AuthService,
    private dataSharingService: DataSharingService,
    private router:Router) {}

  ngOnInit() {
    console.log("ng on init***");
    this.buildLoginForm()
  }
  
  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    })
  }
  
  registerAdmin(submittedForm: FormGroup) {
    this.admin.password = submittedForm.value.password;
    this.admin.username = submittedForm.value.username;
        this.adminService.registerAdmin(this.admin).subscribe(data => {
          let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": this.admin.username ,
                "isAdmin": true
            }
        };
        this.router.navigate(['/home'], navigationExtras);
    },  err => {
      console.log(err.errorMessage);
      this.errorMessage = "User Already Exists";
    });
  }

}
