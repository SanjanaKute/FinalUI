import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  url= "http://localhost:8286"

  constructor(private http:HttpClient) { }

  //register or subscribe user
  registerUser(credentials:any){
    
    return this.http.post(`${this.url}/subs`,credentials)

  }

  //for login user
  getCredentials(){
    
    return true;
  }

}
