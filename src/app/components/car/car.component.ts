import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICar } from 'src/app/interfaces/car';
import { IRentalDetail } from 'src/app/interfaces/rental-detail';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalDetailService } from 'src/app/services/rental-detail.service';
import { CarOperationComponent } from '../car-operation/car-operation.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: ICar[] = [];
  brandOptions: any[] = [];
  colorOptions: any[] = [];
  test: any[] = [];
  @Output() carDetail = new EventEmitter<ICar>();

  constructor(private carService: CarService, public rentService: RentalDetailService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getAll().subscribe(response => {
      this.cars = response.data;
      this.brandOptions = [...new Set(this.cars.map(b => b.brandText))].map(x => {
        return { label: x, value: x }
      }).sort((a, b) => (a.label > b.label ? 1 : -1));
      this.colorOptions = [...new Set(this.cars.map(c => c.colorText))].map(x => {
        return { label: x, value: x }
      }).sort((a, b) => (a.label > b.label ? 1 : -1));
    });
  }

  getCarDetail(e: ICar) {
    this.carDetail.emit(e);
  }


  sendRent(e: ICar) {
    let rentDetail = <IRentalDetail>{
      carId: e.id
    }
    this.rentService.activeIndex = 0;
    this.rentService.value = rentDetail;
    this.rentService.isNew = true;
    this.rentService.isShow = true;
    this.rentService.car = e;
    this.rentService.checkFindeksScore(e.id);
  }
}