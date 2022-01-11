import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log("form is submitted");
    if((this.credentials.username!='' && this.credentials.username!='')
          &&(this.credentials.username!=null && this.credentials.username!=null))
          {
            console.log("Submit the form");
            //token generate
            this.loginService.generateToken(this.credentials).subscribe(
              response=>{
                  console.log(response);
                  this.loginService.loginUser("token")
                  window.location.href="/dashboard"
                  
              },
              error=>{
                  console.log(error);
                  alert("Enter Valid Credentials");
                  
                  
              }
            )
          }
          else{
            console.log("Feilds are empty");
            alert("Feilds are empty")
            
          }
    
  }
}
