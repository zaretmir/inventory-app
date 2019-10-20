import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router.reducer';
import { Observable } from 'rxjs';
import { selectRouterState } from './router.selectors';

@Injectable({providedIn: 'root'})
export class RouterFacade {

  router$: Observable<RouterReducerState<RouterStateUrl>>;

  constructor(private store: Store<RouterReducerState<RouterStateUrl>>) {
    this.router$ = this.store.select(selectRouterState);
  }

}
