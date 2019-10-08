import { HangarsState } from './hangars.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hangar } from '../../interfaces/hangar';
import { map, tap } from 'rxjs/operators';
import * as HangarsActions from './hangars.actions';
import { Injectable } from '@angular/core';
import { HangarPage } from '../../interfaces/hangarPage';

@Injectable({providedIn: 'root'})
export class HangarsFacade {

  hangarsPage$: Observable<HangarPage>;

  constructor(private store: Store<HangarsState>) {
    this.hangarsPage$ = this.store.pipe(
      select('hangars'),
      map((hangarsState: HangarsState) => hangarsState.currentHangarPage)
    );
  }

  loadHangarsPage(page: number, items: number) {
    this.store.dispatch(new HangarsActions.LoadHangarsPage(page, items));
  }
}
