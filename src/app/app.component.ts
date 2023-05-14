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
export class AppComponent{
  title = 'covidstatusupdate';
}
