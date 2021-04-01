import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarImages } from '../interfaces/car-images';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarImagesService  extends BaseService<ICarImages>{

  constructor(protected http:HttpClient ) { 
    super(http, 'carimages')
  }
}
