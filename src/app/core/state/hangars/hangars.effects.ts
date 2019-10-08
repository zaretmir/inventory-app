import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { HangarsActionTypes, LoadHangarsPage, HangarsPageLoaded } from './hangars.actions';
import { HangarApiService } from '../../services/hangar-api.service';
import { map, switchMap } from 'rxjs/operators';
import { Hangar } from '../../interfaces/hangar';
import { HangarPage } from '../../interfaces/hangarPage';

@Injectable({ providedIn: 'root'})
export class HangarsEffects {
  @Effect() loadHangarsPage$: Observable<Action>
    = this.actions$.pipe(
      ofType(HangarsActionTypes.LoadHangarsPage),
      switchMap((action: LoadHangarsPage) =>
        this.hangarService
          .getHangarPage(action.page, action.items)
          .pipe(
            map((response: HangarPage) => new HangarsPageLoaded(response))
          ))
    );


  constructor(private hangarService: HangarApiService,
              private actions$: Actions) { }

}
