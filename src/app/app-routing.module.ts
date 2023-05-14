import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklystatusComponent } from './weeklystatus/weeklystatus.component';
import { StatusbwdatesComponent } from './statusbwdates/statusbwdates.component';

const routes: Routes = [
  {
    path: 'weekly',
    component: WeeklystatusComponent
  },
  {
    path: 'find',
    component: StatusbwdatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }