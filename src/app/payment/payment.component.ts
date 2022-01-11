import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { LoginService } from '../services/login.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public loggedInn=false;

  payment:Payment=new Payment();
  
  constructor(private router: Router) { 
    
  } 
  ngOnInit(): void {
        

  }

  thankyou(){
    this.router.navigateByUrl('/thankyou')
  }
  
}
