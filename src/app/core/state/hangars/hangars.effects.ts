import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { HangarsActionTypes, LoadHangarsPage, HangarsPageLoaded, AddHangar, HangarAdded, LoadHangar, SubmitHangar, UpdateHangar, HangarUpdated } from './hangars.actions';
import { HangarApiService } from '../../services/hangar-api.service';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Hangar } from '../../models/hangar';
import { HangarPage } from '../../models/hangarPage';
import { Router } from '@angular/router';
import { RootState } from '..';
import { selectStateUrl } from '../router/router.selectors';

@Injectable()
export class HangarsEffects {
  @Effect() loadHangar$: Observable<Action>
    = this.actions$.pipe(
      ofType(HangarsActionTypes.LOAD_HANGAR),
      switchMap((action: LoadHangar) =>
        this.hangarService
          .getHangarById(action.hangarId)
          .pipe(
            map((response: Hangar) => new HangarAdded(response)) // No necesito pasar por el reducer?
          ))
    );

  @Effect() loadHangarsPage$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.LOAD_HANGARS_PAGE),
        switchMap((action: LoadHangarsPage) =>
          this.hangarService
            .getHangarPage(action.page, action.items)
            .pipe(
              map((response: HangarPage) => new HangarsPageLoaded(response))
            ))
      );

  @Effect() addHangar$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.ADD_HANGAR),
        switchMap((action: AddHangar) =>
          this.hangarService
            .postHangar(action.hangar)
            .pipe(
              map((response: Hangar) => new HangarAdded(response))
            ))
      );

  @Effect() submitHangar$: Observable<Action>
    = this.actions$.pipe(
      ofType(HangarsActionTypes.SUBMIT_HANGAR),
      withLatestFrom(this.store.select('router', 'state', 'url')),
      map(([action, url]: [SubmitHangar, string]) => {
        console.log('inside effect');
        console.log(url);

        if (url.includes('edit')) {
          console.log('isEdit');
          return new UpdateHangar(action.hangar);
        }

        if (url.includes('add')) {
          console.log('isAdd');
          return new AddHangar(action.hangar);
        }
      })
    );


  @Effect() updateHangar$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.UPDATE_HANGAR),
        switchMap((action: UpdateHangar) =>
          this.hangarService
            .editHangar(action.hangar)
            .pipe(
              map((response: Hangar) => new HangarUpdated(response))
            ))
      );

  @Effect() hangarUpdateSuccess$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.UPDATE_HANGAR_SUCCESS),
        tap(() => this.router.navigateByUrl('/home'))
    );


  constructor(private hangarService: HangarApiService,
              private actions$: Actions,
              private store: Store<RootState>,
              private router: Router) { }

}
