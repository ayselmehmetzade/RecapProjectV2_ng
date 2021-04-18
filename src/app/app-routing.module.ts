import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { ColorComponent } from './components/color/color.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'cars', component: CarOperationComponent },
  { path: 'colors', component: ColorComponent,canActivate:[LoginGuard] },
  { path:'user/update', component:UserUpdateComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'brands', component: BrandComponent, canActivate:[LoginGuard] },
  { path: 'cardetails', component: CarDetailComponent },
  { path: 'rentaldetails', component: RentalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
