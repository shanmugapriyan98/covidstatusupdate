import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './Status';
import { StatusForm } from './StatusForm';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  
  constructor(private httpClient:HttpClient) { }

  getLastWeekStatus():Observable<Status[]>{
    return this.httpClient.get<Status[]>('http://localhost:8080/weekly');
  }

  getStatusBetweenDates(statusForm:StatusForm):Observable<Status[]>{
    return this.httpClient.post<Status[]>('http://localhost:8080/find', statusForm);
  }

}
