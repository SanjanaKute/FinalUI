import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  [x: string]: any;
  
  BaseUrl!: "http://localhost:9090";

  constructor(private http:HttpClient) { }
  
  makepayment(){
    return this.http.get(`${this.BaseUrl}`)
  }
  
}
