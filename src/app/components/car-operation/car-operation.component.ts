import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-car-operation',
  templateUrl: './car-operation.component.html',
  styleUrls: ['./car-operation.component.scss']
})
export class CarOperationComponent implements OnInit {

  activeIndex: number = 0;
  car: ICar;
  detailHeader: string = "";
  rentDetailShow:boolean;

  constructor(public rentService: RentalDetailService) { }

  ngOnInit(): void {
  }


  getCarDetail(e: ICar) {
    this.car = e;
    if (e) {
      this.tabChanges(1);
      this.activeIndex = 1;
    }
  }

  tabChanges(e: any) {
    this.detailHeader = e == 0 ? "" : "Car Detail";

  }
}
