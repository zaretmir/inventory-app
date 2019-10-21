import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileFormComponent } from './components/user-profile-form/user-profile-form.component';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [UserProfileFormComponent, UserDashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
