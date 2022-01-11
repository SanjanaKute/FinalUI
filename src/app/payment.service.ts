import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL = "http://localhost:8084"


  constructor(private http:HttpClient) { }

  makePayment(pay:Payment) :Observable<Object>{

      return this.http.post(`http://localhost:8084/payment`,pay);

  }


}
