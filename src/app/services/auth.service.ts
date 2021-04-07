import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/login';
import { IRegister } from '../interfaces/register';
import { ISingleResponseModel } from '../interfaces/single-response-model';
import { ITokenModels } from '../interfaces/token-models';
import { Iuser } from '../interfaces/user';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  decodedTokenKey:any
  user:Iuser;

  apiUrl = environment.apiUrl +'Auth/'

  constructor(private httpClient:HttpClient, private localStorageService:LocalstorageService, private jwtHelper:JwtHelperService) { }

  login(login:ILogin):Observable<ISingleResponseModel<ITokenModels>>{
    let newPath = this.apiUrl +'login';
     return this.httpClient.post<ISingleResponseModel<ITokenModels>>(newPath,login);
  }

  register(register:IRegister):Observable<ISingleResponseModel<ITokenModels>>{
    let newPath = this.apiUrl +'register';
    return this.httpClient.post<ISingleResponseModel<ITokenModels>>(newPath,register);
  }

  decodedToken(token:any){
    return this.jwtHelper.decodeToken(token);
  }

  isAdmin(){
    let isAdmin=false;
    if(this.loggedIn()){
      this.user.roles?.map(role=>{
        if(role.toLocaleLowerCase().indexOf("admin")!== -1){
          isAdmin =true;
        }
      })
    }
    return isAdmin;
  }
  
  loggedIn(){
    if(this.localStorageService.getToken()){
      return this.jwtHelper.isTokenExpired();
    }
    else{
      return false;
    }
  }

  getUser(){
    let decodedToken = this.decodedToken(this.localStorageService.getToken())
    if(decodedToken){
      if(this.loggedIn()){
        let tokenInfonName = Object.keys(decodedToken).filter(x=> x.endsWith('/name'))[0]
        let userName = String(decodedToken[tokenInfonName])

        let tokenInfoId= Object.keys(decodedToken).filter(x=> x.endsWith('/nameidentifier'))[0]
        let userId= Number(decodedToken[tokenInfoId]);

        let claimInfo = Object.keys(decodedToken).filter(x=> x.endsWith('/role'))[0]
        let roles= decodedToken[claimInfo];

        let emailInfo= decodedToken.email; 

        this.user={
          userId:userId,
          userName : userName,
          email:emailInfo,
          roles:roles
        }
      }
    }
    return this.user;
  }



}
