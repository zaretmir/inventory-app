import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/core/models/user-profile';
import { AuthFacade } from 'src/app/core/state/auth/auth.facade';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userProfile$: Observable<UserProfile>;

  constructor(private facade: AuthFacade) {
    this.facade.loadUserProfile();
  }

  ngOnInit() {
    this.userProfile$ = this.facade.userProfile$;
  }

}
