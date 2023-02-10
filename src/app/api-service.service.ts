import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private BASE_URL : string = 'http://localhost:8080/api/';

  constructor( private httpClient: HttpClient ) { }

   
  getUsers():Observable<any>{
    return this.httpClient.get(this.BASE_URL+'users');
  }
  updateUsers(data:any):Observable<any>{
    return this.httpClient.post(this.BASE_URL+'updateUser',data);
  }
  deleteUsers(data:any):Observable<any>{
    return this.httpClient.post(this.BASE_URL+'deleteUser',{id: data});
  }
}
