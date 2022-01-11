import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url= "http://localhost:8286"

  constructor(private http:HttpClient) { }

  //calling server to generate the token
  
  generateToken(credentials:any){
    //token generate
    return this.http.post(`${this.url}/auth`,credentials)

  }

  //for login user
  loginUser(token: string){
    localStorage.setItem("token", token)
    return true;
  }
  //to check that user is loged in not
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }
    else
    {
      return true;
    }
  }
//logot the user
  logout(){
    localStorage.removeItem("token")
    return true;
  }

//getting token
getToken(){
  return localStorage.getItem("token")
}

}
