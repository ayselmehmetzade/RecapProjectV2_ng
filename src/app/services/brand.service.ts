import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../interfaces/brand';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends BaseService<IBrand>{

  constructor(protected http:HttpClient) {
    super(http, 'brands')
   }
}
