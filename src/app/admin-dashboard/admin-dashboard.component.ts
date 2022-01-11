import { Component, OnInit } from '@angular/core';
import { TicketReservationDetailsService } from '../admin-services/ticket-reservation-details.service';
import { TicketReservation } from '../admin-services/ticketReservation';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  ticketreservation: TicketReservation[]=[]

  ticket:any;
  constructor(private ticketReservationService: TicketReservationDetailsService) { }

  ngOnInit(): void {
  }

  getTicketDetails(){
    this.ticketReservationService.getTicketDetails().subscribe(
      data =>{
        
        this.ticket=data;
        

      },
      error=>{
        console.log(error);
        

      }
    )

  }
}
