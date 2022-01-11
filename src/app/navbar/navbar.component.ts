import { Component, OnInit } from '@angular/core';
import { AdminloginService } from '../admin-services/adminlogin.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  public loggedInn=false;

  constructor(private loginService: LoginService, private adminloginService: AdminloginService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
    this.loggedInn=this.adminloginService.isLoggedInn()
  }

  logoutUser(){
    this.loginService.logout()
    location.reload()
  }

  //admin logout service
  logoutAdmin(){
    this.adminloginService.logout()
    location.reload()
  }
}
