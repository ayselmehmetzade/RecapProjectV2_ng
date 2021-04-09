import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPayment } from '../interfaces/payment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends BaseService<IPayment> {

  constructor(protected http: HttpClient) {
    super(http,'payments')
   }
}
