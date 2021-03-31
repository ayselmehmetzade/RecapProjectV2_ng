import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar } from '../interfaces/car';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService<ICar> {

  constructor(protected http: HttpClient) {
    super(http, 'cars')
  }
}
