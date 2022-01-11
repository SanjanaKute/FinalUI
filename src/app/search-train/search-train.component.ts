import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrls: ['./search-train.component.css']
})
export class SearchTrainComponent implements OnInit {
  trains: Train[] = [];
  searchInput:Train= {trainid:'',trainName:'',startStation: '',endStation:'' };
  constructor(private trainService: TrainService ) { }

  ngOnInit(): void {
    this.getTrain();
  }
  private getTrain(){
    this.trainService.getTrainList().subscribe(data => {
      this.trains= data;
    });
  }

  getTrainByStartStation(){
    this.trainService.getTrainByStartStation().subscribe(data => {
      this.trains=data;
    });
  }

  sort(headerName:String){
    this.searchInput;

  }
  onSubmit(){
    console.log(this.trains);
    this.getTrainByStartStation();
    
  }
}
