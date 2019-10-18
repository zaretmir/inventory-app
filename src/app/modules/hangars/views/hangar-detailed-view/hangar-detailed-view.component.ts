import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar';
import { HangarsFacade } from 'src/app/core/state/hangars/hangars.facade';
import { Observable } from 'rxjs';
import { StockFacade } from 'src/app/core/state/stock/stock.facade';
import { StockEntry } from 'src/app/core/models/stock-entry';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hangar-detailed-view',
  templateUrl: './hangar-detailed-view.component.html',
  styleUrls: ['./hangar-detailed-view.component.css']
})
export class HangarDetailedViewComponent implements OnInit {

  id: number;
  hangar$: Observable<Hangar>;
  hangar: Hangar;
  hangarId: number;
  stockEntries$: Observable<StockEntry[]>;

  isReadOnly = false;


  constructor(
    private hangarsFacade: HangarsFacade,
    private stockFacade: StockFacade,
    private route: ActivatedRoute) {
      this.hangarId = +this.route.snapshot.params.hangarid; // Cambiar esto
      this.hangar$ = this.hangarsFacade.selectedHangar$;
      this.stockEntries$ = this.stockFacade.stockEntriesOfHangar$;
  }

  ngOnInit() {
  }

  onUpdate(hangar: Hangar) {
    hangar.id = this.hangar.id;
    this.hangarsFacade.updateHangar(hangar);
  }

  onLoadProducts() {
    console.log('load products');
    this.stockFacade.setSelectedHangar(this.hangarId);
    this.stockFacade.loadHangarStock(this.hangarId);
  }


}
