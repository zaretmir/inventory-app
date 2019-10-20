import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar';
import { HangarsFacade } from 'src/app/core/state/hangars/hangars.facade';
import { Observable } from 'rxjs';
import { StockFacade } from 'src/app/core/state/stock/stock.facade';
import { StockEntry } from 'src/app/core/models/stock-entry';
import { map } from 'rxjs/operators';
import { RouterFacade } from 'src/app/core/state/router/router.facade';
import { RouterStateUrl } from 'src/app/core/state/router/router.reducer';
import { RouterReducerState } from '@ngrx/router-store';

@Component({
  selector: 'app-hangar-detailed-view',
  templateUrl: './hangar-detailed-view.component.html',
  styleUrls: ['./hangar-detailed-view.component.css']
})
export class HangarDetailedViewComponent implements OnInit {

  id: number;
  hangar$: Observable<Hangar>;
  stockEntries$: Observable<StockEntry[]>;

  isReadOnly$: Observable<boolean>;

  constructor(
    private routerFacade: RouterFacade,
    private hangarsFacade: HangarsFacade,
    private stockFacade: StockFacade
    ) {
      this.hangar$ = this.hangarsFacade.preselectedHangar$;
      this.stockEntries$ = this.stockFacade.stockEntriesOfHangar$;
      this.isReadOnly$ = this.routerFacade.router$.pipe(
        map((reducerState: RouterReducerState<RouterStateUrl>) => reducerState.state.url),
        map((url) => !url.includes('edit'))
      );
  }

  ngOnInit() {
  }

  onUpdate(hangar: Hangar) {
    this.hangarsFacade.updateHangar(hangar);
  }

  onLoadProducts(hangarId: number) {
    console.log('load products');
    this.stockFacade.loadHangarStock(hangarId);
  }


}
