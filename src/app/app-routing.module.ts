import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarOperationComponent },
  { path: 'cars', component: CarOperationComponent },
  // { path: 'cars', component: CarComponent },
  { path: 'colors', component: ColorComponent },
  { path: 'customers', component: CustomerComponent},
  { path: 'brands', component: BrandComponent },
  { path: 'cardetails', component: CarDetailComponent },
  { path: 'rentaldetails', component: RentalDetailComponent },
  { path: 'carimages', component: CarImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
