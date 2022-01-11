import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserBookingService {

  constructor(private http:HttpClient) { }
  public doBooking(user: User){
    return this.http.post("http://localhost:8000/ticket-reservation-service/reserve/addTicket",user,{responseType:'text' as 'json'})
  }
}


