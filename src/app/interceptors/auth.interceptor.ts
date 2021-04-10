import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalstorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.localStorageService.getToken();
    let newRequest:HttpRequest<any>
    newRequest=request.clone({
      headers: request.headers.set("Authorization","Bearer " + token)
    }) 
    return next.handle(newRequest);
  }
}
