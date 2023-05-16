import { Component } from '@angular/core';
import { Status } from '../Status';
import { StatusService } from '../status.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weeklystatus',
  templateUrl: './weeklystatus.component.html',
  styleUrls: ['./weeklystatus.component.scss']
})
export class WeeklystatusComponent {
  
  public isClicked : boolean = false;
  public statuses: Status[] = [];
  public statusSubscription: Subscription = new Subscription;
  
  displayedColumns =["date", "positive", "negative", "state"];
  
  constructor(private statusService: StatusService){}

  ngOnInit():void{
    this.getWeeklyStatus();
  }

  public getWeeklyStatus(){
    this.statusService.getLastWeekStatus().subscribe(
      {
        next: (response:Status[]) => {
          this.statuses = response;
          this.isClicked= true;
        },
        error: (error: HttpErrorResponse) => (alert(error.message)),
        complete: () => console.info('complete')
      });
  }

  ngOnDestroy(){
    this.statusSubscription.unsubscribe();
  }

}
