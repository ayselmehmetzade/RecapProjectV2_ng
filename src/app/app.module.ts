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
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { AppMenuTopComponent } from './app-menu.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';
import { JwtModule } from "@auth0/angular-jwt";


import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { ToastrModule } from 'ngx-toastr';
import { RecapModule } from 'projects/recap/src/public-api';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { StepsModule } from 'primeng/steps';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { AccordionModule } from 'primeng/accordion';




export function tokenGetter() {
  return localStorage.getItem("access_token");
}



@NgModule({
  declarations: [
    AppComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    BrandComponent,
    CarDetailComponent,
    CarImageComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    RentalDetailComponent,
    AppMenuTopComponent,
    CarOperationComponent,
    LoginComponent,
    PaymentComponent,
    RegisterComponent
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
    MultiSelectModule,
    TabViewModule,
    DividerModule,
    DropdownModule,
    MenuModule,
    AccordionModule,
    CardModule,
    GalleriaModule,
    RecapModule,
    PanelModule,
    ListboxModule,
    InputMaskModule,
    StepsModule,
    CalendarModule,
    DialogModule,
    CheckboxModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:4200/"]
      },
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
