import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarDetailFilterPipe } from './pipes/car-detail-filter.pipe';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { AppMenuTopComponent } from './app-menu.component';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [
    AppComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CarDetailFilterPipe,
    BrandComponent,
    CarDetailComponent,
    CarImageComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    RentalDetailComponent,
    AppMenuTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    MultiSelectModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
