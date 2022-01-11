import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketReservationDetailsService } from '../admin-services/ticket-reservation-details.service';
import{BreakpointObserver} from '@angular/cdk/layout'
import { User } from '../user';

@Component({
  selector: 'app-delete-registration',
  templateUrl: './delete-registration.component.html',
  styleUrls: ['./delete-registration.component.css']
})
export class DeleteRegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private ticketReservationSeevice: TicketReservationDetailsService,
    private router:Router, private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  deleteReservation(id:string){
    this.ticketReservationSeevice.deleteTicket(id).subscribe(
      data => {
        console.log(data);
      }
    )
  }
  
  gotohome(pageName:String):void{
    this.router.navigate([`/home`])

  }
  onSubmit1(){
    console.log(this.user);
    this.deleteReservation('id');
      alert("Reservation Deleted Successfully")

  };

}
