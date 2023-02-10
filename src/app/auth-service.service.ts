import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private BASE_URL : string = 'http://localhost:8080/api/';

  constructor( private httpClient: HttpClient ) { }

  
  login(data:any):Observable<any>{
    console.log(data);
    return this.httpClient.post(this.BASE_URL+'auth',data);
  }
}
