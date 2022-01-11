import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from './train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  private baseURL = "http://localhost:8002/train/showAllTrains"
  

  constructor(private httpClient: HttpClient) { }

  getTrainList(): Observable<Train[]>{
    return this.httpClient.get<Train[]>(`${this.baseURL}`);
  }

  getTrainByStartStation(): Observable<Train[]>{
    return this.httpClient.get<Train[]>(`localhost:8002/train/findtrainByStartStation/`)
  }

  addTrain(train:Train): Observable<Object> {

    return this.httpClient.post(`http://localhost:8002/train/addTrain`,train);

  }

  deleteTrain(trainid:String): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8002/train/delete/${trainid}`+trainid,{responseType:'text'});
  }


  
}


