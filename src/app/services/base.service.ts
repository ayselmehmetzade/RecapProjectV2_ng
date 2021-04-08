import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IListResponse } from '../interfaces/list-response';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  serverUrl: string = environment.apiUrl;
  apiUrl: string = "";

  constructor(protected httpClient: HttpClient, protected serviceUrl: string) {
    this.apiUrl = this.serverUrl + serviceUrl + '/';
  }

  addItem(item: T): Observable<IListResponse<T>> {
    return this.httpClient.post<IListResponse<T>>(this.apiUrl + 'add', item);
  }

  getAll(): Observable<IListResponse<T>> {
    return this.httpClient.get<IListResponse<T>>(this.apiUrl + 'getall');
  }

  getById(id: any): Observable<IListResponse<T>> {
    return this.httpClient.get<IListResponse<T>>(this.apiUrl + id);
  }

  delete(item:T): Observable<IListResponse<T>> {
    return this.httpClient.post<IListResponse<T>>(this.apiUrl+'delete',item);
  }

  update(item: T): Observable<IListResponse<T>> {
    return this.httpClient.post<IListResponse<T>>(this.apiUrl+'update',item);
  }

}
