import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar';
import { HangarsFacade } from 'src/app/core/state/hangars/hangars.facade';
import { Observable } from 'rxjs';
import { RouterFacade } from 'src/app/core/state/router/router.facade';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from 'src/app/core/state/router/router.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hangar-form-view',
  templateUrl: './hangar-form-view.component.html',
  styleUrls: ['./hangar-form-view.component.css']
})
export class HangarFormViewComponent {

  id: number;
  hangar$: Observable<Hangar>;
  error$: Observable<any>;

  isReadOnly$: Observable<boolean>;
  isAddNew$: Observable<boolean>;

  constructor(
    private routerFacade: RouterFacade,
    private hangarsFacade: HangarsFacade
    ) {
      this.error$ = this.hangarsFacade.error$;
      this.hangar$ = this.hangarsFacade.preselectedHangar$;
      this.isAddNew$ = this.routerFacade.router$.pipe(
        map((reducerState: RouterReducerState<RouterStateUrl>) => reducerState.state.url),
        map((url) => url.includes('add'))
      );
      this.isReadOnly$ = this.routerFacade.router$.pipe(
        map((reducerState: RouterReducerState<RouterStateUrl>) => reducerState.state.url),
        map((url) => url.includes('details'))
      );
  }

  onSubmit(hangar: Hangar) {
    console.log('submit from view');
    this.hangarsFacade.submitHangarData(hangar);
    // TODO: Retrieve id and navigate to details
    // this.router.navigate(['/hangars/details', hangar.id]);
  }

}
