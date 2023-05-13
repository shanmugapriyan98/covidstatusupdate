import { Component, OnInit } from '@angular/core';
import { Status } from './Status';
import { StatusService } from './status.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'covidstatusupdate';
  public statuses: Status[] = [];

  constructor(private status: StatusService){};

  ngOnInit(): void {
      this.getWeeklyStatus();
  }

  public getWeeklyStatus(){
    this.status.getLastWeekStatus().subscribe(
      (response:Status[]) => {
      this.statuses = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }

}
