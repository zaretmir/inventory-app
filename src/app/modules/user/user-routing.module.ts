import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class UserRoutingModule { }
