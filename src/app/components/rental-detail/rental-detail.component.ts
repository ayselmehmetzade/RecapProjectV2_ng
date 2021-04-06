import { Component, Input, OnInit } from '@angular/core';
import { IRentalDetail } from 'src/app/interfaces/rental-detail';
import { MenuItem } from 'primeng/api';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  nowValue: Date;
  rentDate: Date;
  returnDate: Date;

  items: MenuItem[];

  minReturn: Date = new Date();


  constructor(public rentService: RentalDetailService) { }

  ngOnInit(): void {

    this.items = [
      { label: 'Rental Dates' },
      { label: 'Payment' }
    ];

    this.setData();
  }

  setData() {
    this.nowValue = new Date();
    this.rentDate = this.rentService.value ? this.rentService.value.rentDate : this.nowValue;
    this.returnDate = this.rentService.value ? this.rentService.value.returnDate : null;
  }

  ngOnChanges() {
    this.setData();
  }

  rentSelect(e: any) {
    let rentDate: Date = new Date(e);
    this.minReturn = rentDate;

    if (this.rentService.value.returnDate && this.rentService.value.returnDate.getTime() < rentDate.getTime()) {
      this.rentService.value.returnDate=rentDate;
    }
  }

}
