import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarImages } from '../interfaces/car-images';
import { IListResponse } from '../interfaces/list-response';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CarImagesService  extends BaseService<ICarImages>{

  constructor(protected http:HttpClient ) { 
    super(http, 'carimages')
  }


  getImagesByCarId(carId:number):Observable<IListResponse<ICarImages>>{
    return this.http.get<IListResponse<ICarImages>>(this.apiUrl+ 'getbycarid/' + carId);
  }
}
