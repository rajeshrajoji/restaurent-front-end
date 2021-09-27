import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ViewMenuItemsComponent } from './view-menu-items/view-menu-items.component';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
   // ViewMenuItemsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    CoreRoutingModule,
    BrowserModule
  ],
  exports:[CommonModule, BrowserModule]
})
export class CoreModule { }
