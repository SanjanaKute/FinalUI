import { Component, OnInit } from '@angular/core';
import { AdminloginService } from '../admin-services/adminlogin.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  credential={
    username:'',
    password:''
  }
  constructor(private adminloginservice: AdminloginService) { }

  ngOnInit(): void {
  }

  onSubmits(){
    //console.log("form is submitted");
    if((this.credential.username!='' && this.credential.username!='')
          &&(this.credential.username!=null && this.credential.username!=null))
          {
            console.log("Submit the form");
            //token generate
            this.adminloginservice.generateTokens(this.credential).subscribe(
              (response:any)=>{
                  console.log(response.tokens);
                  this.adminloginservice.loginadmin(response.tokens)
                  window.location.href="/admindash"
                  
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
