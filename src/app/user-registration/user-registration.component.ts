import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../services/user-register.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  credentials={
    username:'',
    password:''
  }
  constructor(private userRegistrationService: UserRegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log("form is submitted");
    if((this.credentials.username!='' && this.credentials.username!='')
          &&(this.credentials.username!=null && this.credentials.username!=null))
          {
            console.log("Submit the form");

            //token generate
            this.userRegistrationService.registerUser(this.credentials).subscribe(
              response=>{
                  console.log(response);
                  this.userRegistrationService.getCredentials()
                  alert("User Registered Successfully")
                  window.location.href="/signup"
                  
              },
              error=>{
                  console.log(error);
                  
                  
              }
            )
          }
          else{
            console.log("Feilds are empty");
            alert("Feilds cannot be empty")
            
          }
    
  } 
  }

