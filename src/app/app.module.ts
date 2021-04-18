import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { AppMenuTopComponent } from './app-menu.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';


import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import {CardModule} from 'primeng/card';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { StepsModule } from 'primeng/steps';
import {PanelModule} from 'primeng/panel';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';

import { RecapModule } from 'projects/recap/src/public-api';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserUpdateComponent } from './components/user-update/user-update.component';


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
    CarComponent,
    ColorComponent,
    RentalDetailComponent,
    AppMenuTopComponent,
    CarOperationComponent,
    LoginComponent,
    PaymentComponent,
    RegisterComponent,
    UserUpdateComponent
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
    PanelModule,
    TabViewModule,
    DividerModule,
    DropdownModule,
    MenuModule,
    GalleriaModule,
    RecapModule,
    ListboxModule,
    InputMaskModule,
    StepsModule,
    CalendarModule,
    DialogModule,
    CardModule,
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
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
