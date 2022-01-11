import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  url="http://localhost:8682"

  constructor(private http:HttpClient) { }

  //calling server
  generateTokens(credential:any){
    //token generate
    return this.http.post(`${this.url}/auth`,credential)

  }

  //for login admin
  loginadmin(tokens: string)
  {
    localStorage.setItem("tokens",tokens)
    return true;
  }

  isLoggedInn(){
    let tokens=localStorage.getItem("tokens");
    if(tokens==undefined || tokens==='' || tokens==null){
      return false;
    }
    else
    {
      return true;
    }
  }
  //logot the admin
  logout(){
    localStorage.removeItem("tokens")
    return true;
  }

//getting token
getToken(){
  return localStorage.getItem("tokens")
}
}
