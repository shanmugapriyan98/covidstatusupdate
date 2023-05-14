import { Component } from '@angular/core';
import { Status } from '../Status';
import { StatusService } from '../status.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weeklystatus',
  templateUrl: './weeklystatus.component.html',
  styleUrls: ['./weeklystatus.component.scss']
})
export class WeeklystatusComponent {

  public statuses: Status[] = [];
  displayedColumns =["date", "positive", "negative", "state"];
  
  constructor(private statusService: StatusService){}

  ngOnInit():void{
    this.getWeeklyStatus();
  }

  public getWeeklyStatus(){
    this.statusService.getLastWeekStatus().subscribe(
      {
        next: (response:Status[]) => (this.statuses = response),
        error: (error: HttpErrorResponse) => (alert(error.message)),
        complete: () => console.info('complete')
      });
  }

}
