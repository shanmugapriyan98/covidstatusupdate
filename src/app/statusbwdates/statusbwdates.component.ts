import { Component } from '@angular/core';
import { Status } from '../Status';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from '../status.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusForm } from '../StatusForm';

@Component({
  selector: 'app-statusbwdates',
  templateUrl: './statusbwdates.component.html',
  styleUrls: ['./statusbwdates.component.scss']
})
export class StatusbwdatesComponent {
  public statusesList: Status[] = [];
  statusForm!: FormGroup;
  displayedColumns =["date", "positive", "negative", "state"];

  constructor(private status: StatusService, private formBuilder: FormBuilder){};

  ngOnInit(): void {  
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
}
