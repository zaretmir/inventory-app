import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockEntry } from 'src/app/core/models/stock-entry';
import { StockFacade } from 'src/app/core/state/stock/stock.facade';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-hangar-manage-view',
  templateUrl: './hangar-manage-view.component.html',
  styleUrls: ['./hangar-manage-view.component.scss']
})
export class HangarManageViewComponent implements OnInit {

  stockEntries$: Observable<StockEntry[]>;

  constructor(private stockFacade: StockFacade) { }

  ngOnInit() {
    this.stockFacade.loadHangarStockByRouteParam();
    this.stockEntries$ = this.stockFacade.stockEntries$;
  }

}
