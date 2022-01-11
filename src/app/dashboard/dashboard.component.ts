import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{BreakpointObserver} from '@angular/cdk/layout'
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  ticket:any
  user: User = new User();

  constructor(private router:Router, private observer: BreakpointObserver) { }
              

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
  ngOnInit(): void {
  }

  
  goto(pageName:String):void{
    this.router.navigate([`/book`])

  }

  goto1(pageName:String):void{
    this.router.navigate([`/delete`])

  }


}
