import { AuthState } from './auth.reducer';
import { Store } from '@ngrx/store';
import { LogIn, LoadProfile, UpdateProfile } from './auth.actions';
import { User } from '../../models/user';
import { UserProfile } from '../../models/user-profile';
import { Observable } from 'rxjs';
import { selectUserProfile, selectUsername } from './auth.selectors';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthFacade {

  username$: Observable<string>;
  userProfile$: Observable<UserProfile>;

  constructor(
    private store: Store<AuthState>
    ) {
      this.username$ = this.store.select(selectUsername);
      this.userProfile$ = this.store.select(selectUserProfile);
    }

  authenticate(user: User) {
    this.store.dispatch(new LogIn(user));
  }

  loadUserProfile() {
    this.store.dispatch(new LoadProfile());
  }

  updateUserProfile(data: UserProfile) {
    this.store.dispatch(new UpdateProfile(data));
  }
}
