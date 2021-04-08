import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFindeks } from '../interfaces/findeks';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FindeksService extends BaseService<IFindeks> {

  constructor(protected http: HttpClient) {
    super(http,'findeks')
   }
}
