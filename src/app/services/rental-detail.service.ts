import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRentalDetail } from '../interfaces/rental-detail';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService extends BaseService<IRentalDetail> {

  value:IRentalDetail;
  isNew:Boolean;
  isShow:Boolean;
  activeIndex:number=0;

  constructor(protected http:HttpClient) {
    super(http, 'rantals')
   }
}
