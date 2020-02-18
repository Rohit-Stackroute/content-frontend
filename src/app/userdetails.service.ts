import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserdetails } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  public urlLink = 'http://localhost:8080/api/v1/content?objectid=';
  constructor(private http: HttpClient) { }
  getdetails(content_id):Observable<Object>{
    return this.http.get<Object>(this.urlLink + content_id);
   
  }
}