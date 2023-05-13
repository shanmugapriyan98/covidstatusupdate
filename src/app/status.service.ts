import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './Status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  
  constructor(private httpClient:HttpClient) { }

  getLastWeekStatus():Observable<Status[]>{
    return this.httpClient.get<Status[]>('http://localhost:8080/weekly');
  }

}
