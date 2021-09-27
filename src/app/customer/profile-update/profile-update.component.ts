import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerModule } from '../customer.module';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  errorMessage: string | undefined;
  updateForm!: FormGroup;
  customer: Customer = new Customer();

  constructor(private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private authService: AuthService,
    private dataSharingService: DataSharingService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    console.log("ng on init***");    
    this.buildLoginForm()
  }

  buildLoginForm() {
    let username = this.route.snapshot.queryParamMap.get('username');
    this.updateForm = this.formBuilder.group({
      username: [username, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    })

  }
  update(submittedForm: FormGroup) {
    if(!submittedForm.invalid) {
      this.customer.password = submittedForm.value.password;
      this.customer.username = submittedForm.value.username;
      console.log("update details ::"+this.customer.password+"pwd:"+this.customer.username);
      this.customerService.updateCustomer(this.customer);
  
      let navigationExtras: NavigationExtras = {
        queryParams: {
            "isProfileUpdate": true,
            "password": this.customer.password,
            "username": this.customer.username ,
        }
      };
      console.log("ProfileComponent is called");
      this.router.navigate(['/profile'], navigationExtras)
    }
    
    
  }



}
