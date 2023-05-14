import { Component, OnInit } from '@angular/core';
import { Status } from './Status';
import { StatusService } from './status.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusForm } from './StatusForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'covidstatusupdate';
  public statuses: Status[] = [];
  public statusesList: Status[] = [];
  statusForm!: FormGroup;

  constructor(private status: StatusService, private formBuilder: FormBuilder){};

  ngOnInit(): void {
      this.getWeeklyStatus();
      this.statusForm = this.formBuilder.group({
        state: [null, [Validators.required]],
        startDate: [null, Validators.required],
        endDate: [null, Validators.required]
      });
  }

  submit() {
    if (!this.statusForm.valid) {
      return;
    }
    this.status.getStatusBetweenDates(this.statusForm.value as StatusForm).subscribe(
      {
        next: (response:Status[]) => (this.statusesList = response),
        error: (error: HttpErrorResponse) => (alert(error.message)),
        complete: () => console.info('complete')
      });
  }


  public getWeeklyStatus(){
    this.status.getLastWeekStatus().subscribe(
      {
        next: (response:Status[]) => (this.statuses = response),
        error: (error: HttpErrorResponse) => (alert(error.message)),
        complete: () => console.info('complete')
      });
  }

}
