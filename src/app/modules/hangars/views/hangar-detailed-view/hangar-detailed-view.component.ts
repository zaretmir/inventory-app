import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar';
import { ProductExcerpt } from 'src/app/core/models/product-excerpt';
import { HangarsFacade } from 'src/app/core/state/hangars/hangars.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hangar-detailed-view',
  templateUrl: './hangar-detailed-view.component.html',
  styleUrls: ['./hangar-detailed-view.component.css']
})
export class HangarDetailedViewComponent implements OnInit {

  id: number;
  hangar$: Observable<Hangar>;
  hangar: Hangar;
  products: ProductExcerpt[];

  isReadOnly = false;

  isDataReady = false;
  loadProducts = false;

  constructor(private hangarsFacade: HangarsFacade) {
     this.hangar$ = this.hangarsFacade.selectedHangar$;
  }

  ngOnInit() {
  }

  onUpdate(hangar: Hangar) {
    hangar.id = this.hangar.id;
    this.hangarsFacade.updateHangar(hangar);
  }

  onLoadProducts() {
    console.log('load products');
    this.loadProducts = true;
  }


}
