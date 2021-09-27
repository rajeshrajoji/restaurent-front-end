import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItemsService } from 'src/app/services/menu-items.service';

@Component({
  selector: 'app-menu-items-add',
  templateUrl: './menu-items-add.component.html',
  styleUrls: ['./menu-items-add.component.css']
})
export class MenuItemsAddComponent implements OnInit {
  courses: any;
  registerMenuItemForm: FormGroup | undefined;
  errorMessage!: string;
  successMessage!: string;

  constructor(private formBuilder: FormBuilder,
              public router: Router,
              public route: ActivatedRoute,
              public menuItemsService: MenuItemsService) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.registerMenuItemForm = this.formBuilder.group({
      name : new FormControl(),
      type: ['', Validators.required],
      price: ['', [Validators.required]],
    })
  }
  register(submittedForm: FormGroup) {
    console.log(" submittedForm.value::"+JSON.stringify(submittedForm.value));
    if(this.registerMenuItemForm?.valid) {
      this.menuItemsService.registerMenuItem(submittedForm.value).subscribe(data => {
            if (data) {
              this.errorMessage='';
              this.registerMenuItemForm?.reset();
              this.successMessage = "Registered Menu Item Successfully";
            }
        }, err => {
          console.log(err);
          this.errorMessage = 'error';
        }
      );
    }

  }
}