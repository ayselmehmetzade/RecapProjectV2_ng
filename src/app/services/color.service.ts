import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IColor } from '../interfaces/color';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ColorService extends BaseService<IColor> {

  constructor(protected http:HttpClient) { 
    super(http, 'colors')
  }
}
