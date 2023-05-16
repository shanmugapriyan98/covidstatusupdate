import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusService } from './status.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import 'hammerjs';
import { WeeklystatusComponent } from './weeklystatus/weeklystatus.component';
import { StatusbwdatesComponent } from './statusbwdates/statusbwdates.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    WeeklystatusComponent,
    StatusbwdatesComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatCardModule
  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
