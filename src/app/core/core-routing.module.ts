import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { ViewMenuItemsComponent } from './view-menu-items/view-menu-items.component';
import {MatIconModule} from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDividerModule} from '@angular/material/divider';

const routes: Routes = [ ];
  //{ path: 'menuItems', component: ViewMenuItemsComponent} ];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild( routes ), 
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule ],
    
    exports: [
      BrowserModule,
      MatExpansionModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      MatTabsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatDividerModule,
      MatToolbarModule,
      MatIconModule], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreRoutingModule { }
