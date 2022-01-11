import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  
  
  train:Train=new Train();

  constructor(private trainService: TrainService, private router: Router) { }

  ngOnInit(): void {
  }

  saveTrain(){
    this.trainService.addTrain(this.train).subscribe(
      data=>{
        console.log(data);
        this.gotoTrainList();
      },
      error => console.log(error));
  }
  gotoTrainList(){
    this.router.navigate(['/traindetails']);

  }
  onSubmit(){
    console.log(this.train);
    this.saveTrain();
    alert("Train Added Successfully");
    this.router.navigate(['/traindetails']);
}



}