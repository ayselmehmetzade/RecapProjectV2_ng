import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar } from '../interfaces/car';
import { IRentalDetail } from '../interfaces/rental-detail';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService extends BaseService<IRentalDetail> {

  value:IRentalDetail;
  car:ICar;
  isNew:Boolean;
  isShow:Boolean;
  activeIndex:number=0;

  constructor(protected http:HttpClient) {
    super(http, 'rentals')
   }
}
