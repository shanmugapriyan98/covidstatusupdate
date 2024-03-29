import { Component } from '@angular/core';
import { Status } from '../Status';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from '../status.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusForm } from '../StatusForm';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-statusbwdates',
  templateUrl: './statusbwdates.component.html',
  styleUrls: ['./statusbwdates.component.scss']
})
export class StatusbwdatesComponent {

  public statusesList: Status[] = [];
  public isClicked : boolean = false;
  public statusForm!: FormGroup;
  public statusSubscription: Subscription = new Subscription;
  public datasource :any;

  displayedColumns =["date", "positive", "negative", "state"];

  constructor(private status: StatusService, private formBuilder: FormBuilder){
    this.datasource = new MatTableDataSource();
  };

  ngOnInit(): void {  
      this.statusForm = this.formBuilder.group({
        state: [null, [Validators.required, Validators.minLength(2)]],
        startDate: [null, Validators.required],
        endDate: [null, Validators.required]
      });
  }

  submit() {
    if (!this.statusForm.valid) { return; }
    this.statusSubscription = this.status.getStatusBetweenDates(this.statusForm.value as StatusForm).subscribe(
      {
        next: (response:Status[]) => {
          this.statusesList = response;
          this.isClicked= true;
          this.datasource.data = this.statusesList;
        },
        error: (error: HttpErrorResponse) => (alert(error.message)),
        complete: () => console.info('complete')
      });
  }

  ngOnDestroy(){
    this.statusSubscription.unsubscribe();
  }

  applyFilter(filterValue:string){
    this.datasource.filter = filterValue.trim().toUpperCase();
  }
}
