import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AdminModule} from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { CustomerService } from './services/customer.service';
import { AuthService } from './services/auth.service';
import { DataSharingService } from './services/data-sharing.service';
import { CustomerModule } from './customer/customer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    CustomerModule
  ],
  exports: [MatIconModule],
  providers: [
    AuthService,
    CustomerService,
    DataSharingService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
