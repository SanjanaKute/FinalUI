import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-delete-train',
  templateUrl: './delete-train.component.html',
  styleUrls: ['./delete-train.component.css']
})
export class DeleteTrainComponent implements OnInit {

  constructor(private trainService: TrainService, private router: Router) { }

  train:Train=new Train();
  ngOnInit(): void {
  }

  deleteTrain(trainid:string){
    this.trainService.deleteTrain(trainid).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
  
  onSubmit(){
    console.log(this.train);
    //this.deleteTrain('trainid');
    alert("Train Deleted Successfully");
    this.router.navigate(['/traindetails']);
}
}
