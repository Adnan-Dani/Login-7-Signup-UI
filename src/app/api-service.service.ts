import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private BASE_URL : string = 'http://localhost:8080/api/';

  constructor( private httpClient: HttpClient ) { }

  getUsers(){
    return this.httpClient.get(this.BASE_URL+'users');
  }
}
