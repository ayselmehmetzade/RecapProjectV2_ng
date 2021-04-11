import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/response';
import { ISingleResponseModel } from '../interfaces/single-response-model';
import { Iuser } from '../interfaces/user';
import { IUserPasswordUpdate } from '../interfaces/user-password-update';
import { IUserUpdate } from '../interfaces/user-update';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<Iuser> {

  constructor(protected http:HttpClient) {
    super(http, 'users')
   }

   getUserById(id: any): Observable<ISingleResponseModel<IUserUpdate>> {
    return this.httpClient.get<ISingleResponseModel<IUserUpdate>>(this.apiUrl + 'getbyid?id=' + id);
  }

   changeUserPassword(userPassword:IUserPasswordUpdate):Observable<IResponse>{
     let newPath=this.apiUrl+"changeuserpassword"
     return this.http.post<IResponse>(newPath,userPassword);
   }
}


