import { AuthState } from './auth.reducer';
import { Store } from '@ngrx/store';
import { LogIn } from './auth.actions';
import { User } from '../../models/user';

export class AuthFacade {
  constructor(
    private store: Store<AuthState>
    ) {}

  authenticate(user: User) {
    this.store.dispatch(new LogIn(user));
  }
}
