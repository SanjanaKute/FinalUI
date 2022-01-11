import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketReservationDetailsService } from '../admin-services/ticket-reservation-details.service';
import { User } from '../user';
import{BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  user: User = new User();
  sidenav: any;
  
  constructor(private ticketReservationSeevice: TicketReservationDetailsService,
              private router:Router, private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches){
        this.sidenav.mode ='over';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
  }
  saveTicket(){
    this.ticketReservationSeevice.bookTicket(this.user).subscribe(
      data =>{
         console.log(data);
         this.gotoPaymentOption();     
      },
      error => console.log(error));
  }
 
  gotoPaymentOption(){
    //this.router.navigate(['/payment']);
    this.router.navigate(['/payment']);

  }
  onSubmit(){
    console.log(this.user);
    this.saveTicket();
    
  }
}
